type HangmanWordProps = {
  guessedLetter: string[];
  wordToGuess: string;
  reveal?: boolean;
};

function HangmanWord({
  guessedLetter,
  wordToGuess,
  reveal = false,
}: HangmanWordProps) {
  return (
    <div className="word-container">
      {wordToGuess.split("").map((letter, index) => (
        <span key={index} style={{ borderBottom: "0.1em solid black" }}>
          <span
            style={{
              visibility:
                guessedLetter.includes(letter) || reveal ? "visible" : "hidden",
              color:
                !guessedLetter.includes(letter) && reveal ? "red" : "green",
            }}
          >
            {letter}
          </span>
        </span>
      ))}
    </div>
  );
}

export default HangmanWord;
