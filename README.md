# Paws & Hope Animal Shelter — Website Project

## Student Information
- **Name:** Thembelihle Skosana
- **Student Number:** ST10481028
- **Subject:** Web Development (WEDE5020)

## Project Overview
A five-page website for Paws & Hope Animal Shelter, a community-based non-profit
that rescues, rehabilitates, and rehomes stray and abandoned animals. The site
gives visitors an easy way to learn about the shelter, browse its programmes,
and enquire about adopting, volunteering, or sponsoring.

## Website Goals and Objectives
- Increase awareness of the shelter and its work within the local community.
- Grow the volunteer and donor base through an accessible online presence.
- Provide an easy way for the public to enquire about adoption.
- Enable donation and sponsorship enquiries to support running costs.

## Key Features and Functionality
- Responsive-ready homepage with hero section and calls to action.
- About Us page detailing history, mission, vision, and team.
- Programmes page covering Adoption, Fostering, and Sponsorship.
- Enquiry form (adoption / volunteering / sponsorship) with client-side validation.
- Contact page with two shelter locations (embedded maps) and a general contact form.

## Timeline and Milestones
| Milestone | Target Date | Deliverable |
|---|---|---|
| Proposal approval & research | Week 1 | Approved proposal, sitemap, gathered content |
| HTML structure & initial pages | Weeks 2–3 | Initial HTML files pushed to GitHub |
| Styling & content integration (Part 2) | Weeks 4–6 | Fully styled, responsive site |
| Testing, refinement & final submission (Part 3) | Weeks 7–8 | Debugged, cross-browser tested final site |

## Part 1 Details
Part 1 delivers the approved Website Project Proposal and the initial project
structure: five semantic HTML pages, a base stylesheet, a placeholder JS file,
and an images folder with placeholder graphics (to be replaced with sourced,
licensed images as part of the Content Research and Sourcing submission).

Part 2 and Part 3 details will be added in future submissions/edits.

## Sitemap
A visual sitemap is included at `docs/sitemap.png`.

```
index.html (Home)
├── about.html (About Us)
├── services.html (Programmes: Adoption / Fostering / Sponsorship)
├── enquiry.html (Adoption / Volunteer / Sponsor Enquiry Form)
└── contact.html (Locations, Maps & Contact Form)
```

## File Structure
```
paws-hope-website/
├── index.html
├── about.html
├── services.html
├── enquiry.html
├── contact.html
├── README.md
├── css/
│   └── style.css
├── js/
│   └── main.js
├── docs/
│   └── sitemap.png
└── images/
    ├── logo-placeholder.png
    ├── hero_image.jpg
    ├── hero_img2.jpg
    ├── showCase.jpg
    └── display_in_aboutUS.jpg
```

## Changelog
- **v0.1 (Part 1):** Initial semantic HTML structure for all five pages,
  base stylesheet reflecting the approved colour palette (teal/cream/orange),
  placeholder logo and hero images, and a placeholder JS file with nav
  highlighting and basic form validation.
- **v0.2 (Part 1 revision):** Replaced the placeholder hero image with real
  sourced photography (`hero_image.jpg` / `hero_img2.jpg`, crossfading every
  10 seconds on the homepage); added a shelter showcase photo (`showCase.jpg`)
  and an About Us volunteer photo (`display_in_aboutUS.jpg`); added Google
  Fonts (Poppins/Nunito) for consistent typography across all pages; added a
  responsive hamburger navigation menu for tablet/mobile; added a visual
  sitemap diagram (`docs/sitemap.png`).
- **v0.3 (Part 1 revision):** Refined image framing across the site — hero
  images now use `object-position` tuning so subjects stay centred during the
  crossfade, and the showcase/about photos sit in fixed-aspect-ratio frames
  (object-fit: cover) with consistent rounded corners and shadows so all
  non-hero imagery looks neat and uniform regardless of source dimensions.

## References
- Independent Institute of Education. (2026). *WEDE5020 Web Development: Project Guide, Part 1*. IIE.
- W3Schools. (2026). *HTML Tutorial*. Retrieved from https://www.w3schools.com/html/
- MDN Web Docs. (2026). *HTML: Structuring the Web*. Retrieved from https://developer.mozilla.org/
