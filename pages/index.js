import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import { Container } from '@mui/material'
import Whoami from '../Components/Whoami'
import About from '../Components/About'
import Nav2 from '../Components/Nav2'
import Skills from '../Components/Skills'
import Mywork from '../Components/Mywork'
import Contact from '../Components/Contact'






export default function Home() {
  return (
    <>
      <Head>
        <title>Nada Orban</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logonada.png" />
        <link rel="icon" href="%PUBLIC_URL%/logonada.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,200;0,300;0,700;1,600;1,700&display=swap" rel="stylesheet" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
        />
        <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet"></link>

      </Head>

      <Whoami />


      <About />
      <Skills />
      <Mywork />
      <Contact />











    </>
  )
}
