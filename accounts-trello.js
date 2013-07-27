Accounts.oauth.registerService('trello');

if (Meteor.isClient) {
  Meteor.loginWithTrello = function(options, callback) {
    // support a callback without options
    if (! callback && typeof options === "function") {
      callback = options;
      options = null;
    }

    var credentialRequestCompleteCallback = Accounts.oauth.credentialRequestCompleteHandler(callback);
    Trello.requestCredential(options, credentialRequestCompleteCallback);
  };
} else {
  var autopublishedFields = _.map(
    Trello.whitelistedFields.concat(['id', 'fullName']),
    function (subfield) { return 'services.trello.' + subfield; });

  Accounts.addAutopublishFields({
    forLoggedInUser: autopublishedFields,
    forOtherUsers: autopublishedFields
  });
}
