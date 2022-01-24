import { Create, SimpleForm, TextInput } from 'react-admin';

const VideosPost = (props) => {
  return (
    <Create title="Create" {...props}>
      <SimpleForm>
        <TextInput source="url" />
        <TextInput source="title" />
      </SimpleForm>
    </Create>
  );
};

export default VideosPost;
