import './testimonialCard.scss';
import colors from '@theme/colors.module.scss';
import gradients from '@theme/gradient.module.scss';

import * as React from 'react';
import Linkedin from '@assets/images/linkedin.svg';
import { _get } from '@function/getCopyKey';
import Typography from '@library/Typography';
import { TestimonialDataType } from '@utils/testimonials';
import Image from 'next/image';
import Link from 'next/link';

export const TestimonialCard: React.FunctionComponent<TestimonialDataType> = ({ linkedinLink, testimonialName, image, content, role }) => {
    return (
        <div className="testiomonial-card" style={{ background: gradients.bggradient1 }}>
            <Link href={linkedinLink} className="profile">
                <Image src={image} alt={_get(testimonialName)} />
                <Linkedin />
            </Link>
            <Link href={linkedinLink}>
                <Typography type={'h3'} weight={'semibold'} text={_get(testimonialName)} color={colors.Black16} as="h3" />
            </Link>
            <Typography type={'h4'} weight={'semibold'} text={_get(role)} color={colors.Black16} as="h4" />
            <Typography type={'p3'} weight={'regular'} text={_get(content)} color={colors.Black16} as="p" />
        </div>
    );
};
