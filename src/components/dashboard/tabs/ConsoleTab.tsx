import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface ConsoleTabProps {
  consoleLog: string[];
}

export default function ConsoleTab({ consoleLog }: ConsoleTabProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-base">Консоль сервера</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <ScrollArea className="h-[400px] w-full rounded-md border bg-black/90 p-4">
          <div className="font-mono text-xs space-y-1">
            {consoleLog.map((log, i) => (
              <div key={i} className="text-green-400">{log}</div>
            ))}
          </div>
        </ScrollArea>
        <div className="flex gap-2">
          <Input placeholder="Введите команду..." className="font-mono" />
          <Button>
            <Icon name="Send" size={16} />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
