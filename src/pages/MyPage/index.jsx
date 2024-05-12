import { useSelector } from "react-redux";
import { Container } from "../../components/ui/Container";
import { Heading } from "../../components/ui/Heading";
import { Section } from "../../components/ui/Section";
import { Avatar } from "../../components/ui/Avatar";
import { NoContent } from "../../components/ui/NoContent";
import { Friends } from "./Friends";
import { Posts } from "./Posts";
import * as SC from "./styles";

export const MyPage = () => {
  const { user, friends } = useSelector(
    (state) => state.currentUser.currentUser
  );
  const { posts } = useSelector((state) => state.posts.privatePosts);
  const { publicPosts } = useSelector((state) => state.posts);
  const filteredPosts = publicPosts.filter((item) => {
    if (item.user === user) {
      return item;
    }
  });
  const myPosts = filteredPosts.map((filter) => filter.post).concat(posts);

  return (
    <Container>
      <Heading>Мой профиль</Heading>
      <Section>
        <Avatar $value="260px" $radius="125px" />
        <SC.Info>
          <SC.Name>{user.name}</SC.Name>
          <SC.Email>{user.email}</SC.Email>
        </SC.Info>
      </Section>

      <Heading>Мои друзья</Heading>
      <Section>
        <SC.Friends>
          {friends ? (
            friends.map((friend) => <Friends key={friend.id} friend={friend} />)
          ) : (
            <NoContent>Нет друзей</NoContent>
          )}
        </SC.Friends>
      </Section>

      <Heading>Мои посты</Heading>
      <Section>
        <SC.MyPosts>
          {myPosts ? (
            myPosts.map((post) => <Posts post={post} />)
          ) : (
            <NoContent>Нет постов</NoContent>
          )}
        </SC.MyPosts>
      </Section>
    </Container>
  );
};
