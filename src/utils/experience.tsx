import { CopyKeys } from '@Customtypes/base';
import { StepperProps } from '@Customtypes/stepper';
import Prenetics from '@assets/images/prenetics.jpeg';

export type ExperienceProps = { data: StepperProps[] } & { title: CopyKeys };

export const experienceData: ExperienceProps = {
    data: [
        {
            organizationLogo: Prenetics,
            organizationName: 'Organization.name.1',
            organizationLink: '',
            role: 'Organiztion.role.1',
            duration: 'Organization.duration.1',
        },
    ],
    title: 'experience.header.text',
};
