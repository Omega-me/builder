'use client';

import React, { useState } from 'react';
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '../../ui/select';
import { MediaQueryForm, StylingsTab } from '../..';
import { IEditorElement, IEditorState } from '@/common/interfaces';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../ui/card';

interface Props {
  state: IEditorState;
  handleOnChanges: (e: any) => void;
  handleChangeCustomValues: (e: any) => void;
  updateElement: (payload: { elementDetails: IEditorElement }) => void;
}

const mediaQuery: {
  [key: string]: { id: number; content: (props: Props) => React.ReactNode };
} = {
  mobile: {
    id: 1,
    content: (props: Props) => (
      <div>
        <div className="sticky top-14 z-50 ml-2 w-[95%] h-10 bg-slate-800 flex justify-between items-center rounded-md cursor-pointer text-slate-400 text-sm">
          <a className="flex items-center pl-4 w-full h-full flex-1" href="#styling_header">
            Mobile
          </a>
          <MediaQueryForm isEdit={true} state={props.state} updateElement={props.updateElement} />
        </div>
        <StylingsTab handleChangeCustomValues={props.handleChangeCustomValues} handleOnChanges={props.handleOnChanges} state={props.state} />
      </div>
    ),
  },
  desktop: {
    id: 2,
    content: (props: Props) => (
      <div>
        <div className="sticky top-14 z-50 ml-2 w-[95%] h-10 bg-slate-800 flex justify-between items-center rounded-md cursor-pointer text-slate-400 text-sm">
          <a className="flex items-center pl-4 w-full h-full flex-1" href="#styling_header">
            desktop
          </a>
          <MediaQueryForm isEdit={true} state={props.state} updateElement={props.updateElement} />
        </div>
        <StylingsTab handleChangeCustomValues={props.handleChangeCustomValues} handleOnChanges={props.handleOnChanges} state={props.state} />
      </div>
    ),
  },
  'max-width-700': {
    id: 2,
    content: (props: Props) => (
      <div>
        <div className="sticky top-14 z-50 ml-2 w-[95%] h-10 bg-slate-800 flex justify-between items-center rounded-md cursor-pointer text-slate-400 text-sm">
          <a className="flex items-center pl-4 w-full h-full flex-1" href="#styling_header">
            max-width-700
          </a>
          <MediaQueryForm isEdit={true} state={props.state} updateElement={props.updateElement} />
        </div>
        <StylingsTab handleChangeCustomValues={props.handleChangeCustomValues} handleOnChanges={props.handleOnChanges} state={props.state} />
      </div>
    ),
  },
};

const MediaQuery: React.FC<Props> = props => {
  const [val, setVal] = useState('');

  return (
    <>
      <Card className="m-2">
        <CardHeader>
          <CardTitle>Media Query</CardTitle>
          <CardDescription>Manage your media query stylings</CardDescription>
        </CardHeader>
        <CardContent>
          <MediaQueryForm state={props.state} updateElement={props.updateElement} />

          {Object.keys(props.state.editor.selectedElement.mediaQuery).length > 0 && (
            <Select onValueChange={setVal}>
              <SelectTrigger className="w-[95%] ml-2 mt-5">
                <SelectValue placeholder="Select Media Query" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Select Media Query</SelectLabel>
                  {Object.keys(props.state.editor.selectedElement.mediaQuery).map(k => (
                    <SelectItem key={k} value={k}>
                      {k}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          )}
        </CardContent>
      </Card>

      <div>{mediaQuery[val]?.content(props)}</div>
    </>
  );
};

export default MediaQuery;
