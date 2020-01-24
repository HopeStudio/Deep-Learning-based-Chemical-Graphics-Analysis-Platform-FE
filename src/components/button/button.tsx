import classnames from 'classnames'
import React from 'react'
import Classes from './button.module.scss'

export type ButtonProps = Omit<React.ComponentProps<'button'>, 'type'> & {
  type?: 'gradient' | 'normal' | 'danger'
  nativeType?: 'button' | 'submit' | 'reset' | undefined
  size?: 'large' | 'normal' | 'small' | 'auto' | 'medium'
  // disabled?: boolean
  outline?: boolean,
  noEvent?: boolean,
}

const Button: React.FC<ButtonProps> = (props) => {
  const {
    children,
    type = 'normal',
    nativeType,
    size = 'normal',
    className: injectClass,
    disabled,
    outline = false,
    noEvent = false,
    ...others
  } = props

  const className = classnames(
    Classes.common,
    Classes['type-' + type],
    Classes['size-' + size],
    {
      [Classes['no-outline']]: !outline,
      [Classes['no-event']]: !!noEvent,
    },
    injectClass)

  return (
    <button className={className} type={nativeType} {...others} disabled={disabled}>
      {children}
    </button>
  )
}

export default Button
