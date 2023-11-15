import React from 'react'

export const CarouselHome = () => {
    return (
        <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active" data-bs-interval="2000">
                    <img src="../assets/carouselImages/yours_truly_background.jpg" className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item" data-bs-interval="2000">
                    <img src="../assets/carouselImages/ariana_dua_poster.jpg" className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item" data-bs-interval="2000">
                    <img src="../assets/carouselImages/posters_songs.jpg" className="d-block w-100" alt="..."/>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}
