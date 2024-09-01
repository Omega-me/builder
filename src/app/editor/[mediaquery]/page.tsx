import { EditorNavigationModule } from '@/containers/modules';

interface Props {
  params: { mediaquery: string };
}

const EditorPage = async (props: Props) => {
  return (
    <div>
      <EditorNavigationModule />
    </div>
  );
};

export default EditorPage;
