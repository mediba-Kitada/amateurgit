'use strict'



// Promiseの基本パターン
async function countdown (seconds) {
  return new Promise((resolve, reject) => {
    const timeoutIds = []
    for (let i = seconds; i >= 0; i--) {
      timeoutIds.push(setTimeout(
        () => {
          if (i === 13) {
            timeoutIds.forEach(clearTimeout) /* すべてクリア */
            reject(new Error(`${i}という数は不吉過ぎます`))
          } else if (i > 0) {
            console.log(i + `...`)
          } else {
            console.log('GO!')
            resolve()
          }
        }, /* 無名関数の終わり */
        (seconds - i) * 1000))
    }
  })
}

// countdownメソッドには1つの引数を指定する
function main() {
  try {
    await countdown(15)
    // onRejectedのときに行いたい処理
    console.log('カウントダウン成功')
  } catch (err) {
    // onRejectedのときに行いたい処理
    console.log('カウントダウンでエラーが起こった:' + err.message)
  }
}

main()
