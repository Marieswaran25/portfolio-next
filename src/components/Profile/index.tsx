import './profile.scss';

import { View } from '@library/View';
import Typography from '@library/Typography';
import { _get } from '@function/getCopyKey';
import { Button } from '@library/Button';
import colors from '@theme/colors.module.scss';
import { ProfileDatatype } from '@utils/profile';

import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Social } from '@components/Social';

export const Profile: React.FC<ProfileDatatype> = ({ profileImages, socialPlatformData, headerContentData }) => {
    const { title, description, downloadResume, contact } = { ...headerContentData };
    return (
        <View className="profile-header" element={'header'}>
            <div className="profile-header-left">
                <Image src={profileImages[0]} alt="profile-image" id="profile-image" />
                <Social />
            </div>
            <div className="profile-header-right">
                <div className="header-block">
                    <Typography type={'h1'} weight={'regular'} text={_get(title)} color={colors.Black16} as="h1" />
                    {description && <Typography type={'h4'} weight={'regular'} text={_get(description)} color={colors.Black16} as="h4" />}
                </div>
                <div className="header-resume-block">
                    <Link href={'/docs/Marieswaran-Resume.pdf'} target="_blank">
                        <Button additionalsize="large" label={<Typography type={'caption'} weight={'semibold'} text={_get(downloadResume)} color={colors.Black16} />} backgroundColor={colors.Violet} />
                    </Link>
                    <Button additionalsize="large" backgroundColor={colors.WS9} label={<Typography type="caption" weight="semibold" text={_get(contact)} color={colors.Black16} />} />
                </div>
            </div>
        </View>
    );
};
