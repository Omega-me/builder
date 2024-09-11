'use client';
import clsx from 'clsx';
import { Sheet, SheetContent } from '../../ui/sheet';
import { Tabs } from '../../ui/tabs';
import { TabList } from '../..';
import { IEditorSidebarProps } from '@/common/interfaces';
import { eSideBarTabs } from '@/common/enums';
import { sidebarTabs } from '@/common/configs';

const EditorSidebar = (props: IEditorSidebarProps) => {
  const { state } = props;
  return (
    <Sheet open={true} modal={false}>
      <Tabs defaultValue={eSideBarTabs.STYLINGS}>
        <SheetContent
          side="right"
          removeCloseBtn={true}
          className={clsx('mt-[99px] w-16 z-[80] shadow-none p-0 transition-all overflow-scroll', {
            hidden: state.editor.previewMode,
          })}>
          <TabList />
        </SheetContent>
        <SheetContent
          side="right"
          removeCloseBtn={true}
          className={clsx('mt-[99px] w-80 mr-16 z-[40] shadow-none p-0 transition-all overflow-scroll', {
            hidden: state.editor.previewMode,
          })}>
          {sidebarTabs.map(s => (
            <div key={s.id}>{s.content(props)}</div>
          ))}
        </SheetContent>
      </Tabs>
    </Sheet>
  );
};

export default EditorSidebar;
