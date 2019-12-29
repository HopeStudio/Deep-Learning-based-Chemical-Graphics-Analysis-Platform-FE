import React from 'react'
import classnames from 'classnames'
import Classes from './container.module.scss'

export type ContainerProps = React.ComponentPropsWithRef<'div'> & {
  type?: 'flex' | 'main',
}

const Container: React.FC<ContainerProps> = props => {
  const { children, className: injectClassName, type = 'main' } = props
  const className = classnames(Classes.container, Classes[type], injectClassName)
  return (
    <div className={className}>
      {children}
    </div>
  )
}

export default Container
