import Image from "next/image";


export default function Text(props) {
    return ( 
        <div className="card w-full bg-base-100 shadow-xl">
            <div className="card-body">
                {props.text.map((text, index) => (
                    <li className=' my-4' key={index}>
                        {text}
                    </li>))}
            </div>
        </div>
    )
}