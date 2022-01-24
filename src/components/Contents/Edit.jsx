import { Edit, SimpleForm, TextField, TextInput } from 'react-admin';

const ContentsEdit = (props) => {
  return (
    <Edit title="Edition" {...props}>
      <SimpleForm>
        <TextField source="id" />
        <TextInput source="title" />
        <TextInput source="text" />
      </SimpleForm>
    </Edit>
  );
};

export default ContentsEdit;
