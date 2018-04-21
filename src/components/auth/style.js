// @flow
import styled from 'styled-components'
import { authBtn, authIcon, pageHeader } from '../../style'
import { Layout, Button, Icon } from 'antd'
const { Header, Content } = Layout

export const StyledHeader = styled(Header)`
  ${pageHeader}
`

export const StyledContent = styled(Content)`
  align-items: center;
  background: #fff;
  display: flex;
  flex-direction: column;
  margin-top: 64px;
  & > .ant-row {
    margin-top: 40px;
    width: 100%;
  }
`

export const AuthIcon = styled(Icon)`
  ${authIcon}
`

export const SubmitButton = styled(Button)`
  ${authBtn}
`