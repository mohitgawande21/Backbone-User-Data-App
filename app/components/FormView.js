import Marionette from 'backbone.marionette'

var FormView = Marionette.ItemView.extend({
    template: '#userForm',
    events: {
        'click #add-btn': 'createUser'
    },
    ui: {
        name: "#name-input",
        age: "#age-input"
    },
    createUser: function () {
        var name = this.$('#name-input').val();
        var age = this.$('#age-input').val();
        console.log(name, age);
        this.collection.add({
            name: this.ui.name.val(),
            age: this.ui.age.val()
        })
    }
})

export default FormView

