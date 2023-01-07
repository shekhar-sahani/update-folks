import Head from "next/head";
// import AnimeSpring2023 from '../components/AnimeSpring2023'
import Cards from "../components/Card/Cards";
import styles from "../styles/Home.module.css";
import { useState, useEffect } from "react";
import { API_URL } from "../components/constants/constant";
import { margin } from "@mui/system";

export default function Home() {
  const [data, setData] = useState([]);
  const fetchData = () => {
    fetch(API_URL + "/all/posts")
      .then((res) => res.json())
      .then((data) => setData(data));
  };
  // console.log('da', data)

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className={styles.container}>
      <Head>
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Yeon+Sung&display=swap');
        </style>
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

      <main style={{ backgroundColor: "#282c34" }}>
        <div className={styles.page}>
          <div>
            <div>
              <img
                style={{
                  width: "100%",
                  height: "600px",
                  objectFit: "cover",
                  opacity: "0.6",
                  
                }}
                src="../images/banner_2023/anime_2.jpg"
                alt=""
              />
              <h2
                style={{
                  fontSize: "55px",
                  // opacity: "0.8",
                  position: "relative",
                  bottom: "390px",
                  textAlign: "center",
                  color: "white",
                  fontFamily: "Yeon Sung",
                }}
                className={styles.title}
              >
                
                Welcome To Update Folks
              </h2>
              {/* <p
                style={{
                  fontSize: "35px",
                  // opacity: "0.8",
                  position: "relative",
                  bottom: "370px",
                  textAlign: "center",
                  color: "white",
                  fontFamily: "Yeon Sung",
                  width:"70%",
                  left:"10%"
                }}
              >
                Wikipedia is a free online encyclopedia, created and edited by
                volunteers around the world and hosted by the Wikimedia
                Foundation.
              </p>
       */}
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
                <Cards key={id} item={item} />
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
