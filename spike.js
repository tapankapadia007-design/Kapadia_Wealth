async function load(){

let res = await fetch(
"https://nse-spike-backend-1.onrender.com/spikes"
)

let data = await res.json()

let html=""

data.forEach(s=>{

let color = s.move>0 ? "lime":"red"

html += `
<tr>
<td>${s.symbol}</td>
<td>${s.price}</td>
<td style="color:${color}">
${s.move}%
</td>
</tr>
`

})

document.getElementById("data").innerHTML = html

}

setInterval(load,1000)
