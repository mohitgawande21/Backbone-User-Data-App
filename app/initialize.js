
import App from 'components/App';
import UserView from './components/UserView'
import UserModel from './components/UserModel'
App.addRegions({
  list:"#list"
})
App.addInitializer( function(){
    var model =new UserModel({
      name:'mohit',
      age:23
    })
var userview=new UserView({model})
App.list.show(userview)

});
App.start();
