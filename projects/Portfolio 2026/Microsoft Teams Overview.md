
Let me start with the overview page copy that ties them together, then revise each individual write-up.

---

**OVERVIEW PAGE**

**Microsoft Teams — In-Meeting Experiences**

As a Senior Designer on Microsoft Teams, I shipped high-stakes meeting features under tight deadlines and real technical constraints. Across Breakout Rooms, Meeting Notifications, and Together Mode, I consistently faced the same challenge: the ideal solution wasn't technically feasible, and the feature needed to ship now. My role was to find the pragmatic path — designing experiences that delivered full user value within the limits of the platform.

**Breakout Rooms** Designed the end-to-end experience for moving meeting participants into separate working sessions. Shipped within one quarter to close a competitive gap with Zoom during Teams' fastest growth period.

**Meeting Notifications Framework** Conducted a UX audit of 200+ in-meeting notifications, designed a scalable three-tier framework, and removed 104 redundant notifications — unblocking two leadership-priority features.

**Together Mode Assigned Seating** Inherited a stalled project, delivered a proposal in two weeks, and designed spatial seat assignment for Together Mode scenes. Drove 87% organizer retention and 450K power users within the first month.

---

Now the individual pages. I'll add a **Key Decisions** section to each one to hit Item 2 from the framework.

---

**BREAKOUT ROOMS — Individual Page**

**Role** Sole Senior Designer leading vision and end-to-end design for organizer and participant experiences, collaborating with Product Management and Engineering.

**Context** In early 2020, as the pandemic drove millions to remote work and learning, breakout rooms became one of the most requested features from customers. Teachers needed to split students into study groups. HR and corporate teams needed workgroup sessions for brainstorming and workshops. Zoom had it. We didn't. Leadership mandated we close this competitive gap — within one quarter.

**Challenge** Teams' backend couldn't create sub-meetings within a parent meeting, and the meeting canvas was non-interactive streaming video. My original vision was a spatial experience where organizers could see live feeds of each room on the canvas and drag-and-drop participants between them. The tech stack couldn't support it.

**Key Decisions** I killed the canvas-based vision for the MVP and designed a two-surface management model instead — choosing shippability over aspiration while preserving the vision as a northstar. I chose a modal for bulk participant assignment rather than inline editing, because organizers managing 30+ participants needed to work fast. I kept the participant experience passive — notification-based, no action required — to reduce friction in the classroom use case. I also navigated component approvals with the Framework design team in Seattle during a mid-cycle redesign, and partnered with a junior dev lead whose strengths were backend, adjusting how I communicated specs to protect frontend quality.

**Solution** A modal dialog lets organizers select participants from a list and bulk-assign them to rooms. A persistent side panel serves as a command center — showing room status, participant assignments, and a single "Open" button to launch all rooms simultaneously. Participants receive a notification and are moved into their rooms automatically.

**Outcome** I presented the long-term vision to Jeff Teper, Corporate Vice President of Office 365, establishing a northstar for the feature's evolution. We shipped the MVP within one quarter and achieved competitive parity with Zoom during Teams' fastest growth period — the platform scaled from 20M to 75M daily active users that year. The feature continued to evolve with simplified assignments, organizer announcements to rooms, and participant shuffling.

---

**MEETING NOTIFICATIONS FRAMEWORK — Individual Page**

**Role** Senior Designer leading UX audit, framework logic, visual design, and animation. Facilitated cross-team alignment through weekly design meetings and documentation.

**Context** Since its initial implementation in 2016, the in-meeting notifications framework had become a junk drawer. With 200+ notifications across feature teams and no governance or documentation, teams chose whichever notification type they wanted. Notifications overlapped, blocked the meeting canvas, stacked banners that shifted the video grid, and failed accessibility standards. The Raise Hand and Chat Bubbles features — both leadership priorities — were blocked from shipping.

**Challenge** This wasn't just a visual design problem. Every feature team had their own notification behaviors, and there was no shared logic or rules. Cutting notifications meant telling other product teams their work was getting removed, and there was no existing process for cross-team alignment on notification usage.

**Key Decisions** I chose to solve the system, not just the immediate blockers. Rather than patching Raise Hand and Chat Bubbles into the existing mess, I audited all 200+ notifications and designed a framework from scratch. I created a three-tier taxonomy — Permanent, Temporary, and Standalone — that gave every notification type a clear home and set of rules. I cut 104 notifications that were redundant or misclassified, navigating pushback by establishing a weekly open design meeting where affected teams could bring their needs and get guidance. I also created a handbook so the framework would outlast my involvement.

**Solution** Permanent notifications handle critical alerts and actionable items that stay on screen. Temporary notifications cover informational toasts and chat bubbles that appear and dismiss. Standalone notifications occupy fixed positions for persistent indicators like mute status. The taxonomy, documentation, and weekly governance meetings gave feature teams clarity on when and how to use each type.

**Outcome** Raise Hand and Chat Bubbles were unblocked and shipped within a quarter. Through our VIP pilot program, 100% of 49 customers completed critical tasks and signed off for feature release, with NSAT scores of 8.8 for participants and 9.3 for admins.

---

**TOGETHER MODE ASSIGNED SEATING — Individual Page**

**Role** Senior Designer, inherited the project mid-sprint after a designer departure. Responsible for delivering a proposal within two weeks and designing the end-to-end scene selection and seat assignment experience.

**Context** Together Mode — which places participants in a shared virtual scene like an auditorium or coffee shop — launched during the pandemic to reduce meeting fatigue. But it shipped as a bare-bones feature. Participants could only enable it individually, there was no way for organizers to turn it on for everyone, and there was no control over seating. Adoption was low and the feature wasn't discoverable.

**Challenge** Together Mode scenes are rendered as a single flat video feed — they can't be directly interacted with. The previous designer had explored spatial solutions on the canvas, but like Breakout Rooms, this wasn't technically feasible. I had two weeks to deliver a viable proposal.

**Key Decisions** I scrapped the previous spatial canvas exploration and designed a new concept: rendering the scene map inside a modal with clickable seat positions. This simulated spatial interaction within a technically constrained surface — organizers could see the scene, click a seat, and assign a participant contextually. I included auto-assign as the default path to reduce friction, with manual assignment as the power-user path for cases like seating leadership in front rows. I also shipped "Save layout for the meeting series" in the initial release rather than deferring it, because recurring meetings like weekly classes were a core use case that would drive retention.

**Solution** Organizers select a scene and set Together Mode as the default view for all participants. From within the assign seats modal, they see the scene rendered with clickable seat positions. Clicking a seat surfaces a contextual participant picker. Auto-assign fills empty seats automatically, and layouts can be saved for recurring meeting series.

**Outcome** After one month, organizers who set Together Mode as a default view represented 1.1% of MAU, with 87% continuing meetings in Together Mode for 30 minutes or longer. These organizers brought in 8.04% of MAU through their meeting participants. Out of 2.2M MAU, 450K became power users, using Together Mode three or more times per month.