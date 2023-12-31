import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProviders";


const SocialLogin = () => {
    const {googleSignIn} = useContext(AuthContext);
    const handleGoogleSingin =()=>{
        googleSignIn()
        .then(result =>{
            console.log(result.user);
        })
        .catch(error =>console.log(error))
    }
    return (
        <div >

            <div className="divider">OR</div>
            <div className="text-center mb-8">
                <button onClick={handleGoogleSingin} className="btn btn-circle btn-outline">
                    G
                </button>
            </div>

        </div>
    );
};

export default SocialLogin;