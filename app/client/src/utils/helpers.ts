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