import { eDeviceTypes, eEditorBtns } from '@/common/enums';
import { IEditorDimensions, IEditorElement, IEditorState, IHistoryState } from '@/common/interfaces';
import { createSlice } from '@reduxjs/toolkit';
import { EditorReducer } from '../reducers/editor.reducer';

const initialEditorState: IEditorState['editor'] = {
  elements: [
    {
      content: [],
      id: '__body',
      name: 'Body',
      styles: {},
      type: eEditorBtns.BODY,
    },
  ],
  selectedElement: {
    id: '',
    content: [],
    name: '',
    styles: {},
    type: null,
  },
  device: eDeviceTypes.DESKTOP,
  previewMode: false,
  liveMode: false,
  isCustomDimension: false,
};

const initialHistoryState: IHistoryState = {
  history: [initialEditorState],
  currentIndex: 0,
};

export const initialState: IEditorState = {
  editor: initialEditorState,
  history: initialHistoryState,
};

const globalSlice = createSlice({
  name: 'editor',
  initialState,
  reducers: {
    addElement: (state: IEditorState, { payload }: { payload: { containerId: string; elementDetails: IEditorElement } }) => {
      return new EditorReducer().addElement(state, payload);
    },
    updateElement: (state: IEditorState, { payload }: { payload: { elementDetails: IEditorElement } }) => {
      return new EditorReducer().updateElement(state, payload);
    },
    deleteElement: (state: IEditorState, { payload }: { payload: { elementDetails: IEditorElement } }) => {
      new EditorReducer().deleteElement(state, payload);
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
                type: null;
              };
        };
      },
    ) => {
      return new EditorReducer().clickElement(state, payload);
    },
    changeDevice: (state: IEditorState, { payload }: { payload: { device: eDeviceTypes } }) => {
      return new EditorReducer().changeDevice(state, payload);
    },
    changeDimensions: (state: IEditorState, { payload }: { payload: { dimensions?: IEditorDimensions } }) => {
      return new EditorReducer().changeDimensions(state, payload);
    },
    toggleCustomDimensions: (state: IEditorState, { payload }: { payload: { isCustomDimension: boolean } }) => {
      return new EditorReducer().toggleCustomDimensions(state, payload);
    },
    togglePreviewMode: (state: IEditorState) => {
      return new EditorReducer().togglePreviewMode(state);
    },
    toggleLiveMode: (state: IEditorState, { payload }: { payload: { value: boolean } }) => {
      return new EditorReducer().toggleLiveMode(state, payload);
    },
    redo: (state: IEditorState) => {
      return new EditorReducer().redo(state);
    },
    undo: (state: IEditorState) => {
      return new EditorReducer().undo(state);
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
      return new EditorReducer().loadData(state, initialState, initialEditorState, payload);
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
  loadData,
} = globalSlice.actions;
export default globalSlice.reducer;
