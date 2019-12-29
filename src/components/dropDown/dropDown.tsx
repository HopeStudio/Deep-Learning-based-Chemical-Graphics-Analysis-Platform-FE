import React from 'react'
import classnames from 'classnames'
import Classes from './dropDown.module.scss'

export type DropDownProps = React.ComponentPropsWithRef<'div'> & {
  dropDown?: string | React.ReactElement,
  type?: 'hover' | 'click',
}

const DropDown: React.FC<DropDownProps> = props => {
  const { children, dropDown, className: injectClassName, type = 'hover' } = props

  const className = classnames(Classes.container, Classes[type], injectClassName)

  return (
    <div className={className}>
      {children}
      <div className={Classes.dropdown}>
        {dropDown}
      </div>
    </div>
  )
}

export default DropDown
