import {
  Create,
  SimpleForm,
  TextInput,
  SelectInput,
  ReferenceInput,
} from 'react-admin';

const CharactersPost = (props) => {
  return (
    <Create title="Create" {...props}>
      <SimpleForm>
        <TextInput source="name" />
        <SelectInput
          source="tier"
          choices={[
            { id: 'Z', name: 'Z' },
            { id: 'SS', name: 'SS' },
            { id: 'S', name: 'S' },
            { id: 'A', name: 'A' },
            { id: 'B', name: 'B' },
          ]}
        />
        <TextInput source="weapon" />
        <TextInput source="attribute" />
        <TextInput source="species" />
        <ReferenceInput
          label="Base Form"
          source="id_base"
          reference="characters"
        >
          <SelectInput optionText="name" optionValue="id" allowEmpty />
        </ReferenceInput>
        <ReferenceInput
          label="Lambda Form"
          source="id_lambda"
          reference="characters"
        >
          <SelectInput optionText="name" optionValue="id" />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};

export default CharactersPost;
