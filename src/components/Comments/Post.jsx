import {
  Create,
  SimpleForm,
  TextInput,
  NumberInput,
  DateInput,
} from 'react-admin';

const CommentsPost = (props) => {
  return (
    <Create title="Create" {...props}>
      <SimpleForm>
        <TextInput source="message" />
        <TextInput source="authorName" />
        <NumberInput source="idPages" />
        <DateInput source="date" />
      </SimpleForm>
    </Create>
  );
};

export default CommentsPost;
