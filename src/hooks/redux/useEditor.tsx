import { eDeviceTypes } from '@/common/enums';
import { IEditorDimensions, IEditorElement, IEditorState } from '@/common/interfaces';
import { useAppDispatch, useAppSelector } from '@/state/redux/store';
import {
  addElement as addElementAction,
  updateElement as updateElementAction,
  deleteElement as deleteElementAction,
  clickElement as clickElementAction,
  changeDevice as changeDeviceAction,
  changeDimensions as changeDimensionsAction,
  toggleLiveMode as toggleLiveModeAction,
  togglePreviewMode as togglePreviewModeAction,
  redo as redoAction,
  undo as undoAction,
  loadData as loadDataAction,
} from '@/state/redux/stores/editor.store';

export const useEditor = () => {
  const state = useAppSelector(s => s.editor);
  const dispatch = useAppDispatch();

  /**
   *
   * @param payload
   */
  const addElement = (payload: { containerId: string; elementDetails: IEditorElement }) => {
    dispatch(addElementAction(payload));
  };

  /**
   *
   * @param payload
   */
  const updateElement = (payload: { elementDetails: IEditorElement }) => {
    dispatch(updateElementAction(payload));
  };

  /**
   *
   * @param payload
   */
  const deleteElement = (payload: { elementDetails: IEditorElement }) => {
    dispatch(deleteElementAction(payload));
  };

  /**
   *
   * @param payload
   */
  const clickElement = (payload: {
    elementDetails?:
      | IEditorElement
      | {
          id: '';
          content: [];
          name: '';
          styles: {};
          type: null;
        };
  }) => {
    dispatch(clickElementAction(payload));
  };

  /**
   *
   * @param payload
   */
  const changeDevice = (payload: { device: eDeviceTypes }) => {
    dispatch(changeDeviceAction(payload));
  };

  /**
   *
   * @param payload
   */
  const changeDimensions = (payload: { dimensions?: IEditorDimensions }) => {
    dispatch(changeDimensionsAction(payload));
  };

  /**
   *
   * @param payload
   */
  const toggleLiveMode = (payload: { value: boolean }) => {
    dispatch(toggleLiveModeAction(payload));
  };

  /**
   *
   */
  const togglePreviewMode = () => {
    dispatch(togglePreviewModeAction());
  };

  /**
   *
   */
  const redo = () => {
    dispatch(redoAction());
  };

  /**
   *
   */
  const undo = () => {
    dispatch(undoAction());
  };

  /**
   *
   * @param payload
   */
  const loadData = (payload: { elements: IEditorElement[]; withLive: boolean }) => {
    dispatch(loadDataAction(payload));
  };

  return {
    state: state as IEditorState,
    addElement,
    updateElement,
    deleteElement,
    clickElement,
    changeDevice,
    changeDimensions,
    toggleLiveMode,
    togglePreviewMode,
    redo,
    undo,
    loadData,
  };
};
