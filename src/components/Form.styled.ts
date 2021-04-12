import styled from "@emotion/styled";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const FormFields = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  border: thin solid #ccc;
  box-shadow: 0 0 10px #ccc;
  padding: 10px;
  border-radius: 10px;
`;

export const InputContainer = styled.div`
  margin-bottom: 10px;
`;

export const Button = styled.button`
  cursor: pointer;
`;
