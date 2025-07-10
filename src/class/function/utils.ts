function formatTime(time:any) {
    return time < 10 ? "0" + time : time;
}

export function getCurrentTime(): string {
    let currentTime = new Date();
    let year = currentTime.getFullYear();
    let month = formatTime(currentTime.getMonth() + 1);
    let day = formatTime(currentTime.getDate());
    let hours = formatTime(currentTime.getHours());
    let minutes = formatTime(currentTime.getMinutes());
    let seconds = formatTime(currentTime.getSeconds());
    // let timeString = year + "年" + month + "月" + day + "日"+" " + hours + ":" + minutes + ":" + seconds;
    return year + "年" + month + "月" + day + "日   " + hours + " " + ":" + " " + minutes + " : " + seconds;
}

export function updateCurrentTime() {
  // const currentTimeElement = document.getElementById("time");
  // if (currentTimeElement) {
  //   currentTimeElement.textContent = getCurrentTime();
  // } else {
  //   // 避免报错
  //   console.warn("[updateCurrentTime] id='time' 的元素未找到，跳过更新");
  // }
}

