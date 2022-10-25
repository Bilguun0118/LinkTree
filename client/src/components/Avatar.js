import Avatar from '@mui/material/Avatar';
import "../App.css"


const User = () => {
    return(
        <div className='avatar-container flex flex-direction-column align-items text-align justify-content'>
            <Avatar className='avatarCom' src="/broken-image.jpg" sx={{ width: 100, height: 100, textAlign: 'center' }}/>
            <div className='YourName'>
                <h3>Your Name</h3>
            </div>
        </div>
    );

}

export default User