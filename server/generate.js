if (Meteor.isServer) {
    var users = [
        { username:"operator", name:"Operator User", roles:['operator'] },
        { username:"storage", name:"Storage User", roles:['storage'] },
        { username:"admin", name:"Admin User", roles:['admin'] }
    ];

    _.each(users, function (user) {
        var id;
        id = Accounts.createUser({
            username: user.username,
            password: "foo",
            profile: { name: user.name }
        });

        if (user.roles.length > 0) {
            Roles.addUsersToRoles(id, user.roles);
        }
    });

    Meteor.publish('secrets', function (group) {
        if (Roles.userIsInRole(this.userId, ['view-secrets','admin'], group)) {
            return Meteor.secrets.find({group: group});
        } else {
            this.stop();
            return;
        }
    });
}
