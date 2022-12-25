import { Box, Typography } from '@mui/material'
import { toRoman } from '../Utils/ConvertNumberToRoman'

const MovieDetails = ({ movieData }) => {
  return (
    <>
      {movieData ?
        <Box display={'flex'} flexDirection='column' justifyContent={'space-between'}>
          <Typography variant='h5' alignSelf={'flex-start'} m={2}>
            Episode {toRoman(movieData.episode_id)} - {movieData.title}
          </Typography>
          <Typography variant='body2' textAlign={'start'} m={2}>{movieData.opening_crawl}</Typography>
          <Typography variant='body2' alignSelf={'flex-start'} m={2}>
            Directed by : {movieData.director}
          </Typography>
        </Box>
        : <Typography variant='h6' mt={'15vw'}>No Movie Selected</Typography>
      }
    </>
  )
}

export default MovieDetails