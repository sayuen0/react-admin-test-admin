import { Admin, Resource, ShowGuesser } from "react-admin";
import { dataProvider } from "./dataProvider";
import { UserList } from "./users";
import { PostCreate, PostEdit, PostList } from "./posts";

import PostIcon from "@mui/icons-material/Book";
import UserIcon from "@mui/icons-material/Group";
import { Dashboard } from "./dashboard";
import { authProvider } from "./authProvider";
import polyglotI18nProvider from "ra-i18n-polyglot";
import japaneseMessages from "@bicstone/ra-language-japanese";

const i18nProvider = polyglotI18nProvider(() => japaneseMessages, "ja");

export const App = () => (
  <Admin
    i18nProvider={i18nProvider}
    dataProvider={dataProvider}
    dashboard={Dashboard}
    authProvider={authProvider}
  >
    <Resource
      name="posts"
      list={PostList}
      create={PostCreate}
      edit={PostEdit}
      icon={PostIcon}
    ></Resource>
    <Resource
      name="users"
      list={UserList}
      show={ShowGuesser}
      icon={UserIcon}
      recordRepresentation="name"
    ></Resource>
  </Admin>
);
