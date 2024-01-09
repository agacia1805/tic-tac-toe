## Getting started:

To open this app on your local after you cloned the repository, run this command:

```bash
pnpm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## App features:

- player is able to choose their mark - X or O
- after starting a game, the player takes turns with a computer to fill out the board
- when one of the parties (player or computer) wins, the game stops and the result is shown
- player can reset the game by clicking on a button or refreshing the page (if they don't want to change the mark)

## Technical details:

- project created with Next.js template
- language of choice: TypeScript
- styles provided with Tailwind CSS
- determining winner: an array of winning options in v.1 and magic square in v.2
- computer's move is a result of running minimax algorithm in 80% of cases, for the remaining 20% it's randomized (to give the player a chance)

## Possible improvements:

- add option to play with other player in real time instead of the computer
- persistent board's state 
