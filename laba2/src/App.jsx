import { useState } from 'react';
import { Button, Box, Typography } from '@mui/material';
import { styled } from '@mui/system';

const DarkGreenBackground = styled(Box)({
  backgroundColor: '#004d00',
  height: '90%',
  width: '183.3%',
  padding: '20px',
});

const LightGreenButton = styled(Button)({
  color: '#33cc33',
  border: '2px solid white', // Добавляем белый контур
  fontSize: '30px',
  width: '100px',
  height: '100px',
  '&:hover': {
    backgroundColor: '#078C07',
  },
});

const GreenButton = styled(Button)({
  color: '#008000',
  border: 'white',
  borderWidth: '50px',
  fontSize: '30px',
  width: '100%',
  height: '600%',
  '&:hover': {
    backgroundColor: '#005500',
  },
});

let turn_count = 0;

function Square({ value, onSquareClick }) {
  return (
    <LightGreenButton onClick={onSquareClick}>{value}</LightGreenButton>
  );
}

function Board({ xIsNext, squares, onPlay }) {
  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = `Победили ${winner}!`;
  } else {
    if (turn_count === 9) {
      status = 'Ничья!';
    } else {
      status = `Ходят ${xIsNext ? 'крестики' : 'нолики'}`;
    }
  }

  function handleClick(i) {
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = 'X';
    } else {
      nextSquares[i] = 'O';
    }
    turn_count++;
    onPlay(nextSquares);
  }

  return (
    <DarkGreenBackground>
      <Typography variant="h4" sx={{ textAlign: 'center', marginBottom: '20px' }}>
        {status}
      </Typography>
      <Box display="flex" flexDirection="column" alignItems="center">
        <Box display="flex">
          <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
          <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
          <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
        </Box>
        <Box display="flex">
          <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
          <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
          <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
        </Box>
        <Box display="flex">
          <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
          <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
          <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
        </Box>
      </Box>
    </DarkGreenBackground>
  );
}

export default function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
  }

  const StyledButton = styled(Button)({
    color: 'white',
    fontWeight: 'bold',
    backgroundColor: '#004D00',
    width: '400px',
    heighgt: '300px',
    right: 115
  });

  const moves = history.map((squares, move) => {
    let description;
    if (move > 0) {
      description = `Вернуться к ${move}-му ходу`;
    } else {
      description = 'Вернуться к началу';
    }
    return (
      <li key={move}>
        <StyledButton onClick={() => jumpTo(move)}>{description}</StyledButton>
      </li>
    );
  });

  return (
    <DarkGreenBackground>
      <Box display="flex" justifyContent="space-between" m={2}>
        <Box>
          <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
        </Box>
        <Box>
          <Typography variant="h5">История ходов:</Typography>
          <ul style={{ listStyleType: 'none', paddingLeft: 0 }}>{moves}</ul>
        </Box>
      </Box>
    </DarkGreenBackground>
  );
}

function calculateWinner(squares) {
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