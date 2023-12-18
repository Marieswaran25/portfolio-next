import image1 from '@assets/images/profile.jpg';
import image2 from '@assets/images/profile2.jpg';
import { SocialPlatformDataType, socialPlatformData } from '@utils/platform';
import { StaticImageData } from 'next/image';
import { CopyKeys } from '@Customtypes/base';

export interface ProfileDatatype {
    profileImages: StaticImageData[];
    socialPlatformData: SocialPlatformDataType;
    headerContentData: HeaderContent;
}
type HeaderContent = {
    title: CopyKeys;
    description?: CopyKeys;
    contact: CopyKeys;
    downloadResume: CopyKeys;
};

const headerContentData: HeaderContent = {
    title: 'header.title',
    description: 'header.description',
    contact: 'header.contact',
    downloadResume: 'header.resume',
};
export const profileData: ProfileDatatype = {
    profileImages: [image1, image2],
    socialPlatformData,
    headerContentData,
};
