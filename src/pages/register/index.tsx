import Register from '@/components/register'
import React from 'react'

type Props = {}

const register = (props: Props) => {
const personalData = {
    firstName:'',
    lastName:'',
    gender:'',
    mobileNumber:'',
    email:'',
    district:'',
    subDistrict:'',
    add1: '', 
    add2: '', 
    add3: '',
  }

  return (
    <div>
        <Register personaldata={personalData}/>
    </div>
  )
}

register.authGuard = false

export default register