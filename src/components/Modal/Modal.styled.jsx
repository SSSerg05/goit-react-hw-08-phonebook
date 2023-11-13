import styled from "@emotion/styled";
import {Button} from "../Forms/Buttons.styles"
/*
 * Стили компонента Modal
 */

//Overlay
export const ModalBackDrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 100;
`

export const ModalBox = styled.div`
  position: relative;
  max-width: calc(100vw - 36px);
  width: 270px;
  padding-top: 68px;
  padding-bottom: 36px;
  padding-left: 12px;
  padding-right: 12px;
  background-color: var(--color-bg);
`

export const ModalButtonClose = styled(Button)`
  position: absolute;
  top: 18px;
  right: 12px;
  border-radius: 4px;
  color: var(--color-text);
  background-color: var(--color-bg);
`

export const ModalTitle = styled.div`
  position: absolute;
  top: 24px;
  left: 0;
  width: calc(100% - 24px);
  padding-left: 12px;
  font-weight: var(--fw-normal);
  color: var(--color-text);
  background-color: var(--color-bg);
`

export const ModalImage = styled.img`
  width: 100%;
  height: calc(100vh - 48px);
  object-fit: cover;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
`
