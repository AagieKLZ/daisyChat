export default function Chat({ user, id }){
    const { img, name } = user
    const last_msg = "Oleee"
    return(
        <a href={`/chats/${id}`}>
        <div className="w-1/3 h-24 bg-primary rounded-full flex flex-row mx-auto mt-12 cursor-pointer hover:scale-110">
            <div className="indicator">
                <span className="indicator-item badge badge-secondary">10+</span> 
                <img src={`https://placeimg.com/80/80/people`} className="mr-1 rounded-full h-full my-auto flex-end" />
            </div>
            <div className="h-full w-2/3 text-white pt-4">
                <div className="ml-12 text-left w-1/3 h-1/2 text-xl font-bold">{name}</div>
                <div className="ml-12 text-left w-1/3 h-1/2">{last_msg}</div>
                
            </div>
        </div>
        </a>
    )
}