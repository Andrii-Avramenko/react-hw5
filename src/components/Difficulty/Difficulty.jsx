import { DifficultyDiv, DifficultyBtn } from "./Difficulty.styled";

export const Difficulty = (props) => {
  let difficulty = "";
  switch (props.difficulty) {
    case 0:
      difficulty = "Easy";
      break;
    case 1:
      difficulty = "Medium";
      break;
    case 3:
      difficulty = "Hard";
      break;
    default:
      difficulty = "Easy";
  }

  return (
    <DifficultyDiv>
      <h2>Difficulty</h2>
      <div>
        <DifficultyBtn type="button" className={difficulty === "Easy" ? " active" : ""}>Easy</DifficultyBtn>
        <DifficultyBtn type="button" className={difficulty === "Medium" ? " active" : ""}>Medium</DifficultyBtn>
        <DifficultyBtn type="button" className={difficulty === "Hard" ? " active" : ""}>Hard</DifficultyBtn>
      </div>
    </DifficultyDiv>
  );
};
