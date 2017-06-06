import xs from 'xstream'
import { div, img } from '@cycle/dom'
import { getNumber, getClassNameFromNumber } from '../../../utils'

const model = instrument => ({ props, NOTE$ }) => (
  xs
    .combine(
      getNumber(NOTE$),
      instrument.DOM$,
    )
    .map(([number, children]) => ({ ...props, number, children }))
)

const view = state$ => (
  state$.map(({ name, number, children }) =>
    div(`.${name}`,
      [
        img(
          `.character ${getClassNameFromNumber(number)}`,
          { props: { src: `/svg/characters/${name}.svg` } },
        ),
        children,
      ],
    ),
  )
)

export default instrument => sources => view(model(instrument)(sources))
