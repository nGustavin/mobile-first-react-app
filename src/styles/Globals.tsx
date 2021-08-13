import { ReactNode } from 'react'
import {createGlobalStyle} from 'styled-components'
import colors from '../contants/colors'

export const Global = createGlobalStyle`
  *{
    padding: 0;
    box-sizing: border-box;
    margin: 0;
    font-family: 'Poppins', sans-serif;
    
  }

  body{
    width: 100vw;
    height: 100vh;
    background-color:${colors.white};

    
  }
`

type GlobalProps = {
  children: ReactNode
}

export const BasicStyle: React.FC<GlobalProps> = ({children}) => {
  return(
    <>
      <Global/>
      {children}
    </>
  )
}