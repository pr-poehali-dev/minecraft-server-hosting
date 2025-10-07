import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function GraphicsTab() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-base">Графики производительности</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <h3 className="font-semibold text-sm mb-3">Использование CPU</h3>
          <div className="h-32 bg-muted rounded-lg flex items-end justify-around p-4 gap-2">
            {[45, 60, 55, 70, 65, 75, 80, 70, 65, 60, 55, 50].map((height, i) => (
              <div
                key={i}
                className="flex-1 bg-gradient-to-t from-primary to-secondary rounded-t"
                style={{ height: `${height}%` }}
              />
            ))}
          </div>
          <div className="flex justify-between mt-2 text-xs text-muted-foreground">
            <span>12:00</span>
            <span>18:00</span>
          </div>
        </div>
        <div>
          <h3 className="font-semibold text-sm mb-3">Использование RAM</h3>
          <div className="h-32 bg-muted rounded-lg flex items-end justify-around p-4 gap-2">
            {[50, 55, 60, 58, 62, 65, 70, 68, 65, 60, 58, 55].map((height, i) => (
              <div
                key={i}
                className="flex-1 bg-gradient-to-t from-secondary to-primary rounded-t"
                style={{ height: `${height}%` }}
              />
            ))}
          </div>
          <div className="flex justify-between mt-2 text-xs text-muted-foreground">
            <span>12:00</span>
            <span>18:00</span>
          </div>
        </div>
        <div>
          <h3 className="font-semibold text-sm mb-3">Онлайн игроков</h3>
          <div className="h-32 bg-muted rounded-lg flex items-end justify-around p-4 gap-2">
            {[20, 25, 30, 35, 40, 50, 45, 40, 35, 30, 25, 20].map((height, i) => (
              <div
                key={i}
                className="flex-1 bg-gradient-to-t from-green-500 to-green-400 rounded-t"
                style={{ height: `${height}%` }}
              />
            ))}
          </div>
          <div className="flex justify-between mt-2 text-xs text-muted-foreground">
            <span>12:00</span>
            <span>18:00</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
