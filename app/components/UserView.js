import Marionette from 'backbone.marionette';
import Handlebars from 'handlebars'
export default Marionette.ItemView.extend({
    tagName:'ul',
    template: Handlebars.compile($("#userView").html()),
});
