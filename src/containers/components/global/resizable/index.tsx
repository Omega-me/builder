import { eDeviceSize, eDeviceTypes } from '@/common/enums';
import { useEditor, useMediaQuery } from '@/hooks';
import clsx from 'clsx';
import { ChevronsLeftRight } from 'lucide-react';
import React, { useEffect, useRef, useState } from 'react';

interface Props {
  children: React.ReactNode;
}

const Resizable = (props: Props) => {
  const { state, changeDimensions, editorStandartHeight, editorStandartWidth } = useEditor();
  const [editorWidth, setEditorWidth] = useState<number>(editorStandartWidth);
  const [editorHeight, setEditorHeight] = useState<number>(editorStandartHeight);
  const editorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    changeDimensions({
      dimensions: {
        height: editorStandartHeight,
        width: editorStandartWidth,
      },
    });
  }, [editorStandartHeight, editorStandartWidth]);

  useEffect(() => {
    if (!state.editor.isCustomDimension) {
      setEditorWidth(editorStandartWidth);
      setEditorHeight(editorStandartHeight);
    }
  }, [state.editor.isCustomDimension]);

  const createHeight = (height: number) => {
    if (!state.editor.isCustomDimension) {
      if (state.editor.liveMode || state.editor.previewMode) {
        return '100vh';
      }
      return editorStandartHeight + 'px';
    }
    if (state.editor.liveMode || state.editor.previewMode) {
      if (height >= editorStandartHeight - 50) {
        return '100vh';
      }
      return height + 'px';
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

  const rsXMouseDownHandler = (e: any) => {
    const x = e.clientX;
    const cWidth = window.getComputedStyle((editorRef as any).current).width;
    const initialWidth = parseInt(cWidth, 10);

    const mouseMoveHandler = (e: any) => {
      let dx: any = x - e.clientX;
      dx = e.clientX - x;
      const newWidth = initialWidth + dx;

      if (newWidth >= 300) {
        setEditorWidth(newWidth);
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
        setEditorHeight(newHeight);
      }
      if (newHeight >= editorStandartHeight - 50) {
        // add snap to standart height
        setEditorHeight(editorStandartHeight);
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
      if (newWidth >= 300) {
        setEditorWidth(newWidth);
      }

      let dy: any = y - e.clientY;
      dy = e.clientY - y;
      const newHeight = initialHeight + dy;
      if (newHeight >= 400) {
        setEditorHeight(newHeight);
      }
      if (newHeight >= editorStandartHeight - 50) {
        // add snap to standart height
        setEditorHeight(editorStandartHeight);
      }
    };

    const mouseUpHandler = () => {
      document.removeEventListener('mouseup', mouseUpHandler);
      document.removeEventListener('mousemove', mouseMoveHandler);
    };

    document.addEventListener('mousemove', mouseMoveHandler);
    document.addEventListener('mouseup', mouseUpHandler);
  };

  const notMobile = useMediaQuery({
    query(width, height) {
      return width > 500;
    },
    ref: editorRef,
  });

  return (
    <div>
      <div className="flex">
        <div
          className={clsx(`overflow-scroll use-automation-zoom-in`, {
            'transition-all': !state.editor.isCustomDimension,
          })}
          ref={editorRef}
          style={{
            width: createWidth(editorWidth),
            height: createHeight(editorHeight),
            // background: notMobile ? 'red' : 'blue'
          }}>
          {props.children}
        </div>
        {state.editor.isCustomDimension && (!state.editor.liveMode || !state.editor.previewMode) && (
          <div
            className="resizer w-2 bg-white flex justify-center items-center opacity-30 rounded-tr-sm ml-1"
            onMouseUp={() => {
              changeDimensions({
                dimensions: {
                  ...state.editor.editorDimensions,
                  width: editorWidth,
                },
              });
            }}
            onMouseDown={rsXMouseDownHandler}
            style={{ cursor: 'ew-resize' }}></div>
        )}
      </div>
      {state.editor.isCustomDimension && (!state.editor.liveMode || !state.editor.previewMode) && (
        <div className="flex">
          <div
            className="resizer h-2 bg-white opacity-30 rounded-bl-sm mt-1"
            onMouseUp={() => {
              changeDimensions({
                dimensions: {
                  ...state.editor.editorDimensions,
                  height: editorHeight,
                },
              });
            }}
            onMouseDown={rsYMouseDownHandler}
            style={{ cursor: 'n-resize', width: `${editorWidth}px` }}></div>
          <div
            className="resizer h-2 w-2 bg-white opacity-30 rounded-br-sm mt-1 ml-1"
            onMouseUp={() => {
              changeDimensions({
                dimensions: {
                  width: editorWidth,
                  height: editorHeight,
                },
              });
            }}
            onMouseDown={rsXYMouseDownHandler}
            style={{ cursor: 'nw-resize' }}></div>
        </div>
      )}
    </div>
  );
};

export default Resizable;
