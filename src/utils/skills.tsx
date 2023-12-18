import { CopyKeys } from '@Customtypes/base';
import HTML from '@assets/images/html.svg';
import Css from '@assets/images/css.svg';
import JavaSript from '@assets/images/javascript.svg';
import TypeScript from '@assets/images/typescript.svg';
import Nextjs from '@assets/images/nextjs.svg';
import Sass from '@assets/images/sass.svg';
import Bootstrap from '@assets/images/bootstrap.svg';
import Nodejs from '@assets/images/nodejs.svg';
import Api from '@assets/images/api.svg';
import Postgresql from '@assets/images/postgresql.svg';
import React from '@assets/images/react.svg';
import Express from '@assets/images/express.svg';

export interface Technology {
    field: CopyKeys;
    skill: {
        logo: JSX.Element;
        name: CopyKeys;
    }[];
}

export const skillsData: Technology[] = [
    {
        field: 'technology.field.1',
        skill: [
            {
                logo: <HTML />,
                name: 'technology.html',
            },
            {
                logo: <Css />,
                name: 'technology.css',
            },
            {
                logo: <JavaSript />,
                name: 'technology.js',
            },
            {
                logo: <TypeScript />,
                name: 'technology.ts',
            },
            {
                logo: <Sass />,
                name: 'technology.sass',
            },
            {
                logo: <Bootstrap />,
                name: 'technology.bootstrap',
            },
        ],
    },
    {
        field: 'technology.field.2',
        skill: [
            {
                logo: <Nodejs />,
                name: 'technology.node',
            },
            {
                logo: <Express />,
                name: 'technology.express',
            },
            {
                logo: <Api />,
                name: 'technology.api',
            },
        ],
    },
    {
        field: 'technology.field.4',
        skill: [
            {
                logo: <React />,
                name: 'technology.react',
            },
            {
                logo: <Nextjs />,
                name: 'technology.next',
            },
        ],
    },
    {
        field: 'technology.field.3',
        skill: [
            {
                logo: <Postgresql />,
                name: 'technology.postgres',
            },
        ],
    },
];
