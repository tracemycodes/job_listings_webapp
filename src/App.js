import { useState } from 'react';
import Header from './components/Header';
import Jobs from './components/Jobs';
import data from './data.json';

function App() {
  const [filter, setFilter] = useState([]);

  const selectFilter = (text) => {
    if (!filter.includes(text)) {
      setFilter([...filter, text]);
    }
  };

  const removeFilteredItem = (category) => {
    let newArr = filter.filter((item) => item !== category);

    setFilter(newArr);
  };

  const clearFilter = () => {
    setFilter([]);
  }

  return (
    <div className='App'>
      <Header />
      <Jobs
        data={data}
        selectFilter={selectFilter}
        filter={filter}
        removeFilteredItem={removeFilteredItem}
        clearFilter={clearFilter}
      />
    </div>
  );
}

export default App;
