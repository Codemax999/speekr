// @flow
import React, { Component } from 'react'
import { Form, Icon, Input, Button } from 'antd'

const FormItem = Form.Item

type Props = {
  form: Object
}
type State = {}

class AuthForm extends Component<Props, State> {

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
          {getFieldDecorator('userName', {
            rules: [{ required: true, message: 'Please input your username' }],
          })(
            <Input 
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} 
              placeholder="username" />
          )}
        </FormItem>

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
          {getFieldDecorator('passwordValid', {
            rules: [{ required: true, message: 'Please re-enter your Password' }],
          })(
            <Input 
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} 
              type="password" 
              placeholder="re-enter password" />
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

const Auth = Form.create()(AuthForm);
export default Auth
