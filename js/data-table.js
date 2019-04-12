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

// 品牌
function getLogoByMake(make) {
    if (make.indexOf("丰田") != -1) {
        return "<img class=\"car-logo\" src=\"../../img/car/Car_Toyota.png\">";
    } else if (make.indexOf("雷克萨斯") != -1) {
        return "<img class=\"car-logo\" src=\"../../img/car/Car_Lexus.png\">";
    } else if (make.indexOf("斯巴鲁") != -1) {
        return "<img class=\"car-logo\" src=\"../../img/car/Car_Subaru.png\">";
    } else if (make.indexOf("本田") != -1) {
        return "<img class=\"car-logo\" src=\"../../img/car/Car_Honda.png\">";
    } else if (make.indexOf("日产") != -1) {
        return "<img class=\"car-logo\" src=\"../../img/car/Car_NISSAN.png\">";
    } else if (make.indexOf("英菲尼迪") != -1) {
        return "<img class=\"car-logo\" src=\"../../img/car/Car_Infiniti.png\">";
    } else if (make.indexOf("马自达") != -1) {
        return "<img class=\"car-logo\" src=\"../../img/car/Car_Mazda.png\">";
    } else if (make.indexOf("大众") != -1) {
        return "<img class=\"car-logo\" src=\"../../img/car/Car_Volkswagen.png\">";
    } else if (make.indexOf("斯柯达") != -1) {
        return "<img class=\"car-logo\" src=\"../../img/car/Car_Skoda.png\">";
    } else if (make.indexOf("奥迪") != -1) {
        return "<img class=\"car-logo\" src=\"../../img/car/Car_Audi.png\">";
    } else if (make.indexOf("宝马") != -1) {
        return "<img class=\"car-logo\" src=\"../../img/car/Car_BMW.png\">";
    } else if (make.indexOf("奔驰") != -1) {
        return "<img class=\"car-logo\" src=\"../../img/car/Car_Benz.png\">";
    } else if (make.indexOf("现代") != -1) {
        return "<img class=\"car-logo\" src=\"../../img/car/Car_Hyundai.png\">";
    } else if (make.indexOf("起亚") != -1) {
        return "<img class=\"car-logo\" src=\"../../img/car/Car_KIA.png\">";
    } else if (make.indexOf("特斯拉") != -1) {
        return "<img class=\"car-logo\" src=\"../../img/car/Car_Tesla.png\">";
    } else if (make.indexOf("别克") != -1) {
        return "<img class=\"car-logo\" src=\"../../img/car/Car_Buick.png\">";
    } else if (make.indexOf("福特") != -1) {
        return "<img class=\"car-logo\" src=\"../../img/car/Car_Ford.png\">";
    } else if (make.indexOf("雪佛兰") != -1) {
        return "<img class=\"car-logo\" src=\"../../img/car/Car_Chevrolet.png\">";
    } else if (make.indexOf("道奇") != -1) {
        return "<img class=\"car-logo\" src=\"../../img/car/Car_Dodge.png\">";
    } else if (make.indexOf("雷诺") != -1) {
        return "<img class=\"car-logo\" src=\"../../img/car/Car_RENAULT.png\">";
    } else if (make.indexOf("浙江豪情") != -1) {
        return "<img class=\"car-logo\" src=\"../../img/car/Car_LynkCo.png\">";
    } else if (make.indexOf("传祺") != -1) {
        return "<img class=\"car-logo\" src=\"../../img/car/Car_Trumpchi.png\">";
    } else if (make.indexOf("奇瑞") != -1) {
        return "<img class=\"car-logo\" src=\"../../img/car/Car_Chery.png\">";
    } else if (make.indexOf("魏派") != -1) {
        return "<img class=\"car-logo\" src=\"../../img/car/Car_WEY.png\">";
    } else if (make.indexOf("江淮") != -1) {
        return "<img class=\"car-logo\" src=\"../../img/car/Car_JAC.png\">";
    } else if (make.indexOf("比亚迪") != -1) {
        return "<img class=\"car-logo\" src=\"../../img/car/Car_BYD.png\">";
    } else if (make.indexOf("宝骏") != -1) {
        return "<img class=\"car-logo\" src=\"../../img/car/Car_BaoJun.png\">";
    } else if (make.indexOf("众泰") != -1) {
        return "<img class=\"car-logo\" src=\"../../img/car/Car_Zotye.png\">";
    } else {
        return "";
    }
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