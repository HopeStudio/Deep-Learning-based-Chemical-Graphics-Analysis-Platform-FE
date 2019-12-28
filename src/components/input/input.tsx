import React from 'react'
import classnames from 'classnames'
import Classes from './input.module.scss'

export type InputProps = Omit<React.ComponentPropsWithRef<'input'>, 'type'> & {
  width?: number,
  height?: number,
  type?: 'text' | 'password',
}

const Input: React.FC<InputProps> = props => {
  const {
    className: injectClassName,
    type = 'text',
    style: injectStyle,
    width,
    height,
    ...rest
  } = props

  const style = Object.assign({
    width,
    height,
  }, injectStyle)

  const className = classnames(
    Classes.input,
    injectClassName)

  return (
    <input
      type={type}
      className={className}
      style={style}
      {...rest}
    />
  )
}

export default Input
