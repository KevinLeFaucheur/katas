export const validate = (string) => {

  let count = 0
  let i = 0;

  for (let i = 0; i < string.length; i++) {

    switch(string.charAt(i)) {

      case '[':
        if(count >= 0) count++;
        break;

      case ']':
        count--;
        break;

      default:
    }
    
  }
  return count;
}