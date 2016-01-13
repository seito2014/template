var DEV_PC = './app/pc/dev',
    PUBLIC_PC = './app/pc/public',
    RELEASE_PC = './app/pc/release',
    DEV_SP = './app/sp/dev',
    PUBLIC_SP = './app/sp/public',
    RELEASE_SP = './app/sp/release';

module.exports = {
    pc: {
        dev: DEV_PC,
        public: PUBLIC_PC,
        html: {
            src: [
                DEV_PC + '/ejs/**/*.ejs',
                '!' + DEV_PC + '/ejs/**/_*.ejs'
            ],
            dest: PUBLIC_PC,
            release: RELEASE_PC,
            hint: PUBLIC_PC + '/*.html'
        },
        style: {
            src: DEV_PC + '/sass/**/*.scss',
            dest: PUBLIC_PC + '/css',
            release: RELEASE_PC + '/css',
            lintExcluding: [
                '!' + DEV_PC + '/sass/5-module/sprite/*.scss',
                '!' + DEV_PC + '/sass/library/*.scss'
            ]
        },
        image: {
            src: DEV_PC + '/image/**/*',
            dest: PUBLIC_PC + '/image',
            release: RELEASE_PC + '/image'
        },
        sprite: {
            src: DEV_PC + '/image/sprite/src/**/*.png',
            destImage: DEV_PC + '/image/sprite/dest',
            destStyle: DEV_PC + '/sass/5-module/sprite'
        },
        script: {
            src: [
                DEV_PC + '/js/**/*',
                '!' + DEV_PC + '/js/pages/*.js'
            ],
            src2: DEV_PC + '/js/*',
            srcAll: DEV_PC + '/js/**/*',
            srcPages: [
                DEV_PC + '/js/pages/*.js'
            ],
            dest: PUBLIC_PC + '/js',
            destPages: PUBLIC_PC + '/js/pages',
            release: RELEASE_PC + '/js',
            releasePages: RELEASE_PC + '/js/pages'
        },
        lib: {
            src: DEV_PC + '/lib/**/*',
            dest: PUBLIC_PC + '/lib',
            release: RELEASE_PC + '/lib'
        },
        font: {
            src: DEV_PC + '/font/**/*',
            dest: PUBLIC_PC + '/font',
            release: PUBLIC_PC + '/font'
        },
        iconfont: {
            src: DEV_PC + '/font/iconfont/src/*.svg',
            dest: DEV_PC + '/font/iconfont/dest',
            destStyle: DEV_PC + '/sass/5-module/iconfont'
        },
        frontnoteAsset: {
            out: './style-guide/pc',
            css: [
                '../../app/pc/public/css/style1.css',
                '../../app/pc/public/css/style2.css'
            ],
            script: [
                '../../app/pc/public/lib/modernizer/modernizr.js',
                '../../app/pc/public/lib/jquery/jquery.js',
                '../../app/pc/public/js/library.js',
                '../../app/pc/public/js/app.js'
            ]
        },
        release: RELEASE_PC
    },
    sp: {
        dev: DEV_SP,
        public: PUBLIC_SP,
        html: {
            src: [
                DEV_SP + '/ejs/**/*.ejs',
                '!' + DEV_SP + '/ejs/**/_*.ejs'
            ],
            dest: PUBLIC_SP,
            release: RELEASE_SP,
            hint: PUBLIC_SP + '/*.html'
        },
        style: {
            src: DEV_SP + '/sass/**/*.scss',
            dest: PUBLIC_SP + '/css',
            release: RELEASE_SP + '/css',
            lintExcluding: [
                '!' + DEV_SP + '/sass/6-module/sprite/*.scss',
                '!' + DEV_SP + '/sass/library/*.scss'
            ]
        },
        image: {
            src: DEV_SP + '/image/**/*',
            dest: PUBLIC_SP + '/image',
            release: RELEASE_SP + '/image'
        },
        sprite: {
            src: DEV_SP + '/image/sprite/src/**/*',
            destImage: DEV_SP + '/image/sprite/dest',
            destStyle: DEV_SP + '/sass/5-module/sprite'
        },
        script: {
            src: [
                DEV_SP + '/js/**/*',
                '!' + DEV_SP + '/js/pages/*.js'
            ],
            src2: [
                DEV_SP + '/js/*'
            ],
            srcAll: DEV_SP + '/js/**/*',
            srcPages: [
                DEV_SP + '/js/pages/*.js'
            ],
            dest: PUBLIC_SP + '/js',
            destPages: PUBLIC_SP + '/js/pages',
            release: RELEASE_SP + '/js',
            releasePages: RELEASE_SP + '/js/pages'
        },
        lib: {
            src: DEV_SP + '/lib/**/*',
            dest: PUBLIC_SP + '/lib',
            release: RELEASE_SP + '/lib'
        },
        font: {
            src: DEV_SP + '/font/**/*',
            dest: PUBLIC_SP + '/font',
            release: RELEASE_SP + '/font'
        },
        iconfont: {
            src: DEV_SP + '/font/iconfont/src/*.svg',
            dest: DEV_SP + '/font/iconfont/dest',
            destStyle: DEV_SP + '/sass/5-module/iconfont'
        },
        frontnoteAsset: {
            out: './style-guide/sp',
            css: '../../app/sp/public/css/style.css',
            script: [
                '../../app/pc/public/lib/modernizer/modernizr.js',
                '../../app/sp/public/lib/jquery/jquery.js',
                '../../app/sp/public/js/library.js',
                '../../app/sp/public/js/app.js'
            ]
        },
        release: RELEASE_SP
    },
    scsslintYml: './gulp/scss-lint.yml',
    spriteTemplate: './gulp/sprite-template.mustache',
    jshintrc: './gulp/js-hint.jshintrc',
    htmlhintrc: './gulp/htmlhintrc.json',
    wp: {

    }
};