import { IEditorElement } from '@/common/interfaces';
import { ContainerComponent, TextComponent, VideoComponent } from '../..';
import { eEditorBtns } from '@/common/enums';
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from '../../ui/resizable';

interface RecursiveProps {
  element: IEditorElement;
}

const Recursive = (props: RecursiveProps) => {
  const { element } = props;
  switch (element.type) {
    case eEditorBtns.TEXT:
      return <TextComponent element={element} />;
    case eEditorBtns.CONTAINER:
      return <ContainerComponent element={element} />;
    case eEditorBtns.VIDEO:
      return <VideoComponent element={element} />;
    case eEditorBtns.TWO_COL:
      return <ContainerComponent element={element} />;
    case eEditorBtns.BODY:
      return <ContainerComponent element={element} />;
    default:
      return null;
  }
};

export default Recursive;
