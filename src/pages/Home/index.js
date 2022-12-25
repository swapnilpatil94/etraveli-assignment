import React, { useState } from 'react'
import { Box, Typography } from '@mui/material'
import Filters from '../../components/Filters/Filters'
import MovieDetails from '../../components/MovieDetails'
import MovieList from '../../components/MovieList'
import SplitScreen from '../../components/SplitScreen/SplitScreen'
import Loader from '../../components/UI/Loader'
import { URL } from '../../Constants'
import useFetchData from '../../hooks/useFetchData'

const Home = () => {
  const { data, error, loading } = useFetchData(URL);
  const [movieDetails, setMovieDetails] = useState(null);
  const [sorting, setSorting] = useState(null);
  const [inputSearchText, setInputSearchText] = useState('')

  const handleSelectedMovie = (movie) => {
    setMovieDetails(movie);
  }

  const handleSorting = (sort) => {
    setSorting(sort)
  }

  const handleInputSearch = (inputText) => {
    setInputSearchText(inputText);
  }

  const filteredMovies = data?.results.filter(item =>
    item.title.toLowerCase().includes(inputSearchText.toLowerCase())
  );

  const sortedMovies = filteredMovies?.sort((a, b) => {
    if (sorting === 'year') {
      const dateA = new Date(a.release_date);
      const dateB = new Date(b.release_date);
      return dateA - dateB;
    } else if (sorting === 'episode') {
      return a.episode_id - b.episode_id
    }
    return 0;
  });

  return (<>
    {loading &&
      <Loader loading={loading} />
    }

    {!loading && !data && error &&
      <Box display={'flex'} justifyContent={'center'} height={'100vh'}>
        <Typography variant='h6' alignSelf={'center'} color={'red'}>
          Something Went Wrong, Please Try Again .
        </Typography>
      </Box>
    }

    {data &&
      <>
        <Filters
          handleSorting={(sort) => handleSorting(sort)}
          handleInputSearch={(input) => handleInputSearch(input)}
        />
        <SplitScreen
          leftPane={
            <MovieList
              movieLists={sortedMovies || data.results}
              handleSelectedMovie={(slectedMovie) => handleSelectedMovie(slectedMovie)}
              selectedRow={movieDetails}
            />
          }
          RightPane={
            <MovieDetails
              movieData={movieDetails}
            />
          }
        />
      </>

    }
  </>)
}

export default Home