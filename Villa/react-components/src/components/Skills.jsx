function Skills (props) {
    return (
        <div  className="mt-6 border p-4 rounded-lg">
            <h3 className="text-1g font-bold">Skills</h3>
            <ul className="list-disc ml-5">
                <li><a href="#" className="text-blue-500">{props.Skill1}</a></li>
                <li><a href="#" className="text-blue-500">{props.Skill2}</a></li>
                <li><a href="#" className="text-blue-500">{props.Skill3}</a></li>
                <li><a href="#" className="text-blue-500">{props.Skill4}</a></li>
            </ul>
        </div>
    )
}

export default Skills