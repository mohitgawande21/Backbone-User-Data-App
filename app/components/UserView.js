import Marionette from 'backbone.marionette';
import Handlebars from 'handlebars'
export default Marionette.ItemView.extend({
    template: Handlebars.compile($("#userView").html()),
    events: {
        'click .delete': 'deleteitem',
        'click .edit': 'edititem',
        'click .update': 'updateItem',

    },
    deleteitem: function () {
        console.log('delete click')
        this.$el.remove()
    },
    edititem: function () {
        this.$('.update').show()
        var name = this.$('#name-p').html()
        var age = this.$('#age-p').html()
        // console.log('edit click',name,age );
        $('#name').val(name)
        $('#age').val(age)
    },
    updateItem: function () {
        console.log("click update")
        var nameedit = $('#name').val()
        var ageedit = $('#age').val()
        $('#name-p').html(nameedit)
        $('#age-p').html(ageedit)
        $('#name').val("");
        $('#age').val("");
        this.$('.update').hide()
    }
});
