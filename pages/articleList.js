import React from 'react'
import fetch from 'isomorphic-fetch'
import Link from 'next/link'
import Api from 'API/example'
import { inject, observer} from 'mobx-react'


@inject('rootStore')
@observer
class ArticleList extends React.Component {
    static async getInitialProps({ query }) {
        // 服务端渲染
      const res = await Api.getArticles()
      const articleList = res.data
      return { articleList }
    }
    renderItem(item) {
        return (
            <div key={item._id}>
                <h2>
                    <Link href={`/articles/${item._id}`}>
                        <a>{ item.title}</a>
                    </Link>
                </h2>
                {/* <div dangerouslySetInnerHTML={{ __html: item.content }}></div> */}
            </div>
        )
    }
    render() {
        const { articleList } = this.props
        return (
            <div>
                {articleList.map(el => {
                    return this.renderItem(el)
                })}
            </div>
        )
    }
}

export default ArticleList