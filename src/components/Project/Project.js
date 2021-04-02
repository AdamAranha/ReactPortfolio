import React from 'react'

function Project(props) {
    return (
        <div class="card shadow p-3 mb-5 mx-auto bg-white rounded">
            <img src={props.img} class="card-img-top" alt="..." />
            <div class="card-body">
                <h5 class="card-title">{props.title}</h5>
                <p class="card-text">{props.desc}</p>
                <a href={props.liveLink} class="btn btn-outline-primary mx-2" target="_blank" rel="noreferrer">Go to
            site</a>
                <a href={props.gitLink} class="btn btn-outline-secondary" target="_blank" rel="noreferrer">Go to
            Repo</a>
            </div>
        </div>
    )
}

export default Project