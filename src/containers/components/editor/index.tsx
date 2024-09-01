'use client';
import clsx from 'clsx';
import { EyeOff } from 'lucide-react';
import { Button } from '../ui/button';
import { Recursive, Resizable } from '..';
import { IEditorElement, IEditorState } from '@/common/interfaces';

interface Props {
  liveMode?: boolean;
  state: IEditorState;
  toggleLiveMode: (payload: { value: boolean }) => void;
  handleClick: () => void;
  handleUnpreview: () => void;
}

const Editor = (props: Props) => {
  const { handleClick, handleUnpreview, state } = props;

  return (
    <div className="flex justify-center">
      <div
        className={clsx(`p-0 use-automation-zoom-in overflow-scroll mr-[385px]`, {
          '!p-0 !mr-0': state.editor.previewMode === true || state.editor.liveMode === true,
        })}
        onClick={handleClick}>
        {state.editor.previewMode && state.editor.liveMode && (
          <Button variant={'ghost'} size={'icon'} className="w-6 h-6 bg-slate-600 p-[2px] fixed top-0 left-0 z-[100]" onClick={handleUnpreview}>
            <EyeOff />
          </Button>
        )}

        {Array.isArray(state.editor.elements) &&
          state.editor.elements.map((childElement: IEditorElement) => (
            <Resizable key={childElement.id}>
              <Recursive element={childElement} />
            </Resizable>
          ))}
      </div>
    </div>
  );
};

export default Editor;
