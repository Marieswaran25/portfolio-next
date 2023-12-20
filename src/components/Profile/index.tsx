import './profile.scss';
import colors from '@theme/colors.module.scss';

import * as React from 'react';
import { Social } from '@components/Social';
import { ANCHOR_ID } from '@Customtypes/routes';
import { appendString } from '@function/appendString';
import { _get } from '@function/getCopyKey';
import { Button } from '@library/Button';
import Typography from '@library/Typography';
import { View } from '@library/View';
import { ProfileDatatype } from '@utils/profile';
import Image from 'next/image';
import Link from 'next/link';

export const Profile: React.FC<ProfileDatatype> = ({ profileImages, headerContentData }) => {
    const { title, description, downloadResume, contact } = { ...headerContentData };
    return (
        <View className="profile-header" element={'header' }id='about'>
            <Typography type={'h2'} weight={'semibold'} text={_get('profile.header')} color={colors.Black16} as={'h2'} style={{display:'none'}} />
            <div className="about">
            <div className="profile-header-left">
                <Image src={profileImages[1]} alt="profile-image" id="profile-image" />
                <Social />
            </div>
            <div className="profile-header-right">
                <div className="header-block">
                    <Typography type={'h1'} weight={'regular'} text={_get(title)} color={colors.Black16} as="h1" />
                    {description && <Typography type={'h4'} weight={'regular'} text={_get(description)} color={colors.Black16} as="h4" />}
                </div>
                <div className="header-resume-block">
                    <Link href={'/docs/Marieswaran-Resume.pdf'} target="_blank">
                        <Button additionalsize="large" label={<Typography type={'p3'} weight={'semibold'} text={_get(downloadResume)} color={colors.White} />} backgroundColor={colors.Violet} />
                    </Link>
                    <Link href={appendString(ANCHOR_ID.CONTACT,'#','start')}>
                    <Button additionalsize="large" backgroundColor={colors.WS9} label={<Typography type="p3" weight="semibold" text={_get(contact)} color={colors.Black16} />} />
                    </Link>
                </div>
            </div>
            </div>
        </View>
    );
};
