const storage = {

    setUserDatas: (datas, key) => {
        sessionStorage.setItem(key, JSON.stringify(datas))
    },

    getUserDatas: (key) => {

        const userData = sessionStorage.getItem(key)

        if (userData) {

            const parseDataLogin = JSON.parse(userData)

            return parseDataLogin
        }
    },

    deleteUserAndDatas: (key) => {
        sessionStorage.removeItem(key)
    }
}

export default storage