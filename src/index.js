import { run } from '@cycle/run'
import { makeDOMDriver /* , img*/ } from '@cycle/dom'
import list from './list'

const CHARACTER_NAMES = ['zora']

const Character = (/* sources */) => {
  const sinks = {}
  return sinks
}

const main = (sources) => {
  const characters = CHARACTER_NAMES.map(name => Character({ ...sources, name }))

  const sinks = {
    ...list(characters)(sources),
  }
  return sinks
}

const drivers = {
  DOM$: makeDOMDriver('#app'),
}

run(main, drivers)
