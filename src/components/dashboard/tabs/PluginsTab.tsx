import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Switch } from '@/components/ui/switch';
import Icon from '@/components/ui/icon';

interface Plugin {
  name: string;
  version: string;
  status: string;
  description: string;
}

interface PluginsTabProps {
  plugins: Plugin[];
}

export default function PluginsTab({ plugins }: PluginsTabProps) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-base">Плагины</CardTitle>
        <Button size="sm">
          <Icon name="Plus" size={16} className="mr-2" />
          Установить плагин
        </Button>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          {plugins.map((plugin, i) => (
            <div
              key={i}
              className="flex items-center justify-between p-4 rounded-lg border hover:bg-muted/50 transition-colors"
            >
              <div className="flex items-center gap-4">
                <Icon name="Package" size={20} className="text-primary" />
                <div>
                  <div className="font-medium text-sm">{plugin.name}</div>
                  <div className="text-xs text-muted-foreground">{plugin.description}</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Badge variant="secondary" className="text-xs">{plugin.version}</Badge>
                <Switch checked={plugin.status === 'active'} />
                <Button variant="ghost" size="sm">
                  <Icon name="MoreVertical" size={16} />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
