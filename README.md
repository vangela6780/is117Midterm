# Thread & Trace: The Upcycling Revolution

Thread & Trace is a Bauhaus-inspired digital museum built for an IS117 midterm project. The site reframes fast fashion waste as a creative and cultural problem, then guides the visitor through a structured exhibit journey from environmental shock to artistic action.

## Mission

- Transform the perception of waste into wealth.
- Highlight the environmental cost of fast fashion.
- Position upcycling as a creative practice with cultural value.

## Target Audience

- Gen-Z and Millennial consumers.
- Environmental advocates.
- DIY makers and upcycling creators.

## Design Framework

- Design style: Bauhaus.
- Cialdini principle: Social Proof.
- Brand archetype: The Creator.

### Bauhaus execution

- Grid-first composition.
- Earthy tones mixed with industrial grays.
- Bold sans-serif typography using Archivo and Jost.
- Functional data blocks and hard-edged content panels.

### Social Proof execution

- Community impact counter based on pledges to buy used, repair, or upcycle.
- Community statement wall to show collective participation.

### Creator archetype tone

- Inspiring, resourceful, visionary, and non-judgmental.
- Vocabulary centered on reclaiming, stitching, narrative, uniqueness, and legacy.

## Exhibition Narrative Flow

1. The Entry: The Atacama Graveyard.
2. The Shift: The water cost of denim.
3. The Gallery: Clothing as History.
4. The Workshop: Practical upcycling actions.

## Spec → Sprint → QA Workflow

This project was intentionally developed using an agentic workflow modeled on a spec-first orchestration process.

### Step 1: Spec

Before writing code, the project established a design system based on Bauhaus visual logic and Cialdini's Social Proof principle. That design system set the rules for layout, tone, palette, component scope, and narrative order so the build stayed aligned with the museum concept.

Reference document: [docs/design-system.md](docs/design-system.md)

### Step 2: Sprint Orchestration

The build was divided into focused sprints rather than being generated as one undifferentiated page.

- Sprint A: Atacama landing hero and primary narrative framing.
- Sprint B: Met-inspired artifact gallery and provenance cards.
- Sprint C: Community impact counter, statement wall, and workshop actions.

Reference document: [docs/sprints.md](docs/sprints.md)

### Step 3: Curator Review

After the main components were assembled, the site was reviewed with a curator lens:

- Does the educational value remain clear?
- Does the visual system feel coherent and intentional?
- Does the tone sound like a creator-led museum, not a retail storefront?

This review informed the final CSS direction, especially the use of visible grids, exhibit-style labels, provenance language, and stronger contrast between the Atacama problem space and the vibrant gallery space.

## Tech Stack

- Next.js App Router
- TypeScript
- Tailwind CSS

## Project Structure

```text
app/
  globals.css
  layout.tsx
  page.tsx
components/
  ArtifactGallery.tsx
  CommunityImpact.tsx
  CostShift.tsx
  HeroEntry.tsx
  SectionFrame.tsx
  WorkshopAction.tsx
data/
  exhibits.ts
docs/
  design-system.md
  sprints.md
```

## Running the Project

```bash
npm install
npm run dev
```

Then open `http://localhost:3000`.

## Presentation Notes

- Problem reference: Atacama Desert clothing dumping grounds.
- Quality reference: The Met Costume Institute.
- Persuasion bridge: Social Proof through the community pledge and impact counter.

## Professional Commit Message Suggestions

- `feat: build Thread & Trace midterm museum experience`
- `docs: add spec-driven orchestration and sprint narrative`
- `style: refine Bauhaus exhibit system for curator review`