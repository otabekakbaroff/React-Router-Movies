import React, { useState } from 'react';
import {Route} from 'react-router-dom';
import SavedList from './Movies/SavedList';
import Movie from './Movies/Movie';
import MovieList from './Movies/MovieList';

const App = () => {
  const [savedList, setSavedList] = useState( [] );

  const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );
  };

  return (
    <div>
        <SavedList list={savedList} />
      <div>
      <Route exact path="/">
          <MovieList/>
      </Route>
      <Route path="/movie/:itemID">
          <Movie/>
      </Route>
      </div>
    </div>
  );
};

export default App;
