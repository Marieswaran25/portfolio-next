import { CopyKeys } from '@Customtypes/base';
import { StaticImageData } from 'next/image';
import Kirushan from '@assets/images/kirushan.jpg';

enum Testimonial {
    KIRUSHAN = 'Kirushan',
}
const TestimonilLink: Record<Testimonial, string> = {
    [Testimonial.KIRUSHAN]: 'https://www.linkedin.com/in/kirushan-balakrishnan-5a298317a/',
};
export interface TestimonialDataType {
    testimonialName: CopyKeys;
    linkedinLink: string;
    role: CopyKeys;
    content: CopyKeys;
    image: StaticImageData;
}
export type TestimonialProps = Record<Testimonial, TestimonialDataType>;
export const TestimonialData: TestimonialProps = {
    [Testimonial.KIRUSHAN]: {
        testimonialName: 'testimonial.name.1',
        role: 'testimonial.role.1',
        content: 'testimonial.content.1',
        linkedinLink: TestimonilLink.Kirushan,
        image: Kirushan,
    },
};
