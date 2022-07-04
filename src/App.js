import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import CssBaseline from "@mui/material/CssBaseline";
import { DrawerHeader, Main, AppBox } from "./components/StyledComponents";
import Nav from "./components/Nav";
import Teacher from "./Routes/Teacher";
import Student from "./Routes/Student";

function App() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const toggleNav = (navOpen) => {
    setIsNavOpen(navOpen);
  };

  return (
    <AppBox>
      <CssBaseline />
      <Nav isNavOpen={isNavOpen} toggleNav={toggleNav} />
      <Main open={isNavOpen}>
        <DrawerHeader />

        <Routes>
          <Route path="/teacher/*" element={<Teacher />} />
          <Route path="/student/*" element={<Student />} />
          <Route path="*" element={<Teacher />} />
        </Routes>
      </Main>
    </AppBox>
  );
}

export default App;
