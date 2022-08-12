
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

  // var UserCollectionLocal = localStorage.getItem('UserCollection')
  // var usercollection = new UserCollection(JSON.parse(UserCollectionLocal))

  var usercollection = new UserCollection()
  var formview = new FormView({ collection: usercollection })
  App.form.show(formview)

  // var userview = new UserView({ model })
  // App.list.show(userview)

  var userview = new UserCollectionView({ collection: usercollection })
  App.list.show(userview)
});

App.start();
