Daily Puppy Popcorn Event Demo
==============================
Demo of [Popcorn.js][popcornjs] event handling using YouTube video from
[The Daily Puppy][dailypuppy].

YouTube videos are customized using [YouTube player parameters][youtube-params].

Available Popcorn.js events are documented [here][popcorn-events].

Popcorn has a page ready listener, documented [here][popcorn-ready]:

    Popcorn(function() {
        // Do Popcorn stuff here. Run when page ready.
	});

The event listener function is `on`, documented [here][popcorn-event-on]. e.g.:

	var pop = <construct media>
	pop.on("pause", function(e) {
		console.log("Paused at " + pop.currentTime());
	});

[popcornjs]: http://popcornjs.org
[dailypuppy]: http://www.dailypuppy.com
[youtube-params]: https://developers.google.com/youtube/player_parameters#Parameters
[popcorn-events]: http://popcornjs.org/popcorn-docs/events
[popcorn-ready]: http://popcornjs.org/popcorn-docs/utility-methods/#Popcorn Ready
[popcorn-event-on]: http://popcornjs.org/popcorn-docs/media-methods/#on