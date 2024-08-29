'use client';
import { EditorNavigation } from '@/containers/components';
import { useEditor } from '@/hooks';
import { CheckedState } from '@radix-ui/react-checkbox';
import React, { useState } from 'react';

const EditorNavigationModule = () => {
  const { state, toggleLiveMode, togglePreviewMode, undo, redo, changeDevice, changeDimensions } = useEditor();
  const [customEditorSize, setCustomEditorSize] = useState(false);

  const handlePreviewClick = () => {
    togglePreviewMode();
    toggleLiveMode({ value: true });
  };

  const handleContainerCustomSize = (e: CheckedState) => {
    setCustomEditorSize(e as boolean);
    changeDimensions({
      dimensions: undefined,
    });
  };

  return (
    <EditorNavigation
      state={state}
      customEditorSize={customEditorSize}
      changeDevice={changeDevice}
      changeDimensions={changeDimensions}
      handleContainerCustomSize={handleContainerCustomSize}
      handlePreviewClick={handlePreviewClick}
      redo={redo}
      undo={undo}
    />
  );
};

export default EditorNavigationModule;
