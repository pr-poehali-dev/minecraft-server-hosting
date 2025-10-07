import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface FileItem {
  name: string;
  type: string;
  size: string;
  modified: string;
}

interface FilesTabProps {
  files: FileItem[];
}

export default function FilesTab({ files }: FilesTabProps) {
  return (
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
  );
}
