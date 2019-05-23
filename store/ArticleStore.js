import { action, observable } from 'mobx'
import Api from 'API/example'

class ArticleStore {
    @observable articles = []
    constructor(rootStore) {
        this.rootStore = rootStore
    }
    @action('ArticleStore')
    getArticleList = async () => {
        try {
            const res = await Api.getArticles()
            // console.log(res)
        } catch (error) {
            console.log(error)
        }
    }
   
}

export default ArticleStore