
import React, { useEffect, useState } from 'react';
import HomeCard from '../components/HomeCard';
import Filter from '../components/Filter';
import { useDispatch, useSelector } from 'react-redux';
import homeAction from '../redux/actions/HomeData';

const Home = () => {

    const dispatch = useDispatch();
    const { getVideos } = useSelector(state => state.getVideos);
    const [letter, setLetter] = useState("new")

   useEffect(()=>{
    dispatch(homeAction(letter))
   },[dispatch,letter])


    console.log(getVideos);

    return (
        <div>
            <Filter setLetter={setLetter} />
            <div style={{ display: "flex", flexWrap: "wrap", margin: "2px", width: "75%", position: "relative", left: "200px", top: "70px" }}>
                {getVideos && getVideos.items && getVideos.items.map((video, i) => (
                    <HomeCard key={i} video={video} />
                ))}
            </div>
        </div>
    )
}

export default Home;


