import { Admin, Resource } from 'react-admin';
import dataProvider from './dataProvider';
import CommentsList from './components/Comments/List';
import CommentsPost from './components/Comments/Post';
import ContentsList from './components/Contents/List';
import ContentsEdit from './components/Contents/Edit';
import ContentsPost from './components/Contents/Post';
import VideosList from './components/Videos/List';
import VideosEdit from './components/Videos/Edit';
import VideosPost from './components/Videos/Post';

function App() {
  return (
    <div className="App">
      <Admin dataProvider={dataProvider}>
        <Resource name="comments" list={CommentsList} create={CommentsPost} />
        <Resource
          name="contents"
          list={ContentsList}
          edit={ContentsEdit}
          create={ContentsPost}
        />
        <Resource
          name="videos"
          list={VideosList}
          edit={VideosEdit}
          create={VideosPost}
        />
      </Admin>
    </div>
  );
}

export default App;
