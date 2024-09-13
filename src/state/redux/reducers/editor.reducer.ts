import { eDeviceTypes } from '@/common/enums';
import { IEditorState, IEditorElement, IEditorDimensions } from '@/common/interfaces';
import { addAnElement, deleteAnElement, updateAnElement } from '../actions/editor.action';
import { defaultElement } from '@/common/configs';

export class EditorReducer {
  public addElement = (state: IEditorState, payload: { containerId: string; elementDetails: IEditorElement }) => {
    const updatedEditorState: IEditorState['editor'] = {
      ...state.editor,
      elements: addAnElement(state.editor.elements, payload),
    };
    // Update the history to include the entire updated EditorState
    const updatedHistory = [
      ...state.history.history.slice(0, state.history.currentIndex + 1),
      { ...updatedEditorState }, // Save a copy of the updated state
    ];

    const newEditorState: IEditorState = {
      ...state,
      editor: updatedEditorState,
      history: {
        ...state.history,
        history: updatedHistory,
        currentIndex: updatedHistory.length - 1,
      },
    };

    return newEditorState;
  };
  public updateElement = (state: IEditorState, payload: { elementDetails: IEditorElement }) => {
    // Perform your logic to update the element in the state
    const updatedElements = updateAnElement(state.editor.elements, payload);

    const UpdatedElementIsSelected = state.editor.selectedElement.id === payload.elementDetails.id;

    const updatedEditorStateWithUpdate = {
      ...state.editor,
      elements: updatedElements,
      selectedElement: UpdatedElementIsSelected
        ? payload.elementDetails
        : {
            id: '',
            content: [],
            name: '',
            styles: {},
            mediaQuery: {},
            type: null,
          },
    };

    const updatedHistoryWithUpdate = [
      ...state.history.history.slice(0, state.history.currentIndex + 1),
      { ...updatedEditorStateWithUpdate }, // Save a copy of the updated state
    ];
    const updatedEditor = {
      ...state,
      editor: updatedEditorStateWithUpdate,
      history: {
        ...state.history,
        history: updatedHistoryWithUpdate,
        currentIndex: updatedHistoryWithUpdate.length - 1,
      },
    };
    return updatedEditor;
  };
  public deleteElement = (state: IEditorState, payload: { elementDetails: IEditorElement }) => {
    // Perform your logic to delete the element from the state
    const updatedElementsAfterDelete = deleteAnElement(state.editor.elements, payload);
    const updatedEditorStateAfterDelete = {
      ...state.editor,
      elements: updatedElementsAfterDelete,
    };
    const updatedHistoryAfterDelete = [
      ...state.history.history.slice(0, state.history.currentIndex + 1),
      { ...updatedEditorStateAfterDelete }, // Save a copy of the updated state
    ];

    const deletedState = {
      ...state,
      editor: updatedEditorStateAfterDelete,
      history: {
        ...state.history,
        history: updatedHistoryAfterDelete,
        currentIndex: updatedHistoryAfterDelete.length - 1,
      },
    };
    return deletedState;
  };
  public clickElement = (
    state: IEditorState,
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
    },
  ) => {
    const clickedState = {
      ...state,
      editor: {
        ...state.editor,
        selectedElement: payload.elementDetails || {
          id: '',
          content: [],
          name: '',
          styles: {},
          mediaQuery: {},
          type: null,
        },
      },
      history: {
        ...state.history,
        history: [
          ...state.history.history.slice(0, state.history.currentIndex + 1),
          { ...state.editor }, // Save a copy of the current editor state
        ],
        currentIndex: state.history.currentIndex + 1,
      },
    };
    return clickedState;
  };
  public changeDevice = (state: IEditorState, payload: { device: eDeviceTypes }) => {
    const editorDimensions: IEditorDimensions = {};
    if (payload.device === eDeviceTypes.DESKTOP) {
      editorDimensions.width = 100;
    }
    if (payload.device === eDeviceTypes.TABLET) {
      editorDimensions.width = 850;
    }
    if (payload.device === eDeviceTypes.MOBILE) {
      editorDimensions.width = 420;
    }

    const changedDeviceState: IEditorState = {
      ...state,
      editor: {
        ...state.editor,
        device: payload.device,
        editorDimensions: {
          height: state.editor.editorDimensions?.height,
          width: editorDimensions.width,
        },
      },
    };

    return changedDeviceState;
  };
  public changeDimensions = (state: IEditorState, payload: { dimensions?: IEditorDimensions }) => {
    const changedDeviceState: IEditorState = {
      ...state,
      editor: {
        ...state.editor,
        editorDimensions: {
          height: payload.dimensions?.height ? payload.dimensions?.height : state.editor.editorDimensions?.height,
          width: payload.dimensions?.width ? payload.dimensions?.width : state.editor.editorDimensions?.width,
        },
      },
    };
    return changedDeviceState;
  };
  public toggleCustomDimensions = (state: IEditorState, payload: { isCustomDimension: boolean }) => {
    const changedDeviceState: IEditorState = {
      ...state,
      editor: {
        ...state.editor,
        isCustomDimension: payload.isCustomDimension,
        device: eDeviceTypes.DESKTOP,
      },
    };
    return changedDeviceState;
  };
  public togglePreviewMode = (state: IEditorState) => {
    const toggleState = {
      ...state,
      editor: {
        ...state.editor,
        previewMode: !state.editor.previewMode,
      },
    };
    return toggleState;
  };
  public toggleLiveMode = (state: IEditorState, payload: { value: boolean }) => {
    const toggleLiveMode: IEditorState = {
      ...state,
      editor: {
        ...state.editor,
        liveMode: payload ? payload.value : !state.editor.liveMode,
      },
    };
    return toggleLiveMode;
  };
  public redo = (state: IEditorState) => {
    if (state.history.currentIndex < state.history.history.length - 1) {
      const nextIndex = state.history.currentIndex + 1;
      const nextEditorState = { ...state.history.history[nextIndex] };
      const redoState = {
        ...state,
        editor: nextEditorState,
        history: {
          ...state.history,
          currentIndex: nextIndex,
        },
      };
      return redoState;
    }
    return state;
  };
  public undo = (state: IEditorState) => {
    if (state.history.currentIndex > 0) {
      const prevIndex = state.history.currentIndex - 1;
      const prevEditorState = { ...state.history.history[prevIndex] };
      const undoState = {
        ...state,
        editor: prevEditorState,
        history: {
          ...state.history,
          currentIndex: prevIndex,
        },
      };
      return undoState;
    }
    return state;
  };
  public refresh = (state: IEditorState) => {
    const refreshedState: IEditorState = {
      ...state,
      editor: {
        ...state.editor,
        selectedElement: defaultElement,
        device: eDeviceTypes.DESKTOP,
        isCustomDimension: false,
      },
    };
    return refreshedState;
  };
  public loadData = (
    _state: IEditorState,
    initialState: IEditorState,
    initialEditorState: IEditorState['editor'],
    payload: {
      elements: IEditorElement[];
      withLive: boolean;
    },
  ) => {
    return {
      ...initialState,
      editor: {
        ...initialState.editor,
        elements: payload.elements || initialEditorState.elements,
        liveMode: !!payload.withLive,
      },
    };
  };
}
