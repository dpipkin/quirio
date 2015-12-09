Router.route('/', function() {
	this.render('intro');
});

Router.route('/app');
Router.route('/login');

Router.onBeforeAction(function() {
	if (!Meteor.userId()) {
		this.render('login');
	} else {
		this.next();
	}
}, {
	only: ['app']
});
