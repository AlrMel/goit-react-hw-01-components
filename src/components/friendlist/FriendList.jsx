import css from './FriendList.module.css'

export const FriendList = ({friendsPropeties}) => {
    return (
        <ul className={css.friendList}>
            {friendsPropeties.map(fr => {
                return (
                    <li >

                    </li>
                )
            }) }
  
</ul>
    )
}