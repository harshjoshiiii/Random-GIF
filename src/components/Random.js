import React, { useState } from 'react'
import axios from 'axios';
import { useEffect } from 'react';
import Spinner from './Spinner';
import useGif from '../hooks/useGif';


const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

const Random = () => {

  //Jo bhi data hau bo sb hm custom Hook se le lenge -> useGif.js se.
  const {gif, loading, fetchData} = useGif();


  return (
    <div className="w-1/2 rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px] bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 animate-gradient">

      <h1 className='mt-[15px] text-2xl underline uppercase font-bold'> A Random Gif</h1>

    {
       //agr loading true hai to spinner chla brna gif.
        loading ? (<Spinner/>) : (<img src= {gif} width="450" />)
    }

      

<button
  onClick={() => fetchData()}
  className="w-10/12 bg-yellow-500 text-lg py-2 rounded-lg mb-[20px] hover:bg-pink-300 
  hover:shadow-lg transition duration-1000 ease-in-out">
  Generate
</button>


    </div>
  )
}

export default Random
