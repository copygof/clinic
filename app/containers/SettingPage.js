import React from 'react'
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import Footer from '../components/Footer'
const { Header, Content, Sider } = Layout;
const SubMenu = Menu.SubMenu;

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
              Setting
            </div>
          </Content>
          <Footer />
        </Layout>
    );
  }
}

export default Home
