import fs from 'fs';
import path from 'path';
// перемещаем файл отчета по размеру бандла из dist в reports/bundle_analyzer
const source = path.resolve('dist', 'bundle_stats.html');
const destination = path.resolve(
  'reports',
  'bundle_analyzer',
  'bundle_stats.html',
);

fs.mkdirSync(path.dirname(destination), { recursive: true });
fs.copyFileSync(source, destination);
console.log('stats copied to reports/bundle_analyzer');
// Удаляем исходный файл
fs.unlinkSync(source);
