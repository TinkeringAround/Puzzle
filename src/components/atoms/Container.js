import styled from 'styled-components'

//-------------------------------------------------------------------------//
const Container = styled.div`
  position: ${props => (props.position == null ? 'static' : props.position)};
  top: ${props => (props.top == null ? 'auto' : props.top)};
  left: ${props => (props.left == null ? 'auto' : props.left)};
  bottom: ${props => (props.bottom == null ? 'auto' : props.bottom)};
  right: ${props => (props.right == null ? 'auto' : props.right)};

  margin: ${props => (props.margin == null ? '0' : props.margin)};
  padding: ${props => (props.padding == null ? '0' : props.padding)};

  width: ${props => (props.width == null ? '100%' : props.width)};
  height: ${props => (props.height == null ? '100%' : props.height)};

  background-color: ${props =>
    props.backgroundColor == null ? props.theme.colors.white : props.backgroundColor};
`
export default Container
