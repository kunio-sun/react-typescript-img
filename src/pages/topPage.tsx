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
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// functional component の定義
// const 変数名:FC = () =>{
//   return(コンポーネントの中身)
// }
const TopPage: FC = () => {
  return (
    <Router>
      <Switch>
        {/* pathが/ 最初のページはtopHeaderとTopMainを使う*/}
        <Route exact path="/">
          <TopHeader />
          <TopMain />
        </Route>
      </Switch>

      {/* パスが/seach/:keywordなら、このタグ内の値を表示 */}
      <Route path="/search/:keyword" exact>
        検索結果
      </Route>
    </Router>
  );
};

// src/index.tsxでimportするためにexport
// defaultはデフォルトでインポートする時の記述
// defaultはimport時に名前を変えても動く
export default TopPage;
