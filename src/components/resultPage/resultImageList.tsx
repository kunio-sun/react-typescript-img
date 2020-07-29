import React, { FC, useState, useEffect } from "react";
//urlの値取得のためにuseParams()を使う
import { useHistory, useParams } from "react-router-dom";

//createStyles
import { createStyles, makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

//ファイアベース設定ファイルをインポート
import firebase from "../../firebase";
//オブジェクトの型をインポート
import { TileData } from "../../types/types";
// import { title } from "process";

//style
const useStyles = makeStyles(() =>
  createStyles({
    root: {
      display: "flex",
      flexWrap: "wrap",
      width: "80%",
      textAlign: "center",
      marginTop: "2%",
    },
    tileImage: {
      height: "218px",
      width: "218px",
    },
  })
);

const ImageItemList: FC = () => {
  //useStateを用いてtiledata[]の変数dataと値書き換えのsetData()
  //を作り変数dataに初期値として空配列を与える
  const [data, setData] = useState<TileData[]>([]);

  //useParamsを使ってキーワドの内容を取得
  //topPage.tsxで使用した:keywordが使用される
  const { keyword } = useParams();

  //スタイルの基盤
  const classes = useStyles();

  //ButtonタグrouteHistoryで使うhistoryの定義
  const history = useHistory();

  // 非同期関数を作りたい時は引数の前にasyncを入力
  // 引数searchWordは文字又は未定義を示す
  const getData = async (searchWord: string | undefined) => {
    //接続先 firebase コレクション名を指定（今回はfireDate)
    const db = firebase.firestore();
    const fileDataRef = db.collection("fileData");
    //取得した参照データ(fileDataRef)を使ってデータ取得指定
    //where() → ファイルデータコレクションから条件一致したdocumentを探す
    //where(フィールド名,他 同じ 以上など, )
    //array-contains → 1つめの引数内に3つ目の引数が含まれる全ドキュメントを返す
    // getData関数の引数であるserchWordを指定しているので任意の文字列で検索可能
    const searchdData = fileDataRef.where(
      "keyword",
      "array-contains",
      searchWord
    );

    //指定したデータを変数に格納
    //awaitはasync（非同期関数)の中で使える関数、awaitが終わるまで他の処理をとめる
    const snapShot = await searchdData.get();
    //snapShotを使いやすいオブジェクト型の配列にする
    const temporaryData: object[] = [];
    //snapshot.docsには検索ワードが含まれるドキュメントが全て入る
    //map(() =>{})で配列を繰り返す
    snapShot.docs.map((doc) => {
      return temporaryData.push(doc.data());
    });

    //ImageItemListコンポーネント全体でtemporaryDataを使える様に
    //reacthooks のuseState()を作るtypes/type.ts
    //setData関数を使ってTileDataの配列方に変換されたtemporaryDataの
    //値を変数Dataに格納する useStateのsetData関数
    // asは型変換のための記述
    setData(temporaryData as TileData[]);
  };

  //更新された時に無限にgetdataが呼ばれない様にする
  useEffect(() => {
    //keywordを引数としてgetDate()を発動
    getData(keyword);
    //,[]でuseeffectの記述が更新されても呼び出されず最初だけ呼ばれる
  }, [keyword]);

  return (
    <div className={classes.root}>
      {/* dataには配列でドキュメントが格納される */}
      {data.map((tile) => (
        <div>
          {/* 無名関数というその場で使える関数 */}
          <Button onClick={() => history.push("/download/" + tile.title)}>
            {/* フィールドimageとフィールドtitleを指定 */}
            <img
              src={tile.image}
              alt={tile.title}
              className={classes.tileImage}
            />
          </Button>
          <h3>{tile.title}</h3>
        </div>
      ))}
    </div>
  );
};

export default ImageItemList;
