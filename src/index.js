import path from 'path';
import fs from 'fs';
import parse from './parser';
import render from './formatters';
import buildAst from './buildAst';

export default (filepath1, filepath2, format) => {
  const before = parse(path.extname(`${__dirname}${filepath1}`), fs.readFileSync(filepath1, 'utf-8'));
  const after = parse(path.extname(`${__dirname}${filepath2}`), fs.readFileSync(filepath2, 'utf-8'));
  const ast = buildAst(before, after);
  return render(ast, format);
};
