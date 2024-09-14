import { Database, MousePointerClick, Plus, Settings, SquareStackIcon, SwatchBook } from 'lucide-react';
import { eSideBarTabs } from '../enums';
import { ComponentsTab, LayersTab, MediaQuery, StylingsTab } from '@/containers/components';
import { SheetHeader, SheetTitle, SheetDescription } from '@/containers/components/ui/sheet';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/containers/components/ui/tabs';
import { IEditorSidebarProps } from '../interfaces';
import { Alert, AlertDescription, AlertTitle } from '@/containers/components/ui/alert';

export const sidebarTabs: { id: number; value: eSideBarTabs; Icon: () => React.ReactNode; content: (props: IEditorSidebarProps) => React.ReactNode }[] = [
  {
    id: 1,
    Icon: () => <SwatchBook />,
    value: eSideBarTabs.STYLINGS,
    content: (props: IEditorSidebarProps) => (
      <TabsContent value={eSideBarTabs.STYLINGS}>
        <SheetHeader id="styling_header" className="text-left p-6">
          <SheetTitle>{eSideBarTabs.STYLINGS}</SheetTitle>
          <SheetDescription>Show your creativity! You can customize every component as you like.</SheetDescription>
        </SheetHeader>

        <Tabs defaultValue="default">
          <TabsList className="sticky top-2 z-50 ml-2 grid w-[95%] grid-cols-2">
            <TabsTrigger value="default">Default</TabsTrigger>
            <TabsTrigger value="media_query">Media Query</TabsTrigger>
          </TabsList>

          {props.state.editor.selectedElement.id.trim() === '' ? (
            <Alert className="ml-2 mt-4 w-[95%]">
              <MousePointerClick className="h-4 w-4" />
              <AlertTitle>No element selected</AlertTitle>
              <AlertDescription className="text-muted-foreground">Click an element on the editor to start editing</AlertDescription>
            </Alert>
          ) : (
            <>
              <TabsContent value="default">
                <StylingsTab
                  handleChangeCustomValues={props.stylings.handleChangeCustomValues}
                  handleOnChanges={props.stylings.handleOnChanges}
                  state={props.state}
                />
              </TabsContent>

              <TabsContent value="media_query">
                <MediaQuery
                  handleChangeCustomValues={props.stylings.handleChangeCustomValues}
                  handleOnChanges={props.stylings.handleOnChanges}
                  state={props.state}
                  updateElement={props.stylings.updateElement}
                />
              </TabsContent>
            </>
          )}
        </Tabs>
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
