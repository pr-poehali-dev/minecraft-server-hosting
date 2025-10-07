import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function StatsTab() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-base">Статистика сервера</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-4 mb-6">
          <Card>
            <CardContent className="pt-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">1,247</div>
                <div className="text-sm text-muted-foreground mt-1">Всего подключений</div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">89</div>
                <div className="text-sm text-muted-foreground mt-1">Уникальных игроков</div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">156ч</div>
                <div className="text-sm text-muted-foreground mt-1">Общее время работы</div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">99.8%</div>
                <div className="text-sm text-muted-foreground mt-1">Uptime</div>
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="space-y-3">
          <h3 className="font-semibold text-sm">Топ игроков по времени</h3>
          {['Steve - 45ч 23м', 'Alex - 38ч 12м', 'Notch - 32ч 45м'].map((player, i) => (
            <div key={i} className="flex items-center justify-between p-3 border rounded">
              <span className="text-sm">{player}</span>
              <Badge variant="secondary">{i + 1}</Badge>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
