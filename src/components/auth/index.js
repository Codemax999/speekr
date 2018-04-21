// @flow
import React, { Component } from 'react'
import { Redirect } from 'react-router'
import { StyledHeader, StyledContent, SubmitButton, AuthIcon } from './style'
import { Layout, Row, Col, Form, Icon, Input, Button } from 'antd'

const { Content } = Layout
const FormItem = Form.Item

type Props = {
  form: Object
}
type State = {
  landing: boolean,
  chat: boolean
}

class AuthForm extends Component<Props, State> {

  state: State = {
    landing: false,
    chat: false
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
    if (!!this.state.landing) return <Redirect to='/' />
    if (!!this.state.chat) return <Redirect to='/chat' />

    // form decorator
    const { getFieldDecorator } = this.props.form

    return (
      <Layout>
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
              </Form>
            </Col>
          </Row>
        </StyledContent>
      </Layout>
    )
  }
}

const Auth = Form.create()(AuthForm);
export default Auth
