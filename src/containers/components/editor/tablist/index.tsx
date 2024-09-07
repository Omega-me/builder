import { TabsList, TabsTrigger } from '../../ui/tabs';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../../ui/tooltip';
import { sidebarTabs } from '@/common/configs';

const TabList = () => (
  <TabsList className=" flex items-center flex-col justify-evenly w-full bg-transparent h-fit gap-4 ">
    {sidebarTabs.map(s => (
      <TabsTrigger key={s.id} value={s.value} className="w-10 h-10 p-0 data-[state=active]:bg-muted">
        <Tooltip>
          <TooltipTrigger asChild>{s.Icon()}</TooltipTrigger>
          <TooltipContent side="left">
            <p>{s.value}</p>
          </TooltipContent>
        </Tooltip>
      </TabsTrigger>
    ))}
  </TabsList>
);

export default TabList;
