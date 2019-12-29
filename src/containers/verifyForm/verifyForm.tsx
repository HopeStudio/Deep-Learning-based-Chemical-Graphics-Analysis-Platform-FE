import React from 'react'
import { FormItem, Input, Button } from '../../components'

const VerifyForm: React.FC = props => {
  return (
    <form>
      <FormItem>
        <Input placeholder="please input user name" />
      </FormItem>

      <FormItem>
        <Input placeholder="please input password" />
      </FormItem>

      <FormItem>
        <Button type="gradient" size="auto">
          Confirm
      </Button>
      </FormItem>
    </form>
  )
}

export default VerifyForm
