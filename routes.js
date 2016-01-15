Router.route('/', function() {
	this.render('intro');
});

Router.route('/profile', {
  layoutTemplate: 'app',
  onBeforeAction: function() {
    if (!Meteor.userId()) {
      this.redirect('login');
    } else {
      this.next();
    }
  }
});
Router.route('/login', {
  onBeforeAction: function() {
    if (Meteor.userId()) {
      this.redirect('profile');
    } else {
      this.next();
    }
  }
});
Router.route('modules', {
  layoutTemplate: 'app'
});
Router.route('assessments', {
  layoutTemplate: 'app'
});
