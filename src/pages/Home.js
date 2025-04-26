import React from "react";
import doc from '../assets/doc.jpg';
import './Home.css';

const Home = () => {
    return (
        <header>
            <div className="container">
                <div className="row">
                    <div className="col-md-8 col-lg-8">
                        <h2>We provide All health care solution</h2>
                        <button><a href="#"> read more </a></button>

                    </div>
                    <div className="col-md-4 col-lg-4">
                        <img src={doc} title="dentcity"/>
                    </div>
                </div>
            </div>


        </header>
            
        );
};
export default Home;