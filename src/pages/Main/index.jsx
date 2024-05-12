import { useSelector } from "react-redux";
import { Container } from "../../components/ui/Container";
import { Heading } from "../../components/ui/Heading";
import { NoContent } from "../../components/ui/NoContent";
import { Posts } from "./Posts";
import * as SC from "./styles";

export const Main = () => {
  const { publicPosts } = useSelector((state) => state.posts);

  return (
    <Container>
      <Heading $center>Посты</Heading>
      <SC.PostsSection>
        {publicPosts ? (
          publicPosts.map((publicPost) => (
            <Posts key={publicPost.id} publicPost={publicPost} />
          ))
        ) : (
          <NoContent>Нет постов</NoContent>
        )}
      </SC.PostsSection>
    </Container>
  );
};
