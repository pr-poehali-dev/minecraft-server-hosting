import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';
import Icon from '@/components/ui/icon';

export default function StartupTab() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-base">Параметры запуска</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <label className="text-sm font-medium">Выделенная RAM (MB)</label>
          <Input type="number" defaultValue="4096" />
          <p className="text-xs text-muted-foreground">Минимум: 1024 MB, Максимум: 8192 MB</p>
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium">Java аргументы</label>
          <Textarea
            defaultValue="-XX:+UseG1GC -XX:+ParallelRefProcEnabled -XX:MaxGCPauseMillis=200"
            rows={3}
            className="font-mono text-xs"
          />
        </div>
        <div className="flex items-center justify-between py-2">
          <div>
            <div className="font-medium text-sm">Автозапуск при падении</div>
            <div className="text-xs text-muted-foreground">Перезапускать сервер автоматически</div>
          </div>
          <Switch defaultChecked />
        </div>
        <Button>
          <Icon name="Save" size={16} className="mr-2" />
          Применить изменения
        </Button>
      </CardContent>
    </Card>
  );
}
