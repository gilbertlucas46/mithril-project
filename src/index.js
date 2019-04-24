import m from "mithril";

import UserList from "./views/userList"
import UserForm from "../models/userForm"

m.route(document.body, "/list", {
    "/list": UserList,
    "/edit/:id": UserForm,
})
