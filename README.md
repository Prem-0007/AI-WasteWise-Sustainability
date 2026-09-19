# ♻️ AI WasteWise

## Smart Waste Segregation & Sustainability Assistant

AI WasteWise is an AI-powered web prototype that helps people identify everyday waste, understand how it should be disposed of, and discover simple actions that can reduce environmental impact.

Built as the final project for the **1M1B AI for Sustainability Virtual Internship**.

### 🔗 Project Links

* **Live Demo:** https://ai-waste-wise-sustainability-peach.vercel.app/
* **GitHub Repository:** [Add your GitHub repository link](https://github.com/Prem-0007/AI-WasteWise-Sustainability.git)

---

## 🌱 Overview

AI WasteWise allows users to describe a waste item in natural language, such as:

> "Used plastic water bottle"

The system analyzes the item and provides structured guidance including:

* Waste category
* Waste type
* Disposal guidance
* Recyclability
* Environmental impact
* Sustainability tip
* AI confidence
* Safety information when required

The application uses a **hybrid AI architecture**:

1. Optional live LLM-based analysis
2. Built-in knowledge engine for reliable demonstration without an API key

This allows the prototype to work even when a live AI provider is not configured.

---

## 🎯 Problem Statement

People often struggle to determine how everyday waste should be categorized and disposed of responsibly.

Incorrect waste segregation can contaminate recyclable materials, reduce recycling efficiency, and increase environmental impact.

AI WasteWise addresses this problem by providing simple, structured and accessible waste-disposal guidance from a natural-language description.

---

## 🌍 SDG Alignment

| SDG                                                 | Role      | Project Contribution                                                                                |
| --------------------------------------------------- | --------- | --------------------------------------------------------------------------------------------------- |
| **SDG 12 – Responsible Consumption and Production** | Primary   | Helps users understand waste categories and make more responsible disposal choices.                 |
| **SDG 11 – Sustainable Cities and Communities**     | Secondary | Encourages better everyday waste-segregation practices.                                             |
| **SDG 13 – Climate Action**                         | Secondary | Connects responsible waste practices such as recycling and composting with environmental awareness. |

> AI WasteWise is an independent student project inspired by the Sustainable Development Goals. It is not affiliated with or endorsed by the United Nations or any government organization.

---

## 🤖 AI Solution

The system follows a simple pipeline:

```text
User Waste Description
        ↓
AI / Knowledge Engine
        ↓
Waste Classification
        ↓
Structured Analysis
        ↓
Disposal Guidance
        ↓
Sustainability Recommendation
```

### Example

```text
Input:
Used plastic water bottle

Output:
Category: Recyclable
Waste Type: Plastic
Recyclability: High
Disposal: Empty, rinse and place with appropriate recyclable waste
Environmental Impact: Plastic pollution and landfill waste
Sustainability Tip: Reuse refillable bottles whenever possible
```

---

## 🧠 AI Elements

### 1. Natural Language Understanding

The optional live AI mode can interpret free-text descriptions of waste items.

For example:

```text
"old phone with damaged battery"
```

can be interpreted as an electronic/hazardous waste-related item.

### 2. Structured AI Output

The AI produces a consistent result structure:

```text
category
wasteType
disposal
recyclability
environmentalImpact
sustainabilityTip
confidence
safety
```

### 3. Hybrid AI Architecture

The application uses one analysis function:

```text
analyzeWaste(input)
```

It can operate in two modes:

```text
                 User Input
                     ↓
               analyzeWaste()
                ↙          ↘
       Live AI Mode      Built-in Engine
             ↓                  ↓
          LLM API          Knowledge Base
                ↘          ↙
                Final Result
```

### 4. Built-in Knowledge Engine

When no API key is configured, the application uses a curated knowledge base containing common waste types.

This allows the public prototype to operate without exposing an external AI API key.

### 5. Uncertainty Handling

Unknown or ambiguous waste items can be classified as:

```text
Needs Verification
```

instead of forcing the system to make an unsupported guess.

---

## ✨ Features

* ♻️ Natural-language waste analysis
* 🤖 Optional live AI / LLM integration
* 🧠 Built-in fallback knowledge engine
* 📊 AI confidence indicator
* ♻️ Recyclability indicator
* 🌱 Environmental impact explanation
* 💡 Sustainability recommendations
* ⚠️ Hazardous-waste safety warnings
* 🔍 Unknown-item verification
* 🧩 Example waste-item buttons
* 📱 Responsive desktop and mobile interface
* ♿ Keyboard-friendly interface
* 🎨 Modern sustainability-focused UI
* 🔐 No sign-up required
* 🚫 No personal information required
* 🌍 SDG-focused information sections
* 🛡️ Responsible AI guidance

---

## 🛠️ Technology Stack

* **React 18**
* **Vite 5**
* **JavaScript (ES Modules)**
* **CSS**
* **Lucide React**
* **OpenAI-compatible API** – optional live AI mode
* **Anthropic API** – optional alternative provider
* **Vercel** – deployment

---

## 🏗️ Project Architecture

```text
AI WasteWise
│
├── React Frontend
│
├── Waste Analyzer
│   └── analyzeWaste()
│
├── AI Layer
│   ├── OpenAI-compatible API
│   └── Anthropic API
│
├── Built-in Knowledge Engine
│   └── Common Waste Knowledge Base
│
├── Result Validation
│
└── Responsible AI Guidance
```

---

## 📁 Project Structure

```text
ai-wastewise/
│
├── index.html
├── package.json
├── vite.config.js
├── .env.example
│
├── public/
│   └── favicon.svg
│
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── index.css
    │
    ├── components/
    │   ├── Navbar.jsx
    │   ├── Hero.jsx
    │   ├── BinIllustration.jsx
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
    │
    ├── data/
    │   ├── wasteKnowledge.js
    │   ├── wasteCategories.js
    │   ├── examples.js
    │   └── siteContent.js
    │
    └── utils/
        ├── analyzeWaste.js
        ├── localAnalyzer.js
        ├── llmClient.js
        ├── finalizeResult.js
        ├── aiConfig.js
        ├── text.js
        └── scroll.js
```

---

## 🛡️ Responsible AI

AI WasteWise follows several responsible-AI principles.

### Advisory Guidance

The application provides suggestions and does not replace official waste-management guidance.

### Local Rules Come First

Waste-management rules can differ by location. Users should follow their local municipality or authorized waste-management instructions.

### Privacy

The prototype does not require personal information or user accounts.

### Uncertainty

When the system cannot confidently identify an item, it can mark the result for verification instead of presenting an unsupported classification.

### Hazardous Waste

Items such as batteries, medicines, chemicals and sharp materials receive additional safety guidance.

---

## 📈 Expected Impact

These are **expected outcomes of the concept and are not measured results**.

### Better Waste Segregation

Helps users understand different waste categories.

### Environmental Awareness

Makes sustainability information easier to understand.

### Cleaner Communities

Encourages responsible everyday disposal practices.

### Accessible Sustainability Education

Provides simple sustainability guidance through an easy-to-use interface.

> No usage statistics, environmental savings or measured impact are claimed for this prototype.

---

## 🚀 Future Scope

Possible future improvements include:

* 📷 Image-based waste recognition using a phone camera
* 📍 Region-specific waste-management guidance
* 🗺️ Local recycling and waste-drop locations
* 🌐 Multi-language support
* 🎤 Voice-based waste input
* 🔐 Secure backend/serverless AI proxy
* 📊 User feedback system
* 🧠 Improved waste classification knowledge base
* 🏙️ Integration with municipal waste-management systems

---

## 💻 How to Run Locally

### Requirements

* Node.js 18+
* npm

### Installation

```bash
npm install
```

### Start Development Server

```bash
npm run dev
```

Open the local URL shown in the terminal.

Usually:

```text
http://localhost:5173
```

### Production Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

---

## 🤖 Optional Live AI Configuration

The application can optionally connect to a live AI provider.

Create a local `.env` file based on `.env.example`:

```env
VITE_AI_API_KEY=your_api_key
VITE_AI_PROVIDER=openai
VITE_AI_MODEL=gpt-4o-mini
VITE_AI_BASE_URL=
```

The application can also support an Anthropic provider through the configured AI layer.

### Important Security Note

`VITE_*` variables are exposed to the browser in a Vite frontend build.

Therefore, a real production application should use a backend or serverless proxy to protect AI provider credentials.

The public prototype can operate using the built-in knowledge engine without requiring an exposed API key.

---

## 🧪 Example Inputs

Try the following examples in the analyzer:

```text
Used plastic water bottle
Banana peel
Old battery
Old mobile phone
Cardboard box
Glass bottle
Broken glass
Used cooking oil
```

You can also test an unknown item:

```text
flibbertigibbet
```

The system should avoid making an unsupported classification and indicate that verification is needed.

---

## 📸 Prototype

The deployed prototype demonstrates:

* Landing page
* Waste analyzer
* AI analysis result
* Recyclability information
* Environmental impact
* Sustainability recommendations
* Safety guidance
* SDG alignment
* Responsible AI principles
* Expected impact

### Live Prototype

**AI WasteWise:**
https://ai-waste-wise-sustainability-peach.vercel.app/

---

## 🎥 Demo

### Video Walkthrough

Add your final demo video link here.

### Suggested Demo Flow

1. Open AI WasteWise.
2. Navigate to the analyzer.
3. Enter `Used plastic water bottle`.
4. Click **Analyze with AI**.
5. Show the classification and confidence.
6. Show recyclability and environmental impact.
7. Show the sustainability recommendation.
8. Test `Old battery` to demonstrate safety guidance.
9. Show the SDG and Responsible AI sections.

---

## 📜 License

This project is currently an educational/student prototype developed for the **1M1B AI for Sustainability Virtual Internship**.

---

## 👨‍💻 Project

**AI WasteWise – Smart Waste Segregation & Sustainability Assistant**

Developed as a sustainability-focused AI prototype combining waste classification, structured guidance, responsible AI principles and SDG alignment.
