'use client';

import { useClickOutsideElement } from '@/hooks';
import React, { useRef } from 'react';

interface Props {
  x: number;
  y: number;
  closeCtx: () => void;
}

const CtxMenu = (props: Props) => {
  const ctxMenuRef = useRef<HTMLDivElement>(null);
  useClickOutsideElement(ctxMenuRef as any, props.closeCtx);

  return (
    <div ref={ctxMenuRef} className="z-50 fixed" style={{ top: `${props.y}px`, left: `${props.x}px` }}>
      <div className="w-52 z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md animate-in fade-in-80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2">
        <div
          className="
            relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50">
          Back
          <span className="ml-auto text-xs tracking-widest text-muted-foreground">⌘[</span>
        </div>
      </div>
    </div>
  );
};

export default CtxMenu;
