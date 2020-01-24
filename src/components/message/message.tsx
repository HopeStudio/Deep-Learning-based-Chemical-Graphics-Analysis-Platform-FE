import React, { DOMElement, useState, ReactElement } from 'react'
import ReactDOM from 'react-dom'
import Classes from './message.module.scss'

function createMessageRootContainer(): () => HTMLElement {
  let rootContainer: HTMLElement | undefined
  return () => {
    if (rootContainer) {
      return rootContainer
    }

    rootContainer = document.createElement('div')
    rootContainer.className = Classes['message-container']
    document.body.appendChild(rootContainer)
    return rootContainer
  }
}

const getMessageRootContainer = createMessageRootContainer()

const Message: React.FC = props => {
  const { children } = props
  const [visibility, handleVisibility] = useState(true)

  const message = visibility && (
    <div className={Classes['item-wrapper']}>
      <div className={Classes.item}>{children}</div>
    </div>
  )

  setTimeout(() => {
    handleVisibility(false)
  }, 5000)
  return ReactDOM.createPortal(message, getMessageRootContainer())
}

export const createMessage = (messageStr: string) => {
  const message = (
    <div className={Classes['item-wrapper']}>
      <div className={Classes.item}>{messageStr}</div>
    </div>
  )

  setTimeout(() => {
    ReactDOM.unmountComponentAtNode(getMessageRootContainer())
  }, 5000)
  return ReactDOM.render(message, getMessageRootContainer())
}

export default Message
