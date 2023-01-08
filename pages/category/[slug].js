import Image from "next/image";
import React from "react";
import styles from "../../styles/AnimePage.module.css";
import Link from "next/link";
import { useState, useEffect } from "react";
import { api_url } from "../../components/constants/constant";
import { useRouter } from "next/router";
import { getRequest } from "../../components/constants/ApiCall";
import Nav from "../../components/Navbar/Nav";

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
    <div className={styles.page}>
      <Nav />
      <h1 className={styles.title}>{data["post_title"]} </h1>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          {data["post_data"]?.map((item, index) => (
            <div key={index}>
              <h3>{item.title}</h3>
              <img
                alt="banner_image"
                //  src={`/images/spring_2023/${index+1}.webp`}

                src={item.image}
              />
              <ul>
                <li>
                  <strong>Release Date:</strong> {item.fall}{" "}
                </li>
                <li>
                  <strong>Description:</strong> {item.desc}{" "}
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
                <div className={styles.card_text}>
                  <Link href={`/category/${item.post_slug}`}>
                    <p>{item.post_title.substr(0, 46) }</p>
                  </Link>
                  <span> 2022</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
