import { Box, Typography } from '@mui/material'
import { toRoman } from '../Utils/ConvertNumberToRoman'
 
const MovieDetails = ({ movieData }) => {
  return (
    <>
      {movieData ?
        <Box display={'flex'} flexDirection='column' justifyContent={'space-between'}>
          <Typography variant='h5' alignSelf={'flex-start'} m={2}  data-testid="typography-1">
            Episode {toRoman(movieData.episode_id)} - {movieData.title}
          </Typography>
          <Typography variant='body2'  data-testid="typography-2" textAlign={'start'} m={2}>{movieData.opening_crawl}</Typography>
          <Typography variant='body2' data-testid="typography-3" alignSelf={'flex-start'} m={2}>
            Directed by : {movieData.director}
          </Typography>
        </Box>
        : <Typography variant='h6' data-testid="typography-4" mt={'15vw'}>No Movie Selected</Typography>
      }
    </>
  )
}

export default MovieDetails