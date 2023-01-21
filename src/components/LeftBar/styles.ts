import styled from "@emotion/styled";
import { primary } from "../../colors";

type ContainerLeftProps = {
  background?: string;
};

export const Container = styled.div<ContainerLeftProps>`
  background-color: ${({ background }) => (background ? background : primary)};
  min-height: 100vh;
`;
