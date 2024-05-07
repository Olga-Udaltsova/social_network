import { useSelector } from "react-redux";
import { Container } from "../../components/ui/Container";
import { Heading } from "../../components/ui/Heading";
import { Section } from "../../components/ui/Section";
import avatar from "../../images/avatar.jpg";
import * as SC from "./styles";

export const MyPage = () => {
  const { user } = useSelector((state) => state.user);
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
          <div>Пользователь 1</div>
          <div>Пользователь 2</div>
          <div>Пользователь 3</div>
          <div>Пользователь 4</div>
          <div>Пользователь 5</div>
          <div>Пользователь 6</div>
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
