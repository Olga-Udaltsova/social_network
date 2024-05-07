import { Button } from "../../../components/ui/Button";
import * as SC from "./styles";

export const Publication = () => (
  <SC.Publication>
    <SC.Subtitle>Опубликовать пост</SC.Subtitle>
    <SC.Textarea rows={10} placeholder="Введите текст" />
    <SC.Buttons>
      <Button>Опубликовать</Button>
    </SC.Buttons>
  </SC.Publication>
);
