import React from 'react'
import Child1 from './Child1'

const Parent = props => {
  return(
    <div>
      <ul className="button-group">
        <li><a href="#" className="small button">Button 1</a></li>
        <li><a href="#" className="small button">Button 2</a></li>
        <li><a href="#" className="small button">Button 3</a></li>
      </ul>
      <Child1 />
    </div>
  )
}
export default Parent