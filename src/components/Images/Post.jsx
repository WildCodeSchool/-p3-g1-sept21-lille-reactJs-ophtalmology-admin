import { Create, SimpleForm, TextInput, NumberInput } from 'react-admin';

const ImagesPost = (props) => {
  return (
    <Create title="Create" {...props}>
      <SimpleForm>
        <TextInput source="url" />
        <TextInput source="description" />
        <NumberInput source="idContents" />
      </SimpleForm>
    </Create>
  );
};

export default ImagesPost;
