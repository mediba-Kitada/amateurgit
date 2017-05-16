"use strict"

// Promiseの基本パターン
function countdown (seconds) {
  return new Promise((resolve, reject) => {
    const timeoutId = []
    for (let i = seconds; i >= 0; i--) {
      timeoutId.push(setTimeout(
        () => {
          if (i === 13) {
            timeoutId.forEach(clearTimeout) /* すべてクリア */
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

// thenメソッドには2つの引数を指定する
countdown(15).then(
  // onRejectedのときに行いたい処理
  () => {
    console.log('カウントダウン成功')
  },
  // onRejectedのときに行いたい処理
  (err) => {
    console.log('カウントダウンでエラーが起こった:' + err.message)
  }
)
