export const validateIP = (IP) => {
  let bytes = IP.split('.');
  let valid = true;

  if(IP === '0.0.0.0' 
    || IP === '255.255.255.255'
    || bytes.length !== 4) 
    return false;

  for (let byte in bytes) {
    let parsedByte = parseInt(bytes[byte]);
    if(parsedByte < 0 || parsedByte > 255) {
      valid = false;
    }
    if(bytes[byte].split('').length > 1 && bytes[byte].charAt(0) === '0') {
      valid = false;
    }
  }

  return valid;
}