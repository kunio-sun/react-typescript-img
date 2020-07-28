import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import App from "./App";
import * as serviceWorker from "./serviceWorker";
//topPage ファンクションコンポーネントをimport
//default exportは名前を変えてもimportできる
import TopPage from "./pages/topPage";

ReactDOM.render(
  <React.StrictMode>
    <TopPage />
    {/* <App /> */}
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
