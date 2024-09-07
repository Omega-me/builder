'use client';
import clsx from 'clsx';
import { EyeIcon, FilePenLine, Laptop, Redo2, SendToBack, Smartphone, Tablet, Undo2 } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipTrigger } from '../../ui/tooltip';
import { Tabs, TabsList, TabsTrigger } from '../../ui/tabs';
import { eDeviceTypes } from '@/common/enums';
import { Button } from '../../ui/button';
import { CheckedState } from '@radix-ui/react-checkbox';
import { IEditorState, IEditorDimensions } from '@/common/interfaces';

interface Props {
  state: IEditorState;
  undo: () => void;
  redo: () => void;
  changeDevice: (payload: { device: eDeviceTypes }) => void;
  changeDimensions: (payload: { dimensions?: IEditorDimensions }) => void;
  handleContainerCustomSize: (e: CheckedState) => void;
  handlePreviewClick: () => void;
  toggleCustomDimensions: (payload: { isCustomDimension: boolean }) => void;
}

const EditorNavigation = (props: Props) => {
  return (
    <nav
      className={clsx('!border-b-[1px] h-[99px] flex items-center justify-between p-6 gap-2 transition-all', {
        '!h-0 !p-0 !overflow-hidden': props.state.editor.previewMode,
      })}>
      <Button variant={'ghost'} size={'icon'} className="hover:bg-slate-800" onClick={props.handlePreviewClick}>
        <EyeIcon />
      </Button>
      <aside className="flex justify-center">
        <Tabs
          defaultValue={eDeviceTypes.DESKTOP}
          className="w-fit"
          value={props.state.editor.device}
          onValueChange={value => {
            if (value === eDeviceTypes.CUSTOM) {
              props.toggleCustomDimensions({ isCustomDimension: !props.state.editor.isCustomDimension });
            } else {
              props.changeDevice({ device: value as eDeviceTypes });
            }
          }}>
          <TabsList className="grid w-full grid-cols-4 bg-transparent h-fit">
            <TabsTrigger disabled={props.state.editor.isCustomDimension} value={eDeviceTypes.DESKTOP} className="w-10 h-10 p-0 data-[state=active]:bg-muted">
              <Tooltip>
                <TooltipTrigger asChild>
                  <Laptop />
                </TooltipTrigger>
                <TooltipContent>
                  <p>{eDeviceTypes.DESKTOP}</p>
                </TooltipContent>
              </Tooltip>
            </TabsTrigger>
            <TabsTrigger disabled={props.state.editor.isCustomDimension} value={eDeviceTypes.TABLET} className="w-10 h-10 p-0 data-[state=active]:bg-muted">
              <Tooltip>
                <TooltipTrigger asChild>
                  <Tablet />
                </TooltipTrigger>
                <TooltipContent>
                  <p>{eDeviceTypes.TABLET}</p>
                </TooltipContent>
              </Tooltip>
            </TabsTrigger>
            <TabsTrigger disabled={props.state.editor.isCustomDimension} value={eDeviceTypes.MOBILE} className="w-10 h-10 p-0 data-[state=active]:bg-muted">
              <Tooltip>
                <TooltipTrigger asChild>
                  <Smartphone />
                </TooltipTrigger>
                <TooltipContent>
                  <p>{eDeviceTypes.MOBILE}</p>
                </TooltipContent>
              </Tooltip>
            </TabsTrigger>
            <TabsTrigger value={eDeviceTypes.CUSTOM} className="w-10 h-10 p-0 data-[state=active]:bg-muted">
              <Tooltip>
                <TooltipTrigger asChild>{props.state.editor.isCustomDimension ? <SendToBack /> : <FilePenLine />}</TooltipTrigger>
                <TooltipContent>
                  <p>{props.state.editor.isCustomDimension ? 'Back to standard' : eDeviceTypes.CUSTOM}</p>
                </TooltipContent>
              </Tooltip>
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </aside>
      <aside className="flex items-center gap-2">
        <Button disabled={!(props.state.history.currentIndex > 0)} onClick={props.undo} variant={'ghost'} size={'icon'} className="hover:bg-slate-800">
          <Undo2 />
        </Button>
        <Button
          disabled={!(props.state.history.currentIndex < props.state.history.history.length - 1)}
          onClick={props.redo}
          variant={'ghost'}
          size={'icon'}
          className="hover:bg-slate-800 mr-4">
          <Redo2 />
        </Button>
      </aside>
    </nav>
  );
};

export default EditorNavigation;
