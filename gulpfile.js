const gulp = require('gulp'); //подключение модуля gulp содержится в константе gulp 
const ts = require('gulp-typescript');// подключение модуля гилп тайпскрипт содержится в константе ts 

const tsProject = ts.createProject('C:/Users/User/Desktop/Project/tsconfig.json');//создание проекта тайпскрипт на основе конфигурации 
                                                     //tsconfig.json
gulp.task('default', function () {// создание задачи с именем default используя метод gulp.task
  return gulp.src('C:/Users/User/Desktop/Project/wordsColor.ts')//возвращает файлы тайпскрипт,определенные в файле конфигурации
    .pipe(tsProject()) // отправляет исходные файлы тайпскрипт в проект tsProject для компиляции
    .js.pipe(gulp.dest('C:/Users/User/Desktop/Project'));// отправляет скомпилированные файлы js в папку dist методом gulp.dest
});