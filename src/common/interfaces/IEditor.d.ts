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

export interface IEditorSidebarProps {
  state: IEditorState;
  editorStandartHeight: number;
  stylings: {
    handleOnChanges: (e: any) => void;
    handleChangeCustomValues: (e: any) => void;
  };
}
