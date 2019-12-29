import React from 'react'
import classnames from 'classnames'
import Classes from './formItem.module.scss'

export type FormItemProps = React.ComponentPropsWithRef<'div'> & {
  label?: string | React.ReactElement,
  position?: 'top' | 'left',
  align?: 'space-between' | 'start' | 'end',
  space?: 'normal' | 'large',
}

const FormItem: React.FC<FormItemProps> = props => {
  const {
    label,
    children,
    position = 'top',
    className: injectClassName,
    align = 'space-between',
    space = 'normal',
    ...rest } = props

  const className = classnames(
    Classes.container,
    Classes[position],
    Classes[align],
    Classes['space-' + space],
    { [Classes['with-label']]: label },
    injectClassName)

  return (
    <div className={className} {...rest}>
      <div className={Classes.label}>{label}</div>
      <div className={Classes.item}>{children}</div>
    </div>
  )
}

export default FormItem
