import { useState } from "react";
import { Slide, ToastContainer, toast } from "react-toastify";
import { Container } from "../../components/ui/Container";
import { Heading } from "../../components/ui/Heading";
import { Button } from "../../components/ui/Button";
import { useDispatch, useSelector } from "react-redux";
import { addToPrivate, addToPublic } from "../../redux/slices/postsSlice";
import publish from "../../images/publication.png";
import background from "../../images/background.png";
import * as SC from "./styles";
import "react-toastify/dist/ReactToastify.css";

export const Publication = () => {
  const [post, setPost] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.currentUser);

  const toPublish = () => {
    if (!post) {
      alert("Введите текст!");
      return;
    } else if (isChecked) {
      dispatch(addToPrivate({ user, post }));
      toast.success("Пост опубликован!", { containerId: "1" });
      setPost("");
      return;
    }
    dispatch(addToPublic({ user, post }));
    toast.success("Пост опубликован!");
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
            maxLength={4096}
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
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        closeOnClick
        pauseOnFocusLoss
        pauseOnHover={false}
        draggable
        theme="light"
        transition={Slide}
      />
    </Container>
  );
};
