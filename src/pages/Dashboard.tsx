import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';
import DashboardHeader from '@/components/dashboard/DashboardHeader';
import StatsCards from '@/components/dashboard/StatsCards';
import ServersList from '@/components/dashboard/ServersList';
import ServerControl from '@/components/dashboard/ServerControl';
import ConsoleTab from '@/components/dashboard/tabs/ConsoleTab';
import FilesTab from '@/components/dashboard/tabs/FilesTab';
import BackupsTab from '@/components/dashboard/tabs/BackupsTab';
import PluginsTab from '@/components/dashboard/tabs/PluginsTab';
import ModsTab from '@/components/dashboard/tabs/ModsTab';
import AccessTab from '@/components/dashboard/tabs/AccessTab';
import SettingsTab from '@/components/dashboard/tabs/SettingsTab';
import StatsTab from '@/components/dashboard/tabs/StatsTab';
import StartupTab from '@/components/dashboard/tabs/StartupTab';
import GraphicsTab from '@/components/dashboard/tabs/GraphicsTab';

export default function Dashboard() {
  useEffect(() => {
    const isAuthenticated = localStorage.getItem('isAuthenticated');
    if (!isAuthenticated) {
      window.location.href = '/login';
    }
  }, []);

  const [selectedServer, setSelectedServer] = useState('server-1');
  const [serverStatus, setServerStatus] = useState<'online' | 'offline' | 'starting'>('online');
  const [consoleLog, setConsoleLog] = useState([
    '[12:34:56] [Server] Starting Minecraft server...',
    '[12:34:57] [Server] Loading properties...',
    '[12:34:58] [Server] Server started successfully!',
    '[12:35:01] [Info] Player Steve joined the game',
    '[12:35:45] [Info] Player Alex joined the game',
  ]);

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('userEmail');
    localStorage.removeItem('userName');
    window.location.href = '/login';
  };

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
      <DashboardHeader onLogout={handleLogout} />

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

        <StatsCards />

        <div className="grid lg:grid-cols-3 gap-6">
          <ServersList 
            servers={servers} 
            selectedServer={selectedServer} 
            onServerSelect={setSelectedServer} 
          />

          <Card className="lg:col-span-2">
            <ServerControl 
              serverStatus={serverStatus}
              onStart={handleStartServer}
              onStop={handleStopServer}
              onRestart={handleRestartServer}
            />
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
                  <ConsoleTab consoleLog={consoleLog} />
                </TabsContent>

                <TabsContent value="files" className="mt-4">
                  <FilesTab files={files} />
                </TabsContent>

                <TabsContent value="backups" className="mt-4">
                  <BackupsTab backups={backups} />
                </TabsContent>

                <TabsContent value="plugins" className="mt-4">
                  <PluginsTab plugins={plugins} />
                </TabsContent>

                <TabsContent value="mods" className="mt-4">
                  <ModsTab mods={mods} />
                </TabsContent>

                <TabsContent value="access" className="mt-4">
                  <AccessTab />
                </TabsContent>

                <TabsContent value="settings" className="mt-4">
                  <SettingsTab />
                </TabsContent>

                <TabsContent value="stats" className="mt-4">
                  <StatsTab />
                </TabsContent>

                <TabsContent value="startup" className="mt-4">
                  <StartupTab />
                </TabsContent>

                <TabsContent value="graphics" className="mt-4">
                  <GraphicsTab />
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
