import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { addToPrivate, addToPublic } from "../../redux/slices/postsSlice";
import { Container } from "../../components/ui/Container/Container";
import { Heading } from "../../components/ui/Heading/Heading";
import { Button } from "../../components/ui/Button/Button";
import publish from "../../images/publication.png";
import background from "../../images/background.png";
import * as SC from "./styles";

const Publication = () => {
  const [post, setPost] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.currentUser);
  const maxLength = 500;

  const handleChange = (event) => {
    const inputText = event.target.value;
    if (inputText.length <= maxLength) {
      setPost(inputText);
    }
  };

  const toPublish = () => {
    if (!post) {
      alert("Введите текст!");
      return;
    } else if (isChecked) {
      dispatch(addToPrivate({ user, post }));
      toast.success("Пост опубликован!");
      setPost("");
      return;
    }
    dispatch(addToPublic({ user, post }));
    toast.success("Пост опубликован!");
    setPost("");
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      toPublish(post);
    }
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
            onChange={handleChange}
            placeholder="Введите текст"
            autoFocus
            onKeyDown={handleKeyDown}
          />
          <SC.Limit>
            {maxLength - post.length}/{maxLength}
          </SC.Limit>
          <SC.Input>
            <input
              type="checkbox"
              id="checkbox"
              checked={isChecked}
              onChange={() => setIsChecked(!isChecked)}
            />
            <label htmlFor="checkbox">
              <span />
              Только для друзей
            </label>
          </SC.Input>
          <SC.Buttons>
            <Button onClick={() => toPublish(post)}>Опубликовать</Button>
          </SC.Buttons>
        </SC.Publication>
      </SC.Content>
    </Container>
  );
};

export default Publication;
