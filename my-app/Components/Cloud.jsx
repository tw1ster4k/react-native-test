import React from 'react'
import { Svg, Path } from 'react-native-svg'

const Cloud = (props) => {
  return (
    <Svg
    width={82}
    height={27}
    viewBox="0 0 82 27"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M0 11.686C0 2.063 2.237 0 12.675 0h56.65C79.763 0 82 2.063 82 11.686v3.628C82 24.937 79.763 27 69.325 27h-56.65C2.237 27 0 24.937 0 15.314v-3.628z"
      fill="#02B897"
    />
  </Svg>
  )
}

export default Cloud