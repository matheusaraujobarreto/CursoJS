let num = [8,41,4]
num.push(2)
console.log(num.length)
console.log(num)
console.log(`Dentre os ${num.length} números de ${num}, em ordem ele fica ${num.sort()}`)

/*for(let pos=0; pos <num.length;pos++){
    console.log(`Na posição ${pos+1} temos o valor ${num[pos]}`)
}*/
//OU
for(pos in num){
    console.log(`Na posição ${pos} temos o valor ${num[pos]}`)
}

console.log(num.indexOf(8))//posição do numero