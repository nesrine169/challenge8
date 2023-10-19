let queue = []
queue.push('nesrine')
queue.push('wassim')
queue.push('camelia')
console.log(queue)


let firstOut = queue.shift()
console.log(queue)

function isEmpty(queue){
  return queue.length === 0
}
console.log(isEmpty(queue))