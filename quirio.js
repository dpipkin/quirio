if (Meteor.isClient) {
  
  Template.body.onRendered(function() {
    $('.dropdown-button').dropdown();
  });
  
  Template.login.events({
    "submit .login": function(e, template) {
      e.preventDefault();
      
      
    }
  })
  
	Accounts.ui.config({
		passwordSignupFields: "USERNAME_ONLY"
	});
}