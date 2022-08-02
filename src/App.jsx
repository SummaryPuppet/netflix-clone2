import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LoginContextProvider } from "./context/LoginProvider";

import Home from "./pages/Home/Home";
import Profile from "./pages/Profile/ProfilePage";

function App() {
  return (
    <LoginContextProvider>
      <BrowserRouter basename="/netflix-clone2">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profiles" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </LoginContextProvider>
  );
}

export default App;
