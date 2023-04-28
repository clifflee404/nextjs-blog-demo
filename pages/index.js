import Head from "next/head"
import Layout, { siteTitle } from "../components/layout"
// import styles from '../styles/Home.module.css';
// import Link from 'next/link'
import utilStyles from "../styles/utils.module.css"
import { getSortedPostsData } from "../lib/posts"

export async function getStaticProps() {
  console.log("---getStaticProps")
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData,
    },
  }
}

export default function Home({ allPostsData }) {
  console.log("---Home: allPostsData", allPostsData)
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

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              title: {title}
              <br />
              id :{id}
              <br />
              date: {date}
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}
