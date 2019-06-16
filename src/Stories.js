import React, { useState, useEffect } from 'react';

function StoryCard({ title, type, url }) {
    return (
        <div>
            <h1>{title}</h1>
            <h3><em>{type}</em></h3>
            <a href={url} target="_blank">{url}</a>
        </div>
    )
}

function Stories() {
    const [stories, setStories] = useState([])

    useEffect(() => {
        fetch('https://news-proxy-server.appspot.com/topstories')
            .then(response => response.json())
            .then(json => {
                console.log(json)
                setStories(json)
            })
    }, []);

    const displayCards = stories.map(story => {
        console.log(story.title)
        return (
            <StoryCard
                title={story.title}
                type={story.type}
                url={story.url}
            />
        )
    })

    return (
        <div>
            {displayCards}
        </div>
    )
}

export default Stories;