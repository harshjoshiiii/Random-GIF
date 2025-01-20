import React from 'react'
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';


const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
//ye API SIMPLE RANDOM KI.
const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;


const useGif = (tag) => {
    const [gif, setGif] = useState('');
    //loading icon start m nhi dikhega.
    const [loading, setLoading] = useState('false');

    //API fetch ki using axios se.
    async function fetchData(tag) {
      setLoading(true);
      // agr tag aaya hai to url ke sath tag dal brna normal url
      const {data} = await axios.get(tag ? `${url}&tag=${tag}`  : url);
      //API SE image le aaya 
      const imageSource = data.data.images.downsized_large.url;
      setGif(imageSource);
      setLoading(false);
    }
    
    useEffect( () => {
      fetchData('car');
    },[] )

    return {gif,loading, fetchData};
}

export default useGif
