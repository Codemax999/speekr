// @flow
import React, { Component } from 'react'
import { Form, Icon, Input, Button } from 'antd'

const FormItem = Form.Item

type Props = {
  form: Object
}
type State = {}

class RegisterForm extends Component<Props, State> {

  handleSubmit = (e: Event) => {
    e.preventDefault()
    this.props.form.validateFields((err, values) => {
      if (!err) console.log('Received values of form: ', values)
    })
  }

  render() {
    const { getFieldDecorator } = this.props.form
    return (

      <Form
        onSubmit={this.handleSubmit}
        className="login-form">

        <FormItem>
          {getFieldDecorator('email', {
            rules: [{ required: true, message: 'Please input your email' }],
          })(
            <Input
              prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="email" />
          )}
        </FormItem>

        <FormItem>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password' }],
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="password" />
          )}
        </FormItem>

        <FormItem>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button">
            CONTINUE
          </Button>
        </FormItem>
      </Form>
    )
  }
}

const Register = Form.create()(RegisterForm);
export default Register
