'use strict';

$(document).ready(function () {
    //Basic Example
    $("#data-table-basic").bootgrid({
        //Override default icon classes
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
        //Override default module markups
        templates: {
            actionDropDown: "<span class=\"{{css.dropDownMenu}}\">" + "<a href='' data-toggle=\"dropdown\">{{ctx.content}}</a><ul class=\"{{css.dropDownMenuItems}}\" role=\"menu\"></ul></span>",
            search: "<div class=\"{{css.search}} form-group\"><span class=\"{{css.icon}} {{css.iconSearch}}\"></span><input type=\"text\" class=\"{{css.searchField}}\" placeholder=\"{{lbl.search}}\" /><i class='form-group__bar'></i></div>",
            header: "<div id=\"{{ctx.id}}\" class=\"{{css.header}}\"><p class=\"{{css.search}}\"></p><p class=\"{{css.actions}}\"></p></div>",
            actionDropDownCheckboxItem: "<li><div class='tabe-bootgrid__checkbox checkbox checkbox--dark'><label class=\"{{css.dropDownItem}}\"><input name=\"{{ctx.name}}\" type=\"checkbox\" value=\"1\" class=\"{{css.dropDownItemCheckbox}}\" {{ctx.checked}} /> {{ctx.label}}<i class='input-helper'></i></label></div></li>",
            footer: "<div id=\"{{ctx.id}}\" class=\"{{css.footer}}\"><div class=\"row\"><div class=\"col-sm-6\"><p class=\"{{css.pagination}}\"></p></div><div class=\"col-sm-6 table-bootgrid__showing hidden-xs\"><p class=\"{{css.infos}}\"></p></div></div></div>"
        }
    });

    //Selection
    $("#data-table-selection").bootgrid({
        //Override default icon classes
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
        //Override default module markups
        templates: {
            actionDropDown: "<span class=\"{{css.dropDownMenu}}\">" + "<a href='' data-toggle=\"dropdown\">{{ctx.content}}</a><ul class=\"{{css.dropDownMenuItems}}\" role=\"menu\"></ul></span>",
            search: "<div class=\"{{css.search}} form-group\"><span class=\"{{css.icon}} {{css.iconSearch}}\"></span><input type=\"text\" class=\"{{css.searchField}}\" placeholder=\"{{lbl.search}}\" /><i class='form-group__bar'></i></div>",
            header: "<div id=\"{{ctx.id}}\" class=\"{{css.header}}\"><p class=\"{{css.search}}\"></p><p class=\"{{css.actions}}\"></p></div>",
            actionDropDownCheckboxItem: "<li><div class='tabe-bootgrid__checkbox checkbox checkbox--dark'><label class=\"{{css.dropDownItem}}\"><input name=\"{{ctx.name}}\" type=\"checkbox\" value=\"1\" class=\"{{css.dropDownItemCheckbox}}\" {{ctx.checked}} /> {{ctx.label}}<i class='input-helper'></i></label></div></li>",
            footer: "<div id=\"{{ctx.id}}\" class=\"{{css.footer}}\"><div class=\"row\"><div class=\"col-sm-6\"><p class=\"{{css.pagination}}\"></p></div><div class=\"col-sm-6 table-bootgrid__showing hidden-xs\"><p class=\"{{css.infos}}\"></p></div></div></div>",
            select: "<div class='checkbox'><label><input name=\"select\" type=\"{{ctx.type}}\" class=\"{{css.selectBox}}\" value=\"{{ctx.value}}\" {{ctx.checked}} /><i class='input-helper'></i></label></div>"
        },
        selection: true,
        multiSelect: true,
        rowSelect: true,
        keepSelection: true
    });

    //Command Buttons
    $("#data-table-command").bootgrid({
        css: {  //Override default icon classes
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
        templates: {  //Override default module markups
            actionDropDown: "<span class=\"{{css.dropDownMenu}}\">" + "<a href='' data-toggle=\"dropdown\">{{ctx.content}}</a><ul class=\"{{css.dropDownMenuItems}}\" role=\"menu\"></ul></span>",
            search: "<div class=\"{{css.search}} form-group\"><span class=\"{{css.icon}} {{css.iconSearch}}\"></span><input type=\"text\" class=\"{{css.searchField}}\" placeholder=\"{{lbl.search}}\" /><i class='form-group__bar'></i></div>",
            header: "<div id=\"{{ctx.id}}\" class=\"{{css.header}}\"><p class=\"{{css.search}}\"></p><p class=\"{{css.actions}}\"></p></div>",
            actionDropDownCheckboxItem: "<li><div class='tabe-bootgrid__checkbox checkbox checkbox--dark'><label class=\"{{css.dropDownItem}}\"><input name=\"{{ctx.name}}\" type=\"checkbox\" value=\"1\" class=\"{{css.dropDownItemCheckbox}}\" {{ctx.checked}} /> {{ctx.label}}<i class='input-helper'></i></label></div></li>",
            footer: "<div id=\"{{ctx.id}}\" class=\"{{css.footer}}\"><div class=\"row\"><div class=\"col-sm-6\"><p class=\"{{css.pagination}}\"></p></div><div class=\"col-sm-6 table-bootgrid__showing hidden-xs\"><p class=\"{{css.infos}}\"></p></div></div></div>"
        },
        formatters: {
            "commands": function (column, row) {
                return "<button type=\"button\" class=\"btn btn-default btn-sm\" data-row-id=\"" + row.id + "\">Edit</button> " +
                    "<button type=\"button\" class=\"btn btn-default btn-sm\" data-row-id=\"" + row.id + "\">Delete</button>";
            }
        }
    });

});

function getClubLogo(club, depth) {

    let imgPath = "";
    switch (depth) {
        case 0:
            imgPath = "resource/img/football_club/";
            break;
        case 1:
            imgPath = "../resource/img/football_club/";
            break;
        case 2:
        default:
            imgPath = "../../resource/img/football_club/";
            break;
    }
    let clubName = "";
    let clubTitle = "";

    switch (club) {
        // 西甲
        case '巴萨':
        case '巴塞罗那':
            clubName = "Barcelona";
            clubTitle = "巴塞罗那";
            break;
        case '皇马':
        case '皇家马德里':
            clubName = "RealMadrid";
            clubTitle = "皇家马德里";
            break;
        case '马竞':
        case '马德里竞技':
            clubName = "Atletico";
            clubTitle = "马德里竞技";
            break;
        case '瓦伦西亚':
            clubName = "Valencia";
            clubTitle = "瓦伦西亚";
            break;
        case '毕尔巴鄂竞技':
            clubName = "Athletic";
            clubTitle = "毕尔巴鄂竞技";
            break;
        case '塞维利亚':
            clubName = "Sevilla";
            clubTitle = "塞维利亚";
            break;
        case '皇家社会':
            clubName = "RealSociedad";
            clubTitle = "皇家社会";
            break;
        case '皇家贝蒂斯':
            clubName = "RealBetis";
            clubTitle = "皇家贝蒂斯";
            break;
        case '比利亚雷亚尔':
            clubName = "Villarreal";
            clubTitle = "比利亚雷亚尔";
            break;
        case '拉科鲁尼亚':
            clubName = "LaCoruna";
            clubTitle = "拉科鲁尼亚";
            break;
        case '格拉纳达':
            clubName = "Granada";
            clubTitle = "格拉纳达";
            break;
        case '希洪竞技':
            clubName = "Gijon";
            clubTitle = "希洪竞技";
            break;
        case '塞尔塔':
            clubName = "Celta";
            clubTitle = "塞尔塔";
            break;
        case '巴拉多利德':
            clubName = "Valladolid";
            clubTitle = "巴拉多利德";
            break;
        case '马略卡':
            clubName = "Mallorca";
            clubTitle = "马略卡";
            break;
        case '埃尔切':
            clubName = "Elche";
            clubTitle = "埃尔切";
            break;
        case '桑坦德竞技':
            clubName = "Santander";
            clubTitle = "桑坦德";
            break;
        case '奥维多':
            clubName = "RealOviedo";
            clubTitle = "奥维多";
            break;
        case '特内里费':
            clubName = "Tenerife";
            clubTitle = "特内里费";
            break;
        case '萨拉戈萨':
            clubName = "Zaragoza";
            clubTitle = "萨拉戈萨";
            break;

        // 英超
        case '利物浦':
            clubName = "Liverpool";
            clubTitle = "利物浦";
            break;
        case '曼联':
            clubName = "ManchesterUnited";
            clubTitle = "曼联";
            break;
        case '曼城':
            clubName = "ManchesterCity";
            clubTitle = "曼城";
            break;
        case '阿森纳':
            clubName = "Arsenal";
            clubTitle = "阿森纳";
            break;
        case '热刺':
            clubName = "Hotspur";
            clubTitle = "热刺";
            break;
        case '切尔西':
            clubName = "Chelsea";
            clubTitle = "切尔西";
            break;
        case '纽卡斯尔联':
            clubName = "NewcastleUnited";
            clubTitle = "纽卡斯尔联";
            break;
        case '桑德兰':
            clubName = "Sunderland";
            clubTitle = "桑德兰";
            break;
        case '利兹联':
            clubName = "LeedsUnited";
            clubTitle = "利兹联";
            break;
        case '布莱克本':
            clubName = "Blackburn";
            clubTitle = "布莱克本";
            break;
        case '考文垂':
            clubName = "Coventry";
            clubTitle = "考文垂";
            break;

        // 意甲
        case '尤文':
        case '尤文图斯':
            clubName = "Juventus";
            clubTitle = "尤文图斯";
            break;
        case '国米':
        case '国际米兰':
            clubName = "Inter";
            clubTitle = "国际米兰";
            break;
        case 'AC米兰':
            clubName = "ACMilan";
            clubTitle = "AC米兰";
            break;
        case '罗马':
            clubName = "Rome";
            clubTitle = "罗马";
            break;
        case '拉齐奥':
            clubName = "Lazio";
            clubTitle = "拉齐奥";
            break;
        case '里昂':
            clubName = "Lyon";
            clubTitle = "里昂";
            break;
        case '那不勒斯':
            clubName = "Napoli";
            clubTitle = "那不勒斯";
            break;
        case '都灵':
            clubName = "Torino";
            clubTitle = "都灵";
            break;
        case '桑普多利亚':
            clubName = "Sampdoria";
            clubTitle = "桑普多利亚";
            break;
        case '乌迪内斯':
            clubName = "Udinese";
            clubTitle = "乌迪内斯";
            break;
        case '佛罗伦萨':
            clubName = "Fiorentina";
            clubTitle = "佛罗伦萨";
            break;

        // 德甲
        case '拜仁':
        case '拜仁慕尼黑':
            clubName = "Bayern";
            clubTitle = "拜仁慕尼黑";
            break;
        case '多特':
        case '多特蒙德':
            clubName = "BVB";
            clubTitle = "多特蒙德";
            break;
        case '沙尔克04':
            clubName = "Schalke04";
            clubTitle = "沙尔克04";
            break;
        case '法兰克福':
            clubName = "Frankfurt";
            clubTitle = "法兰克福";
            break;
        case '勒沃库森':
            clubName = "Leverkusen";
            clubTitle = "勒沃库森";
            break;
        case '沃尔夫斯堡':
            clubName = "Wolfsburg";
            clubTitle = "沃尔夫斯堡";
            break;
        case '不莱梅':
        case '云达不莱梅':
            clubName = "Bremen";
            clubTitle = "云达不莱梅";
            break;
        case '波鸿':
            clubName = "Bochum";
            clubTitle = "波鸿";
            break;

        // 法甲
        case '巴黎':
        case '巴黎圣日耳曼':
            clubName = "PSG";
            clubTitle = "巴黎圣日耳曼";
            break;
        case '蒙彼利埃':
            clubName = "Montpellier";
            clubTitle = "蒙彼利埃";
            break;
        case '里尔':
            clubName = "Lille";
            clubTitle = "";
            break;
        case '马赛':
            clubName = "Marseille";
            clubTitle = "马赛";
            break;
        case '图卢兹':
            clubName = "Toulouse";
            clubTitle = "图卢兹";
            break;

        // 荷甲
        case 'Ajax':
        case '阿贾克斯':
            clubName = "Ajax";
            clubTitle = "阿贾克斯";
            break;
        case 'PSV':
        case '埃因霍温':
            clubName = "PSV";
            clubTitle = "埃因霍温";
            break;
        case 'AZ':
        case "AZ'67":
        case '阿尔克马尔':
            clubName = "AZ";
            clubTitle = "阿尔克马尔";
            break;
        case 'Feyenoord':
        case '费耶诺德':
            clubName = "Feyenoord";
            clubTitle = "费耶诺德";
            break;
        case 'Heerenveen':
        case 'SC Heerenveen':
        case '海伦芬':
            clubName = "Heerenveen";
            clubTitle = "海伦芬";
            break;
        case 'NAC':
        case 'N.A.C':
        case '布雷达':
            clubName = "NAC";
            clubTitle = "布雷达";
            break;
        case 'Vitesse':
        case '维特斯':
            clubName = "Vitesse";
            clubTitle = "维特斯";
            break;
        case 'Twente':
        case '特温特':
            clubName = "Twente";
            clubTitle = "特温特";
            break;
        case 'MVV':
        case '马斯特里赫特':
            clubName = "MVV";
            clubTitle = "马斯特里赫特";
            break;
        case 'NEC':
        case '奈梅亨':
            clubName = "NEC";
            clubTitle = "奈梅亨";
            break;
        case 'FC Volendam':
        case '沃伦达姆':
            clubName = "Volendam";
            clubTitle = "沃伦达姆";
            break;

        default:
            clubName = "Default";
            clubTitle = club;
            break;
    }


    return "<img class='club-logo' title='" + clubTitle + "' src='" + imgPath + clubName + ".png'>";
}

// 品牌
function getLogoByMake(make, depth, size) {
    let imgPath = "";
    switch (depth) {
        case 0:
            imgPath = "resource/img/car/";
            break;
        case 1:
            imgPath = "../resource/img/car/";
            break;
        case 2:
        default:
            imgPath = "../../resource/img/car/";
            break;
    }

    switch (size) {
        case 1: // W:24px H:16px; Small
            imgPath = imgPath + "24x16/";
            break;
        case 0: // W:30px H:20px; Normal
        default:
            imgPath = imgPath + "30x20/";
            break;
    }

    let carName = "";
    if (make.indexOf("丰田") != -1 || make.indexOf("Toyota") != -1) {
        carName = "Toyota";
    } else if (make.indexOf("雷克萨斯") != -1 || make.indexOf("Lexus") != -1) {
        carName = "Lexus";
    } else if (make.indexOf("斯巴鲁") != -1 || make.indexOf("Subaru") != -1) {
        carName = "Subaru";
    } else if (make.indexOf("本田") != -1 || make.indexOf("Honda") != -1) {
        carName = "Honda";
    } else if (make.indexOf("日产") != -1 || make.indexOf("Nissan") != -1) {
        carName = "NISSAN";
    } else if (make.indexOf("英菲尼迪") != -1 || make.indexOf("Infiniti") != -1) {
        carName = "Infiniti";
    } else if (make.indexOf("三菱") != -1 || make.indexOf("Mitsubishi") != -1) {
        carName = "Mitsubishi";
    } else if (make.indexOf("马自达") != -1 || make.indexOf("Mazda") != -1) {
        carName = "Mazda";
    } else if (make.indexOf("法拉利") != -1 || make.indexOf("Ferrari") != -1) {
        carName = "Ferrari";
    } else if (make.indexOf("捷豹") != -1 || make.indexOf("Jaguar") != -1) {
        carName = "Jaguar";
    } else if (make.indexOf("斯柯达") != -1 || make.indexOf("Skoda") != -1) {
        carName = "Skoda";
    } else if (make.indexOf("宾利") != -1 || make.indexOf("Bentley") != -1) {
        carName = "Bentley";
    } else if (make.indexOf("保时捷") != -1 || make.indexOf("Porsche") != -1) {
        carName = "Porsche";
    } else if (make.indexOf("大众") != -1 || make.indexOf("Volkswagen") != -1) {
        carName = "Volkswagen";
    } else if (make.indexOf("奥迪") != -1 || make.indexOf("Audi") != -1) {
        carName = "Audi";
    } else if (make.indexOf("宝马") != -1 || make.indexOf("BMW") != -1) {
        carName = "BMW";
    } else if (make.indexOf("奔驰") != -1 || make.indexOf("Benz") != -1) {
        carName = "Benz";
    } else if (make.indexOf("现代") != -1 || make.indexOf("Hyundai") != -1) {
        carName = "Hyundai";
    } else if (make.indexOf("起亚") != -1 || make.indexOf("KIA") != -1) {
        carName = "KIA";
    } else if (make.indexOf("特斯拉") != -1 || make.indexOf("Tesla") != -1) {
        carName = "Tesla";
    } else if (make.indexOf("别克") != -1 || make.indexOf("Buick") != -1) {
        carName = "Buick";
    } else if (make.indexOf("福特") != -1 || make.indexOf("Ford") != -1) {
        carName = "Ford";
    } else if (make.indexOf("雪佛兰") != -1 || make.indexOf("Chevrolet") != -1) {
        carName = "Chevrolet";
    } else if (make.indexOf("凯迪拉克") != -1 || make.indexOf("Cadillac") != -1) {
        carName = "Cadillac";
    } else if (make.indexOf("克莱斯勒") != -1 || make.indexOf("Chrysler") != -1) {
        carName = "Chrysler";
    } else if (make.indexOf("道奇") != -1 || make.indexOf("Dodge") != -1) {
        carName = "Dodge";
    } else if (make.indexOf("Alpine") != -1) {
        carName = "Alpine";
    } else if (make.indexOf("雷诺") != -1 || make.indexOf("Renault") != -1) {
        carName = "RENAULT";
    } else if (make.indexOf("标致") != -1 || make.indexOf("Peugeot") != -1) {
        carName = "Peugeot";
    } else if (make.indexOf("雪铁龙") != -1 || make.indexOf("Citroen") != -1) {
        carName = "Citroen";
    } else if (make.indexOf("蓝西亚") != -1 || make.indexOf("Lancia") != -1) {
        carName = "Lancia";
    } else if (make.indexOf("塔伯特") != -1 || make.indexOf("Talbot") != -1) {
        carName = "Talbot";
    } else if (make.indexOf("菲亚特") != -1 || make.indexOf("Fiat") != -1) {
        carName = "Fiat";
    } else if (make.indexOf("吉普") != -1 || make.indexOf("Jeep") != -1) {
        carName = "Jeep";
    } else if (make.indexOf("领克") != -1) {
        carName = "LynkCo";
    } else if (make.indexOf("沃尔沃") != -1 || make.indexOf("Volvo") != -1) {
        carName = "Volvo";
    } else if (make.indexOf("吉利") != -1 || make.indexOf("Geely") != -1) {
        carName = "Geely";
    } else if (make.indexOf("红旗") != -1) {
        carName = "HongQi";
    } else if (make.indexOf("传祺") != -1) {
        carName = "Trumpchi";
    } else if (make.indexOf("奇瑞") != -1) {
        carName = "Chery";
    } else if (make.indexOf("哈弗") != -1 || make.indexOf("HAVAL") != -1) {
        carName = "HAVAL";
    } else if (make.indexOf("魏派") != -1 || make.indexOf("WEY") != -1) {
        carName = "WEY";
    } else if (make.indexOf("江淮") != -1) {
        carName = "JAC";
    } else if (make.indexOf("比亚迪") != -1) {
        carName = "BYD";
    } else if (make.indexOf("宝骏") != -1) {
        carName = "BaoJun";
    } else if (make.indexOf("众泰") != -1) {
        carName = "Zotye";
    } else if (make.indexOf("北京汽车") != -1) {
        carName = "Baic";
    } else if (make.indexOf("东风") != -1) {
        carName = "DongFeng";
    } else if (make.indexOf("长安") != -1) {
        carName = "ChangAn";
    } else if (make.indexOf("奔腾") != -1) {
        carName = "BestTune";
    } else if (make.indexOf("小鹏") != -1) {
        carName = "XiaoPeng";
    } else if (make.indexOf("海马") != -1) {
        carName = "HaiMa";
    } else if (make.indexOf("荣威") != -1) {
        carName = "Roewe";
    } else {
        carName = "";
    }

    return "<img class='car-logo' src='" + imgPath + carName + ".png'>";
}


// 国家
function getCountryByMake(make, depth) {
    let imgPath = "";
    switch (depth) {
        case 0:
            imgPath = "resource/img/country/";
            break;
        case 1:
            imgPath = "../resource/img/country/";
            break;
        case 2:
        default:
            imgPath = "../../resource/img/country/";
            break;
    }
    let carCountry = "";

    if (make.indexOf("长城") != -1 ||
        make.indexOf("吉利") != -1 ||
        make.indexOf("浙江豪情") != -1 || // 领克
        make.indexOf("比亚迪") != -1 ||
        make.indexOf("奇瑞") != -1 ||
        make.indexOf("传祺") != -1 ||
        make.indexOf("众泰") != -1 ||
        make.indexOf("江淮") != -1 ||
        make.indexOf("五菱") != -1) {
        carCountry = "China";
    } else if (
        make.indexOf("丰田") != -1 ||
        make.indexOf("雷克萨斯") != -1 ||
        make.indexOf("斯巴鲁") != -1 ||
        make.indexOf("本田") != -1 ||
        make.indexOf("讴歌") != -1 ||
        make.indexOf("日产") != -1 ||
        make.indexOf("英菲尼迪") != -1 ||
        make.indexOf("马自达") != -1) {
        carCountry = "Japan";
    } else if (
        make.indexOf("大众") != -1 ||
        make.indexOf("奔驰") != -1 ||
        make.indexOf("宝马") != -1) {
        carCountry = "Germany";
    } else if (
        make.indexOf("现代") != -1 ||
        make.indexOf("起亚") != -1) {
        carCountry = "SouthKorea";
    } else if (make.indexOf("通用") != -1 ||
        make.indexOf("福特") != -1 ||
        make.indexOf("雪佛兰") != -1 ||
        make.indexOf("克莱斯勒") != -1) {
        carCountry = "America";
    } else if (make.indexOf("雷诺") != -1) {
        carCountry = "France";
    } else if (make.indexOf("捷豹") != -1) {
        carCountry = "England";
    } else if (make.indexOf("沃尔沃") != -1) {
        carCountry = "Sweden";
    } else {
        return "";
    }

    return "<img class='country-flag' src='" + imgPath + "Country_" + carCountry + ".png'>";
}