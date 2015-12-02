Package.describe({
  name: 'panter:qrcode',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'Create QR codes in meteor. Kudos to https://larsjung.de/jquery-qrcode/',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/panter/meteor-qrcode.',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use('ecmascript');
  api.use(['jquery','meteor-platform'], 'client');
  api.addFiles('jquery.qrcode-0.12.0.min.js', 'client');
  api.addFiles('qrcode.html', 'client');
  api.addFiles('qrcode.js', 'client');
  
});
