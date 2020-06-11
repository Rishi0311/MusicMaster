import React from 'react';

const Artist =({artist})=>{//artist is props returned from App.js
    if (!artist) return null;
    const {images,name,followers,genres} = artist;//object destructured, the props from App.js

    return (
        <div>
            <h2>{name}</h2>
            <p>{followers.total} followers</p>
            <p>{genres.join(',')}</p>
            <img 
                src = {images[0] && images[0].url}
                alt='artist-profile' 
                style = {{
                    width:200,
                    height:200,
                    borderRadius:100,
                    objectFit:'cover'
                }}
            />
        </div>
    )
}

export default Artist;