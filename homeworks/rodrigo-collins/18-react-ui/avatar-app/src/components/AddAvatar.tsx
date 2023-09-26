import { MouseEventHandler } from 'react'
import addSvg from '../assets/add-button.svg'

type AvatarItemProps = {
    addAvatar: MouseEventHandler<HTMLImageElement>,
    isLoading: boolean
}

const AddAvatar = ({ addAvatar, isLoading }: AvatarItemProps) => {

    return (
        <img className={isLoading ? 'add-avatar-img--disabled' : 'add-avatar-img'} src={addSvg} onClick={isLoading ? undefined : addAvatar} />
    )
}

export default AddAvatar