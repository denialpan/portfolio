---
title: "Abusing Counter-Strike 2's subtick system with desubticking"
date: "10/09/2025"
description: 'Short objective overview of Valve''s new subtick system and the 2 month rollercoaster timeline on 2024 "64-fps" movement exploit.'
status: "current"
---

# Preface

In all iterations of Valve games before Counter-Strike 2, a game's environment is dictated by a constant tick system, making player physics and interactions consistent, as player input and physics are all calculated at the same tick. In essence, for a majority of Valve games during Source 1, their games run off of a deterministic 3D simulation and is comparable to as being deterministic as a game of chess.

In Counter-Strike: Global Offensive, players have long been utilizing this quirk through using `cl_showpos 1` to creating extremely precise setups to throw utility across maps in hard to reach spots or to "pixel-walk" alongside smooth walls and access areas of the map not usually possible to find naturally in normal play.

<figure>

<iframe width="560" height="315" src="https://www.youtube.com/embed/TU6vHNIkBOo?si=v3dUwgL5a3VlN6GF" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
<figcaption><i>demonstrating determinism by balancing a weapon upright with specific set position and view angle </i></figcaption>

</figure>

On the March 2023 announcement of Counter-Strike 2 and the game's major changes from its predecessor, one of changes introduced was of a "subtick" system, defined as a way to detect game events without the need of a tick system. The goal for sure was to increase player response time to the server, however, a question that came about was player movement and its effect on time related interactions, instead of static "who shot their weapon first". As per Valve's announcement video, there is a worrying quote:

> In previous versions of Counter-Strike, the game only evaluated moving and shooting in discrete time intervals or tick, And <b>time between those ticks didn't exist </b> ... Now, the tick rate no longer matters for <b>moving</b> and shooting, so the server will know the exact moment you fired your shot, jumped your jump, or peeked your peek. <br /> - <i><a href="https://www.youtube.com/watch?v=GqhhFl5zgA0" target="_blank" rel="noopener noreferrer"> Counter-Strike 2: Moving Beyond Tick Rate</a>, Valve (March 22, 2023)</i>

One of the game's most popular mechanics has historically relies on the principle of jumping on the exact server tick that a player lands on a surface to ignore friction applied to horizontal and accelerate beyond normal running speeds, of what the playerbase dubbed as "bunnyhopping". There is a level of randomness to hitting the right tick, and is very difficult to execute consistently.

This technique has many use cases across beating map rotation times and performing difficult long distance jumps to skip gaps, and has resulted in game deciding scenarios in the highest levels of professional play. As such, the lack of a tick-based system as Valve initially announced carried the implication that bhopping (shortened bunnyhopping) would be immensely difficult to perform, as there are no "ticks" to jump on, effectively making the game mechanic much harder to perform.

# Workaround methods to nullify subticking

An early discovery of the implementation of subticking was that a tick system was still in use, but carried its own feature. By today's hardware standards, it is too computationally intensive to have servers actively update in perfect time or 1 millisecond time, as opposed to the current 64-tick 15.6 millisecond update time. To circumvent this restriction, Valve implemented the functionality to send time frames to the server, and have the server interpolate actions and physics between 15.6 ms ticks to simulate the effect of a "tickless" response time.

However, players described the movement and overall interaction with the game as "floaty", giving a large dissatisfaction towards the previous consistent nature of CS:GO due to the server interpolating actions, giving inconsistencies in running and firing weapons. This resulted in an entire new generation of configuration to "desubticking input" to be discovered:

```
// echo cs2 desubtick config by gliptal (10/17/23 update)
bind w +forward_
alias +forward_ "+forward;+forward"
alias -forward_ "-forward;-forward;-forward"

// jump/runthrow bind
alias jomp "+jump_;-jump_" // bypass valve's attempt at preventing jumpthrow binds
alias jumpthrow "jomp; -attack_; -attack2_"
alias +runthrow "+forward_; jumpthrow"
alias -runthrow "-forward_"
```

<figcaption>
shortened version of a early community <a href="https://www.reddit.com/r/GlobalOffensive/comments/17ah0sl/full_desubtick_config_new_runthrow_bind/?utm_source=share&utm_medium=web3x&utm_name=web3xcss&utm_term=1&utm_content=share_button" target="_blank" rel="noopener noreferrer"> shared config </a> to primitively desubtick input 
</figcaption>

User-made configuration files are not new for Counter-Strike; the creation of a custom <code> `.cfg`</code> offers incredible granular configuration and basic scripting through <code>alias</code>, usually not accessible to change while in-game.

During the time of the Counter-Strike 2's initial release in 2024, Valve implemented various ways to remove functionality to some player-created configs for the game, largely the "jump-throw" bind. Valve's native implementation of jump-throwing into the CS:2 acknowledged that to some degree, these type of player made configurations would no longer be necessary and would be on the lookout to be phased out. This change came further into effect for particular methods of desubticking, as Valve patched the method a year later in August 2024:

> Recently, some hardware features have blurred the line between manual input and automation, so we've decided to draw a clear line on what is or isn't acceptable in Counter-Strike. Input binds that include more than one of the following commands will now be ignored by default. <br /> <br /> To prevent accidental infractions, in-game binds that include more than one movement and/or attack actions will no longer work (e.g., null-binds and jump-throw binds). <br /> - <i><a href="https://steamcommunity.com/games/CSGO/announcements/detail/6500469346429600837" target="_blank" rel="noopener noreferrer">Side-stepping Skill</a>, <a href="https://steamcommunity.com/games/CSGO/announcements/detail/6500469346429581892" target="_blank" rel="noopener noreferrer">Release Notes for 8/19/2024</a>, Valve (August 8, 2024)</i>

While the writing of the patch notes and relevant update is ambiguous to directly address desubticking configurations, it certainly removed the ability to desubtick with the aforementioned example above. However, the community found other ways to desubtick input, while still avoiding be flagged for automation and the console's ignoring of previous methods. Multi-file configurations with guides have been written and have been in use for another year before Valve attempted to address the problem again. Below are an example of two entirely different methods that achieved the same desubtick effect:

- (Aug 20, 2024) <a href="https://steamcommunity.com/sharedfiles/filedetails/?id=3313210014" target="_blank" rel="noopener noreferrer">[PATCHED 2025/9/11] ruby rain config (jb/lj/mj binds)</a>
- (Aug 20, 2024) <a href="https://steamcommunity.com/sharedfiles/filedetails/?id=3314591609" target="_blank" rel="noopener noreferrer">DE-SUBTICK (working as of august 2025)</a>

Humorously, the discovery of and the simplest method to desubtick, although with its visual costs, was the use of single line configuration:

```
fps_max 64
```

<figcaption>
a single line command inputted in console or defined in a <code>.cfg</code> that limits the game's FPS to 64,<a href="https://www.reddit.com/r/GlobalOffensive/comments/17crjvh/how_to_desubtick_the_entire_game_with_one_console/" target="_blank" rel="noopener noreferrer"> discovered by Viznab88</a> 
</figcaption>

With the various methods of desubticking being rampant enough that the pro competitive players were also actively using them, this resulted in some large tournaments opting out of the recent Valve update to prevent abrupt gameplay changes, even if the change was unintentional.

<figure>
<blockquote class="twitter-tweet" data-lang="en" data-dnt="true" data-theme="dark"><p lang="en" dir="ltr">We will not be using the latest patch for today&#39;s matches at IEM Sydney; we don&#39;t want to use something untested &amp; it also includes quite a big change with aliases that most teams are using at the event - we don&#39;t want to force teams into a change when we can avoid it.<a href="https://twitter.com/hashtag/IEM?src=hash&amp;ref_src=twsrc%5Etfw">#IEM</a></p>&mdash; Michal Slowinski (@michau9_) <a href="https://twitter.com/michau9_/status/1714461078481146015?ref_src=twsrc%5Etfw">October 18, 2023</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
</figure>

Evidently, there's controversy and major division across the entire playerbase in how to handle subticking and the ability to desubtick. With movement being a core gameplay element for Counter-Strike and the community finding many ways to essentially working around Valve's new system, it was with great uncertainty of what Valve would do in the coming years.

# Exploit Timeline Across 2 Months

Up until sometime around July 2025, these methods of subticking could be used, and Valve had yet to majorly address anything regarding it since the first patch of input binds. During this time, players could make a decision on whether to resort to the vanilla subtick system with small movement inconsistencies, or create a small configuration file that desubticked their input to revert back to the traditional CS:GO deteministic feel.

For bhopping specifically, desubticking jumps resulted in a slightly easier time and ratio of jumping on last ticks than the subtick implementation, and will be the main focus for this timeline.

## August 2025

The next time Valve would make a direct reference to movement would be to fix an issue that was inadvertently caused in a previous recent update:

> Fixed a bug that would cause bhopping penalty to continue to accumulate even when jump had not been pressed. Bhopping jump spam clock now starts at the instant the input is registered, rather than then end of the subtick where that command was processed. <br /> -<i><a href="https://steamcommunity.com/games/CSGO/announcements/detail/529853754800866484" target="_blank" rel="noopener noreferrer"> Counter-Strike 2 Update</a>, Valve (Aug 1, 2025)</i>

Unbeknownst to Valve, this update started a whole wave of discovery towards bhopping, where players that had jumps desubticked and were playing the game at 64 frames per second had their jump input on first tick of landing first to be guaranteed.

<figure>
<video controls>
  <source src="/portfolio/randomcontentassets/csgoanddesubticking/64fps.mp4" type="video/webm">
</video>
    <figcaption>64 fps with desubticked jumps on version 1.40.9.6. Still accessible through Steam betas</figcaption>
</figure>

Players soon discovered that only the jump input needed to be at 64 fps, rather than playing the game at 64 fps the entire time. To combat the visual jarness of a low framerate, players started creating new binds to cap the game's framerate only while jumping, then reverting the game back to run at higher/uncapped frame times when not:

```
// "j" exists as a custom alias to perform a desubticked jump
bind "mwheeldown" "j; fps_max 64"

// revert back to normal/uncapped fps when commonly pressed keys
bind "mouse1" "+attack; fps_max 0"          // primary attack/fire weapon
```

<figcaption>
example config, where jumping caps the framerate to 64, while firing a weapon would revert back to uncapped.
</figcaption>

This config setting paired with desubticking jumps went rampant in public lobbies, where players could be found exploiting this new bug. This was obviously a problem for the state of the game, and it was expectation that Valve would patch this exploit quickly. However, two weeks later, Valve released a curious "bandage fix":

> fps_max can no longer be changed while connected to a server. <br /> - <i><a href="https://steamcommunity.com/games/CSGO/announcements/detail/657081807721726197" target="_blank" rel="noopener noreferrer"> Counter-Strike 2 Update</a>, Valve (Aug 14, 2025)</i>

This alone did not patch the exploit, as players before joining a server could still decide to change the framerate to 64, albeit it could not be changed during actual gameplay. Later, the community found other methods to change framerate externally with legitimate third party utilities, such as <a href="https://www.guru3d.com/download/rtss-rivatuner-statistics-server-download/" target="_blank" rel="noopener noreferrer"> RivaTuner Statistics Server</a>, a program to cap and uncap program framerates for graphics testing purposes.

The update did hinder some players in deciding whether or not to continue to abuse the exploit, or have discomfort playing at lower than ideal framerates, but overall, the exploit still worked in its original way.

## September 2025

There was a specific update that Valve pushed that had some effect on subticked movement that affected one of the more popular <a href="https://steamcommunity.com/sharedfiles/filedetails/?id=3313210014" target="_blank" rel="noopener noreferrer"> desubtick configs</a>:

> Fixed an issue that would allow exec_async to continue executing in cheat protected servers resulting in random user input dropout. <br /> - <i><a href="https://steamcommunity.com/games/CSGO/announcements/detail/545620158577639656" target="_blank" rel="noopener noreferrer"> Counter-Strike 2 Update</a>, Valve (Sep 10, 2025)</i>

While the update is again ambiguous at whether it specifically targeted this method of subticking, there is community documentation that explains what `exec_async` does more thoroughly:

> <code>exec_async</code> executed before the player ever join any server will let players create async console calls whenever they want to and they will be queued across sessions despite sv_cheats being 0 on those sessions. This can be use to create desubticked inputs, as these commands are not bound to keys, and also "legit" movement recording scripts. <br /> - <i><a href="https://github.com/zer0k-z/cs2-movement-issues/?tab=readme-ov-file#exec_async-exploit-fixed-2025-09-10" target="_blank" rel="noopener noreferrer">cs2-movement-issues</a> github repository</i>

Even with this September 10 update, the original exploit was still in the game, and <a href="https://steamcommunity.com/sharedfiles/filedetails/?id=3314591609" target="_blank" rel="noopener noreferrer">another method of desubticking</a> still existed, leaving an opportunity for one of the most broken movement updates that Valve ever released.

On September 26, Valve pushed an update that inadvertently removed every barrier that was arbitrarily imposed for abusing the exploit:

> sv_subtick_movement_view_angles will now only send subtick view angles to the server with other subtick events instead of sending them for every frame they change. <br /> - <i><a href="https://steamcommunity.com/games/CSGO/announcements/detail/498333631688737199" target="_blank" rel="noopener noreferrer"> Counter-Strike 2 Update</a>, Valve (Sep 26, 2025)</i>

There was now a complete decoupling of the game framerate and movement input. Players could now run the game at uncapped framerates, and with desubticked jumps, send player jump information to the server in discrete 64-tick intervals. After this update, bhopping was more powerful than originally in CS:GO.

## October 2025

On October 1, Valve silently released an <a href="https://steamcommunity.com/games/CSGO/announcements/detail/498333631688738078" target="_blank" rel="noopener noreferrer">update </a>that presumably fixed all desubticking methods and the original exploit. There no mention in this update of it being fixed, and the release notes provides nothing that hints any relevance to it. Furthermore, known methods of desubticking input no longer worked, and configs that still utilized them resulted in console errors and ignored key input.

This is where the 2 month timeline ends, and will likely stay that way.

# Conclusion

Over the two years, Valve has made active efforts to bring the game back to the original feel of CS:GO, while maintaining its new features of visuals, smoke tactics, and most importantly, player input. It seems that Valve may have finally gotten a hold on fixing the exploit in the <a href="https://steamcommunity.com/games/CSGO/announcements/detail/498333631688738078" target="_blank" rel="noopener noreferrer">October 1st update</a>, as well likely all widely known desubticking methods.

Analyzing the new Source 2 engine and the netcode of Counter-Strike 2 and the subticking method implementation is difficult at best; it is an extremely complex game with a novel game implementation to reverse engineer. Regardless, across the two years since the game's release, numerous amounts of in-depth analyses have sprung up in an attempt to understand subticking and explaining overall player input. While it is certain that Valve is set in stone to further developing the subtick system to be make it more reliable and consistent, the community effort to finding alternatives and loopholes into desubticking and effectively reverting Valve's efforts is curious to look at, and something remarkable.

Valve has been more open through various patch notes of attempting to change the game to a more consistent state, even if they tangentially created one of the most profound movement exploits that the game's franchise has ever seen.

# References

Community members have gone and have written long writeups in testing all aspects of the game, of jumping, moving, firing, hit registration and sharing their findings. <b>Unfortunately, there is rarely a clear confirmation on which analysis is correct</b> beyond just isolated testing and the eventual updating of the game, as well as one's finding possibly disputing another's, and is not the purpose of this page's writing.

The importance of the effort and the dedication to providing Valve feedback as well as the knowledge to the playerbase is extremely rare to see in other gaming circles. To showcase this, below are a view of in-depth explanations and references used, <i>as well as likely the only explicit instance of a Valve employee supporting an specific analysis. </i>

Actively supported by Valve or related entity:

- <b><a href="https://www.reddit.com/r/GlobalOffensive/comments/17nfapm/subtick_and_jumping_analysis/" target="_blank" rel="noopener noreferrer">Subtick and Jumping analysis </a> (supported by <a href="https://x.com/basisspace/status/1720851655640408371" target="_blank" rel="noopener noreferrer">Valve employee</a>)
- <a href="https://www.counter-strike.net/news/updates" target="_blank" rel="noopener noreferrer">Counter-Strike 2 Updates</a>
- <a href="https://developer.valvesoftware.com/wiki/CFG" target="_blank" rel="noopener noreferrer">Valve Developer Community: CFG</a>
- <a href="https://help.steampowered.com/en/faqs/view/5A86-0DF4-C59E-8C4A" target="_blank" rel="noopener noreferrer">Version 1.40.9.6 Beta of Counter-Strike 2</a></b>

Other:

- <a href="https://x.com/eugenio8a8/status/1937254901731438603" target="_blank" rel="noopener noreferrer">eugenio8a8 thread</a>
- <a href="https://drive.google.com/file/d/1VAX4rLPlk74eGWtQFvHWyqtLD8lHhhcp/view" target="_blank" rel="noopener noreferrer">eugenio8a8 abstract writeup</a>
- <a href="https://www.reddit.com/r/GlobalOffensive/comments/1ll5eir/subtick_groundmovement_is_not_inconsistent/" target="_blank" rel="noopener noreferrer">Subtick groundmovement is NOT inconsistent</a> (counter argument to eugenio8a8)
- <a href="https://github.com/zer0k-z/cs2-movement-issues" target="_blank" rel="noopener noreferrer">cs2-movement-issues</a>
- <a href="https://www.reddit.com/r/GlobalOffensive/comments/17p2cq3/subtick_for_movement_doesnt_even_work_in_theory/" target="_blank" rel="noopener noreferrer">Subtick for movement doesn't even work in theory. Valve is still wrong and I can prove it. </a>
- <a href="https://www.reddit.com/r/GlobalOffensive/comments/16kgxg0/cs2_psa_why_shots_that_seem_to_land_behind/" target="_blank" rel="noopener noreferrer">CS2 PSA: why shots that seem to land behind players still hit (even with 0 ping) </a>
- <a href="https://www.reddit.com/r/GlobalOffensive/comments/1kfffvy/why_the_spray_feels_off_in_cs2/" target="_blank" rel="noopener noreferrer">Why the Spray Feels “Off” in CS2</a>
- <a href="https://www.reddit.com/r/GlobalOffensive/comments/1n6olgh/real_reason_behind_stuttersbad_1_lows/" target="_blank" rel="noopener noreferrer">Real reason behind stutters/bad 1% lows </a>
