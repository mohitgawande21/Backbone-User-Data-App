
import App from 'components/App';
import UserCollectionView from "./components/UserCollectionView"
import UserCollection from './components/UserCollection'
import FormView from './components/FormView'
App.addRegions({
  form: '#form',
  list: '#list'
})
App.addInitializer( function(){
  App.users = new UserCollection();

  const FormViewInstance = new FormView({ collection: App.users })
  App.form.show(FormViewInstance);

  const UserViewInstance = new UserCollectionView({ collection: App.users })
  App.list.show(UserViewInstance);

});
App.start();
