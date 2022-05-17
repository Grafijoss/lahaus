import { Routes, Route  } from "react-router-dom";
import "./styles.css";
import AppLayout from "./components/AppLayout/AppLayout";
import Home from "./views/Home/Home";
import EstateDetail from "./views/EstateDetail/EstateDetail";
import ErrorPage from "./views/ErrorPage/ErrorPage";

export default function App() {
  return (
    <AppLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/estates/:estateId' element={<EstateDetail />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </AppLayout>
  );
}
