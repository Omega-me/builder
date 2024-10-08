'use client';
import clsx from 'clsx';
import { Sheet, SheetContent } from '../../ui/sheet';
import { Tabs } from '../../ui/tabs';
import { TabList } from '../..';
import { eSideBarTabs } from '@/common/enums';
import { sidebarTabs } from '@/common/configs';
import { useEditor } from '@/hooks';

interface Props {
  stylings: {
    handleOnChanges: (e: any) => void;
    handleChangeCustomValues: (e: any) => void;
  };
}

const EditorSidebar: React.FC<Props> = props => {
  const { state, editorStandartHeight } = useEditor();
  return (
    <Sheet open={true} modal={false}>
      <Tabs defaultValue={eSideBarTabs.STYLINGS}>
        <SheetContent
          side="right"
          removeCloseBtn={true}
          className={clsx('mt-[99px] w-16 z-[80] shadow-none p-0 transition-all overflow-scroll', {
            hidden: state.editor.previewMode,
          })}>
          <TabList editorStandartHeight={editorStandartHeight} />
        </SheetContent>
        <SheetContent
          side="right"
          removeCloseBtn={true}
          style={{
            height: state.editor.isCustomDimension ? editorStandartHeight + 18 + 'px' : editorStandartHeight + 'px',
          }}
          className={clsx('mt-[99px] w-80  mr-16 z-[40] shadow-none p-0 transition-all overflow-scroll scroll-smooth', {
            hidden: state.editor.previewMode,
          })}>
          {sidebarTabs.map(s => (
            <div key={s.id}>{s.content({ state, ...props })}</div>
          ))}
        </SheetContent>
      </Tabs>
    </Sheet>
  );
};

export default EditorSidebar;
