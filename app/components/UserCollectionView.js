
var Marionette = require('backbone.marionette');
import UserView from './UserView';
var UsersCollectionView=Marionette.CollectionView.extend({
    tagName:'tbody',
    childView:UserView,

})
export default UsersCollectionView