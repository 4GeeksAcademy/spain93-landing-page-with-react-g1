import React from "react";

export const Cards = (props) => {

    return (
        <div className="card">
            <img src={props.imageURL} className="card-img-top" alt={props.imageAlt}/>
                <div className="card-body bg-light">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.description}</p>
                    <a href="#" className="btn btn-success">{props.textButton}</a>
                </div>
        </div>
    )
}

/* Card.defaultProps = {
    title: "Card Title",
    description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    textButton: "Learn More",
    imageURL: "https://randomuser.me/api/portraits/lego/6.jpg",
    imageAlt: "Photo"
} */