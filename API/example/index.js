import HttpRequest from 'UTILS/HttpRequest'
import hosts from 'CONFIG/hosts'

let API = {
    getUserInfo: async (params) => {
        return await HttpRequest.GET({
            url: `http://ns.chaojita.cn/api/user/getUserInfo`,
            params: {
                userId: "100230"
            }
        })
    },
    changeUserInfo: async (params) => {
        return await HttpRequest.GET({
            url: `http://ns.chaojita.cn/api/user/getUserInfo`,
            params: {
                userId: "100231"
            }
        })
    },
    getArticles: async (params) => {
        return await HttpRequest.GET({
            url: `${hosts.api}/api/v1/articles`
        })
        
    },
    getArticleInfo: async (params) => {
        return await HttpRequest.GET({
            url: `${hosts.api}/api/v1/article/${params.id}`
        })
    }
}

export default API