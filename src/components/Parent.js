import React from 'react'
import Child1 from './Child1'
import Header from './Header'

const Parent = props => {
  return(
    <div>
      <Header />
      <Child1 />
    </div>
  )
}
export default Parent