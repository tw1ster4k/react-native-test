import React from 'react'
import { Svg, Path } from 'react-native-svg'

const SearchIcon = (props) => {
  return (
    <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={22}
    height={22}
    {...props}
  >
    <Path
      fill="#fff"
      fillRule="evenodd"
      d="M4.583 10.083c0-3.033 2.467-5.5 5.5-5.5 3.034 0 5.5 2.467 5.5 5.5 0 3.034-2.466 5.5-5.5 5.5a5.505 5.505 0 0 1-5.5-5.5Zm14.398 7.602-3.112-3.113a7.29 7.29 0 0 0 1.548-4.489c0-4.043-3.29-7.333-7.334-7.333-4.043 0-7.333 3.29-7.333 7.333 0 4.044 3.29 7.334 7.333 7.334a7.29 7.29 0 0 0 4.49-1.548l3.112 3.112a.914.914 0 0 0 1.296 0 .916.916 0 0 0 0-1.296Z"
      clipRule="evenodd"
    />
  </Svg>
  )
}

export default SearchIcon