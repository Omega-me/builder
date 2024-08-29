import { IEditorElement } from '@/common/interfaces';

export const addAnElement = (
  editorArray: IEditorElement[],
  payload: {
    containerId: string;
    elementDetails: IEditorElement;
  },
): IEditorElement[] => {
  return editorArray.map(item => {
    if (item.id === payload.containerId && Array.isArray(item.content)) {
      return {
        ...item,
        content: [...item.content, payload.elementDetails],
      };
    } else if (item.content && Array.isArray(item.content)) {
      return {
        ...item,
        content: addAnElement(item.content, payload),
      };
    }
    return item;
  });
};

export const updateAnElement = (
  editorArray: IEditorElement[],
  payload: {
    elementDetails: IEditorElement;
  },
): IEditorElement[] => {
  return editorArray.map(item => {
    if (item.id === payload.elementDetails.id) {
      return { ...item, ...payload.elementDetails };
    } else if (item.content && Array.isArray(item.content)) {
      return {
        ...item,
        content: updateAnElement(item.content, payload),
      };
    }
    return item;
  });
};

export const deleteAnElement = (
  editorArray: IEditorElement[],
  payload: {
    elementDetails: IEditorElement;
  },
): IEditorElement[] => {
  return editorArray.filter(item => {
    if (item.id === payload.elementDetails.id) {
      return false;
    } else if (item.content && Array.isArray(item.content)) {
      item.content = deleteAnElement(item.content, payload);
    }
    return true;
  });
};
