import styles from './Layout.module.css'
import  Head  from 'next/head';
import { Navbar } from '../Navbar';
import { FC } from 'react';

type Props = {
  children: React.ReactNode
}

export const MainLayout: FC<Props> = ({children}) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home | Next.Js</title>
        <meta name="description" content="Home Next.Js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      
      <main className={styles.main}>
        {children}
      </main>

    </div>
  )
}
