//hooksからuseState(入力キーワド保持)をimport
import React, { FC, useState } from "react";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import pencil from "../../asets/images/pencil.jpg";
//material UI paper
import Paper from "@material-ui/core/Paper";
//material UI icon
import SeachIcon from "@material-ui/icons/Search";
import IconButton from "@material-ui/core/IconButton";
//文字を打ち込むinput base
import InputBase from "@material-ui/core/InputBase";
//ページ遷移させるreact router dom
import { useHistory } from "react-router-dom";

const useStyle = makeStyles(() =>
  createStyles({
    //自分の好きな名前をかける
    background: {
      //javascript又はtypescriptを文字列に入れる時は
      //`abc${}`に変数名
      backgroundImage: `url(${pencil})`,
      backgroundSize: "cover",
      backgroundPosition: "bottom center",
      height: "100vh",
    },
    paper: {
      position: "relative",
      marginLeft: "auto",
      marginRight: "auto",
      top: "33%",
      width: "45%",
    },
    inputbase: {
      width: "80%",
    },
  })
);

const TopMain: FC = () => {
  // useStyle 関数を classesに格納しcomponentの中で使用可に
  const classes = useStyle();

  //const [値を保持する変数, 変数の値を変える関数] = useState(初期値);
  const [keyword, setKeyword] = useState("");
  //keywordに検索窓のvalueを格納
  //handleChange関数の引数は react.・・・InputElement>型のeventになる
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // console.log(event.target.value);
    setKeyword(event.target.value);
  };

  const history = useHistory();
  // component="form" と onSubmit={handeleSubmit}で発火
  const handleSubmit = () => {
    //現在のurlに/seach/入力されたキーワドを付け足す
    history.push("/seach/" + keyword);
  };

  return (
    <>
      <div className={classes.background}>
        <Paper
          className={classes.paper}
          component="form"
          onSubmit={handleSubmit}
        >
          <IconButton type="submit">
            <SeachIcon />
          </IconButton>
          <InputBase
            placeholder="検索する文字列を入力してください"
            className={classes.inputbase}
            onChange={handleChange}
          />
        </Paper>
      </div>
    </>
  );
};

export default TopMain;
