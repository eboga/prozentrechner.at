const { src, dest } = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
const rename       = require('gulp-rename');
const scss         = require('gulp-dart-sass');
const sourcemaps   = require('gulp-sourcemaps');



const TARGET = process.env.npm_lifecycle_event;

const srcs = [
    'src/assets/styles/index.scss'
];



const dev = () => {
    return src(srcs)
        .pipe(scss({
            outputStyle: 'expanded'
        }).on('error', scss.logError))
        .pipe(rename((path) => {
            if (path.basename === 'index') {
                path.basename = 'main';
            }
        }))
        .pipe(dest('dist/assets/styles/'));
};

const prod = () => {
    return src(srcs)
        .pipe(scss({
            outputStyle: 'compressed'
        }).on('error', scss.logError))
        .pipe(autoprefixer({grid: false}))
        .pipe(rename((path) => {
            if (path.basename === 'index') {
                path.basename = 'main';
            }
        }))
        .pipe(dest('dist/assets/styles/'));
}



const styles = () => {
    if (TARGET === 'prod') {
        return prod();
    }
    return dev();
}



module.exports = styles;
