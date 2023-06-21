import React from 'react'
import { Svg, Path } from 'react-native-svg'

const Home = (props) => {
  return (
    <Svg
      width={48}
      height={48}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M0 15.936C0 2.813 2.813 0 15.936 0h16.128C45.187 0 48 2.813 48 15.936v16.128C48 45.187 45.187 48 32.064 48H15.936C2.813 48 0 45.187 0 32.064V15.936z"
        fill="#555"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M28 31.988h2.99l.01-8.376-7.002-7.192-6.992 7.15L17 31.989h3v-7a1 1 0 011-1h6a1 1 0 011 1v7zm-2 0h-4v-6h4v6zm6.424-9.815l-7.709-7.884c-.377-.385-1.053-.385-1.43 0l-7.71 7.885A2.075 2.075 0 0015 23.612v8.376c0 1.103.847 2 1.888 2H31.111c1.041 0 1.89-.897 1.89-2v-8.376c0-.54-.21-1.063-.577-1.44z"
        fill="#fff"
      />
    </Svg>
  )
}

export default Home