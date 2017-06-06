import makeDom from './instrument.dom'

const music = ({ NOTE$ /* , props */}) => (
  NOTE$
)

export default (sources) => {
  return {
    DOM$: makeDom(sources),
    MUSIC$: music(sources),
  }
}
