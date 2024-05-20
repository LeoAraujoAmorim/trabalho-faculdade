
export default function Text({ texts }) {
    return ( 
        <div className="card w-full bg-base-100 shadow-xl">
            <div className="card-body">
                {texts.map((text, index) => (
                    <li className=' my-4' key={index}>
                        {text}
                    </li>))}
            </div>
        </div>
    )
}