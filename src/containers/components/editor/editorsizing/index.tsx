import React from 'react';
import { Tooltip, TooltipContent, TooltipTrigger } from '../../ui/tooltip';
import { Tabs, TabsList, TabsTrigger } from '../../ui/tabs';
import { eDeviceTypes } from '@/common/enums';
import { FilePenLine, Laptop, SendToBack, Smartphone, Tablet } from 'lucide-react';
import { IEditorState } from '@/common/interfaces';

interface Props {
  state: IEditorState;
  changeDevice: (payload: { device: eDeviceTypes }) => void;
  toggleCustomDimensions: (payload: { isCustomDimension: boolean }) => void;
}

const EditorSizing: React.FC<Props> = props => {
  return (
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
  );
};

export default EditorSizing;
