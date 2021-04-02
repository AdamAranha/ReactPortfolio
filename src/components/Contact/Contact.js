import React from 'react'

function Contact() {
    return (
        <section>
            <div class="container">
                <div class="card px-1 py-1 mx-2 my-5 shadow p-3 mb-5 bg-white rounded">
                    <div class="card-body">
                        <div class="aboutme container">
                            <h3>Let's keep in touch</h3>
                            <hr />
                            <div class="row">
                                <div class="col left-align">
                                    <div class="container">
                                        <a href="tel:4163331635"><i class="fas fa-phone fa-3x"></i></a>
                                        <span class="mx-2"></span>
                                        <a href="mailto:a3aranha@gmail.com"><i class="fas fa-envelope-square fa-3x"></i></a>
                                        <br /><br />
                                        <a id="github" href="https://github.com/AdamAranha" target="_blank" rel="noreferrer"><i
                                            class="fab fa-github fa-3x"></i></a>
                                        <span class="mx-2"></span>
                                        <a id="linkedin" href="https://www.linkedin.com/in/adam-aranha-a5a842201/"
                                            target="_blank" rel="noreferrer">
                                            <i class="fab fa-linkedin-in fa-3x"></i></a>

                                    </div>

                                </div>
                                <div class="col">


                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <div class="container form">
                <div class="card px-5 py-5 mx-2 my-5 shadow p-3 mb-5 bg-white rounded">
                    <div class="card-body my-2">
                        <div class="container">
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Your Name</label>
                                <input type="name" class="form-control" id="name" placeholder="John smith" />
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Email address</label>
                                <input type="email" class="form-control" id="exampleFormControlInput1"
                                    placeholder="name@example.com" />
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlTextarea1" class="form-label">Message</label>
                                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"
                                    placeholder="Your Portfolio is a vibe"></textarea>
                            </div>
                            <button type="button" class="btn btn-outline-secondary px-5">Send</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact