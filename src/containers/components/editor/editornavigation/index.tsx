'use client';
import clsx from 'clsx';
import { EyeIcon } from 'lucide-react';
import { eDeviceTypes } from '@/common/enums';
import { Button } from '../../ui/button';
import { CheckedState } from '@radix-ui/react-checkbox';
import { IEditorState, IEditorDimensions } from '@/common/interfaces';
import UndoRedo from '../undoredo';
import { EditorSizing } from '../..';
import { Tooltip, TooltipContent, TooltipTrigger } from '../../ui/tooltip';

interface Props {
  state: IEditorState;
  undo: () => void;
  redo: () => void;
  refresh: () => void;
  changeDevice: (payload: { device: eDeviceTypes }) => void;
  changeDimensions: (payload: { dimensions?: IEditorDimensions }) => void;
  handleContainerCustomSize: (e: CheckedState) => void;
  handlePreviewClick: () => void;
  toggleCustomDimensions: (payload: { isCustomDimension: boolean }) => void;
}

const EditorNavigation: React.FC<Props> = props => {
  return (
    <nav
      className={clsx('!border-b-[1px] h-[99px] flex items-center justify-between p-6 gap-2 transition-all', {
        '!h-0 !p-0 !overflow-hidden': props.state.editor.previewMode,
      })}>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant={'ghost'} size={'icon'} className="hover:bg-slate-800" onClick={props.handlePreviewClick}>
            <EyeIcon />
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Preview</p>
        </TooltipContent>
      </Tooltip>
      <EditorSizing {...props} />
      <UndoRedo {...props} />
    </nav>
  );
};

export default EditorNavigation;
