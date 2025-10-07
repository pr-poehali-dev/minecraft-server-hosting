import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface Server {
  id: string;
  name: string;
  status: string;
  players: string;
  plan: string;
  ip: string;
}

interface ServersListProps {
  servers: Server[];
  selectedServer: string;
  onServerSelect: (serverId: string) => void;
}

export default function ServersList({ servers, selectedServer, onServerSelect }: ServersListProps) {
  return (
    <Card className="lg:col-span-1">
      <CardHeader>
        <CardTitle>Мои серверы</CardTitle>
        <CardDescription>Выберите сервер для управления</CardDescription>
      </CardHeader>
      <CardContent className="space-y-2">
        {servers.map(server => (
          <div
            key={server.id}
            onClick={() => onServerSelect(server.id)}
            className={`p-4 rounded-lg border-2 cursor-pointer transition-all hover:border-primary/50 ${
              selectedServer === server.id ? 'border-primary bg-primary/5' : 'border-border'
            }`}
          >
            <div className="flex items-start justify-between mb-2">
              <div className="flex-1">
                <h3 className="font-semibold text-sm mb-1">{server.name}</h3>
                <Badge variant="secondary" className="text-xs">{server.plan}</Badge>
              </div>
              <Badge
                className={`${
                  server.status === 'online'
                    ? 'bg-green-500/20 text-green-500'
                    : server.status === 'starting'
                    ? 'bg-yellow-500/20 text-yellow-500'
                    : 'bg-red-500/20 text-red-500'
                }`}
              >
                {server.status === 'online' ? 'Онлайн' : server.status === 'starting' ? 'Запуск...' : 'Офлайн'}
              </Badge>
            </div>
            <div className="space-y-1 text-xs text-muted-foreground">
              <div className="flex items-center gap-2">
                <Icon name="Users" size={12} />
                <span>{server.players}</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Globe" size={12} />
                <span className="font-mono">{server.ip}</span>
              </div>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
