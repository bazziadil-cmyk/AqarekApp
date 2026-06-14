---
name: Majestic Abode
colors:
  surface: '#f8f9ff'
  surface-dim: '#d0dbed'
  surface-bright: '#f8f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#eff4ff'
  surface-container: '#e6eeff'
  surface-container-high: '#dee9fc'
  surface-container-highest: '#d9e3f6'
  on-surface: '#121c2a'
  on-surface-variant: '#404944'
  inverse-surface: '#27313f'
  inverse-on-surface: '#eaf1ff'
  outline: '#707974'
  outline-variant: '#bfc9c3'
  surface-tint: '#2b6954'
  primary: '#003527'
  on-primary: '#ffffff'
  primary-container: '#064e3b'
  on-primary-container: '#80bea6'
  inverse-primary: '#95d3ba'
  secondary: '#735c00'
  on-secondary: '#ffffff'
  secondary-container: '#fed65b'
  on-secondary-container: '#745c00'
  tertiary: '#2c2f30'
  on-tertiary: '#ffffff'
  tertiary-container: '#424546'
  on-tertiary-container: '#b0b2b3'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#b0f0d6'
  primary-fixed-dim: '#95d3ba'
  on-primary-fixed: '#002117'
  on-primary-fixed-variant: '#0b513d'
  secondary-fixed: '#ffe088'
  secondary-fixed-dim: '#e9c349'
  on-secondary-fixed: '#241a00'
  on-secondary-fixed-variant: '#574500'
  tertiary-fixed: '#e1e3e4'
  tertiary-fixed-dim: '#c5c7c8'
  on-tertiary-fixed: '#191c1d'
  on-tertiary-fixed-variant: '#454748'
  background: '#f8f9ff'
  on-background: '#121c2a'
  surface-variant: '#d9e3f6'
typography:
  display-lg:
    fontFamily: Noto Serif
    fontSize: 40px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Noto Serif
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.3'
  headline-lg-mobile:
    fontFamily: Noto Serif
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.3'
  title-md:
    fontFamily: IBM Plex Sans
    fontSize: 18px
    fontWeight: '600'
    lineHeight: '1.5'
  body-lg:
    fontFamily: IBM Plex Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  body-sm:
    fontFamily: IBM Plex Sans
    fontSize: 14px
    fontWeight: '400'
    lineHeight: '1.6'
  label-caps:
    fontFamily: IBM Plex Sans
    fontSize: 12px
    fontWeight: '700'
    lineHeight: '1'
    letterSpacing: 0.1em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  container-margin: 24px
  gutter: 16px
  stack-sm: 8px
  stack-md: 16px
  stack-lg: 32px
---

## Brand & Style

The design system is engineered to evoke an atmosphere of exclusive luxury, reliability, and architectural precision specifically for the Gulf’s high-end real estate market. The brand personality is "The Distinguished Advisor"—authoritative yet approachable, sophisticated yet technologically advanced. 

The visual style follows a **Modern Minimalism** approach infused with **High-End Corporate** sensibilities. It prioritizes vast white space to allow property photography to breathe, punctuated by rich emerald and gold accents that signal wealth and success. The interface must feel "expensive" through restraint, utilizing precise alignment, generous padding, and a curated color palette that reflects the lush greenery and golden sands of the region.

## Colors

The palette is rooted in the "Emerald and Gold" heritage of the Gulf's luxury sector.

- **Primary (Deep Emerald):** Used for primary actions, navigation headers, and brand-heavy components to establish trust and institutional stability.
- **Secondary (Matte Gold):** Reserved for "Premium" or "VIP" indicators, call-to-action highlights, and the "Match Percentage" core feature. It should be used sparingly to maintain its impact.
- **Backgrounds:** The primary interface background is **Pure White (#FFFFFF)** to ensure clarity. **Soft Grays (#F3F4F6)** are used for surface-level differentiation in listing feeds.
- **Text:** Deep charcoal colors are preferred over pure black to maintain a softer, more professional reading experience.

## Typography

The typography strategy leverages the contrast between a timeless Serif and a systematic Sans-serif.

- **Headlines:** Use **notoSerif** for property titles and section headers. This choice mirrors the editorial feel of luxury real estate magazines and provides an authoritative, "established" voice.
- **Body & UI:** Use **ibmPlexSans** for all functional text, property details, and navigation. Its structured, technical nature ensures high legibility for Arabic and Latin scripts, maintaining a professional "prop-tech" feel.
- **Hierarchy:** Ensure a clear distinction between the "Price" (Large Serif) and the "Location" (Medium Sans-serif).
- **RTL Considerations:** Line heights are increased by 10-15% for Arabic scripts to accommodate deeper descenders and taller ascenders characteristic of the region's calligraphy.

## Layout & Spacing

This design system utilizes a **Fluid Grid** with a 24px safety margin for mobile devices, ensuring the layout feels spacious and "un-crowded."

- **RTL Orientation:** The layout is strictly Right-to-Left. Progress indicators, back buttons, and text alignment must follow the directional flow of Arabic.
- **Vertical Rhythm:** A strict 8px base unit is used. Content blocks (e.g., Image -> Title -> Price) should use a 16px (stack-md) gap. Section-to-section spacing should use 32px (stack-lg) to emphasize modularity.
- **Visual Breathing Room:** Listing cards should span the full width of the container minus margins to maximize the impact of high-resolution property photography.

## Elevation & Depth

To maintain a "Modern Professional" look, the design system avoids heavy shadows in favor of **Ambient Tonal Layers**.

- **Surfaces:** Use subtle background shifts (White to Off-white) to define card boundaries.
- **Shadows:** When used for primary listing cards, shadows must be ultra-diffused: `0px 10px 30px rgba(6, 78, 59, 0.05)`. Note the slight Emerald tint in the shadow to harmonize with the brand color.
- **Interaction:** Floating Action Buttons (FABs) for "Contact Agent" or "Schedule Viewing" use a slightly higher elevation with a Gold-tinted shadow to signify their premium interactive status.

## Shapes

The shape language is characterized by **Generous Roundedness**, which softens the professional aesthetic and makes the app feel approachable and modern.

- **Base Corner Radius:** 16px (rounded-lg) is the standard for listing cards, input fields, and main containers.
- **Buttons:** Use 8px (soft) for secondary actions and fully rounded (pill-shaped) for the "Smart Match" or "Direct Chat" buttons to make them stand out.
- **Iconography:** Icons should be thin-stroke (1.5pt) with slightly rounded terminals to match the font geometry.

## Components

### Luxury Property Cards
Cards feature a 16:9 aspect ratio image with a subtle gradient overlay at the bottom for white-text legibility. Price is positioned at the top-right (RTL) in a Matte Gold badge.

### Smart Match Indicator
A distinctive circular ring (10% stroke width). The ring fills with a Deep Emerald to Matte Gold gradient based on the match score. The percentage text (e.g., 98%) is placed in the center using Noto Serif.

### Status Trackers
For deal flows (Offer Sent -> Under Review -> Closed), use a horizontal timeline with Gold nodes and thin Emerald connecting lines. Completed states are indicated by filled Emerald circles with Gold checkmarks.

### Professional Profile Badges
Agent avatars are encased in a 2px Gold border for "Verified Luxury Partners." Badges are small, pill-shaped elements with a soft-gray background and Emerald text.

### Input Fields
Fields use a 1px soft-gray border that transforms into a 2px Deep Emerald border on focus. Labels are always floating and use the `label-caps` typography style.