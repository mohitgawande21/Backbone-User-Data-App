import Backbone from "backbone"
import UserModel from "./UserModel"
var UserCollection= Backbone.Collection.extend({
    url:'https://jsonplaceholder.typicode.com/users',
    model:UserModel
})

export default UserCollection