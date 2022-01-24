import { Edit, SimpleForm, TextField, TextInput } from 'react-admin';

const VideosEdit = (props) => {
  return (
    <Edit title="Edition" {...props}>
      <SimpleForm>
        <TextField source="id" />
        <TextInput source="url" />
        <TextInput source="title" />
      </SimpleForm>
    </Edit>
  );
};

export default VideosEdit;
