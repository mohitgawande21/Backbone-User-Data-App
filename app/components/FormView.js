import Marionette from 'backbone.marionette'

var FormView = Marionette.ItemView.extend({
    id:'container',
    template: '#userForm',
    events: {
        'click #add-btn': 'createUser' 
    },

    ui: { 
        name: "#name-input",
        email: "#email-input"
    },
    createUser: function () {
        var name = this.$('#name-input').val();
        var email = this.$('#email-input').val();
        console.log(name, email);
        this.collection.add({
            name: this.ui.name.val(),
            email: this.ui.email.val()
        })
        
        // localStorage.setItem("UserCollection", JSON.stringify(this.collection.toJSON()))
       
    },
    initialize:function(){
        this.collection.fetch({
            success:function(){
                console.log("fetch successfully")
            },
            error:function(){
                console.log("failed to load")
            }
        })
    }
})

export default FormView

