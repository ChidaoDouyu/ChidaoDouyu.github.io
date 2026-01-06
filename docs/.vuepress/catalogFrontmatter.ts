/**
 * 根据路径生成目录页的Frontmatter配置
 * @param path 页面路径
 * @returns 对应的Frontmatter配置
 */

export default (path: string) => {

  // 路径-标题映射表
  const pathTitleMap: Record<string, string> = {
    "/en/": "Catalog",
    "/culture/physics/": "物理",
    "/culture/maths/": "数学",
    "/culture/": "高中文化课",
    "/code/": "代码经验",
    "/computer/": "计算机经验",
    "/other/": "其他文章",
  };

  // 匹配路径前缀获取标题
  const matchedTitle = Object.entries(pathTitleMap).find(([prefix]) => 
    path.startsWith(prefix)
  )?.[1] || "目录";

  // 返回最终配置
  return {
    title: matchedTitle,
    pageInfo: false,
    lastUpdated: false,
    comment: false,
  };
};