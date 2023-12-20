import Github from '@assets/images/github.svg';
import Gmail from '@assets/images/gmail.svg';
import Instagram from '@assets/images/instagram.svg';
import Linkedin from '@assets/images/linkedin.svg';

export enum Platform {
    GITHUB = 'github',
    INSTAGRAM = 'instagram',
    LINKEDIN = 'linkedin',
    // GMAIL = 'gmail',
    // WHATSAPP='whatsapp'
}

interface SocialPlatform {
    link: string;
    icon: JSX.Element;
}

export type SocialPlatformDataType = Record<Platform, SocialPlatform>;

export const socialPlatformData: SocialPlatformDataType = {
    [Platform.GITHUB]: {
        link: 'https://github.com/Marieswaran25',
        icon: <Github />,
    },
    [Platform.LINKEDIN]: {
        link: 'https://www.linkedin.com/in/marieswaranb2501/',
        icon: <Linkedin />,
    },
    [Platform.INSTAGRAM]: {
        link: 'https://instagram.com/__maries.venkat__',
        icon: <Instagram />,
    },

    // [Platform.GMAIL]: {
    //     link: '',
    //     icon: <Gmail />,
    // },
    // [Platform.WHATSAPP]: undefined
};
