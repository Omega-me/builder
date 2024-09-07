import { EditorProvider } from '@/common/providers';
import { TooltipProvider } from '@/containers/components/ui/tooltip';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="fixed top-0 bottom-0 left-0 right-0 z-[20] bg-background overflow-hidden">
      <EditorProvider>
        <TooltipProvider>{children}</TooltipProvider>
      </EditorProvider>
    </div>
  );
}
