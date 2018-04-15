// @flow
import React, { Component } from 'react'
import { Redirect } from 'react-router'
import { Card, Col, Row, Form, Icon, Input, Button } from 'antd'

const FormItem = Form.Item

type Props = {
  form: Object
}
type State = {
  chat: boolean,
  auth: boolean
}

class RegisterForm extends Component<Props, State> {

  state: State = {
    chat: false,
    auth: false
  }

  handleSubmit = (e: Event) => {
    e.preventDefault()
    this.props.form.validateFields((err, values) => {
      this.setState({ chat: true })
      // if (!err) console.log('Received values of form: ', values)
    })
  }

  render() {

    // handle route change on success
    if (!!this.state.chat) return <Redirect to='/chat' />
    if (!!this.state.auth) return <Redirect to='/auth' />

    // form details
    const { getFieldDecorator } = this.props.form

    return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

        {/* Header */}
        <Row gutter={20} style={{ width: '100%', margin: '25px 0' }}>
          <Col>
            <Card title="SPEEKR" 
              bordered={false} 
              style={{ textAlign: 'center' }}>
                Speech to text for on the go
            </Card>
          </Col>
        </Row>

        {/* Sign up form */}
        <Row gutter={20} style={{ width: '100%' }}>
          <Col>
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
                  className="login-form-button"
                  style={{
                    width: '100%',
                    background: '#2699A6',
                    border: 0,
                    boxShadow: '0 1px 6px rgba(0, 0, 0, 0.2)',
                    height: 40,
                    letterSpacing: 0.6,
                    margin: '30px 0'
                  }}>
                  CONTINUE
                </Button>

                Or
                <a onClick={() => this.setState({ auth: true })}
                  style={{ color: '#2A5BA4', margin: '0 5px'}}>
                    sign in
                </a>
              </FormItem>
            </Form>
          </Col>
        </Row>
      </div>
    )
  }
}

const Register = Form.create()(RegisterForm)
export default Register