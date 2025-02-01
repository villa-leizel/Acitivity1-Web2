function WorkExperience (props) {
    return(
        <div className="mt-6 border p-4 rounded-lg">
            <h3 className="text-lg font-bold">Work Experience</h3>
            <div className="mt-2">
                <h4 className="font-semibold"> {props.Work}</h4>
                <p className="text-gray-600"> {props.Date}</p>
                <p>{props.Text}</p>
            </div>
                <div className="mt-4">
                    <h4 className="font-semibold">{props.Work1}</h4>
                    <p className="text-gray-600">{props.Date1}</p>
                    <p>{props.Text1}</p>
                </div>

        </div>

    )
}

export default WorkExperience