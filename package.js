Package.describe({
  summary: "Login service for Trello accounts"
});

Package.on_use(function(api) {
  // trello
  api.use('oauth1', ['client', 'server']);
  api.use('oauth', ['client', 'server']);
  api.use('random', 'client');
  api.use('underscore', 'server');
  api.use('service-configuration', ['client', 'server']);

  api.export('Trello');

  api.add_files(
    ['trello_configure.html', 'trello_configure.js'],
    'client');

  api.add_files('trello_server.js', 'server');
  api.add_files('trello_client.js', 'client');


  api.use('underscore', ['server']);

  // acounts-trello
  api.use('accounts-base', ['client', 'server']);
  // Export Accounts (etc) to packages using this one.
  api.imply('accounts-base', ['client', 'server']);
  api.use('accounts-oauth', ['client', 'server']);

  api.use('http', ['client', 'server']);
  api.use('templating', 'client');

  api.add_files('trello_login_button.css', 'client');
  api.add_files("accounts-trello.js");

});
