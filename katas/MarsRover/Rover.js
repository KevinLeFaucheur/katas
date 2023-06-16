export const MarsRover = (location, direction, gridSize) => {
  return { location, direction, gridSize };
}

export const Move = (rover, direction) => {
  let dir = rover.direction;
  let loc = rover.location;

  switch (direction) {
    case 'F':
      loc = MoveInDirection(loc, dir, 1);
      break;
    case 'R':
      rover.direction = TurnInDirection(dir, 1);
      break;
    case 'B':
      loc = MoveInDirection(loc, dir, -1);
      break;
    case 'L':
      rover.direction = TurnInDirection(dir, -1);
      break;
    default:
      break;
  }

  return loc;
}

const MoveInDirection = (location, direction, sign) => {
  let [X, Y] = location;

  switch (direction) {
    case 'N': Y += sign; break;
    case 'E': X += sign; break;
    case 'S': Y -= sign; break;
    case 'W': X -= sign; break;
    default: break;
  }
  return [X,Y];
}

const TurnInDirection = (direction, sign) => {
  let directions = ['N', 'E', 'S', 'W'];

  let current = directions.indexOf(direction) + sign;
  return current < 0 ? 
      directions[directions.length-1] :
    current >= directions.length ?
      directions[0] :
      directions[current];
}