import { useSelector } from "react-redux";
import { Container } from "../../components/ui/Container";
import { Heading } from "../../components/ui/Heading";
import { Section } from "../../components/ui/Section";
import { Friends } from "./Friends";
import avatar from "../../images/avatar.jpg";
import * as SC from "./styles";

export const MyPage = () => {
  const { user, friends } = useSelector(
    (state) => state.currentUser.currentUser
  );

  return (
    <Container>
      <Heading>Мой профиль</Heading>
      <Section>
        <SC.Avatar src={avatar} alt="avatar" />
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
            <p>Нет друзей</p>
          )}
        </SC.Friends>
      </Section>

      <Heading>Мои посты</Heading>
      <Section>
        <SC.MyPosts>
          <div>Пост 1</div>
          <div>Пост 2</div>
          <div>Пост 3</div>
          <div>Пост 4</div>
          <div>Пост 1</div>
          <div>Пост 2</div>
          <div>Пост 3</div>
          <div>Пост 4</div>
        </SC.MyPosts>
      </Section>
    </Container>
  );
};
