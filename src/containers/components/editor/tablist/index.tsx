import { CircleHelp } from 'lucide-react';
import { Button } from '../../ui/button';
import { TabsList, TabsTrigger } from '../../ui/tabs';
import { Tooltip, TooltipContent, TooltipTrigger } from '../../ui/tooltip';
import { sidebarTabs } from '@/common/configs';

interface Props {
  editorStandartHeight: number;
}

const TabList: React.FC<Props> = props => {
  return (
    <TabsList
      style={{
        height: props.editorStandartHeight + 'px',
      }}
      className="flex items-center justify-between flex-col w-full bg-transparent h-full gap-4 ">
      <div className="flex-none w-fit flex flex-col justify-between items-center">
        {sidebarTabs.map(s => (
          <TabsTrigger key={s.id} value={s.value} className="w-10 h-10 p-0 mt-1 mb-2 data-[state=active]:bg-muted">
            <Tooltip>
              <TooltipTrigger asChild>{s.Icon()}</TooltipTrigger>
              <TooltipContent side="left">
                <p>{s.value}</p>
              </TooltipContent>
            </Tooltip>
          </TabsTrigger>
        ))}
      </div>
      {/* TODO: add other button sand functionalities at the end of the sidebar */}
      {/* <div className="flex-1 w-fit flex flex-col justify-end">
        <Button variant="outline" className="w-10 h-10 p-0">
          <CircleHelp />
        </Button>
      </div> */}
    </TabsList>
  );
};

export default TabList;
