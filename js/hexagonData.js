 // 六边形坐标数据
 var countries = [{
  name: "中国",
  position: [116.20, 39.55]
}, {
  name: "中非共和国",
  position: [18.35, 4.23]
}, {
  name: "智利",
  position: [-70.40, -33.24]
}, {
  name: "乍得",
  position: [14.59, 12.10]
}, {
  name: "赞比亚",
  position: [28.16, -15.28]
}, {
  name: "越南",
  position: [105.55, 21.05]
}, {
  name: "约旦",
  position: [35.52, 31.57]
}, {
  name: "英属维尔京群岛",
  position: [-64.37, 18.27]
}, {
  name: "英国",
  position: [-0.05, 51.36]
}, {
  name: "印度尼西亚",
  position: [106.49, -6.09]
}, {
  name: "印度",
  position: [77.13, 28.37]
}, {
  name: "意大利",
  position: [12.29, 41.54]
}, {
  name: "以色列",
  position: [35.12, 31.47]
}, {
  name: "伊朗",
  position: [51.30, 35.44]
}, {
  name: "伊拉克",
  position: [44.30, 33.20]
}, {
  name: "马提尼克岛",
  position: [-61.02, 14.36]
}, {
  name: "马其顿",
  position: [21.26, 42.01]
}, {
  name: "马里",
  position: [-7.55, 12.34]
}, {
  name: "马来西亚",
  position: [101.41, 3.09]
}, {
  name: "吉布提",
  position: [42.20, 11.08]
}, {
  name: "基里巴斯",
  position: [173.00, 1.30]
}, {
  name: "洪都拉斯",
  position: [-87.14, 14.05]
}, {
  name: "赫德岛和麦当劳群岛",
  position: [74.00, -53.00]
}, {
  name: "荷属安的列斯",
  position: [-69.00, 12.05]
}, {
  name: "荷兰",
  position: [4.54, 52.23]
}, {
  name: "韩国",
  position: [126.58, 37.31]
}, {
  name: "海地",
  position: [-72.20, 18.40]
}, {
  name: "哈萨克斯坦",
  position: [71.30, 51.10]
}, {
  name: "圭亚那",
  position: [-58.12, 6.50]
}, {
  name: "瓜德罗普岛",
  position: [-61.44, 16.00]
}, {
  name: "古巴",
  position: [-82.22, 23.08]
}, {
  name: "根西岛",
  position: [-2.33, 49.26]
}, {
  name: "格鲁吉亚",
  position: [44.50, 41.43]
}, {
  name: "格陵兰",
  position: [-51.35, 64.10]
}, {
  name: "哥斯达黎加",
  position: [-84.02, 9.55]
}, {
  name: "哥伦比亚",
  position: [-74.00, 4.34]
}, {
  name: "刚果",
  position: [15.12, -4.09]
}, {
  name: "刚果(扎伊尔)",
  position: [15.15, -4.20]
}, {
  name: "冈比亚",
  position: [-16.40, 13.28]
}, {
  name: "福克兰群岛(马尔维纳斯群岛)",
  position: [-59.51, -51.40]
}, {
  name: "佛得角",
  position: [-23.34, 15.02]
}, {
  name: "芬兰",
  position: [25.03, 60.15]
}, {
  name: "斐济",
  position: [178.30, -18.06]
}, {
  name: "菲律宾",
  position: [121.03, 14.40]
}, {
  name: "法属圭亚那",
  position: [-52.18, 5.05]
}, {
  name: "法属波利尼西亚",
  position: [-149.34, -17.32]
}, {
  name: "法罗群岛",
  position: [-6.56, 62.05]
}, {
  name: "法国",
  position: [2.20, 48.50]
}, {
  name: "厄立特里亚",
  position: [38.55, 15.19]
}, {
  name: "厄瓜多尔",
  position: [-78.35, -0.15]
}, {
  name: "俄罗斯",
  position: [37.35, 55.45]
}, {
  name: "多米尼加共和国",
  position: [-69.59, 18.30]
}, {
  name: "多米尼加",
  position: [-61.24, 15.20]
}, {
  name: "多哥",
  position: [1.20, 6.09]
}, {
  name: "东帝汶",
  position: [125.34, -8.29]
}, {
  name: "德国",
  position: [13.25, 52.30]
}, {
  name: "丹麦",
  position: [12.34, 55.41]
}, {
  name: "赤道几内亚",
  position: [8.50, 3.45]
}, {
  name: "朝鲜",
  position: [125.30, 39.09]
}, {
  name: "布隆迪",
  position: [29.18, -3.16]
}, {
  name: "布基纳法索",
  position: [-1.30, 12.15]
}, {
  name: "不丹",
  position: [89.45, 27.31]
}, {
  name: "博茨瓦纳",
  position: [25.57, -24.45]
}, {
  name: "伯利兹",
  position: [-88.30, 17.18]
}, {
  name: "玻利维亚",
  position: [-68.10, -16.20]
}, {
  name: "波斯尼亚和黑塞哥维那",
  position: [18.26, 43.52]
}, {
  name: "波兰",
  position: [21.00, 52.13]
}, {
  name: "波多黎各",
  position: [-66.07, 18.28]
}, {
  name: "冰岛",
  position: [-21.57, 64.10]
}, {
  name: "比利时",
  position: [4.21, 50.51]
}, {
  name: "比勒陀利亚",
  position: [28.12, -25.44]
}, {
  name: "贝宁",
  position: [2.42, 6.23]
}, {
  name: "北马里亚纳群岛",
  position: [145.45, 15.12]
}, {
  name: "保加利亚",
  position: [23.20, 42.45]
}, {
  name: "白俄罗斯",
  position: [27.30, 53.52]
}, {
  name: "巴西",
  position: [-47.55, -15.47]
}, {
  name: "巴拿马",
  position: [-79.25, 9.00]
}, {
  name: "巴林",
  position: [50.30, 26.10]
}, {
  name: "巴拉圭",
  position: [-57.30, -25.10]
}, {
  name: "巴基斯坦",
  position: [73.10, 33.40]
}, {
  name: "巴哈马",
  position: [-77.20, 25.05]
}, {
  name: "巴布亚新几内亚",
  position: [147.08, -9.24]
}, {
  name: "巴巴多斯",
  position: [-59.30, 13.05]
}, {
  name: "澳大利亚",
  position: [149.08, -35.15]
}, {
  name: "阿根廷",
  position: [-60.00, -36.30]
}, {
  name: "阿富汗",
  position: [69.11, 34.28]
}, {
  name: "阿尔及利亚",
  position: [3.08, 36.42]
}, {
  name: "阿尔巴尼亚",
  position: [19.49, 41.18]
}]
