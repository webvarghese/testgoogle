function testGS() {
  const url =
    "https://script.google.com/macros/s/AKfycbxaM4-WD_wuTwbxJ1F-C8K2BiGU_xNoUVDtgw86LPm-uaH6JPkx1W_32HOhlhBmOAw/exec"

  fetch(url)
    .then((d) => d.json())
    .then((d) => {
      document.getElementById("app").textContent = d[0].status
    })
}
//made the branch main
document.getElementById("btn").addEventListener("click", testGS)
