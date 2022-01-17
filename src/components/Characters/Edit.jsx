import {
  Edit,
  SimpleForm,
  TextField,
  TextInput,
  SelectInput,
  ReferenceInput,
} from 'react-admin';

const CharactersEdit = (props) => {
  return (
    <Edit title="Edition" {...props}>
      <SimpleForm>
        <TextField source="id" />
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
          allowEmpty
        >
          <SelectInput optionText="name" />
        </ReferenceInput>
        <ReferenceInput
          label="Lambda Form"
          source="id_lambda"
          reference="characters"
          allowEmpty
        >
          <SelectInput optionText="name" />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};

export default CharactersEdit;
