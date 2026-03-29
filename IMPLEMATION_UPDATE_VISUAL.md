---
description: Implementation plan for a modern, high-trust B2B AI Automation Agency landing page.
---

# Implementation Plan: B2B AI Automation Lead Gen Landing Page

This plan outlines the steps to transform the existing landing page into a modern, high-trust, "calm" lead generation page for an AI Automation Agency, following the specific design constraints (Dark mode, Amber accents, Serif headers).

## 1. Design System Setup
- [ ] **Colors**: Define CSS variables in `index.css`:
  - `--bg-primary`: `#0A0A0A`
  - `--accent-amber`: `#C9A84C`
  - `--text-primary`: `#F5F1EB`
  - `--text-muted`: `rgba(245, 241, 235, 0.6)`
  - `--border-subtle`: `rgba(201, 168, 76, 0.1)`
- [ ] **Typography**:
  - Import a premium Serif font (e.g., 'Playfair Display' or 'Georgia') for H1s.
  - Import a clean Sans-serif font (e.g., 'Inter' or 'Outfit') for body and other headings.
- [ ] **Utilities**: Add custom animation classes (fade-in, slide-up).

## 2. Navigation Component
- [ ] Implement sticky navigation.
- [ ] Left: Agency Logo (Text-based/Minimal).
- [ ] Right: CTA Button "Request Your Free Automation Audit" (matches hero CTA).
- [ ] Dynamic background: Transparent at top, solid dark (`#0A0A0A`) on scroll.

## 3. Hero Section (72px H1)
- [ ] **Content**: Focus on operational friction, manual work, and wasted time.
- [ ] **Headline**: Big 72px serif.
- [ ] **Subheadline**: Frame AI as a system.
- [ ] **CTA**: Single button in amber.
- [ ] **Note**: Small italic muted text: "No forms yet. Just a 15-minute conversation."
- [ ] **Visuals**: High-contrast, minimal, no hype imagery.

## 4. "Who It's For / Not For" Section
- [ ] Two-column layout.
- [ ] "For" column: Normal weight/opacity.
- [ ] "Not For" column: 70% opacity to de-emphasize.
- [ ] Centered bottom note in small italic: "Still unsure? The audit will tell you."

## 5. "How It Works" Section
- [ ] 4 Simple steps in plain language (Understand → Identify → Design → Decide).
- [ ] Avoid platform/tool names.
- [ ] Clean card-like layout with subtle borders.

## 6. Credibility Signals
- [ ] Stats row: `500+ Automations Built`, `15+ Years Combined`, `20+ Industries`.
- [ ] Human Quote: Short, centered, with attribution.
- [ ] Placeholder abstract logos for "Trust".

## 7. Audit Offer Details
- [ ] Detailed explanation of the Audit process.
- [ ] Emphasize "Value regardless of outcome".
- [ ] Bordered highlight box: "This audit is free because we'd rather give you clarity upfront..."

## 8. "What Happens Next" Section
- [ ] Timeline or list format.
- [ ] Steps: Intro Call → No Pitch → Recommendation → Your Decision.

## 9. Final CTA Section
- [ ] Full viewport height (`min-h-screen`), centered.
- [ ] Large H2/H3 headline: "Ready to see what's possible?"
- [ ] Single button: "Request Your Free Automation Audit".
- [ ] Limited availability note: "Spots are limited to 3 audits per month."

## 10. Polishing & Responsiveness
- [ ] Implement smooth scroll.
- [ ] Transitions on hover for the Amber CTA.
- [ ] Mobile-first responsiveness (checking layout on smaller screens).
- [ ] Audit for accessibility and typography hierarchy.

---

## Checklist for Progress Tracking

- [ ] Define CSS Theme & Variables
- [ ] Refactor Navigation
- [ ] Refactor Hero Section
- [ ] Implement Qualification (For/Not For)
- [ ] Implement Process (How It Works)
- [ ] Implement Credibility (Stats & Quote)
- [ ] Implement Audit Details & What Happens Next
- [ ] Implement Final CTA
- [ ] Polish Animations & Interaction
