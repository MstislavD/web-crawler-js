const { test, expect } = require('@jest/globals')

const { normalizeURL, getURLsFromHTML } = require('./crawl.js')


test('normalize URLs', () => {
    expect(normalizeURL("http://blog.boot.dev/path")).toBe("blog.boot.dev/path");
    expect(normalizeURL("https://blog.boot.dev/path")).toBe("blog.boot.dev/path");
    expect(normalizeURL("http://blog.boot.dev/path/")).toBe("blog.boot.dev/path");
    expect(normalizeURL("https://blog.boot.dev/path/")).toBe("blog.boot.dev/path");
  });

test('get URLs', () =>{
    const baseURL = 'https://blog.boot.dev'
    const html = '<html> <body> <a href="https://blog.boot.dev"><span>Go to Boot.dev</span></a> </body> </html>'
    const html2 = '<html> <body> <a href="images/image1.jpg"><span>Go to Boot.dev</span></a> </body> </html>'
    expect(getURLsFromHTML(html, baseURL)).toStrictEqual(['https://blog.boot.dev/']);
    expect(getURLsFromHTML(html2, baseURL)).toStrictEqual(['https://blog.boot.dev/images/image1.jpg']);
  });