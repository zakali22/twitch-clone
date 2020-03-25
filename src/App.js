import React from 'react';
import {Route, Switch} from "react-router-dom"

import Header from "./components/header/Header"
import Homepage from "./pages/homepage/homepage"
import StreamCreate from "./pages/streams/streams-create"
import StreamDelete from "./pages/streams/streams-delete"
import StreamEdit from "./pages/streams/streams-edit"
import StreamList from "./pages/streams/streams-list"
import StreamShow from "./pages/streams/streams-show"

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route path="/" exact component={Homepage} />
        <Route path="/streams" exact component={StreamList} />
        <Route path="/streams/delete" exact component={StreamDelete} />
        <Route path="/streams/create" exact component={StreamCreate} />
        <Route path="/streams/edit" exact component={StreamEdit} />
        <Route path="/streams/show" exact component={StreamShow} />

      </Switch>
    </div>
  );
}

export default App;
