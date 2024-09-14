import { eDeviceTypes, eEditorBtns } from '@/common/enums';
import { IEditorDimensions, IEditorElement, IEditorState, IHistoryState, IMediaQuery } from '@/common/interfaces';
import { createSlice } from '@reduxjs/toolkit';
import { EditorReducer } from '../reducers/editor.reducer';
import { getWindowDimensions } from '@/common/lib/utils';

const initialEditorState: IEditorState['editor'] = {
  elements: [
    {
      content: [],
      id: '__body',
      name: 'Body',
      styles: {},
      mediaQuery: {},
      type: eEditorBtns.BODY,
    },
  ],
  selectedElement: {
    id: '',
    content: [],
    name: '',
    styles: {},
    mediaQuery: {},
    type: null,
  },
  device: eDeviceTypes.DESKTOP,
  previewMode: false,
  liveMode: false,
  isCustomDimension: false,
  editorDimensions: {
    height: getWindowDimensions() && getWindowDimensions()?.height,
    width: getWindowDimensions() && getWindowDimensions()?.width,
  },
};

const initialHistoryState: IHistoryState = {
  history: [initialEditorState],
  currentIndex: 0,
};

export const initialState: IEditorState = {
  editor: initialEditorState,
  history: initialHistoryState,
};

const editorReducer: EditorReducer = new EditorReducer();

const globalSlice = createSlice({
  name: 'editor',
  initialState,
  reducers: {
    addElement: (state: IEditorState, { payload }: { payload: { containerId: string; elementDetails: IEditorElement } }) => {
      return editorReducer.addElement(state, payload);
    },
    updateElement: (state: IEditorState, { payload }: { payload: { elementDetails: IEditorElement } }) => {
      return editorReducer.updateElement(state, payload);
    },
    deleteElement: (state: IEditorState, { payload }: { payload: { elementDetails: IEditorElement } }) => {
      editorReducer.deleteElement(state, payload);
    },
    clickElement: (
      state: IEditorState,
      {
        payload,
      }: {
        payload: {
          elementDetails?:
            | IEditorElement
            | {
                id: '';
                content: [];
                name: '';
                styles: {};
                mediaQuery: {};
                type: null;
              };
        };
      },
    ) => {
      return editorReducer.clickElement(state, payload);
    },
    changeDevice: (state: IEditorState, { payload }: { payload: { device: eDeviceTypes } }) => {
      return editorReducer.changeDevice(state, payload);
    },
    changeDimensions: (state: IEditorState, { payload }: { payload: { dimensions?: IEditorDimensions } }) => {
      return editorReducer.changeDimensions(state, payload);
    },
    toggleCustomDimensions: (state: IEditorState, { payload }: { payload: { isCustomDimension: boolean } }) => {
      return editorReducer.toggleCustomDimensions(state, payload);
    },
    togglePreviewMode: (state: IEditorState) => {
      return editorReducer.togglePreviewMode(state);
    },
    toggleLiveMode: (state: IEditorState, { payload }: { payload: { value: boolean } }) => {
      return editorReducer.toggleLiveMode(state, payload);
    },
    redo: (state: IEditorState) => {
      return editorReducer.redo(state);
    },
    undo: (state: IEditorState) => {
      return editorReducer.undo(state);
    },
    refresh: (state: IEditorState) => {
      return editorReducer.refresh(state);
    },
    loadData: (
      state: IEditorState,
      {
        payload,
      }: {
        payload: {
          elements: IEditorElement[];
          withLive: boolean;
        };
      },
    ) => {
      return editorReducer.loadData(state, initialState, initialEditorState, payload);
    },
  },
});

export const {
  addElement,
  updateElement,
  deleteElement,
  clickElement,
  changeDevice,
  changeDimensions,
  toggleCustomDimensions,
  toggleLiveMode,
  togglePreviewMode,
  redo,
  undo,
  refresh,
  loadData,
} = globalSlice.actions;
export default globalSlice.reducer;
