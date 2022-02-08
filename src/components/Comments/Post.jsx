import {
  Create,
  SimpleForm,
  TextInput,
  NumberInput,
  DateInput,
  CheckboxGroupInput,
} from 'react-admin';

const CommentsPost = (props) => {
  return (
    <Create title="Create" {...props}>
      <SimpleForm>
        <TextInput source="message" />
        <TextInput source="authorName" />
        <NumberInput source="idPages" />
        <DateInput source="date" />
        <CheckboxGroupInput
          source="idParent"
          choices={[{ id: '1', name: 'Admin' }]}
        />
      </SimpleForm>
    </Create>
  );
};

export default CommentsPost;
