/* eslint flowtype-errors/show-errors: 0 */
import React, { Component } from 'react'
import {
  Router,
  Route,
  Switch
} from 'react-router'
import App from './containers/App';
import HomePage from './containers/HomePage';
import SettingPage from './containers/SettingPage';
import MemberAddPage from './containers/member/MemberAddPage'
import LoginPage from './containers/login/LoginPage'
import MedicalCarePage from './containers/medicalCare/MedicalCarePage'

class Auth extends Component {
  render() {
    const { match } = this.props
    return (
      <App {...this.props}>
        <Switch {...this.props}>
          <Route path={match.url+"/auth"} component={HomePage} />
          <Route path={match.url+"/setting"} component={SettingPage} />
          <Route path={match.url+"/home"}  component={HomePage} />
          <Route path={match.url+"/memberAdd"} component={MemberAddPage} />
          <Route path={match.url+"/medicalCare"} component={MedicalCarePage} />
        </Switch>
      </App>
    )
  }
}
class Apps extends Component {
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}

export default (props) => (
  <Router {...props}>
    <Switch {...props}>
      <Route path="/auth" component={Auth} />
      <Route path="/" component={LoginPage} />
      <Route path="/logout" component={LoginPage} />
    </Switch>
  </Router>
)
