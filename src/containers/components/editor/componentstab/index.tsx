import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../../ui/accordion';
import { ContainerPlaceholder, LinkPlaceholder, TextPlaceholder, TwoColumnsPlaceholder, VideoPlaceholder } from '../..';
import { eComponentsGroup, eEditorBtns } from '@/common/enums';

const ComponentsTab = () => {
  const elements: {
    Component: React.ReactNode;
    label: string;
    id: eEditorBtns;
    group: eComponentsGroup;
  }[] = [
    {
      Component: <TextPlaceholder />,
      label: 'Text',
      id: eEditorBtns.TEXT,
      group: eComponentsGroup.ELEMENTS,
    },
    {
      Component: <ContainerPlaceholder />,
      label: 'Container',
      id: eEditorBtns.CONTAINER,
      group: eComponentsGroup.LAYOUT,
    },
    {
      Component: <TwoColumnsPlaceholder />,
      label: '2 Columns',
      id: eEditorBtns.TWO_COL,
      group: eComponentsGroup.LAYOUT,
    },
    {
      Component: <VideoPlaceholder />,
      label: 'Video',
      id: eEditorBtns.VIDEO,
      group: eComponentsGroup.ELEMENTS,
    },
    {
      Component: <LinkPlaceholder />,
      label: 'Link',
      id: eEditorBtns.LINK,
      group: eComponentsGroup.ELEMENTS,
    },
  ];

  return (
    <Accordion type="multiple" className="w-full" defaultValue={[eComponentsGroup.LAYOUT, eComponentsGroup.ELEMENTS]}>
      <AccordionItem value={eComponentsGroup.LAYOUT} className="px-6 py-0 border-y-[1px]">
        <AccordionTrigger className="!no-underline">Layout</AccordionTrigger>
        <AccordionContent className="flex flex-wrap gap-2 ">
          {elements
            .filter(element => element.group === eComponentsGroup.LAYOUT)
            .map(element => (
              <div key={element.id} className="flex-col items-center justify-center flex">
                {element.Component}
                <span className="text-muted-foreground">{element.label}</span>
              </div>
            ))}
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value={eComponentsGroup.ELEMENTS} className="px-6 py-0 ">
        <AccordionTrigger className="!no-underline">Elements</AccordionTrigger>
        <AccordionContent className="flex flex-wrap gap-2 ">
          {elements
            .filter(element => element.group === eComponentsGroup.ELEMENTS)
            .map(element => (
              <div key={element.id} className="flex-col items-center justify-center flex">
                {element.Component}
                <span className="text-muted-foreground">{element.label}</span>
              </div>
            ))}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default ComponentsTab;
