import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Routes/Components/Header';
import Home from './Routes/Home';
import Search from './Routes/Search';
import Tv from './Routes/Tv';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="tv" element={<Tv />}></Route>
          <Route path="search" element={<Search />}></Route>
          <Route path="/" element={<Home />}>
            <Route path="movies/:movieId" element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
