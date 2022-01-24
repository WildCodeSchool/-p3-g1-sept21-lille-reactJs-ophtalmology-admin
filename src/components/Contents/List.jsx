import {
  List,
  Datagrid,
  TextField,
  DeleteButton,
  EditButton,
} from 'react-admin';

const ContentsList = (props) => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source="title" />
        <TextField source="text" />
        <EditButton basepath="/contents" />
        <DeleteButton basePath="/contents" />
      </Datagrid>
    </List>
  );
};

export default ContentsList;
