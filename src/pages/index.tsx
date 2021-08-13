import Head from 'next/head'
import { BasicStyle } from '../styles/Globals'
import { Landing } from './landing'

const Home: React.FC = () => {
  return (
    <BasicStyle>
      <Head>
        <title>MRstudio</title>
      </Head>

      <Landing/>
    </BasicStyle>
  )
}

export default Home