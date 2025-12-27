import './globals.scss';

import { NavBar } from '@components/NavBar';
import { Rights } from '@components/Rights';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import type { Metadata } from 'next';
import Script from 'next/script'

export const metadata: Metadata = {
    title: "Marieswaran's Portfolio",
    description:
        'A passionate Full Stack Developer having 1.3+ years of experience in building Web applictions with JavaScript / TypeScript / Reactjs / Nodejs and some other cool libraries and frameworks.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body>
                <NavBar />
                {children}
                <Rights />
                <Analytics />
                <SpeedInsights />
                 <Script           strategy="beforeInteractive">
                     {`const youriframeurl = "https://form.elatrus.com";
      console.log("youriframeurl", youriframeurl);
      function receiveMessage(event) {
        const origin = event.origin || "";
        console.log("origin", event);
        console.log("received message", event.data);
        if (event.data.type === "setHeight") {
          const iFrameID = document.getElementById("idIframe");
          if (iFrameID) {
            iFrameID.style.height = `${event.data.height}px`;
          }
        }
      }

      window.addEventListener("message", receiveMessage, false);`}
    </Script>
            </body>
        </html>
    );
}
