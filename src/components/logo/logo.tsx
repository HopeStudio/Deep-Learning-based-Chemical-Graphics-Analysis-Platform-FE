import React from 'react'
import classnames from 'classnames'
import { ReactComponent as LogoSVG } from '../../assets/images/logo.svg'
import Classes from './logo.module.scss'

export type LogoProps = React.ComponentProps<'svg'> & {
  height?: number,
  width?: number,
}

const Logo: React.FC<LogoProps> = props => {
  const { className: injectClassName, height, width, style: injectStyle, ...rest } = props

  const className = classnames(Classes.common, injectClassName)
  const style = Object.assign({
    width,
    height,
  }, injectStyle)

  return <LogoSVG className={className} style={style} {...rest}/>
}

export default Logo
