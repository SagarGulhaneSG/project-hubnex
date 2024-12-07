import './Blogs.css';
import { FaArrowRight } from "react-icons/fa";
import blog1 from "../../assets/blog1.svg";
import blog2 from "../../assets/blog2.svg";
import { MdOutlineArrowOutward } from "react-icons/md";

const Blogs = () => {
    return (
        <div className='Blogs'>
            <div className="blog-first">
                <h1>Blogs</h1>
                <p>Explore the impact we've delivered</p>
                <button>View All<FaArrowRight className='text-align' /></button>
            </div>
            <div className="blog-cards">
                <div className="card-blog">
                    <img src={blog1} alt="" />
                    <span>Finance</span>
                    <h2>What is Ad Exposure and Why It Matters?</h2>
                    <p>Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum.</p>
                    <button>Read Full Article<MdOutlineArrowOutward /></button>
                </div>
                <div className="card-blog">
                    <img src={blog2} alt="" />
                    <span>Marketing</span>
                    <h2>What is Ad Exposure and Why It Matters?</h2>
                    <p>Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum.</p>
                    <button>Read Full Article<MdOutlineArrowOutward /></button>
                </div>
                <div className="card-blog">
                    <img src={blog1} alt="" />
                    <span>Finance</span>
                    <h2>What is Ad Exposure and Why It Matters?</h2>
                    <p>Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum.</p>
                    <button>Read Full Article<MdOutlineArrowOutward /></button>
                </div>
            </div>
        </div>
    )
}

export default Blogs