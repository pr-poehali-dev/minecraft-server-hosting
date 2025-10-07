import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';
import Icon from '@/components/ui/icon';

export default function SettingsTab() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-base">Настройки сервера</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <label className="text-sm font-medium">Название сервера</label>
          <Input defaultValue="Мой первый сервер" />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium">MOTD (приветствие)</label>
          <Textarea defaultValue="Добро пожаловать на сервер!" rows={2} />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium">Максимум игроков</label>
          <Input type="number" defaultValue="30" />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium">Версия Minecraft</label>
          <Input defaultValue="1.20.1" />
        </div>
        <div className="flex items-center justify-between py-2">
          <div>
            <div className="font-medium text-sm">PvP режим</div>
            <div className="text-xs text-muted-foreground">Разрешить бой между игроками</div>
          </div>
          <Switch defaultChecked />
        </div>
        <div className="flex items-center justify-between py-2">
          <div>
            <div className="font-medium text-sm">Хардкорный режим</div>
            <div className="text-xs text-muted-foreground">Бан при смерти</div>
          </div>
          <Switch />
        </div>
        <Button className="mt-4">
          <Icon name="Save" size={16} className="mr-2" />
          Сохранить настройки
        </Button>
      </CardContent>
    </Card>
  );
}
