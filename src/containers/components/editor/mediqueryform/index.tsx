'use client';
import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Popover, PopoverContent, PopoverTrigger } from '../../ui/popover';
import { Button } from '../../ui/button';
import { Pencil, PencilRuler, Plus, Save, Trash2 } from 'lucide-react';
import { Label } from '../../ui/label';
import { Input } from '../../ui/input';
import { Tooltip, TooltipContent, TooltipTrigger } from '../../ui/tooltip';
import clsx from 'clsx';
import { useEditor } from '@/hooks';
import { useForm } from 'react-hook-form';
import { IMediaQuery } from '@/common/interfaces';

interface Props {
  edit?: {
    key: string;
    setMediaQueryComponent: React.Dispatch<
      React.SetStateAction<{
        [key: string]: {
          id: string;
          content: () => React.ReactNode;
        };
      }>
    >;
  };
}

const MediaQueryForm: React.FC<Props> = props => {
  const { state, updateElement } = useEditor();
  const {
    register,
    setValue,
    handleSubmit,
    reset,
    // TODO: display errors
    formState: { errors },
  } = useForm<{
    name: string;
    mediaWidth: string;
  }>();
  const [selectMediaQuery, setSelectedMediaQuery] = useState<IMediaQuery[''] | null>(null);

  useEffect(() => {
    if (props.edit && props.edit.key) {
      const mediaQuery = state.editor.selectedElement.mediaQuery && state.editor.selectedElement.mediaQuery[props.edit.key];
      if (mediaQuery && mediaQuery.mediaWidth) {
        setSelectedMediaQuery(mediaQuery);
        setValue('name', props.edit.key || '');
        setValue('mediaWidth', mediaQuery.mediaWidth.toString() || '');
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.editor.selectedElement.mediaQuery, props.edit?.key]);

  const onSubmit = handleSubmit(data => {
    const mediaQuery: {} = {
      [props.edit?.key ? props.edit?.key : data.name]: {
        id: selectMediaQuery ? selectMediaQuery?.id : uuidv4(),
        mediaWidth: data.mediaWidth,
        styles: {},
      },
    };

    updateElement({
      elementDetails: {
        ...state.editor.selectedElement,
        mediaQuery: {
          ...state.editor.selectedElement.mediaQuery,
          ...mediaQuery,
        },
      },
    });
    reset();
  });

  const handleDeleteMediaQuery = () => {
    if (props.edit && props.edit.key) {
      const mediaQueries = {
        ...state.editor.selectedElement.mediaQuery,
      };

      delete mediaQueries[props.edit.key];

      updateElement({
        elementDetails: {
          ...state.editor.selectedElement,
          mediaQuery: {
            ...mediaQueries,
          },
        },
      });

      props.edit?.setMediaQueryComponent({});
    }
  };

  return (
    <>
      <Popover>
        <Tooltip>
          <TooltipTrigger asChild>
            <PopoverTrigger asChild className={clsx('', { 'ml-2': !props.edit })}>
              {!!props.edit ? (
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
          <TooltipContent side={!!props.edit ? 'left' : 'right'}>{!!props.edit ? 'Edit' : 'New media query'}</TooltipContent>
        </Tooltip>
        <PopoverContent className="w-75 z-[100]">
          <form onSubmit={onSubmit} className="grid gap-4">
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
              {props.edit && (
                <div className="grid grid-cols-3 items-center gap-4">
                  <Label htmlFor="name">Id</Label>
                  <Input contentEditable={false} value={selectMediaQuery?.id} className="col-span-2 h-8" />
                </div>
              )}
              <div className="grid grid-cols-3 items-center gap-4">
                <Label htmlFor="name">Name</Label>
                <Input
                  {...register('name', { required: 'Name width is required' })}
                  id="name"
                  disabled={!!props.edit}
                  placeholder="Mobile"
                  className="col-span-2 h-8"
                />
              </div>
              <div className="grid grid-cols-3 items-center gap-4">
                <Label htmlFor="mediaWidth">Max. width (px)</Label>
                <Input
                  {...register('mediaWidth', { required: 'Max width is required' })}
                  type="number"
                  name="mediaWidth"
                  id="mediaWidth"
                  placeholder="768"
                  className="col-span-2 h-8"
                />
              </div>
              <div className="w-full flex justify-end gap-1">
                <Button type="submit" variant="outline">
                  <Save width={15} />
                  <p className="m-2">Save</p>
                </Button>
              </div>
            </div>
          </form>
        </PopoverContent>
      </Popover>
      {/* TODO: handle delete */}
      {!!props.edit && (
        <Tooltip>
          <TooltipTrigger asChild>
            <Button onClick={handleDeleteMediaQuery} className="pl-0" variant="ghost">
              <Trash2 size={15} />
            </Button>
          </TooltipTrigger>
          <TooltipContent side="left">Remove</TooltipContent>
        </Tooltip>
      )}
    </>
  );
};

export default MediaQueryForm;
