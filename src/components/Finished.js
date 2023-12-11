function Finished({ points, totalPoints, dispatch, highscore }) {
  const procentage = (points / totalPoints) * 100;
  let emoji;

  if (procentage === 0) {
    emoji = <span>⛔</span>;
  } else if (procentage <= 30) {
    emoji = <span>☹️</span>;
  } else if (procentage <= 50) {
    emoji = <span>🙄</span>;
  } else if (procentage <= 70) {
    emoji = <span>😏</span>;
  } else if (procentage < 100) {
    emoji = <span>😁</span>;
  } else if (procentage === 100) {
    emoji = <span>🥇</span>;
  }

  return (
    <>
      <p className="result">
        You scored <strong>{points}</strong> out of {totalPoints} wich is (
        {Math.ceil(procentage)}%) {emoji}
      </p>

      <p className="highscore">(Highscore :{highscore} points)</p>

      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "restartQuiz" })}
      >
        Restart quizz
      </button>
    </>
  );
}

export default Finished;
