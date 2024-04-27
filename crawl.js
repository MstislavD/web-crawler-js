const { JSDOM } = require('jsdom')

function normalizeURL(url){
    normalizedURL = url
    
    if (url.slice(0,7) === "http://"){
        normalizedURL = normalizedURL.slice(7)
    } else if (url.slice(0,8) === "https://"){
        normalizedURL = normalizedURL.slice(8)
    }

    if (normalizedURL.slice(-1) === "/"){
        normalizedURL = normalizedURL.slice(0,-1)
    }

    // const urlObject = new URL(url)
    // normalizedURL = `${urlObject.host}${urlObject.pathname}`
    // console.log(normalizedURL)

    return normalizedURL
}

function getURLsFromHTML(htmlBody, baseURL){
    const dom = new JSDOM(htmlBody)
    const query = dom.window.document.querySelectorAll('a')
    const hrefs = []
    for (let item of query){
        let linkURL = item.href
        if (linkURL.slice(0, baseURL.length) != baseURL){
            linkURL = [...baseURL, '/', ...linkURL].join("")
        }
        hrefs.push(linkURL)
    }
    return hrefs
}

module.exports = {
    normalizeURL,
    getURLsFromHTML
}