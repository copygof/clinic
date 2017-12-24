import React, { Component } from 'react'
import { Layout, Card } from 'antd'
import MemberAddForm from './MemberAddForm'

const { Content, Header } = Layout

class MemberAddPage extends Component {
    onSubmit = () => {
        this.props.history.push('/auth/auth')
    }
    render() {
        return (
            <Layout>
                <Header />
                <Content style={{ margin: '0 16px', marginTop: 15 }}>
                    <Card title="เพิ่มข้อมูลผู้ป่วยใหม่" bordered={false} >
                        <MemberAddForm onSubmit={this.onSubmit} />
                    </Card>
                </Content>
            </Layout>
        )
    }
}

export default MemberAddPage
