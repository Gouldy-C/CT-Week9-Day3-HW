import { Container } from "react-bootstrap";
import NavbarComp from "./components/NavbarComp";
import FooterComp from "./components/FooterComp";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import AlertComp from "./components/AlertComp";
import { useState } from "react";
import UserPage from "./pages/UserPage";
import Logout from "./pages/Logout";
import CreateCharacterPage from "./pages/CreateCharacterPage";
import Weapons from "./pages/Weapons";


//const userState = new UserState

function App() {
  const [alertHeading, setAlertHeading] = useState("");
  const [alertColor, setAlertColor] = useState("");
  const [alertMes, setAlertMes] = useState("");


  return (
    <Container className="main-container p-0 d-flex flex-column">
      <BrowserRouter>
      <NavbarComp />

      {alertMes && (
        <AlertComp
          alertHeading={alertHeading}
          alertMes={alertMes}
          color={alertColor}/>)}

        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="logout" element={<Logout />} />
          <Route path="sign-up" element={<SignUpPage />} />
          <Route path="user-home" element={<UserPage />} />
          <Route path="create-character" element={<CreateCharacterPage />} />
          <Route path="weapons" element={<Weapons />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>

      <FooterComp />
      </BrowserRouter>
    </Container>
  );
}

export default App;
