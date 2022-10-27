import Image from "next/image";
import Head from 'next/head'
import React, { useState } from "react";
import styles from "../../../styles/details.module.css";
import { useRouter } from "next/router";
import Link from "next/link";
import { anime_data } from "../../../components/anime_data";
export default function AnimeDetail() {
  const router = useRouter();
  const { id, slug } = router.query;
  const [data, setData] = useState(anime_data);
  const item = data.filter((val) => val.title === slug)[0];
  console.log("item", item);
  return (
    <>
    <Head>
        <title>{item?.title} </title>
        <meta name="google-site-verification" content="pfzk24IbYS53h7fP868UIjlzjtUcIKxzeONE1BJPD8c" />
        <meta name="description" content={item?.desc} />
        <meta name="keyword" content="upcoming anime, upcoming anime 2023, upcoming anime january, new and upcoming anime, anime"></meta>
        <meta name="author" content="updatefolks" ></meta>
        <link rel="icon" href="/starlord.png" />
      </Head>
    <div style={{ padding: "6% 20px" }}>
      <div className={`${styles.blog_card}`}>
        <div className={styles.meta}>
          <div className={styles.photo}>
            <Image
              style={{ backgroundSize: "contain" }}
              src={`/images/${id}.jpeg`}
              width="479px"
              height="479px"
              alt={item?.title}
            />
          </div>
          <ul style={{ paddingLeft: "25px" }} className={styles.details}>
            <li className={styles.date}>{item?.fall}</li>
          </ul>
        </div>
        <div style={{ minHeight: "169px" }} className={styles.description}>
          <h1>{item?.title}</h1>
          <h2>{item?.fall} </h2>
          <p>{item?.desc} </p>
        </div>
      </div>
    </div></>
    
  );
}
