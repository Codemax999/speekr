// @flow
import styled from 'styled-components'
import { colorPrimary, pageHeader, colorSecondary } from '../../style'
import { Layout, Button, Icon } from 'antd'
const { Header, Sider } = Layout

export const StyledLayout = styled(Layout)`
  height: 100vh;
`

export const StyledSider = styled(Sider)`
  background: ${colorPrimary};
  display: none;
  & section {
    align-items: center;
    display: flex;
    flex-direction: column;
    height: 75%;
    justify-content: space-between;
    margin-top: 100px;
  }

  @media (min-width: 700px) {
    display: block;
  }
`

export const StyledUserInfo = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 150px;
  & h3 {
    color: #fff;
    letter-spacing: 0.5px;
  }
`

export const StyledAvatar = styled.div`
  background: ${colorSecondary};
  border-radius: 50%;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  color: #fff;
  display: flex;
  align-items: center !important;
  justify-content: center !important;
  font-size: 45px;
  font-weight: 600;
  height: 100px;
  width: 100px;
`

export const NewMessageButton = styled(Button) `
  border-color: #fff !important;
  color: #fff !important;
`

export const StyledHeader = styled(Header)`
  ${pageHeader}
`

export const Messages = styled.section`
  background: #fff;
  margin-bottom: 44px;
  padding: 75px 24px 20px 24px;
`

export const Footer = styled.section`
  display: flex;
  height: 70px;
  justify-content: center;
  position: fixed;
  bottom: 0;
  width: 100%;
  pointer-events: none;
  
  @media (min-width: 700px) {
    display: none;
  }
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