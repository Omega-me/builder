'use client';
import { IEditorElement } from '@/common/interfaces';
import { Badge } from '@/containers/components/ui/badge';
import { useEditor } from '@/hooks';
import clsx from 'clsx';
import { Trash } from 'lucide-react';
import React from 'react';

interface Props {
  element: IEditorElement;
}

const TextComponent = (props: Props) => {
  const { state, deleteElement, clickElement, updateElement } = useEditor();

  const handleDeleteElement = () => {
    deleteElement({ elementDetails: props.element });
  };
  //TODO: Include media query too
  const styles = props.element.styles;

  const handleOnClickBody = (e: React.MouseEvent) => {
    e.stopPropagation();
    clickElement({ elementDetails: props.element });
  };

  return (
    <div
      style={styles}
      className={clsx('p-[2px] w-full m-[5px] relative text-[16px] transition-all', {
        '!border-blue-500': state.editor.selectedElement.id === props.element.id,
        '!border-solid': state.editor.selectedElement.id === props.element.id,
        'border-dashed border-[1px] border-slate-300': !state.editor.liveMode,
      })}
      onClick={handleOnClickBody}>
      {state.editor.selectedElement.id === props.element.id && !state.editor.liveMode && (
        <Badge className="bg-blue-500 text-white absolute -top-[23px] -left-[1px] rounded-none rounded-t-lg">{state.editor.selectedElement.name}</Badge>
      )}
      <span
        contentEditable={!state.editor.liveMode}
        onBlur={e => {
          const spanElement = e.target as HTMLSpanElement;
          updateElement({
            elementDetails: {
              ...props.element,
              content: {
                innerText: spanElement.innerText,
              },
            },
          });
        }}>
        {!Array.isArray(props.element.content) && props.element.content.innerText}
      </span>
      {state.editor.selectedElement.id === props.element.id && !state.editor.liveMode && (
        <div
          onClick={handleDeleteElement}
          className="!bg-blue-500 absolute bg-primary px-2.5 py-1 text-xs font-bold -top-[25px] -right-[1px] rounded-none rounded-t-lg !text-white">
          <Trash className="cursor-pointer" size={16} />
        </div>
      )}
    </div>
  );
};

export default TextComponent;
