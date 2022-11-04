import Image from 'next/image'
import React from 'react'
import styles from '../styles/AnimePage.module.css'
import { anime_spring_data } from './constants/anime_spring_data'
import Link from 'next/link'

export default function AnimeSpring2023() {
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
      title: "List of 10 Best Anime Series to Watch in 2022",
      date: "2022",
      link: "/anime/best/2022",
      img:'best-anime-2022.jpg',
      alt: "best anime 2022"
    },
  ];
  return (
    <div className={styles.page} > 
    <h1 className={styles.title} >List of 10+ Upcoming Anime Releases in Spring 2023 [With Release Dates & Updates] </h1>
    <div className={styles.wrapper} >
     <div className={styles.content} >
      {anime_spring_data.map((item, index) => (
        <div key={index}>
        <h3>{item.title}  </h3>
        <img  alt='banner_image' src={`/images/spring_2023/${index+1}.webp`}  />
        <ul >
         <li><strong>Release Date:</strong>  {item.fall} </li>
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
