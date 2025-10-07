import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

export default function StatsCards() {
  return (
    <div className="grid lg:grid-cols-4 gap-6 mb-8">
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-sm font-medium text-muted-foreground">Активные серверы</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-3xl font-bold">2/3</div>
          <p className="text-xs text-muted-foreground mt-1">Работает</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-sm font-medium text-muted-foreground">Игроки онлайн</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-3xl font-bold">7</div>
          <p className="text-xs text-muted-foreground mt-1">Всего подключений</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-sm font-medium text-muted-foreground">Использование RAM</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-3xl font-bold">62%</div>
          <Progress value={62} className="mt-2" />
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-sm font-medium text-muted-foreground">Место на диске</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-3xl font-bold">38%</div>
          <Progress value={38} className="mt-2" />
        </CardContent>
      </Card>
    </div>
  );
}
