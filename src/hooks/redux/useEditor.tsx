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
  toggleCustomDimensions as toggleCustomDimensionsAction,
  togglePreviewMode as togglePreviewModeAction,
  redo as redoAction,
  undo as undoAction,
  refresh as refreshAction,
  loadData as loadDataAction,
} from '@/state/redux/stores/editor.store';
import { useWindowDimensions } from '../useWindowDimensions';
import { useEffect, useState } from 'react';

export const useEditor = () => {
  const dim = useWindowDimensions();
  const state = useAppSelector(s => s.editor);
  const [editorStandartHeight, setEditorStandartHeight] = useState((dim?.height as number) - 100);
  const [editorStandartWidth, setEditorStandartWidth] = useState(dim?.width as number);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (state.editor.isCustomDimension) {
      setEditorStandartHeight((dim?.height as number) - 115);
    } else {
      setEditorStandartHeight((dim?.height as number) - 100);
    }
    setEditorStandartWidth(dim?.width as number);
  }, [state.editor.isCustomDimension, dim?.height, dim?.width]);

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
          mediaQuery: {};
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
  const toggleCustomDimensions = (payload: { isCustomDimension: boolean }) => {
    dispatch(toggleCustomDimensionsAction(payload));
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
   */
  const refresh = () => {
    dispatch(refreshAction());
  };

  /**
   *
   * @param payload
   */
  const loadData = (payload: { elements: IEditorElement[]; withLive: boolean }) => {
    dispatch(loadDataAction(payload));
  };

  /**
   *
   * @param state
   */
  const saveToLocalStorage = (state: IEditorState) => {
    localStorage.setItem('editor', JSON.stringify(state));
  };

  /**
   *
   * @returns
   */
  const getFromLocalStorage = (): IEditorState | null => {
    const state = localStorage.getItem('editor');
    return state ? JSON.parse(state) : null;
  };

  /**
   *
   */
  const removeFromLocalStorage = () => {
    localStorage.removeItem('editor');
  };

  return {
    state: state as IEditorState,
    editorStandartHeight: editorStandartHeight as number,
    editorStandartWidth: editorStandartWidth as number,
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
    saveToLocalStorage,
    getFromLocalStorage,
    removeFromLocalStorage,
  };
};
