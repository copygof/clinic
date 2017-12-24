import React from 'react'
import { Layout, Menu, Breadcrumb, Icon, Card } from 'antd'
import Footer from './Footer'

const { Header, Content, Sider } = Layout
const SubMenu = Menu.SubMenu;

const gridStyle = {
  width: '25%',
  textAlign: 'center',
};

class Home extends React.Component {
  state = {
    collapsed: false,
  };
  onCollapse = (collapsed) => {
    console.log(collapsed);
    this.setState({ collapsed });
  }
  render() {
    return (
      <Layout>
          <Header className="header">
          </Header>
          <Content style={{ margin: '0 16px' }}>
            <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
              <Card title="ห้องพยาบาล">
                <Card.Grid style={gridStyle}>
                  เพิ่มข้อมูลการรักษา
                </Card.Grid>
                <Card.Grid style={gridStyle}>
                  ออกจากระบบ
                </Card.Grid>
              </Card>
            </div>
          </Content>
          <Footer />
        </Layout>
    );
  }
}

export default Home
