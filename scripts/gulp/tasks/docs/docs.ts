import { series, task } from 'gulp';
import './example';

task('docs', series('generate'));

