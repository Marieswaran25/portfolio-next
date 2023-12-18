import { experienceData, ExperienceProps } from '@utils/experience';
import { Technology, skillsData } from '@utils/skills';
import { profileData, ProfileDatatype } from '@utils/profile';

type PortfolioData = { profileData: ProfileDatatype } & { experienceData: ExperienceProps } & { skillsData: Technology[] };

export const PortfolioData: PortfolioData = {
    profileData,
    experienceData,
    skillsData,
};
