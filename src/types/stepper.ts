import { StaticImageData } from 'next/image';
import { CopyKeys } from './base';

export interface StepperProps {
    organizationLogo: StaticImageData;
    organizationLink: string;
    organizationName: CopyKeys;
    role: CopyKeys;
    duration: CopyKeys;
}
