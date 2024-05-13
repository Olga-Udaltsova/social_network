import { useState } from "react";
import { Container } from "../../components/ui/Container";
import { Heading } from "../../components/ui/Heading";
import { Button } from "../../components/ui/Button";
import { useDispatch, useSelector } from "react-redux";
import { toAddPrivate, toAddPublic } from "../../redux/slices/postsSlice";
import publish from "../../images/publication.png";
import background from "../../images/background.png";
import * as SC from "./styles";

export const Publication = () => {
  const [post, setPost] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.currentUser.currentUser);

  const toPublish = () => {
    if (!post) {
      alert("Введите текст!");
      return;
    } else if (isChecked) {
      dispatch(toAddPrivate({ user, post }));
      setPost("");
      return;
    }
    dispatch(toAddPublic({ user, post }));
    setPost("");
  };

  return (
    <Container>
      <SC.Content>
        <SC.Image src={publish} alt="picture_publication" />
        <SC.Background src={background} alt="background" />
        <SC.Publication>
          <Heading $center>Опубликовать пост</Heading>
          <SC.Textarea
            rows={10}
            value={post}
            onChange={(e) => setPost(e.target.value)}
            placeholder="Введите текст"
            autoFocus
          />
          <SC.Input>
            <input
              type="checkbox"
              id="checkbox"
              checked={isChecked}
              onChange={() => setIsChecked(!isChecked)}
            />
            <label htmlFor="checkbox">Только для друзей</label>
          </SC.Input>
          <SC.Buttons>
            <Button onClick={() => toPublish(post)}>Опубликовать</Button>
          </SC.Buttons>
        </SC.Publication>
      </SC.Content>
    </Container>
  );
};
