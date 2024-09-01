'use client';
import { EditorNavigation } from '@/containers/components';
import { useEditor } from '@/hooks';
import { CheckedState } from '@radix-ui/react-checkbox';
import React from 'react';

const EditorNavigationModule = () => {
  const { editorStandartHeight, state, toggleLiveMode, togglePreviewMode, undo, redo, changeDevice, changeDimensions, toggleCustomDimensions } = useEditor();

  const handlePreviewClick = () => {
    togglePreviewMode();
    toggleLiveMode({ value: true });
  };

  const handleContainerCustomSize = (e: CheckedState) => {
    toggleCustomDimensions({ isCustomDimension: e as boolean });
    changeDimensions({
      dimensions: {
        height: editorStandartHeight,
      },
    });
  };

  return (
    <EditorNavigation
      state={state}
      changeDevice={changeDevice}
      changeDimensions={changeDimensions}
      handleContainerCustomSize={handleContainerCustomSize}
      handlePreviewClick={handlePreviewClick}
      redo={redo}
      undo={undo}
      toggleCustomDimensions={toggleCustomDimensions}
    />
  );
};

export default EditorNavigationModule;
