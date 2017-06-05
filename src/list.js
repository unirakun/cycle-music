import xs from 'xstream'
import { div } from '@cycle/dom'

export default characters => (/* sources */) => {
  const children$ = xs.combine(...characters.map(character => character.DOM$))
  const vdom$ = children$.map(children => div('.characters', children))

  return {
    DOM$: vdom$,
  }
}
