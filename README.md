# Paws & Hope Animal Shelter — Website Project

## Student Information
- **Name:** Thembelihle Skosana
- **Student Number:** ST10481028
- **Subject:** Web Development (WEDE5020)

## Project Overview
A five-page website for Paws & Hope Animal Shelter, a community-based non-profit that rescues, rehabilitates, and rehomes stray and abandoned animals. The site gives visitors an easy way to learn about the shelter, browse its programmes, and enquire about adopting, volunteering, or sponsoring.

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
Part 1 delivered the approved Website Project Proposal and the initial project structure: five semantic HTML pages, a base stylesheet, a placeholder JS file, and an images folder with placeholder graphics. This was later revised (see Changelog) to replace placeholders with real, sourced photography once available.

## Part 2 Details
Part 2 focused on CSS styling and responsive design, building on the semantic HTML structure delivered in Part 1.

**External stylesheet:** all five pages link to a single external stylesheet, `css/style.css`, using a consistent naming convention.

**Base styles / reset:** the stylesheet opens with a lightweight CSS reset (`box-sizing: border-box` on every element, margins/padding cleared, list styles removed) so the site starts from a consistent baseline across browsers, followed by base styles for font family, font size, colour scheme, and line height.

**Design tokens (cascading with a minimum number of selectors):** colours, spacing, and the typographic scale are defined once as CSS custom properties on `:root` (e.g. `--colour-primary`, `--space-md`, `--step-2`) and reused throughout the sheet. This means the whole site's look and feel can be adjusted by changing a handful of variables, rather than repeating values across many selectors.

**Typography:** heading and body font families, sizes, weights, line-height, and letter-spacing are set using a defined type scale (`--step--1` through `--step-3`), applied consistently across all pages via `h1`/`h2`/`h3` and `body` selectors.

**Layout techniques:**
- **CSS Grid** is used for the overall page shell (`body` as a three-row grid: header / main / footer), the card grids on the homepage and About Us page, and the homepage showcase section.
- **Flexbox** is used for the header/navigation bar, the hamburger icon, and the hero overlay's centred content.

**Visual and interactive styling:** `background-color`, `border`, and `box-shadow` are used throughout for cards, forms, and the showcase/about photo frames. Interactive states are handled with `:hover`, `:focus-visible`, and `:active` pseudo-classes on links, buttons, form fields, and the hamburger toggle, so the site gives clear visual feedback during keyboard and mouse use alike.

**Responsive design:**
- Breakpoints are defined with `em`-based media queries (`48em` ≈ tablet and below, `30em` ≈ small phones) rather than fixed pixel values, per the brief's guidance on relative units.
- Spacing and font sizes throughout the sheet use `rem`, and widths use `%` or `fr` units (via Grid), so the layout scales smoothly rather than breaking at arbitrary pixel widths.
- At the tablet/mobile breakpoint, the navigation collapses into a hamburger menu (see `js/main.js` for the open/close logic), the showcase section switches from a two-column to a single-column layout, and heading sizes are reduced slightly for smaller screens.

**Responsive images:** the four real photographs (`hero_image.jpg`, `hero_img2.jpg`, `showCase.jpg`, `display_in_aboutUS.jpg`) are each served at four widths (480px / 768px / 1200px / 1920px) via `srcset` and `sizes` attributes, so the browser downloads an appropriately sized file for the viewport rather than always loading the largest version. `width`/`height` attributes are also set on all images to prevent layout shift while they load.

**Testing across breakpoints:** the site was tested at desktop (1440px), tablet (768px), and mobile (375px) widths. Screenshots are included in `docs/screenshots/`:
- `home-desktop.png` — homepage at desktop width
- `home-tablet.png` — homepage at tablet width
- `home-mobile.png` — homepage at mobile width
- `about-desktop.png` — About Us page at desktop width
- `enquiry-mobile.png` — Enquiry form at mobile width

These were captured with an automated headless rendering tool, which — as a known limitation of that specific tool's older rendering engine — does not always paint the hamburger icon itself at narrow widths, even though the underlying CSS and navigation logic work correctly (verified independently). Before final submission, please also test in real browser developer tools (Chrome/Firefox/Edge device toolbar) and add your own screenshots showing the hamburger menu open on a phone/tablet, per the Part 2 brief.

## Working Through Feedback from Part 1
No formal Part 1 mark/feedback has been received yet at the time of this update. In the interim, the following self-identified improvements were made and are recorded here so the changelog stays complete once formal feedback arrives:
- Replaced all placeholder imagery with real, sourced photography.
- Added consistent typography (Poppins/Nunito) across every page.
- Added a working, accessible hamburger menu for small screens.
- Reviewed all page copy and documentation for consistent South African English spelling (e.g. "colour", "organisation", "programme", "centre").

Once formal Part 1 feedback is released, specific corrections will be added here as dated sub-entries, each cross-referenced to the relevant Changelog entry below.

## Sitemap
A visual sitemap diagram is included at `docs/sitemap.png`, and a standard XML sitemap for search engines is included at `sitemap.xml`.