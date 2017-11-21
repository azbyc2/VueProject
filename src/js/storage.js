export default {
    // localStorage.setItem的封装
    set(key, val) {
        localStorage.setItem(key, JSON.stringify(val));
    },

    // localStorage.getItem的封装
    get(key) {
        let val = localStorage.getItem(key)
        // 现尝试解析数据，成功则返回解析后的值，不成功则原向返回
        try {
            // 不可预料
            val = JSON.parse(val)
        } finally {
            return val;
        }

    },
    // 清除localstorage
    clean(){
        localStorage.clear();
    }
}