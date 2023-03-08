import { Typography } from '@mui/material'
import React from 'react'

export const MuiTypography = () => {
  return (
    <div>
        <Typography variant='h1'>h1 Heading</Typography>
        <Typography variant='h2'>h2 Heading</Typography>
        <Typography variant='h3'>h3 Heading</Typography>
        <Typography variant='h4' component='h1' gutterBottom>h4 Heading</Typography>{/* component name manipulation  */}
        <Typography variant='h5'>h5 Heading</Typography>
        <Typography variant='h6'>h6 Heading</Typography>

        <Typography variant='subtitle1'>1 Sub title</Typography>
        <Typography variant='subtitle2'>2 Sub title</Typography>
        
        <Typography variant='body1'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero sit nulla natus dolores reprehenderit ipsam exercitationem! Culpa ducimus, magni aut vel ipsam tempore vero aperiam asperiores nisi soluta quod sapiente!</Typography>
        <Typography variant='body2'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero sit nulla natus dolores reprehenderit ipsam exercitationem! Culpa ducimus, magni aut vel ipsam tempore vero aperiam asperiores nisi soluta quod sapiente!</Typography>
    </div>
  )
}
