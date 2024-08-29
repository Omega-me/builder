'use client';
import clsx from 'clsx';
import { EyeOff } from 'lucide-react';
import { Button } from '../ui/button';
import { Recursive } from '..';
import { IEditorElement, IEditorState } from '@/common/interfaces';
import { eDeviceTypes } from '@/common/enums';

interface EditorProps {
  liveMode?: boolean;
  state: IEditorState;
  toggleLiveMode: (payload: { value: boolean }) => void;
  handleClick: () => void;
  handleUnpreview: () => void;
  height: string;
}

const Editor = (props: EditorProps) => {
  const { handleClick, handleUnpreview, height, state, toggleLiveMode, liveMode } = props;

  return (
    <div className="h-full flex justify-center">
      <div
        style={{
          height,
          width: state.editor.previewMode === true || state.editor.liveMode === true ? '100vw' : state.editor.editorDimensions?.width,
        }}
        className={clsx(`p-0 use-automation-zoom-in overflow-scroll mr-[385px] bg-background transition-all rounded-md`, {
          '!p-0 !mr-0': state.editor.previewMode === true || state.editor.liveMode === true,
          '!w-[850px]': state.editor.device === eDeviceTypes.TABLET && !state.editor.editorDimensions,
          '!w-[420px]': state.editor.device === eDeviceTypes.MOBILE && !state.editor.editorDimensions,
          'w-full h-full': state.editor.device === eDeviceTypes.DESKTOP && !state.editor.editorDimensions,
        })}
        onClick={handleClick}>
        {state.editor.previewMode && state.editor.liveMode && (
          <Button variant={'ghost'} size={'icon'} className="w-6 h-6 bg-slate-600 p-[2px] fixed top-0 left-0 z-[100]" onClick={handleUnpreview}>
            <EyeOff />
          </Button>
        )}
        {Array.isArray(state.editor.elements) &&
          state.editor.elements.map((childElement: IEditorElement) => <Recursive key={childElement.id} element={childElement} />)}
      </div>
    </div>
  );
};

export default Editor;
