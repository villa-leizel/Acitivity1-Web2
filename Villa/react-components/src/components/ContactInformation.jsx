function ContactInformation (props) {
    return (
        <div className="mt-6 border p-4 rounded-lg">
            <h3 className="textx-1g font-bold"> Contact Information</h3>
            <p><strong> Email : </strong><a href="#" className="text-blue-500"> {props.Email} </a></p>
            <p> <strong>Phone : </strong> <a href="#" className="text-blue-500"> {props.Phone} </a></p>
            <p><strong>Address :</strong> <a href="#" className="text-blue-500"> {props.Address}</a></p>
        </div>
    )
}

export default ContactInformation