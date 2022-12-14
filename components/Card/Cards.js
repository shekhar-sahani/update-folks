import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Link from 'next/link';

export default function Cards({item}) {
  return (
    <Card  sx={{ maxWidth: 345, marginBottom:4}} className="mx-3 h-[360px]">
    <CardMedia
      component="img"
      alt="card images"
      className="h-[177px]"
      height="140"
      image={item.post_image}
    />
    <CardContent>
    <Link  href={`/category/${item.category}/${item.post_slug}`}>
    <Typography style={{cursor:'pointer'}} gutterBottom variant="h5" component="div">
        {item.post_title?.length > 85 ? item.post_title.substr(0, 85) + '...' : item.post_title }
      </Typography>
    </Link>
      {/* <Typography variant="body2" color="text.secondary">
        Lizards are a widespread group of squamate reptiles, with over 6,000
        species, ranging across all continents except Antarctica
      </Typography> */}
    </CardContent>
    {/* <CardActions>
      <Button size="small">Share</Button>
      <Button size="small">Learn More</Button>
    </CardActions> */}
  </Card>
  )
}
