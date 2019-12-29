import React from 'react'
import classnames from 'classnames'
import Classes from './input.module.scss'

export type InputProps = Omit<React.ComponentPropsWithRef<'input'>, 'type' | 'size'> & {
  width?: number,
  height?: number,
  type?: 'text' | 'password',
  size?: 'normal' | 'auto' | 'large',
}

const Input: React.FC<InputProps> = props => {
  const {
    className: injectClassName,
    type = 'text',
    style: injectStyle,
    width,
    height,
    size = 'auto',
    ...rest
  } = props

  const style = Object.assign({
    width,
    height,
  }, injectStyle)

  const className = classnames(
    Classes.input,
    Classes[size],
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
