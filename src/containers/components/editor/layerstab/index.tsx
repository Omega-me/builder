'use client';
import React from 'react';
import { TreeView } from '../..';
import { IEditorElement } from '@/common/interfaces';

interface Props {
  elements: IEditorElement[];
}

const LayersTab = (props: Props) => {
  return <TreeView elements={props.elements} />;
};

export default LayersTab;
