import { MazeEvent } from "./constants"
import { Coord, Cell } from "./maze"

export interface EventData {
  coords: Coord
  rawCoords: Coord
  shift: boolean
  alt: boolean
}
export interface CustomEventTarget {
  trigger(eventName: MazeEvent, eventData: EventData): void
  on(eventName: MazeEvent, handler: (eventData: EventData) => void): void
  off(eventName: MazeEvent | null): void
}

export function forEachContiguousPair(array: Array<Cell>, fn) {
  "use strict";
  console.assert(array.length >= 2);
  for (let i = 0; i < array.length - 1; i++) {
    fn(array[i], array[i + 1]);
  }
}

export function buildEventTarget(): CustomEventTarget {
  "use strict";
  const eventTarget = new EventTarget(),
    handlers = [];

  return {
    trigger(eventName: MazeEvent, eventData: EventData) {
      const event = new CustomEvent<EventData>(eventName, { detail: eventData })
      eventTarget.dispatchEvent(event);
      // console.log('EVENT', name, eventName, eventData);
    },
    on(eventName: MazeEvent, handler: (eventData: EventData) => void) {
      const eventHandler: (event: CustomEvent<EventData>) => void = event => handler(event.detail);
      handlers.push({ eventName, eventHandler });
      eventTarget.addEventListener(eventName, eventHandler);
    },
    off(eventNameToRemove: MazeEvent | null = null) {
      let i = handlers.length;
      while (i--) {
        const { eventName, eventHandler } = handlers[i];
        if (!eventNameToRemove || eventName === eventNameToRemove) {
          eventTarget.removeEventListener(eventName, eventHandler);
          handlers.splice(i, 1);
        }
      }
    }
  };
}
