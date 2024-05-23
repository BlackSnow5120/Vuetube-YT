import React, { useState } from "react";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Feed from "../../Components/Feed/Feed";
import './Home.css'
import Navbar from "../../Components/Navbar/Navbar";

const Home = ({sidebar},{setSidebar}) => {

  const [category,setCategory] = useState(0);
  
  return (
    <div>
      <Navbar setSidebar={setSidebar} />
      <Sidebar setCategory={setCategory} sidebar={sidebar} category={category} />
      <div className={`container ${sidebar ? "" : " large-container"}`}>
        <Feed category={category}/>
      </div>
    </div>
  );
};

export default Home;
