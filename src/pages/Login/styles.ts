import styled from "@emotion/styled";
import { primary } from "../../colors";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #42414f;
  min-height: 100vh;
  min-width: 100vw;
`;

export const FormLogin = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #fff;
  padding: 20px;
  width: 280px;
  min-height: 300px;
  box-shadow: 0px 0px 5px 2px ${primary};

  a {
    color: ${primary};
    text-decoration: none;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

export const ButtonLogin = styled.button`
  background-color: ${primary};
  border: none;
  padding: 10px;
  border-radius: 10px;
  cursor: pointer;
  color: #fff;
`;
