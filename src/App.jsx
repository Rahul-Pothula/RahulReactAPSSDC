import React from "react";
import { Switch, Route } from "react-router-dom";

import CardList from "./components/card/card-list.component";
import Resume from "./components/resume/resume.component";

import _users from "./users.json";

const App = () => {
  const [users, setUsers] = React.useState([]);

  // fetch("https://jsonplaceholder.typicode.com/users")
  //   .then((res) => res.json())
  //   .then((data) => users.length === 0 && setUsers(data.slice(0, 2)));

  users.length === 0 && setUsers(_users.slice(0, 2));

  return (
    <>
      <Switch>
        <Route
          path="/resume/:id"
          render={(props) => <Resume users={users} {...props} />}
        />
        <Route
          path="/"
          render={(props) => <CardList users={users} {...props} />}
        />
      </Switch>
    </>
  );
};

export default App;
