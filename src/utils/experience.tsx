import Prenetics from '@assets/images/prenetics.jpeg';
import { CopyKeys } from '@Customtypes/base';
import { Organization } from '@Customtypes/organization';
import { StepperProps } from '@Customtypes/stepper';

export type ExperienceProps = { data: StepperProps[] } & { title: CopyKeys };

export const experienceData: ExperienceProps = {
    data: [
        {
            organizationLogo: Prenetics,
            organizationName: 'Organization.name.1',
            organizationLink: Organization.PRENETICS,
            role: 'Organiztion.role.1',
            duration: 'Organization.duration.1',
        },
    ],
    title: 'experience.header.text',
};
