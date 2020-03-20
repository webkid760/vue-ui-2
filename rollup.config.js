const rollup = require('rollup');
const resolve = require('rollup-plugin-node-resolve');
const babel = require('rollup-plugin-babel');
const commonjs = require('rollup-plugin-commonjs');
const path = require('path');
const babelConfig = require('./babel.config');



/**
 * [esm、ts编译]
 * @return {[type]} [void]
 */
const rollupCompile = {

    // 配置
    input: './components/main.js',
    output: {
        name: 'saber',
        file: 'dist/saber.js',
        format: 'umd'
    },
    plugins: [  
        commonjs(),
        resolve({
            extensions: [ '.ts', '.js', '.vue']
        }),        
        babel(babelConfig)
    ]


}


// rollup编译
module.exports = rollupCompile;



