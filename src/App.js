import React from 'react';
import SuperheroForm from './components/SuperheroForm';
import SuperherosList from './components/SuperheroList';
import Filter from './components/Filter';

const App = () => {
  return (
    <>
      <h1>AddSuperhero</h1>
      <SuperheroForm />

      <h2>SuperherosList</h2>
      <Filter />

      <SuperherosList />
    </>
  );
};

export default App;
