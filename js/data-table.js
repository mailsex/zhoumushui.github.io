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

function getClubLogo(club) {
    switch (club) {
        // 西甲
        case '巴萨':
        case '巴塞罗那':
            return "<img class=\"club-logo\" title='巴塞罗那' src=\"../../img/football_club/Barcelona.png\">";
        case '皇马':
        case '皇家马德里':
            return "<img class=\"club-logo\" title='皇家马德里' src=\"../../img/football_club/RealMadrid.png\">";
        case '马竞':
        case '马德里竞技':
            return "<img class=\"club-logo\" title='马德里竞技' src=\"../../img/football_club/Atletico.png\">";

        // 英超
        case '利物浦':
            return "<img class=\"club-logo\" title='利物浦' src=\"../../img/football_club/Liverpool.png\">";
        case '曼联':
            return "<img class=\"club-logo\" title='曼联' src=\"../../img/football_club/ManchesterUnited.png\">";
        case '曼城':
            return "<img class=\"club-logo\" title='曼城' src=\"../../img/football_club/ManchesterCity.png\">";
        case '阿森纳':
            return "<img class=\"club-logo\" title='阿森纳' src=\"../../img/football_club/Arsenal.png\">";
        case '热刺':
            return "<img class=\"club-logo\" title='热刺' src=\"../../img/football_club/Hotspur.png\">";
        case '切尔西':
            return "<img class=\"club-logo\" title='切尔西' src=\"../../img/football_club/Chelsea.png\">";

        // 意甲
        case '尤文':
        case '尤文图斯':
            return "<img class=\"club-logo\" title='尤文图斯' src=\"../../img/football_club/Juventus.png\">";
        case '国米':
        case '国际米兰':
            return "<img class=\"club-logo\" title='国际米兰' src=\"../../img/football_club/Inter.png\">";
        case 'AC米兰':
            return "<img class=\"club-logo\" title='AC米兰' src=\"../../img/football_club/ACMilan.png\">";
        case '罗马':
            return "<img class=\"club-logo\" title='罗马' src=\"../../img/football_club/Rome.png\">";
        case '拉齐奥':
            return "<img class=\"club-logo\" title='拉齐奥' src=\"../../img/football_club/Lazio.png\">";
        case '里昂':
            return "<img class=\"club-logo\" title='里昂' src=\"../../img/football_club/Lyon.png\">";
        case '那不勒斯':
            return "<img class=\"club-logo\" title='那不勒斯' src=\"../../img/football_club/Napoli.png\">";
        case '都灵':
            return "<img class=\"club-logo\" title='都灵' src=\"../../img/football_club/Torino.png\">";
        case '桑普多利亚':
            return "<img class=\"club-logo\" title='桑普多利亚' src=\"../../img/football_club/Sampdoria.png\">";
        case '乌迪内斯':
            return "<img class=\"club-logo\" title='乌迪内斯' src=\"../../img/football_club/Udinese.png\">";
        case '佛罗伦萨':
            return "<img class=\"club-logo\" title='佛罗伦萨' src=\"../../img/football_club/Fiorentina.png\">";

        // 德甲
        case '拜仁':
        case '拜仁慕尼黑':
            return "<img class=\"club-logo\" title='拜仁慕尼黑' src=\"../../img/football_club/Bayern.png\">";
        case '多特':
        case '多特蒙德':
            return "<img class=\"club-logo\" title='多特蒙德' src=\"../../img/football_club/BVB.png\">";
        case '沙尔克04':
            return "<img class=\"club-logo\" title='沙尔克04' src=\"../../img/football_club/Schalke04.png\">";
        case '法兰克福':
            return "<img class=\"club-logo\" title='法兰克福' src=\"../../img/football_club/Frankfurt.png\">";
        case '勒沃库森':
            return "<img class=\"club-logo\" title='勒沃库森' src=\"../../img/football_club/Leverkusen.png\">";
        case '沃尔夫斯堡':
            return "<img class=\"club-logo\" title='沃尔夫斯堡' src=\"../../img/football_club/Wolfsburg.png\">";
        case '不莱梅':
        case '云达不莱梅':
            return "<img class=\"club-logo\" title='云达不莱梅' src=\"../../img/football_club/Bremen.png\">";
        case '波鸿':
            return "<img class=\"club-logo\" title='波鸿' src=\"../../img/football_club/Bochum.png\">";

        // 法甲
        case '巴黎':
        case '巴黎圣日耳曼':
            return "<img class=\"club-logo\" title='巴黎圣日耳曼' src=\"../../img/football_club/PSG.png\">";
        case '蒙彼利埃':
            return "<img class=\"club-logo\" title='蒙彼利埃' src=\"../../img/football_club/Montpellier.png\">";
        case '里尔':
            return "<img class=\"club-logo\" title='里尔' src=\"../../img/football_club/Lille.png\">";
        case '马赛':
            return "<img class=\"club-logo\" title='马赛' src=\"../../img/football_club/Marseille.png\">";
        case '图卢兹':
            return "<img class=\"club-logo\" title='图卢兹' src=\"../../img/football_club/Toulouse.png\">";

        default:
            return "<img class=\"club-logo\" title='" + club + "' src=\"../../img/football_club/Default.png\">";
    }
}

// 品牌
function getLogoByMake(make, depth) {
    let imgPath = "";
    switch (depth) {
        case 0:
            imgPath = "img/car/";
            break;
        case 1:
            imgPath = "../img/car/";
            break;
        case 2:
        default:
            imgPath = "../../img/car/";
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
    } else if (make.indexOf("起亚") != -1) {
        carName = "KIA";
    } else if (make.indexOf("特斯拉") != -1) {
        carName = "Tesla";
    } else if (make.indexOf("别克") != -1) {
        carName = "Buick";
    } else if (make.indexOf("福特") != -1 || make.indexOf("Ford") != -1) {
        carName = "Ford";
    } else if (make.indexOf("雪佛兰") != -1) {
        carName = "Chevrolet";
    } else if (make.indexOf("凯迪拉克") != -1) {
        carName = "Cadillac";
    } else if (make.indexOf("道奇") != -1) {
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
    } else if (make.indexOf("沃尔沃") != -1) {
        carName = "Volvo";
    } else if (make.indexOf("吉利") != -1) {
        carName = "Geely";
    } else if (make.indexOf("红旗") != -1) {
        carName = "HongQi";
    } else if (make.indexOf("传祺") != -1) {
        carName = "Trumpchi";
    } else if (make.indexOf("奇瑞") != -1) {
        carName = "Chery";
    } else if (make.indexOf("哈弗") != -1) {
        carName = "HAVAL";
    } else if (make.indexOf("魏派") != -1) {
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

    return "<img class='car-logo' src='" + imgPath + "Car_" + carName + ".png'>";
}


// 国家
function getCountryByMake(make) {
    if (make.indexOf("长城") != -1 ||
        make.indexOf("吉利") != -1 ||
        make.indexOf("浙江豪情") != -1 || // 领克
        make.indexOf("比亚迪") != -1 ||
        make.indexOf("奇瑞") != -1 ||
        make.indexOf("传祺") != -1 ||
        make.indexOf("众泰") != -1 ||
        make.indexOf("江淮") != -1 ||
        make.indexOf("五菱") != -1) {
        return "<img class=\"country-flag\" src=\"../../img/country/Country_China.png\">";
    } else if (
        make.indexOf("丰田") != -1 ||
        make.indexOf("雷克萨斯") != -1 ||
        make.indexOf("斯巴鲁") != -1 ||
        make.indexOf("本田") != -1 ||
        make.indexOf("讴歌") != -1 ||
        make.indexOf("日产") != -1 ||
        make.indexOf("英菲尼迪") != -1 ||
        make.indexOf("马自达") != -1) {
        return "<img class=\"country-flag\" src=\"../../img/country/Country_Japan.png\">";
    } else if (
        make.indexOf("大众") != -1 ||
        make.indexOf("奔驰") != -1 ||
        make.indexOf("宝马") != -1) {
        return "<img class=\"country-flag\" src=\"../../img/country/Country_Germany.png\">";
    } else if (
        make.indexOf("现代") != -1 ||
        make.indexOf("起亚") != -1) {
        return "<img class=\"country-flag\" src=\"../../img/country/Country_SouthKorea.png\">";
    } else if (make.indexOf("通用") != -1 ||
        make.indexOf("福特") != -1 ||
        make.indexOf("雪佛兰") != -1 ||
        make.indexOf("克莱斯勒") != -1) {
        return "<img class=\"country-flag\" src=\"../../img/country/Country_America.png\">";
    } else if (make.indexOf("雷诺") != -1) {
        return "<img class=\"country-flag\" src=\"../../img/country/Country_France.png\">";
    } else if (make.indexOf("捷豹") != -1) {
        return "<img class=\"country-flag\" src=\"../../img/country/Country_England.png\">";
    } else if (make.indexOf("沃尔沃") != -1) {
        return "<img class=\"country-flag\" src=\"../../img/country/Country_Sweden.png\">";
    } else {
        return "";
    }
}