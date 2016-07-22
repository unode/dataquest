DataQuest derived from BrowserQuest [updated & modified to use Socket.IO]
============

![alt tag](https://github.com/unode/dataquest/raw/master/screens/1.png)

INSTALL
============

If you wish to give the game a quick try and have docker installed locally you can:

    docker run -p 8000:8000 -p 9000:9000 unode/dataquest

and point your browser to [http://127.0.0.1:9000](http://127.0.0.1:9000)


ABOUT
===========

This is my take on Mozilla's amazing multiplayer open source game.

I've yet to find any other game that's so well done from graphics, implementation and features point of view (did I mention open source, multiplayer and browser based?).

![alt tag](https://github.com/unode/dataquest/raw/master/screens/2.png)

I've wanted to use the game for a while and found many of its dependencies to be deprecated and even obsolete.

I've just taken the time to understand the code and thank you guys for making it so well structured.

![alt tag](https://github.com/unode/dataquest/raw/master/screens/3.png)

This now works on the latest Socket.IO. Everything should work just as in the original developers intended.

Enjoy this amazing open source browser based role playing multiplayer 2D game!

And a big thank you to the original developers is in order! THANK YOU!

HOW TO RUN?
============
Run from a console:

Make sure you have NodeJS installed.

    npm install
    node server/js/main.js

Then go inside the Client folder and open index.html.

You might want to use a webserver and open index.html from there.

Also read the original README files you'll find inside the Client and Server folders to learn the basics of configuring (it's preconfigured right now).


Original README
============
DataQuest is a derivation of BrowserQuest an HTML5/JavaScript multiplayer game experiment.


Documentation
-------------
Documentation is located in client and server directories.


License
-------

Code is licensed under MPL 2.0. Content is licensed under CC-BY-SA 3.0.
Some sprites used for mob characters are derived of The Mana World sprites, originally available under GPLv2
See the LICENSE file for details.


Credits
-------
Created by [Little Workshop](http://www.littleworkshop.fr):

* Franck Lecollinet - [@whatthefranck](http://twitter.com/whatthefranck)
* Guillaume Lecollinet - [@glecollinet](http://twitter.com/glecollinet)
