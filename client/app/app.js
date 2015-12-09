Template.app.events({
  'click #logout': function() {
    Meteor.logout();
  }
});