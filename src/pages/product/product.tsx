import React from 'react'
import { Container } from '../../containers'
import { Button } from '../../components'
import Classes from './product.module.scss'
import triangleTop from '../../assets/images/triangle-top.svg'
import irDataImg from '../../assets/images/ir-data.webp'

const Product: React.FC = props => {
  return (
    <div>
      <section className={Classes['main-section']}>
        <Container>
          <h1>
            IR Analyser
          </h1>

          <p className={Classes.description}>
          We use deep learning to analyze chemical graphics
          <br/>
          helping scientist more easier to find out the important
          <br/>
          infomation from chemical graphics.
        </p>

          <Button type="gradient" size="large">
            Have a Try
          </Button>
          <Button type="normal" size="large">
            Learn More
          </Button>

          <img src={irDataImg} alt="irData" className={Classes['ir-data']} />
          <img src={triangleTop} className={Classes['triangle-top']} />
        </Container>
      </section>

    </div>
  )
}

export default Product
