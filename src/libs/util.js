let util = {

};
util.title = function (title) {
    title = title ? title : '兴趣圈圈';
    window.document.title = title;
};

export default util;