import { useSelector } from "react-redux";
import { Container } from "../../components/ui/Container";
import { Heading } from "../../components/ui/Heading";
import { NoContent } from "../../components/ui/NoContent";
import { Posts } from "./Posts";
import * as SC from "./styles";

export const Main = () => {
  const { admin } = useSelector((state) => state.currentUser);
  const { privatePosts, publicPosts, allPosts } = useSelector(
    (state) => state.posts
  );
  const posts = admin ? allPosts : publicPosts;

  return (
    <Container>
      <Heading $center>Посты</Heading>
      <SC.PostsSection>
        {posts ? (
          posts.map((post) => <Posts key={post.id} publication={post} />)
        ) : (
          <NoContent>Нет постов</NoContent>
        )}
      </SC.PostsSection>
    </Container>
  );
};
