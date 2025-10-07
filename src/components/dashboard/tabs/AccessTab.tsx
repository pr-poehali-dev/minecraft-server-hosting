import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Icon from '@/components/ui/icon';

export default function AccessTab() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-base">Управление доступом</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <h3 className="font-semibold mb-3">FTP доступ</h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between p-2 bg-muted rounded">
              <span className="text-muted-foreground">Хост:</span>
              <span className="font-mono">ftp.minecrafthost.ru</span>
            </div>
            <div className="flex justify-between p-2 bg-muted rounded">
              <span className="text-muted-foreground">Порт:</span>
              <span className="font-mono">21</span>
            </div>
            <div className="flex justify-between p-2 bg-muted rounded">
              <span className="text-muted-foreground">Логин:</span>
              <span className="font-mono">server_123456</span>
            </div>
          </div>
          <Button className="mt-3" variant="outline" size="sm">
            <Icon name="Key" size={16} className="mr-2" />
            Сменить пароль
          </Button>
        </div>
        <div>
          <h3 className="font-semibold mb-3">Белый список игроков</h3>
          <div className="flex gap-2 mb-3">
            <Input placeholder="Ник игрока..." />
            <Button>
              <Icon name="Plus" size={16} />
            </Button>
          </div>
          <div className="space-y-2">
            {['Steve', 'Alex', 'Notch'].map(player => (
              <div key={player} className="flex items-center justify-between p-2 border rounded">
                <span className="text-sm">{player}</span>
                <Button variant="ghost" size="sm">
                  <Icon name="X" size={14} />
                </Button>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
