
import Link from 'next/link'

import styles from '../styles/Home.module.css'
import { MainLayout } from '../components/layout/MainLayout';

export default function HomePage() {
  return (
    <MainLayout>
      <h1 className={styles.title}>Home Page</h1>
      
        <h2 className={styles.title}>
          Ir a <Link href="/about">About</Link>
        </h2>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>
        </MainLayout>
  )
}
