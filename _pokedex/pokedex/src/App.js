import React from "react";
import Router from "./routers/Router"
import GlobalState from "./global/GlobalState";


function App() {
  return (
    <GlobalState>
      <Router />
    </GlobalState>
  )
}

export default App;