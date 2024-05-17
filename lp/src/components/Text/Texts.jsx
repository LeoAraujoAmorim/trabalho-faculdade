import Image from "next/image";


export default function Text(props) {
    return (
        <div className="text-xl">
            <p>
                {props.text.map((text, index) => (
                  <li className=' my-4' key={index}>
                    {text}
                  </li>))}
            </p>
        </div>
    )
}