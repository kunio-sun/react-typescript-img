import React, { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Button from "@material-ui/core/Button"
import { createStyles, makeStyles } from "@material-ui/core/styles";

import firebase from "../firebase";
import TopHeader from "../components/topPage/topHeader";
import { TileData } from "../types/types";

//style
const useStyles = makeStyles(() =>
  createStyles({
    tileImage: {
      height: "436px",
      width: "436px"
    },
    main: {
      textAlign: "center",
      margin: "5%",
    }
  })
);

const DownloadPage: FC = () => {
  const { keyword } = useParams();
  //style
  const classes = useStyles();
  //useState() 
  const [data, setData] = useState<TileData[]>([]);


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

  //取得データをまとめる
  const displayImage = () => {
    return (
      <div>
        {data.map((tile) => (
          <div>
            <img className={classes.tileImage} src={tile.image} alt={tile.title} />
          </div>
        ))

        }
      </div>
    )
  }

  const downloadButton = () => {
    return (
      <div>
        {data.map((tile) => (
          // variant= ボタンを盛り上げて表示materialUI その他 text,outlineなど
          //href クラウドストレージのdawnloadのzip file urlが読み込まれる
          <Button variant="contained" href={tile.downloadUrl}>
            画像ダウンロード
          </Button>
        ))}
      </div>
    )
  }

  return (
    <div>
      <TopHeader />
      <div className={classes.main}>
        {displayImage()}
        {downloadButton()}
      </div>

    </div>
  )
}

export default DownloadPage;