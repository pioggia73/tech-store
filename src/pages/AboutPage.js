import React from 'react';
import Info from '../components/AboutPage/Info';
import Hero from '../components/Hero';
import AboutBcg from '../images/aboutBcg.jpeg';

export default function AboutPage() {
    return (
        <>
           <Hero img = {AboutBcg}></Hero>
           <Info></Info>


        </>
    )
}
