const url =
  "https://script.google.com/macros/s/AKfycbxcc1X_283QieqSZzkI7uvm5SY2t_sno_saLFDVyxJ_dYBNhT9ms859GwaXmpvN2NcU/exec"
function testGS() {
  // const url =
  //   "https://script.google.com/macros/s/AKfycbxaM4-WD_wuTwbxJ1F-C8K2BiGU_xNoUVDtgw86LPm-uaH6JPkx1W_32HOhlhBmOAw/exec"

  fetch(url)
    .then((d) => d.json())
    .then((d) => {
      document.getElementById("app").textContent = d[0].status
    })
}

function addGS() {
  // const url =
  //   "https://script.google.com/macros/s/AKfycbxaM4-WD_wuTwbxJ1F-C8K2BiGU_xNoUVDtgw86LPm-uaH6JPkx1W_32HOhlhBmOAw/exec"

  fetch(url, {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    mode: "no-cors", // no-cors, *cors, same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "omit", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: "follow", // manual, *follow, error
    // referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify({ name: "Olivia" }), // body data type must match "Content-Type" header
  })
}
//made the branch main
document.getElementById("btn2").addEventListener("click", addGS)
document.getElementById("btn").addEventListener("click", testGS)
