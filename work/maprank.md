---
title: "MapRank: contributing to a Trackmania plugin"
org: "Open source"
period: "2025"
summary: "Added a display option to MapRank, an Openplanet plugin for Trackmania, in AngelScript, a language I'd never used before."
stack: ["AngelScript", "Openplanet"]
order: 7
links:
  - label: "Merged PR (MapRank #1)"
    href: "https://codeberg.org/mWalrus/MapRank/pulls/1"
  - label: "MapRank on Codeberg"
    href: "https://codeberg.org/mWalrus/MapRank"
---

[MapRank](https://openplanet.dev/plugin/maprank) is an [Openplanet](https://openplanet.dev) plugin for Trackmania that shows your approximate rank and percentile on the map you're playing. It could only be shown all the time or turned off completely, so I added a setting to show it only while the Openplanet overlay is open, which is how a lot of other plugins behave.

I'd never written AngelScript before, so most of the work was getting oriented: reading Openplanet's plugin docs and the existing MapRank code until I understood which callbacks controlled rendering. The change itself ended up being small, and it was merged upstream. I also opened a follow-up PR to move the plugin's settings out of the toolbar menu and into Openplanet's dedicated Settings window.

I wrote about the whole process in [Learning AngelScript](/blog/angelscript).
