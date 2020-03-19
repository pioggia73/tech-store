import React from 'react';
import Hero from '../components/Hero';
import ContactBcg from '../images/contactBcg.jpeg';
import Contact from '../components/ConatactPage/contact';

export default function ContactPage() {
    return (
        <>
            <Hero img = {ContactBcg} />
            <Contact />
        </>
    )
}
