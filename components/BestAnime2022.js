import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import styles from '../styles/AnimePage.module.css'
import { best_anime_2022 } from './constants/best_anime_2022'

export default function BestAnime2022() {
  const mapData = [{},{},{}]
  const cardData = [{}, {}, {}, {}, {}]
  return (
    <div className={styles.page} > 
    <h1 className={styles.title} >List of 10 Best Anime Series to Watch in 2022  </h1>
    <div className={styles.wrapper} >
     <div className={styles.content} >
      {best_anime_2022.map((item, index) => (
        <div key={index} >
        <h3> {index+1}. {item.title}  </h3>
        <img  alt='banner_image' src={`/images/best_2022/${item.img}`}  />
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
      <div className={styles.card} >
        <div className={styles.card_img} >
        <img width='100%' src="https://cdn.animeukiyo.com/wp-content/uploads/2022/06/Classroom-of-the-Elite-Season-2-1.webp" alt="" />
        </div>
       <div className={styles.card_text} >
          <p> <Link href='/anime/spring/2023' >List of 10+ Upcoming Anime Releases in spring! </Link></p>
          <span  > JULY 17, 2022</span>
        </div>
      </div>
     
        </div>
      ))}
     </div>
    </div>
    </div>
  )
}
