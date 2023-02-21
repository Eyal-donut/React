const Card = ({username, userAvatar}) => {
    return (
            <div className="card">
                <h2>Name: {username}</h2>
                <div 
                style={{background: `url(${userAvatar}) no-repeat center center/cover`, width: '100px', height: '100px'}}
                ></div>
            </div>
    )
}

export default Card