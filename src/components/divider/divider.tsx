import React from 'react'
import classnames from 'classnames'
import Classes from './divider.module.scss'

export type DividerProps = React.ComponentPropsWithRef<'div'>

const Divider: React.FC<DividerProps> = props => {
  const { children, className: injectClassName, ...rest } = props

  const className = classnames(Classes.container, injectClassName)

  return (
    <div className={className} {...rest}>
      <div className={Classes.text}>{children}</div>
    </div>
  )
}

export default Divider
