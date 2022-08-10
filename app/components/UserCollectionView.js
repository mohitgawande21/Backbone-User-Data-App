var Marionette = require('backbone.marionette');
import UserView from './UserView';
import NoUserView from './NoUserView';
var UsersCollectionView=Marionette.CollectionView.extend({
    childView:UserView,
    emptyView: NoUserView
})
export default UsersCollectionView

