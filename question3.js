let stack = []
stack.push('nesrine')
stack.push('camelia')
stack.push('wassim')
console.log(stack)

let name = stack.pop()
console.log(stack)

function peek(stack){
  let lastEelemnt = stack.length-1
  return stack[lastEelemnt]
}
console.log(peek(stack))

function isEmpty(stack){
  return stack.length === 0
}
console.log(isEmpty(stack))