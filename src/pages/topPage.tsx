//reactモジュールからReact関数と関数コンポーネント
//を作るためのFC(functional component)関数をimport
import React, { FC } from "react";
//defaultでimportされる物には{}をつけない
//defaultでimportされない物には{}をつける

// headerコンポーネント
import TopHeader from "../components/topPage/topHeader";
// mainコンポーネント
import TopMain from "../components/topPage/topMain";

//asでbrouserRouterをrouterとして扱う宣言
import { BrowserRouter, Switch, Route } from "react-router-dom";
//resultpage
import ResultPage from "./resultPage";

import DownloadPage from "./downloadPage"

const TopPage: FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        {/* pathが/ 最初のページはtopHeaderとTopMainを使う*/}
        <Route exact path="/">
          <TopHeader />
          <TopMain />
        </Route>
      </Switch>

      {/* パスが/seach/:keywordなら、このタグ内の値を表示 */}
      <Route path="/search/:keyword" exact>
        <ResultPage />
      </Route>

      {/* urlが/download/なんらかのキーワド　の場合downloadPageを表示 */}
      <Route path="/download/:keyword" exact>
        <DownloadPage />
      </Route>
    </BrowserRouter>
  );
};

// src/index.tsxでimportするためにexport
// defaultはデフォルトでインポートする時の記述
// defaultはimport時に名前を変えても動く
export default TopPage;
