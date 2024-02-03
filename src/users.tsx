import {Datagrid, EmailField, List, SimpleList, TextField, UrlField} from 'react-admin';
import MyUrlField from "./components/fields/myUrlField";

export const UserList = () => (
  <List>
    <Datagrid rowClick="show">
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="username" />
      <EmailField source="email" />
      <TextField source="address.street" />
      <TextField source="phone" />
      {/*<UrlField source="website" />*/}
      <MyUrlField source="website" />
      <TextField source="company.name" />
    </Datagrid>
  </List>
);
