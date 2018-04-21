// @flow
import styled from 'styled-components'
import { colorSecondary, authIcon, authBtn } from '../../style'
import { Row, Card, Button, Icon } from 'antd'

export const FormContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
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