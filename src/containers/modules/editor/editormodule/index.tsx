'use client';
import { useEffect, useState } from 'react';
import { useEditor, useWindowDimensions } from '@/hooks';
import { Editor } from '@/containers/components';

interface EditorModuleProps {
  liveMode?: boolean;
}

const EditorModule = (props: EditorModuleProps) => {
  const { liveMode } = props;
  const { state, toggleLiveMode, clickElement, togglePreviewMode } = useEditor();
  const [height, setHeight] = useState('');
  const dim = useWindowDimensions();

  useEffect(() => {
    if (liveMode) {
      toggleLiveMode({ value: true });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [liveMode]);

  useEffect(() => {
    if (state.editor.previewMode === true || state.editor.liveMode === true) {
      setHeight('100vh');
    } else if (state.editor.editorDimensions?.height) {
      setHeight(state.editor.editorDimensions?.height);
    } else if (dim?.height) {
      setHeight(`${dim.height - 100}px`);
    } else {
      setHeight('100vh');
    }
    console.log(state);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.editor.editorDimensions?.height, dim?.height, state.editor.previewMode, state.editor.liveMode]);

  const handleClick = () => {
    clickElement({});
  };

  const handleUnpreview = () => {
    toggleLiveMode({ value: false });
    togglePreviewMode();
  };
  return <Editor state={state} toggleLiveMode={toggleLiveMode} handleClick={handleClick} handleUnpreview={handleUnpreview} height={height} />;
};

export default EditorModule;
