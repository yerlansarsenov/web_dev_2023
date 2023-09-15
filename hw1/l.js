/**
 * @param {number} millis
 */
async function sleep(millis) {
    let timeOutPromise = new Promise(res => setTimeout(res, millis))
    await timeOutPromise
}

/** 
 * let t = Date.now()
 * sleep(100).then(() => console.log(Date.now() - t)) // 100
 */