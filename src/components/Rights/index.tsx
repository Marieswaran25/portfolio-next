import './rights.scss';

import * as React from 'react';
import Typography from '@library/Typography';
import Link from 'next/link';

export const Rights: React.FunctionComponent = () => {
    return (
        <div className="rights">
            <span>
                Made with ❤️ by
                <Link href={'https://github.com/Marieswaran25/portfolio-next'} target="_blank">
                    Marieswaran
                </Link>
            </span>
            <span>
                Using
                <Link href={'https://nextjs.org/'} target="_blank">
                    Next.js
                </Link>
            </span>
        </div>
    );
};
