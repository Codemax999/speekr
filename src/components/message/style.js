// @flow
import styled from 'styled-components'
import { colorSecondary } from '../../style'
import { Button, Avatar } from 'antd'

export const LikeButton = styled(Button)`
  border: 0;
  font-size: 16px;
  margin-right: 8px;
  pointer-events: auto;
  & > i {
    color: 	#808080;
  }
`

export const StyledAvatar = styled(Avatar)`
  background-color: ${colorSecondary};
  color: #fff;
`