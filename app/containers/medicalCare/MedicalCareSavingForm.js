import React from 'react'
import { Form, Input, Button, Checkbox, Radio, InputNumber, Modal, Switch, Select, Icon, AutoComplete } from 'antd'
const FormItem = Form.Item;
const RadioGroup = Radio.Group
const { TextArea } = Input
const Option = Select.Option;
const formItemLayout = {
  labelCol: { span: 7 },
  wrapperCol: { span: 8 },
};
const formTailLayout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 8, offset: 7 },
};


let uuid = 0;
class DynamicRule extends React.Component {
  state = {
    memberId: true,
    firstName: true,
    lastname: true,
    age: true,
    sex: true,
    memberType: true,
    switch: false
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
  switch = (e) => {
    this.setState({
      switch: e
    })
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: !e.target.value
    })
  }
  remove = (k) => {
    const { form } = this.props;
    // can use data-binding to get
    const keys = form.getFieldValue('keys');
    // We need at least one passenger
    if (keys.length === 0) {
      return;
    }

    // can use data-binding to set
    form.setFieldsValue({
      keys: keys.filter(key => key !== k),
    });
  }

  add = () => {
    const { form } = this.props;
    // can use data-binding to get
    const keys = form.getFieldValue('keys');
    const nextKeys = keys.concat(uuid);
    uuid++;
    // can use data-binding to set
    // important! notify form to detect changes
    form.setFieldsValue({
      keys: nextKeys,
    });
  }
  render() {
    const { getFieldDecorator, getFieldValue } = this.props.form;
    const formItemLayoutWithOutLabel = {
      wrapperCol: {
        xs: { span: 24, offset: 0 },
        sm: { span: 20, offset: 4 },
      },
    };
    getFieldDecorator('keys', { initialValue: [] });
    const keys = getFieldValue('keys');
    const dataSource = ['Aldactone', 'Albuterol', 'Acyclovir', 'Buspirone', 'Benadryl', 'Biotin'];
    const formItems = keys.map((k, index) => {
      return (
        <FormItem
          // {...(index === 0 ? formItemLayout : formItemLayoutWithOutLabel)}
          // label={index === 0 ? 'Passengers' : ''}
          {...formItemLayoutWithOutLabel}
          required={false}
          key={k}
        >
          {getFieldDecorator(`names[${k}]`, {
            validateTrigger: ['onChange', 'onBlur'],
            rules: [{
              // required: true,
              whitespace: true,
              // message: "Please input passenger's name or delete this field.",
            }],
          })(
            <AutoComplete
              style={{ width: 200 }}
              dataSource={dataSource}
              placeholder="ชื่อยา"
              filterOption={(inputValue, option) => option.props.children.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1}
            />
          )}
          {getFieldDecorator(`names[${k}]value`, {
            validateTrigger: ['onChange', 'onBlur'],
            rules: [{
              // required: true,
              whitespace: true,
              // message: "Please input passenger's name or delete this field.",
            }],
          })(
            <Input placeholder="จำนวน" style={{ width: '60%', marginRight: 8 }} />
          )}
          {keys.length > 0 ? (
            <Icon
              className="dynamic-delete-button"
              type="minus-circle-o"
              disabled={keys.length > 0}
              onClick={() => this.remove(k)}
            />
          ) : null}
        </FormItem>
      );
    });
    return (
      <Form onSubmit={this.handleSubmit}>
        <FormItem {...formItemLayout} label="ชื่อ">
          นายวีระ สุขดี
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="โรคหรืออาการ"
        >
          {getFieldDecorator('select-multipleฟฟฟ', {
            rules: [
              { required: true, message: 'โรคหรืออาการที่พบ!', type: 'array' },
            ],
          })(
            <Select mode="multiple" placeholder="วิธีการรักษา">
              <Option value="ท้องผูก">ท้องผูก</Option>
              <Option value="โรคกรดไหลย้อน">โรคกรดไหลย้อน</Option>
              <Option value="เป็นแผลในทางเดินอาหาร">เป็นแผลในทางเดินอาหาร</Option>
              <Option value="อาหารไม่ย่อย">อาหารไม่ย่อย</Option>
              <Option value="เจ็บสะโพก">เจ็บสะโพก</Option>
              <Option value="โรคน้ำกัดเท้า">โรคน้ำกัดเท้า</Option>
            </Select>
          )}
        </FormItem>
        <FormItem {...formItemLayout} label="อาการป่วยเบื้องต้น" sss='dsdsdsd'>
          {getFieldDecorator('detail', {
            // rules: [{
            //   required: this.state.memberId,
            //   message: 'Please input member id',
            // }], 
          })(
            <TextArea onChange={this.handleChange} sss='dsdsdsd' />
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="วิธีการรักษา"
        >
          {getFieldDecorator('select-multiple', {
            rules: [
              { required: true, message: 'วิธีการรักษา!', type: 'array' },
            ],
          })(
            <Select mode="multiple" placeholder="วิธีการรักษา">
              <Option value="จ่ายยา">จ่ายยา</Option>
              <Option value="ฉีดยา">ฉีดยา</Option>
              <Option value="นอนพักห้องพยายาบาล">นอนพักห้องพยายาบาล</Option>
            </Select>
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="ส่งต่อโรงพยายาล"
        >
          {getFieldDecorator('switch', { valuePropName: 'checked' })(
            <Switch onChange={this.switch} />
          )}
        </FormItem>
        {
          this.state.switch && (
            <FormItem {...formItemLayout} label="โรงพยายาล">
            {getFieldDecorator('hospital', {
              })(
                <Input onChange={this.handleChange} />
              )}
            </FormItem>
          )
        }
        <FormItem {...formItemLayout} label="คำแนะนำ" sss='dsdsdsd'>
          {getFieldDecorator('details', {
          })(
            <TextArea onChange={this.handleChange} sss='dsdsdsd' />
          )}
        </FormItem>
       
        {formItems}
        <FormItem {...formItemLayoutWithOutLabel}>
          <Button type="dashed" onClick={this.add} style={{ width: '60%' }}>
            <Icon type="plus" /> สั่งจ่ายยา
          </Button>
        </FormItem>


        {/* <FormItem {...formTailLayout}>
          <Button type="primary" htmlType="submit">
            ยืนยัน
          </Button>
        </FormItem> */}
      </Form>
    );
  }
}

const MedicalCareSavingForm = Form.create()(DynamicRule);
export default MedicalCareSavingForm
