export function AvatarTile({ avatar, onRefresh }) {
    return (
        <div className="avatar-tile" onClick={()=> onRefresh(avatar.id)}>
            <img src={avatar.url} alt="Avatar"/>
        </div>
    )
}