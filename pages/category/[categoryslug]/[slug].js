import React from "react";
import styles from "../../../styles/AnimePage.module.css";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { getRequest } from "../../../components/constants/ApiCall";
import Nav from "../../../components/Navbar/Nav";
import Head from "next/head";

export default function PostDetails() {
  const router = useRouter();
  var { slug } = router.query;
  // console.log("s", slug);  
  const [data, setData] = useState([]);
  const [recData, setRecData] = useState([])
  const fetchData = async (slug) => {
    const res = await getRequest(`/post-data/${slug}`);
    const resData = await res.json();
    setData(resData);
    var p_id = resData["id"];
    var cate = resData["category"];
    getRecommendedData(p_id, cate);
  };

  const getRecommendedData = async (p_id, cate) => {
    const res = await getRequest(`/recommended/posts/${p_id}/${cate}`);
    const resData = await res.json();
    console.log("rec_da", resData);
    setRecData(resData)
  };
  console.log("data_dd", data);

  useEffect(() => {
    if (slug) {
      fetchData(slug);
    }
  }, [slug]);
  return (
    <>
    <Head>
        <title>{data["post_title"]} - Update Folks</title>
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
   
    <div className={styles.page}>
      <Nav />
      <h1 className={styles.title}>{data["post_title"]} </h1>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          {data["post_data"]?.map((item, index) => (
            <div key={index}>
              <h3> {index + 1}. {item.title}</h3>
              <img
                alt="banner_image"
                src={item.image}
              />
              <ul style={{listStyle:'none'}} >
                {item.fall ? <li>
                  <strong>Release Date:</strong> {item.fall}{" "}
                </li> : null}                
                <li style={{fontSize:'18px', lineHeight:'28px'}} >   
                  <div  dangerouslySetInnerHTML={{__html: item.desc}}>
                    </div>                 
                </li>
              </ul>
            </div>
          ))}
        </div>
        <div className={styles.side_content}>
          <div className={styles.header}>
            <h3>Recommended</h3>
          </div>
          {recData.map((item, index) => (
            <div key={index}>
              <div className={styles.card}>
                <div className={styles.card_img}>
                  <img
                    width="100%"
                    src={item.post_image}
                    alt={item.alt}
                  />
                </div>
                <div style={{cursor:'pointer'}} className={styles.card_text}>
                  <Link href={`/category/${item.category}/${item.post_slug}`}>
                    <p>{item.post_title.substr(0, 46) }</p>
                  </Link>
                  <span> posted on {new Date(item.created_time).toLocaleDateString()} </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
  );
}
