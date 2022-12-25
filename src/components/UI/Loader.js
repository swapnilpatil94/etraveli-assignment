import { Backdrop, Box, CircularProgress, Typography } from '@mui/material'

const Loader = ({ loading }) => {
  return (
    <Backdrop
      sx={{ color: '#ffff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={loading}
    >
      <Box display={'flex'} flexDirection={'column'} justifyContent='center' >
        <Typography variant='h6' color={'gold'}>
          Welcome to Movie List Application..
        </Typography>
        <CircularProgress style={{ margin: '2vw 8vw' }} color="inherit" />
      </Box>
    </Backdrop>
  )
}

export default Loader