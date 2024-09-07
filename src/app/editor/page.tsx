import { EditorModule, EditorNavigationModule, EditorSidebarModule } from '@/containers/modules';

// TODO: Set media queries on the css object of boddy when clicking device modes and edit the css for those modes , find a solution for the implementation

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
