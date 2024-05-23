import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Video from "./Pages/Video/Video";
import Log from "./Pages/Log/Log";

const App = () => {
  const [sidebar, setSidebar] = useState(true);
  return (
    <div>

      <Routes>
      <Route path="Vuetube-YT/" element={<Log />} />
        <Route path="Vuetube-YT/:num" element={ <Home  sidebar={sidebar} setSidebar={setSidebar}/>} />
        <Route path="Vuetube-YT/:num/video/:categoryId/:videoId" element={<Video />} />
      </Routes>
    </div>
  );
};

export default App;
