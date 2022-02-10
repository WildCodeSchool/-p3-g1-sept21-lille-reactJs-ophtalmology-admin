import {
  Create,
  SimpleForm,
  TextInput,
  NumberInput,
  ReferenceInput,
  SelectInput,
} from 'react-admin';

const CommentsPost = (props) => {
  return (
    <Create title="Create" {...props}>
      <SimpleForm>
        <TextInput source="message" />
        <TextInput source="authorName" />
        <NumberInput source="idPages" />
        <ReferenceInput
          label="Commentaire"
          source="idParent"
          reference="comments"
        >
          <SelectInput optionText="message" />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};

export default CommentsPost;
