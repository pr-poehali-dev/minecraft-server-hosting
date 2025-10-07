import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface DashboardHeaderProps {
  onLogout: () => void;
}

export default function DashboardHeader({ onLogout }: DashboardHeaderProps) {
  return (
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
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">
            <Icon name="User" size={16} className="mr-2" />
            Профиль
          </Button>
          <Button variant="ghost" size="sm" onClick={onLogout}>
            <Icon name="LogOut" size={16} className="mr-2" />
            Выход
          </Button>
        </div>
      </div>
    </header>
  );
}
