import React from 'react';
import {Route, Switch} from "react-router-dom"

import Header from "./components/header/Header"
import PageNav from "./components/pagenav/PageNav"
import StreamsHome from "./pages/streams/streams-home"
import StreamCreate from "./pages/streams/streams-create"
import StreamDelete from "./pages/streams/streams-delete"
import StreamEdit from "./pages/streams/streams-edit"
import StreamList from "./pages/streams/streams-list"
import StreamShow from "./pages/streams/streams-show"
import Register from "./pages/reg-sign/Register"

function App() {
  return (
    <div className="main-app">
      <Header />
      <div className="main-app__sites">
        <PageNav />
        <Switch>
          <Route path="/" exact component={StreamsHome}/>
          <Route path="/streams" exact component={StreamList} />
          <Route path="/streams/delete/:id" exact component={StreamDelete} />
          <Route path="/streams/create" exact component={StreamCreate} />
          <Route path="/streams/edit/:id" exact component={StreamEdit} />
          <Route path="/streams/show/:id" exact component={StreamShow} />
          <Route path="/register" exact component={Register} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
