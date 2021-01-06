import React, { Component, forwardRef } from 'react';
import "./videocard.css"
import TextTruncate from 'react-text-truncate';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';

const baseurlimage = "https://image.tmdb.org/t/p/original"

function truncateString(str, num) {


    if (str.length > num) {
        return str.slice(0, num) + "...";
    }
    else {
        return str;
    }
}

const VideoCard = forwardRef(({ movie }, ref) => {
    return (
        <div ref={ref} className="videocard" >
            <img src={`${baseurlimage}${movie.backdrop_path || movie.poster_path}`} alt="" />
            <TextTruncate
            line={1} element="p" truncateText="..." text={movie.overview}
            />
            <h2>{movie.original_title || movie.title}</h2>
            <p className="videocard__stats" > {movie.release_date} <ThumbUpIcon/> {movie.vote_count}</p>
        </div>
    );
})

export default VideoCard;