import styled from 'styled-components'

//-------------------------------------------------------------------------//
const SVG = styled.svg`
  position: ${props => (props.position == null ? 'static' : props.position)};
  top: ${props => (props.top == null ? 'auto' : props.top)};
  left: ${props => (props.left == null ? 'auto' : props.left)};
  bottom: ${props => (props.bottom == null ? 'auto' : props.bottom)};
  right: ${props => (props.right == null ? 'auto' : props.right)};

  margin: ${props => (props.margin == null ? '0' : props.margin)};
  ${props =>
    props.margin == null
      ? `margin-top: ${props.marginTop == null ? 'auto' : props.marginTop};
  margin-right: ${props.marginRight == null ? 'auto' : props.marginRight};
  margin-bottom: ${props.marginBottom == null ? 'auto' : props.marginBottom};
  margin-left: ${props.marginLeft == null ? 'auto' : props.marginLeft};`
      : ''}

  padding: ${props => (props.padding == null ? '0' : props.padding)};
  ${props =>
    props.padding == null
      ? `padding-top: ${props.paddingTop == null ? 'auto' : props.paddingTop};
  padding-right: ${props.paddingRight == null ? 'auto' : props.paddingRight};
  padding-bottom: ${props.paddingBottom == null ? 'auto' : props.paddingBottom};
  padding-left: ${props.paddingLeft == null ? 'auto' : props.paddingLeft};`
      : ''}

  width: ${props => (props.width == null ? '100%' : props.width)};
  height: ${props => (props.height == null ? '100%' : props.height)};

  fill: ${props => (props.fill == null ? '#000' : props.fill)};
`
export default SVG