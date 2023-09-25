import React from 'react';
import Banner from '../../components/Banner';
import About from '../../components/About';
import Projects from '../../components/Projects';
import Contact from '../../components/Contact';

function Home() {
    return (
        <div>
            <Banner />
            <About />
            <Projects />
            <Contact />
        </div>
    )
}

export default Home