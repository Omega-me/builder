import React from 'react';
import { Button } from '../../ui/button';
import { Redo2, RefreshCcw, Undo2 } from 'lucide-react';
import { IEditorState } from '@/common/interfaces';
import { Tooltip, TooltipContent, TooltipTrigger } from '../../ui/tooltip';

interface Props {
  state: IEditorState;
  undo: () => void;
  redo: () => void;
  refresh: () => void;
}

const UndoRedo: React.FC<Props> = props => {
  return (
    <aside className="flex items-center gap-2">
      <Tooltip>
        <TooltipTrigger asChild>
          <Button onClick={props.refresh} variant={'ghost'} size={'icon'} className="hover:bg-slate-800">
            <RefreshCcw />
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Refresh</p>
        </TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button disabled={!(props.state.history.currentIndex > 0)} onClick={props.undo} variant={'ghost'} size={'icon'} className="hover:bg-slate-800">
            <Undo2 />
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Undo</p>
        </TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            disabled={!(props.state.history.currentIndex < props.state.history.history.length - 1)}
            onClick={props.redo}
            variant={'ghost'}
            size={'icon'}
            className="hover:bg-slate-800 mr-4">
            <Redo2 />
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Redo</p>
        </TooltipContent>
      </Tooltip>
    </aside>
  );
};

export default UndoRedo;
