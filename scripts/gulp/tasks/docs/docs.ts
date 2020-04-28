import { series, task } from 'gulp';
import './example';

task(
  'docs',
  series(
    'generate-doc-json-and-parse-themes',
    'find-full-examples',
  ),
);
