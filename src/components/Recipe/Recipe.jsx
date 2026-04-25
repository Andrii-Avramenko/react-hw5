import { Card, Info } from './Recipe.styled'
import { Difficulty } from '../Difficulty/Difficulty'
import { LuAlarmClock, LuChartPie, LuChartNoAxesColumnIncreasing } from "react-icons/lu";

export const Recipe = (props) => {
  return (
    <Card>
      <img src={props.info.imgsrc} alt="" />
      <h2>{props.info.title}</h2>
      <Info>
        <LuAlarmClock /><span>{props.info.time}</span>
        <LuChartPie /><span>{props.info.servings} servings</span>
        <LuChartNoAxesColumnIncreasing /><span>{props.info.calories} calories</span>
      </Info>
      <Difficulty difficulty={props.info.difficulty} />
    </Card>
  );
};
