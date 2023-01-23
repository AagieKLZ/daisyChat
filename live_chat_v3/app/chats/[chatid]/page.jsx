'use client'
import Message from "components/message"
import Navbar from "components/navbar"
import Image from "next/image"
import { useRef, useState, useEffect } from "react"

function App() {
  let inp = useRef(null)
  let formRef = useRef(null)
  const [messages, setMessages] = useState([
    { from: "other", msg: "Hello" },
    { from: "me", msg: "Oleeee" }
  ])

  let lastMsg = useRef(null)

  function handleSubmit(e) {
    e.preventDefault()
    console.log(inp.current.value)
    setMessages([...messages, { from: "me", msg: inp.current.value }])
    inp.current.value = ""

  }

  useEffect(() => {
    const inputRect = inp.current.getBoundingClientRect();
    window.scrollTo(inputRect.x, inputRect.y);
  }, [messages])

  return (
    <html data-theme="night">
    <body>
    <div className="">
      <Navbar />
      <input type="checkbox" id="new-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <input type="file" name="" id="" />
          <div className="modal-action">
            <label htmlFor="file-modal" className="btn">Done!</label>
          </div>
        </div>
      </div>

      <div className="mockup-window border bg-base-300 w-2/3 mx-auto mt-8 px-4">
        <div className="flex flex-row w-full justify-center text-lg font-bold -mt-10 text-green-500 border-b-[1px] pb-2 border-white">La Mafia</div>
        {messages.map((msg, ind) => <Message from={msg.from} msg={msg.msg} id={ind} last={ind === 0 ? {} : messages[ind - 1] } />)}
        <form action="" className="pt-4 w-full flex flex-row justify-around" onSubmit={handleSubmit} ref={formRef}>
          <div className="dropdown dropdown-top">
            <label tabIndex={0} className="btn m-1 btn-warning"><Image src={"/file.svg"} width={50} height={50} alt="File" /></label>
            <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-[8%]">
            <label htmlFor="file-modal"><li><a>File</a></li></label>
            <label htmlFor="image-modal"><li><a>Image</a></li></label>
            </ul>
          </div>
          <input type="text" placeholder="Type here" className="input input-bordered w-[85%]" name="msg" ref={inp} autoComplete="off" />

          <button className="btn btn-primary" type="submit">Send</button>
        </form>
      </div>

      <input type="checkbox" id="file-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
        <input type="file" className="file-input w-full max-w-xs" />
          <div className="modal-action">
            <label htmlFor="file-modal" className="btn">Done!</label>
          </div>
        </div>
      </div>

      <input type="checkbox" id="image-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
        <input type="file" className="file-input w-full max-w-xs" />
          <div className="modal-action">
            <label htmlFor="image-modal" className="btn">Done!</label>
          </div>
        </div>
      </div>
    </div>
    </body>
    </html>
  )
}

export default App
