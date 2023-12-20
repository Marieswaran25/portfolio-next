'use client';

import '../navbar.scss';

import * as React from 'react';
import Close from '@assets/images/close.svg';
import Menu from '@assets/images/menu.svg';
import { appendString } from '@function/appendString';
import { _get } from '@function/getCopyKey';
import Typography from '@library/Typography';
import { navBarData } from '@utils/navbar';
import Link from 'next/link';
import { useToggle } from 'src/hooks/use-toggle';

export const NavBarMobile: React.FunctionComponent = () => {
    const { isOpen, toggle, dropdownref } = useToggle(null);
    return (
        <nav ref={dropdownref} className="navbar-mobile">
            <div className="info">
                <Typography type={'h1'} weight={'regular'} text={_get('nav.header')} color={''} as="h1" />
                {isOpen !== 1 ? <Menu onClick={() => toggle(1)} /> : <Close onClick={() => toggle(0)} />}
            </div>
            <div className={`routes ${isOpen === 1 ? 'show' : ''}`}>
                {Object.values(navBarData).map((data, index) => {
                    return (
                        <Link href={appendString(data.anchorId, '#', 'start')} key={index}>
                            <Typography type={'caption'} weight={'semibold'} text={_get(data.text)} color={''} as="h4" />
                        </Link>
                    );
                })}
            </div>
        </nav>
    );
};
