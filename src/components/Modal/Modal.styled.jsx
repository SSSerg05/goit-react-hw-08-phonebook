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
  background-color: rgba(0, 0, 0, 0.8);
  /* z-index: 1200; */
`

export const BoxModal = styled.div`
  position: relative;
  max-width: calc(100vw - 48px);
  max-height: calc(100vh - 24px);
`

export const ModalButtonClose = styled.button`
     position: absolute;
     top: 64px;
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
