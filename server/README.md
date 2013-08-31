CoinWare server
===============

a small node.js server for highscore sharing in coinware.
It is totally insecure by design... Feel free to implement a better version.

Install
-------

In the *server* folder, type the following command:

	npm install

It will install all the required dependencies.

Launch server
-------------

In your CoinWare config.js file, activate the server-side routines by setting the serverSync variable to true.
Then, launch the server with the following command in the *server* folder:

	PORT=1234 node app

where 1234 is the port number you want your server to run on...