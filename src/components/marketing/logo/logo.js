import xs from 'xstream'
import { a, img } from '@cycle/dom'

const view = () => xs.of(
  a('.logo',
    { props: { href: 'https://github.com/unirakun' } },
    img({ props: { src: '/logo.svg' } }),
),
)

export default () => {
  return {
    DOM: view(),
  }
}
