import {
  List,
  Datagrid,
  TextField,
  DateField,
  DeleteButton,
} from 'react-admin';

const CommentsList = (props) => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source="id" />
        <TextField source="message" />
        <TextField source="authorName" />
        <DateField source="date" />
        <DeleteButton basePath="/comments" />
      </Datagrid>
    </List>
  );
};

export default CommentsList;
