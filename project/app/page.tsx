import React from "react";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Separator } from "@/components/ui/separator";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Bold,
  Italic,
  Underline,
  AlignLeft,
  AlignCenter,
  AlignRight,
  List,
  ListOrdered,
  Heading1,
  Heading2,
  Quote,
} from "lucide-react";

export default function Home(): React.JSX.Element {
  return (
    <main className="min-h-screen p-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">
            Modern WYSIWYG Editor with TipTap 3
          </h1>
          <p className="text-muted-foreground mb-4">
            Built with Next.js 16, React 19, Tailwind CSS 4, and Shadcn UI
          </p>
          <Separator className="my-4" />
          <p className="text-sm text-muted-foreground">
            Shadcn UI components are now ready! Below are some example
            components we&apos;ll use in our editor.
          </p>
        </div>

        <div className="border rounded-lg p-8 bg-card">
          <h2 className="text-2xl font-semibold mb-6">
            Shadcn UI Components Demo
          </h2>

          <div className="space-y-8">
            {/* Button Examples */}
            <div>
              <h3 className="text-lg font-medium mb-4">Buttons</h3>
              <div className="flex flex-wrap gap-2">
                <Button variant="default">Default</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="destructive">Destructive</Button>
                <Button variant="ghost">Ghost</Button>
                <Button variant="link">Link</Button>
              </div>
            </div>

            <Separator />

            {/* Toolbar Simulation */}
            <div>
              <h3 className="text-lg font-medium mb-4">
                Editor Toolbar Simulation
              </h3>
              <div className="flex flex-wrap items-center gap-1 p-4 border rounded-md bg-muted/50">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="outline" size="icon">
                        <Bold className="h-4 w-4" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Bold (Ctrl+B)</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>

                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="outline" size="icon">
                        <Italic className="h-4 w-4" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Italic (Ctrl+I)</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>

                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="outline" size="icon">
                        <Underline className="h-4 w-4" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Underline (Ctrl+U)</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>

                <Separator orientation="vertical" className="h-8 mx-2" />

                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="outline" size="icon">
                        <AlignLeft className="h-4 w-4" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Align Left</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>

                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="outline" size="icon">
                        <AlignCenter className="h-4 w-4" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Align Center</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>

                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="outline" size="icon">
                        <AlignRight className="h-4 w-4" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Align Right</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>

                <Separator orientation="vertical" className="h-8 mx-2" />

                {/* Dropdown Menu Example */}
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline">
                      <Heading1 className="h-4 w-4 mr-2" />
                      Headings
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuLabel>Text Styles</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                      <Heading1 className="h-4 w-4 mr-2" />
                      Heading 1
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Heading2 className="h-4 w-4 mr-2" />
                      Heading 2
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Quote className="h-4 w-4 mr-2" />
                      Blockquote
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                      <List className="h-4 w-4 mr-2" />
                      Bullet List
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <ListOrdered className="h-4 w-4 mr-2" />
                      Numbered List
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>

            <Separator />

            {/* Editor Content Area */}
            <div>
              <h3 className="text-lg font-medium mb-4">Editor Preview</h3>
              <div className="min-h-50 p-4 border rounded-md bg-background">
                <p className="mb-4">
                  This is where the TipTap editor will be rendered.
                </p>
                <p className="text-sm text-muted-foreground">
                  The editor will support rich text formatting, images, tables,
                  code blocks, and more.
                </p>
              </div>
            </div>

            <div className="pt-4">
              <Button className="w-full" size="lg">
                Next: Install TipTap 3
              </Button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
