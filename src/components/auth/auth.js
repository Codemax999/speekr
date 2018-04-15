// @flow
import React, { Component } from 'react'
import { Redirect } from 'react-router'
import { Layout, Row, Col, Form, Icon, Input, Button } from 'antd'

const { Header, Content } = Layout
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
        <Header style={{ position: 'fixed', width: '100%', padding: 0 }}>
          <nav style={{
            background: '#F8F8F8',
            boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
            lineHeight: '64px',
            width: '100%'
          }}>

            <section style={{ margin: '0 20px' }} onClick={() => this.setState({ landing: true }) }>
              <Icon type="arrow-left" />
            </section>
          </nav>
        </Header>

        <Content style={{ marginTop: 64, background: '#fff', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Row gutter={20} style={{ width: '100%', marginTop: 40 }}>
            <Col>
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
                </FormItem>
              </Form>
            </Col>
          </Row>
        </Content>
      </Layout>
    )
  }
}

const Auth = Form.create()(AuthForm);
export default Auth
