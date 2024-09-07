'use client';

import { eDeviceSize, eDeviceTypes } from '@/common/enums';
import { useEditor } from '@/hooks';
import clsx from 'clsx';
import React, { useEffect, useRef, useState } from 'react';

interface Props {
  children: React.ReactNode;
}

const Resizable = (props: Props) => {
  const { state, changeDimensions, editorStandartHeight, editorStandartWidth } = useEditor();
  const [style, setStyle] = useState({
    width: '100vw',
    height: '100vh',
  });
  const editorRef = useRef<HTMLDivElement>(null);

  const createHeight = (height: number) => {
    if (!state.editor.isCustomDimension) {
      if (state.editor.liveMode || state.editor.previewMode) {
        return '100vh';
      }
      return editorStandartHeight + 'px';
    }

    return height + 'px';
  };

  const createWidth = (width: number) => {
    if (!state.editor.isCustomDimension) {
      switch (state.editor.device) {
        case eDeviceTypes.DESKTOP:
          return eDeviceSize.DESKTOP;
        case eDeviceTypes.TABLET:
          return eDeviceSize.TABLET;
        case eDeviceTypes.MOBILE:
          return eDeviceSize.MOBILE;
        default:
          return eDeviceSize.DESKTOP;
      }
    }
    return width + 'px';
  };

  useEffect(() => {
    setStyle({
      ...style,
      height: createHeight(editorStandartHeight),
      width: createWidth(editorStandartWidth),
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [editorStandartHeight, editorStandartWidth, state.editor.device]);

  useEffect(() => {
    if (!state.editor.isCustomDimension) {
      setStyle({
        ...style,
        height: createHeight(editorStandartHeight),
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.editor.liveMode, state.editor.previewMode, state.editor.isCustomDimension]);

  const rsXMouseDownHandler = (e: any) => {
    const x = e.clientX;
    const cWidth = window.getComputedStyle((editorRef as any).current).width;
    const initialWidth = parseInt(cWidth, 10);

    const mouseMoveHandler = (e: any) => {
      let dx: any = x - e.clientX;
      dx = e.clientX - x;
      const newWidth = initialWidth + dx;

      if (newWidth >= 300) {
        setStyle({
          ...style,
          width: createWidth(newWidth),
        });
      }
    };

    const mouseUpHandler = () => {
      document.removeEventListener('mouseup', mouseUpHandler);
      document.removeEventListener('mousemove', mouseMoveHandler);
    };

    document.addEventListener('mousemove', mouseMoveHandler);
    document.addEventListener('mouseup', mouseUpHandler);
  };

  const rsYMouseDownHandler = (e: any) => {
    const y = e.clientY;
    const cHeight = window.getComputedStyle((editorRef as any).current).height;
    const initialHeight = parseInt(cHeight, 10);

    const mouseMoveHandler = (e: any) => {
      let dy: any = y - e.clientX;
      dy = e.clientY - y;
      const newHeight = initialHeight + dy;

      if (newHeight >= 400) {
        setStyle({
          ...style,
          height: createHeight(newHeight),
        });
      }
      if (newHeight >= editorStandartHeight - 50) {
        // add snap to standart height
        setStyle({
          ...style,
          height: createHeight(editorStandartHeight),
        });
      }
    };

    const mouseUpHandler = () => {
      document.removeEventListener('mouseup', mouseUpHandler);
      document.removeEventListener('mousemove', mouseMoveHandler);
    };

    document.addEventListener('mousemove', mouseMoveHandler);
    document.addEventListener('mouseup', mouseUpHandler);
  };

  const rsXYMouseDownHandler = (e: any) => {
    const x = e.clientX;
    const cWidth = window.getComputedStyle((editorRef as any).current).width;
    const initialWidth = parseInt(cWidth, 10);

    const y = e.clientY;
    const cHeight = window.getComputedStyle((editorRef as any).current).height;
    const initialHeight = parseInt(cHeight, 10);

    const mouseMoveHandler = (e: any) => {
      let dx: any = x - e.clientX;
      dx = e.clientX - x;
      const newWidth = initialWidth + dx;
      let dy: any = y - e.clientY;
      dy = e.clientY - y;
      const newHeight = initialHeight + dy;

      setStyle({
        ...style,
        width: newWidth >= 300 ? createWidth(newWidth) : '300px',
        height:
          newHeight >= 400 && newHeight < editorStandartHeight - 20
            ? createHeight(newHeight)
            : newHeight >= editorStandartHeight - 20
            ? createHeight(editorStandartHeight)
            : '400px',
      });
    };

    const mouseUpHandler = () => {
      document.removeEventListener('mouseup', mouseUpHandler);
      document.removeEventListener('mousemove', mouseMoveHandler);
    };

    document.addEventListener('mousemove', mouseMoveHandler);
    document.addEventListener('mouseup', mouseUpHandler);
  };

  return (
    <div>
      <div className="flex">
        <div
          className={clsx(`overflow-scroll use-automation-zoom-in`, {
            'transition-all': !state.editor.isCustomDimension,
          })}
          ref={editorRef}
          style={{ ...style }}>
          {props.children}
        </div>
        {state.editor.isCustomDimension && (!state.editor.liveMode || !state.editor.previewMode) && (
          <div
            className="relative ml-1 mr-2 w-1 border-r-[1px] border-white"
            onMouseUp={() => {
              changeDimensions({
                dimensions: {
                  ...state.editor.editorDimensions,
                  width: parseInt(style.width, 10),
                },
              });
            }}
            onMouseDown={rsXMouseDownHandler}
            style={{ cursor: 'ew-resize' }}>
            <div className="w-1 h-1 bg-white absolute left-[50%]"></div>
          </div>
        )}
      </div>

      {state.editor.isCustomDimension && (!state.editor.liveMode || !state.editor.previewMode) && (
        <div className="flex">
          <div
            className="relative mt-1 h-1 border-b-[1px] border-white"
            onMouseUp={() => {
              changeDimensions({
                dimensions: {
                  ...state.editor.editorDimensions,
                  height: parseInt(style.height, 10),
                },
              });
            }}
            onMouseDown={rsYMouseDownHandler}
            style={{ cursor: 'n-resize', width: style.width }}>
            <div className="w-1 h-1 bg-white absolute left-0 top-[50%]"></div>
          </div>

          <div
            className="relative h-2 w-2 mt-1 ml-1 mr-1 border-white  border-[1px]"
            onMouseUp={() => {
              changeDimensions({
                dimensions: {
                  width: parseInt(style.width, 10),
                  height: parseInt(style.height, 10),
                },
              });
            }}
            onMouseDown={rsXYMouseDownHandler}
            style={{ cursor: 'nw-resize' }}>
            <div className="absolute w-1 h-1 bg-white"></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Resizable;
