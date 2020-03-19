import React from 'react';
import Title from '../Title';
import AboutBcg from '../../images/aboutBcg.jpeg';

export default function Info() {
    return (
       
        <section className = "py-5">
            <div className = "container">
                <div className="row">
                    <div className = "col-10 mx-auto col-md-6 my-3">
                        <img src = {AboutBcg} className = "img-fluid img-thumbnail" alt = "about image" style = {{background: "var(--darkGrey)"}}></img>
                    </div>
                    <div className = "col-10 mx-auto col-md-6 my-3">
                        <Title title = "About us"></Title>
                        <p className = "text-lead text-muted my-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, mollitia sed ullam officiis voluptatem vitae praesentium asperiores provident saepe quaerat?
                        </p>

                        <p className = "text-lead text-muted my-3" > Lorem ipsum dolor sit amet consectetur adipisicing elit.Ad, mollitia sed ullam officiis voluptatem vitae praesentium asperiores provident saepe quaerat?
                        </p>
                        <button className = "main-link" type = "button" style = {{marginTop: '2rem'}}>more info</button>
                    </div>
                </div>
            </div>
        </section>
    )
}
