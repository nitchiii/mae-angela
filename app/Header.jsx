import {data} from './data'

console.log(data);

const filter  = data.filter((data)=> data.profession === "Full time sleepers");

console.log(filter);

const Header = () => {
  return (<div>
    {data.map((data, key)=> (
        <div key={key}>
            <li> {data.profession}</li>
            <li> {data.name}</li>
            <li> {data.age}</li>
        </div>

    ))}
    </div>
)
}   

export default Header