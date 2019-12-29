import React from 'react'
import classnames from 'classnames'
import {Container} from '../../containers'
import { Title, FormItem, Button, Input } from '../../components'
import Classes from './search.module.scss'

const Search: React.FC = props => {
  const className = classnames(Classes.container)
  return (
    <Container className={className}>
      <Title sub="material infomation, IR raw data……" className={Classes.title}>
        Search For
      </Title>
      <FormItem className={Classes.form}>
        <Input className={Classes.input} placeholder="please input Cas No."/>
        <Button type="gradient" size="large">Search</Button>
      </FormItem>
    </Container>
  )
}

export default Search
