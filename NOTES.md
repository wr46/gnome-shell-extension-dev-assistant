# Instructions & Notes

## Create Gnome Extension template
```bash
$ gnome-shell-extension-tool --create-extension
```

## Useful notes for development

### Restart Gnome Extensions

1. Open "Run Command" panel using **Alt+F2**
2. Type "**r**" and hit **Enter**

### See Extensions Info
1. Open "Run Command" panel using **Alt+F2**
2. Type "**lg**" and hit **Enter**
3. Select **Extensions** tab (Top Right)

### Check TaskBar objects info
1. Open "Run Command" panel using **Alt+F2**
2. Type "**lg**" and hit **Enter**
3. Select **Picker** (Top Letf)

### Check data structure using **dconf**
1. Open **dconf Editor**
2. Select **org**
3. Select **gnome** 
4. Select **shell** 
5. Select **extensions**

### View Extension logs
```bash
$ journalctl -f -o cat /usr/bin/gnome-shell
```

### Compile schema xml file on extension root folder
```bash
$ glib-compile-schemas schemas
```

### Terminal code test
```bash
$ gjs-console
```

### Icons path used for extension Icon
Replace the place holder **?** to your use case
```bash
$ /usr/share/icons/?/scalable/?
```