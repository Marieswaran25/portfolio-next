import './navbar.scss';

import * as React from 'react';
import { appendString } from '@function/appendString';
import { _get } from '@function/getCopyKey';
import Typography from '@library/Typography';
import { View } from '@library/View';
import { navBarData } from '@utils/navbar';
import Link from 'next/link';

import { NavBarMobile } from './Mobile';



export const NavBar: React.FunctionComponent = () => {
  return (
    <>
    <nav>
    <View className='navbar'>
        <div className="info">
        <Typography type={'h1'} weight={'regular'} text={_get('nav.header')} color={''} as="h1"/>

        </div>
        <div className="routes">
            {
                Object.values(navBarData).map((data,index)=>{
                    return (
                        <Link href={appendString(data.anchorId,'#','start')} key={index}>
                            <Typography type={'caption'} weight={'semibold'} text={_get(data.text)} color={''} as="h4"/>
                        </Link>
                    )
                })
            }
        </div>
    </View>
    </nav>
    <NavBarMobile/>
    </>
  );
};
