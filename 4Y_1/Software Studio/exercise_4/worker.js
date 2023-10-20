addEventListener("message", (event) => { //function (event) {...}
  if (event.data === "start") {
    var Datetime = new Date()
    // ส่งเวลาตอนกดเลย (ไม่รอครบ 1 วิ)
    postMessage(Datetime)

    //เปลี่ยนเวลาทุก 1 วินาที ตอนอยู่มุมขวา
    ChangeTime = setInterval(() => { //function (event) {...}
      Datetime = new Date()
      postMessage(Datetime)
    }, 1000)
  } else if (event.data === "stop") {
    //หยุด เปลี่ยนเวลาทุก 1 วินาที ตอนอยู่มุมขวา
    clearInterval(ChangeTime)
  }
})