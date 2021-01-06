import React, { Component, useState, useEffect } from 'react';
import "./results.css"
import VideoCard from './VideoCard';
import requests from './requests';
import axios from './axios';
import FlipMove from "react-flip-move"

const Results = ({ selectedoption }) => {
    const [movies, setmovies] = useState([])

    useEffect(() => {
        async function fetchdata() {
            const request = await axios.get(selectedoption)
            setmovies(request.data.results)
            // console.log(request.data.results);
            return request
        }

        fetchdata()

    }, [selectedoption])
    return (
        <div className="results" >
            <FlipMove>
                {movies.map((movie) => (
                    <VideoCard key={movie.id} movie={movie} />
                ))}

            </FlipMove>
        </div>
    );
}

export default Results;