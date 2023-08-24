import { Link } from "react-router-dom";
export default function Header() {
    return (
       <div className="header">
            <h1> 토익 영단어 (고급)</h1>
            <div className="menu">
            <Link to="/" className="link">단어 추가</Link> &nbsp;
                <Link to="/" className="link">Day 추가</Link>
            </div>
       </div>
    );
}