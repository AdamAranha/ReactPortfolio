import React from 'react'
import './Portfolio.css'
import M4M from '../../assets/M4N.PNG'
import WeatherApp from '../../assets/WeatherApp.PNG'
import TeamProfileGenerator from '../../assets/TeamProfileGenerator.PNG'
import NoteTaker from '../../assets/NoteTaker.PNG'
import UserDirectory from '../../assets/UserDirect.PNG'
import dashboard from '../../assets/dashboard.PNG'

function Portfolio() {
    return (
        <section className="mb-5">


            <div class="container">
                <div class="card-title py-5 my-5 shadow p-3 mb-5 bg-white rounded">
                    <div class="card-body ">
                        <div class="aboutme container">
                            <h3>My Portfolio</h3>
                        </div>
                    </div>
                </div>
            </div>

            <div class="container">

                <div class="row">
                    <div class="col">
                        <div class="card shadow p-3 mb-5 mx-auto bg-white rounded">
                            <img src={WeatherApp} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Weather App</h5>
                                <p class="card-text">An app that allows the user to search for the current weather around
                                the world. Searched cities are saved to list stored in the Local Storage for ease of
                                access.</p>
                                <a href="https://adamaranha.github.io/WeatherApp/" class="btn btn-outline-primary mx-2" target="_blank" rel="noreferrer">Go to
                                site</a>
                                <a href="https://github.com/AdamAranha/WeatherApp" class="btn btn-outline-secondary" target="_blank" rel="noreferrer">Go to
                                Repo</a>
                            </div>
                        </div>

                        <div class="card shadow p-3 mb-5 mx-auto bg-white rounded">
                            <img src={TeamProfileGenerator} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Team Profile Generator</h5>
                                <p class="card-text">An app that takes in various information pertaining to team members and
                                their skills and generates a html pages the user can view. Team size is scalable.</p>
                                <a href="https://github.com/AdamAranha/Team-Profile-Generator"
                                    class="btn btn-outline-primary mx-2" target="_blank" rel="noreferrer">Go to site</a>
                                <a href="https://github.com/AdamAranha/Team-Profile-Generator"
                                    class="btn btn-outline-secondary" target="_blank" rel="noreferrer">Go to Repo</a>
                            </div>
                        </div>

                        <div class="card shadow p-3 mb-5 mx-auto bg-white rounded">
                            <img src={dashboard} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Workout Dashboard</h5>
                                <p class="card-text">This app tracks the user's workouts by allowing them enter the activities they have completed. The app then returns some stats like activities done and distance ran.</p>
                                <a href="https://stormy-falls-25100.herokuapp.com/exercise?id=undefined"
                                    class="btn btn-outline-primary mx-2" target="_blank" rel="noreferrer">Go to site</a>
                                <a href="https://github.com/AdamAranha/Workout-Tracker"
                                    class="btn btn-outline-secondary" target="_blank" rel="noreferrer">Go to Repo</a>
                            </div>
                        </div>

                    </div>

                    <div class="col">
                        <div class="card shadow p-3 mb-5 mx-auto bg-white rounded">
                            <img src={NoteTaker} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Note-Taker</h5>
                                <p class="card-text">An heroku hosted app that allows users to create and store notes. Saved
                                notes are stored in a JSON file that is stored on a Node server.</p>
                                <a href="https://sheltered-oasis-90735.herokuapp.com/notes.html"
                                    class="btn btn-outline-primary mx-2" target="_blank" rel="noreferrer">Go to site</a>
                                <a href="https://github.com/AdamAranha/Note-Taker" class="btn btn-outline-secondary" target="_blank" rel="noreferrer">Go to
                                Repo</a>
                            </div>
                        </div>

                        <div class="card shadow p-3 mb-5 mx-auto bg-white rounded">
                            <img src={M4M} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Money For Nothing</h5>
                                <p class="card-text">A group effort. This application allows users to search for stocks
                                using symbols or company names. The app allows user to save the stocks to a watchlist
                                stored in the Local Storage.</p>
                                <a href="https://catherinebshaw.github.io/Money-for-Nothing/"
                                    class="btn btn-outline-primary mx-2" target="_blank" rel="noreferrer">Go to site</a>
                                <a href="https://github.com/catherinebshaw/Money-for-Nothing"
                                    class="btn btn-outline-secondary" target="_blank" rel="noreferrer">Go to Repo</a>
                            </div>
                        </div>

                        <div class="card shadow p-3 mb-5 mx-auto bg-white rounded">
                            <img src={UserDirectory} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">User Directory</h5>
                                <p class="card-text">An app that displays the employees of a company. The use is able to sort by first name or filter the results by country. This can be used in many ways to provide and simple to use UI that filters through results</p>
                                <a href="https://mighty-cliffs-42721.herokuapp.com/"
                                    class="btn btn-outline-primary mx-2" target="_blank" rel="noreferrer">Go to site</a>
                                <a href="https://github.com/AdamAranha/UserDirectory"
                                    class="btn btn-outline-secondary" target="_blank" rel="noreferrer">Go to Repo</a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section >
    )
}

export default Portfolio