
const listeners = {}

export const popupEvent = {
  on(event, fn) {
    if (!listeners[event]) listeners[event] = []
    listeners[event].push(fn)
  },
  emit(event, data) {
    if (listeners[event]) {
      listeners[event].forEach(fn => fn(data))
    }
  }
}

export function usePopup() {
  function pop(imageURL) {
    popupEvent.emit('pop', imageURL)
  }
  return { pop }
}
