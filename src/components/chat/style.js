// @flow
import styled from 'styled-components'
import { colorPrimary, pageHeader } from '../../style'
import { Layout, Button, Icon } from 'antd'
const { Header } = Layout

export const StyledHeader = styled(Header)`
  ${pageHeader}
`

export const Messages = styled.section`
  background: #fff;
  min-height: 280px;
  padding: 64px 24px;
`

export const Footer = styled.section`
  display: flex;
  height: 70px;
  justify-content: center;
  position: fixed;
  bottom: 0;
  width: 100%;
  pointer-events: none;
`

export const FabBtn = styled(Button)`
  background: ${colorPrimary} !important;
  border: 0;
  color: #fff !important;
  height: 50px;
  width: 50px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  pointer-events: auto;
`

export const ModalIcon = styled(Icon)`
  margin-right: 8px;
`