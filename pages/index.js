import Head from 'next/head'
import AnimeSpring2023 from '../components/AnimeSpring2023'
import styles from '../styles/Home.module.css'


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3286643574534343"
     crossorigin="anonymous"></script>
        <title>Upcoming Anime 2023 - Update Folks</title>
        <meta name="google-site-verification" content="pfzk24IbYS53h7fP868UIjlzjtUcIKxzeONE1BJPD8c" />
        <meta name="description" content="upcoming anime 2023 | anime airing in january 2023" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <meta name="keyword" content="upcoming anime, upcoming anime 2023, upcoming anime january, new and upcoming anime, anime"></meta>
        <meta name="author" content="updatefolks" ></meta>
        <link rel="icon" href="/starlord.png" />
      </Head>

      <main>
      <AnimeSpring2023 />
      </main>
    </div>
  )
}
