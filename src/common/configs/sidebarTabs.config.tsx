import { Database, Plus, Settings, SquareStackIcon, SwatchBook } from 'lucide-react';
import { eSideBarTabs } from '../enums';
import { ComponentsTab, LayersTab, SettingsTab } from '@/containers/components';
import { Carousel, CarouselContent, CarouselItem } from '@/containers/components/ui/carousel';
import { SheetHeader, SheetTitle, SheetDescription, SheetContent } from '@/containers/components/ui/sheet';
import { TabsContent } from '@/containers/components/ui/tabs';
import { IEditorSidebarProps } from '../interfaces';

export const sidebarTabs: { id: number; value: eSideBarTabs; Icon: () => React.ReactNode; content: (props: IEditorSidebarProps) => React.ReactNode }[] = [
  {
    id: 1,
    Icon: () => <SwatchBook />,
    value: eSideBarTabs.STYLINGS,
    content: (props: IEditorSidebarProps) => (
      <TabsContent value={eSideBarTabs.STYLINGS}>
        <SheetHeader className="text-left p-6">
          <SheetTitle>{eSideBarTabs.STYLINGS}</SheetTitle>
          <SheetDescription>Show your creativity! You can customize every component as you like.</SheetDescription>
        </SheetHeader>

        <Carousel>
          <CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index}>
                {/* TODO: Each settings tab will have styling config based on media queries */}
                <div
                  style={{
                    height: props.editorStandartHeight - 130 + 'px',
                  }}
                  className="overflow-scroll pb-5">
                  <SettingsTab
                    handleChangeCustomValues={props.stylings.handleChangeCustomValues}
                    handleOnChanges={props.stylings.handleOnChanges}
                    state={props.state}
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </TabsContent>
    ),
  },
  {
    id: 2,
    Icon: () => <Plus />,
    value: eSideBarTabs.COMPONENTS,
    content: () => (
      <TabsContent value={eSideBarTabs.COMPONENTS}>
        <SheetHeader className="text-left p-6 ">
          <SheetTitle>{eSideBarTabs.COMPONENTS}</SheetTitle>
          <SheetDescription>You can drag and drop components on the canvas</SheetDescription>
        </SheetHeader>
        <ComponentsTab />
      </TabsContent>
    ),
  },
  {
    id: 3,
    Icon: () => <SquareStackIcon />,
    value: eSideBarTabs.LAYERS,
    content: (props: IEditorSidebarProps) => (
      <TabsContent value={eSideBarTabs.LAYERS}>
        <SheetHeader className="text-left p-6 ">
          <SheetTitle>{eSideBarTabs.LAYERS}</SheetTitle>
          <SheetDescription>Check you components tree</SheetDescription>
        </SheetHeader>
        <LayersTab elements={props.state.editor.elements} />
      </TabsContent>
    ),
  },
  {
    id: 4,
    Icon: () => <Database />,
    value: eSideBarTabs.MEDIA,
    content: () => (
      <TabsContent value={eSideBarTabs.MEDIA}>
        <SheetHeader className="text-left p-6 ">
          <SheetTitle>{eSideBarTabs.MEDIA}</SheetTitle>
        </SheetHeader>
        {/* TODO: add media component */}
      </TabsContent>
    ),
  },
  {
    id: 5,
    Icon: () => <Settings />,
    value: eSideBarTabs.SETTINGS,
    content: () => (
      <TabsContent value={eSideBarTabs.SETTINGS}>
        <SheetHeader className="text-left p-6 ">
          <SheetTitle>{eSideBarTabs.SETTINGS}</SheetTitle>
        </SheetHeader>
        {/* TODO: add setting component */}
      </TabsContent>
    ),
  },
];
