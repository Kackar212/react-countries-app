import NotFound from "@components/NotFound";
import Page from "@components/Page";
import { Country } from "@pages/Country";
import Home from "@pages/Home/index.container";
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Page />}>
          <Route index element={<Home />} />
          <Route path='page/:page' element={<Home />}/>
          <Route path=':country' element={<Country />} />
          <Route path='*' element={<NotFound />}/>
        </Route>
      </Routes>
    </>
  );
}

export default App;
