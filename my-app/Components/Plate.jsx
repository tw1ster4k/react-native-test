import React from 'react'
import { Svg, Path } from 'react-native-svg'

const Plate = (props) => {
  return (
    <Svg
    width={16}
    height={10}
    viewBox="0 0 16 10"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M14.667 4.667H1.333C.397 4.667 0 5.025 0 6c0 1.17 1.625.972 4 2.667-.48.352-.49.663 0 1.333-.118-.105 2.549-.105 8 0 .49-.669.48-.98 0-1.333C14.375 6.972 16 7.17 16 6c0-.975-.397-1.333-1.333-1.333zm-12.442 0a2.334 2.334 0 004.217 0H2.225zm-.201-1.334a2.334 2.334 0 014.619 0h-4.62zm6.481 1.334A2.997 2.997 0 0011 6c1.04 0 1.957-.53 2.495-1.333h-4.99zm-.487-1.334a3 3 0 115.963 0H8.019z"
      fill="#FF7A00"
    />
  </Svg>
  )
}

export default Plate