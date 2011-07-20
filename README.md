# Chode #
## A chess server implemented in Node. ##

***

Plan: Two modes of play (the first implemented before the second): 'correspondence' and 'live'.

Correspondence means that you play turns asynchronously, and emails or some other notification are passed back and forth between the players.

Live will be simultaneous play, using Web Sockets on the client side.

Notes:

* For completeness, all aspects of play will be implemented on the server side.  This will mean a bit of inefficiency in things like move validation.  I may split client and server into two branches later.

