import Head from "next/head";
// import AnimeSpring2023 from '../components/AnimeSpring2023'
import Cards from "../components/Card/Cards";
import styles from "../styles/Home.module.css";
import { useState, useEffect } from "react";
import { margin } from "@mui/system";
import { api_url } from "../components/constants/constant";
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
    <div className={styles.container}>
      <Head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3286643574534343"
          crossorigin="anonymous"
        ></script>
        <title>Upcoming Anime 2023 - Update Folks</title>
        <meta
          name="google-site-verification"
          content="pfzk24IbYS53h7fP868UIjlzjtUcIKxzeONE1BJPD8c"
        />
        <meta
          name="description"
          content="upcoming anime 2023 | anime airing in january 2023"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
        <meta
          name="keyword"
          content="upcoming anime, upcoming anime 2023, upcoming anime january, new and upcoming anime, anime"
        ></meta>
        <meta name="author" content="updatefolks"></meta>
        <link rel="icon" href="/starlord.png" />
      </Head>

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
                style={{
                  position: "relative",
                  textAlign: "center",
                  fontSize:'25px'
                }}
              >
                Feel Free To View This Amazing Posts
              </p>
              </div>
            </div>
          </div>
          <div className={styles.wrapper}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                flexWrap: "wrap",
              }}
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
  );
}
