import { img } from '@cycle/dom'
import { getNumber, getClassNameFromNumber } from '../../../../utils'

const model = ({ NOTE$, props }) => getNumber(NOTE$).map(number => ({ ...props, number }))

const view = state$ => (
  state$
    .map(({ instrument, number }) => img(
      `.instrument ${getClassNameFromNumber(number)}`,
      { props: { src: `/svg/instruments/${instrument}.svg` } },
    ))
)

export default sources => view(model(sources))
