import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <div><strong>Next 만들 때 : npx create-next-app@latest .</strong></div>
      <div><strong>Next 실행 : npm run dev</strong></div>
    </div>
  )
}