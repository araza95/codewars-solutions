function rps(p1: string, p2: string): string {
  const winsAgainst: { [key: string]: string } = {
    rock: "scissors",
    paper: "rock",
    scissors: "paper",
  };

  if (p1 === p2) return "Draw!";
  if (!(p1 in winsAgainst) || !(p2 in winsAgainst)) return "Invalid input";

  return winsAgainst[p1] === p2 ? "Player 1 won!" : "Player 2 won!";
}

console.log(rps("scissors", "rock")); // Player 2 won!
