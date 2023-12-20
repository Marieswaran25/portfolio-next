import './social.scss';

import * as React from 'react';
import { socialPlatformData } from '@utils/platform';
import Link from 'next/link';

export const Social: React.FunctionComponent = () => {
    return (
        <div className="social-platform">
            {Object.values(socialPlatformData).map((platform, index) => (
                <Link href={platform.link} key={index} target="_blank" prefetch>
                    {platform.icon}
                </Link>
            ))}
        </div>
    );
};
