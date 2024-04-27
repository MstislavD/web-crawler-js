console.log('hello world')

function main() {
    if (process.argv.length != 3){
        console.log('Error: wrong number of arguments')
    } else {
        console.log(`Website to crawl: ${process.argv[2]}`)
    }
}

main()