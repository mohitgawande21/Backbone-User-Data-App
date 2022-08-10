
import Backbone from 'backbone';
import UserModel from './UserModel'

var UserCollection = Backbone.Collection.extend({
    model: UserModel
})

export default UserCollection