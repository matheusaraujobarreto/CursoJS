function tabuada(){
    var num = document.querySelector('input#numero')
    var tab = document.getElementById('seltab')
    var n1 = Number(num.value)
    var c = 1
    tab.innerHTML = ''
    while(c <= 10){
        let item = document.createElement('option')
        item.text = `${n1} x ${c} = ${n1*c}`
        tab.appendChild(item)
        c++
    }
}
