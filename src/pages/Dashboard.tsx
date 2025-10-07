import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { Switch } from '@/components/ui/switch';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { ScrollArea } from '@/components/ui/scroll-area';
import Icon from '@/components/ui/icon';

export default function Dashboard() {
  const [selectedServer, setSelectedServer] = useState('server-1');
  const [serverStatus, setServerStatus] = useState<'online' | 'offline' | 'starting'>('online');
  const [consoleLog, setConsoleLog] = useState([
    '[12:34:56] [Server] Starting Minecraft server...',
    '[12:34:57] [Server] Loading properties...',
    '[12:34:58] [Server] Server started successfully!',
    '[12:35:01] [Info] Player Steve joined the game',
    '[12:35:45] [Info] Player Alex joined the game',
  ]);

  const servers = [
    { id: 'server-1', name: 'Мой первый сервер', status: 'online', players: '5/30', plan: 'Профи ⚔️', ip: '123.45.67.89:25565' },
    { id: 'server-2', name: 'Тестовый сервер', status: 'offline', players: '0/10', plan: 'Житель 🧑', ip: '123.45.67.90:25565' },
    { id: 'server-3', name: 'Приватный сервер', status: 'starting', players: '2/100', plan: 'Драгон 🐲', ip: '123.45.67.91:25565' },
  ];

  const plugins = [
    { name: 'EssentialsX', version: '2.20.1', status: 'active', description: 'Базовые команды и функции' },
    { name: 'WorldEdit', version: '7.2.15', status: 'active', description: 'Редактор мира' },
    { name: 'Vault', version: '1.7.3', status: 'active', description: 'Экономика и права' },
    { name: 'LuckPerms', version: '5.4.102', status: 'inactive', description: 'Управление правами' },
  ];

  const mods = [
    { name: 'OptiFine', version: '1.20.1', status: 'active', description: 'Оптимизация графики' },
    { name: 'JourneyMap', version: '5.9.18', status: 'active', description: 'Карта мира' },
    { name: 'JEI', version: '15.2.0.27', status: 'inactive', description: 'Просмотр рецептов' },
  ];

  const backups = [
    { id: 1, date: '2025-10-07 14:30', size: '2.4 GB', type: 'auto', status: 'complete' },
    { id: 2, date: '2025-10-07 08:30', size: '2.3 GB', type: 'auto', status: 'complete' },
    { id: 3, date: '2025-10-06 20:30', size: '2.2 GB', type: 'manual', status: 'complete' },
    { id: 4, date: '2025-10-06 14:30', size: '2.1 GB', type: 'auto', status: 'complete' },
  ];

  const files = [
    { name: 'plugins', type: 'folder', size: '-', modified: '2025-10-07 12:00' },
    { name: 'worlds', type: 'folder', size: '-', modified: '2025-10-07 11:30' },
    { name: 'server.properties', type: 'file', size: '1.2 KB', modified: '2025-10-07 10:00' },
    { name: 'whitelist.json', type: 'file', size: '256 B', modified: '2025-10-06 15:00' },
    { name: 'ops.json', type: 'file', size: '128 B', modified: '2025-10-06 14:00' },
  ];

  const handleStartServer = () => {
    setServerStatus('starting');
    setConsoleLog(prev => [...prev, '[' + new Date().toLocaleTimeString() + '] [System] Starting server...']);
    setTimeout(() => {
      setServerStatus('online');
      setConsoleLog(prev => [...prev, '[' + new Date().toLocaleTimeString() + '] [Server] Server started successfully!']);
    }, 2000);
  };

  const handleStopServer = () => {
    setServerStatus('offline');
    setConsoleLog(prev => [...prev, '[' + new Date().toLocaleTimeString() + '] [System] Server stopped.']);
  };

  const handleRestartServer = () => {
    setServerStatus('starting');
    setConsoleLog(prev => [...prev, '[' + new Date().toLocaleTimeString() + '] [System] Restarting server...']);
    setTimeout(() => {
      setServerStatus('online');
      setConsoleLog(prev => [...prev, '[' + new Date().toLocaleTimeString() + '] [Server] Server restarted successfully!']);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur">
        <div className="container flex h-16 items-center px-4">
          <div className="flex items-center gap-2 mr-8">
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
              <Icon name="Box" size={18} className="text-white" />
            </div>
            <span className="text-lg font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              MinecraftHost
            </span>
          </div>
          <nav className="flex items-center gap-6 flex-1">
            <a href="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Главная
            </a>
            <a href="/dashboard" className="text-sm font-medium text-foreground">
              Панель управления
            </a>
          </nav>
          <Button variant="outline" size="sm">
            <Icon name="User" size={16} className="mr-2" />
            Профиль
          </Button>
        </div>
      </header>

      <div className="container px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">Панель управления</h1>
            <p className="text-muted-foreground">Управляйте своими серверами Minecraft</p>
          </div>
          <Button className="bg-primary hover:bg-primary/90">
            <Icon name="Plus" size={18} className="mr-2" />
            Создать сервер
          </Button>
        </div>

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

        <div className="grid lg:grid-cols-3 gap-6">
          <Card className="lg:col-span-1">
            <CardHeader>
              <CardTitle>Мои серверы</CardTitle>
              <CardDescription>Выберите сервер для управления</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              {servers.map(server => (
                <div
                  key={server.id}
                  onClick={() => setSelectedServer(server.id)}
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

          <Card className="lg:col-span-2">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Управление сервером</CardTitle>
                  <CardDescription>Мой первый сервер</CardDescription>
                </div>
                <div className="flex gap-2">
                  {serverStatus === 'offline' && (
                    <Button onClick={handleStartServer} className="bg-green-600 hover:bg-green-700">
                      <Icon name="Play" size={16} className="mr-2" />
                      Запустить
                    </Button>
                  )}
                  {serverStatus === 'online' && (
                    <>
                      <Button onClick={handleRestartServer} variant="outline">
                        <Icon name="RotateCw" size={16} className="mr-2" />
                        Перезапуск
                      </Button>
                      <Button onClick={handleStopServer} variant="destructive">
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
            <CardContent>
              <Tabs defaultValue="console" className="w-full">
                <TabsList className="grid w-full grid-cols-5 lg:grid-cols-10">
                  <TabsTrigger value="console" className="text-xs">Консоль</TabsTrigger>
                  <TabsTrigger value="files" className="text-xs">Файлы</TabsTrigger>
                  <TabsTrigger value="backups" className="text-xs">Бэкапы</TabsTrigger>
                  <TabsTrigger value="plugins" className="text-xs">Плагины</TabsTrigger>
                  <TabsTrigger value="mods" className="text-xs">Моды</TabsTrigger>
                  <TabsTrigger value="access" className="text-xs">Доступ</TabsTrigger>
                  <TabsTrigger value="settings" className="text-xs">Настройки</TabsTrigger>
                  <TabsTrigger value="stats" className="text-xs">Статистика</TabsTrigger>
                  <TabsTrigger value="startup" className="text-xs">Запуск</TabsTrigger>
                  <TabsTrigger value="graphics" className="text-xs">Графики</TabsTrigger>
                </TabsList>

                <TabsContent value="console" className="mt-4">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-base">Консоль сервера</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <ScrollArea className="h-[400px] w-full rounded-md border bg-black/90 p-4">
                        <div className="font-mono text-xs space-y-1">
                          {consoleLog.map((log, i) => (
                            <div key={i} className="text-green-400">{log}</div>
                          ))}
                        </div>
                      </ScrollArea>
                      <div className="flex gap-2">
                        <Input placeholder="Введите команду..." className="font-mono" />
                        <Button>
                          <Icon name="Send" size={16} />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="files" className="mt-4">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-base">Файловый менеджер</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        {files.map((file, i) => (
                          <div
                            key={i}
                            className="flex items-center justify-between p-3 rounded-lg border hover:bg-muted/50 cursor-pointer transition-colors"
                          >
                            <div className="flex items-center gap-3">
                              <Icon name={file.type === 'folder' ? 'Folder' : 'File'} size={20} className="text-primary" />
                              <div>
                                <div className="font-medium text-sm">{file.name}</div>
                                <div className="text-xs text-muted-foreground">{file.modified}</div>
                              </div>
                            </div>
                            <div className="flex items-center gap-4">
                              <span className="text-xs text-muted-foreground">{file.size}</span>
                              <Button variant="ghost" size="sm">
                                <Icon name="MoreVertical" size={16} />
                              </Button>
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="flex gap-2 mt-4">
                        <Button variant="outline" size="sm">
                          <Icon name="Upload" size={16} className="mr-2" />
                          Загрузить
                        </Button>
                        <Button variant="outline" size="sm">
                          <Icon name="FolderPlus" size={16} className="mr-2" />
                          Новая папка
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="backups" className="mt-4">
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
                </TabsContent>

                <TabsContent value="plugins" className="mt-4">
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
                </TabsContent>

                <TabsContent value="mods" className="mt-4">
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between">
                      <CardTitle className="text-base">Моды</CardTitle>
                      <Button size="sm">
                        <Icon name="Plus" size={16} className="mr-2" />
                        Установить мод
                      </Button>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        {mods.map((mod, i) => (
                          <div
                            key={i}
                            className="flex items-center justify-between p-4 rounded-lg border hover:bg-muted/50 transition-colors"
                          >
                            <div className="flex items-center gap-4">
                              <Icon name="Box" size={20} className="text-primary" />
                              <div>
                                <div className="font-medium text-sm">{mod.name}</div>
                                <div className="text-xs text-muted-foreground">{mod.description}</div>
                              </div>
                            </div>
                            <div className="flex items-center gap-4">
                              <Badge variant="secondary" className="text-xs">{mod.version}</Badge>
                              <Switch checked={mod.status === 'active'} />
                              <Button variant="ghost" size="sm">
                                <Icon name="MoreVertical" size={16} />
                              </Button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="access" className="mt-4">
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
                </TabsContent>

                <TabsContent value="settings" className="mt-4">
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
                </TabsContent>

                <TabsContent value="stats" className="mt-4">
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
                </TabsContent>

                <TabsContent value="startup" className="mt-4">
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
                </TabsContent>

                <TabsContent value="graphics" className="mt-4">
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
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
