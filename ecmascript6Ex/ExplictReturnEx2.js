let evens = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]

odds = evens.map(v => v + 1)
console.log(odds)
pairs = evens.map(v => ({ even: v, odd: v + 1 }))
console.log('\n' + JSON.stringify(pairs))
nums = evens.map((v, i) => {
    return v + i
})
console.log('\n' + nums)