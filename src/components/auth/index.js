// @flow
import React, { Component } from 'react'
import { Redirect } from 'react-router'
import { signIn } from '../../services/firebase'
import { 
  FormContainer,
  StyledHeader, 
  StyledContent, 
  SubmitButton, 
  AuthIcon 
} from './style'
import { Row, Col, Form, Icon, Input } from 'antd'

const FormItem = Form.Item

type Props = {
  form: Object
}
type State = {
  landing: boolean,
  chat: boolean,
  errorMsg: string
}

class AuthForm extends Component<Props, State> {

  state: State = {
    landing: false,
    chat: false,
    errorMsg: ''
  }

  handleSubmit = (e: Event) => {
    e.preventDefault()
    this.props.form.validateFields((err, values) => {
      
      // validate for no errors
      if (!err) {

        // attempt login, redirect to chat and show any errors
        const { email, password } = values
        signIn(email, password)
          .then((res: Object | string) => {
            if (res === 'auth/user-not-found') this.setState({ errorMsg: 'User not found' })
            else if (res === 'auth/wrong-password') this.setState({ errorMsg: 'Incorrect email or password' })
            else this.setState({ chat: true })
          })
      }
    })
  }

  render() {

    // handle route change on success
    if (!!this.state.landing) return <Redirect to='/' />
    if (!!this.state.chat) return <Redirect to='/chat' />

    // form decorator
    const { getFieldDecorator } = this.props.form

    return (
      <FormContainer>
        <section>
          <StyledHeader>
            <section onClick={() => this.setState({ landing: true })}>
              <Icon type="arrow-left" />
            </section>
          </StyledHeader>

          <StyledContent>
            <Row gutter={20}>
              <Col>
                <Form onSubmit={this.handleSubmit} className="login-form">

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
                    <SubmitButton type="primary" htmlType="submit">
                      CONTINUE
                  </SubmitButton>
                  </FormItem>

                  {/* Error Message */}
                  <div>{this.state.errorMsg}</div>
                </Form>
              </Col>
            </Row>
          </StyledContent>
        </section>
      </FormContainer>
    )
  }
}

const Auth = Form.create()(AuthForm);
export default Auth
