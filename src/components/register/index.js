// @flow
import React, { Component } from 'react'
import { Redirect } from 'react-router'
import { registerNewUser } from '../../services/firebase'
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
  auth: boolean,
  errorMsg: string
}

class RegisterForm extends Component<Props, State> {

  state: State = {
    chat: false,
    auth: false,
    errorMsg: ''
  }

  handleSubmit = (e: Event) => {
    e.preventDefault()
    this.props.form.validateFields((err, values) => {

      // validate for no errors
      if (!err) {

        // email password and username
        const { email, password, username } = values
        registerNewUser(email, password, username)
          .then((res: Object | string) => {

            // validate for taken emails
            if (res === 'auth/email-already-in-use') this.setState({ errorMsg: 'Email taken' })
            else this.setState({ chat: true })
          })
      }
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
        <section>
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
                  {getFieldDecorator('username', {
                    rules: [{ required: true, message: 'Please input your username' }],
                  })(
                    <Input
                      prefix={<AuthIcon type="user" />}
                      placeholder="username" />
                  )}
                </FormItem>

                <FormItem>
                  {getFieldDecorator('email', {
                    rules: [{ required: true, type: 'email', message: 'Please enter valid email' }],
                  })(
                    <Input
                      prefix={<AuthIcon type="mail" />}
                      placeholder="email" />
                  )}
                </FormItem>

                <FormItem>
                  {getFieldDecorator('password', {
                    rules: [{ required: true, min: 6, message: 'Please input a password of at least 6 characters' }],
                  })(
                    <Input
                      prefix={<AuthIcon type="lock" />}
                      type="password"
                      placeholder="password" />
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

                {/* Error Messages */}
                <div>{this.state.errorMsg}</div>
              </Form>
            </Col>
          </RegisterRow>
        </section>
      </FormContainer>
    )
  }
}

const Register = Form.create()(RegisterForm)
export default Register