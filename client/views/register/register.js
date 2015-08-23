if (Meteor.isClient) {
    Template.register.events({
        'submit form': function(event){
            event.preventDefault();
            var usernameVar = event.target.registerUsername.value;
            var passwordVar = event.target.registerPassword.value;
            Accounts.createUser({
                username: usernameVar,
                password: passwordVar
            });
            console.log("Form submitted.");
        }
    });
}
