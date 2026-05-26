
Cyberpunk Retro-Pixel UI Aesthetic
The design should evoke a futuristic cyberpunk RPG interface with pixel-art style. This means using 8–16px bitmap graphics, neon glows, and CRT-like effects. As one expert notes, retro-gaming UIs use “pixel-perfect grid systems, CRT scanline effects, neon glow typography, and iconic RPG-style components” to create an authentic feel
. In practice, this translates to dark, layered panels with sharp pixel edges, glowing borders, subtle noise or scanlines, and tiny animated details (e.g. spark or ember particles) for atmosphere. The look is bold and moody yet readable: neon magenta, violet, cyan and green accents pop against a deep navy/black background
. Using pixel graphics or fonts as UI elements “gives so much character to the design – it’s unconventional, unique and fun”
. Altogether, the interface should feel like a high-tech RPG HUD – dense with information but clearly organized into distinct, glowing “cards” and panels in a game-like terminal style.

Color Palette and Effects
A near-black background (e.g. #070716 or dark navy) is key for a cyberpunk “night city” vibe. Experts advise avoiding pure black to reduce harsh contrast; instead use very dark grays/navy to make neon accents readable
. Accent colors should be vibrant but used sparingly so they don’t fatigue the eye
. In practice:

Background: Deep navy/near-black (#070716–#111528) for main surfaces.
Panels/Borders: Very dark indigo/blue-black (#0b0d1c–#111528) for cards, with thin neon-purple or magenta glow borders (#502459, #9c4fad) and subtle inner shadows.
Primary Neon Accent: Violet-magenta (#67349f–#9c4fad) for highlights, headers, selected states.
Secondary Accents: Hot pink (#e46aa6) for highlights like hearts, and cyan/steel blue (#328ada, #2a678d) for tech elements. Green (#2f875d, #68d98a) signals “active/online” status, and warm amber/orange (#e58b52, #9a6238) adds glow to things like lanterns or progress bars.
Text: Off-white with a slight lavender tint (#e7e0d8, #d7c9b1) for primary copy; muted gray-lavender (#665d9c, #55505a) for secondary labels or disabled text.
Using neon on dark is known to create “striking contrast” that feels immersive
. However, designers warn against “too many bright, saturated colors” in a dark theme – bright pops should highlight important items only
. In our UI, that means most of the real estate is dark; neon purple/pink should outline cards or indicate selected tabs, with other colors reserved for key stats (e.g. green “ACTIVE” status, amber level-up bars) so the overall look stays balanced. The dark theme should “exude sophistication and modernity”
, with neon accents providing visual hierarchy without overwhelming the user.

Typography: Pixel/Bitmap Fonts
All text should use a monospaced pixel or bitmap font to reinforce the retro terminal feel. For example, Google’s Press Start 2P (an 8-bit arcade-inspired font) or similar clean pixel fonts (Micro 5, Silkscreen, Pixelify, etc.) work well. These fonts look best at sizes that are multiples of 8px (e.g. 8px, 16px, 24px) so the pixels align sharply. We use an uppercase pixel face for headers and labels, with consistent letter-spacing for a bit of glow. Font sizes might be: ~24–30px for main headings, 18–22px for section titles, 12–14px for body text, and 9–11px for metadata. This ensures “headings… 24–30 px, uppercase, spaced, slightly glowing” and body copy “12–14 px, small case” as specified. Using pixel fonts “gives so much character to the design – it’s unconventional, unique and fun”
, tying into the overall game-like aesthetic.

The typographic hierarchy should be very clear: large all-caps titles (e.g. SYSTEM STATUS INTERFACE), medium-size section headers (e.g. “STATUS | Overview”), and small monospaced labels (e.g. NAME: UJWAL DEEP) in contrasting neon/off-white. This mimics an RPG terminal: think of classic games where all text looks like computer code. It also aligns with research on dark-UIs, which stresses readability via high contrast text on dark surfaces
. In sum, the font choice reinforces the retro-terminal vibe and makes each panel read clearly despite the high-density layout.

Layout and Grid
We use a fixed 1536×1024 (16:10) full-screen canvas split into three columns, plus a footer bar at the bottom. This three-column dashboard is a common pattern for complex UIs
 and is ideal for our info-rich portfolio. A recommended split is roughly 27–28% / 34–36% / 36–38% in width, which closely matches the spec. The CSS layout can be implemented with CSS Grid or Flexbox
. This ensures a full-width dashboard that gracefully places the side panels and main content. (On smaller screens, one would stack or adapt these columns, but at 1536×1024 we design for the full desktop view.)

Each column is filled with “cards” or panels: individual content boxes with thin 1–2px borders (often neon-glowing) and a bit of padding (~14–20px) inside. A card-based approach makes the dense information easier to scan and navigate. As one UX guide explains, presenting information in discrete cards lets users “easily scan and compare content”
. We ensure each card has a clear title, consistent padding, and slight rounded corners (6–10px) – still visibly pixelated but softer than sharp square corners. Thin horizontal divider lines between sections and subtle box-shadows or inner shadows add depth. There’s ample negative space around cards and text so the UI doesn’t feel cluttered; effective whitespace “helps separate and organize design elements” and makes a busy UI more legible
.

Left Sidebar (System Status & Navigation)
Width: ~27–28% of canvas. Dark, narrow column on left with stacked panels.

Top Title: Large all-caps text:

> UJWAL DEEP.EXE (in white/off-white with a hint of purple).
Below it, smaller line: SYSTEM STATUS INTERFACE (slightly dimmer off-white).
And v1.0.0 at bottom of header block.
This uses the pixel font, large size, perhaps with a faint purple glow.
Illustration Panel: A tall pixel-art scene (night city rooftop) inside a card. The sky is a purple/orange gradient, city silhouette in dark purples, with warm window lights. A small crescent moon and hanging lantern add story. At the bottom, the back-of-head of the avatar seated in an alley. This panel should look like a game “wallpaper” or wallpaper-in-UI. It’s decorative but reinforces mood. A very faint pixel noise overlay or scanlines (semi-transparent lines) can go over the illustration to unify it with the UI style. (Subtle scanlines are recommended for a CRT vibe
.)

Navigation Buttons: Below the image, a vertical stack of nav cards/buttons: STATUS, SKILLS, EXPERIENCE, WORK PROOF. Each has an icon on left and label text (e.g. STATUS with subtitle “Overview”). The selected state (e.g. STATUS) has a brighter purple border/glow, others are dim. Adding small chevron arrows on the right side of each row hints at drill-down or selection. These mimic classic game menus. No external reference needed, but consistency is key: same width, icons in same style (pixel icons), and text all-caps monospace.

System Info Card: A small dark panel labeled > SYSTEM TIME with “01:47 AM”, and > CONNECTION with “ONLINE” (green text and signal icon). This is like an old terminal status. Green (neon mint) text and icon signal good status. (This uses the same pixel font and maybe a subtle animated “pulse” effect on the signal icon to feel alive.)

Welcome Card: Another small card with a tiny pixel avatar on left and text:

vbnet
Copy
WELCOME BACK, UJWAL.
Let’s build something extraordinary today.
with a little pink heart icon at bottom right. Friendly message, fits portfolio persona. Card background dark, text off-white, avatar and heart add color.

System Log (footer of sidebar): A thin strip (like a ticker) at bottom:

pgsql
Copy
> SYSTEM LOG  Everything is a learning. Keep leveling up.
monospaced text in muted purple, maybe animating with a slight scroll or subtle glow. This completes the left panel – it reads like a retro terminal with a scenic panel.

Center Column (Player Profile & Objectives)
Width: ~34–36% – the largest column. Background layering can be a bit lighter dark (to distinguish from sidebars) or same dark.

Header: A small label at top:

nginx
Copy
STATUS | Overview
in medium pixel font. A thin underline or border below it separates from content.

Player Profile Card: The first big card, titled “PLAYER PROFILE”. Inside:

Avatar Portrait (left): A square pixel-art portrait (maybe 200x200px) of the character (young person with dark messy hair, hoodie, warm skin) – reminiscent of retro RPG portraits.
Meta Info (right): Four lines of metadata in two columns:
NAME : UJWAL DEEP
CLASS : SYSTEMS EXPLORER
FOCUS : QA • TECH • AI
STATUS : ACTIVE (with “ACTIVE” in neon green).
Labels (“NAME”, “CLASS”, etc.) are off-white, values tinted white/purple; status text is bright green to signal active.
Quote Box: Below meta, a smaller inset box with a quote in tiny white text:
“I kept asking why, and that’s still how I learn, test, and build better things.”
A small pink heart floats to the right of this quote.
This card uses thin purple border, dark interior, and subtle inner shadow to feel like a separate HUD element.

Active Objectives Card: Titled “ACTIVE OBJECTIVES”. Contains four bullet items (each with a right-pointing chevron or arrow bullet) such as “Expanding QA & Systems Analysis knowledge.” etc. Text is off-white. On the right side of this card, a decorative purple target/crosshair icon reinforces the “objectives” theme. (No external ref, but iconography and bullets mimic quest lists in games.)

System Attributes Card: Four horizontal stat bars with labels and values: CURIOSITY, ADAPTABILITY, PROBLEM SOLVING, SYSTEMS THINKING with numeric values (78–92). Each stat has a small icon, label (pixel font), value, and a colored progress bar. Bars use accent colors: purple (curiosity), cyan (adaptability), blue (problem solving), amber (systems thinking). This looks like an RPG “attributes” panel. Beneath the bars, show a small Level XP tracker: e.g.

Left box: LEVEL 05 (amber text)
Center progress bar (magenta) with label SYSTEM XP 1320 / 2500 XP
Right box: NEXT LEVEL 06.
This clearly shows the current level and XP progress.
Gamification Note: Using progress bars and levels taps into game psychology. Studies show that visible progress bars and levels (as in RPGs) significantly boost engagement – players feel satisfaction as numbers rise
. For example, games like Pokémon and Final Fantasy use XP bars that “often fuel desire to play” by giving a “satisfying sense of accomplishment as the numbers rose”
. Likewise, World of Warcraft’s large XP bar keeps users aware of goals and “fueled millions of gamers’ efforts” to complete quests
. By incorporating XP bars and leveling in the portfolio, the design borrows this motivating element: as the user sees progress toward “next level”, it encourages exploration of the site (or skills).

Work Proof Card (Locked): A large card under “Work Proof | Coming Soon”. On left, a pixel-art locked chest/crate icon. On right, text:

MODULE UNDER DEVELOPMENT (big heading)
“This section is under construction. Proof of work… coming soon.”
At bottom right: a progress indicator or “37%” (implying how far development is).
This card is intentionally greyed/locked-looking, with maybe a padlock icon, to show the section isn’t ready. (This provides humor and manages expectations.) The progress text (37%) reinforces the RPG theme of leveling up.
Right Sidebar (Skills & Experience)
Width: ~36–38%. Dark panel like left side, containing skill and experience lists.

Skills Section: Header:

objectivec
Copy
SKILLS | Abilities & Progress
with a “VIEW ALL” button on top-right. Below, a tab row: SERVICE (selected, purple highlight), TECH, AI (unselected). The selected tab has brighter text or underline.

Under the tab, four skill cards stacked vertically. Each card has:

An icon on the left (pixel-style icon representing the skill).
Title (e.g. “CUSTOMER OPERATIONS”) in all-caps pixel font.
Right side: LVL 05 and XP bar labeled (e.g. 850 / 1000 XP).
A small arrow/chevron on the far right to indicate it’s clickable/details.
Colors: The XP bar’s fill color matches the domain (purple for service skills, blue for tech, green for comms, orange for UX). Each card background is slightly lighter or has a thin border so they stand out as separate bars.
Finally in skills panel, a link-like text centered: > VIEW DETAILED SKILLS TREE (smaller, dimmer). This reinforces the RPG quest style, making skills feel like a talent tree link.

Experience Section (Quest Log): Below skills, a header:

mathematica
Copy
EXPERIENCE | Quest Log
with another VIEW ALL at top-right. Then a tab row: Service (selected), Tech, AI (same style as Skills).

Below, a vertical list of past jobs/experiences. Each entry is like a quest log item:

Item format: small icon or bullet, then two-column text: left column has Company Name (bold) and role (italic/subtitle), right column has year(s).
Examples from spec:
Amazon Dev Centre – Technical Support Associate – 2022–2024
24/7.ai – Customer Service Associate – 2021–2022, etc.
These should look like labeled bullet points or entries on parchment. Use off-white text; the right-aligned years can be in muted lavender to separate.
At the bottom: a link/button > VIEW FULL EXPERIENCE LOG. This reinforces the notion of a “quest journal” that has more entries when clicked.

Overall, the right column flows like an RPG achievement/quest log – tabbed views for categories, progress bars for skills, and a scrollable event log for experiences. The card layout and hierarchy (tabs, headings, links) are consistent with the rest of UI.

Footer Bar (Status/Music/Motto)
A thin full-width bar at bottom, slightly darker. It’s divided into three segments:

Left: SYSTEM LOG: Everything is a learning. Keep leveling up. (in small dim lavender text).
Center: NOW PLAYING: “Lo-Fi Night Drive” with a tiny equalizer animation icon. (This adds atmosphere, like a retro music player).
Right: MOTTO: Curiosity is the quest. Understanding is the reward. (italic or styled).
On the far right, a small pixel-art purple cat mascot. All text here is smaller, subtle color (muted lavender/gray).
This footer ties into the theme: like a game status bar or terminal prompt. It provides personality and a final flourish. (Although not explicitly cited, it follows the “terminal-like” style and reinforces branding.)

Icons and Fine Details
All icons (home, skills, experience, lock, heart, signal, etc.) should be pixel-art style and consistent. Each icon fits the retro theme (8–16px art). Use outlines in neon purple or white, and simple fill. For example, the navigation “home” icon might be a tiny pixel house, the lock is a padlock sprite, skills could use a headset, chat bubble, brain, target, etc. Small chevrons (►) on list items suggest clickability.

Selected elements (active tab, chosen nav item, hovered card) should glow brighter (magenta-purple). Unselected cards remain visible but darker. Thin purple/magenta outlines and subtle inner glows should accent each panel. For depth, each card can have a faint drop shadow or inner shadow (keeping with pixel precision) so layers stack visually. Divide sections with 1px lines where appropriate (e.g. under headers, between skill cards).

Finally, tiny animated touches reinforce the game motif: subtle glowing particle specks drifting, a low-opacity scanline overlay, maybe occasional pixel sparkles. These should be very faint so they don’t distract text, but they make the UI feel alive. All these details support an “atmospheric and memorable” interface
.

Design Rationale (Summary)
This design combines a cyberpunk color scheme with retro RPG UI patterns to create a unique portfolio dashboard. The heavily pixelated text and graphics tie back to classic video games
. Neon colors on dark backgrounds enhance hierarchy and mood
, but are used judiciously as UI guidelines recommend
. The three-column structure and card layouts ensure complex content (profile, skills, log) is organized and scannable
. Gamification elements like level meters and progress bars leverage proven engagement patterns
. In short, the result is a moody, information-rich HUD that feels like a polished game interface – a high-tech, pixel-art portfolio that truly looks futuristic and layered, yet remains clear and functional.

Sources: Design guidelines and inspiration were drawn from UX/UI and game design best practices, including retro pixel UI frameworks
, dark-mode contrast advice
, layout patterns
, and pixel-design showcases
, as cited above. These informed every aspect of the mockup.