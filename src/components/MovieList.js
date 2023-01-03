import { Box, Divider, ListItemButton, Typography } from '@mui/material'
import { Fragment } from 'react'

const MovieList = ({ movieLists, handleSelectedMovie, selectedRow }) => {

  const handleChange = (movie) => {
    handleSelectedMovie(movie)
  }

  return (<>
    {movieLists.map((movie,index) => {
      return (
        <Box
        key={movie.episode_id} 
        >
          <ListItemButton
            data-testid={`list-item-button-${index}`}
            style={{
              backgroundColor: `${selectedRow && selectedRow.episode_id === movie.episode_id ? '#361c1c' : 'white'}`,
              color: `${selectedRow && selectedRow.episode_id === movie.episode_id ? 'white' : 'black'}`
            }}
            onClick={() => handleChange(movie)} >
            <Box display={'flex'} justifyContent={'space-between'} width={'100%'} textAlign={'center'}>
              <Box display={'flex'} alignSelf={'flex-start'}>
                <Typography variant="caption"   >
                  EPISODE {movie?.episode_id}
                </Typography>
                <Typography variant="subtitle1" ml={5} >
                  {movie?.title}
                </Typography>
              </Box>
              <Box alignSelf={'flex-end'}>
                <Typography variant="subtitle2"    >
                  {movie?.release_date}
                </Typography>
              </Box>
            </Box>
          </ListItemButton>
          <Divider />
        </Box>

          
      )
    })
    }
  </>
  )
}

export default MovieList;