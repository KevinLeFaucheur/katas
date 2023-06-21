export const decomposeURL = (URL) => {
  let protocol = Protocol(URL.split('://')[0]);
  let subdomain = Subdomain(URL.split('://')[1].split('.'));
  let domain = Domain(URL.split('://')[1].split('.'));
  let defaultPort = DefaultPort(subdomain);
  let port = Port(URL.split('://')[1]) ?? defaultPort;
  let path = Path(URL.split('://')[1]);


  return { protocol, subdomain, domain, port, path };
}

const Protocol = (string) => {
  switch (string) {
    case 'http': return 'http';
    case 'https': return 'https';
    case 'ftp': return 'ftp';
    case 'sftp': return 'sftp';
  }
}

const Subdomain = (string) => {
  switch (string.length) {
    case 1: 
    case 2: return '';
    default: return string[0];
  }
}

const Domain = (string) => {
  let domain = string.split(/(?<=.com|.net|.org|.int|.edu|.gov|.mil)/);

  if (domain.length === 1) {
    return domain
  }

  switch (string.length) {
    case 1: return string[0];
    case 2: return string[1];
    default: return string[1];
  }
}

const DefaultPort = (subdomain) => {
  switch (subdomain) {
    case 'http': return '80';
    case 'https': return '443';
    case 'ftp': return '21';
    case 'sftp': return '22';
  }
}

const Port = (string) => {
  let result = string.match(/(?<=\:)\d{2,4}/);
  return result === null ? null : result[0];
}

const Path = (string) => {
  // let result = string.match(/(?<=\/)\w+(\?)$/);
  let result = string.match(/(?<=\/)(.*)/);
  console.log(result);
  return result === null ? '' : result[0];
}