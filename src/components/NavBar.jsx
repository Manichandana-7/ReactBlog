
import { House, MessageCirclePlus, Phone, CircleUserRound } from 'lucide-react';
import { Link } from 'react-router-dom';
function NavBar() {
    return (
        <>
            <div className="flex justify-between items-center p-5 w-full bg-sky-700 text-white">
                <div>
                    <h1 className="font-bold text-3xl">VividVoices</h1>

                </div>
                <div className="flex justify-between items-center gap-20">
                    <div className="flex justify-between items-center gap-">
                        <House color="#ffffff" />
                        <Link to="/">Home</Link>
                    </div>
                    <div className="flex justify-between items-center">
                        <MessageCirclePlus color="#ffffff" />
                        <Link to="/addblog">Add Blog</Link>
                    </div>
                    <div className="flex justify-between items-center">
                        <Phone color="#ffffff" />
                        <p>Contact Us</p>
                    </div>
                    <div className="flex justify-between items-center">
                        <CircleUserRound color="#ffffff" />
                        <p>Profile</p>
                    </div>
                </div>

            </div>
        </>
    );
}
export default NavBar