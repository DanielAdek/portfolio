import Style from 'styled-components';

export const PanelContainer = Style.div`
  width: 100%;
  position: sticky;
  top: 0;
  z-index: 2;
  height: 54px;
  background: #2d2d2d;
  box-shadow: 0 1px rgba(0,0,0,.04), inset 0 -1px rgba(0,0,0,.04);
  display: flex;
  justify-content: flex-start;
  padding-left: 90px;
`;

export const PanelLinksCover = Style.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const PanelLinkUl = Style.ul`
  height: inherit;
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
  font-size: 19px;
  color: #333;
  font-weight: 700;
`;

export const PanelLinKLi = Style.li`
  margin-right: 68px;
  cursor: pointer;
  color: #fff;
  text-transform: uppercase;
  &:hover {
    color: #ccc;
  }
`;

export const PanelLink = Style.a`
  color: #fff;
`;
