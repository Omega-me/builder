'use client';
import clsx from 'clsx';
import React, { useState } from 'react';
import { v4 } from 'uuid';
import { Trash } from 'lucide-react';
import { IEditorElement } from '@/common/interfaces';
import { eEditorBtns } from '@/common/enums';
import { defaultStyles } from '@/common/configs';
import Recursive from '../../recursive';
import { Badge } from '@/containers/components/ui/badge';
import { useEditor } from '@/hooks';
import CtxMenu from '../contextmenu';

interface Props {
  element: IEditorElement;
}

const initialCtxMenu = {
  show: false,
  x: 0,
  y: 0,
};

const ContainerComponent = ({ element }: Props) => {
  const { id, content, styles, type } = element;
  const { state, addElement, clickElement, deleteElement } = useEditor();
  const [ctxMenu, setCtxMenu] = useState(initialCtxMenu);

  const handleOnDrop = (e: React.DragEvent, id: string) => {
    e.stopPropagation();
    const componentType = e.dataTransfer.getData('componentType') as eEditorBtns;

    switch (componentType) {
      case eEditorBtns.TEXT:
        addElement({
          containerId: id,
          elementDetails: {
            content: { innerText: 'Text Element' },
            id: v4(),
            name: 'Text',
            styles: {
              color: 'white',
              ...defaultStyles,
            },
            type: eEditorBtns.TEXT,
          },
        });
        break;
      case eEditorBtns.LINK:
        addElement({
          containerId: id,
          elementDetails: {
            content: {
              innerText: 'Link Element',
              href: '#',
            },
            id: v4(),
            name: 'Link',
            styles: {
              color: 'black',
              ...defaultStyles,
            },
            type: eEditorBtns.LINK,
          },
        });
        break;
      case eEditorBtns.VIDEO:
        addElement({
          containerId: id,
          elementDetails: {
            content: {
              src: 'https://youtu.be/89z620RW8Xo?si=Xs-CKgVGwiefWXU7',
            },
            id: v4(),
            name: 'Video',
            styles: {},
            type: eEditorBtns.VIDEO,
          },
        });
        break;
      case eEditorBtns.CONTAINER:
        addElement({
          containerId: id,
          elementDetails: {
            content: [],
            id: v4(),
            name: 'Container',
            styles: { ...defaultStyles },
            type: eEditorBtns.CONTAINER,
          },
        });
        break;
      case eEditorBtns.TWO_COL:
        addElement({
          containerId: id,
          elementDetails: {
            content: [
              {
                content: [],
                id: v4(),
                name: 'Container',
                styles: { ...defaultStyles, width: '100%' },
                type: eEditorBtns.CONTAINER,
              },
              {
                content: [],
                id: v4(),
                name: 'Container',
                styles: { ...defaultStyles, width: '100%' },
                type: eEditorBtns.CONTAINER,
              },
            ],
            id: v4(),
            name: 'Two Columns',
            styles: { ...defaultStyles, display: 'flex' },
            type: eEditorBtns.TWO_COL,
          },
        });
        break;
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleDragStart = (e: React.DragEvent, type: string) => {
    if (type === '__body') return;
    e.dataTransfer.setData('componentType', type);
  };

  const handleOnClickBody = (e: React.MouseEvent) => {
    e.stopPropagation();
    clickElement({
      elementDetails: element,
    });
  };

  const handleDeleteElement = () => {
    deleteElement({
      elementDetails: element,
    });
  };

  const handleCtxMenu = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault();
    e.stopPropagation();
    const { pageX, pageY } = e;
    setCtxMenu({
      show: !ctxMenu.show,
      x: pageX,
      y: pageY,
    });
  };

  const handleCloseCtxMenu = () => {
    setCtxMenu({
      show: false,
      x: 0,
      y: 0,
    });
  };

  return (
    <div
      onContextMenu={handleCtxMenu}
      style={styles}
      className={clsx('relative p-4 transition-all group', {
        'max-w-full w-full': type === eEditorBtns.CONTAINER || type === eEditorBtns.TWO_COL,
        'h-fit': type === eEditorBtns.CONTAINER,
        'h-full': type === eEditorBtns.BODY,
        'overflow-scroll ': type === eEditorBtns.BODY,
        'flex flex-col md:!flex-row': type === eEditorBtns.TWO_COL,
        '!border-blue-500': state.editor.selectedElement.id === id && !state.editor.liveMode && state.editor.selectedElement.type !== eEditorBtns.BODY,
        '!border-yellow-400 !border-3':
          state.editor.selectedElement.id === id && !state.editor.liveMode && state.editor.selectedElement.type === eEditorBtns.BODY,
        '!border-solid': state.editor.selectedElement.id === id && !state.editor.liveMode,
        'border-dashed border-[1px] border-slate-300': !state.editor.liveMode,
      })}
      onDrop={e => handleOnDrop(e, id)}
      onDragOver={handleDragOver}
      draggable={type !== eEditorBtns.BODY}
      onClick={handleOnClickBody}
      onDragStart={e => handleDragStart(e, eEditorBtns.CONTAINER)}>
      <Badge
        className={clsx('bg-blue-500 text-white absolute z-50 -top-[22px] -left-[1px] rounded-none rounded-t-lg hidden', {
          block: state.editor.selectedElement.id === element.id && !state.editor.liveMode,
        })}>
        {element.name}
      </Badge>
      {Array.isArray(content) && content.map((childElement: IEditorElement) => <Recursive key={childElement.id} element={childElement} />)}

      {state.editor.selectedElement.id === element.id && !state.editor.liveMode && state.editor.selectedElement.type !== eEditorBtns.BODY && (
        <div
          onClick={handleDeleteElement}
          className="absolute !bg-blue-500 px-2.5 py-1 text-xs font-bold  -top-[25px] -right-[1px] rounded-none rounded-t-lg cursor-pointer">
          <Trash size={16} />
        </div>
      )}
      {ctxMenu.show && <CtxMenu x={ctxMenu.x} y={ctxMenu.y} closeCtx={handleCloseCtxMenu} />}
    </div>
  );
};

export default ContainerComponent;
