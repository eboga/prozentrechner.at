const { src, dest } = require('gulp');
const newer = require('gulp-newer');



const images = () => {
    return src('src/assets/images/**/*')
        .pipe(newer('dist/assets/images'))
        .pipe(dest('dist/assets/images'))
}



module.exports = images;
