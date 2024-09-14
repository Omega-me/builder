'use client';
import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Popover, PopoverContent, PopoverTrigger } from '../../ui/popover';
import { Button } from '../../ui/button';
import { Pencil, PencilRuler, Plus, Save } from 'lucide-react';
import { Label } from '../../ui/label';
import { Input } from '../../ui/input';
import { Tooltip, TooltipContent, TooltipTrigger } from '../../ui/tooltip';
import { IEditorElement, IEditorState } from '@/common/interfaces';
import clsx from 'clsx';

interface Props {
  state: IEditorState;
  updateElement: (payload: { elementDetails: IEditorElement }) => void;
  isEdit?: boolean;
}

const MediaQueryForm: React.FC<Props> = props => {
  const [values, setValues] = useState<{ [name: string]: string }>({});

  return (
    <Popover>
      <Tooltip>
        <TooltipTrigger asChild>
          <PopoverTrigger asChild className={clsx('', { 'ml-2': !props.isEdit })}>
            {props.isEdit ? (
              <Button variant="ghost">
                <Pencil size={15} />
              </Button>
            ) : (
              <Button variant="outline">
                <Plus size={15} />
                <p className="m-2">New</p>
              </Button>
            )}
          </PopoverTrigger>
        </TooltipTrigger>
        <TooltipContent side={props.isEdit ? 'left' : 'right'}>{props.isEdit ? 'Edit' : 'New media query'}</TooltipContent>
      </Tooltip>
      <PopoverContent className="w-75 z-[100]">
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
            {props.isEdit && (
              <div className="grid grid-cols-3 items-center gap-4">
                <Label htmlFor="name">Id</Label>
                <Input disabled value={'923524km42k5hnkj452kjk'} className="col-span-2 h-8" />
              </div>
            )}
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="name">Name</Label>
              <Input
                onChange={e => setValues({ ...values, [e.target.name]: e.target.value })}
                name="name"
                id="name"
                placeholder="Mobile"
                className="col-span-2 h-8"
              />
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="maxWidth">Max. width (px)</Label>
              <Input
                onChange={e => setValues({ ...values, [e.target.name]: e.target.value })}
                type="number"
                name="maxWidth"
                id="maxWidth"
                placeholder="768"
                className="col-span-2 h-8"
              />
            </div>
            <div className="w-full flex justify-end gap-1">
              <Button
                onClick={() => {
                  if (!values.name && !values.maxWidth) {
                    // TODO: render a toast
                    return;
                  }

                  const mediaQuery: {} = {
                    [values.name]: {
                      id: uuidv4(),
                      mediaWidth: values.maxWidth,
                      styles: {},
                    },
                  };

                  props.updateElement({
                    elementDetails: {
                      ...props.state.editor.selectedElement,
                      mediaQuery: {
                        ...props.state.editor.selectedElement.mediaQuery,
                        ...mediaQuery,
                      },
                    },
                  });

                  setValues({});
                }}
                variant="outline">
                <Save width={15} />
                <p className="m-2">Save</p>
              </Button>
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default MediaQueryForm;
