import React from 'react'
import Child1 from './Child1'
import Foundation from 'react-foundation'
import Button from './Button'


const Parent = props => {
  return(
    <div>
    <Button color={Colors.SUCCESS}>Save</Button>
    <Child1 />
    </div>
  )
}
export default Parent