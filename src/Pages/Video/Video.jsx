import React, { useEffect } from "react";
import PlayVideo from "../../Components/PlayVideo/PlayVideo";
import Recommended from "../../Components/Recommended/Recommended";
import './Video.css'
import { useParams } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";

const Video = () => {
  const {num,videoId,categoryId} = useParams();
  // useEffect(()=>{
  //   console.log(id);
  // },[])


  return (
    <div>
    <Navbar />

      <div className="play-container">
        <PlayVideo videoId={videoId} />
        <Recommended categoryId={categoryId}/>

      </div>
      </div>
  );
};

export default Video;
