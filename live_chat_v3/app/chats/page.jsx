import Chat from "@/components/chat";
import Groupchat from "@/components/groupchat";
import Navbar from "@/components/navbar";

export default function Chats() {
  return (
    <body>
      <Navbar />
      <div className="w-full text-center text-3xl font-semibold mt-4">My Chats</div>
      <Chat user={{img: null, name: "Albert"}} id={1} />
      <Chat user={{img: null, name: "Yaiza"}} id={2} />
      <Chat user={{img: null, name: "Angelo"}} id={3} />
      <Groupchat id={4} />
    </body>
  )
}