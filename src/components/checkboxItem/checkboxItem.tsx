import React, { useState } from 'react'
import classnames from 'classnames'
import uuid from 'uuid/v4'
import Classes from './checkboxItem.module.scss'
import { ReactComponent as CheckIcon } from '../../assets/images/check-icon.svg'

export interface CheckboxItemProps {
  onChange: () => void
  checked: boolean,
  className?: string,
}

const CheckboxItem: React.FC<CheckboxItemProps> = props => {
  const {
    onChange,
    checked,
    className: injectClassName,
    children,
    ...rest
  } = props

  const [randomId] = useState(uuid())

  const className = classnames(Classes.container, {
    [Classes.active]: checked,
  })

  const wrapperClassName = classnames(Classes.wrapper, injectClassName)

  return (
    <label htmlFor={randomId} className={wrapperClassName} {...rest}>
      <div className={className}>
        <div className={Classes.icon}>
          <CheckIcon className={Classes['check-icon']} />
        </div>
        <input
          type="checkbox"
          hidden
          className={Classes.checkbox}
          checked={checked}
          onChange={onChange}
          id={randomId}
        />
      </div>
      {children}
    </label>
  )
}

export default CheckboxItem
