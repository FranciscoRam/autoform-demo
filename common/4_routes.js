Router.configure({
  notFoundTemplate: 'not_found',
  loadingTemplate: 'loading',
  layoutTemplate: 'layout'
});

Router.onBeforeAction('loading');

Router.map(function() {
  this.route('home', {
    path: '/'
  });

  this.route('quickform');
  this.route('fieldvalues');
  this.route('insertaf');
  this.route('qfdetails');
});

if (Meteor.isClient) {
  // Scroll to top or requested hash after loading each page
  Router.onAfterAction(function() {
      Meteor.setTimeout(function () {
        var hash = $(window.location.hash);
        var scrollTo = hash.length ? hash.offset().top : 0;
        $("html, body").animate({ scrollTop: scrollTo }, AppConfig.scrollSpeed, AppConfig.scrollEasing);
      }, 0);
  });
}