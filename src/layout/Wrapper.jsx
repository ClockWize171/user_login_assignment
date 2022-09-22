import React, { useState } from 'react';
import { UploadOutlined, UserOutlined, VideoCameraOutlined, FacebookOutlined } from '@ant-design/icons';
import { Layout, Menu, Button, Tooltip } from 'antd';
import { red } from '@ant-design/colors';
import { useNavigate } from 'react-router-dom';
import { Home } from '../pages';
import './Wrapper.css'

const { Header, Content, Sider } = Layout;

const Wrapper = () => {
    const navigate = useNavigate()
    const [dark, setDark] = useState(false);

    const handleDark = () => {
        setDark(!dark)
    }

    const items = [
        { label: 'Home', key: 'home-1' },
    ];

    // Logout with login value false
    const handleLogout = () => {
        navigate('/')
        localStorage.setItem('Login', false)
    }

    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Sider
                theme={dark ? "dark" : "light"}
                breakpoint="lg"
                collapsedWidth="0">
                <div
                    className="logo"
                    style={{ background: dark ? "#fff" : "#0c263f" }} />
                <Menu
                    theme={dark ? "dark" : "light"}
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    items={[UserOutlined, VideoCameraOutlined, UploadOutlined, FacebookOutlined].map(
                        (icon, index) => ({
                            key: String(index + 1),
                            icon: React.createElement(icon),
                            label: `Sider Nav ${index + 1}`,
                        }),
                    )}
                />
            </Sider>

            <Layout>
                <Header
                    style={{
                        padding: 0,
                        background: dark ? '#001529' : '#fff'
                    }}
                >
                    <Tooltip placement="left" title='Click to logout from your account!'>
                        <Button
                            shape='round'
                            onClick={() => handleLogout()}
                            size='large'
                            type='primary'
                            style={{
                                float: 'right',
                                margin: '0.5rem',
                                background: dark ? red[2] : red[4]
                            }}>
                            Logout
                        </Button>
                    </Tooltip>

                    <Menu
                        theme={dark ? "dark" : "light"}
                        mode="horizontal"
                        defaultSelectedKeys={['1']}
                        items={items}
                    />

                </Header>

                <Content style={{ background: dark ? '#0c263f' : '#fff' }}>
                    <div
                        style={{
                            padding: 24,
                            minHeight: 360,
                        }}>
                        <div style={{ width: '100%', height: '30px' }}>
                            <Button
                                size='large'
                                style={{
                                    float: 'right',
                                    marginRight: 10,
                                }}
                                type="primary"
                                shape="round"
                                onClick={() => handleDark()}
                            >
                                {dark ? 'Light ☀️' : 'Dark 🌑'}
                            </Button>
                        </div>
                        {/* Pass dark props to home */}
                        <Home dark={dark} />
                    </div>
                </Content>
            </Layout>
        </Layout>
    );
}

export default Wrapper