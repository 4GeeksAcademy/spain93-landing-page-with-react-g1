import React from "react";

export const Cards = () => {

    return (
        <div className="card">
            <img src="https://randomuser.me/api/portraits/lego/6.jpg" className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">Hola</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
        </div>
    )
}