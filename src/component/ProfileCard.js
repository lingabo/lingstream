import Navbar from "./Navbar";
import '../component/assets/style/ProfileCard';

const ProfileCard = () =>{




    return (
        <div>

            <div>
                <Navbar />
            </div>

            <div className="profile-card">
                    <h1>Lingabo Junior</h1>

                    <div className="img-profile">
                        <img src="" alt="Profile-image"/>
                        <h4>{}</h4>

                    </div>

            </div>
        </div>

    )




}

export default  ProfileCard ;