// @flow
import styled from 'styled-components'
import { colorSecondary, authIcon, authBtn } from '../../style'
import { Row, Card, Button, Icon } from 'antd'

export const FormContainer = styled.section`
  align-items: center;
  display: flex;
  height: 100vh;
  flex-direction: column;
  justify-content: center;
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
    & > section {
      box-shadow: 0 1px 6px rgba(0,0,0,0.2);
      height: 590px;
    }
  }
`

export const RegisterRow = styled(Row)`
  width: 100%;
  &.title {
    margin: 25px 0;
  }
`

export const AuthIcon = styled(Icon)`
  ${authIcon}
`

export const TitleCard = styled(Card)`
  .ant-card-head-title {
    color: ${colorSecondary}
    font-size: 35px;
  }
  .ant-card-body {
    font-weight: 300;
    letter-spacing: 0.5px;
  }
`

export const SubmitButton = styled(Button)`
  ${authBtn}
`

export const AuthLink = styled.a`
  color: ${colorSecondary};
  font-weight: 500;
  letter-spacing: 0.5px;
  margin: 0 5px;
`