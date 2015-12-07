module.exports = {
    style: {
        autoprefixer: ['last 2 versions','ie 9', 'Android >= 4.1'] //prefixの対応度
    },
    sprite: {
        imgName: 'sprite.png',
        cssName: '_sprite.scss',
        padding: 2 //画像同士の間隔
    },
    image: {
        optimizationLevel: 7 //圧縮のレベル
    },
    iconfont: {
        name: 'iconfont'
    },
    server: {
        portPC: 3000, //port番号（PC）
        portSP: 3001 //port番号（SP）
    }
};