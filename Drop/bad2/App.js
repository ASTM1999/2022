import React from "react";

import Menu from "./Menu";
import Repo from "./Repo";
import Repos from "./Repos";

function App() {
  return (
    <div className="container-lg my-4">
      <Menu />
      <div className="Box">
        <Repo />
      </div>
    </div>
  );
}

export default App;
