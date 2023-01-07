import Image from 'next/image'
import Link from 'next/link'
import React, {useState, useEffect} from 'react'
import styles from '../styles/AnimePage.module.css'
import { best_anime_2022 } from './constants/best_anime_2022'
import { API_URL } from './constants/constant'
export default function BestAnime2022() {
  const mapData = [{},{},{}]
  const cardData = [
    {
      title: "List of 40+ Upcoming Anime Releases in Winter",
      date: "2023",
      link: "/anime/winter/2023",
      img: 'upcoming-anime-winter-2023.jpg',
      alt: 'upcoming anime winter 2023'
    },
    {
      title: "List of 10+ Upcoming Anime Releases in Spring",
      date: "2022",
      link: "/",
      img:'upcoming-anime-spring-2023.jpg',
      alt: 'upcoming anime spring 2023'
    },
  ];
  const [data, setData] = useState([]);
  const fetchData = () => {
    fetch(API_URL + "/post-data/anime-best-2022")
      .then((res) => res.json())
      .then((data) => setData(data['post_data']));
  };
  console.log('da', data)

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className={styles.page} > 
    <h1 className={styles.title} >List of 10 Best Anime Series to Watch in 2022  </h1>
    <div className={styles.wrapper} >
     <div className={styles.content} >
      {data.map((item, index) => (
        <div key={index} >
        <h3> {index+1}. {item.title}  </h3>
        <img  alt='banner_image'
        //  src={`/images/best_2022/${item.img}`}  
        src={item.img}
         />
        <ul >
         <li><strong>Season:</strong>  {item.fall} </li>
         <li><strong>Description:</strong> {item.desc} </li>
        </ul>
        
         </div>
      ))}
     </div>
     <div className={styles.side_content} >
     <div className={styles.header} >
        <h3>Recommended</h3>
      </div>
      {cardData.map((item, index) => (
        <div key={index}>
        <div className={styles.card}>
          <div className={styles.card_img}>
            <img
              width="100%"
              src={`/images/recommended/${item.img}`}
              alt={item.alt}
            />
          </div>
          <div className={styles.card_text}>
          <Link href={item.link}>
            <p>
              {item.title} 
            </p>
            </Link>
            <span> {item.date}</span>
          </div>
        </div>
      </div>
      ))}
     </div>
    </div>
    </div>
  )
}
