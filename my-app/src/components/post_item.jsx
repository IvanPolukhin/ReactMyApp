import React from "react";
import MyButtons from "./UI/button/myButtons";
import { useNavigate } from "react-router-dom";

const PostItem = (props) => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="post">
        <div className="post__content">
          <strong>
            {props.post.id}. {props.post.title}
          </strong>
          <div>{props.post.body}</div>
        </div>
        <div className="post__btns">
          <MyButtons onClick={() => navigate(`/posts/${props.post.id}`)}>
            Open
          </MyButtons>
          <MyButtons onClick={() => props.remove(props.post)}>Delet</MyButtons>
        </div>
      </div>
    </div>
  );
};

export default PostItem;
