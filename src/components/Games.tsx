import React, { useState, useEffect, useCallback } from 'react';
import { Gamepad2 } from 'lucide-react';

// TicTacToe Game Component
const TicTacToe = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  const handleClick = (i: number) => {
    if (calculateWinner(board) || board[i]) return;
    const newBoard = board.slice();
    newBoard[i] = xIsNext ? 'X' : 'O';
    setBoard(newBoard);
    setXIsNext(!xIsNext);
  };

  const renderSquare = (i: number) => (
    <button
      className="w-16 h-16 border border-gray-300 dark:border-gray-700 text-2xl font-bold bg-white dark:bg-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
      onClick={() => handleClick(i)}
    >
      {board[i]}
    </button>
  );

  const winner = calculateWinner(board);
  const status = winner
    ? `Winner: ${winner}`
    : board.every(square => square)
    ? 'Draw!'
    : `Next player: ${xIsNext ? 'X' : 'O'}`;

  return (
    <div className="flex flex-col items-center">
      <div className="mb-4 text-lg font-semibold dark:text-white">{status}</div>
      <div className="grid grid-cols-3 gap-1">
        {[0, 1, 2].map(row => (
          <div key={row} className="flex">
            {[0, 1, 2].map(col => renderSquare(row * 3 + col))}
          </div>
        ))}
      </div>
      <button
        className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        onClick={() => setBoard(Array(9).fill(null))}
      >
        Reset Game
      </button>
    </div>
  );
};

// Snake Game Component
const SnakeGame = () => {
  const GRID_SIZE = 20;
  const CELL_SIZE = 20;
  const INITIAL_SNAKE = [{ x: 10, y: 10 }];
  const INITIAL_FOOD = { x: 15, y: 15 };
  const INITIAL_DIRECTION = { x: 1, y: 0 };

  const [snake, setSnake] = useState(INITIAL_SNAKE);
  const [food, setFood] = useState(INITIAL_FOOD);
  const [direction, setDirection] = useState(INITIAL_DIRECTION);
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);

  const moveSnake = useCallback(() => {
    if (gameOver) return;

    const newSnake = [...snake];
    const head = {
      x: (newSnake[0].x + direction.x + GRID_SIZE) % GRID_SIZE,
      y: (newSnake[0].y + direction.y + GRID_SIZE) % GRID_SIZE
    };

    if (head.x === food.x && head.y === food.y) {
      setScore(score + 1);
      setFood({
        x: Math.floor(Math.random() * GRID_SIZE),
        y: Math.floor(Math.random() * GRID_SIZE)
      });
    } else {
      newSnake.pop();
    }

    if (newSnake.some(segment => segment.x === head.x && segment.y === head.y)) {
      setGameOver(true);
      return;
    }

    newSnake.unshift(head);
    setSnake(newSnake);
  }, [snake, direction, food, gameOver, score]);

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      switch (e.key) {
        case 'ArrowUp':
          if (direction.y !== 1) setDirection({ x: 0, y: -1 });
          break;
        case 'ArrowDown':
          if (direction.y !== -1) setDirection({ x: 0, y: 1 });
          break;
        case 'ArrowLeft':
          if (direction.x !== 1) setDirection({ x: -1, y: 0 });
          break;
        case 'ArrowRight':
          if (direction.x !== -1) setDirection({ x: 1, y: 0 });
          break;
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    const gameInterval = setInterval(moveSnake, 100);

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
      clearInterval(gameInterval);
    };
  }, [moveSnake, direction]);

  const resetGame = () => {
    setSnake(INITIAL_SNAKE);
    setFood(INITIAL_FOOD);
    setDirection(INITIAL_DIRECTION);
    setGameOver(false);
    setScore(0);
  };

  return (
    <div className="flex flex-col items-center">
      <div className="mb-4 text-lg font-semibold dark:text-white">Score: {score}</div>
      <div
        className="relative bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600"
        style={{ width: GRID_SIZE * CELL_SIZE, height: GRID_SIZE * CELL_SIZE }}
      >
        {snake.map((segment, i) => (
          <div
            key={i}
            className="absolute bg-green-500"
            style={{
              width: CELL_SIZE,
              height: CELL_SIZE,
              left: segment.x * CELL_SIZE,
              top: segment.y * CELL_SIZE
            }}
          />
        ))}
        <div
          className="absolute bg-red-500"
          style={{
            width: CELL_SIZE,
            height: CELL_SIZE,
            left: food.x * CELL_SIZE,
            top: food.y * CELL_SIZE
          }}
        />
      </div>
      {gameOver && (
        <div className="mt-4 text-center">
          <p className="text-red-600 dark:text-red-400 font-bold mb-2">Game Over!</p>
          <button
            className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            onClick={resetGame}
          >
            Play Again
          </button>
        </div>
      )}
      <div className="mt-4 text-sm text-gray-600 dark:text-gray-300">
        <p>Use arrow keys to control the snake</p>
      </div>
    </div>
  );
};

// Memory Game Component
const MemoryGame = () => {
  const [cards, setCards] = useState<number[]>([]);
  const [flipped, setFlipped] = useState<number[]>([]);
  const [solved, setSolved] = useState<number[]>([]);
  const [moves, setMoves] = useState(0);

  useEffect(() => {
    const numbers = [...Array(8)].map((_, i) => i);
    setCards([...numbers, ...numbers].sort(() => Math.random() - 0.5));
  }, []);

  const handleCardClick = (index: number) => {
    if (flipped.length === 2 || flipped.includes(index) || solved.includes(index)) return;

    const newFlipped = [...flipped, index];
    setFlipped(newFlipped);

    if (newFlipped.length === 2) {
      setMoves(moves + 1);
      if (cards[newFlipped[0]] === cards[newFlipped[1]]) {
        setSolved([...solved, ...newFlipped]);
        setFlipped([]);
      } else {
        setTimeout(() => setFlipped([]), 1000);
      }
    }
  };

  const resetGame = () => {
    const numbers = [...Array(8)].map((_, i) => i);
    setCards([...numbers, ...numbers].sort(() => Math.random() - 0.5));
    setFlipped([]);
    setSolved([]);
    setMoves(0);
  };

  return (
    <div className="flex flex-col items-center">
      <div className="mb-4 text-lg font-semibold dark:text-white">Moves: {moves}</div>
      <div className="grid grid-cols-4 gap-2">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`w-16 h-16 flex items-center justify-center text-xl font-bold cursor-pointer rounded transition-all duration-300 transform hover:scale-105
              ${flipped.includes(index) || solved.includes(index)
                ? 'bg-indigo-500 text-white shadow-md'
                : 'bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-transparent'}`}
            onClick={() => handleCardClick(index)}
          >
            {(flipped.includes(index) || solved.includes(index)) && card}
          </div>
        ))}
      </div>
      {solved.length === cards.length && (
        <div className="mt-4 text-center">
          <p className="text-green-600 dark:text-green-400 font-bold mb-2">Congratulations! You won in {moves} moves!</p>
          <button
            className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            onClick={resetGame}
          >
            Play Again
          </button>
        </div>
      )}
    </div>
  );
};

// Helper function for TicTacToe
function calculateWinner(squares: (string | null)[]) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

// Main Games Component
const Games = () => {
  const [selectedGame, setSelectedGame] = useState<string | null>(null);

  const games = [
    {
      id: 'tictactoe',
      title: 'Tic Tac Toe',
      description: 'Classic game of X\'s and O\'s',
      icon: '❌⭕'
    },
    {
      id: 'snake',
      title: 'Snake Game',
      description: 'Classic snake game with modern controls',
      icon: '🐍'
    },
    {
      id: 'memory',
      title: 'Memory Game',
      description: 'Test your memory by matching cards',
      icon: '🧠'
    },
  ];

  const renderSelectedGame = () => {
    switch (selectedGame) {
      case 'tictactoe':
        return <TicTacToe />;
      case 'snake':
        return <SnakeGame />;
      case 'memory':
        return <MemoryGame />;
      default:
        return null;
    }
  };

  return (
    <section id="games" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <p className="text-base text-indigo-600 dark:text-indigo-400 font-semibold tracking-wide uppercase">Recreation</p>
          <h2 className="mt-2 text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl flex items-center justify-center gap-2">
            <Gamepad2 className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />
            Fun & Games
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 dark:text-gray-300 lg:mx-auto">
            Take a break and enjoy these mini-games I've created! Showcasing interactive development skills.
          </p>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {games.map((game) => (
            <div
              key={game.id}
              className="bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden cursor-pointer transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
              onClick={() => setSelectedGame(game.id)}
            >
              <div className="bg-gradient-to-r from-indigo-500 to-purple-600 h-8"></div>
              <div className="p-6">
                <div className="text-4xl mb-4">{game.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{game.title}</h3>
                <p className="mt-2 text-gray-500 dark:text-gray-400">{game.description}</p>
                <button className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 transition-colors duration-300">
                  Play Now
                </button>
              </div>
            </div>
          ))}
        </div>

        {selectedGame && (
          <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
            <div className="bg-white dark:bg-gray-900 rounded-lg max-w-lg w-full shadow-2xl transform transition-all duration-300 animate-fadeIn">
              <div className="bg-gradient-to-r from-indigo-500 to-purple-600 h-2 rounded-t-lg"></div>
              <div className="p-8">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {games.find(g => g.id === selectedGame)?.title}
                  </h3>
                  <button
                    onClick={() => setSelectedGame(null)}
                    className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors duration-300"
                  >
                    ✕
                  </button>
                </div>
                {renderSelectedGame()}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Games;