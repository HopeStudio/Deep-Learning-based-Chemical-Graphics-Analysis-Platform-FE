import React from 'react'
import classnames from 'classnames'
import Classes from './title.module.scss'

export type TitleProps = React.ComponentPropsWithRef<'div'> & {
  sub?: string | React.ReactElement,
}

const Title: React.FC<TitleProps> = props => {
  const { children, sub, className: injectClassName, ...rest } = props

  const className = classnames(Classes.container, injectClassName)

  return (
    <div className={className}>
      <h2 className={Classes.title}>{children}</h2>
      {
        sub ?
          <h4 className={Classes['sub-title']}>{sub}</h4>
          : ''
      }
    </div>
  )
}

export default Title
