import { CopyKeys } from "@Customtypes/base"
import { ANCHOR_ID } from "@Customtypes/routes"

export type NavBarProps={
    text:CopyKeys,
    anchorId:ANCHOR_ID
}
export const navBarData:Record<ANCHOR_ID,NavBarProps>={
    [ANCHOR_ID.ABOUT]: {
        text: 'nav.about',
        anchorId: ANCHOR_ID.ABOUT
    },
    [ANCHOR_ID.EXPERIENCE]: {
        text: "nav.experience",
        anchorId: ANCHOR_ID.EXPERIENCE
    },
    [ANCHOR_ID.SKILLS]: {
        text: "nav.skills",
        anchorId: ANCHOR_ID.SKILLS
    },
    [ANCHOR_ID.PROJECTS]: {
        text: "nav.project",
        anchorId: ANCHOR_ID.PROJECTS
    },
    [ANCHOR_ID.TESTIMONIALS]: {
        text: "nav.testimonials",
        anchorId: ANCHOR_ID.TESTIMONIALS
    },
    [ANCHOR_ID.CONTACT]: {
        text: "nav.contact",
        anchorId: ANCHOR_ID.CONTACT
    }
}