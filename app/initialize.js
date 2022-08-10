
import App from 'components/App';
import UserView from './components/UserView'
import model from './components/UserModel'
App.addRegions({
  list:"#list"
})
App.addInitializer( function(){

var userview=new UserView({model})
App.list.show(userview)

});
App.start();
