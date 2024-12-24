import { Resume } from '@resumejs/components'
import md from '../../README.md?raw'

const Show = () => {
  return (
    <div className="flex justify-center">
      <Resume className="md:w-screen-md">{md}</Resume>
    </div>
  )
}

export default Show
