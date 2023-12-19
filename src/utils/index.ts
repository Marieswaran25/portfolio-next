import { experienceData, ExperienceProps } from '@utils/experience';
import { Technology, skillsData } from '@utils/skills';
import { profileData, ProfileDatatype } from '@utils/profile';
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
