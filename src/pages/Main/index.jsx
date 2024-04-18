import { Container } from "../../components/Container";
import { Heading } from "../../components/ui/Heading";
import { Publication } from "../../components/Publication";
import { Posts } from "./Posts";
import publish from "../../images/publication.png";
import background from "../../images/background.png";
import * as SC from "./styles";

export const Main = () => {
  const posts = [
    {
      id: 1,
      name: "Пост 1",
    },
    {
      id: 2,
      name: "Пост 2",
    },
    {
      id: 3,
      name: "Пост 3",
    },
    {
      id: 4,
      name: "Пост 4",
    },
    {
      id: 5,
      name: "Пост 5",
    },
  ];

  return (
    <Container>
      <SC.Main>
        <Heading>Посты</Heading>
        <SC.Image src={publish} alt="picture_publication" />
        <SC.Background src={background} alt="background" />
        <SC.PostsSection>
          <Publication />
          {posts.map((post) => (
            <Posts key={post.id} post={post} />
          ))}
        </SC.PostsSection>
      </SC.Main>
    </Container>
  );
};
