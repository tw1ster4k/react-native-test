import React from 'react'
import { Svg, Path } from 'react-native-svg'

const Triangle = (props) => {
  return (
    <Svg
      width={11}
      height={6}
      viewBox="0 0 11 6"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M5.5 6L.737 0h9.526L5.5 6z" fill="#02B897" />
    </Svg>
  )
}

export default Triangle