import React from "react";

//style
import "../homepage/home.css";

//component
import Header from "../../components/header/Header";

const HomePreview = () => {
    return (
        <div className="d-flex">    
            <section className="home-bg">
                <Header />
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="search-container">
                            <h1 className="home-title">
                                <span className="red-text">ExzoSwap Charts </span>- UPCOMING
                            </h1>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default HomePreview;