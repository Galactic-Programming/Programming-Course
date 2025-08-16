import profilePic from './assets/download.jpg'

function Card() {
    return (
        <div className="card">
            <img className="card-image" src={profilePic} alt="profile picture" />
            <h2 className='card-title'>Welcome to My React App</h2>
            <p className='card-text'>This is a simple card component.</p>
        </div>
    );
}

export default Card;