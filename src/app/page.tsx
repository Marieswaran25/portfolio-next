import './globals.scss';

import { Contact } from '@components/Contact';
import { Experience } from '@components/Experience';
import { Profile } from '@components/Profile';
import { Projects } from '@components/Projects';
import { Skills } from '@components/Skills';
import { Testimonials } from '@components/Testimonials';
import { PortfolioData } from '@utils/index';

export default function HomePage() {
    const { profileData, experienceData, skillsData, projectFieldData, TestimonialData } = { ...PortfolioData };
    return (
        <main>
            <Profile {...profileData} />
            <Experience {...experienceData} />
            <Skills skillset={skillsData} />
            <Projects data={projectFieldData} />
            <Testimonials data={TestimonialData} />
            <Contact />
        </main>
    );
}
