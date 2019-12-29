import React from 'react'
import classnames from 'classnames'
import Classes from './avatar.module.scss'
import defaultAvatar from '../../assets/images/avatar.jpg'

export type AvatarProps = React.ComponentPropsWithRef<'div'> & {
  src?: string,
  size?: 'small' | 'large',
}

const Avatar: React.FC<AvatarProps> = props => {
  const { src = defaultAvatar, size = 'small', ...rest } = props

  const className = classnames(Classes.container, Classes[size])

  return (
    <div className={className} {...rest}>
      <img src={src} alt="avatar" />
    </div>
  )
}

export default Avatar
