import './stepper.scss';

import { StepperProps } from '@Customtypes/stepper';
import Typography from '@library/Typography';
import { _get } from '@function/getCopyKey';
import colors from '@theme/colors.module.scss';
import ChevronRight from '@assets/images/triangle.svg';

import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export const Stepper: React.FunctionComponent<StepperProps> = ({ organizationLogo, organizationName, role, duration, organizationLink }) => {
    return (
        <div className="stepper">
            <div className="stepper-left">
                <div className="top-vertical-line"></div>
                <div className="logo">
                    <Link href={organizationLink}>
                        <Image src={organizationLogo} alt="org-logo" />
                    </Link>
                </div>
                <div className="vertical-line"></div>
            </div>
            <div className="stepper-right-arrow">
                <ChevronRight />
                <div className="stepper-right">
                    <Link href={organizationLink}>
                        <Typography type={'h3'} weight={'semibold'} text={_get(organizationName)} color={colors.Black16} />
                    </Link>
                    <Typography type={'h4'} weight={'semibold'} text={_get(role)} color={colors.Black16} />
                    <Typography type={'p3'} weight={'light'} text={_get(duration)} color={colors.Black16} />
                </div>
            </div>
        </div>
    );
};
