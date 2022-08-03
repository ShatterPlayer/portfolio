export default function throttle(fn: Function, wait: number) {
  let blocked = false
  return (...args: any[]) => {
    if (!blocked) {
      fn(...args)
      blocked = true
      setTimeout(() => {
        blocked = false
      }, wait)
    }
  }
}
