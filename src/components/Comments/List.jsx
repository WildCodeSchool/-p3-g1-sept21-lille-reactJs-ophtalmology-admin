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
        <TextField source="comment" />
        <DateField source="date" />
        <DeleteButton basePath="/comments" />
      </Datagrid>
    </List>
  );
};

export default CommentsList;
