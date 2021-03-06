Template.configureLoginServiceDialogForTrello.siteUrl = function () {
  // Trello doesn't recognize localhost as a domain name
  return Meteor.absoluteUrl({replaceLocalhost: true});
};

Template.configureLoginServiceDialogForTrello.fields = function () {
  return [
    {property: 'consumerKey', label: 'Consumer key'},
    {property: 'secret', label: 'Consumer secret'},
    {property: 'name', label: 'Application Name'},
    {property: 'scope', label: 'Scope (or leave blank)'},
    {property: 'expiration', label: 'Expiration (or leave blank)'}
  ];
};