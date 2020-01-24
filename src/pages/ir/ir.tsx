import React, { ChangeEvent } from 'react'
import Upload from '../../components/upload/upload'
import { Button } from '../../components'
import { Container } from '../../containers'
import Classes from './ir.module.scss'
import { irAnalyse } from '../../api/ir'

const IR: React.FC = props => {
  async function handleUpload(event: ChangeEvent<HTMLInputElement>) {
    const { files } = event.target
    const file = files && files[0]
    // console.log(file)
    if (file) {
      await irAnalyse(file)
    }
  }
  return (
    <Container className={Classes.container}>
      <h1>IR Analysis</h1>
      <Upload onChange={handleUpload}>
        <Button noEvent>
          请上传.csv文件分析
      </Button>
      </Upload>
    </Container>
  )
}

export default IR
