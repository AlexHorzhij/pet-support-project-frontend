import { Title } from '@mui/icons-material';
import React from 'react';

const NewsSearch = () => {
  return (
    <>
      <input
        type="text"
        // name="query"
        // value={query}
        // onChange={handleChange}
        autoComplete="off"
        autoFocus
        placeholder="Search news"
      />
      <button>search</button>
    </>
  );
};
export { NewsSearch };
