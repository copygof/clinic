import React from 'react'
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import { Link } from 'react-router-dom'
const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;

class SiderDemo extends React.Component {
  state = {
    collapsed: false,
  };
  onCollapse = (collapsed) => {
    console.log(collapsed);
    this.setState({ collapsed });
  }
  handleOnClickMenu = ({ key }) => {
    // const { navigate } = this.props.navigation
    
    this.props.history.push('/'+key)
  }
  render() {
    console.log('fdfdf', this.props)
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider
          collapsible
          collapsed={this.state.collapsed}
          onCollapse={this.onCollapse}
        >
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" onClick={this.handleOnClickMenu}>
            <Menu.Item key="auth/home" >
              <Icon type="home" />
              <span>หน้าหลัก</span>
            </Menu.Item>
            <Menu.Item key="auth/medicalCare" >
              <Icon type="save" />
              <span>บันทึกข้อมูลการรักษา</span>
            </Menu.Item>
            <SubMenu
              key="sub2"
              title={<span><Icon type="team" /><span>ข้อมูลผู้ป่วย</span></span>}
            >
              <Menu.Item key="auth/memberAdd">เพิ่มข้อมูลผู้ป่วยใหม่</Menu.Item>
              <Menu.Item key="auth/patient/viewAll">ข้อมูลผู้ป่วยทั้งหมด</Menu.Item>
            </SubMenu>
            <SubMenu
              key="3"
              title={<span><Icon type="pie-chart" /><span>รายงาน</span></span>}
            >
              <Menu.Item key="auth/report/byDay">ผู้ป่วยประจำวัน</Menu.Item>
              <Menu.Item key="auth/report/byDisease">ผู้ป่วยตามโรค</Menu.Item>
            </SubMenu>
            <SubMenu
              key="4"
              title={<span><Icon type="table" /><span>จัดการคลังยา</span></span>}
            >
              <Menu.Item key="auth/drug/add">เพิ่มข้อมูลยาใหม่</Menu.Item>
              <Menu.Item key="auth/drug/viewAll">ข้อมูลยาทั้งหมด</Menu.Item>
            </SubMenu>
            <Menu.Item key="auth/setting">
             <Icon type="setting" />
             <span>การตั้งค่า</span>
            </Menu.Item>
            <Menu.Item key="logout">
              <Icon type="logout" />
              <span>ออกจากระบบ</span>
            </Menu.Item>
          </Menu>
        </Sider>
        {this.props.children}
      </Layout>
    );
  }
}

export default SiderDemo
