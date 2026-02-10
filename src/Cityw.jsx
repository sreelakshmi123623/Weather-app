import React, { useState } from 'react'

function Cityw() {

  const[city,setCity]=useState("")
  const[weather,setWeather]=useState(null);
  const[error,setError]=useState("")

 const API_KEY="5635de275a2c1ac7fa48316f8109a802"

 const getWeather=()=>{
  if(!city) return
 

 fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`)

 .then((res)=>res.json())
 .then((data)=>{
  if(data.cod==="404"){
    setError("city Not Found")
    alert("city Not Found")
    setWeather(null)
  }

  
  else{
    setWeather(data)
    setError("")
  }
 })
 .catch(()=>setError("Something Went Wrong"))
 return
 }

  return (
    <div className='min-h-screen bg-blue-200 ob-20 pt-20'>
      <div className='h-150 w-120 rounded-lg bg-blue-900 border-1 border-white ml-130'>
        <h2 className='text-center text-2xl text-white pt-3'>Weather Check</h2>
        <div>
          <input type="text" placeholder='Enter city' value={city} onChange={(e)=>setCity(e.target.value)} onKeyDown={(e)=>e.key==="Enter" && getWeather()} className='w-90px mt-10 ml-35 p-1 bg-white rounded-md border-1' />
          <button variant="contained" onClick={getWeather} className=' text-white rounded-md p-1 ml-3 hover:bg-white hover:text-black border-1'>Search</button>
          <img className='w-50 h-50 ml-35' src="https://attic.sh/q7tw7mp0sf5cdtrvog8e9ochmjpg" alt="" />
         {weather && (
          <>
          <div className='text-center text-2xl text-white'>{weather.name}</div>
        <div className='flex justify-evenly mt-15'>
          <div className='w-40 h-30 rounded-md border-1 border-white'>
            <img className='h-10 w-10 ml-15 mt-2' src="https://png.pngtree.com/png-vector/20220719/ourmid/pngtree-color-icon---thermometer-color-raining-cold-vector-png-image_37892164.png" alt="" />
           <h4 className='text-center mt-2 text-white text-xs'> Humidity</h4>
           <p className='text-center text-white text-2xl mt-3'>{weather.main.humidity}%</p>
           </div>
          <div className='w-40 h-30 rounded-md border-1  border-white'>
            <img src="" alt="" />
            <h4 className='text-center mt-2 text-white text-xs mt-3'>Wind speed</h4>
            <p className='text-center text-white text-2xl mt-5'>{weather.wind.speed} m/s</p></div>
        </div>
       
        </>
         )}
        </div>

      </div>
    </div>
  );
}

export default Cityw
