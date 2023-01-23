export default function Login() {
    return (
        <div className="w-full h-screen absolute flex flex-col justify-center align-middle">
            <div className="mockup-phone">
                <div class="camera"></div>
                <div class="display">
                    <div class="artboard artboard-demo phone-1">
                        <a className="btn btn-ghost normal-case text-xl mb-12 -mt-12">daisyChat</a>
                        <div className="tabs tabs-boxed">
                            <a className="tab tab-active">Sign Up</a>
                            <a className="tab tab-boxed" href="/login">Log In</a>
                        </div>
                        <form action="" className="w-full">
                            <input type="text" placeholder="Email" className="input input-bordered input-primary w-2/3 max-w-xs block mt-4 mx-auto" />
                            <input type="text" placeholder="Username" className="input input-bordered input-primary w-2/3 max-w-xs block mt-4 mx-auto" />
                            <input type="password" placeholder="Password" className="input input-bordered input-primary w-2/3 max-w-xs block mt-4 mx-auto" />
                            <input type="password" placeholder="Repeat Password" className="input input-bordered input-primary w-2/3 max-w-xs block mt-4 mx-auto" />
                            <button type="submit" className="btn btn-circle w-2/3 mt-4 mx-auto block">Sign Up</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}