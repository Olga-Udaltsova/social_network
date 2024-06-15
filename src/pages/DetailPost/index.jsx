import { Link, useParams } from "react-router-dom";
import { Header } from "../../components/Header";
import { Avatar } from "../../components/ui/Avatar";
import { useSelector } from "react-redux";
import { getAllPosts } from "../../helpers/getAllPosts";
import { Container } from "../../components/ui/Container";
import * as SC from "./styles";

export const DetailPost = () => {
  const { id } = useParams();
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
        <SC.Links>
          <Link to="/main/my">Обратно к публикациям</Link>
        </SC.Links>
      </Container>
    </>
  );
};
