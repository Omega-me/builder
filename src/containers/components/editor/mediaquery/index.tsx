'use client';

import React, { useState } from 'react';
import { Popover, PopoverContent, PopoverTrigger } from '../../ui/popover';
import { Button } from '../../ui/button';
import { Save, Plus, PencilRuler } from 'lucide-react';
import { Label } from '../../ui/label';
import { Input } from '../../ui/input';
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '../../ui/select';
import { SettingsTab } from '../..';
import { IEditorState } from '@/common/interfaces';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../ui/card';
import { Tooltip, TooltipContent, TooltipTrigger } from '../../ui/tooltip';

interface Props {
  state: IEditorState;
  handleOnChanges: (e: any) => void;
  handleChangeCustomValues: (e: any) => void;
}

const mediaQuery: {
  [key: string]: { id: number; content: (props: Props) => React.ReactNode };
} = {
  mobile: {
    id: 1,
    content: (props: Props) => (
      <div>
        <a href="#styling_header">
          <div className="sticky top-14 z-50 ml-2 w-[95%] h-10 bg-slate-800 flex justify-center items-center rounded-md cursor-pointer text-slate-400 text-sm">
            Mobile
          </div>
        </a>
        <SettingsTab handleChangeCustomValues={props.handleChangeCustomValues} handleOnChanges={props.handleOnChanges} state={props.state} />
      </div>
    ),
  },
  desktop: {
    id: 2,
    content: (props: Props) => (
      <div>
        <a href="#styling_header">
          <div className="sticky top-14 z-50 ml-2 w-[95%] h-10 bg-slate-800 flex justify-center items-center rounded-md cursor-pointer text-slate-400 text-sm">
            Desktop
          </div>
        </a>
        <SettingsTab handleChangeCustomValues={props.handleChangeCustomValues} handleOnChanges={props.handleOnChanges} state={props.state} />
      </div>
    ),
  },
  'max-width-700': {
    id: 2,
    content: (props: Props) => (
      <div>
        <a href="#styling_header">
          <div className="sticky top-14 z-50 ml-2 w-[95%] h-10 bg-slate-800 flex justify-center items-center rounded-md cursor-pointer text-slate-400 text-sm">
            max-width-700
          </div>
        </a>
        <SettingsTab handleChangeCustomValues={props.handleChangeCustomValues} handleOnChanges={props.handleOnChanges} state={props.state} />
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
          <Popover>
            <Tooltip>
              <TooltipTrigger asChild>
                <PopoverTrigger asChild className="ml-2">
                  <Button variant="outline">
                    <Plus size={15} />
                    <p className="m-2">New</p>
                  </Button>
                </PopoverTrigger>
              </TooltipTrigger>
              <TooltipContent side="right">New media query</TooltipContent>
            </Tooltip>
            <PopoverContent className="w-75">
              <div className="grid gap-4">
                <div className="space-y-2">
                  <h4 className="font-medium leading-none">Media Query</h4>
                  <p className="text-sm text-muted-foreground">Edit media query parameters</p>
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-sm">Set width from editor</p>
                    </div>
                    <Button variant="outline">
                      <PencilRuler size={15} />
                    </Button>
                  </div>
                </div>
                <div className="grid gap-2">
                  <div className="grid grid-cols-3 items-center gap-4">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" defaultValue="Mobile" className="col-span-2 h-8" />
                  </div>
                  <div className="grid grid-cols-3 items-center gap-4">
                    <Label htmlFor="maxWidth">Max. width</Label>
                    <Input id="maxWidth" defaultValue="300px" className="col-span-2 h-8" />
                  </div>
                  <div className="w-full flex justify-end gap-1">
                    <Button variant="outline">
                      <Save width={15} />
                      <p className="m-2">Save</p>
                    </Button>
                  </div>
                </div>
              </div>
            </PopoverContent>
          </Popover>
          <Select onValueChange={setVal}>
            <SelectTrigger className="w-[95%] ml-2 mt-5">
              <SelectValue placeholder="Select Media Query" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Select Media Query</SelectLabel>
                <SelectItem value="mobile">Mobile</SelectItem>
                <SelectItem value="desktop">Desktop</SelectItem>
                <SelectItem value="max-width-700">max-width-700</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </CardContent>
      </Card>

      <div>{mediaQuery[val]?.content(props)}</div>
    </>
  );
};

export default MediaQuery;
