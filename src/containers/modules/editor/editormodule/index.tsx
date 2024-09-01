'use client';
import { useEffect } from 'react';
import { useEditor } from '@/hooks';
import { Editor } from '@/containers/components';

interface Props {
  liveMode?: boolean;
}

const EditorModule = (props: Props) => {
  const { liveMode } = props;
  const { state, toggleLiveMode, clickElement, togglePreviewMode } = useEditor();

  useEffect(() => {
    if (liveMode) {
      toggleLiveMode({ value: true });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [liveMode]);

  const handleClick = () => {
    clickElement({});
  };

  const handleUnpreview = () => {
    toggleLiveMode({ value: false });
    togglePreviewMode();
  };

  return <Editor state={state} toggleLiveMode={toggleLiveMode} handleClick={handleClick} handleUnpreview={handleUnpreview} />;
};

export default EditorModule;
