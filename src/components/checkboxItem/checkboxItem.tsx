import React, { useState, FormEvent, ChangeEvent } from 'react'
import classnames from 'classnames'
import Classes from './checkboxItem.module.scss'
import { ReactComponent as CheckIcon } from '../../assets/images/check-icon.svg'

export interface CheckboxItemProps {
  onChange: () => void
  checked: boolean
}

const CheckboxItem: React.FC<CheckboxItemProps> = props => {
  const {
    onChange,
    checked,
  } = props

  const className = classnames(Classes.container, {
    [Classes.active]: checked,
  })

  return (
    <div className={className}>
      <input type="checkbox" className={Classes.checkbox} checked={checked} onChange={onChange} />
      <span className={Classes.icon}>
        <CheckIcon className={Classes['check-icon']} />
      </span>
    </div>
  )
}

export default CheckboxItem
