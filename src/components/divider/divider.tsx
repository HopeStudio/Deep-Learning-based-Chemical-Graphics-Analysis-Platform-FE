import React from 'react'
import classnames from 'classnames'
import Classes from './divider.module.scss'

export type DividerProps = React.ComponentPropsWithRef<'div'> & {
  type?: 'normal' | 'line' | 'dashed',
  space?: boolean,
}

const Divider: React.FC<DividerProps> = props => {
  const { children, type = 'normal', space = false, className: injectClassName, ...rest } = props

  const className = classnames(Classes.container, Classes[type], {
    [Classes.space]: space,
  }, injectClassName)

  return (
    <div className={className} {...rest}>
      <div className={Classes.text}>{children}</div>
    </div>
  )
}

export default Divider
