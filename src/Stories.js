import React from 'react';
import { useFetch } from './hooks';


function Stories() {
    const stories = useFetch('https://news-proxy-server.appspot.com/topstories', []);

    return (
        <div className='Stories'>
            <h3>Stories</h3>
            { 
                stories.map(story => {
                    let { id, by, time, title, url } = story;

                    by = by[0].toUpperCase() + by.slice(1)

                    return (
                        <div key={id}>
                            <a href={url} target="_blank">{title}</a>
                            <div>{by} - {new Date(time * 1000).toLocaleString()}</div>
                        </div> 
                    )
                })
            }
        </div>
    )
}

export default Stories;