export const sesame = (nth) => {  
  let doors = initDoors();
  
  if(nth === 0) return doors;

  return toggleDoors(doors, nth - 1);
}

const toggleDoors = (doors, nth) => {
  for (let i = 0; i < doors.length; i++) {
    if(i % nth === 0) {
      doors[i] = doors[i] === '#' ? '@' : '#';
    } else {
      doors[i] = doors[i];
    }
  }
  return doors;
}

const initDoors = () => {
  return '########';
}