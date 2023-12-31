import { expect, it } from "@jest/globals";
import { MarsRover, Move } from "./Rover";

it('should make a rover { location, direction, gridSize }', () => {
  expect(MarsRover([0,0], 'E', [50,50]))
  .toStrictEqual({ 
    location: [0,0],
    direction: 'E',
    gridSize: [50,50] 
  });
})

// Moving
it('should move forward by 1', () => {
  let rover = MarsRover([0,0], 'E', [50,50]);
  expect(Move(rover, 'F')).toStrictEqual([1,0]);
})
it('should move forward by 1', () => {
  let rover = MarsRover([0,0], 'S', [50,50]);
  expect(Move(rover, 'F')).toStrictEqual([0,-1]);
})

it('should move backward by 1', () => {
  let rover = MarsRover([0,0], 'N', [50,50]);
  expect(Move(rover, 'B')).toStrictEqual([0,-1]);
})

it('should move backward by 1', () => {
  let rover = MarsRover([0,0], 'W', [50,50]);
  expect(Move(rover, 'B')).toStrictEqual([1,0]);
})

// Turning
it('should turn from west to south', () => {
  let rover = MarsRover([0,0], 'W', [50,50]);
  Move(rover, 'L');
  expect(rover.direction).toBe('S');
})

it('should turn from west to south', () => {
  let rover = MarsRover([0,0], 'N', [50,50]);
  Move(rover, 'R');
  expect(rover.direction).toBe('E');
})

// Multiple commands
it('should move twice forward', () => {
  let rover = MarsRover([0,0], 'S', [50,50]);
  expect(Move(rover, 'FF')).toStrictEqual([0,-2]);
})
it('should move back to 0,0', () => {
  let rover = MarsRover([0,0], 'E', [50,50]);
  expect(Move(rover, 'FFLFFLFFLFF')).toStrictEqual([0,0]);
})