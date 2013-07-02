Slideshow impress.js
====================
Original webpage: http://slideshow-s9.github.io/slideshow-impress.js/

Build a demo slidedeck
----------------------
* Make a directory in slidedecks for your new presentation.
* cd into this directory.
* gem install slideshow
* Run the following to create two demo slidedeck files from the basic template.
    slideshow new -t impress.js
* Build the impress.js.text example with:
    slideshow build impress.js.text -t impress.js -o output
* This puts the slidedeck HTML in the output directory.
* In your browser, open the impress.js.html file in the output directory.

Build your own slidedeck
------------------------
* It is easier to start from the impress2.js.text sample because it is more basic.
* Rename impress2.js.text to costa_rica.md.
* Build it with:
	gem install slideshow
    slideshow build costa_rica.md -t impress.js -o output 
* Edit costa_rica.md to make your slidedeck.
* Any CSS goes at the top after `%css` and before `%end`.
* A new slide is started at each `!SLIDE`.
* Write the contents of the slide underneath `!SLIDE` in Markdown format.


Put your slidedeck on the Internet
----------------------------------
* Copy the output directory to where you want the deck to be, e.g. Dropbox public or Github Pages.
* Rename it to the name of your presentation, here costa_rica.