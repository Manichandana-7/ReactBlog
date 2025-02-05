
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
                        
                        <Link to="/"><House color="#ffffff" />Home</Link>
                    </div>
                    <div className="flex justify-between items-center">
                        
                        <Link to="/addblog"><MessageCirclePlus color="#ffffff" />Add Blog</Link>
                    </div>
                    <div className="flex justify-between items-center">
                        
                        <p><Phone color="#ffffff" />Contact Us</p>
                    </div>
                    <div className="flex justify-between items-center">
                        
                        <p><CircleUserRound color="#ffffff" />Profile</p>
                    </div>
                </div>

            </div>
        </>
    );
}
export default NavBar