import PropTypes from "prop-types";
import "./user.css"

export default function User(props) {
    let { name, surname, age, isLoggedIn, friends } = props

    // array destruction
    // console.log(props);
    if (!isLoggedIn){
        return <h1>Giriş Yapmadınız.</h1>;
    }
    return (
        <>
            <h1 className="name">
                {isLoggedIn ? `${name} ${surname} (${age}) ` : "Giriş Yapmadınız."}
            </h1>
            {friends.map((friend) => (
                <h1 key={friend.id}>
                    {friend.name}
                </h1>
            ))}
        </>
    );
}


// function Name(){
//     return (
//         <div>
//             selam BEN İSA
//         </div>
//     )
// }

User.propTypes = {
    name: PropTypes.string.isRequired, // isRequired : zorunluluk
    age: PropTypes.number.isRequired,

}

User.defaultProps= {
    name:"isimsiz",
    isLoggedIn :false,
}

