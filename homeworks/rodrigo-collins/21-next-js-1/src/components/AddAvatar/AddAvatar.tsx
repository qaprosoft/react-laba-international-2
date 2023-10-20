import React from 'react';
import { MouseEventHandler } from 'react'
import styles from './styles.module.css';

type AvatarItemProps = {
    addAvatar: MouseEventHandler<HTMLImageElement>,
    isLoading: boolean
}

const AddAvatar = ({ addAvatar, isLoading }: AvatarItemProps) => {

    return <img className={isLoading ? styles['add-avatar-img--disabled'] : styles['add-avatar-img']} src='/assets/add-button.svg' onClick={isLoading ? () => { } : addAvatar} />
}

export default AddAvatar