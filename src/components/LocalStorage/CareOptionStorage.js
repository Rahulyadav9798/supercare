export default function careOptionStorage(key, val, storageKey = "child_registration") {
    let config = localStorage.getItem(storageKey);

    if (config) {
        let configArray = JSON.parse(config);
        configArray[key] = val;
        localStorage.setItem(storageKey, JSON.stringify(configArray));
    } else {
        let configArray = {};
        configArray[key] = val;
        localStorage.setItem(storageKey, JSON.stringify(configArray));
    }
}

// addStorageOption("f_nameo", "rahul fgfg", "parent_registration");
