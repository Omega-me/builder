'use client';

import { IEditorElement } from '@/common/interfaces';
import { useState } from 'react';

const TreeNode = ({ node }: { node: IEditorElement }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <li style={{ listStyleType: 'none', margin: '5px 0' }}>
      <div
        onClick={toggleOpen}
        style={{
          cursor: 'pointer',
          padding: '5px 10px',
          borderRadius: '4px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        {node.name} ({node.type})
        {node.content && Array.isArray(node.content) && node.content.length > 0 && <span style={{ marginLeft: '10px' }}>{isOpen ? '▼' : '►'}</span>}
      </div>
      {isOpen && node.content && Array.isArray(node.content) && (
        <ul style={{ paddingLeft: '20px' }}>
          {node.content.map(childNode => (
            <TreeNode key={childNode.id} node={childNode} />
          ))}
        </ul>
      )}
      <div className="pl-[20px] text-[#555]">
        {((node.content as any)?.innerText && (node.content as any).innerText) ||
          ((node.content as any)?.href && (node.content as any)?.href) ||
          ((node.content as any)?.src && (node.content as any)?.src)}
      </div>
    </li>
  );
};

const TreeView = ({ elements }: { elements: IEditorElement[] }) => {
  return (
    <ul style={{ padding: '0', margin: '0' }}>
      {elements.map(element => (
        <TreeNode key={element.id} node={element} />
      ))}
    </ul>
  );
};

export { TreeView, TreeNode };
