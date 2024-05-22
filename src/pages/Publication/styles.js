import styled from "styled-components";

export const Content = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
`;

export const Image = styled.img`
  position: absolute;
  width: 450px;
  top: 15px;
  left: -80px;
`;

export const Background = styled.img`
  position: absolute;
  width: 450px;
  top: 0;
  right: -50px;
`;

export const Publication = styled.div`
  max-width: 500px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const Subtitle = styled.p`
  font-size: 18px;
`;

export const Textarea = styled.textarea`
  width: 100%;
  resize: none;
  outline: none;
  border: 3px solid #5e5da6;
  border-radius: 10px;
  font-size: 15px;
  padding: 5px;
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const Input = styled.div`
  label {
    display: flex;
    align-items: center;
    gap: 10px;
    cursor: pointer;
    span {
      display: block;
      position: relative;
      width: 25px;
      height: 25px;
      border: 2px solid #5e5da6;
      border-radius: 50%;
      transition: background-color 150ms 200ms,
        transform 350ms cubic-bezier(0.78, -1.22, 0.17, 1.89);

      &:before {
        content: "";
        width: 0px;
        height: 2px;
        border-radius: 2px;
        background: #fff;
        position: absolute;
        transform: rotate(45deg);
        top: 10px;
        left: 6px;
        transition: width 50ms ease 50ms;
        transform-origin: 0% 0%;
      }

      &:after {
        content: "";
        width: 0;
        height: 2px;
        border-radius: 2px;
        background: #fff;
        position: absolute;
        transform: rotate(310deg);
        top: 15px;
        left: 8px;
        transition: width 50ms ease;
        transform-origin: 0% 0%;
      }
    }

    &:hover {
      span {
        &:before {
          width: 6px;
          transition: width 100ms ease;
        }

        &:after {
          width: 10px;
          transition: width 150ms ease 100ms;
        }
      }
    }
  }

  input {
    display: none;
    &:checked {
      + label {
        span {
          background: #fff;
          transform: scale(1.25);

          &:after {
            width: 10px;
            background: #313da8;
            transition: width 150ms ease 100ms;
          }

          &:before {
            width: 6px;
            background: #313da8;
            transition: width 150ms ease 100ms;
          }
        }

        &:hover {
          span {
            background: #fff;
            transform: scale(1.25);

            &:after {
              width: 10px;
              background: #313da8;
              transition: width 150ms ease 100ms;
            }
            &:before {
              width: 6px;
              background: #313da8;
              transition: width 150ms ease 100ms;
            }
          }
        }
      }
    }
  }
`;
