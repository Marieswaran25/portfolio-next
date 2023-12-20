import './globals.scss';

import { NavBar } from '@components/NavBar';
import { Rights } from '@components/Rights';
import type { Metadata } from 'next';
import { SpeedInsights } from "@vercel/speed-insights/next"
import {Analytics} from "@vercel/analytics/react"

export const metadata: Metadata = {
    title: "Marieswaran's Portfolio",
    description:
        'A passionate Full Stack Developer having 1.3+ years of experience in building Web applictions with JavaScript / TypeScript / Reactjs / Nodejs and some other cool libraries and frameworks.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body>
                <NavBar/>
                {children}
                <Rights />
                <Analytics/>
                <SpeedInsights/>
            </body>
        </html>
    );
}
