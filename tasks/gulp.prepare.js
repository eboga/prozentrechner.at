const del = require('del');



const prepare = () => {
    return del('dist/assets/*');
}



module.exports = prepare;
