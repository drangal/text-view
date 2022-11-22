import { Routes, Route } from "react-router-dom";
import { Operations } from "./Operations";
import { Wallet } from "./Wallet";
import { About } from "./About";
import { Layout } from "./components/Layout";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/*" element={<Layout />}>
          <Route path="wallet" element={<Wallet />} />
          <Route path="opers" element={<Operations />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </>
  );
};

export { App };
