import React from 'react'
import { VerifyForm, Form } from '../../containers'

const Verify: React.FC = props => {
  return (
    <Form title="Verify Your Account" sub="you are doing some dangerous actions">
      <VerifyForm />
    </Form>
  )
}

export default Verify
