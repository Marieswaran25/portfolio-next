import { Profile } from '@components/Profile';
import './globals.scss';
import { PortfolioData } from '@utils/index';
import { Experience } from '@components/Experience';
import { Skills } from '@components/Skills';
import { Projects } from '@components/Projects';
import { Testimonials } from '@components/Testimonials';
import { Contact } from '@components/Contact';

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
