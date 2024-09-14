'use client';
import { EditorSidebar } from '@/containers/components';
import { useEditor } from '@/hooks';

const EditorSidebarModule = () => {
  const { state, editorStandartHeight, updateElement } = useEditor();

  const handleOnChangesSettingsTab = (e: any) => {
    const styleSettings = e.target.id;
    const value = e.target.value;
    const styleObject = {
      [styleSettings]: value,
    };

    updateElement({
      elementDetails: {
        ...state.editor.selectedElement,
        styles: {
          ...state.editor.selectedElement.styles,
          ...styleObject,
        },
      },
    });
  };

  const handleChangeCustomValuesSettingsTab = (e: any) => {
    const settingProperty = e.target.id;
    const value = e.target.value;
    const styleObject = {
      [settingProperty]: value,
    };

    updateElement({
      elementDetails: {
        ...state.editor.selectedElement,
        content: {
          ...state.editor.selectedElement.content,
          ...styleObject,
        },
      },
    });
  };

  return (
    <EditorSidebar
      state={state}
      editorStandartHeight={editorStandartHeight}
      stylings={{
        handleOnChanges: handleOnChangesSettingsTab,
        handleChangeCustomValues: handleChangeCustomValuesSettingsTab,
        updateElement,
      }}
    />
  );
};

export default EditorSidebarModule;
