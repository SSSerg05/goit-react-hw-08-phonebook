import styled from "@emotion/styled";
/*
 * Стили компонента Modal
 */

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(100, 0, 0, 0.8);
  z-index: 100;
`

export const BoxModal = styled.div`
  position: relative;
  max-width: calc(100vw - 10px);
  max-height: calc(100vh - 10px);
  background-color: white;
  z-index: 101;
`

export const ModalButtonClose = styled.button`
     position: absolute;
     top: 10px;
     right: 12px;
     border-radius: 4px;
`

export const ModalTitle = styled.div`
  position: absolute;
  bottom: 4px;
  left: 12px;
  width: calc(100% - 24px);
  padding-left: 12px;
  color: grey;
  background-color: rgba(0, 0, 0, 0.6);
`

export const ModalImage = styled.img`
  width: 100%;
  height: calc(100vh - 48px);
  object-fit: cover;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
`
