import Footer from '@/layouts/Footer';
import Header from '@/layouts/Header';
import { Box } from '@mui/material';
import type { AppProps } from 'next/app';
import '../../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
  <Box>
    <Header/>
    <Component {...pageProps} />
    <Footer/>
    </Box>
  )
 
}

export default MyApp;