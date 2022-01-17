import { Admin, Resource } from 'react-admin';
import dataProvider from './dataProvider';
import authProvider from './authProvider';
import CharactersList from './components/Characters/List';
import CharactersEdit from './components/Characters/Edit';
import CharactersPost from './components/Characters/Post';

function App() {
  return (
    <div className="App">
      <Admin authProvider={authProvider} dataProvider={dataProvider}>
        <Resource
          name="characters"
          list={CharactersList}
          edit={CharactersEdit}
          create={CharactersPost}
        />
      </Admin>
    </div>
  );
}

export default App;
