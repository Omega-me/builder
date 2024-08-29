'use client';
import { eEditorBtns } from '@/common/enums';
import { IEditorElement } from '@/common/interfaces';
import { Badge } from '@/containers/components/ui/badge';
import { useEditor } from '@/hooks';
import clsx from 'clsx';
import { Trash } from 'lucide-react';
import React from 'react';

interface VideoComponentProps {
  element: IEditorElement;
}

const VideoComponent = (props: VideoComponentProps) => {
  const { state, deleteElement, clickElement } = useEditor();
  const styles = props.element.styles;

  const handleDragStart = (e: React.DragEvent, type: eEditorBtns) => {
    if (type === null) return;
    e.dataTransfer.setData('componentType', type);
  };

  const handleOnClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    clickElement({ elementDetails: props.element });
  };

  const handleDeleteElement = () => {
    deleteElement({ elementDetails: props.element });
  };

  return (
    <div
      style={styles}
      draggable
      onDragStart={e => handleDragStart(e, eEditorBtns.VIDEO)}
      onClick={handleOnClick}
      className={clsx('p-[2px] w-full m-[5px] relative text-[16px] transition-all flex items-center justify-center', {
        '!border-blue-500': state.editor.selectedElement.id === props.element.id,
        '!border-solid': state.editor.selectedElement.id === props.element.id,
        'border-dashed border-[1px] border-slate-300': !state.editor.liveMode,
      })}>
      {state.editor.selectedElement.id === props.element.id && !state.editor.liveMode && (
        <Badge className="bg-blue-500 text-white absolute -top-[23px] -left-[1px] rounded-none rounded-t-lg ">{state.editor.selectedElement.name}</Badge>
      )}

      {!Array.isArray(props.element.content) && (
        <iframe
          width={props.element.styles.width || '560'}
          height={props.element.styles.height || '315'}
          src={props.element.content.src}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        />
      )}

      {state.editor.selectedElement.id === props.element.id && !state.editor.liveMode && (
        <div
          onClick={handleDeleteElement}
          className="!bg-blue-500 absolute bg-primary px-2.5 py-1 text-xs font-bold  -top-[25px] -right-[1px] rounded-none rounded-t-lg !text-white">
          <Trash className="cursor-pointer" size={16} />
        </div>
      )}
    </div>
  );
};

export default VideoComponent;
