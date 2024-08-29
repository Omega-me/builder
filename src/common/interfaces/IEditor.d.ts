import { eDeviceTypes, eEditorBtns } from '../enums';

export interface IFunnelPage {
  id: string;
  name: string;
  pathName: string;
  createdAt: Date;
  updatedAt: Date;
  visits: number;
  content: string | null;
  order: number;
  previewImage: string | null;
  funnelId: string;
}

export interface IEditorElement {
  id: string;
  styles: React.CSSProperties;
  name: string;
  type: eEditorBtns | null | string;
  content: IEditorElement[] | { href?: string; innerText?: string; src?: string };
}

export interface IEditorDimensions {
  width?: string;
  height?: string;
}

export interface IEditor {
  liveMode: boolean;
  elements: IEditorElement[];
  selectedElement: IEditorElement;
  device: eDeviceTypes;
  previewMode: boolean;
  editorDimensions?: IEditorDimensions;
}

export interface IHistoryState {
  history: IEditor[];
  currentIndex: number;
}

export interface IEditorState {
  editor: IEditor;
  history: IHistoryState;
}
