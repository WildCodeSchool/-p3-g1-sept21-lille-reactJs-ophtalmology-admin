import {
  List,
  Datagrid,
  TextField,
  DateField,
  DeleteButton,
  EditButton,
} from 'react-admin';

const VideosList = (props) => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source="url" />
        <DateField source="title" />
        <EditButton basePath="/videos" />
        <DeleteButton basePath="/videos" />
      </Datagrid>
    </List>
  );
};

export default VideosList;
