---
title: Noita Spells as 7tv Emotes v2
date: 1999-12-06T01:32:03+02:00
draft: false
type: docs
---

## Add every single Noita spell as a 7tv emote to your chat — in 2 clicks

![](/images/chatcard.webp)

{{< callout type="info" >}}
You are adding emotes to **your** channel (and removing them from your channel too, for that matter),
you don't need to go to WUOTE's profile on 7tv.
{{< /callout >}}

Wand building is an integral part of Noita gameplay.
There are more than [400 spells](https://7tv.app/emote-sets/64c6b5b7d5a34030d08eb201) in the game,
and wand building can be a challenging task.
Lucky for us, there are many skillful wand builders on twitch who can help you.

To easily see what they're suggesting and in order to make their life easier,
consider using the emote set I've created with help from awesome members from the community.
The emotes work great in combo with the [Streamer Wands](https://runfast.stream/streamerwandsmanual) mod.

You can now quickly add (or remove for that matter) all the spells as emotes by using a bot 7tv editor.
The curated and always up-to-date emote set will update automatically if the game's developers add a new spell.

The bot *will* add all the spells to all accounts it's an editor for when the game updates,
so if you removed them you'd also want to remove the bot from editors.

Here's how it works:

{{% steps %}}

### Add the bot as editor on 7tv

The bot is [Typing_bot](https://7tv.app/users/01H6M38F4R000DB8T06388XCF4)

TODO: screenshots here etc etc

### Add or Remove Noita 7tv Emotes

They will ask you to authorize with Twitch, which is a secure way for us to get your Twitch ID while
simultaneously proving that you are the owner of your account.

<button id="add_emotes" class="spells-button">
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg>
Add Noita Spells
</button>
<button id="remove_emotes" class="spells-button">
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15 12H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg>
Remove Noita Spells
</button>
<span id="response" style="display:none"></span>

### That's it!
Due to 7tv ratelimiting, you'll see chunks of 100 emotes being added every
minute over the next 5 minutes, maybe more if you happen to do this at the same
time as someone else.

You can click the button again if you think it was stuck or didn't happen, it
will report the current progress if there is any or try again.

We do not store any login data and don't use cookies, so the buttons will ask
you for Twitch login every time - it was way simpler for us to code.

Usually after the first one the popup just immediately closes as we don't ask
for any permissions anyway and all Twitch does is verify that you're you.

{{% /steps %}}

<script defer src="/twitch/emotes.js" />
