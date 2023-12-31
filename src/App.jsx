import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home/Home";

import { Layout } from "./components/Layout/Layout";
import { Tweets } from "./pages/Tweets/Tweets";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="tweets" element={<Tweets />} />
      </Route>
    </Routes>
  );
}

export default App;
