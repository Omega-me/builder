'use client';
import clsx from 'clsx';
import { EyeIcon, Laptop, Redo2, Smartphone, Tablet, Undo2, X } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../../ui/tooltip';
import { Tabs, TabsList, TabsTrigger } from '../../ui/tabs';
import { eDeviceTypes } from '@/common/enums';
import { Button } from '../../ui/button';
import { useEditor } from '@/hooks';
import { Checkbox } from '../../ui/checkbox';
import { useState } from 'react';
import { Input } from '../../ui/input';
import { CheckedState } from '@radix-ui/react-checkbox';
import { IEditorState, IEditorDimensions } from '@/common/interfaces';

interface EditorNavigationProps {
  state: IEditorState;
  undo: () => void;
  redo: () => void;
  changeDevice: (payload: { device: eDeviceTypes }) => void;
  changeDimensions: (payload: { dimensions?: IEditorDimensions }) => void;
  handleContainerCustomSize: (e: CheckedState) => void;
  customEditorSize: boolean;
  handlePreviewClick: () => void;
}

const EditorNavigation = (props: EditorNavigationProps) => {
  return (
    <TooltipProvider>
      <nav
        className={clsx('!border-b-[1px] h-[99px] flex items-center justify-between p-6 gap-2 transition-all', {
          '!h-0 !p-0 !overflow-hidden': props.state.editor.previewMode,
        })}>
        <Button variant={'ghost'} size={'icon'} className="hover:bg-slate-800" onClick={props.handlePreviewClick}>
          <EyeIcon />
        </Button>
        <aside className="flex justify-center">
          {!props.customEditorSize ? (
            <Tabs
              defaultValue={eDeviceTypes.DESKTOP}
              className="w-fit "
              value={props.state.editor.device}
              onValueChange={value => {
                props.changeDevice({ device: value as eDeviceTypes });
              }}>
              <TabsList className="grid w-full grid-cols-3 bg-transparent h-fit">
                <Tooltip>
                  <TooltipTrigger>
                    <TabsTrigger value={eDeviceTypes.DESKTOP} className="data-[state=active]:bg-muted w-10 h-10 p-0">
                      <Laptop />
                    </TabsTrigger>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{eDeviceTypes.DESKTOP}</p>
                  </TooltipContent>
                </Tooltip>
                <Tooltip>
                  <TooltipTrigger>
                    <TabsTrigger value={eDeviceTypes.TABLET} className="w-10 h-10 p-0 data-[state=active]:bg-muted">
                      <Tablet />
                    </TabsTrigger>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{eDeviceTypes.TABLET}</p>
                  </TooltipContent>
                </Tooltip>
                <Tooltip>
                  <TooltipTrigger>
                    <TabsTrigger value={eDeviceTypes.MOBILE} className="w-10 h-10 p-0 data-[state=active]:bg-muted">
                      <Smartphone />
                    </TabsTrigger>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{eDeviceTypes.MOBILE}</p>
                  </TooltipContent>
                </Tooltip>
              </TabsList>
            </Tabs>
          ) : (
            <div className="flex justify-start items-center">
              <Input
                onChange={e =>
                  props.changeDimensions({
                    dimensions: {
                      ...props.state.editor.editorDimensions,
                      width: e.target.value,
                    },
                  })
                }
                className="w-[100px]"
                type="text"
                placeholder="Width"
                width={30}
              />{' '}
              <X className="w-10" />
              <Input
                onChange={e =>
                  props.changeDimensions({
                    dimensions: {
                      ...props.state.editor.editorDimensions,
                      height: e.target.value,
                    },
                  })
                }
                className="w-[100px] mr-5"
                type="text"
                placeholder="Height"
              />
            </div>
          )}
          <div className="flex items-center space-x-2">
            <Checkbox id="customEditorSize" onCheckedChange={props.handleContainerCustomSize} />
            <label htmlFor="customEditorSize" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              Use Custom size
            </label>
          </div>
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
    </TooltipProvider>
  );
};

export default EditorNavigation;
