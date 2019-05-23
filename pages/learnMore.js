import React from 'react'
import fetch from 'isomorphic-fetch'
import Api from 'API/example'
import { inject, observer} from 'mobx-react'


@inject('rootStore')
@observer
class LearnMore extends React.Component {
    static async getInitialProps() {
        // 服务端渲染
      const res = await Api.getArticles()
      const articleList = res.data
      return { articleList }
    }
    renderItem(item) {
        return (
            <div key={item._id}>
                <h2>{ item.title}</h2>
                <div dangerouslySetInnerHTML={{ __html: item.content }}></div>
            </div>
        )
    }
    render() {
        const { articleList } = this.props
        return (
            <div>
                学习猿地
            </div>
        )
    }
}

export default LearnMore