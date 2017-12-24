import React from 'react'
import { Form, Input, Button, Checkbox, Radio, InputNumber, Modal } from 'antd'
const FormItem = Form.Item;
const RadioGroup = Radio.Group

const formItemLayout = {
  labelCol: { span: 7 },
  wrapperCol: { span: 8 },
};
const formTailLayout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 8, offset: 7 },
};
class DynamicRule extends React.Component {
  state = {
    memberId: true,
    firstName: true,
    lastname: true,
    age: true,
    sex: true,
    memberType: true,
  }

  sss = () => {
    console.log(this.props)
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.form.validateFields((err, values) => {
      if (!err) {
        const modal = Modal.success({
          title: 'เพิ่มข้อมูลผู้ป่วยใหม่สำเร็จ !!!',
          content: 'ท่านได้ทำการเพิ่มข้อมูลสมาชิกผู้ป่วยใหม่แล้ว',
         onOk: () => this.props.onSubmit()
        })
        // setTimeout(() => {
        //   modal.destroy()
        // }, 3000);
      }
    })
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: !e.target.value
    })
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    const x = this.props.history
    const fn = () => x
    return (
      <Form onSubmit={this.handleSubmit}>
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
        <FormItem {...formItemLayout} label="ชื่อ">
          {getFieldDecorator('firstName', {
            rules: [{
              required: this.state.firstName,
              message: 'Please input member name',
            }],
          })(
            <Input onChange={this.handleChange} />
          )}
        </FormItem>
        <FormItem {...formItemLayout} label="นามสกุล">
          {getFieldDecorator('lastname', {
            rules: [{
              required: this.state.lastname,
              message: 'Please input member name',
            }],
          })(
            <Input onChange={this.handleChange} />
          )}
        </FormItem>
        <FormItem {...formItemLayout} label="อายุ">
          {getFieldDecorator('age', {
            rules: [{
              required: this.state.age,
              message: 'Please input member age',
            }],
          })(
            <InputNumber min={1} max={100} />
          )}
        </FormItem>
        <FormItem {...formItemLayout} label="เพศ">
          {getFieldDecorator('sex', {
            rules: [{
              required: this.state.sex,
              message: 'Please input member sex',
            }],
          })(
            <RadioGroup >
              <Radio value={1}>ชาย</Radio>
              <Radio value={2}>หญิง</Radio>
            </RadioGroup>
          )}
        </FormItem>
        <FormItem {...formItemLayout} label="ประเภทของสมาชิก">
          {getFieldDecorator('memberType', {
            rules: [{
              required: this.state.memberType,
              message: 'Please input member type',
            }],
          })(
            <RadioGroup >
              <Radio value={1}>นักเรียน</Radio>
              <Radio value={2}>บุคลากรภายใน</Radio>
              <Radio value={3}>บุคคลภายนอก</Radio>
            </RadioGroup>
          )}
        </FormItem>
        <FormItem {...formTailLayout}>
          <Button type="primary" htmlType="submit">
            ยืนยัน
          </Button>
        </FormItem>
      </Form>
    );
  }
}

const WrappedMemberAddForm = Form.create()(DynamicRule);
export default WrappedMemberAddForm
