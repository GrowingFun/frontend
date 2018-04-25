function Comment (props) {
    return (
        <div className="Comment">
            <UserInfo user={props.author}></UserInfo>
            <Comment text={props.text} date={props.date}></Comment>
        </div>
    );
}
function Avatar (props) {
    return (
        <img className="Avatar"
             src={props.author.avatarUrl}
             alt={props.author.name}
        />
    )
    
}
function UserInfo (props) {
    
    return (
        <div className="UserInfo">
            <Avatar user={props.user}></Avatar>
            <div className="UserInfo-name">
                {props.user.name}
            </div>
        </div>
    )
}
function Comment (props) {
    return (
        <div>
            <div className="Comment-text">
                {props.text}
            </div>
            <div className="Comment-date">
                {formatDate(props.date)}
            </div>
        </div>
    )
    
}
ReactDOM.render(
    <Comment name="sdsd">sd</Comment>,
    document.getElementById('root')
);
