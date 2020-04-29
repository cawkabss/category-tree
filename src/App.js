import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";

import { Categories as EKTree } from './EKTree';
import { Categories as Tree } from './Tree';
import { data } from './data';


function App() {
  return (
    <BrowserRouter>
      <Switch>
          <Route path="/EKTree">
            <EKTree categories={data}/>
          </Route>
          <Route path="/tree">
            <Tree categories={data}/>
          </Route>
        </Switch>
    </BrowserRouter>
  );
}

export default App;
