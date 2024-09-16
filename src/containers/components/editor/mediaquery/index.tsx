'use client';

import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '../../ui/select';
import { MediaQueryForm, StylingsTab } from '../..';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../ui/card';
import { useEditor } from '@/hooks';
import { IMediaQuery } from '@/common/interfaces';

interface Props {
  handleOnChanges: (e: any) => void;
  handleChangeCustomValues: (e: any) => void;
}

const MediaQuery: React.FC<Props> = props => {
  const { state } = useEditor();
  const [val, setVal] = useState<string>('');
  const [mediaQueryComponent, setMediaQueryComponent] = useState<{ [key: string]: { id: string; content: () => React.ReactNode } }>({});

  useEffect(() => {
    if (Object.keys(state.editor.selectedElement.mediaQuery).length > 0) {
      const mediaQueries = Object.keys(state.editor.selectedElement.mediaQuery);
      mediaQueries.forEach(key => {
        const mediaQuery: IMediaQuery[''] = state.editor.selectedElement.mediaQuery[key];
        setMediaQueryComponent({
          ...mediaQueryComponent,
          [key]: {
            id: mediaQuery.id,
            content: () => (
              <div>
                <div className="sticky top-14 z-50 ml-2 w-[95%] h-10 bg-slate-800 flex justify-between items-center rounded-md cursor-pointer text-slate-400 text-sm">
                  <a className="flex items-center pl-4 w-full h-full flex-1" href="#styling_header">
                    {key} <span className="ml-2">({mediaQuery.mediaWidth}px)</span>
                  </a>
                  <MediaQueryForm
                    edit={{
                      key,
                      setMediaQueryComponent,
                    }}
                  />
                </div>
                <StylingsTab handleChangeCustomValues={props.handleChangeCustomValues} handleOnChanges={props.handleOnChanges} />
              </div>
            ),
          },
        });
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state, state.editor.selectedElement.mediaQuery, state.editor.selectedElement?.mediaQuery[val]?.mediaWidth]);

  return (
    <>
      <Card className="m-2">
        <CardHeader>
          <CardTitle>Media Query</CardTitle>
          <CardDescription>Manage your media query stylings</CardDescription>
        </CardHeader>
        <CardContent>
          <MediaQueryForm />

          {Object.keys(state.editor.selectedElement.mediaQuery).length > 0 && (
            <Select onValueChange={setVal}>
              <SelectTrigger className="w-[95%] ml-2 mt-5">
                <SelectValue placeholder="Select Media Query" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Select Media Query</SelectLabel>
                  {Object.keys(state.editor.selectedElement.mediaQuery).map(k => (
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

      <div>{mediaQueryComponent[val]?.content()}</div>
    </>
  );
};

export default MediaQuery;
