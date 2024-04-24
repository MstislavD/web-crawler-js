const { test, expect } = require('@jest/globals')

const { normalizeURL } = require('./crawl.js')

test('adds 1 + 2 to equal 3', () => {
    expect(normalizeURL("url")).toBe("url2");
  });