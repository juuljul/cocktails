import { Link } from 'react-router-dom'
import colors from './colors'
import styled, { keyframes } from 'styled-components'


export const StyledLink = styled(Link)(props => ({
  textDecoration: 'none',
  color: props.couleur,
  marginTop: props.marginTop,
  marginBottom: props.marginBottom,
  position: props.position,
  left: props.left,
}));
