import styled from "styled-components";

export const Sidebar = styled.div`
  position: sticky;
  top: 6rem;
  width: var(--sidebar-width);
  max-width: var(--sidebar-width);
  flex-shrink: 0;
  height: var(--portfolio-panel-height);
  min-height: 0;
  max-height: var(--portfolio-panel-height);
  overflow: hidden;
  margin-left: 2rem;
  background: #ffffff;
  border: 1px solid #1b1b1b33;
  z-index: 2;
  display: flex;
  flex-direction: column;

  @media (max-width: 1023px) {
    position: relative;
    top: auto;
    width: 100%;
    margin-left: 0;
    max-width: 100%;
    height: auto;
    max-height: none;
    min-height: 0;
    align-self: auto;
    display: flex;
    flex-direction: row;
  }
`;

export const Title = styled.div`
  padding: 1.25rem;
  font-weight: 600;
  border-bottom: 1px solid #ddd;

  @media (max-width: 1023px) {
    display: none;
  }
`;

export const ScrollWrapper = styled.div`
  flex: 1 1 auto;
  min-height: 0;
  overflow-y: auto;
  overflow-x: hidden;
  scrollbar-width: thin;
  scrollbar-color: #c8a24c #f2f2f2;

  &::-webkit-scrollbar {
    width: 0.375rem;
  }

  &::-webkit-scrollbar-track {
    background: #f2f2f2;
  }

  &::-webkit-scrollbar-thumb {
    background: #c8a24c;
    border-radius: 10px;
  }

  @media (max-width: 1023px) {
    display: flex;
    flex: 0 1 auto;
    width: 100%;
    max-height: none;
    overflow-x: auto;
    overflow-y: hidden;
    white-space: nowrap;
    scrollbar-width: thin;
    -webkit-overflow-scrolling: touch;

    &::-webkit-scrollbar {
      height: 0.375rem;
      width: auto;
    }
  }
`;

export const LocationItem = styled.button<{ $active: boolean }>`
  width: 100%;
  padding: 1.125rem 1.25rem;
  border: 0;
  border-bottom: 1px solid #eee;
  cursor: pointer;
  font: inherit;
  line-height: 1.25;
  overflow-wrap: anywhere;
  text-align: left;
  transition: 0.3s;

  background: ${({ $active }) => ($active ? "#c8a24c" : "#fff")};
  color: ${({ $active }) => ($active ? "#fff" : "#000")};

  &:hover {
    background: #c8a24c;
    color: #fff;
  }

  &:focus-visible {
    outline: 2px solid #c8a24c;
    outline-offset: -2px;
  }

  @media (max-width: 1023px) {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    height: 3.5rem;
    width: auto;
    min-width: max-content;
    flex-shrink: 0;
    padding: 0 1.125rem;
    border-bottom: none;
    border-right: 1px solid #eee;
    overflow-wrap: normal;
    text-align: center;
    font-size: 0.9375rem;
  }

  @media (max-width: 480px) {
    height: 3.25rem;
    padding: 0 0.875rem;
    font-size: 0.8125rem;
  }
`;
