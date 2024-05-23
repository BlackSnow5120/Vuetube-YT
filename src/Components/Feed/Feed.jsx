import React, { useEffect, useState } from 'react'
import './Feed.css'
import { Link } from 'react-router-dom'
import { API_KEY, value_converter } from '../../data'
import moment from 'moment'

const Feed = ({category}) => {
    
    const [data,setData] = useState([]);
    const [data1,setData1] = useState([]);
    var data123=[];
function saved()
{
    localStorage.setItem('data',JSON.stringify(data1));
}
function saved1()
{
    if (localStorage.getItem("data") === null) {
        localStorage.setItem('data',JSON.stringify(data1));
      }
    
}
function loadd()
{
    
    data123 = JSON.parse(localStorage.getItem('data'));
    setData1(data123);
}
useEffect(()=>{
    // localStorage.setItem('data',JSON.stringify(data1));
    saved1();
    loadd();
},[])
    const [aaa,seta] = useState(0);
    function funa(a)
    {
        if(!data1.includes(a))
            {
        data1.push(a);
        setData1(data1);
        saved();
        seta(aaa+1);
            }
    }
    const fetchData = async ()=>{
        const videoList_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${category}&key=${API_KEY}`;
        await fetch(videoList_url).then((response)=>response.json()).then((data)=>{setData(data.items);console.log(data.items)})
    }

    useEffect(()=>{
        fetchData();
    },[category])


  return (
    <div>
        <h1 >
            Watch List
        </h1>
    <div className='Wlist'>
    {data1.map((item,index)=>{
            return <Link key={index} to={`video/${item.snippet.categoryId}/${item.id}`} className="card">
                        <img src={item.snippet.thumbnails.medium.url} alt="" />
                        <h2>{item.snippet.title}</h2>
                        <h3>{item.snippet.channelTitle}</h3>
                         <p>{value_converter(item.statistics.viewCount)} Views &bull; 
                         {" "+moment(item.snippet.publishedAt).fromNow()}</p>
                     </Link>
                 
        })} 
    </div>
    <button className="Wlb2" onClick={()=> {localStorage.removeItem('data');localStorage.setItem('data',JSON.stringify([]));alert("kindly refresh")}}>clear</button>
    <h1 >
            Feed
        </h1>
   <div className='feed'>
        {data.map((item,index)=>{
            return <div className='Wlb1'><Link key={index} to={`video/${item.snippet.categoryId}/${item.id}`} className="card">
                        <img src={item.snippet.thumbnails.medium.url} alt="" />
                        <h2>{item.snippet.title}</h2>
                        <h3>{item.snippet.channelTitle}</h3>
                         <p>{value_converter(item.statistics.viewCount)} Views &bull; 
                         {" "+moment(item.snippet.publishedAt).fromNow()}</p>
                     </Link>
                     <button className="Wlb" onClick={() => {funa(item);}}>Add to Watch List</button>
                     </div>
        })} 
    </div>
    </div>

 
  )
}

export default Feed
