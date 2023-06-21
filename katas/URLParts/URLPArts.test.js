import { expect, it } from "@jest/globals";
import { decomposeURL } from "./URLParts";

// Protocols
it('should return http as Protocol', () => {
  let URL = decomposeURL('http://foo.bar.com/foobar.html');
  expect(URL.protocol).toBe('http');
})
it('should return https as Protocol', () => {
  let URL = decomposeURL('https://www.foobar.com:8080/download/install.exe');
  expect(URL.protocol).toBe('https');
})
it('should return ftp as Protocol', () => {
  let URL = decomposeURL('ftp://foo.com:9000/files');
  expect(URL.protocol).toBe('ftp');
})

// Subdomains
// it('should return http as Protocol', () => {
//   let URL = decomposeURL('http://foo.bar.com/foobar.html');
//   expect(URL.subdomain).toBe('foo');
// })
it('should return empty as Subdomain', () => {
  let URL = decomposeURL('ftp://foo.com:9000/files');
  expect(URL.subdomain).toBe('');
})
it('should return www as Subdomain', () => {
  let URL = decomposeURL('https://www.foobar.com:8080/download/install.exe');
  expect(URL.subdomain).toBe('www');
})

// Domain
it('should return foobar as Domain', () => {
  let URL = decomposeURL('https://www.foobar.com:8080/download/install.exe');
  expect(URL.domain).toBe('foobar.com');
})

// Port
it('should return 8080 as Port', () => {
  let URL = decomposeURL('https://www.foobar.com:8080/download/install.exe');
  expect(URL.port).toBe('8080');
})

// Path
it('should return "download/install.exe" as Path', () => {
  let URL = decomposeURL('https://www.foobar.com:8080/download/install.exe');
  expect(URL.path).toBe('download/install.exe');
})