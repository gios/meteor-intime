Meteor.publish('secrets', function (group) {
    if (Roles.userIsInRole(this.userId, ['admin'], group)) {
        return Meteor.secrets.find({group: group});
    } else {
        this.stop();
        return;
    }
});

Accounts.validateNewUser(function (user) {
    var loggedInUser = Meteor.user();
    if (Roles.userIsInRole(loggedInUser, ['admin','manage-users'])) {
        return true;
    }

    throw new Meteor.Error(403, "Not authorized to create new users");
 });
