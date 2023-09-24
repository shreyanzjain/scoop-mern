import data from './Data.json';
export default function({jobId}) {
    if (jobId == undefined) {
        return(
            <div>Empty</div>
        )
    }
    const obj = data.find((ele) => ele.jobId == jobId)
    return (
        <div>
            {obj.companyName}<br/>
            {obj.jobTitle}<br/>
            {obj.jobLocation}<br/>
            {obj.jobCompensation}<br/>
        </div>
    )
}