import {build} from 'esbuild';
import {mkdirSync,rmSync,cpSync,writeFileSync} from 'node:fs';
rmSync('dist',{recursive:true,force:true});mkdirSync('dist/assets',{recursive:true});cpSync('public','dist',{recursive:true});
await build({entryPoints:['src/index.jsx'],bundle:true,outdir:'dist/assets',entryNames:'legal',loader:{'.jpg':'file','.png':'file','.svg':'file'},jsx:'automatic',minify:true,define:{'process.env.NODE_ENV':'"production"'},publicPath:'/demos/steliant-legal/assets/'});
writeFileSync('dist/index.html','<!doctype html><html lang="es"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Steliant Legal · Stephanie López Frías</title><link rel="stylesheet" href="/demos/steliant-legal/assets/legal.css"></head><body><div id="root"></div><script src="/demos/steliant-legal/assets/legal.js"></script></body></html>');console.log('Steliant Legal: complete original React app built.');
