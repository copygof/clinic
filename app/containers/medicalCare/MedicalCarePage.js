import React, { Component } from 'react'
import { Layout, Card } from 'antd'
import MedicalCareForm from './MedicalCareForm'

const { Content, Header } = Layout

class MedicalCarePage extends Component {
    onSubmit = () => {
        this.props.history.push('/auth/auth')
    }
    render() {
        return (
            <Layout>
                <Header />
                <Content style={{ margin: '0 16px', marginTop: 15 }}>
                    <Card title="บันทึกข้อมูลการรักษา" bordered={false} >
                        <MedicalCareForm onSubmit={this.onSubmit} />
                    </Card>
                </Content>
            </Layout>
        )
    }
}

export default MedicalCarePage
