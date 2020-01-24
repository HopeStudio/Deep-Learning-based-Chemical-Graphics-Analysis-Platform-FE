import React from 'react'
import Classes from './homepage.module.scss'
import { Container } from '../../containers'
import { Button } from '../../components'
import irDataImg from '../../assets/images/ir-data.webp'
import triangleTop from '../../assets/images/triangle-top.svg'
import nutualNetwork from '../../assets/images/nutual-network.webp'
import triangle from '../../assets/images/triangle.webp'
import clock from '../../assets/images/clock.svg'
import gradientBackground from '../../assets/images/gradient-background.webp'
import {Message, createMessage} from '../../components'

const HomePage: React.FC = props => {
  return (
    <div className={Classes.container}>
      <section className={Classes['main-section']}>
        <Container>
          <h1>
            Chemical Graphics
          <br />
            Analysis Platform
        </h1>

          <p className={Classes.description}>
            We use deep learning to analyze chemical graphics
          <br />
            helping scientist more easier to find out the important
          <br />
            infomation from chemical graphics.
        </p>

          <Button type="gradient" size="large">
            Get Started
        </Button>

          <img src={irDataImg} alt="irData" className={Classes['ir-data']} />
          <img src={triangleTop} className={Classes['triangle-top']} />
        </Container>
      </section>

      <section className={Classes['deep-learning-section']}>
        <Container>
          <div className={Classes['deep-learning-content']}>
            <h1>Deep Learning Based</h1>
            <p className={Classes['description-2']}>
              We use deep learning to analyze chemical graphics
          <br />
              helping scientist more easier to find out the important
          <br />
              infomation from chemical graphics.
          </p>
            <img src={nutualNetwork} alt="nutualNetwork" className={Classes['nutual-network']} />
            <img src={triangle} className={Classes.triangle} />
          </div>
        </Container>
      </section>

      <section>
        <Container className={Classes['save-time-sectoin-content']}>
          <div>
            <h1>Save More Time</h1>
            <p className={Classes['description-2']}>
              We use deep learning to analyze chemical graphics
            <br />
              helping scientist more easier to find out the important
            <br />
              infomation from chemical graphics.
          </p>
          </div>
          <img src={clock} className={Classes.clock} />
        </Container>
      </section>

      <section className={Classes['possibility-section']}>
        <Container className={Classes['possibility-section-content']}>
          <div>
            <h1>Explore Infinity Possibility</h1>
            <p className={Classes['description-2']}>
              We use deep learning to analyze chemical graphics
          <br />
              helping scientist more easier to find out the important
          <br />
              infomation from chemical graphics.
          </p>
            <div className={Classes['button-container']}>
              <Button type="gradient" size="medium">
                Get Started
            </Button>
            </div>
          </div>
          <img src={gradientBackground} className={Classes['gradient-background']} />
        </Container>
      </section>
    </div>
  )
}

export default HomePage
