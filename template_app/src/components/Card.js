const Card = ({personName, personBirthday, favMeats, favFish}) => {
    return (
    <div className="card">
        <ul>
            <li>Name: {personName}</li>
            <li>Birthday: {personBirthday}</li>
            <li>Favorite meats: {favMeats}</li>
            <li>Favorite fish food: {favFish}</li>
        </ul>
    </div>
    )
}
export default Card