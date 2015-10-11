# Accounts Trello

Accounts Trello provides account support for [trello](http://www.trello.com/) logins with [Meteor](http://www.meteor.com/) applications.

## Installation

Accounts Trello can be installed with [AtmosphereJS](atmospherejs.com). From inside an app:

``` sh
$ meteor add robertlowe:accounts-trello
```

Note that version 0.2.0 works with METEOR@1.2.0.2 and later.

You'll probably want to add `accounts-ui` as well:

``` sh
$ meteor add accounts-ui
```

And your login buttons somewhere:

```
{{> loginButtons }}
```


## API

### Setup

1. Configure the service like normal from the web-ui. Done!

### Additional configuration

You may want to set the name, scope or expiration of you're tokens, here's an example:

```
var settings = ServiceConfiguration.configurations.findOne({service: "trello"});
if (settings == null){
  ServiceConfiguration.configurations.insert({
    service       : "trello",
    // find these at: https://trello.com/app-key
    consumerKey   : "SOME_KEY",
    secret        : "SOME_SECRET",
    name          : "FooBar App",
    scope         : "read",
    expiration    : "never"
  });
}
```
