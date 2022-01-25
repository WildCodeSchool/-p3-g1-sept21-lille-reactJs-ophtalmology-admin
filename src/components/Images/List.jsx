import {
  List,
  Datagrid,
  TextField,
  DeleteButton,
  EditButton,
} from 'react-admin';

const ImagesList = (props) => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source="url" />
        <TextField source="description" />
        <EditButton basepath="/images" />
        <DeleteButton basePath="/images" />
      </Datagrid>
    </List>
  );
};

export default ImagesList;
