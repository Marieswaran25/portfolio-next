import type { Metadata } from 'next';
import './globals.scss';

export const metadata: Metadata = {
    title: "Marieswaran's Portfolio",
    description:
        'A passionate Full Stack Developer having 1.3+ years of experience in building Web applictions with JavaScript / TypeScript / Reactjs / Nodejs and some other cool libraries and frameworks.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}
