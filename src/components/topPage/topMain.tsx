import React, { FC } from "react";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import pencil from "../../asets/images/pencil.jpg";

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
  })
);

const TopMain: FC = () => {
  // useStyle 関数を classesに格納しcomponentの中で使用可に
  const classes = useStyle();

  return (
    <>
      <div className={classes.background}>a</div>
    </>
  );
};

export default TopMain;
