import { MouseEventHandler } from 'react'
import addSvg from '../assets/add-button.svg'

const AddAvatar = ({ addAvatar }: { addAvatar: MouseEventHandler<HTMLImageElement> }) => {

    return (
        <img className='add-avatar-img' src={addSvg} onClick={addAvatar} />
    )
}

export default AddAvatar