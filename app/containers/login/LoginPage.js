import React, { Component } from 'react'
import { Layout, Card } from 'antd'
import LoginForm from './LoginForm'

const { Content, Header } = Layout

class LoginPage extends Component {
    onSubmit = () => {
        this.props.history.push('/auth/auth')
    }
    render() {
        return (
            <div style={{ height: '100%' }}>
                <Content >
                    <Card title="เข้าสู่ระบบ" bordered={true} style={{ marginLeft: '20%', marginRight: '20%', marginTop: '10%' }} >
                        <LoginForm onSubmit={this.onSubmit} />
                    </Card>
                </Content>
            </div>
        )
    }
}

export default LoginPage
