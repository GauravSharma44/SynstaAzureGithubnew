import { Link } from "react-router-dom";
import "./blogpost.css";

const Card = ({ post }) => {
  return (
    <div className="card">
      <Link as={Link} className="link-blog" to={`/blogs/${post.id}`}>
        {/* <Link className="link" to={`/blogs/${post.id}`}> */}
        <div className="card-container">
          <div className="card-left">
            <img src={post.img} alt="" className="img" />
          </div>
          <div className="card-right">
            <span className="title-blog">{post.title}</span>
<br/>
            <p className="desc">{post.desc}</p>
            <br/>
            <button className="cardButton-blog">Read More</button>
          </div>
        </div>
        
      </Link>
    </div>
  );
};

export default Card;
