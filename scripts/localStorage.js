const localStorage = window.localStorage;

export default class LocalStorage {// لایه برای کار کردن با local storage.
    static setItem(key, value) {
        LocalStorage.removeItem(key);
        return localStorage.setItem(key, value);
    }

    static getItem(key) {
        return localStorage.getItem(key);
    }

    static removeItem(...keys) {
        for(const key of keys) {
            localStorage.removeItem(key);
        }
    }

    static clear() {
        return localStorage.clear();
    }
}