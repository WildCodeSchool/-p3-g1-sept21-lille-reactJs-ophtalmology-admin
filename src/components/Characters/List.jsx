import {
  List,
  Datagrid,
  TextField,
  EditButton,
  DeleteButton,
} from 'react-admin';

const CharactersList = (props) => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source="name" />
        <TextField source="tier" />
        <TextField source="weapon" />
        <TextField source="attribute" />
        <TextField source="species" />
        <EditButton basePath="/characters" />
        <DeleteButton basePath="/characters" />
      </Datagrid>
    </List>
  );
};

export default CharactersList;
