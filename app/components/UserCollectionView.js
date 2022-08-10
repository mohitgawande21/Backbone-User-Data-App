
var Marionette = require('backbone.marionette');
import UserView from './UserView';
var UsersCollectionView=Marionette.CollectionView.extend({
    childView:UserView,

})
export default UsersCollectionView