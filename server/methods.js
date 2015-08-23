Meteor.methods({
    deleteUser: function (targetUserId, group) {
        var loggedInUser = Meteor.user()

        if (!loggedInUser || !Roles.userIsInRole(loggedInUser, ['admin'], group)) {
            throw new Meteor.Error(403, "Access denied")
        }

        Roles.setUserRoles(targetUserId, [], group)
    },

    updateRoles: function (targetUserId, roles, group) {
        var loggedInUser = Meteor.user()

        if (!loggedInUser || !Roles.userIsInRole(loggedInUser, ['admin'], group)) {
            throw new Meteor.Error(403, "Access denied")
        }

        Roles.setUserRoles(targetUserId, roles, group)
    }
})
