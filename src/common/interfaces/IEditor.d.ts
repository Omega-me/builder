import { eDeviceTypes, eEditorBtns } from '../enums';

export interface IMediaQuery {
  [name: string]: {
    id: string;
    mediaWidth: number;
    styles: React.CSSProperties;
  };
}

export interface IEditorElement {
  id: string;
  styles: React.CSSProperties;
  mediaQuery: IMediaQuery;
  name: string;
  type: eEditorBtns | null | string;
  content: IEditorElement[] | { href?: string; innerText?: string; src?: string };
}

export interface IEditorDimensions {
  width?: number;
  height?: number;
}

export interface IEditor {
  liveMode: boolean;
  elements: IEditorElement[];
  selectedElement: IEditorElement;
  device: eDeviceTypes;
  previewMode: boolean;
  editorDimensions?: IEditorDimensions;
  isCustomDimension: boolean;
}

export interface IHistoryState {
  history: IEditor[];
  currentIndex: number;
}

export interface IEditorState {
  editor: IEditor;
  history: IHistoryState;
}
