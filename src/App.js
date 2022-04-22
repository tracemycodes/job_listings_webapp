import Header from './components/Header';
import Jobs from './components/Jobs';
import data from './data.json';


function App() {
  return (
    <div className="App">
      <Header/>
      <Jobs data={data}/>
    </div>
  );
}

export default App;
