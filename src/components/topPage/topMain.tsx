import React, { FC } from "react";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import pencil from "../../asets/images/pencil.jpg";
//material UI paper
import Paper from "@material-ui/core/Paper";
//material UI icon
import SeachIcon from "@material-ui/icons/Search";
import IconButton from "@material-ui/core/IconButton";
//文字を打ち込むinput base
import InputBase from "@material-ui/core/InputBase";

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

  return (
    <>
      <div className={classes.background}>
        <Paper className={classes.paper}>
          <IconButton type="submit">
            <SeachIcon />
          </IconButton>
          <InputBase
            placeholder="検索する文字列を入力してください"
            className={classes.inputbase}
          />
        </Paper>
      </div>
    </>
  );
};

export default TopMain;
