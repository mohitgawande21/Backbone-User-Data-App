// import template from '../templates/FormView.jst';
import Marionette from 'backbone.marionette';
const FormView = Marionette.ItemView.extend({
    template: "#formView",
    events: {
        "click #create": "createNewUser",
    },
    ui: {
        name: "#name",
        age: "#age"
    },
    createNewUser: function () {
        this.collection.add({
            name: this.ui.name.val(),
            age: this.ui.age.val()
        });
        this.ui.name.val("");
        this.ui.age.val("");
    },

});

export default FormView