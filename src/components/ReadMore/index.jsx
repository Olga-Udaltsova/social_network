import { useState } from "react";
import * as SC from "./styles";

export const ReadMore = ({ id, children }) => {
  const text = children.slice(0, 100);
  const [isTruncated, setIsTruncated] = useState(true);

  return (
    <SC.Div>
      {children.length < 100 ? (
        <p>{children}</p>
      ) : (
        <>
          <p>{text}...</p>
          <button onClick={() => setIsTruncated(!isTruncated)}>
            <SC.ReadMore to={`/${id}`}>Читать далее</SC.ReadMore>
          </button>
        </>
      )}
    </SC.Div>
  );
};
