---
title: "Learning AngelScript"
date: "2025-10-14"
tags: "software"
---

A couple of years ago, I started playing [Trackmania](https://www.trackmania.com/?lang=en). It might be best described as an arcade racing game with a strong esports scene. The game itself is kinda beside the point of this post, but what you need to know is that many people care a whole lot about this game.

After the game released, some of these very invested and very smart people developed [Openplanet](https://github.com/openplanet-nl), a community-made scripting/plugin platform for Trackmania. It's become so successful that its a _de facto_ requirement to play the game seriously, and it's written into the official esports rulebook with a specified list of allowed plugins (see the "Authorized software and plug-ins" section [in the TMWT rulebook](https://lab.toornament.com/trackmania/tmwt25-official-rulebook.pdf) if you're curious).

As somebody who's spent a few hundred hours in game, I naturally began to learn about OpenPlanet and its rich plugin ecosystem. And as a software engineer, I also have the chance to contribute to this ecosystem.

## MapRank

One of the plugins I use to check my progress when learning a new map is called [MapRank](https://openplanet.dev/plugin/maprank), a simple little tool for displaying your approximate rank and percentile on that map.

![screenshot](/static/angelscript/maprank_display.jpg)
_This is what MapRank looks like in game_

It's pretty nifty, and I appreciate its simplicity. However, the plugin as I installed it could only ever be displayed at all times or turned off completely. Many other plugins have a setting that allows them to toggle on and off with the OpenPlanet overlay, which I find pretty convenient. Surely that's something I could implement?

With that goal in mind, I began [reading documentation](https://openplanet.dev/docs/getting-started) and searching through the [MapRank codebase](https://codeberg.org/mWalrus/MapRank).

## Working with OpenPlanet

Openplanet is built using [AngelScript](https://www.angelcode.com/angelscript/), an open source scripting language that's somewhat commonly used in game development. I had never heard of AngelScript before working with OpenPlanet, but thankfully the OpenPlanet devs have published a great [tutorial about plugin development](https://openplanet.dev/docs/getting-started).

With this documentation as my guide, I began work. This is the gist of what I've learned about this tiny slice of AngelScript development:

### Rendering the UI

I've alluded to it earlier in this post, but OpenPlanet is an entirely separate program from Trackmania. When it's installed, it launches at the same time the game is started. It works in the background, and users interact with it through a toggle-able overlay that renders in the game window.

[OpenPlanet exposes many hooks](https://openplanet.dev/docs/reference/plugin-callbacks) that are triggered for each plugin when a certain condition is met. Here are a couple examples:

```js
//! example.as

/*
* Render is called on every frame.
*/
void Render() { }

/*
* OnEnabled is called once when a plugin is enabled.
*/
void OnEnabled() { }

/*
* OnKeyPress is called each time a key iis pressed.
*/
void OnKeyPress() { }
```

Plugins just need to provide implementations for the callbacks that they'd like to use, and OpenPlanet handles the rest.

For MapRank, the only functions that affect the change I wanted to make are `Render()` and `RenderMenu()`. `Render()` is called on every frame. `RenderMenu()` is called on every frame the OpenPlanet UI is being displayed.

The change for this was actually pretty simple:

```js
/*
* true if the display should render this frame. false otherwise.
*/
bool should_render() {
	// can't render if the plugin hasn't been started
	if (map_rank is null) return false;
	
	// we shouldn't render if the "display with overlay" toggle is on AND the 
	// overlay ISN'T shown.
	// 
	// This is a bit of double-negative logic that I'm honestly regretting on a 
	// reread, but if the overlay IS shown, we should always render. Otherwise, we
	// should only render when the setting is toggled off.
	if (setting_display_with_openplanet and not UI::IsOverlayShown()) return false;

	return true;
} 
```


All in all, this is a super simple change. If you're curious about more specifics, you can check out the PR I submitted ([MapRank #1](https://codeberg.org/mWalrus/MapRank/pulls/1)).


### Consolidating plugin settings

One small inconsistency that I also wanted to change about this plugin was that the plugin settings were rendered in the toolbar (i.e. the MacOS-esque row of menus visible at the top of the overlay when it's toggled on) as opposed to the dedicated Settings window. [OpenPlanet renders a special Settings window](https://openplanet.dev/docs/reference/settings) that automatically renders a tab for each plugin that contains a `settings.as` file. Most plugins use this Settings window as opposed to the toolbar menu to avoid extra clutter (and for ease of use).

In terms of actual code changes, this is also relatively simple: 
1. We need to remove the `RenderMenu()` implementation, as the plugin's settings should never be rendered in the toolbar/menu. 
2. We need to move previously implemented settings to the `settings.as` and update references accordingly.

The resulting `settings.as` is pretty straightforward:

```js
//! settings.as

// "category" sets the name of the sub-tab this is rendered in.
// If it's not set, the default tab name is "Uncategorized".
[Setting category="General" name="Enable plugin"]
bool setting_show_plugin = true;

// "if" means this setting will only appear if "Enable plugin" is checked.
[Setting category="General" if="setting_show_plugin" name="Show only when the OpenPlanet menu is open"]
bool setting_display_with_openplanet = false;

[Setting category="General" if="setting_show_plugin" name="Show time lookup"]
bool setting_show_time_lookup = false;
```

Thankfully, OpenPlanet handles state for all of these settings, so it really is as simple as defining these `bool`s with default values and then referencing them elsewhere in the code.

Again, if you want to see the actual implementation, check out the PR ([MapRank #9](https://codeberg.org/mWalrus/MapRank/pulls/9)).

## Conclusions

Open source doesn't have to be big and scary. Sometimes it's small and simple.

Languages are tools. You don't need to commit to becoming an expert in a programming language if you want to use it.

If you're curious about MapRank, [check out the repo on Codeberg](https://codeberg.org/mWalrus/MapRank)!

This post also encouraged me to setup syntax highlighting for code blocks and image embeds for markdown files which is a nice plus. Maybe I'll make another post about implementing that, but don't count on it.

~

Thanks for reading!