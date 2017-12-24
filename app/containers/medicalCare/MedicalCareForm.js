import React from 'react'
import { Form, Input, Button, Checkbox, Radio, InputNumber, Modal, Steps, message  } from 'antd'

import MedicalCareSavingForm from './MedicalCareSavingForm'

const Step = Steps.Step;

  

const FormItem = Form.Item;
const RadioGroup = Radio.Group

const formItemLayout = {
  // labelCol: { span: 7 },
  // wrapperCol: { span: 8 },
};
const formTailLayout = {
  // labelCol: { span: 8 },
  // wrapperCol: { span: 8, offset: 7 },
};
class DynamicRule extends React.Component {
  state = {
    memberId: true,
    firstName: true,
    lastname: true,
    age: true,
    sex: true,
    memberType: true,
    current: 0,
    canNextStepThree: false
  }
  next() {
    const current = this.state.current + 1;
    this.setState({ current });
  }
  prev() {
    const current = this.state.current - 1;
    this.setState({ current });
  }

  sss = () => {
    console.log(this.props)
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.form.validateFields((err, values) => {
      if (!err) {
        // const modal = Modal.success({
        //   title: 'เพิ่มข้อมูลผู้ป่วยใหม่สำเร็จ !!!',
        //   content: 'ท่านได้ทำการเพิ่มข้อมูลสมาชิกผู้ป่วยใหม่แล้ว',
        //  // onOk: () => this.props.onSubmit()
        // })
        // setTimeout(() => {
        //   modal.destroy()
        // }, 3000);
      }
    })
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  renderFormSearch() {
    const { getFieldDecorator } = this.props.form;

    const { current } = this.state;
    return (
      <div  style={{ marginBottom: 50 }}>
        <Form onSubmit={this.handleSubmit} layout="inline">
          <FormItem {...formItemLayout} label="รหัสนักเรียน / เลขบัตรประจำตัวประชาชน" sss='dsdsdsd'>
            {getFieldDecorator('memberId', {
              rules: [{
                required: this.state.memberId,
                message: 'Please input member id',
              }],
            })(
              <Input onChange={this.handleChange} sss='dsdsdsd' />
            )}
          </FormItem>
          <FormItem {...formTailLayout}>
            <Button type="primary" htmlType="submit">
              ค้นหา
            </Button>
          </FormItem>
        </Form>
        <span>ค้นพบ: </span> 
          <span>{this.state.memberId.length > 4 ? 'นายวีระ สุขดี' : '-'}{this.state.memberId.length > 4 && <Button style={{ marginLeft: 8 }} onClick={() => {}}> ข้อมูลเพิ่มเติม</Button>}</span> 
      </div> 
    )
  }
  renderFormCare() {
    return (
      <div>
        <MedicalCareSavingForm onSubmit={() => this.setState({
          canNextStepThree: true
        })} />
      </div>
    )
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    const steps = [{
      title: 'ค้นหาผู้ป่วย',
      content: this.renderFormSearch(),
    }, {
      title: 'บันทึกการรักษา',
      content: this.renderFormCare(),
    }, {
      title: 'เสร็จสิ้น',
      content: 'ยืนยันการทำรายการ',
    }];

    const { current, canNextStepThree } = this.state;
    return (
      <div>
      <Steps current={current}>
        {steps.map(item => <Step key={item.title} title={item.title} />)}
      </Steps>
      <div className="steps-content" style={{ marginTop: 30 }}>{steps[this.state.current].content}</div>
      <div className="steps-action">
        {
          this.state.current < steps.length - 1
          &&
          <Button type="primary" onClick={() => (this.state.memberId.length > 4)&& this.next()}>Next</Button>
        }
        {
          this.state.current === steps.length - 1
          &&
          <Button type="primary" onClick={() => message.success('Processing complete!', this.props.onSubmit)}>Done</Button>
        }
        {
          this.state.current > 0
          &&
          <Button style={{ marginLeft: 8 }} onClick={() => this.prev()}>
            Previous
          </Button>
        }
      </div>
    </div>
    );
  }
}

const WrappedMemberAddForm = Form.create()(DynamicRule);
export default WrappedMemberAddForm
