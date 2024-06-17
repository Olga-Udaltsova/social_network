import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { Container } from "../../components/ui/Container";
import { Header } from "../../components/Header";
import { Avatar } from "../../components/ui/Avatar";
import { Comments } from "../../components/Comments";
import { CommentBlock } from "../../components/CommentBlock";
import { getAllPosts } from "../../helpers/getAllPosts";
import * as SC from "./styles";

export const DetailPost = () => {
  const { id } = useParams();
  const { admin } = useSelector((state) => state.currentUser);
  const { privatePosts, publicPosts } = useSelector((state) => state.posts);

  const posts = getAllPosts(privatePosts, publicPosts);
  const findedPost = posts
    ? posts.find((item) => item.id === Number(id))
    : undefined;

  return (
    <>
      <Header />
      <Container>
        <SC.Info>
          <SC.User>
            <Avatar $value="150px" $radius="60px" />
            <p>{findedPost.user.name}</p>
          </SC.User>
          <p>{findedPost.post}</p>
        </SC.Info>
        {findedPost.comments && <Comments comments={findedPost.comments} />}
        {!admin && <CommentBlock post={findedPost} />}
        <SC.Links>
          <Link to="/main">Обратно к публикациям</Link>
        </SC.Links>
      </Container>
    </>
  );
};
