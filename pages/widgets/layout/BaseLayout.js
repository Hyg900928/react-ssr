import React from 'react'
import { Provider } from 'mobx-react'
import { Layout } from 'antd'
import { initRootStore } from 'STORE/RootStore'
import DevTools from 'mobx-react-devtools'
import Header from 'WIDGETS/Header'

const { Content } = Layout

class BaseLayout extends React.Component {

    static getInitialProps({ req, query }) {
        // console.log('query', query)
        const isServer = !!req
        return { isServer }
    }
    constructor(props) {
        super(props)
        this.rootStore = initRootStore(props.isServer)
    }
    render() {
        const { router } = this.props
        const headerProps = {
            selectedKeys: router.query['key'] ? [router.query['key']] : ['home']
        }
        return (
            <Provider rootStore={this.rootStore}>
                <div>
                    <Layout>
                        <Header { ...headerProps } />
                        <Content style={{ padding: '0 50px', minHeight: 300}}>
                           <div style={{ padding: 24, background: '#fff', minHeight: 300 }}>{this.props.children}</div>
                        </Content>
                    </Layout>
                   
                    {__DEV__ === true ? <DevTools /> : null}
                </div>
            </Provider>
        )
    }

}


export default BaseLayout