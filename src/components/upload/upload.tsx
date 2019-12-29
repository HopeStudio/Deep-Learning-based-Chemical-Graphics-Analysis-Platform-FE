import React, { useState } from 'react'
import classnames from 'classnames'
import uuid from 'uuid/v4'
import Classes from './upload.module.scss'

const Upload: React.FC<React.ComponentPropsWithRef<'input'>> = props => {
  const [id] = useState(uuid())

  const { children, className: injectClassName, style, ...rest } = props
  const className = classnames(Classes.container, injectClassName)

  return (
    <label htmlFor={id} className={className} style={style}>
      <input hidden type="file" id={id} {...rest} />
      {children}
    </label>
  )
}

export default Upload
