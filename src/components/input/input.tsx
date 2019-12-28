import React from 'react'
import classnames from 'classnames'
import Classes from './input.module.scss'

export type InputProps = Omit<React.ComponentPropsWithRef<'input'>, 'type'> & {
  width?: number,
  type?: 'text' | 'password',
}

const Input: React.FC<InputProps> = props => {
  const {
    className: injectClassName,
    type = 'text',
    ...rest
  } = props

  const className = classnames(
    Classes.input,
    injectClassName)

  return (
    <input type={type} className={className} {...rest} placeholder="please input your name"/>
  )
}

export default Input
