import React from 'react'
import Head from 'next/head'
import Api from 'API/example'
import { inject, observer} from 'mobx-react'


@inject('rootStore')
@observer
class ArticleDetail extends React.Component {
    static async getInitialProps({ query }) {
        const { articleId } = query
        // 服务端渲染
      const res = await Api.getArticleInfo({id: articleId })
      let articelInfo = null
      if(res.code === 0) {
        articelInfo = res.data
      }
      
      return { articleId, articelInfo }
    }
    render() {
        const { articelInfo } = this.props
        return articelInfo ? (
            <div>
                <Head>
                    <title>文章详情</title>
                </Head>
                <h2 style={{ textAlign: 'center'}}> { articelInfo.title } </h2>
                <div dangerouslySetInnerHTML={{ __html: articelInfo.content }}></div>
            </div>
        )
        :
        null
    }
}

export default ArticleDetail