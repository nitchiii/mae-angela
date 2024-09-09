import {data} from './data'

console.log(data);

const filter  = data.filter((data)=> data.profession === "Full time sleepers");

console.log(filter);

const Header = () => {
  return (<div>
    {data.map((data, key)=> (
        <li key={key}>{data.profession}</li>

    ))}
    </div>
)
}   

export default Header