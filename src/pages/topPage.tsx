//reactモジュールからReact関数と関数コンポーネント
//を作るためのFC(functional component)関数をimport
import React, { FC } from "react";
//defaultでimportされる物には{}をつけない
//defaultでimportされない物には{}をつける

// functional component の定義
// const 変数名:FC = () =>{
//   return(コンポーネントの中身)
// }

const TopPage: FC = () => {
  return (
    <>
      <h2>reactコンポーネントだよ</h2>
    </>
  );
};

// src/index.tsxでimportするためにexport
// defaultはデフォルトでインポートする時の記述
// defaultはimport時に名前を変えても動く
export default TopPage;
