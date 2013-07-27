var querystring = Npm.require('querystring');

Trello = {};

var urls = {
  requestToken: "https://trello.com/1/OAuthGetRequestToken",
  accessToken: "https://trello.com/1/OAuthGetAccessToken",
  authenticate: function(oauthBinding){
    var params = {}

    // allow for reading from config
    if(oauthBinding._config){
      if (oauthBinding._config.name)
        params['name'] = oauthBinding._config.name;
      if (oauthBinding._config.scope)
        params['scope'] = oauthBinding._config.scope;
      if (oauthBinding._config.expiration)
        params['expiration'] = oauthBinding._config.expiration;
    }

    params['oauth_token'] = oauthBinding.requestToken;

    return "https://trello.com/1/OAuthAuthorizeToken?" + querystring.stringify(params);
  }
};

// https://api.trello.com/1/members/me
Trello.whitelistedFields = ['username', 'fullName', 'url'];

Oauth.registerService('trello', 1, urls, function(oauthBinding) {
  var identity = oauthBinding.get('https://api.trello.com/1/members/me').data;

  var serviceData = {
    id: identity.id,
    screenName: identity.username,
    accessToken: oauthBinding.accessToken,
    accessTokenSecret: oauthBinding.accessTokenSecret
  };

  // include helpful fields from trello
  var fields = _.pick(identity, Trello.whitelistedFields);
  _.extend(serviceData, fields);

  return {
    serviceData: serviceData,
    options: {
      profile: {
        name: identity.fullName
      }
    }
  };
});


Trello.retrieveCredential = function(credentialToken) {
  return Oauth.retrieveCredential(credentialToken);
};
