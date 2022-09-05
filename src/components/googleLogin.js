import {GoogleLogin} from  'react-google-login'
const client_id  = "876099562964-vib0m81cbni758tqfeilui0pl10tqbmt.apps.googleusercontent.com"
function GoogLogin() {
const onSuccess = (res) => {
    console.log("login success")
}
const onFailure = (res) => {
    console.log("login unsuccess")
}






    return(
        <>
            <div id = "signInButton">
                <GoogleLogin

client_id= {client_id}
            buttonText = "login"
            onSuccess = {onSuccess}
            onFailure = {onFailure}
            cookiePolicy = {'single_host_origin'}
            isSignedIn = {true}




                />
            </div>
        </>
    )
}

export default GoogLogin