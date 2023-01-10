import Head from "next/head";
import Cards from "../components/Card/Cards";
import styles from "../styles/Home.module.css";
import { useState, useEffect } from "react";
import Nav from "../components/Navbar/Nav";
import { getRequest } from "../components/constants/ApiCall";

export default function Home() {
  const [data, setData] = useState([]);
  const fetchData = async () => {
   const res = await getRequest('/all/posts')
   const resData = await res.json()
   setData(resData)
  };
  // console.log('da', data)

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
    <Head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3286643574534343"
          crossorigin="anonymous"
        ></script>
        <title>Update Folks</title>
        <meta
          name="google-site-verification"
          content="pfzk24IbYS53h7fP868UIjlzjtUcIKxzeONE1BJPD8c"
        />
        <meta
          name="description"
          content="Latest News, Updates and recommendation for folks"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
        <meta
          name="keyword"
          content="upcoming anime, upcoming anime 2023, upcoming anime january, new and upcoming anime, anime, hollywood movies, best hollywood movies 2022, top 10 hollywood movies of all time"
        ></meta>
        <meta name="author" content="updatefolks"></meta>
        <link rel="icon" href="/starlord.png" />
      </Head>
    <div className={styles.container}>
      

      <main>
        <div className={styles.page}>
          <Nav />
          <div>
            <div className={styles.content_section} >
              <div  className={styles.content} >
              <h2
              >
                Welcome To Update Folks
              </h2>
              <p
              className="relative text-center text-2xl"
              >
                Feel Free To View This Amazing Posts
              </p>
              </div>
            </div>
          </div>
          <div className={styles.wrapper}>
            <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1"
            >
              {data.map((item, id) => (
                <>
                <Cards  key={id} item={item} />
                </>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
    </>
  );
}
