// @flow
import styled from 'styled-components'
import { colorSecondary } from '../../style'
import { Button, Avatar } from 'antd'

export const LikeButton = styled(Button)`
  border: 0;
  margin-right: 8px;
  pointer-events: auto;
`

export const StyledAvatar = styled(Avatar)`
  background-color: ${colorSecondary};
  color: #fff;
`