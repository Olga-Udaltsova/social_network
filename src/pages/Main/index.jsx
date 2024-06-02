import { useSelector } from "react-redux";
import { Container } from "../../components/ui/Container";
import { Heading } from "../../components/ui/Heading";
import { NoContent } from "../../components/ui/NoContent";
import { Posts } from "./Posts";
import { getAllPosts } from "../../helpers/getAllPosts";
import { getFilteredPosts } from "../../helpers/getFilteredPosts";
import * as SC from "./styles";

export const Main = () => {
  const { admin, user } = useSelector((state) => state.currentUser);
  const { friends } = useSelector((state) => state.friends);
  const { privatePosts, publicPosts } = useSelector((state) => state.posts);
  const posts = admin
    ? getAllPosts(privatePosts, publicPosts)
    : getFilteredPosts(user, friends, privatePosts, publicPosts);

  return (
    <Container>
      <Heading $center>Посты</Heading>
      <SC.PostsSection>
        {posts.length !== 0 ? (
          posts.map((post) => <Posts key={post.id} publication={post} />)
        ) : (
          <NoContent>Нет постов</NoContent>
        )}
      </SC.PostsSection>
    </Container>
  );
};
