import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface Backup {
  id: number;
  date: string;
  size: string;
  type: string;
  status: string;
}

interface BackupsTabProps {
  backups: Backup[];
}

export default function BackupsTab({ backups }: BackupsTabProps) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-base">Резервные копии</CardTitle>
        <Button size="sm">
          <Icon name="Save" size={16} className="mr-2" />
          Создать бэкап
        </Button>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          {backups.map(backup => (
            <div
              key={backup.id}
              className="flex items-center justify-between p-4 rounded-lg border hover:bg-muted/50 transition-colors"
            >
              <div className="flex items-center gap-4">
                <Icon name="Database" size={20} className="text-primary" />
                <div>
                  <div className="font-medium text-sm">{backup.date}</div>
                  <div className="flex items-center gap-2 mt-1">
                    <Badge variant={backup.type === 'auto' ? 'secondary' : 'outline'} className="text-xs">
                      {backup.type === 'auto' ? 'Авто' : 'Ручной'}
                    </Badge>
                    <span className="text-xs text-muted-foreground">{backup.size}</span>
                  </div>
                </div>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  <Icon name="Download" size={16} />
                </Button>
                <Button variant="outline" size="sm">
                  <Icon name="RotateCcw" size={16} />
                </Button>
                <Button variant="ghost" size="sm">
                  <Icon name="Trash2" size={16} />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
