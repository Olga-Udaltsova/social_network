import { Container } from "../../components/Container";
import { Heading } from "../../components/ui/Heading";
import { Section } from "../../components/Section";
import avatar from "../../images/avatar.jpg";
import * as SC from "./styles";

export const MyPage = () => {
  return (
    <Container>
      <Heading>Мой профиль</Heading>
      <Section>
        <SC.Avatar src={avatar} alt="avatar" />
        <SC.Name>Мое имя</SC.Name>
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
