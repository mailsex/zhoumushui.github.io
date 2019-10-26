function initDataFront() {
    let legendData = ['正面25%偏置'];
    let arrayCar = [];
    let seriesValue = [];
    let arrayScore = [];

    function addData(car, score) {
        arrayCar.push(car);
        arrayScore.push(score);
    }

    addData('大众途观L', 24);
    addData('比亚迪宋MAX', 24);
    addData('别克GL8', 24);
    addData('起亚智跑', 24);
    addData('东风AX7', 23);
    addData('宝骏510', 22);
    addData('奇瑞艾瑞泽5', 18);
    addData('现代菲斯塔', 18);
    addData('绅宝D50', 17);
    addData('江淮瑞风S3', 16);
    addData('日产西玛', 16);
    addData('宝马318i', 14);
    addData('大众迈腾', 12);
    addData('本田凌派', 12);
    addData('别克昂科威', 12);
    addData('吉利星越', 12);
    addData('斯柯达柯迪亚克', 9);
    addData('本田思域', 9);
    addData('传祺GS7', 9);
    addData('众泰T600', 8);
    addData('雷诺科雷傲', 8);
    addData('本田雅阁', 6);
    addData('凯迪拉克XT4', 6);
    addData('奔驰C200', 6);
    addData('福特福克斯', 5);
    addData('哈弗F5', 4);
    addData('三菱欧蓝德', 4);
    addData('现代领动', 2);
    addData('魏派VV5', 2);
    addData('比亚迪唐', 2);
    addData('领克01', 2);
    addData('丰田凯美瑞', 2);
    addData('日产天籁', 0);
    addData('沃尔沃XC60', 0);
    addData('丰田亚洲龙', 0);
    addData('丰田雷凌', 0);
    addData('丰田奕泽', 0);

    for (var i = 0; i < legendData.length; i++) {
        var seriesDataVal = null;
        seriesDataVal = {
            barWidth: 10,//柱状条宽度
            //name: '正面25%偏置碰撞',
            type: 'bar',
            itemStyle: {
                normal: {
                    show: true,//鼠标悬停时显示label数据
                    barBorderRadius: [10, 10, 10, 10],//柱形图圆角，初始化效果
                    color: function (params) {
                        if (params.value < 4) return "#4CAF50";
                        else if (params.value < 10) return "#FFEB3B";
                        else if (params.value < 20) return "#FF9800";
                        else return "#f44336";
                    }
                }
            },
            label: {
                normal: {
                    show: true, //显示数据
                    position: 'right'//显示数据位置 'top/right/left/insideLeft/insideRight/insideTop/insideBottom'
                }
            },
            data: arrayScore
        };
        seriesValue.push(seriesDataVal);
    }
    buildChart('detailFront', "正面25%偏置碰撞（越低越好）", legendData, arrayCar, seriesValue);
}

function initDataSide() {
    let legendData = ['侧面碰撞'];
    let arrayCar = [];
    let seriesValue = [];
    let arrayScore = [];

    function addData(car, score) {
        arrayCar.push(car);
        arrayScore.push(score);
    }

    addData('本田思域', 84); // 8.0
    addData('宝骏510', 80); // 2.5
    addData('比亚迪宋MAX', 60); // 1.0
    addData('奇瑞艾瑞泽5', 58); // 10.5
    addData('江淮瑞风S3', 56); // 4.5
    addData('现代领动', 44); // 11.0
    addData('绅宝D50', 38); // 6.0
    addData('斯柯达柯迪亚克', 34); // 11.5
    addData('哈弗F5', 32); // 17.5
    addData('现代菲斯塔', 28); // 10.5
    addData('别克GL8', 26); // 8.0
    addData('本田凌派', 24); // 12.5
    addData('本田雅阁', 14); // 14.5
    addData('三菱欧蓝德', 12); //  9.0
    addData('大众迈腾', 10); // 12.0
    addData('起亚智跑', 10); // 13.0
    addData('别克昂科威', 10); // 13.0
    addData('魏派VV5', 10); // 18.0
    addData('奔驰C200', 10); // 20.0
    addData('传祺GS7', 8); // 14.5
    addData('东风AX7', 8);// 15.0
    addData('大众途观L', 8); // 18.0
    addData('比亚迪唐', 8); // 21.5
    addData('雷诺科雷傲', 6); //  4.5
    addData('日产天籁', 6); // 10.5
    addData('吉利星越', 6); // 17.0
    addData('福特福克斯', 4); // 21.0
    addData('日产西玛', 2); //  5.5
    addData('宝马318i', 2); // 18.5
    addData('众泰T600', 0); // 14.0
    addData('丰田凯美瑞', 0); // 15.5
    addData('领克01', 0); // 16.0
    addData('丰田亚洲龙', 0); // 16.5
    addData('丰田雷凌', 0); // 17.5
    addData('凯迪拉克XT4', 0); // 18.5
    addData('沃尔沃XC60', 0); // 26.0
    addData('丰田奕泽', 0); // 31.5

    for (let i = 0; i < legendData.length; i++) {
        let seriesDataVal = null;
        seriesDataVal = {
            barWidth: 10,//柱状条宽度
            type: 'bar',
            itemStyle: {
                normal: {
                    show: true,//鼠标悬停时显示label数据
                    barBorderRadius: [10, 10, 10, 10],//柱形图圆角，初始化效果
                    color: function (params) {
                        if (params.value < 7) return "#4CAF50";
                        else if (params.value < 21) return "#FFEB3B";
                        else if (params.value < 33) return "#FF9800";
                        else return "#f44336";
                    }
                }
            },
            label: {
                normal: {
                    show: true, //显示数据
                    position: 'right'//显示数据位置 'top/right/left/insideLeft/insideRight/insideTop/insideBottom'
                }
            },
            data: arrayScore
        };
        seriesValue.push(seriesDataVal);
    }
    buildChart('detailSide', "侧面碰撞（越低越好）", legendData, arrayCar, seriesValue);
}

function initDataTop() {
    let legendData = ['车顶强度'];
    let arrayCar = [];
    let seriesValue = [];
    let arrayScore = [];

    function addData(car, score) {
        arrayCar.push(car);
        arrayScore.push(score);
    }

    addData('雷诺科雷傲', 2.70);
    addData('宝骏510', 2.86);
    addData('三菱欧蓝德', 2.89);
    addData('绅宝D50', 3.31);
    addData('东风AX7', 3.42);
    addData('别克GL8', 3.51);
    addData('日产西玛', 3.57);
    addData('魏派VV5', 3.60);
    addData('起亚智跑', 3.70);
    addData('传祺GS7', 3.75);
    addData('众泰T600', 3.79);
    addData('比亚迪宋MAX', 3.85);
    addData('江淮瑞风S3', 3.90);
    addData('比亚迪唐', 4.04);
    addData('本田雅阁', 4.15);
    addData('现代菲斯塔', 4.17);
    addData('别克昂科威', 4.36);
    addData('大众途观L', 4.44);
    addData('本田凌派', 4.49);
    addData('哈弗F5', 4.51);
    addData('奇瑞艾瑞泽5', 4.53);
    addData('斯柯达柯迪亚克', 4.55);
    addData('凯迪拉克XT4', 4.59);
    addData('日产天籁', 4.73);
    addData('宝马318i', 4.89);
    addData('沃尔沃XC60', 5.06);
    addData('吉利星越', 5.10);
    addData('大众迈腾', 5.12);
    addData('领克01', 5.21);
    addData('现代领动', 5.32);
    addData('本田思域', 5.34);
    addData('福特福克斯', 5.61);
    addData('丰田雷凌', 5.66);
    addData('丰田奕泽', 5.75);
    addData('丰田凯美瑞', 5.98);
    addData('丰田亚洲龙', 6.03);
    addData('奔驰C200', 6.06);

    for (let i = 0; i < legendData.length; i++) {
        let seriesDataVal = null;
        seriesDataVal = {
            barWidth: 10,//柱状条宽度
            type: 'bar',
            itemStyle: {
                normal: {
                    show: true,//鼠标悬停时显示label数据
                    barBorderRadius: [10, 10, 10, 10],//柱形图圆角，初始化效果
                    color: function (params) {
                        if (params.value >= 4.0) return "#4CAF50";
                        else if (params.value >= 3.25) return "#FFEB3B";
                        else if (params.value >= 2.50) return "#FF9800";
                        else return "#f44336";
                    }
                }
            },
            label: {
                normal: {
                    show: true, //显示数据
                    position: 'right'//显位置 'top/right/left/insideLeft/insideRight/insideTop/insideBottom'
                }
            },
            data: arrayScore
        };
        seriesValue.push(seriesDataVal);
    }
    buildChart('detailTop', "车顶强度（越高越好）", legendData, arrayCar, seriesValue);
}

function initDataRoadUser() {
    let legendData = ['行人保护'];
    let arrayCar = [];
    let seriesValue = [];
    let arrayScore = [];

    function addData(car, score) {
        arrayCar.push(car);
        arrayScore.push(score);
    }

    addData('东风AX7', 10.820);
    addData('传祺GS7', 14.955);
    addData('起亚智跑', 15.500);
    addData('众泰T600', 16.027);
    addData('现代菲斯塔', 16.991);
    addData('宝骏510', 17.632);
    addData('奇瑞艾瑞泽5', 17.951);
    addData('奔驰C200', 18.190);
    addData('绅宝D50', 18.233);
    addData('江淮瑞风S3', 18.446);
    addData('现代领动', 18.645);
    addData('大众途观L', 18.736);
    addData('别克GL8', 19.445);
    addData('比亚迪唐', 19.879);
    addData('本田思域', 20.081);
    addData('领克01', 20.311);
    addData('大众迈腾', 20.347);
    addData('魏派VV5', 20.415);
    addData('日产西玛', 20.926);
    addData('日产天籁', 20.930);
    addData('雷诺科雷傲', 20.965);
    addData('哈弗F5', 21.000);
    addData('宝马318i', 21.000);
    addData('比亚迪宋MAX', 21.393);
    addData('斯柯达柯迪亚克', 21.411);
    addData('吉利星越', 21.488);
    addData('福特福克斯', 21.557);
    addData('丰田亚洲龙', 21.779);
    addData('三菱欧蓝德', 22.093);
    addData('凯迪拉克XT4', 22.266);
    addData('沃尔沃XC60', 23.036);
    addData('本田雅阁', 23.150);
    addData('丰田雷凌', 23.182);
    addData('丰田凯美瑞', 23.802);
    addData('别克昂科威', 24.023);
    addData('丰田奕泽', 24.200);
    addData('本田凌派', 26.488);

    for (let i = 0; i < legendData.length; i++) {
        let seriesDataVal = null;
        seriesDataVal = {
            barWidth: 10,//柱状条宽度
            type: 'bar',
            itemStyle: {
                normal: {
                    show: true,//鼠标悬停显示label
                    barBorderRadius: [10, 10, 10, 10],//柱形图圆角，初始化效果
                    color: function (params) {
                        if (params.value >= 19.5) return "#4CAF50"; // 30x65%
                        else if (params.value >= 15) return "#FFEB3B"; // 30x50%
                        else if (params.value >= 12) return "#FF9800"; // 30x40%
                        else return "#f44336";
                    }
                }
            },
            label: {
                normal: {
                    show: true, //显示数据
                    position: 'right'//显示位置 'top/right/left/insideLeft/insideRight/insideTop/insideBottom'
                }
            },
            data: arrayScore
        };
        seriesValue.push(seriesDataVal);
    }
    buildChart('detailRoadUser', "行人保护（越高越好）", legendData, arrayCar, seriesValue);
}

//生成Echarts图形
function buildChart(chartId, title, legendData, arrayCar, seriesValue) {
    var chart = document.getElementById(chartId);
    var echart = echarts.init(chart);
    var option = {
        title: {
            text: title,//正标题
            x: "center", //标题水平方向位置
            y: "0", //标题竖直方向位置
            textStyle: {
                fontSize: 18,
                fontWeight: 'bold',//'normal',
                color: '#DDDDDD'
            }
        },
        tooltip: { // 弹窗组件
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'//阴影，若需要为直线，则值为'line';'shadow'
            }
        },
        toolbox: {
            show: true,
            feature: {
                saveAsImage: {show: true},
                // magicType:{type: ['bar', 'line']} // 动态类型切换
                // dataView: {show: true}, // 数据视图
                // restore: {show: true}, // 重置
                // dataZoom: {show: true}, // 数据缩放视图
            }
        },
        legend: {
            x: 'left',
            y: 'top',//图例说明文字设置
            padding: [15, 0, 0, 10],
        },
        grid: {
            left: '3%', right: '4%', bottom: '5%', top: '5%', containLabel: true
        },
        yAxis: [{
            min: 0,
            type: 'category', //纵向柱状图，若需要为横向，则此处值为'value'， 下面 yAxis 的type值为'category'
            data: arrayCar,
            axisLabel: {
                color: '#DDDDDD' // 刻度线标签颜色
            },
            axisLine: {
                lineStyle: {
                    color: '#DDDDDD' // 坐标轴颜色
                }
            }
        }],
        xAxis: [{
            min: 0,
            type: 'value',
            splitArea: {show: false},
            axisLabel: {
                color: '#DDDDDD' // 刻度线标签颜色
            },
            axisLine: {
                lineStyle: {
                    color: '#DDDDDD' // 坐标轴颜色
                }
            }
        }],
        label: {
            normal: { //显示bar数据
                show: true,
                position: 'top'
            }
        },
        series: seriesValue,
        backgroundColor: '#2b3942'
    };

    echart.setOption(option);
}

$(function () {
    initDataFront();
    initDataSide();
    initDataTop();
    initDataRoadUser();
});

function getCarSafeDescriptionByWord(word) {
    let SHOW_NON_OFFICIAL = false; // 显示非官方数据
    switch (word) {
        case 'A': // Good
            return "<span class=\"grade green-bg\">G 优秀</span>";
        case 'A*': // Good
            return SHOW_NON_OFFICIAL ? "<span class=\"grade green-bg not-official\">G 优秀*</span>" : "<span class=\"grade grey-bg\"></span>";
        case 'B': // Adequate
            return "<span class=\"grade yellow-bg\">A 良好</span>";
        case 'B*': // Adequate
            return SHOW_NON_OFFICIAL ? "<span class=\"grade yellow-bg not-official\">A 良好*</span>" : "<span class=\"grade grey-bg\"></span>";
        case 'C': // Marginal
            return "<span class=\"grade orange-bg\">M 一般</span>";
        case 'C*': // Marginal
            return SHOW_NON_OFFICIAL ? "<span class=\"grade orange-bg not-official\">M 一般*</span>" : "<span class=\"grade grey-bg\"></span>";
        case 'D': // Poor
            return "<span class=\"grade red-bg\">P 较差</span>";
        case 'D*': // Poor
            return SHOW_NON_OFFICIAL ? "<span class=\"grade red-bg not-official\">P 较差*</span>" : "<span class=\"grade grey-bg\"></span>";
        case '-': // None
            return "<span class=\"grade grey-bg\">未配置</span>";
        case 'T': // T0D0
            return "<span class=\"grade grey-bg\">...</span>";
        default:
            return "<span class=\"grade grey-bg\">" + word + "</span>";
    }
}

function getTopDescription(top) {
    if (top >= 4.0) {
        return getCarSafeDescriptionByWord('A');
    } else if (top >= 3.25) {
        return getCarSafeDescriptionByWord('B');
    } else if (top >= 2.50) {
        return getCarSafeDescriptionByWord('C');
    } else
        return getCarSafeDescriptionByWord('D');
}

function getFrontDescription(front) {
    if (front < 4) {
        return getCarSafeDescriptionByWord('A');
    } else if (front < 10) {
        return getCarSafeDescriptionByWord('B');
    } else if (front < 20) {
        return getCarSafeDescriptionByWord('C');
    } else
        return getCarSafeDescriptionByWord('D');
}

function getSideDescription(side) {
    if (side < 7) return getCarSafeDescriptionByWord('A');
    else if (side < 21) return getCarSafeDescriptionByWord('B');
    else if (side < 33) return getCarSafeDescriptionByWord('C');
    else return getCarSafeDescriptionByWord('D');
}

$("#table-carsafe-list").bootgrid({
    rowCount: -1, // AZ: -1 mains show all
    css: {
        icon: 'table-bootgrid__icon zmdi',
        iconSearch: 'zmdi-search',
        iconColumns: 'zmdi-view-column',
        iconDown: 'zmdi-sort-amount-desc',
        iconRefresh: 'zmdi-refresh',
        iconUp: 'zmdi-sort-amount-asc',
        dropDownMenu: 'dropdown form-group--select',
        search: 'table-bootgrid__search',
        actions: 'table-bootgrid__actions',
        header: 'table-bootgrid__header',
        footer: 'table-bootgrid__footer',
        dropDownItem: 'table-bootgrid__label',
        table: 'table table-bootgrid',
        pagination: 'pagination table-bootgrid__pagination'
    },
    templates: {
        actionDropDown: "<span class=\"{{css.dropDownMenu}}\">" + "<a href='' data-toggle=\"dropdown\">{{ctx.content}}</a><ul class=\"{{css.dropDownMenuItems}}\" role=\"menu\"></ul></span>",
        search: "", // "<div class=\"{{css.search}} form-group\"><span class=\"{{css.icon}} {{css.iconSearch}}\"></span><input type=\"text\" class=\"{{css.searchField}}\" placeholder=\"{{lbl.search}}\" /><i class='form-group__bar'></i></div>",
        header: "", // "<div id=\"{{ctx.id}}\" class=\"{{css.header}}\"><p class=\"{{css.search}}\"></p><p class=\"{{css.actions}}\"></p></div>",
        actionDropDownCheckboxItem: "<li><div class='tabe-bootgrid__checkbox checkbox checkbox--dark'><label class=\"{{css.dropDownItem}}\"><input name=\"{{ctx.name}}\" type=\"checkbox\" value=\"1\" class=\"{{css.dropDownItemCheckbox}}\" {{ctx.checked}} /> {{ctx.label}}<i class='input-helper'></i></label></div></li>",
        //footer: "" //"<div id=\"{{ctx.id}}\" class=\"{{css.footer}}\"><div class=\"row\"><div class=\"col-sm-6\"><p class=\"{{css.pagination}}\"></p></div><div class=\"col-sm-6 table-bootgrid__showing hidden-xs\"><p class=\"{{css.infos}}\"></p></div></div></div>"
        footer: "<div id='watermark' align='center' class='watermark' style='display: none'>" +
            "<span class='line-left'></span>" +
            "<span class='text'>zhoumushui.com/car</span>" +
            "<span class='line-right'></span>" +
            "</div>"

    },
    formatters: {
        "make": function (column, row) {
            return getLogoByMake(row.make, 1) + "<span class='car-make'>" + row.make + "</span>"/* + getCountryByMake(row.make) */;
        },
        "model": function (column, row) {
            return "<span class='car-model'>" + row.model + "</span>";
        },
        "year": function (column, row) {
            return "<span class='car-year'>" + row.year + "</span>";
        },
        "price": function (column, row) {
            return "<span class='car-price'>" + row.price + "</span>";
        },
        "front_offset": function (column, row) {
            return "<a title='正面偏置'>" + getFrontDescription(row.front_offset) + "</a>";
        },
        "side": function (column, row) {
            return "<a title='侧面碰撞'>" + getSideDescription(row.side) + "</a>";
        },
        "top": function (column, row) {
            return "<a title='车顶强度'>" + getTopDescription(row.top) + "</a>";
        },
        "seat": function (column, row) {
            return "<a title='座椅头枕'>" + getCarSafeDescriptionByWord(row.seat) + "</a>";
        },
        "assist": function (column, row) {
            return "<a title='辅助安全'>" + getCarSafeDescriptionByWord(row.assist) + "</a>";
        },
        "road_user": function (column, row) {
            return "<a title='行人保护'>" + getCarSafeDescriptionByWord(row.road_user) + "</a>";
        },
        "fix": function (column, row) {
            return "<a title='耐撞维修'>" + getCarSafeDescriptionByWord(row.fix) + "</a>";
        },
        "link": function (column, row) {
            if (row.link) {
                let linkPrefix = 'http://ciasi.org.cn/home/safety/pageone/id/';
                return "<span style='font-size: 15px' >" +
                    "<a target='_blank' href=\"" + linkPrefix + row.link + ".html\">"
                    + "<i class=\"btn-detail-link zmdi zmdi-link\"></i>"
                    + "</a>" +
                    "</span>";
            } else {
                return "<i class=\"btn-detail-nolink zmdi zmdi-more\"></i>";
            }
        }
    }
});

$("#table-carsafe-list-todo").bootgrid({
    rowCount: -1, // AZ: -1 mains show all
    css: {
        icon: 'table-bootgrid__icon zmdi',
        iconSearch: 'zmdi-search',
        iconColumns: 'zmdi-view-column',
        iconDown: 'zmdi-sort-amount-desc',
        iconRefresh: 'zmdi-refresh',
        iconUp: 'zmdi-sort-amount-asc',
        dropDownMenu: 'dropdown form-group--select',
        search: 'table-bootgrid__search',
        actions: 'table-bootgrid__actions',
        header: 'table-bootgrid__header',
        footer: 'table-bootgrid__footer',
        dropDownItem: 'table-bootgrid__label',
        table: 'table table-bootgrid',
        pagination: 'pagination table-bootgrid__pagination'
    },
    templates: {
        actionDropDown: "<span class=\"{{css.dropDownMenu}}\">" + "<a href='' data-toggle=\"dropdown\">{{ctx.content}}</a><ul class=\"{{css.dropDownMenuItems}}\" role=\"menu\"></ul></span>",
        search: "", // "<div class=\"{{css.search}} form-group\"><span class=\"{{css.icon}} {{css.iconSearch}}\"></span><input type=\"text\" class=\"{{css.searchField}}\" placeholder=\"{{lbl.search}}\" /><i class='form-group__bar'></i></div>",
        header: "", // "<div id=\"{{ctx.id}}\" class=\"{{css.header}}\"><p class=\"{{css.search}}\"></p><p class=\"{{css.actions}}\"></p></div>",
        actionDropDownCheckboxItem: "<li><div class='tabe-bootgrid__checkbox checkbox checkbox--dark'><label class=\"{{css.dropDownItem}}\"><input name=\"{{ctx.name}}\" type=\"checkbox\" value=\"1\" class=\"{{css.dropDownItemCheckbox}}\" {{ctx.checked}} /> {{ctx.label}}<i class='input-helper'></i></label></div></li>",
        footer: "" // "<div id=\"{{ctx.id}}\" class=\"{{css.footer}}\"><div class=\"row\"><div class=\"col-sm-6\"><p class=\"{{css.pagination}}\"></p></div><div class=\"col-sm-6 table-bootgrid__showing hidden-xs\"><p class=\"{{css.infos}}\"></p></div></div></div>"
    },
    formatters: {
        "make": function (column, row) {
            return getLogoByMake(row.make, 1) + "<span class='car-make'>" + row.make + "</span>"/* + getCountryByMake(row.make) */;
        },
        "model": function (column, row) {
            return "<span class='car-model'>" + row.model + "</span>";
        },
        "year": function (column, row) {
            return "<span class='car-year'>" + row.year + "</span>";
        },
        "test_time": function (column, row) {
            return "20" + row.test_time.replace('A', ' 第一批').replace('B', ' 第二批');
        }
    }
});

$('#btnSaveImage').click(function (e) {
    document.getElementById("btnSaveImage").style.display = "none";
    document.getElementById("watermark").style.display = "";
    html2canvas(document.getElementById("content")).then(function (canvas) {
        let contentW = canvas.width;
        let contentH = canvas.height;
        let date = new Date();
        let year = date.getFullYear();
        let month = (date.getMonth() + 1);
        let day = date.getDate();
        if (month < 10)
            month = "0" + month;
        if (day < 10)
            day = "0" + day;
        let fileName = "中保研_" + year + month + day + ".png";
        Canvas2Image.saveAsImageToName(canvas, contentW, contentH, 'png', fileName, 10); // jpeg
    });
    document.getElementById("btnSaveImage").style.display = "";
    document.getElementById("watermark").style.display = "none";
});