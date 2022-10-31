import Image from 'next/image'
import React from 'react'
import styles from '../styles/AnimePage.module.css'
import { anime_winter_data } from './constants/anime_winter_data'

export default function AnimeWinter2023() {
  const mapData = [{},{},{}]
  const cardData = [{}, {}, {}, {}, {}]
  return (
    <div className={styles.page} > 
    <h1 className={styles.title} >List of 40+ Upcoming Anime Releases in Winter 2023 [With Release Dates & Updates] </h1>
    <div className={styles.wrapper} >
     <div className={styles.content} >
      {anime_winter_data.map((item, index) => (
        <div key={index} >
        <h3>{item.title}  </h3>
        <img  alt='banner_image' src={`/images/winter_2023/${index+1}.jpeg`}  />
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
      {/* {cardData.map((item, index) => (
        <div key={index}>
      <div className={styles.card} >
        <div className={styles.card_img} >
        <img width='100%' src="https://cdn.animeukiyo.com/wp-content/uploads/2022/06/Classroom-of-the-Elite-Season-2-1.webp" alt="" />
        </div>
        <div className={styles.card_text} >
          <p>Top 25 Anime with the Best Animation Ever! </p>
          <span  > JULY 17, 2022</span>
        </div>
      </div>
     
        </div>
      ))} */}
     </div>
    </div>
    </div>
  )
}
