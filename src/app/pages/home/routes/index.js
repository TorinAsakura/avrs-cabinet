import { loadStat } from '../actions'
import Home from '../containers/Home'

export default ({ dispatch }) => ({
  component: Home,
  onEnter() {
    dispatch(loadStat())
  },
})
