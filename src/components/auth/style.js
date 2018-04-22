// @flow
import styled from 'styled-components'
import { authBtn, authIcon, pageHeader } from '../../style'
import { Layout, Button, Icon } from 'antd'
const { Header, Content } = Layout

export const FormContainer = styled.section`
  align-items: center;
  display: flex;
  height: 100vh;
  flex-direction: column;
  justify-content: flex-start;
  min-width: 300px;
  width: 100%;
  & > section {
    align-items: center;
    background: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 425px;
    width: 100%;
  }

  @media (min-width: 700px) {
    background: #EEE;
    justify-content: center;
    & > section {
      box-shadow: 0 1px 6px rgba(0,0,0,0.2);
      height: 590px;
    }
  }
`

export const StyledHeader = styled(Header)`
  ${pageHeader}

  @media (min-width: 700px) {
    position: relative;
  }
`

export const StyledContent = styled(Content)`
  align-items: center;
  background: #fff;
  display: flex;
  flex-direction: column;
  margin-top: 64px;
  width: 100%;
  & > .ant-row {
    margin-top: 40px;
    width: 100%;
  }

  @media (min-width: 700px) {
    margin-top: 0;
  }
`

export const AuthIcon = styled(Icon)`
  ${authIcon}
`

export const SubmitButton = styled(Button)`
  ${authBtn}
`