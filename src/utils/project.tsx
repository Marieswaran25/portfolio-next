import { CopyKeys } from '@Customtypes/base';
import { Organization, Projects } from '@Customtypes/organization';
import CircleDna from '@assets/images/circledna.png';
import ProjectSreen from '@assets/images/projectscreen.jpg';
import { StaticImageData } from 'next/image';

export interface ProjectFieldDataType {
    header: CopyKeys;
    description?:
        | CopyKeys
        | {
              header: CopyKeys;
              description: CopyKeys;
          }[];
    projectLogo?: StaticImageData;
    projectLink?: string;
    employer?: CopyKeys;
    companyLink?: Organization;
}

const projectLink: Record<Projects, string> = {
    [Projects.CIRCLEDNA]: 'https://circledna.com/en/',
    [Projects.PROJECT_SCREEN]: 'https://www.linkedin.com/showcase/project-screen/about/',
};
export const projectFieldData: ProjectFieldDataType[] = [
    {
        header: 'project.1.title',
        projectLogo: CircleDna,
        projectLink: projectLink.CircleDNA,
        employer: 'project.1.employer',
        companyLink: Organization.PRENETICS,
        description: [
            {
                header: 'project.1.feature.header.1',
                description: 'project.1.feature.description.1',
            },
            {
                header: 'project.1.feature.header.2',
                description: 'project.1.feature.description.2',
            },
            {
                header: 'project.1.feature.header.3',
                description: 'project.1.feature.description.3',
            },
            {
                header: 'project.1.feature.header.4',
                description: 'project.1.feature.description.4',
            },
            {
                header: 'project.1.feature.header.5',
                description: 'project.1.feature.description.5',
            },
            {
                header: 'project.1.feature.header.6',
                description: 'project.1.feature.description.6',
            },
            {
                header: 'project.1.feature.header.7',
                description: 'project.1.feature.description.7',
            },
            {
                header: 'project.1.feature.header.8',
                description: 'project.1.feature.description.8',
            },
            {
                header: 'project.1.feature.header.9',
                description: 'project.1.feature.description.9',
            },
        ],
    },
    {
        header: 'project.2.title',
        employer: 'project.1.employer',
        projectLogo: ProjectSreen,
        projectLink: projectLink['Project Screen'],
        companyLink: Organization.PRENETICS,

        description: [
            {
                header: 'project.2.feature.header.1',
                description: 'project.2.feature.description.1',
            },
            {
                header: 'project.2.feature.header.2',
                description: 'project.2.feature.description.2',
            },
            {
                header: 'project.2.feature.header.3',
                description: 'project.2.feature.description.3',
            },
            {
                header: 'project.2.feature.header.4',
                description: 'project.2.feature.description.4',
            },
            {
                header: 'project.2.feature.header.5',
                description: 'project.2.feature.description.5',
            },
            {
                header: 'project.2.feature.header.6',
                description: 'project.2.feature.description.6',
            },
        ],
    },
];
