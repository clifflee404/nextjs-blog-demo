import Head from "next/head"
import Layout, { siteTitle } from "../components/layout"
// import styles from '../styles/Home.module.css';
// import Link from 'next/link'
import utilStyles from "../styles/utils.module.css"

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <section className={utilStyles.headingMd}>
        <p>做有价值的,自己有兴趣的事情</p>
        <p>
          (This is a sample website - you'll be building a site like this on{" "}
          <a href="https://nextjs.org/learn">our Next.js tutorial.</a>)
        </p>
      </section>
    </Layout>
  )
}
