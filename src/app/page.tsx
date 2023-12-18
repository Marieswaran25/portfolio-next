import { Profile } from '@components/Profile';
import './globals.scss';
import { PortfolioData } from '@utils/index';
import { Experience } from '@components/Experience';
import { Skills } from '@components/Skills';

export default function HomePage() {
    const { profileData, experienceData, skillsData } = { ...PortfolioData };
    return (
        <main>
            <Profile {...profileData} />
            <Experience {...experienceData} />
            <Skills skillset={skillsData} />
        </main>
    );
}
