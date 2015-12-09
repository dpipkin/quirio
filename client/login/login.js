Template.login.events({
  'submit .login': function(event) {
    event.preventDefault();

    var username = event.target.username.value;
    var password = event.target.password.value;

    Meteor.loginWithPassword(username, password);
  }
})