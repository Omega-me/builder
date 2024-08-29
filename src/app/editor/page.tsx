import { EditorModule, EditorNavigationModule, EditorSidebarModule } from '@/containers/modules';

const EditorPage = async () => {
  return (
    <>
      <EditorNavigationModule />
      <EditorModule />
      <EditorSidebarModule />
    </>
  );
};

export default EditorPage;
