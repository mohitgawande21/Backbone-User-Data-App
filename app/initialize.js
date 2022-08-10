
import App from 'components/App';
import UserView from './components/UserView'
import FormView from './components/FormView'
import model from './components/UserModel'
import UserCollection from './components/UserCollection'
import UserCollectionView from './components/UserCollectionView'
App.addRegions({
  form: '#form',
  list: "#list"
})
App.addInitializer(function () {
  App.users=new UserCollection()

  var formview = new FormView({collection:App.users})
  App.form.show(formview)


  // var userview = new UserView({ model })
  // App.list.show(userview)

  var userview= new UserCollectionView({collection:App.users})
  App.list.show(userview)
});
App.start();
