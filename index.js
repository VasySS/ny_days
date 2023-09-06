let cur = new Date()
let ny = new Date(cur.getFullYear()+1, 0, 1)

console.log((ny.getTime()- cur.getTime())/86_400_000)