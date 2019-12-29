import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Input, CheckboxItem, Button, Divider, FormItem } from '../../components'
import Classes from './associateAccountForm.module.scss'

const AssociateAccountForm: React.FC = () => {
  const [checked, setChecked] = useState(false)

  function handleChange() {
    setChecked(!checked)
  }

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
          Associate
      </Button>
      </FormItem>

      <FormItem>
        <Button type="normal" size="auto">
          Skip
      </Button>
      </FormItem>
    </form>

  )
}

export default AssociateAccountForm
