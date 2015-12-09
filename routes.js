Router.route('/', function() {
	this.render('intro');
});

Router.route('/app', {
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
      this.redirect('app');
    } else {
      this.next();
    }
  }
});
