import { atom } from "jotai";
import Screen1 from "./screens/Screen1";
import Screen2 from "./screens/Screen2";
import Screen3 from "./screens/Screen3";
import Screen4 from "./screens/Screen4";
import Stack from "react-bootstrap/Stack";

import { BrowserRouter, Routes, Route } from "react-router-dom";

export const texto = atom("");

export default function App() {
  return (
    <Stack gap={5}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Screen1 />} />
          <Route path="/sobre" element={<Screen2 />} />
          <Route path="/contato" element={<Screen3 />} />
          <Route path="/apps" element={<Screen4 />} />
        </Routes>
      </BrowserRouter>
    </Stack>
  );
}
