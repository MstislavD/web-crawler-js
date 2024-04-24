const { test, expect } = require('@jest/globals')

const { normalizeURL } = require('./crawl.js')

test('normalize URLs', () => {
    expect(normalizeURL("url")).toBe("url2");
  });