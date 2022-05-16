import { Routes, Route } from "react-router-dom";
import "./styles.css";
import AppLayout from "./components/AppLayout/AppLayout";
import Home from "./views/Home/Home";
import ErrorPage from "./views/ErrorPage/ErrorPage";

export default function App() {
  return (
    <AppLayout>
      <Routes>
        <Route exact path="/" component={<Home />} />
        <Route path="/lahaus/" element={<Home />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </AppLayout>
  );
}
