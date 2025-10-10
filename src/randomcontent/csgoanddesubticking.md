---
title: "Abusing Counter-Strike 2's subticking with desubticking"
date: "10/09/2025"
description: "Short semi-technical overview of Valve's new subtick system and the rollercoaster effect on perceived player movement and developer efforts to fix them."
status: "current"
---

## Preface

In all previous iterations of Valve games before Counter-Strike 2, a game's environment is dictated by a constant 64-tick system, making player physics and interactions usually consistent. In essence, for a majority of Valve games during Source 1, their games run off of a deterministic 3D simulation and is comparable to as being deterministic as a game of chess.

In Counter-Strike: Global Offensive, players have long been utilizing this quirk through using `cl_showpos 1` to creating precise setups to throw utility across the map in hard to reach spots or to "pixel-walk" alongside smooth walls and access areas of the map not usually possible in normal play.

<figure>

<iframe width="560" height="315" src="https://www.youtube.com/embed/TU6vHNIkBOo?si=v3dUwgL5a3VlN6GF" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
<figcaption><i>balancing an awp upright with very specific set position and look angle</i></figcaption>

</figure>

On the March 2023 announcement of Counter-Strike 2 and the game's major changes from its predecessor, one of changes introduced was of a "subtick" system, defined as a way to detect game events without the need of a tick system. The goal for sure was to increase player fluidity to the server and remove areas of time where input is not detected, for example firing a weapon before an opponent. However, a worry that came about was player movement and its effect on time-delta interactions, instead of static "who shot their weapon first". In Valve's video [Counter-Strike 2: Moving Beyond Tick Rate](https://www.youtube.com/watch?v=GqhhFl5zgA0), there is a worrying quote:

> Now, the tick rate no longer matters for moving and shooting, so the server will know the exact moment you fired your shot, <b>jumped your jump</b>, or peeked your peek. - Valve 2023

One of the game's most popular mechanics has historically relies on the principle of jumping on the exact tick that a player lands to ignore friction applied to horizontal velocity. Chaining multiple of these tick perfect jumps together gives off the appearance of what the playerbase has dubbed "bunny hopping" and allows the player to gain velocities greater than the maximum running speed. This technique has many use cases across beating map rotation times and performing difficult long distance jumps to skip gaps, and has resulted in game deciding scenarios in the highest levels of professional play. As such, the lack of a tick-based system as Valve initially announced carried the implication that bhopping (shortened bunny hopping) would be immensely difficult to perform, as there are no "ticks" to jump on, effectively killing this unique game mechanic.

## Workaround methods to nullify subtick

During the time of the game's initial release to 2024, Valve implemented various ways to remove player-created configs for the game, largely the "jump-throw" bind. This was a bind during CS:GO that players would need to actively write in a `.cfg` file to guarantee a consistent throwing of utility while jumping. Valve's native implementation of jump-throwing into the CS:2 acknowledged that to some degree, these type of player made configurations would no longer be necessary and would be on the lookout to be phased out.

An effect of subticking that players noticed was that simple movement was inconsistent and described as "floaty", giving players a large dissatisfaction towards the competitive nature that Counter-Strike was. This resulted in an entire new generation of configuration of "desubticking input" to be discovered, where player input would be consistent and more deterministic, as well as reintroducing jump-throw binds.

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

<figure>
<figcaption>
shortened version of a early community <a href="https://www.reddit.com/r/GlobalOffensive/comments/17ah0sl/full_desubtick_config_new_runthrow_bind/?utm_source=share&utm_medium=web3x&utm_name=web3xcss&utm_term=1&utm_content=share_button" target="_blank" rel="noopener noreferrer"> shared config </a> to primitively desubtick input 
</figcaption>
</figure>

Valve's disabling of following actions: https://steamdb.info/patchnotes/15424813/

created more complex methods of desubticking without automation. 

movement could still be desubticked, 

early existence of how desubticking worked: https://x.com/poggu__/status/1710565076036415768

new early 64 fps discovery: https://www.reddit.com/r/GlobalOffensive/comments/17crjvh/how_to_desubtick_the_entire_game_with_one_console/

https://x.com/eugenio8a8/status/1937254901731438603
follow up: https://x.com/eugenio8a8/status/1935373468603760669

counter argument: https://www.reddit.com/r/GlobalOffensive/comments/1ll5eir/subtick_groundmovement_is_not_inconsistent/

valve supported explicitly: https://x.com/basisspace/status/1720851655640408371 https://www.reddit.com/r/GlobalOffensive/comments/17nfapm/subtick_and_jumping_analysis/

https://www.reddit.com/r/GlobalOffensive/comments/17p2cq3/subtick_for_movement_doesnt_even_work_in_theory/
https://www.reddit.com/r/GlobalOffensive/comments/16kgxg0/cs2_psa_why_shots_that_seem_to_land_behind/
https://www.reddit.com/r/GlobalOffensive/comments/173sk5k/a_summary_of_the_complaints_that_i_have_read/
https://www.reddit.com/r/GlobalOffensive/comments/1kfffvy/why_the_spray_feels_off_in_cs2/
https://www.reddit.com/r/GlobalOffensive/comments/1n6olgh/real_reason_behind_stuttersbad_1_lows/

pro league controversy: https://www.reddit.com/r/GlobalOffensive/comments/17aggaf/iem_sydney_will_not_use_the_latest_patch_because/

funny: https://www.reddit.com/r/GlobalOffensive/comments/17an241/cs2_subtick_is_hilarious_what_you_see_is_what_you/

### Interactions with a desubtick configuration

public steam cs2 version 1.40.9.6 - desubtick jumps, but requires fps 64

update timeline

august 1st the start
Bhopping jump spam clock now starts at the instant the input is registered, rather than then end of the subtick where that command was processed.

august 14 attempt to fix
disable changing fps while connected to server

september 10 affected some configurations, but general exploit still available
Fixed an issue that would allow exec_async to continue executing in cheat protected servers resulting in random user input dropout.

september 26 best version oat
sv_subtick_movement_view_angles will now only send subtick view angles to the server with other subtick events instead of sending them for every frame they change.

october 1 likely permanent fix
silent fix

nade lineups

## Movement after certain update for 64

## Movement after another update with uncapped 64

## Desubtick exploit fixed

Conclusion: https://github.com/zer0k-z/cs2-movement-issues

References:

https://developer.valvesoftware.com/wiki/CFG