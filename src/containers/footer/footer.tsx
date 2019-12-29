import React from 'react'
import classnames from 'classnames'
import { Link } from 'react-router-dom'
import { Logo, Divider } from '../../components'
import { Container } from '../../containers'
import Classes from './footer.module.scss'

export type FooterProps = React.ComponentPropsWithRef<'div'>

const Footer: React.FC<FooterProps> = props => {
  const { className: injectClassName, ...rest } = props

  const className = classnames(Classes.wrapper, injectClassName)

  return (
    <Container className={className} {...rest}>
      <footer className={Classes.footer}>
        <section className={Classes['logo-wrapper']}>
          <Logo className={Classes.logo} />
        </section>

        <section className={Classes.products}>
          <h4>Products</h4>
          <ul>
            <li><Link to="iranalysis">IR Analysis</Link></li>
          </ul>
        </section>

        <section>
          <h4>Contact</h4>
          <ul>
            <li>
              Location: 233
          </li>
          </ul>
        </section>

        <section>
          <h4>Company</h4>
        </section>
      </footer>
      <Divider type="line" />
      <span className={Classes.copyright}>@copyright 2019</span>
    </Container>
  )
}

export default Footer
