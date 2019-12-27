import React from 'react'
import { useSelector } from 'react-redux'
import useActions from '../../actions'
import { State } from '../../model'
import * as plusone from '../../actions/plusone'
import { Button } from '../../components'

const Header: React.FC = () => {
  const plusOne = useActions<typeof plusone>(plusone)
  const value = useSelector((state: State) => state.plus)
  return (
    <div>
      <h1>{value}</h1>
      <Button
        onClick={plusOne.plus}
        type={'danger'}
        size="normal">Register</Button>
    </div>
  )
}

export default Header
