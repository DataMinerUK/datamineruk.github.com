Popcorn GoogleMap Tweening Demo
===============================
Demo of [Popcorn.js][popcornjs] GoogleMap plugin functionality to
[tween streetviews][googlemap-plugin].

This tweens a simple streetview walk down Trinity Street in Cambridge with the
route calculated by Google directions.

Uses a doctored version of Popcorn.js that uses the Google walking path instead
of driving path to do the interpolation because Trinity Street is one-way. The
hack involves changing this
[line][https://github.com/mozilla/popcorn-js/blob/master/plugins/googlemap/popcorn.googlemap.js#L312]

The video is stopped after two minutes seconds with a cue:

    popcorn.cue(120, function() { pop.pause(); });

[popcornjs]: http://popcornjs.org
[googlemap-plugin]: http://popcornjs.org/popcorn-docs/plugins/#Googlemap
