# jQuery Sitewide Event Firer Plugin

jQuery Sitewide Event Firer is a quick and dirty plugin which allows to set up a callback to be fired after some time has passed. No matter the user has been browsing your website the counter always resumes from previous state. As it works by intervals, you shouldn't expect it to be 100% time accurate but it should fit most of the your possible use cases. Oh! The client has to be cookie enabled!

## Dependencies

- jQuery (Currently tested with v1.8.2)
- [carhartl's jQuery Cookies Plugin](https://github.com/carhartl/jquery-cookie) (Currently tested with v1.2. You can forget adding it in your source and the plugin will add it for you from GitHub -**BUT**... it won't work on IE9 due mime type mismatch [SEC7112] error-.)

## Demo and Documentation

- TODO (sorry)

BUT... here we go with a quickstart tip and a quick variables' overview :)

	$(document).ready(function () {
		$.sitewideEvent( callback ); // that should do the (basic) trick
	});

However, you will want to tweak it to fit your need. Then you can call it as follows:

	$(document).ready(function () {
		$.sitewideEvent( { options }, callback ); // obviously, 'options' allow you to cutomize the thing
	});

Here are the default options (you can change all of them):

- **cookieName** (*string*, default: 'jQtimer')
- **cookieExpires** (*valid Date Object*, default: null (Session cookie))
- **cookiePath** (*string*, default: '/')
- **interval** (*number*, default: 1000 (In milliseconds))
- **fireAt** (*number*, default: 6000 (In milliseconds))
- **callback** (*string*, default: null (You don't really need to use this while using the external callback call))


## Authors

Originaly developed by Nico Fantino ([@ala_747](http://twitter.com/#!/ala_747/))