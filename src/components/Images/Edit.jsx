import { Edit, SimpleForm, TextField, TextInput } from 'react-admin';

const ImagesEdit = (props) => {
  return (
    <Edit title="Edition" {...props}>
      <SimpleForm>
        <TextField source="id" />
        <TextInput source="url" />
        <TextInput source="description" />
      </SimpleForm>
    </Edit>
  );
};

export default ImagesEdit;
