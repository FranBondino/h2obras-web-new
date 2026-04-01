# Design System Document: Industrial-Premium Institutional Framework

## 1. Overview & Creative North Star: "The Sovereign Infrastructure"
This design system is engineered for **H2O OBRAS**, moving away from standard corporate templates toward an aesthetic of "Federal Scale." The Creative North Star is **The Sovereign Infrastructure**: a visual language that communicates absolute autonomy, technical rigor, and high-complexity engineering.

To achieve this, the system rejects "web-standard" fluff in favor of **Industrial Precision**. We break the grid using intentional asymmetry—think of a blueprint where technical data and structural elements overlap with surgical intent. We move beyond flat UI by treating the screen as a series of heavy, machined plates and high-tech glass overlays.

## 2. Colors & Surface Architecture
The palette is rooted in the "Industrial-Tech" ethos, utilizing deep atmospheric blues and cold technical greys to evoke large-scale hydraulic and civil engineering.

### The Palette (Material Design Convention)
*   **Primary (The Core):** `#00162a` (Primary) & `#0d2b45` (Primary Container). These represent deep-water depth and structural steel.
*   **Neutral (The Technical):** `#5b5f61` (Secondary) & `#f8f9fa` (Surface). These provide the "Clean White" institutional feel.
*   **Tertiary (The Industrial Accent):** `#221100` transitioning to `#ffddba`. Use sparingly for high-precision highlights or technical warnings.

### The "No-Line" Rule
**Explicit Instruction:** Do not use 1px solid borders to define sections. In an industrial-premium environment, boundaries are defined by mass and material. 
*   **Implementation:** Transition from a `surface` background to a `surface-container-low` section to define a new content area. Let the change in tonal value do the work.

### Glass & Signature Textures
*   **Machined Glass:** Use `surface-container-lowest` with a `backdrop-filter: blur(12px)` and 80% opacity for floating navigation or technical overlays.
*   **Technical Gradients:** For Hero backgrounds and CTAs, use a subtle linear gradient from `primary` (#00162a) to `primary-container` (#0d2b45) at a 135-degree angle. This creates a "brushed metal" depth that flat hex codes cannot achieve.

## 3. Typography: Precise Editorial
The type system pairs **Space Grotesk** (Display/Headline) for a high-tech, engineered feel with **Inter** (Body/Labels) for maximum legibility in complex data environments.

*   **Display (Scale: 3.5rem - 2.25rem):** Use `display-lg` for federal-scale statements. Letter spacing should be set to `-0.02em` to feel "compressed and heavy."
*   **Headlines (Scale: 2rem - 1.5rem):** `headline-md` serves as the primary technical marker. Use "All Caps" for sub-headlines to mimic industrial labeling.
*   **Body (Scale: 1rem - 0.75rem):** `body-lg` is the workhorse. Maintain a line height of `1.6` to allow technical descriptions breathing room amidst high-complexity layouts.
*   **Labels (Scale: 0.75rem - 0.6875rem):** Use for technical specs and data points. Pair with `primary-fixed` backgrounds for a "tag" effect.

## 4. Elevation & Depth: Tonal Layering
We do not use "shadows" in the traditional sense; we use **Tonal Stacking**.

*   **The Layering Principle:** Treat the UI as a series of nested plates. 
    *   Base: `surface`
    *   Sub-section: `surface-container-low`
    *   Interactive Card: `surface-container-lowest` (This creates a "lift" through brightness rather than shadow).
*   **Ambient Shadows:** If an element must float (e.g., a critical modal), use a shadow with a 40px blur, 4% opacity, tinted with the `on-surface` color.
*   **The Ghost Border:** For input fields or cards where separation is strictly required for accessibility, use `outline-variant` at **15% opacity**. It should be felt, not seen.

## 5. Components: Engineered Primitives

### Buttons (The Actuators)
*   **Primary:** Solid `primary-container`. Sharp corners (`rounded-sm`: 0.125rem) to maintain the industrial "hard" edge. No gradients on buttons—they should feel like solid physical switches.
*   **Secondary:** `outline-variant` (Ghost Border) with `on-surface` text. 
*   **Hover State:** Shift background to `on-primary-fixed-variant` with a swift 150ms transition.

### Cards & Data Modules
*   **Forbid Divider Lines:** Use `spacing-8` (2rem) of vertical whitespace or a subtle shift to `surface-container-high` to separate content. 
*   **Structure:** Incorporate "Technical Metadata" (labels in `label-sm`) in the top right corner of cards to reinforce the "Federal Scale" data-driven look.

### Input Fields
*   **Styling:** Rectangular, `surface-container-highest` background. No bottom border. Focus state uses a 2px `primary` left-hand accent bar rather than a full outline.

### Signature Component: The "Gear-Drop" Progress Indicator
*   Use a custom SVG loader that subtly integrates the gear/drop branding, using `surface-tint` for the motion elements.

## 6. Do's and Don'ts

### Do:
*   **Use Asymmetric Grids:** Align large text to the left while keeping technical data justified to the right.
*   **Embrace Negative Space:** Use `spacing-20` (5rem) between major sections to convey "Federal Scale" and importance.
*   **Layer Text over Textures:** Place `display-lg` typography partially overlapping high-tech industrial photography (low contrast).

### Don't:
*   **Don't use Rounded Corners:** Avoid `xl` or `full` roundedness. This is industrial, not "consumer social." Stick to `sm` (0.125rem) or `none`.
*   **Don't use Generic Blue:** Avoid standard #0000FF. Only use the specified deep-ocean `primary` and technical `secondary` greys.
*   **Don't use Icons-only:** Every icon should be accompanied by a `label-md` technical description. Precision is mandatory.

### Accessibility Note:
Maintain a minimum contrast ratio of 4.5:1 for all technical data. While we use "Ghost Borders," the contrast between `surface` and `on-surface` text must remain absolute for federal-grade readability.