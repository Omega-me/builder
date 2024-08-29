import { eEditorBtns } from '@/common/enums';
import { SquarePlay } from 'lucide-react';
import React from 'react';

const VideoPlaceholder = () => {
  const handleDragStart = (e: React.DragEvent, type: eEditorBtns) => {
    if (type === null) return;
    e.dataTransfer.setData('componentType', type);
  };
  return (
    <div draggable onDragStart={e => handleDragStart(e, eEditorBtns.VIDEO)} className="h-14 w-14 bg-muted rounded-lg flex items-center justify-center">
      <SquarePlay className="text-muted-foreground" />
    </div>
  );
};

export default VideoPlaceholder;
