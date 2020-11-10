const { watch } = require('gulp');



const scripts = require('./gulp.scripts.js');
const fonts = require('./gulp.fonts.js');
const images = require('./gulp.images.js');
const styles = require('./gulp.styles.js');



const watcher = () => {
    watch('src/assets/fonts/**/*', fonts);
    watch('src/assets/images/**/*', images);
    watch('src/assets/styles/**/*', styles);
    watch('src/assets/scripts/**/*', scripts);
};



module.exports = watcher;
