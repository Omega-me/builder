import { IEditorElement } from '@/common/interfaces';
import { ContainerComponent, TextComponent, VideoComponent } from '../..';
import { eEditorBtns } from '@/common/enums';

interface Props {
  element: IEditorElement;
}

const Recursive: React.FC<Props> = props => {
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
