# ♻️ AI WasteWise

**Smart Waste Segregation & Sustainability Assistant**

An AI-powered web prototype that helps people identify everyday waste, dispose of it responsibly, and discover simple actions that reduce environmental impact. Built as the final project for the **1M1B AI for Sustainability Virtual Internship**.

- **Live demo:** `<ADD YOUR DEPLOYMENT LINK HERE>`
- **Demo video:** `<ADD YOUR VIDEO LINK HERE>`
- **GitHub repository:** `<ADD YOUR GITHUB REPO LINK HERE>`

---

## Overview

Type or tap a waste item, for example *"Used plastic water bottle"*, and AI WasteWise returns a structured analysis: category, waste type, disposal guidance, recyclability, environmental impact, a sustainability tip, an AI confidence score and a safety note when needed.

The app is a front-end-only React prototype. It works out of the box with a built-in knowledge engine, and can optionally call a live large language model when an API key is provided.

## Problem Statement

People often struggle to work out how everyday waste should be categorized and disposed of. Incorrect segregation reduces recycling efficiency, contaminates recyclable material and increases environmental impact.

## SDG Alignment

| Goal | Role | How the project relates |
| --- | --- | --- |
| **SDG 12** – Responsible Consumption and Production | Primary | Helps people sort waste correctly so materials can be recycled, composted or reused. |
| **SDG 11** – Sustainable Cities and Communities | Secondary | Supports cleaner neighbourhoods through better everyday segregation habits. |
| **SDG 13** – Climate Action | Secondary | Highlights how waste choices (composting, recycling) relate to greenhouse gas emissions. |

> AI WasteWise is an independent student project inspired by the Sustainable Development Goals. It is not affiliated with, or endorsed by, the United Nations or any government organization.

## Solution

1. **Describe** – the user enters a waste item in plain language.
2. **Analyze** – the AI layer identifies the likely category and matching disposal guidance.
3. **Act** – the user follows clear disposal steps, safety notes and sustainability tips.

## AI Elements

- **Natural-language understanding** of free-text waste descriptions (LLM mode).
- **Structured output**: every result has the same fields (`category`, `wasteType`, `disposal`, `recyclability`, `environmentalImpact`, `sustainabilityTip`, `confidence`, `safety`).
- **Hybrid design** behind one function, `analyzeWaste(input)`:
  - **Live AI mode** – if `VITE_AI_API_KEY` is set, an LLM classifies the item and its JSON output is validated before display.
  - **Built-in knowledge engine** – with no key (or if the API call fails), a curated knowledge base of 18 common waste types answers instantly using phrase scoring, safety-first tie-breaking and ambiguity detection.
- **Honest uncertainty** – unknown or ambiguous inputs return **"Needs Verification"** with a low confidence score instead of a guess.

## Features

- Polished, responsive landing page (desktop, tablet, mobile) with a mobile navigation menu
- Analyzer with example chips, an animated loading state and a result dashboard
- Visual recyclability meter and AI confidence ring
- Warning-style safety banners for hazardous items (batteries, chemicals, medicines, broken glass)
- "Try These Examples" cards that fill and run the analyzer
- **Responsible AI** section, SDG alignment section and clearly labelled *Expected Impact*
- Keyboard-friendly, visible focus states, reduced-motion support, skip link
- No sign-up, no database, no personal data

## Technology Stack

- [React 18](https://react.dev/) + [Vite 5](https://vitejs.dev/)
- JavaScript (ES modules) and modern CSS (custom properties, grid, flexbox)
- [Lucide React](https://lucide.dev/) icons
- Optional: any OpenAI-compatible API or the Anthropic API for live AI mode

## Responsible AI

- AI recommendations are **advisory**.
- **Local waste-management rules always take priority.**
- The system **does not require personal information**.
- Uncertain classifications are labelled and should be **verified**.
- **Hazardous waste** should be handled according to official guidance; hazardous items show a prominent warning.

## Expected Impact

These are *expected outcomes of the concept*, not measured results. No usage statistics are claimed.

- **Better segregation** – helps users understand waste categories.
- **Environmental awareness** – makes sustainability information easier to understand.
- **Cleaner communities** – encourages responsible disposal practices.
- **Accessible education** – provides simple sustainability guidance to everyday users.

## Future Scope

- Image-based waste recognition using the phone camera
- Region-specific guidance (city or municipality rules) and local drop-off locations
- Multi-language support, including regional languages
- Voice input for accessibility
- A lightweight backend proxy so API keys stay off the client
- Feedback loop to improve classifications and the knowledge base

## How to Run

Requirements: **Node.js 18+**.

```bash
npm install
npm run dev
```

Then open the local URL printed in the terminal (usually `http://localhost:5173`).

Production build:

```bash
npm run build
npm run preview
```

### Optional: enable live AI

1. Copy `.env.example` to `.env`.
2. Set `VITE_AI_API_KEY` (and optionally `VITE_AI_PROVIDER`, `VITE_AI_MODEL`, `VITE_AI_BASE_URL`).
3. Restart `npm run dev`.

Without a key the app still works using the built-in engine. Each result shows which engine produced it.

> **Security note:** `VITE_*` variables are bundled into the browser build, so anyone can read the key. That is acceptable for a private demo; for a public deployment, send requests through your own backend or serverless proxy.

## Project Structure

```text
ai-wastewise/
├── index.html
├── package.json
├── vite.config.js
├── .env.example
├── public/
│   └── favicon.svg
└── src/
    ├── main.jsx                 # entry point
    ├── App.jsx                  # page composition + analyzer state
    ├── index.css                # design tokens + all styles
    ├── components/
    │   ├── Navbar.jsx
    │   ├── Hero.jsx
    │   ├── BinIllustration.jsx  # CSS/icon hero illustration
    │   ├── Analyzer.jsx
    │   ├── LoadingState.jsx
    │   ├── ResultPanel.jsx
    │   ├── HowItWorks.jsx
    │   ├── ExamplesSection.jsx
    │   ├── SdgSection.jsx
    │   ├── ImpactSection.jsx
    │   ├── AboutAI.jsx
    │   ├── ResponsibleAI.jsx
    │   ├── SectionHeading.jsx
    │   ├── Footer.jsx
    │   └── categoryIcons.js
    ├── data/
    │   ├── wasteKnowledge.js    # built-in knowledge base
    │   ├── wasteCategories.js   # category metadata
    │   ├── examples.js
    │   └── siteContent.js
    └── utils/
        ├── analyzeWaste.js      # analyzeWaste(input): LLM or fallback
        ├── localAnalyzer.js     # built-in engine
        ├── llmClient.js         # OpenAI-compatible + Anthropic calls, output validation
        ├── finalizeResult.js    # one result shape for both engines
        ├── aiConfig.js          # reads VITE_* variables
        ├── text.js
        └── scroll.js
```

## Demo

- **Video walkthrough:** `<ADD YOUR VIDEO LINK HERE>`
- **Screenshots:** `<ADD SCREENSHOTS TO /docs AND LINK THEM HERE>`

Suggested inputs to try: `Used plastic water bottle`, `Banana peel`, `Old battery`, `Old mobile phone`, `Broken glass`, `Used cooking oil`, and an unknown item such as `flibbertigibbet` to see the "Needs Verification" response.

## License

`<ADD YOUR LICENSE, e.g. MIT>`
