
import Link from 'next/link'
import { DarkLayout } from '../components/layout/DarkLayout';
import styles from '../styles/Home.module.css'
import { MainLayout } from '../components/layout/MainLayout';

export default function AboutPage() {
  return (
    <>
     
      <h1 className={styles.title}>About Page</h1>
      
        <h2 className={styles.title}>
        Ir a <Link href="/">Home</Link>
        </h2>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/about.js</code>
        </p>
        
        </>
  )
}

  
  AboutPage.getLayout = function getLayout (page: JSX.Element) {
    return (
      <MainLayout>
        <DarkLayout>
          {page}
        </DarkLayout>
      </MainLayout>
  )}