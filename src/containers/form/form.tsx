import React from 'react'
import { Title } from '../../components'
import Classes from './form.module.scss'

export type FormProps = React.ComponentPropsWithRef<'div'> & {
  sub?: string | React.ReactElement,
  title?: string | React.ReactElement,
}

const Form: React.FC<FormProps> = props => {
  const { children, title, sub, ...rest } = props
  return (
    <div className={Classes.page} {...rest}>
      <Title
        sub={sub}
      >
        {title}
      </Title>
      <div className={Classes.container}>
        {children}
      </div>
    </div>
  )
}

export default Form
