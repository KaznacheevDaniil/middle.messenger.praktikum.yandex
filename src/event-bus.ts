class EventBus {
  constructor() {
    this.listeners = {};
  }
  listeners = {}

  on(event : string, callback: Function) : void {
    if (!this.listeners[event]) {
      this.listeners[event] = [];
    }

    this.listeners[event].push(callback);
  }

  off(event : string, callback: Function) : void {
    if (!this.listeners[event]) {
      throw new Error(`Нет события: ${event}`);
    }

    this.listeners[event] = this.listeners[event].filter(
      listener => listener !== callback
    );
  }

  emit(event : string, ...args) : void {
    if (!this.listeners[event]) {
      throw new Error(`Нет события: ${event}`);
    }

    this.listeners[event].forEach(function(listener) {
      listener(...args);
    });
  }
}