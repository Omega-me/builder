import { IEditorElement } from '../interfaces';

export const defaultStyles: React.CSSProperties = {
  backgroundPosition: 'center',
  objectFit: 'cover',
  backgroundRepeat: 'no-repeat',
  textAlign: 'left',
  opacity: '100%',
};

export const defaultElement: IEditorElement = {
  id: '',
  content: [],
  name: '',
  styles: {},
  mediaQuery: {},
  type: null,
};

export const initialCtxMenu = {
  show: false,
  x: 0,
  y: 0,
};
