import React from 'react';
import Banner from '../../components/Banner';
import About from '../../components/About';
import ProjectsList from '../../components/ProjectsList';
import Contact from '../../components/Contact';

function HomePage() {
    return (
        <div>
            <Banner />
            <About />
            <ProjectsList />
            <Contact />
        </div>
    )
}

export default HomePage