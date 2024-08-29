'use client';
import clsx from 'clsx';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from '../../ui/sheet';
import { Tabs, TabsContent } from '../../ui/tabs';
import { ComponentsTab, LayersTab, SettingsTab, TabList } from '../..';
import { IEditorState } from '@/common/interfaces';

interface EditorSidebarProps {
  state: IEditorState;
  settings: {
    handleOnChanges: (e: any) => void;
    handleChangeCustomValues: (e: any) => void;
  };
}

const EditorSidebar = (props: EditorSidebarProps) => {
  const { state, settings } = props;
  return (
    <Sheet open={true} modal={false}>
      <Tabs className="w-full " defaultValue="Settings">
        <SheetContent
          removeCloseBtn={true}
          side="right"
          className={clsx('mt-[97px] w-16 z-[80] shadow-none  p-0 focus:border-none transition-all overflow-hidden', {
            hidden: state.editor.previewMode,
          })}>
          <TabList />
        </SheetContent>
        <SheetContent
          removeCloseBtn={true}
          side="right"
          className={clsx('mt-[97px] w-80 z-[40] shadow-none p-0 mr-16 bg-background h-full transition-all overflow-hidden ', {
            hidden: state.editor.previewMode,
          })}>
          <div className="grid gap-4 h-full pb-36 overflow-scroll">
            <TabsContent value="Settings">
              <SheetHeader className="text-left p-6">
                <SheetTitle>Styles</SheetTitle>
                <SheetDescription>Show your creativity! You can customize every component as you like.</SheetDescription>
              </SheetHeader>
              <SettingsTab handleChangeCustomValues={settings.handleChangeCustomValues} handleOnChanges={settings.handleOnChanges} state={state} />
            </TabsContent>
            <TabsContent value="Media">
              {/* <MediaBucketTab subaccountId={subaccountId} /> */}
              <div>TODO: add media bucket component here</div>
            </TabsContent>
            <TabsContent value="Layers">
              <SheetHeader className="text-left p-6 ">
                <SheetTitle>Layers</SheetTitle>
                <SheetDescription>Check you components tree</SheetDescription>
              </SheetHeader>
              <LayersTab elements={state.editor.elements} />
            </TabsContent>
            <TabsContent value="Components">
              <SheetHeader className="text-left p-6 ">
                <SheetTitle>Components</SheetTitle>
                <SheetDescription>You can drag and drop components on the canvas</SheetDescription>
              </SheetHeader>
              <ComponentsTab />
            </TabsContent>
          </div>
        </SheetContent>
      </Tabs>
    </Sheet>
  );
};

export default EditorSidebar;
