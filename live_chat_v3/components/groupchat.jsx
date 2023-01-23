export default function Groupchat({ id }){
    const name = "La Mafia"
    const last_msg = "Oleee"
    return(
        <div className="w-1/3 h-24 bg-purple-700 rounded-full flex flex-row mx-auto mt-12">
            <img src={`https://placeimg.com/80/80/people`} className="mr-1 rounded-full h-full my-auto flex-end" />
            <div className="h-full w-2/3 text-white pt-4">
                <div className="ml-12 text-left w-1/3 h-1/2 text-xl font-bold">{name}</div>
                <div className="ml-12 text-left w-1/3 h-1/2">{last_msg}</div>
                
            </div>
        </div>
    )
}