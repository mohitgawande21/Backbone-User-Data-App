import Marionette from 'backbone.marionette';
import Handlebars from 'handlebars'
export default Marionette.ItemView.extend({
    tagName: 'tr',
    id: 'id-tr',
    template: Handlebars.compile($("#userView").html()),
    events: {
        'click #btn-delete': 'delete',
        'click #btn-edit': 'edit',
        'click #btn-update': 'update'
    },
    delete: function () {
        console.log(this.$('#id-tr'))
        console.log($('#id-tr'))
        console.log("click delete")
        this.$el.remove()
    },
    edit: function () {
        this.$('#btn-update').show()
        var name = this.$('#val-name').html();
        var email = this.$('#val-email').html();
        console.log(name)
        $('#name-input').val(name)
        $('#email-input').val(email)
    },
    update: function () {
        this.$('#btn-update').hide()
        this.$('#val-name').html($('#name-input').val())
        this.$('#val-email').html($('#email-input').val())
    }

});
