const express = require('express');
const { loadNuxt, build } = require('nuxt');

const app = express();
const isDev = process.env.NODE_ENV !== 'production';
const port = 3000;
 
const mongoose = require('mongoose'); 
const authRouter = require('./authRouter');

app.use(express.json())
app.use(authRouter)
 
async function start() {
  try {
 
    await mongoose.connect("mongodb+srv://aubakirovasker60:Askerka00@cluster.jj91tcf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster")

    // Мы передаем конфигурацию в функцию loadNuxt
    const nuxt = await loadNuxt(isDev ? 'dev' : 'start'); 

    // Middleware для Nuxt.js
    app.use(nuxt.render); 

    // Сборка Nuxt.js в режиме разработки
    if (isDev) { 
      try {  
        await build(nuxt);
      } catch (err) {
        console.error('Error building Nuxt:', err);
      } 
    }

    app.listen(port, '0.0.0.0', () => {
      console.log(`Server is listening on http://localhost:${port}`);
    });
  } catch (err) {
    console.error('Error starting server:', err);
    process.exit(1); // Завершение процесса с кодом ошибки
  } 
}
start();