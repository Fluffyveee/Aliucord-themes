/**
 * @name Burr Discord
 * @author Fluffyvee
 * @authorId 414994980428578837
 * @version 0.0.1
 * @description burrs discord atfer a set time
 * @website https://twitter.com/Fluffyveetoxel
 * @source https://github.com/Fluffyveee/DIscord-stuff
 * @updateUrl https://raw.githubusercontent.com/Fluffyveee/DIscord-stuff/main/desktop%20plugins/Burr_Discord.plugin.js
 */

module.exports = (_ => {
	const BdApi = window.BdApi;

	const config = {
		"info": {
			"name": "BDFDB",
			"author": "DevilBro",
			"version": "2.0.4",
			"description": "Required Library for DevilBro's Plugins"
		},
		"rawUrl": `https://mwittrien.github.io/BetterDiscordAddons/Library/0BDFDB.plugin.js`
	};

	html:not(.app-focused) {
	  transition: filter 400ms ease-in;
	  filter: blur(6px);
	}

	html.app-focused {
	  transition: 550ms ease-out;
	}

	html:not(.app-focused) #app-mount::after {
	  content: "";
	  z-index: 200;
	  position: fixed;
	  background: rgba(0,0,0,0.5);
	  width: 100%; height: 100%;
	}
