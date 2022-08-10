import Marionette from 'backbone.marionette';
import Handlebars from 'handlebars'
export default Marionette.ItemView.extend({
    template: Handlebars.compile($("#userView").html()),
});
