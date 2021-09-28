const store = window.sessionStorage

class LocalStore {
    static set(key, value) {
        if (!store) return
        let val = value
        try {
            if (typeof val === 'object') {
                val = JSON.stringify(val)
            }
            store.setItem(key, val)
        } catch (error) {
            //catch error
        }
    }
    static get(key) {
        if (!store) return
        return store.getItem(key)
    }
    static get2Json(key) {
        if (!store) return
        const data = store.getItem(key)
        if (data) {
            try {
                return JSON.parse(data)
            } catch (error) {
                //catch error
            }
        }
        return null
    }
    static remove(key) {
        if (!store) return
        try {
            return store.removeItem(key)
        } catch (error) {
            //catch error
        }
    }
}


export default LocalStore