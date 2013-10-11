# Meteor Accounts Trello

Meteor Accounts Trello provides account support for [trello](http://www.trello.com/) logins with [Meteor](http://www.meteor.com/) applications.

## Installation

Meteor Accounts Trello can be installed with [Meteorite](https://github.com/oortcloud/meteorite/). From inside a Meteorite-managed app:

``` sh
$ mrt add accounts-trello
```

Note that version 0.1.0 works with Meteor 0.6.6 and later.

## API

### Setup

1. Configure the service like normal from the web-ui. Done!

### Additional configuration

You may want to set the name, scope or expiration of you're tokens, here's an example:

```
Accounts.loginServiceConfiguration.remove({
  service: "trello"
});

Accounts.loginServiceConfiguration.insert({
  service       : "trello",
  consumerKey   : "foo",
  secret        : "bar"
  name          : "FooBar App"
  scope         : "read"
  expiration    : "never"
});
```

## Contributing

To run the tests, ensure that the accounts-trello is checked out to a folder called `accounts-trello`, and then simply run:

``` sh
$ mrt test-packages accounts-trello
```