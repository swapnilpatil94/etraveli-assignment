import { useState } from 'react';
import { Box, FormControl, InputAdornment, InputLabel, MenuItem, OutlinedInput, Select } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
 
const Filters = ({handleSorting, handleInputSearch}) => {
  const [sortBy, setSortBy] = useState('');
  const [searchInput, serSearchInput] = useState('');

  const handleSortBy = (event) => {
    setSortBy(event.target.value);
    handleSorting(event.target.value)
  };

  const handleSearchInput = (event) => {
    serSearchInput(event.target.value);
    handleInputSearch(event.target.value)
  };

  return (
    <Box display={'flex'} margin={2} >
      <Box sx={{ width: '12vw' }}>
        <FormControl fullWidth sx={{ m: 1 }}>
          <InputLabel id="sortby">Sort by ..</InputLabel>
          <Select
            name='sortby'
            labelId="sortby"
            id="demo-simple-select"
            value={sortBy}
            label="SortBy..."
            onChange={handleSortBy}
            data-testid={`year`}
          >
             <MenuItem value={'episode'}>Episode</MenuItem>
            <MenuItem value={'year'}>Year</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Box sx={{ width: '50vw'}} paddingLeft={3}>
        <FormControl fullWidth sx={{ m: 1 }} variant="standard">
          <OutlinedInput
            id="searchbox"
            name='searchInput'
            startAdornment={<InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>}
            placeholder='Type to search ...'
            value={searchInput}
            onChange={handleSearchInput}
          />
        </FormControl>
      </Box>
    </Box>
  )
}

export default Filters