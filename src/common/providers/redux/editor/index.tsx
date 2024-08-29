'use client';
import { store } from '@/state';
import React from 'react';
import { Provider } from 'react-redux';

const EditorReduxProvider = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <Provider store={store}>{children}</Provider>;
};

export default EditorReduxProvider;
