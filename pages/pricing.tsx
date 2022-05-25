import Link from 'next/link'
import styles from '../styles/Home.module.css'
import { MainLayout } from '../components/layout/MainLayout';

export default function ContactPage() {
  return (
    <MainLayout>
      <h1 className={styles.title}>Pricing Page</h1>
      
        <h2 className={styles.title}>
        Ir a <Link href="/">Home</Link>
        </h2>
        
        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/pricing.js</code>
        </p>
        </MainLayout>
  )
}