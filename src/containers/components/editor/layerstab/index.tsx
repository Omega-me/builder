'use client';
import React from 'react';
import { TreeView } from '../..';
import { IEditorElement } from '@/common/interfaces';

interface LayersTabProps {
  elements: IEditorElement[];
}

const LayersTab = (props: LayersTabProps) => {
  return <TreeView elements={props.elements} />;
};

export default LayersTab;
