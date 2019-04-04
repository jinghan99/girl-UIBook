// 全局过滤器

exports.lastChapter = (chapter) => {
  const i = 15;
  if (chapter.length > i) {
    return chapter.substring(0, i);
  }
  return chapter;
};
exports.shortIntro = (chapter) => {
  const i = 35;
  if (chapter.length > i) {
    return chapter.substring(0, i);
  }
  return chapter;
};
