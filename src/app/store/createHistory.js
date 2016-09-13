import { createHashHistory } from 'history'

export default function createHistory() {
  return createHashHistory({ queryKey: false })
}
