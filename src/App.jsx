import { Route, Routes } from "react-router-dom";
import { CartList } from "./components/CartList/CartList";
import { Home } from "./pages/Home/Home";

import { Layout } from "./components/Layout/Layout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="tweets" element={<CartList />} />
      </Route>
    </Routes>
  );
}

export default App;
