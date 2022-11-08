import styled from 'styled-components';

export const ContainerModal = styled.div`
  width: 100vw;
  height: 100vh;
  background: #fff;
  position: fixed;
  top: 0;
  left: 0;
  padding: 20px;
  align-items: center;
  justify-content: center;
`;

export const HeaderModal = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid #e8e8e8;

  h3 {
    font-weight: bold;
    font-size: 16px;
    color: #1766dc;
  }
`;

export const ButtonClose = styled.div`
  position: absolute;
  top: 15px;
  right: 20px;

  width: 30px;
  height: 30px;
  border: none;
  background: none;
  cursor: pointer;
  transition: 0.3 ease all;
  border-radius: 5px;
  color: #1766dc;

  &:hover {
    background: #f2f2f2;
  }

  svg {
    width: 100%;
    height: 100%;
  }
`;
