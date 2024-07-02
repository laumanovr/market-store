import { reactive } from 'vue'

interface EventEmitter {
  events: Record<string, Array<(...args: any[]) => void>>
  $on(event: string, callback: (...args: any[]) => void): void
  $off(event: string, callback: (...args: any[]) => void): void
  $emit(event: string, ...args: any[]): void
}

const EventEmitter: EventEmitter = reactive({
  events: {} as Record<string, Array<(...args: any[]) => void>>,
  $on(event, callback) {
    if (!this.events[event]) {
      this.events[event] = []
    }
    this.events[event].push(callback)
  },
  $off(event, callback) {
    if (this.events[event]) {
      this.events[event] = this.events[event].filter(cb => cb !== callback)
    }
  },
  $emit(event, ...args) {
    if (this.events[event]) {
      this.events[event].forEach(cb => {
        // eslint-disable-next-line n/no-callback-literal
        cb(...args)
      })
    }
  },
})

export default EventEmitter
