---
title: "preservation"
date: "11/09/2025"
description: "a personal stance on preservation, and my own attempts to contribute and digitally preserve myself"
status: "current"
---

# Preface

There are numerous methods that the internet has involved themselves in preserving digital content, most notably the [Internet Archive](https://archive.org/). It's purposes have served along a range of casual and serious situations and has proven its journalistic importance in uncovering truths that have been hidden.

# Programming Specifics

On a smaller level, it is interesting to peer into what niche software and information has been preserved that is not easily thought of or actively updated in the Internet Archive, and more importantly, still completely accessible and functional. Forums from the 2000s hold a record of messages of an emerging internet, and when looking for specific software tools, there are some that I find surprising, due to their complexity in nature, use case, context for its existence.

An example I find notable is [GCFScape](https://developer.valvesoftware.com/wiki/GCFScape), a program to open and extract both Valve and common file formats from Valve titles. This program is extremely helpful for decompilation of models and assets for modders, but most importantly, it still functions just the same in 2025 even though its last update from the original author was in [2006](https://nemstools.github.io/pages/GCFScape-Download.html).

I find this very impressive, as presumably the extraction of direct assets and model formats during such an early time of no documentation was extremely difficult. Furthermore, the program continues to work for Counter-Strike: Global Offensive, a game released 6 years after GCFScape's last update, where Valve's Source Engine architecture and file formats could have major changes.

I'd like the code that I write to be based on the same principles that I feel that the GCFScape author had, in the minimalist use of libraries during that time, yet still thriving nearly two decades later. In the modern day, with much more languages and libraries to choose from to create a product for multiple platforms, accessibility and flexibility has heavily increased. However, at the same time, it results in a lax complacency in possible "temporariness" and more points of failure.

There is a more prominent feeling in that third party products are not or safe as before. Examples of the recent attacks and distribution of malware in the largest NPM packages in 2025 leaves concern with many of its users and global companies that utilize these packages to halt services or find alternatives. While these packages solve the problem of needing to "reinvent the wheel", there are some on a more low level that often times are abstracted to a package, opening a point of failure in the future in functionality, of course depending on the purpose and how well audited it is. On a realistic level, most of the time, attacks are often quickly resolved, and with extremely large communities at a time maintaining these libraries and adapting to architectural and internet expectation shifts, it is favorable to use libraries in given use cases.

Even so, I still keep my own mindset in strictly evaluating the tradeoffs whether or not I need a particular package for its ease of use, or improving my own skills and certainty of the code being written. This simple portfolio page is an example of these thoughts, with the comparison I had with React and Preact. The significant number of services and libraries stripped away from React, yet still maintaining a thin functional abstracted DOM layer that Preact has is extremely attractive for me to prefer Preact over React without reinventing the wheel, yet still leaving room for me to understand the underlying workings of websites.

# Qualitative Preservation

Nostalgia is a wonderful thing, and recently I have gotten over a wave of feeling it. I feel fortunate enough that much of my early fond experiences can be accessible due to digital preservation, giving me the opportunity to relieve experiences again. Video games contribute heavily to this, and the case of emulation and backports to relieve old games has helped a lot in feeling nostalgia again, and most importantly, the incentive to move on and do new things.

Major waves of nostalgia that I experienced:

- Age 16: playing and completing (100%) Super Mario Galaxy 1 and 2 after coming back to the game. First experience of nostalgia before I knew what that was.
- Age 23: playing the first ever Minecraft world and version again.

Minecraft is the greatest example of the best digital preservation that the internet and its developers collectively have done. Referencing back to online services terminated, it is sad to see software that rely on them to be forever gone. A majority of Google services and products are like this with over [200 dead products](https://killedbygoogle.com/), and gaming companies that take use Always-On DRM are no different, leaving many titles forever unplayable if a company decides to no longer maintain its servers for "reasons".

In contrast, the developers of Minecraft allow nearly every version that has ever been distributed or showcased to be accessible and playable in its vanilla launcher, and because of its impact on many of its players in early 2010s, it is the greatest work of digital permanence. Old versions of the game are, in fact, so impactful and often referenced that some players prefer to play on older versions.

I mentioned that I was able to play the same exact Minecraft world again, specifically in the nature that it was a demo version of Minecraft and its version and world seed has been recorded in [forums](https://www.minecraftforum.net/forums/minecraft-java-edition/seeds/301974-seed-of-the-map-used-in-pcgamers-demo-of-minecraft). Being able to revisit the same world and play through it again was a deep feeling of nostalgia, and also alleviated some bit of unconscious sadness because I lost the original world and its screenshots. While it was nice to play the world again, I got the feeling that I was overstaying my welcome in a previous world, and it was time to move on.

The preservation of Minecraft is also demonstrated in its simple but expressive nature of the game, and has grown into the concept of a Minecraft "forever world", where a player plays the same world for years. The preserving nature of Minecraft's digital world is enticing for me to go on the same journey as others, such that decades in the future, I experience what I was like, what my thoughts were, and what I did.

An unedited playthrough [playlist](https://www.youtube.com/watch?v=57JmZTpGRgw&list=PLGmxEcY8emvCbP7JpeeDcAg0Skv1gRBxR) I plan to archive over time, with a world view in [browser](https://world.danielpan.xyz/), as well as a simple [screenshot mod](https://modrinth.com/mod/sporadic-screenshot).

# Conclusion

In a sense, the internet is not always forever; it's really only forever if its well documented or someone willing to dig deep enough to find it. Yet, even in a world where everything is fast pacing and constantly changing, I find it much more imperative to create timeless things, both in quality of software and quality of memories.
