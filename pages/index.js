import React, { useState } from 'react'
import { Button } from 'antd'
import Api from 'API/example'
import { inject, observer} from 'mobx-react'


// @inject('rootStore')
// @observer
// class Index extends React.Component {
//     static async getInitialProps() {
//         // 服务端渲染
//       const res = await Api.getArticles()
//       const articleList = res.data
//       return { articleList }
//     }
    
//     render() {
//         const { articleList } = this.props
//         return (
//             <div>
//                 首页
//             </div>
//         )
//     }
// }

const Index = inject('rootStore')(observer((props) => {
    // console.log(props)
    // const [count, setCount] = useState(0)

    return (
        <div>
            <p>11111</p>
            {/* <Button type='primary' onClick={() => setCount(count + 1)}>点击</Button> */}
        </div>
    )
}))

export default Index