import React from 'react'
import './Portfolio.css'
import M4M from '../../assets/M4N.PNG'
import WeatherApp from '../../assets/WeatherApp.PNG'
import TeamProfileGenerator from '../../assets/TeamProfileGenerator.PNG'
import NoteTaker from '../../assets/NoteTaker.PNG'
import UserDirectory from '../../assets/UserDirect.PNG'
import dashboard from '../../assets/dashboard.PNG'
import Project from '../Project/Project'

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
                        <Project img={WeatherApp} title='Weather App' desc='An app that allows the user to search for the current weather around
                                the world. Searched cities are saved to list stored in the Local Storage for ease of
                                access.' liveLink='https://adamaranha.github.io/WeatherApp/' gitLink='https://github.com/AdamAranha/WeatherApp' />
                        <Project img={TeamProfileGenerator} title='Team Profile Generator' desc='An app that takes in various information pertaining to team members and
                                their skills and generates a html pages the user can view. Team size is scalable.' liveLink='https://github.com/AdamAranha/Team-Profile-Generator' gitLink='https://github.com/AdamAranha/Workout-Tracker' />
                        <Project img={dashboard} title='Workout Dashboard' desc="This app tracks the user's workouts by allowing them enter the activities they have completed. The app then returns some stats like activities done and distance ran." liveLink='https://stormy-falls-25100.herokuapp.com/exercise?id=undefined' gitLink='https://github.com/AdamAranha/Workout-Tracker' />
                    </div>

                    <div class="col">
                        <Project img={NoteTaker} title='Note-Taker' desc='An heroku hosted app that allows users to create and store notes. Saved
                                notes are stored in a JSON file that is stored on a Node server.' liveLink='https://sheltered-oasis-90735.herokuapp.com/notes.html' gitLink='https://github.com/AdamAranha/Note-Taker' />
                        <Project img={M4M} title='Money For Nothing' desc='A group effort. This application allows users to search for stocks
                                using symbols or company names. The app allows user to save the stocks to a watchlist
                                stored in the Local Storage.' liveLink='https://catherinebshaw.github.io/Money-for-Nothing/' gitLink='https://github.com/catherinebshaw/Money-for-Nothing' />
                        <Project img={UserDirectory} title='User Directory' desc='An app that displays the employees of a company. The use is able to sort by first name or filter the results by country. This can be used in many ways to provide and simple to use UI that filters through results.' liveLink='https://mighty-cliffs-42721.herokuapp.com/' gitLink='https://github.com/AdamAranha/UserDirectory' />
                    </div>
                </div>
            </div>
        </section >
    )
}

export default Portfolio