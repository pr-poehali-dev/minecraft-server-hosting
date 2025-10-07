import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

interface ServerControlProps {
  serverStatus: 'online' | 'offline' | 'starting';
  onStart: () => void;
  onStop: () => void;
  onRestart: () => void;
}

export default function ServerControl({ serverStatus, onStart, onStop, onRestart }: ServerControlProps) {
  return (
    <CardHeader>
      <div className="flex items-center justify-between">
        <div>
          <CardTitle>Управление сервером</CardTitle>
          <CardDescription>Мой первый сервер</CardDescription>
        </div>
        <div className="flex gap-2">
          {serverStatus === 'offline' && (
            <Button onClick={onStart} className="bg-green-600 hover:bg-green-700">
              <Icon name="Play" size={16} className="mr-2" />
              Запустить
            </Button>
          )}
          {serverStatus === 'online' && (
            <>
              <Button onClick={onRestart} variant="outline">
                <Icon name="RotateCw" size={16} className="mr-2" />
                Перезапуск
              </Button>
              <Button onClick={onStop} variant="destructive">
                <Icon name="Square" size={16} className="mr-2" />
                Остановить
              </Button>
            </>
          )}
          {serverStatus === 'starting' && (
            <Button disabled>
              <Icon name="Loader2" size={16} className="mr-2 animate-spin" />
              Запуск...
            </Button>
          )}
        </div>
      </div>
    </CardHeader>
  );
}
