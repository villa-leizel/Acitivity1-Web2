import photo from '/pfp.jpg';

function Profile(props) {
    return (
        <div className="w-120 mx-auto p-6 border rounded-lg shadow-lg">
            <div className="flex flex-col items-center border p-4 rounded-lg">
                <img src={photo} alt="Profile" 
                    className="w-24 h-24 rounded-full" />
                <h2 className="text-xl font-bold mt-2"> 
                    {props.profileName}
                </h2>
                <p className="text-gray-600 text-center">{props.profileDocs}</p>
            </div>
        </div>
    );
}

export default Profile;