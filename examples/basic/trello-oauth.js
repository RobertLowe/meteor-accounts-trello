if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault('counter', 0);

  Template.hello.helpers({
    counter: function () {
      return Session.get('counter');
    }
  });

  Template.hello.events({
    'click button': function () {
      // increment the counter when button is clicked
      Session.set('counter', Session.get('counter') + 1);
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });

  var settings = ServiceConfiguration.configurations.findOne({service: "trello"});
  if (settings == null){
    ServiceConfiguration.configurations.insert({
      service       : "trello",
      consumerKey   : "650efae509c02043278f1e38af23ecb1",
      secret        : "6a4f3bbfbc36474d90a7f9e6dc30f298ca1ed82454e05dc563ab588aa9b27610",
      name          : "FooBar App",
      scope         : "read",
      expiration    : "never"
    });
  }
}
