import React from 'react'
import Head from 'next/head'
import styles from '../styles/upcomingAnime.module.css'
import Image from 'next/image'
import { anime_data } from './anime_data'
import Link from 'next/link'

export default function UpcomingAnime() {
  return (
    <div>
      <div className={styles.wrapper}>
        <div className={styles.scroll_indicator} />
        <div className={styles.content_wrapper}>
          <div className={styles.content}>
            <div className={styles.poster} style={{marginBottom: '4px'}}>
          <Image alt='banner_image' src={'/animeposter1.webp'} width='828px' height='350px' />
              <div className={styles.poster_title}>
                <h1> Upcoming Anime </h1>
                <div className={styles.line} />
              </div>
            </div>
            <div id={styles.output}>
              {/* Main Card Content Goes Here  */}
              {anime_data.map((item, index) => (
                <div key={index} className={index % 2 == 0 ? `${styles.blog_card}` : `${styles.blog_card} ${styles.alt}`} >
                <div className={styles.meta} >
                  <div className={styles.photo}>
                    <Image alt={item.title} src={`/images/${index+1}.jpeg`} width='349px' height='345px' />
                  </div>
                  <ul style={index % 2 === 0 ? {} : {paddingLeft:'25px'}} className={styles.details} >
                    <li className={styles.date} >{item.fall}</li>
                  </ul>
                </div>
                  
                <div style={{minHeight:'169px'}} className={styles.description} >
                  <h1 >  <Link href={`/anime-details/${index+1}/${item.title}`} >{item.title}</Link></h1>
                  <h2>{item.fall} </h2>
                  <p>{item.desc.substring(0, 100)} </p>
                </div>
              </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
