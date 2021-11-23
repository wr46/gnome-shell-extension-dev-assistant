const GETTEXT_DOMAIN = 'dev-assistant-extension';

const { GObject, St } = imports.gi;

const Gettext = imports.gettext.domain(GETTEXT_DOMAIN);
const _ = Gettext.gettext;

const ExtensionUtils = imports.misc.extensionUtils;
const Main = imports.ui.main;
const PanelMenu = imports.ui.panelMenu;
const PopupMenu = imports.ui.popupMenu;

const Indicator = GObject.registerClass(
    class Indicator extends PanelMenu.Button {
        _init() {
            super._init(0.0, _('Developer Assistant'));

            let box = new St.BoxLayout({ style_class: 'panel-status-menu-box' });
            box.add_child(new St.Icon({
                icon_name: 'preferences-desktop-remote-desktop-symbolic',
                style_class: 'system-status-icon',
            }));
            this.add_child(box);

            let item = new PopupMenu.PopupMenuItem(_('Show Notification'));
            item.connect('activate', () => {
                Main.notify(_('It works?'));
            });
            this.menu.addMenuItem(item);
        }
    }
);

class Extension {
    constructor(uuid) {
        this._uuid = uuid;
        ExtensionUtils.initTranslations(GETTEXT_DOMAIN);
    }

    enable() {
        this._indicator = new Indicator();
        Main.panel.addToStatusArea(this._uuid, this._indicator);
    }

    disable() {
        this._indicator.destroy();
        this._indicator = null;
    }
}

function init(meta) {
    return new Extension(meta.uuid);
}