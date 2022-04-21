declare global {
    interface Window {
        waitUntil?: Function,
        sleep?: Function,
        appIsReady?: Function,
    }

    let waitUntil: Function
    let appIsReady: Function
    let sleep: Function
}

export default global;