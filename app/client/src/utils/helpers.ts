/*
|--------------------------------------------------------------------------
| Global Helper Functions
|--------------------------------------------------------------------------
*/

/**
 * Async sleep function
 */
 window['sleep'] = (ms: number): Promise<any> => {
    return new Promise(resolve => setTimeout(resolve, ms))
}

window['waitUntil'] = (watchSource: () => boolean): Promise<any> => {
    return new Promise((resolve, reject) => {
        let timePassed = 0
        let interval

        interval = setInterval(() => {
            if (watchSource() === true) {
                clearInterval(interval)
                resolve()
            }

            timePassed++

            if (timePassed > 60) {
                clearInterval((interval))
                reject()
            }
        }, 100)
    })
}

window['appIsReady'] = () => {
    return window['appMounted'] === true && window['routerReady'] === true
}