// @flow
import React, { Component } from 'react'
import { Redirect } from 'react-router'
import { 
  FormContainer, 
  RegisterRow, 
  TitleCard, 
  SubmitButton,
  AuthLink,
  AuthIcon
} from './style'
import { Col, Form, Input } from 'antd'

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
      <FormContainer>

        {/* Header */}
        <RegisterRow gutter={20} className="title">
          <Col>
            <TitleCard title="SPEEKR" bordered={false}>
              Speech to text for on the go
            </TitleCard>
          </Col>
        </RegisterRow>

        {/* Sign up form */}
        <RegisterRow gutter={20}>
          <Col>
            <Form
              onSubmit={this.handleSubmit}
              className="login-form">

              <FormItem>
                {getFieldDecorator('userName', {
                  rules: [{ required: true, message: 'Please input your username' }],
                })(
                  <Input
                    prefix={<AuthIcon type="user" />}
                    placeholder="username" />
                )}
              </FormItem>

              <FormItem>
                {getFieldDecorator('email', {
                  rules: [{ required: true, message: 'Please input your email' }],
                })(
                  <Input
                    prefix={<AuthIcon type="mail" />}
                    placeholder="email" />
                )}
              </FormItem>

              <FormItem>
                {getFieldDecorator('password', {
                  rules: [{ required: true, message: 'Please input your Password' }],
                })(
                  <Input
                    prefix={<AuthIcon type="lock" />}
                    type="password"
                    placeholder="password" />
                )}
              </FormItem>

              <FormItem>
                {getFieldDecorator('passwordValid', {
                  rules: [{ required: true, message: 'Please re-enter your Password' }],
                })(
                  <Input
                    prefix={<AuthIcon type="lock" />}
                    type="password"
                    placeholder="re-enter password" />
                )}
              </FormItem>

              <FormItem>
                <SubmitButton
                  type="primary"
                  htmlType="submit">
                  CONTINUE
                </SubmitButton>

                Or
                <AuthLink onClick={() => this.setState({ auth: true })}>
                    sign in
                </AuthLink>
              </FormItem>
            </Form>
          </Col>
        </RegisterRow>
      </FormContainer>
    )
  }
}

const Register = Form.create()(RegisterForm)
export default Register