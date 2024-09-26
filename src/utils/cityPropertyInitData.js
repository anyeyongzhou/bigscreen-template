const cityPropertyInitData = {
  // 苏州 来自于下拉框选择的城市值，显示城市地图
  "dc-city-sz": {
    properties: {
      name: "苏州市",
      center: [120.876279,31.490789],
      code: "320500",
      zoom: 8,
    },
  },
  "dc-city-tz": {
    properties: {
      name: "泰州市",
      center: [120.147934,32.209155],
      code: "321200",
      zoom: 8,
    },
  },
  "dc-city-yz": {
    properties: {
      name: "扬州市",
      center: [119.462966,32.644210],
      code: "321000",
      zoom: 8,
    },
  },
  "dc-city-nj": {
    properties: {
      name: "南京市",
      center: [118.799685,31.853702],
      code: "320100",
      zoom: 8,
    },
  },
  "dc-city-zj": {
    properties: {
      name: "镇江市",
      center: [119.305836,31.987849],
      code: "321100",
      zoom: 8,
    },
  },
  "dc-city-sq": {
    properties: {
      name: "宿迁市",
      center: [118.575198,33.763232],
      code: "321300",
      zoom: 8,
    },
  },
  "dc-city-xz": {
    properties: {
      name: "徐州市",
      center: [117.784124,34.205768],
      code: "320300",
      zoom: 8,
    },
  },
  "dc-city-nt": {
    properties: {
      name: "南通市",
      center: [120.994291,32.1980171],
      code: "320600",
      zoom: 8,
    },
  },
  "dc-city-yc": {
    properties: {
      name: "盐城市",
      center: [120.163561,33.647382],
      code: "320900",
      zoom: 8,
    },
  },
  "dc-city-wx": {
    properties: {
      name: "无锡市",
      center: [120.111910,31.401169],
      code: "320200",
      zoom: 8,
    },
  },
  "dc-city-cz": {
    properties: {
      name: "常州市",
      center: [119.773987,31.660689],
      code: "320400",
      zoom: 8,
    },
  },
  "dc-city-ha": {
    properties: {
      name: "淮安市",
      center: [119.015285,33.310353],
      code: "320800",
      zoom: 8,
    },
  },
  "dc-city-lyg": {
    properties: {
      name: "连云港市",
      center: [119.001611,34.666653],
      code: "320700",
      zoom: 8,
    },
  },
};
const countyArr = [
  {
      code: "dc-city-cz",
      key: "dc-city-cz-shiqu-sq",
      city: "常州",
      placeName: "常州市区",
  },
  {
      code: "dc-city-cz",
      key: "dc-city-cz-county-jt",
      city: "常州",
      placeName: "金坛区",
  },
  {
      code: "dc-city-cz",
      key: "dc-city-cz-county-ly",
      city: "常州",
      placeName: "溧阳市",
  },
  {
      code: "dc-city-ha",
      key: "dc-city-ha-shiqu-sq",
      city: "淮安",
      placeName: "淮安市区",
  },
  {
      code: "dc-city-ha",
      key: "dc-city-ha-county-hz",
      city: "淮安",
      placeName: "洪泽区",
  },
  {
      code: "dc-city-ha",
      key: "dc-city-ha-county-ls",
      city: "淮安",
      placeName: "涟水县",
  },
  {
      code: "dc-city-ha",
      key: "dc-city-ha-county-xy",
      city: "淮安",
      placeName: "盱眙县",
  },
  {
      code: "dc-city-ha",
      key: "dc-city-ha-county-jh",
      city: "淮安",
      placeName: "金湖县",
  },
  {
      code: "dc-city-ha",
      key: "dc-city-ha-county-ha",
      city: "淮安",
      placeName: "淮安区",
  },
  {
      code: "dc-city-ha",
      key: "dc-city-ha-county-hy",
      city: "淮安",
      placeName: "淮阴区",
  },
  {
      code: "dc-city-lyg",
      key: "dc-city-lyg-shiqu-sq",
      city: "连云港",
      placeName: "连云港市区",
  },
  {
      code: "dc-city-lyg",
      key: "dc-city-lyg-county-ganyu",
      city: "连云港",
      placeName: "赣榆区",
  },
  {
      code: "dc-city-lyg",
      key: "dc-city-lyg-county-gn",
      city: "连云港",
      placeName: "灌南县",
  },
  {
      code: "dc-city-lyg",
      key: "dc-city-lyg-county-dh",
      city: "连云港",
      placeName: "东海县",
  },
  {
      code: "dc-city-lyg",
      key: "dc-city-lyg-county-guanyun",
      city: "连云港",
      placeName: "灌云县",
  },
  {
      code: "dc-city-nj",
      key: "dc-city-nj-shiqu-sq",
      city: "南京",
      placeName: "南京市区",
  },
  {
      code: "dc-city-nj",
      key: "dc-city-nj-county-jn",
      city: "南京",
      placeName: "江宁区",
  },
  {
      code: "dc-city-nj",
      key: "dc-city-nj-county-lh",
      city: "南京",
      placeName: "六合区",
  },
  {
      code: "dc-city-nj",
      key: "dc-city-nj-county-ls",
      city: "南京",
      placeName: "溧水区",
  },
  {
      code: "dc-city-nj",
      key: "dc-city-nj-county-gc",
      city: "南京",
      placeName: "高淳区",
  },
  {
      code: "dc-city-nj",
      key: "dc-city-nj-county-jbxq",
      city: "南京",
      placeName: "江北新区",
  },
  {
      code: "dc-city-nt",
      key: "dc-city-nt-shiqu-sq",
      city: "南通",
      placeName: "南通市区",
  },
  {
      code: "dc-city-nt",
      key: "dc-city-nt-county-ha",
      city: "南通",
      placeName: "海安市",
  },
  {
      code: "dc-city-nt",
      key: "dc-city-nt-county-tz",
      city: "南通",
      placeName: "通州区",
  },
  {
      code: "dc-city-nt",
      key: "dc-city-nt-county-rd",
      city: "南通",
      placeName: "如东县",
  },
  {
      code: "dc-city-nt",
      key: "dc-city-nt-county-qd",
      city: "南通",
      placeName: "启东市",
  },
  {
      code: "dc-city-nt",
      key: "dc-city-nt-county-rg",
      city: "南通",
      placeName: "如皋市",
  },
  {
      code: "dc-city-nt",
      key: "dc-city-nt-county-hm",
      city: "南通",
      placeName: "海门区",
  },
  {
      code: "dc-city-sq",
      key: "dc-city-sq-shiqu-sq",
      city: "宿迁",
      placeName: "宿迁市区",
  },
  {
      code: "dc-city-sq",
      key: "dc-city-sq-county-shuyang",
      city: "宿迁",
      placeName: "沭阳县",
  },
  {
      code: "dc-city-sq",
      key: "dc-city-sq-county-siyang",
      city: "宿迁",
      placeName: "泗阳县",
  },
  {
      code: "dc-city-sq",
      key: "dc-city-sq-county-sh",
      city: "宿迁",
      placeName: "泗洪县",
  },
  { 
      code: "dc-city-sz", 
      key: "dc-city-sz-shiqu-sq",
      city: "苏州",
      placeName: "苏州市区",
  },
  {
      code: "dc-city-sz",
      key: "dc-city-sz-county-tc",
      city: "苏州",
      placeName: "太仓市",
  },
  {
      code: "dc-city-sz",
      key: "dc-city-sz-county-wj",
      city: "苏州",
      placeName: "吴江区",
  },
  {
      code: "dc-city-sz",
      key: "dc-city-sz-county-cs",
      city: "苏州",
      placeName: "常熟市",
  },
  {
      code: "dc-city-sz",
      key: "dc-city-sz-county-zjg",
      city: "苏州",
      placeName: "张家港市",
  },
  {
      code: "dc-city-sz",
      key: "dc-city-sz-county-ks",
      city: "苏州",
      placeName: "昆山市",
  },
  {
      code: "dc-city-tz",
      key: "dc-city-tz-county-xh",
      city: "泰州",
      placeName: "兴化市",
  },
  { 
      code: "dc-city-tz", 
      key: "dc-city-tz-shiqu-sq", 
      city: "泰州",
      placeName: "泰州市区",
  },
  {
      code: "dc-city-tz",
      key: "dc-city-tz-county-jj",
      city: "泰州",
      placeName: "靖江市",
  },
  {
      code: "dc-city-tz",
      key: "dc-city-tz-county-tx",
      city: "泰州",
      placeName: "泰兴市",
  },
  {
      code: "dc-city-tz",
      key: "dc-city-tz-county-jy",
      city: "泰州",
      placeName: "姜堰区",
  },
  { 
      code: "dc-city-wx", 
      key: "dc-city-wx-shiqu-sq", 
      city: "无锡",
      placeName: "无锡市区",
  },
  {
      code: "dc-city-wx",
      key: "dc-city-wx-county-jy",
      city: "无锡",
      placeName: "江阴市",
  },
  {
      code: "dc-city-wx",
      key: "dc-city-wx-county-yx",
      city: "无锡",
      placeName: "宜兴市",
  },
  { 
      code: "dc-city-xz", 
      key: "dc-city-xz-shiqu-sq", 
      city: "徐州",
      placeName: "徐州市区",
  },
  {
      code: "dc-city-xz",
      key: "dc-city-xz-county-ts",
      city: "徐州",
      placeName: "铜山区",
  },
  {
      code: "dc-city-xz",
      key: "dc-city-xz-county-px",
      city: "徐州",
      placeName: "沛县",
  },
  {
      code: "dc-city-xz",
      key: "dc-city-xz-county-xy",
      city: "徐州",
      placeName: "新沂市",
  },
  {
      code: "dc-city-xz",
      key: "dc-city-xz-county-pz",
      city: "徐州",
      placeName: "邳州市",
  },
  {
      code: "dc-city-xz",
      key: "dc-city-xz-county-sn",
      city: "徐州",
      placeName: "睢宁县",
  },
  {
      code: "dc-city-xz",
      key: "dc-city-xz-county-fx",
      city: "徐州",
      placeName: "丰县",
  },
  { 
      code: "dc-city-yc", 
      key: "dc-city-yc-shiqu-sq", 
      city: "盐城",
      placeName: "盐城市区",
  },
  {
      code: "dc-city-yc",
      key: "dc-city-yc-county-dt",
      city: "盐城",
      placeName: "东台市",
  },
  {
      code: "dc-city-yc",
      key: "dc-city-yc-county-df",
      city: "盐城",
      placeName: "大丰区",
  },
  {
      code: "dc-city-yc",
      key: "dc-city-yc-county-jh",
      city: "盐城",
      placeName: "建湖县",
  },
  {
      code: "dc-city-yc",
      key: "dc-city-yc-county-sy",
      city: "盐城",
      placeName: "射阳县",
  },
  {
      code: "dc-city-yc",
      key: "dc-city-yc-county-fn",
      city: "盐城",
      placeName: "阜宁县",
  },
  {
      code: "dc-city-yc",
      key: "dc-city-yc-county-bh",
      city: "盐城",
      placeName: "滨海县",
  },
  {
      code: "dc-city-yc",
      key: "dc-city-yc-county-xs",
      city: "盐城",
      placeName: "响水县",
  },
  {
      code: "dc-city-yz",
      key: "dc-city-yz-county-gy",
      city: "扬州",
      placeName: "高邮市",
  },
  {
      code: "dc-city-yz",
      key: "dc-city-yz-county-jd",
      city: "扬州",
      placeName: "江都区",
  },
  {
      code: "dc-city-yz",
      key: "dc-city-yz-county-yz",
      city: "扬州",
      placeName: "仪征市",
  },
  {
      code: "dc-city-yz",
      key: "dc-city-yz-county-by",
      city: "扬州",
      placeName: "宝应县",
  },
  { 
      code: "dc-city-yz", 
      key: "dc-city-yz-shiqu-sq", 
      city: "扬州",
      placeName: "扬州市区",
  },
  {
      code: "dc-city-zj",
      key: "dc-city-zj-county-dy",
      city: "镇江",
      placeName: "丹阳市",
  },
  {
      code: "dc-city-zj",
      key: "dc-city-zj-county-yz",
      city: "镇江",
      placeName: "扬中市",
  },
  {
      code: "dc-city-zj",
      key: "dc-city-zj-county-jr",
      city: "镇江",
      placeName: "句容市",
  },
  { 
      code: "dc-city-zj", 
      key: "dc-city-zj-shiqu-sq", 
      city: "镇江",
      placeName: "镇江市区",
  },
];
const cityPermissionMapping = {
  sysAndProvince: [
    'dc-sys-admin',
    'dc-data-admin-province',
    'dc-data-admin-province-viewer'
  ],
  city: [
    'dc-data-admin-city',
    'dc-data-admin-city-viewer'
  ]

}

export {
  cityPropertyInitData,
  countyArr,
  cityPermissionMapping
};
  
