const { src, dest } = require('gulp');
const newer = require('gulp-newer');



const fonts = () => {
    return src('src/assets/fonts/**/*')
        .pipe(newer('dist/assets/fonts'))
        .pipe(dest('dist/assets/fonts'))
}



module.exports = fonts;
