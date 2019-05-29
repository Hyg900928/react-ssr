import React from 'react'
import { Menu, Layout, Row, Col } from 'antd'
import Link from 'next/link'
import NextRouter from 'next/router'
import styles from './index.scss'

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const { Header } = Layout

class CommonHeader extends React.Component {
    state = {
        current: 'home'
    }
    handleClick = e => {
        const pathname = e.item.props.href
        const key = e.key
        // console.log('click ', e.item.props);
        NextRouter.push({
            pathname: pathname,
            query: {
                key: e.key
            }
        })
    }
    render() {
        const { selectedKeys } = this.props
        return (
            <Header className={styles.header}>
                <Row type='flex' justify='space-between'>
                    <Col>
                        <div style={{ fontSize: 18 }}>
                            Gavin的博客
                        </div>
                    </Col>
                    <Col>
                        <Menu selectedKeys={selectedKeys} mode="horizontal" theme="light" style={{ lineHeight: '64px' }}>
                            <Menu.Item key="home">
                                <Link href='/'><a>首页</a></Link>
                            </Menu.Item>
                            <Menu.Item key="article">
                                <Link href='/articles'><a>文章</a></Link>
                            </Menu.Item>

                            <Menu.Item key="learn">
                                <Link href='/learn'><a>学习猿地</a></Link>
                            </Menu.Item>
                        </Menu>
                    </Col>
                </Row>
            </Header>
        )
    }
}
export default CommonHeader