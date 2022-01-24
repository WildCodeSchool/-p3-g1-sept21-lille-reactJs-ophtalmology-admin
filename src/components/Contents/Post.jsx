import { Create, SimpleForm, TextInput, NumberInput } from 'react-admin';

const ContentsPost = (props) => {
  return (
    <Create title="Create" {...props}>
      <SimpleForm>
        <TextInput source="title" />
        <TextInput source="text" />
        <NumberInput source="idPages" />
      </SimpleForm>
    </Create>
  );
};

export default ContentsPost;
