/**
 * http://lbs.amap.com/console/show/picker
 * 活动范围框
 */
let LIMIT_W = 109.082946; // 经度
let LIMIT_E = 120.316838; // 经度
let LIMIT_S = 21.565269; // 纬度
let LIMIT_N = 34.802846; // 纬度
let arrayRectangleLimit = [
    [LIMIT_W, LIMIT_N], // 左上
    [LIMIT_E, LIMIT_N], // 右上
    [LIMIT_E, LIMIT_S], // 右下
    [LIMIT_W, LIMIT_S], // 左下
    [LIMIT_W, LIMIT_N]  // 左上
];

/**
 * @type {
 * [0,NotYet],
 * [1,1Day],
 * [2,7Days+],
 * [3,30Days+],
 * [4,180Days+],
 * [5,365Days+]
 * }
 */
var arrayFootprint = [
    // 豫：河南省
    {"center": "113.585574,34.743753", "type": 1, "name": "阳光城丽景公馆"},
    {"center": "113.592334,34.759204", "type": 1, "name": "五建新街坊"},
    {"center": "113.594167,34.746224", "type": 1, "name": "保利心语"},
    {"center": "113.599542,34.727754", "type": 1, "name": "盛世卧龙城"},
    {"center": "113.601999,34.772283", "type": 1, "name": "九龙城"},
    {"center": "113.621213,34.777824", "type": 1, "name": "升龙天汇广场3号院1803"},
    {"center": "113.621017,34.802846", "type": 1, "name": "谦祥福晟兴隆城"},
    {"center": "113.624795,34.710356", "type": 1, "name": "建设银行"},
    {"center": "113.626560,34.671054", "type": 1, "name": "东原晴天见"},
    {"center": "113.629954,34.708936", "type": 1, "name": "亚星城市山水"},
    {"center": "113.630398,34.695743", "type": 5, "name": "亚星云水居"},
    {"center": "113.630550,34.676504", "type": 1, "name": "招商天地华府"},
    {"center": "113.632872,34.694699", "type": 1, "name": "珠江·翠园"},
    {"center": "113.635175,34.781735", "type": 1, "name": "亚新美好城邦"},
    {"center": "113.640196,34.682858", "type": 1, "name": "泰宏建业国际城"},
    {"center": "113.658075,34.745793", "type": 1, "name": "郑州站"},
    {"center": "113.659697,34.697553", "type": 1, "name": "郑州客运南站"},
    {"center": "113.684351,34.683322", "type": 1, "name": "绿都澜湾"},
    {"center": "113.686464,34.697352", "type": 1, "name": "绿都紫荆华庭"},
    {"center": "113.695758,34.644163", "type": 1, "name": "正商智慧城"},
    {"center": "113.696815,34.689741", "type": 1, "name": "永威城"},
    {"center": "113.697761,34.694453", "type": 1, "name": "正商中州城"},
    {"center": "113.708585,34.763278", "type": 2, "name": "兴业银行（郑州分行营业部）"},
    {"center": "113.726497,34.686469", "type": 1, "name": "中岳俪景湾"},
    {"center": "113.757933,34.691714", "type": 1, "name": "金沙湖高尔夫观邸"},
    {"center": "113.758495,34.764319", "type": 1, "name": "省教育厅行政服务大厅(出版大厦)"},
    {"center": "113.778555,34.759095", "type": 1, "name": "郑州东站"},
    {"center": "113.788690,34.693248", "type": 1, "name": "拓丰·祥和居"},
    {"center": "113.822872,34.020906", "type": 1, "name": "许昌汽车站"},
    {"center": "113.854823,34.526056", "type": 1, "name": "新郑国际机场"},
    {"center": "113.860586,34.685960", "type": 1, "name": "九龙新城"},
    {"center": "113.903949,34.775550", "type": 1, "name": "融创美盛象湖壹号"},
    {"center": "113.957555,33.802639", "type": 1, "name": "南街村"},
    {"center": "113.963929,33.572399", "type": 1, "name": "漯河西站"},
    {"center": "114.007186,33.630129", "type": 1, "name": "好日子婚喜宴主题酒店"},
    {"center": "114.011357,33.603591", "type": 2, "name": "欧洲故事"},
    {"center": "114.020061,33.547494", "type": 1, "name": "神舟鸟园(开源森林公园)"},
    {"center": "114.039738,33.625478", "type": 3, "name": "漯河关徐村"},
    {"center": "114.043729,33.570250", "type": 3, "name": "漯河站"},
    {"center": "114.054932,33.592465", "type": 1, "name": "山水杭城"},
    {"center": "114.079573,33.645543", "type": 2, "name": "老应村 & 黄赵村"},
    {"center": "114.047679,33.595182", "type": 2, "name": "喜德宝饲料北200m(淞江路 x 解放路)"},
    {"center": "114.263668,33.742485", "type": 2, "name": "逍遥镇"},
    {"center": "114.369639,34.792763", "type": 1, "name": "7天连锁酒店(鼓楼广场学院店)"},
    {"center": "114.354676,34.791776", "type": 1, "name": "大相国寺"},
    {"center": "114.355878,34.793833", "type": 1, "name": "鼓楼广场"},
    {"center": "114.355652,34.789912", "type": 1, "name": "如家快捷酒店(鼓楼大相国寺店)"},
    {"center": "114.466165,34.502245", "type": 2, "name": "通许县客运站"},
    {"center": "114.480556,34.498436", "type": 1, "name": "通许市民之家"}, // 20180808
    {"center": "114.516017,33.785597", "type": 1, "name": "西华汽车站(西)"},
    {"center": "114.531198,33.789015", "type": 1, "name": "女娲广场"},
    {"center": "114.534213,33.787309", "type": 1, "name": "西华汽车站(东)"},
    {"center": "114.538841,33.797270", "type": 5, "name": "华龙学校"},
    {"center": "114.575250,34.524619", "type": 2, "name": "东羊羔桥村"},
    {"center": "114.627833,33.780586", "type": 3, "name": "皮营乡王楼"},
    {"center": "114.632076,33.621073", "type": 1, "name": "维也纳酒店"},
    {"center": "114.642354,33.638332", "type": 1, "name": "盛世宴宾楼"}, // 20180810
    {"center": "114.648028,33.632531", "type": 1, "name": "齐老头大虾"},
    {"center": "114.648424,33.618301", "type": 1, "name": "万顺达百货"},
    {"center": "114.655728,33.736650", "type": 1, "name": "赫营村"},
    {"center": "114.656754,33.751296", "type": 3, "name": "栗集村"},
    {"center": "114.664483,33.720732", "type": 1, "name": "马鸣寺"},
    {"center": "114.664576,33.621757", "type": 1, "name": "周口市中心医院"},
    {"center": "114.665256,33.717448", "type": 1, "name": "程楼村"},
    {"center": "114.671062,33.743873", "type": 5, "name": "魏庄村"},
    {"center": "114.707828,33.723944", "type": 1, "name": "盐场村"},
    {"center": "114.709547,33.757852", "type": 4, "name": "王庄"},
    {"center": "114.738298,33.725087", "type": 1, "name": "党路口村"},
    {"center": "114.770302,33.726843", "type": 3, "name": "殷胡同村"},
    {"center": "114.787299,33.710443", "type": 1, "name": "陈寨村"},
    {"center": "114.794443,33.737655", "type": 5, "name": "郑集乡"},
    {"center": "114.790647,33.778709", "type": 1, "name": "李庄"},
    {"center": "114.809272,33.713371", "type": 1, "name": "徐集"},
    {"center": "114.854905,33.721014", "type": 1, "name": "淮阳县中心汽车站"},
    {"center": "114.856324,33.729104", "type": 5, "name": "淮阳一高"},
    {"center": "114.884126,33.766028", "type": 1, "name": "淮阳中学"},
    {"center": "114.887354,33.750466", "type": 2, "name": "太昊伏羲陵"},
    {"center": "114.891362,33.741464", "type": 1, "name": "画卦台"},
    {"center": "114.893236,33.729542", "type": 2, "name": "淮阳一中"},

    // 浙：浙江省
    {"center": "120.135828,29.312323", "type": 1, "name": "新光(饰品)集团"},
    {"center": "120.190480,29.282457", "type": 1, "name": "东阳白云文化城"},
    {"center": "120.206455,29.273045", "type": 2, "name": "东阳陶村杨家"},
    {"center": "120.316838,29.137879", "type": 1, "name": "横店影视城"},

    // 桂：广西壮族自治区
    {"center": "109.388292,24.307874", "type": 1, "name": "柳州火车站"},
    {"center": "110.077702,25.730019", "type": 1, "name": "龙脊峡漂流"},
    {"center": "110.276162,25.283104", "type": 1, "name": "西山公园"},
    {"center": "110.278643,25.254851", "type": 1, "name": "桂林园林植物园"},
    {"center": "110.282334,25.261412", "type": 2, "name": "桂林站"},
    {"center": "110.283586,25.271734", "type": 1, "name": "桂林依佰快捷酒店"},
    {"center": "110.285129,25.264932", "type": 1, "name": "豪客来牛排(明园店)"},
    {"center": "110.285691,25.248125", "type": 1, "name": "南溪山公园"},
    {"center": "110.286495,25.271096", "type": 1, "name": "西门大酒店"},
    {"center": "110.286756,25.266941", "type": 1, "name": "格林联盟酒店"},
    {"center": "110.288841,25.093972", "type": 1, "name": "广西师范大学(雁山校区)"},
    {"center": "110.289433,25.240799", "type": 1, "name": "红街商业广场"},
    {"center": "110.290386,25.270927", "type": 1, "name": "瑞祥宾馆"},
    {"center": "110.290925,25.270859", "type": 1, "name": "金逸国际影城(心连心)"},
    {"center": "110.293375,25.267432", "type": 1, "name": "象山公园"},
    {"center": "110.294257,25.271277", "type": 1, "name": "日月双塔文化公园"},
    {"center": "110.296309,25.279064", "type": 1, "name": "佰迪乐(桂林中山店)"},
    {"center": "110.299312,25.063343", "type": 5, "name": "桂林理工大学(雁山校区)"},
    {"center": "110.300469,25.121630", "type": 1, "name": "桂林旅游学院(旅专)"},
    {"center": "110.301243,25.269943", "type": 1, "name": "訾洲公园"},
    {"center": "110.301762,25.329063", "type": 1, "name": "桂林北站"},
    {"center": "110.304913,25.073573", "type": 1, "name": "广西艺术学院桂林校区"},
    {"center": "110.312616,25.272756", "type": 1, "name": "七星公园"},
    {"center": "110.314178,25.063401", "type": 1, "name": "桂林园博园"},
    {"center": "110.316266,25.280864", "type": 5, "name": "桂林理工大学(屏风校区)"},
    {"center": "110.321478,25.278441", "type": 2, "name": "一周假日酒店"},
    {"center": "110.322717,25.278873", "type": 2, "name": "锦豪商务酒店"},
    {"center": "110.326905,25.264540", "type": 1, "name": "广西师范大学(育才校区)"},
    {"center": "110.336876,25.047864", "type": 1, "name": "愚自乐园"},
    {"center": "110.487370,25.857773", "type": 1, "name": "猫儿山"},
    {"center": "110.493131,24.773504", "type": 1, "name": "阳朔西街"},
    {"center": "110.497875,24.918746", "type": 1, "name": "黄布倒影(20元背景图案)"},
    {"center": "110.529533,24.917128", "type": 1, "name": "兴坪古镇"},
    {"center": "110.673002,25.611199", "type": 1, "name": "凯达便捷酒店"},
    {"center": "110.673985,25.581638", "type": 1, "name": "桂林乐满地主题乐园"},
    {"center": "110.680760,25.600200", "type": 1, "name": "桂林灵渠"},

    // 湘：湖南
    {"center": "109.599282,27.895601", "type": 1, "name": "南华山国家森林公园"},
    {"center": "109.603865,27.949937", "type": 1, "name": "凤凰古城"},
    {"center": "109.735378,28.324071", "type": 1, "name": "吉首站"},

    // 粤：广东省
    {"center": "111.816384,21.565269", "type": 1, "name": "马尾岛"},
    {"center": "111.822425,21.572103", "type": 1, "name": "新圣洋"},
    {"center": "111.823793,21.573255", "type": 1, "name": "牛塘山文化览胜景区"},
    {"center": "111.843839,21.568294", "type": 1, "name": "阳江海陵岛大角湾"},
    {"center": "111.845089,21.571986", "type": 1, "name": "阳江闸坡汽车客运站"},
    {"center": "111.858992,21.568161", "type": 1, "name": "山海湾假日酒店"},
    {"center": "111.970588,21.878833", "type": 1, "name": "阳江东日宾馆"},
    {"center": "113.257291,23.149415", "type": 2, "name": "广州站"},
    {"center": "113.268586,22.987472", "type": 2, "name": "广州南站"},
    {"center": "113.304471,23.143807", "type": 1, "name": "广州动物园海洋馆"},
    {"center": "113.315337,23.001985", "type": 1, "name": "长隆野生动物世界"},
    {"center": "113.324911,23.150551", "type": 1, "name": "广州东站"},
    {"center": "113.363455,22.516967", "type": 1, "name": "岐江公园"},
    {"center": "113.369803,22.521269", "type": 1, "name": "孙文西路文化旅行步行街"},
    {"center": "113.375875,22.522052", "type": 1, "name": "孙中山纪念堂"},
    {"center": "113.382729,22.533408", "type": 2, "name": "大信·新都汇"},
    {"center": "113.382747,22.557063", "type": 1, "name": "中山北站"},
    {"center": "113.382983,22.479461", "type": 1, "name": "金钟水库"},
    {"center": "113.383776,22.524823", "type": 1, "name": "中山市人民医院"},
    {"center": "113.383998,22.512501", "type": 1, "name": "利和广场"},
    {"center": "113.386423,22.454094", "type": 1, "name": "大尖山"},
    {"center": "113.388354,22.497268", "type": 1, "name": "孙文纪念公园"},
    {"center": "113.388847,22.516148", "type": 1, "name": "壹加壹(柏苑)"},
    {"center": "113.388898,22.507322", "type": 1, "name": "兴中体育场"},
    {"center": "113.391690,22.503608", "type": 1, "name": "名树园"},
    {"center": "113.394579,22.511069", "type": 1, "name": "库充市场"},
    {"center": "113.395846,22.519041", "type": 1, "name": "羊家楼"},
    {"center": "113.398721,22.515855", "type": 2, "name": "壹加壹(竹苑)"},
    {"center": "113.399878,22.515626", "type": 1, "name": "尚客优快捷酒店"},
    {"center": "113.399558,22.516211", "type": 5, "name": "竹苑紫竹横街"},
    {"center": "113.399835,22.512654", "type": 5, "name": "宏宇大厦"}, // 2102
    {"center": "113.401505,22.512445", "type": 4, "name": "聚景园"},
    {"center": "113.410987,22.508091", "type": 2, "name": "紫马岭公园"},
    {"center": "113.411014,22.481857", "type": 1, "name": "长命水市场"},
    {"center": "113.411406,22.482125", "type": 1, "name": "中南旅馆"},
    {"center": "113.411599,22.480226", "type": 1, "name": "长胜客旅馆"},
    {"center": "113.415153,22.501764", "type": 1, "name": "中山博览中心"},
    {"center": "113.418227,22.488446", "type": 2, "name": "中山市读书郎电子有限公司"},
    {"center": "113.432956,22.544150", "type": 1, "name": "中山站"},
    {"center": "113.529106,22.442491", "type": 1, "name": "孙中山故居纪念馆"},
    {"center": "113.549641,22.215396", "type": 1, "name": "珠海站"},
    {"center": "113.588221,22.261726", "type": 1, "name": "珠海渔女"},
    {"center": "113.592939,22.238804", "type": 1, "name": "九州港"},
    {"center": "113.808757,22.686662", "type": 1, "name": "德邦快递(福永桥头营业部)"},
    {"center": "113.813795,22.701718", "type": 1, "name": "塘尾小学"},
    {"center": "113.814514,22.633361", "type": 1, "name": "宝安国际机场"},
    {"center": "113.837006,22.587536", "type": 1, "name": "宝安西湾红树林公园"},
    {"center": "113.847281,22.611534", "type": 2, "name": "深港驾校三围训练基地"},
    {"center": "113.849314,22.672775", "type": 1, "name": "凤凰山森林公园"},
    {"center": "113.853877,22.563685", "type": 1, "name": "大兴一汽丰田"},
    {"center": "113.853963,22.579046", "type": 2, "name": "西乡体育中心"},
    {"center": "113.854844,22.583503", "type": 1, "name": "碧海湾公园"},
    {"center": "113.856662,22.564903", "type": 2, "name": "坪洲篮球公园"},
    {"center": "113.856752,22.573984", "type": 1, "name": "深港驾校(阳光海)"},
    {"center": "113.861532,22.573082", "type": 5, "name": "宝源华丰总部经济大厦C座"}, // 320
    {"center": "113.862029,22.566423", "type": 2, "name": "F518时尚创意园"},
    {"center": "113.862355,22.581775", "type": 1, "name": "沃尔玛(宝安金海路店)"},
    {"center": "113.862391,22.541089", "type": 1, "name": "大铲湾码头"},
    {"center": "113.863372,22.565285", "type": 5, "name": "海城新村3区15号"}, // 203
    {"center": "113.863626,22.592332", "type": 1, "name": "铁仔山公园"},
    {"center": "113.863984,22.577745", "type": 5, "name": "盐田新一村五巷20号"}, // 201
    {"center": "113.864143,22.562176", "type": 1, "name": "星级母婴家政"},
    {"center": "113.866311,22.564482", "type": 2, "name": "海城社康"},
    {"center": "113.869335,22.561925", "type": 1, "name": "京东深圳海城配送站"},
    {"center": "113.868314,22.581938", "type": 1, "name": "云幕国际影城(西乡店)"},
    {"center": "113.868518,22.575137", "type": 1, "name": "佳麦蛋糕"},
    {"center": "113.869934,22.579903", "type": 2, "name": "沃尔玛(大益广场店)"},
    {"center": "113.872437,22.562089", "type": 2, "name": "福中福社康"},
    {"center": "113.873033,22.573127", "type": 2, "name": "深港驾校(麻布新村)"},
    {"center": "113.873105,22.572918", "type": 1, "name": "洛克王子(置富广场店)"},
    {"center": "113.873308,22.562809", "type": 1, "name": "西乡派出所"},
    {"center": "113.873788,22.568646", "type": 4, "name": "华侨新村西堤二巷20号"}, // 309
    {"center": "113.873904,22.561694", "type": 1, "name": "上海浦东发展银行(新安支行)"},
    {"center": "113.875375,22.570682", "type": 4, "name": "华侨新村西堤二巷2号"}, // 1007
    {"center": "113.876187,22.608292", "type": 1, "name": "平峦山公园"},
    {"center": "113.876649,22.562034", "type": 2, "name": "宝安区妇幼保健院中心区新院"},
    {"center": "113.878974,22.573755", "type": 2, "name": "西乡商业步行街"},
    {"center": "113.880947,22.557444", "type": 1, "name": "宝安体育场"},
    {"center": "113.881359,22.561136", "type": 1, "name": "沃尔玛(罗田路分店)"},
    {"center": "113.882703,22.577428", "type": 1, "name": "西乡汽车站"},
    {"center": "113.882706,22.548703", "type": 1, "name": "宝安图书馆"},
    {"center": "113.884792,22.560879", "type": 2, "name": "宝安体育馆"},
    {"center": "113.884846,22.563990", "type": 1, "name": "宝安公安分局出入境接待大厅"},
    {"center": "113.899146,22.563762", "type": 1, "name": "宝安汽车站"},
    {"center": "113.902609,22.586215", "type": 1, "name": "宝安公园"},
    {"center": "113.905414,22.494129", "type": 1, "name": "南山公园"},
    {"center": "113.907306,22.527573", "type": 2, "name": "深圳西站"},
    {"center": "113.909211,22.549155", "type": 1, "name": "深业一汽丰田"},
    {"center": "113.909823,22.558194", "type": 1, "name": "中国工商银行（宝安支行）"},
    {"center": "113.911375,22.543752", "type": 1, "name": "荷兰花卉小镇"},
    {"center": "113.912961,22.577966", "type": 1, "name": "大兴广汽丰田"},
    {"center": "113.913431,22.468615", "type": 1, "name": "蛇口港"},
    {"center": "113.914362,22.582897", "type": 1, "name": "深港驾培集团"},
    {"center": "113.917012,22.483009", "type": 1, "name": "海上世界"},
    {"center": "113.918973,22.547835", "type": 1, "name": "中山公园"},
    {"center": "113.919018,22.581807", "type": 1, "name": "兴东站"},
    {"center": "113.923745,22.530824", "type": 2, "name": "深圳第六人民医院（南山医院）"},
    {"center": "113.927911,22.754261", "type": 1, "name": "深圳东周科三路考场"},
    {"center": "113.928345,22.569008", "type": 1, "name": "TCL多媒体大厦"}, // 20180411
    {"center": "113.929414,22.536504", "type": 1, "name": "荔香公园"},
    {"center": "113.933759,22.540571", "type": 1, "name": "万利达科技大厦"},
    {"center": "113.936091,22.533719", "type": 1, "name": "深圳大学"},
    {"center": "113.936430,22.606603", "type": 1, "name": "广仁（牛成）科目二考场"},
    {"center": "113.937985,22.523394", "type": 1, "name": "深圳市软件产业基地"},
    {"center": "113.941597,22.540648", "type": 1, "name": "来电（海王银河科技大厦）"},
    {"center": "113.942786,22.524579", "type": 1, "name": "深圳百度国际大厦"},
    {"center": "113.943215,22.525397", "type": 1, "name": "深圳奥比中光科技有限公司"}, // 20180420
    {"center": "113.943549,22.548181", "type": 1, "name": "科兴科学园"},
    {"center": "113.960553,22.568259", "type": 1, "name": "珠光站"},
    {"center": "113.963103,22.706884", "type": 2, "name": "善领科技公司"},
    {"center": "113.965047,22.651372", "type": 1, "name": "羊台山森林公园"},
    {"center": "113.971674,22.563075", "type": 1, "name": "机动车驾驶人科目一考试中心"},
    {"center": "113.972976,22.534607", "type": 1, "name": "世界之窗"},
    {"center": "113.986481,22.530910", "type": 1, "name": "中国民俗文化村"},
    {"center": "113.987901,22.523395", "type": 1, "name": "华侨城欢乐海岸"},
    {"center": "113.998838,22.522404", "type": 1, "name": "海滨生态公园"},
    {"center": "114.002614,22.537925", "type": 1, "name": "深圳国际园林花卉博览园"},
    {"center": "114.029113,22.609725", "type": 2, "name": "深圳北站"},
    {"center": "114.057004,22.538171", "type": 1, "name": "福田站"},
    {"center": "114.058572,22.553523", "type": 1, "name": "莲花山公园"},
    {"center": "114.059812,22.530777", "type": 1, "name": "深圳会展中心"},
    {"center": "114.068805,22.514725", "type": 1, "name": "福田口岸"},
    {"center": "114.078044,22.545185", "type": 1, "name": "深圳中心公园"},
    {"center": "114.080876,22.562893", "type": 1, "name": "笔架山公园"},
    {"center": "114.085409,22.537082", "type": 2, "name": "深圳市中医院"},
    {"center": "114.085413,22.544441", "type": 1, "name": "华强北"},
    {"center": "114.115644,22.536613", "type": 1, "name": "米兰新娘（和平路店）"},
    {"center": "114.116939,22.544232", "type": 1, "name": "老街"},
    {"center": "114.117665,22.531963", "type": 2, "name": "深圳站"},
    {"center": "114.119132,22.544975", "type": 1, "name": "东门"},
    {"center": "114.174956,22.578596", "type": 1, "name": "仙湖植物园"},
    {"center": "114.219393,22.579355", "type": 1, "name": "梧桐山"},
    {"center": "114.325694,22.600159", "type": 1, "name": "小梅沙"},
    {"center": "114.424409,22.603969", "type": 1, "name": "官湖村"},
    {"center": "114.482836,22.587944", "type": 1, "name": "米兰新娘拍摄基地"},
    {"center": "114.503523,22.587099", "type": 1, "name": ""},
    {"center": "114.049081,22.556352", "type": 1, "name": "北京大学深圳医院"},
    {"center": "114.513514,22.594120", "type": 1, "name": "大鹏所城"},
    {"center": "114.741987,22.961638", "type": 1, "name": "惠东汽车客运站"},
    {"center": "114.750402,22.640653", "type": 1, "name": "巽寮湾"},
    {"center": "114.794728,22.844315", "type": 1, "name": "惠东站"},

    // 港澳
    {"center": "113.545347,22.194755", "type": 1, "name": "大三巴牌坊"},
    {"center": "113.548467,22.187796", "type": 1, "name": "新葡京"},
    {"center": "113.565813,22.145393", "type": 1, "name": "威尼斯人"},
    {"center": "114.070693,22.510443", "type": 1, "name": "落马洲站"},
    {"center": "114.186656,22.298787", "type": 1, "name": "红磡站"},
    {"center": "114.186956,22.275557", "type": 1, "name": "时代广场"},
    {"center": "114.188501,22.277424", "type": 1, "name": "铜锣湾站"},
    {"center": "114.190636,22.280273", "type": 1, "name": "铜锣湾花园"},

    // 闽：福建
    {"center": "119.268944,26.109495", "type": 2, "name": "瑞芯微电子"},
    {"center": "119.280968,26.096915", "type": 2, "name": "格林豪泰快捷酒店"},
    {"center": "119.283858,26.164358", "type": 1, "name": "国家森林公园"},
    {"center": "119.284926,26.098161", "type": 1, "name": "左海公园"},
    {"center": "119.287483,26.094034", "type": 1, "name": "福建博物馆"},
    {"center": "119.288709,26.091924", "type": 1, "name": "西湖公园"},
    {"center": "119.296288,26.082131", "type": 1, "name": "三坊七巷"},
    {"center": "119.320547,26.114035", "type": 1, "name": "福州站"},
    {"center": "119.390512,25.985417", "type": 1, "name": "福州南站"},

    // TODO-LIST
    {"center": "2.122800,41.380900", "type": 0, "name": "诺坎普体育场"},
    {"center": "87.378604,40.414112", "type": 0, "name": "塔克拉玛干沙漠"},
    {"center": "91.070468,29.623065", "type": 0, "name": "拉萨站"},
    {"center": "104.073694,30.697218", "type": 0, "name": "成都站"},
    {"center": "106.545536,29.549257", "type": 0, "name": "重庆站"},
    {"center": "108.961763,34.277651", "type": 0, "name": "西安站"},
    {"center": "112.436296,34.684994", "type": 0, "name": "洛阳站"},
    {"center": "116.427793,39.902814", "type": 0, "name": "北京站"},
    {"center": "117.210061,39.135884", "type": 0, "name": "天津站"},
    {"center": "121.224896,31.337983", "type": 0, "name": "上海国际赛车场"}

];