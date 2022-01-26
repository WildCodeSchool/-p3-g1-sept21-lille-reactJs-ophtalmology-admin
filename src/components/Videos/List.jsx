import { List, Datagrid, TextField, DeleteButton } from 'react-admin';

const VideosList = (props) => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source="url" />
        <TextField source="title" />
        <DeleteButton basePath="/videos" />
      </Datagrid>
    </List>
  );
};

export default VideosList;
