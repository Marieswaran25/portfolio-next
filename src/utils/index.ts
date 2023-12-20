import { experienceData, ExperienceProps } from '@utils/experience';
import { profileData, ProfileDatatype } from '@utils/profile';
import { skillsData, Technology } from '@utils/skills';

import { projectFieldData, ProjectFieldDataType } from './project';
import { TestimonialData, TestimonialProps } from './testimonials';

type PortfolioData = { profileData: ProfileDatatype } & { experienceData: ExperienceProps } & { skillsData: Technology[] } & { projectFieldData: ProjectFieldDataType[] } & {
    TestimonialData: TestimonialProps;
};

export const PortfolioData: PortfolioData = {
    profileData,
    experienceData,
    skillsData,
    projectFieldData,
    TestimonialData,
};
