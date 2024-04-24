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

    return normalizedURL
}

module.exports = {
    normalizeURL
}