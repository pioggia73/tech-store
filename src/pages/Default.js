import React from 'react';
import Hero from '../components/Hero';
import DefaultBcg from '../images/defaultBcg.jpeg';
import {Link} from 'react-router-dom';

export default function Default() {
    return (
        <>
            <Hero img = {DefaultBcg} title = "404" max = "true">
                <h2 className = "text-uppercase">page not found</h2>
                <Link to = "/" className = "main-link" style = {{marginTop: "2rem"}}>
                Go to home page
                </Link>
            
            </Hero>
        </>
    )
}
