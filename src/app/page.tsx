import './globals.scss';

import { Contact } from '@components/Contact';
import { Experience } from '@components/Experience';
import { Profile } from '@components/Profile';
import { Projects } from '@components/Projects';
import { Skills } from '@components/Skills';
import { Testimonials } from '@components/Testimonials';
import { PortfolioData } from '@utils/index';
import Script from 'next/script'
 

export default function HomePage() {
    const { profileData, experienceData, skillsData, projectFieldData, TestimonialData } = { ...PortfolioData };
    return (
        <main>
            <Profile {...profileData} />
            <Experience {...experienceData} />
            <Skills skillset={skillsData} />
            <Projects data={projectFieldData} />
            <Testimonials data={TestimonialData} />
            <Contact />
            <iframe
      id="idIframe"
      src="https://form.elatrus.com/"
      frameBorder="0"
      scrolling="no"
      width="100%"
    >
    </iframe>
             <Script           strategy="beforeInteractive">
      const youriframeurl = "https://form.elatrus.com";
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

      window.addEventListener("message", receiveMessage, false);
    </Script>
        </main>
    );
}
