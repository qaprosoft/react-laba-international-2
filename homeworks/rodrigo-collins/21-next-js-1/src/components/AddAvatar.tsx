import React from 'react';
import { MouseEventHandler } from 'react'

type AvatarItemProps = {
    addAvatar: MouseEventHandler<HTMLImageElement>,
    isLoading: boolean
}

const AddAvatar = ({ addAvatar, isLoading }: AvatarItemProps) => {

    return <img className={isLoading ? 'add-avatar-img--disabled' : 'add-avatar-img'} src='/assets/add-button.svg' onClick={isLoading ? () => { } : addAvatar} />
}

export default AddAvatar