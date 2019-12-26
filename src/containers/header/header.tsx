import React from 'react'
import { Button } from '../../components'
import { connect } from 'react-redux'
import { plusOne } from '../../redux/actions'

const Header: React.FC<{plus: any, num: any}> = ({ plus, num }) => {
  return (
    <div>
      <h1>{num}</h1>
      <Button onClick={plus} type={num > 40 ? 'normal' : 'danger'}>Plus One</Button>
    </div>
  )
}

const mapStateToProps = (state: any) => ({
  num: state.plusone,
})

const mapDispatchToProps = {
  plus: plusOne,
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
