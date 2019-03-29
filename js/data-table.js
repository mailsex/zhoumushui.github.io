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
        },
        formatters: {
            "commands": function (column, row) {
                return "<button type=\"button\" class=\"btn btn-default btn-sm\" data-row-id=\"" + row.id + "\">Edit</button> " +
                    "<button type=\"button\" class=\"btn btn-default btn-sm\" data-row-id=\"" + row.id + "\">Delete</button>";
            }
        }
    });

    // AZ: for lists of essay page.
    $("#table-essay-title").bootgrid({
        ajax: false,
        //url: "json/essay.json", // AZ:Set true to use json data
        //post: function () {
        /* To accumulate custom parameter with the request object */
        /*
         return {
         id: "b0df282a-0d67-40e5-8558-c9e93b7befed"
         };
         */
        // },
        selection: false, // AZ:Show Select Icon
        multiSelect: true,
        rowSelect: true,
        keepSelection: true,
        rowCount: 50, // AZ: -1 mains show all
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
            search: "<div class=\"{{css.search}} form-group\"><span class=\"{{css.icon}} {{css.iconSearch}}\"></span><input type=\"text\" class=\"{{css.searchField}}\" placeholder=\"{{lbl.search}}\" /><i class='form-group__bar'></i></div>",
            header: "<div id=\"{{ctx.id}}\" class=\"{{css.header}}\"><p class=\"{{css.search}}\"></p><p class=\"{{css.actions}}\"></p></div>",
            actionDropDownCheckboxItem: "<li><div class='tabe-bootgrid__checkbox checkbox checkbox--dark'><label class=\"{{css.dropDownItem}}\"><input name=\"{{ctx.name}}\" type=\"checkbox\" value=\"1\" class=\"{{css.dropDownItemCheckbox}}\" {{ctx.checked}} /> {{ctx.label}}<i class='input-helper'></i></label></div></li>",
            footer: "<div id=\"{{ctx.id}}\" class=\"{{css.footer}}\"><div class=\"row\"><div class=\"col-sm-6\"><p class=\"{{css.pagination}}\"></p></div><div class=\"col-sm-6 table-bootgrid__showing hidden-xs\"><p class=\"{{css.infos}}\"></p></div></div></div>"
        },
        formatters: {
            "title": function (column, row) {
                return "<span style='font-size: 15px' >" +
                    "<a  href=\"essay\\" + row.id + "\">" + row.title + " </a>" +
                    "</span>";
            },
            "type": function (column, row) {
                switch (row.type) {
                    case 'ai':
                        return "<i class=\"essay-list-type zmdi zmdi-blur yellow\"></i>";
                    case 'android':
                        return "<i class=\"essay-list-type zmdi zmdi-android green\"></i>";
                    case 'apple':
                        return "<i class=\"essay-list-type zmdi zmdi-apple grey\"></i>";
                    case 'bike':
                        return "<i class=\"essay-list-type zmdi zmdi-bike orange\"></i>";
                    case 'car':
                        return "<i class=\"essay-list-type zmdi zmdi-car blue\"></i>";
                    case 'chip-green':
                        return "<i class=\"essay-list-type zmdi zmdi-memory green\"></i>";
                    case 'chip-red':
                        return "<i class=\"essay-list-type zmdi zmdi-memory red\"></i>";
                    case 'cloud':
                        return "<i class=\"essay-list-type zmdi zmdi-cloud\"></i>";
                    case 'css':
                        return "<i class=\"essay-list-type zmdi zmdi-language-css3 brown\"></i>";
                    case 'eat':
                        return "<i class=\"essay-list-type zmdi zmdi-local-pizza yellow\"></i>";
                    case 'eye':
                        return "<i class=\"essay-list-type zmdi zmdi-eye brown\"></i>";
                    case 'fit':
                        return "<i class=\"essay-list-type zmdi zmdi-run orange\"></i>";
                    case 'fun':
                        return "<i class=\"essay-list-type zmdi zmdi-mood yellow\"></i>";
                    case 'gear':
                        return "<i class=\"essay-list-type zmdi zmdi-settings grey\"></i>";
                    case 'git':
                        return "<i class=\"essay-list-type zmdi zmdi-github-alt purple\"></i>";
                    case 'global':
                        return "<i class=\"essay-list-type zmdi zmdi-globe green\"></i>";
                    case 'google':
                        return "<i class=\"essay-list-type zmdi zmdi-google red\"></i>";
                    case 'home':
                        return "<i class=\"essay-list-type zmdi zmdi-home pink\"></i>";
                    case 'home-green':
                        return "<i class=\"essay-list-type zmdi zmdi-home green\"></i>";
                    case 'home-yellow':
                        return "<i class=\"essay-list-type zmdi zmdi-home yellow\"></i>";
                    case 'hospital':
                        return "<i class=\"essay-list-type zmdi zmdi-hospital red\"></i>";
                    case 'html':
                        return "<i class=\"essay-list-type zmdi zmdi-language-html5 yellow\"></i>";
                    case 'idea':
                        return "<i class=\"essay-list-type zmdi zmdi-lamp yellow\"></i>";
                    case 'js':
                        return "<i class=\"essay-list-type zmdi zmdi-language-javascript\"></i>";
                    case 'love':
                        return "<i class=\"essay-list-type zmdi zmdi-favorite red\"></i>";
                    case 'map':
                        return "<i class=\"essay-list-type zmdi zmdi-map green\"></i>";
                    case 'movie':
                        return "<i class=\"essay-list-type zmdi zmdi-movie blue-grey\"></i>";
                    case 'phone':
                        return "<i class=\"essay-list-type zmdi zmdi-smartphone-android green\"></i>";
                    case 'quote':
                        return "<i class=\"essay-list-type zmdi zmdi-quote orange\"></i>";
                    case 'router':
                        return "<i class=\"essay-list-type zmdi zmdi-router green\"></i>";
                    case 'subway':
                        return "<i class=\"essay-list-type zmdi zmdi-subway orange\"></i>";
                    case 'think':
                        return "<i class=\"essay-list-type zmdi zmdi-coffee brown\"></i>";
                    case 'tv':
                        return "<i class=\"essay-list-type zmdi zmdi-tv green\"></i>";
                    case 'up':
                        return "<i class=\"essay-list-type zmdi zmdi-trending-up red\"></i>";
                    case 'walk':
                        return "<i class=\"essay-list-type zmdi zmdi-walk orange\"></i>";
                    case 'windows':
                        return "<i class=\"essay-list-type zmdi zmdi-windows blue\"></i>";
                    case 'x':
                        return "<i class=\"essay-list-type zmdi zmdi-close-circle red\"></i>";

                    default:
                        return "<i class=\"essay-list-type zmdi zmdi-widgets blue\"></i>";
                }

            },
            "link": function (column, row) {
                return "<a class=\"btn btn-default btn-sm\" href=\"essay\\" + row.id + "\"><i class=\"zmdi zmdi-eye\"></i> 查看</a>";
            },
            "time": function (column, row) {
                return "<span class='essay-list-date' >" + row.time + "</span>";
            }
        }
    }).on("selected.rs.jquery.bootgrid", function (e, rows) {
        var rowIds = [];
        for (var i = 0; i < rows.length; i++) {
            rowIds.push(rows[i].id);
        }
        //alert("Select: " + rowIds.join(","));
    }).on("deselected.rs.jquery.bootgrid", function (e, rows) {
        var rowIds = [];
        for (var i = 0; i < rows.length; i++) {
            rowIds.push(rows[i].id);
        }
        //alert("Deselect: " + rowIds.join(","));
    });

    // AZ: for lists of GPD(GitHub Desirable Project) page.
    $("#table-github-list").bootgrid({
        ajax: false,
        //url: "json/essay.json", // AZ:Set true to use json data
        //post: function () {
        /* To accumulate custom parameter with the request object */
        /*
         return {
         id: "b0df282a-0d67-40e5-8558-c9e93b7befed"
         };
         */
        // },
        selection: false, // AZ:Show Select Icon
        multiSelect: true,
        rowSelect: true,
        keepSelection: true,
        rowCount: 50, // AZ: -1 mains show all
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
            search: "<div class=\"{{css.search}} form-group\"><span class=\"{{css.icon}} {{css.iconSearch}}\"></span><input type=\"text\" class=\"{{css.searchField}}\" placeholder=\"{{lbl.search}}\" /><i class='form-group__bar'></i></div>",
            header: "<div id=\"{{ctx.id}}\" class=\"{{css.header}}\"><p class=\"{{css.search}}\"></p><p class=\"{{css.actions}}\"></p></div>",
            actionDropDownCheckboxItem: "<li><div class='tabe-bootgrid__checkbox checkbox checkbox--dark'><label class=\"{{css.dropDownItem}}\"><input name=\"{{ctx.name}}\" type=\"checkbox\" value=\"1\" class=\"{{css.dropDownItemCheckbox}}\" {{ctx.checked}} /> {{ctx.label}}<i class='input-helper'></i></label></div></li>",
            footer: "<div id=\"{{ctx.id}}\" class=\"{{css.footer}}\"><div class=\"row\"><div class=\"col-sm-6\"><p class=\"{{css.pagination}}\"></p></div><div class=\"col-sm-6 table-bootgrid__showing hidden-xs\"><p class=\"{{css.infos}}\"></p></div></div></div>"
        },
        formatters: {
            "title": function (column, row) {
                return "<a  href=\"https://www.github.com/" + row.url + "\" target='_blank'>" + row.title + " </a>";
            }
        }
    }).on("selected.rs.jquery.bootgrid", function (e, rows) {
        var rowIds = [];
        for (var i = 0; i < rows.length; i++) {
            rowIds.push(rows[i].id);
        }
        //alert("Select: " + rowIds.join(","));
    }).on("deselected.rs.jquery.bootgrid", function (e, rows) {
        var rowIds = [];
        for (var i = 0; i < rows.length; i++) {
            rowIds.push(rows[i].id);
        }
        //alert("Deselect: " + rowIds.join(","));
    });

    // AZ: for lists of dream page.
    $("#table-dream-list").bootgrid({
        //Override default icon classes
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

        //Override default module markups
        templates: {
            actionDropDown: "<span class=\"{{css.dropDownMenu}}\">" + "<a href='' data-toggle=\"dropdown\">{{ctx.content}}</a><ul class=\"{{css.dropDownMenuItems}}\" role=\"menu\"></ul></span>",
            search: "<div class=\"{{css.search}} form-group\"><span class=\"{{css.icon}} {{css.iconSearch}}\"></span><input type=\"text\" class=\"{{css.searchField}}\" placeholder=\"{{lbl.search}}\" /><i class='form-group__bar'></i></div>",
            header: "<div id=\"{{ctx.id}}\" class=\"{{css.header}}\"><p class=\"{{css.search}}\"></p><p class=\"{{css.actions}}\"></p></div>",
            actionDropDownCheckboxItem: "<li><div class='tabe-bootgrid__checkbox checkbox checkbox--dark'><label class=\"{{css.dropDownItem}}\"><input name=\"{{ctx.name}}\" type=\"checkbox\" value=\"1\" class=\"{{css.dropDownItemCheckbox}}\" {{ctx.checked}} /> {{ctx.label}}<i class='input-helper'></i></label></div></li>",
            footer: "<div id=\"{{ctx.id}}\" class=\"{{css.footer}}\"><div class=\"row\"><div class=\"col-sm-6\"><p class=\"{{css.pagination}}\"></p></div><div class=\"col-sm-6 table-bootgrid__showing hidden-xs\"><p class=\"{{css.infos}}\"></p></div></div></div>"
        },
        formatters: {
            "state": function (column, row) {
                switch (row.state) {
                    case 1: // D.O.N.E
                        return "<i class=\"zmdi zmdi-check-circle dream-done\"></i>";
                    case 0: // T.O.D.O
                    default:
                        return "<i class=\"zmdi zmdi-circle-o dream-todo\"></i>";
                }
            },
            "content": function (column, row) {
                switch (row.state) {
                    case 1: // D.O.N.E
                        return "<span class=\"dream-done\">" + row.content + "</span>";
                    case 0: // T.O.D.O
                    default:
                        return "<span class=\"dream-todo\">" + row.content + "</span>";
                }
            },
            "date": function (column, row) {
                switch (row.state) {
                    case 1: // D.O.N.E
                        return "<span class=\"dream-done\">" + row.date + "</span>";
                    case 0: // T.O.D.O
                    default:
                        return "<span class=\"dream-todo\">" + row.date + "</span>";
                }
            }
        }
    });

    // AZ: for lists of C-IASI page.
    $("#table-carsafe-list").bootgrid({
        //Override default icon classes
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

        //Override default module markups
        templates: {
            actionDropDown: "<span class=\"{{css.dropDownMenu}}\">" + "<a href='' data-toggle=\"dropdown\">{{ctx.content}}</a><ul class=\"{{css.dropDownMenuItems}}\" role=\"menu\"></ul></span>",
            search: "<div class=\"{{css.search}} form-group\"><span class=\"{{css.icon}} {{css.iconSearch}}\"></span><input type=\"text\" class=\"{{css.searchField}}\" placeholder=\"{{lbl.search}}\" /><i class='form-group__bar'></i></div>",
            header: "<div id=\"{{ctx.id}}\" class=\"{{css.header}}\"><p class=\"{{css.search}}\"></p><p class=\"{{css.actions}}\"></p></div>",
            actionDropDownCheckboxItem: "<li><div class='tabe-bootgrid__checkbox checkbox checkbox--dark'><label class=\"{{css.dropDownItem}}\"><input name=\"{{ctx.name}}\" type=\"checkbox\" value=\"1\" class=\"{{css.dropDownItemCheckbox}}\" {{ctx.checked}} /> {{ctx.label}}<i class='input-helper'></i></label></div></li>",
            footer: "<div id=\"{{ctx.id}}\" class=\"{{css.footer}}\"><div class=\"row\"><div class=\"col-sm-6\"><p class=\"{{css.pagination}}\"></p></div><div class=\"col-sm-6 table-bootgrid__showing hidden-xs\"><p class=\"{{css.infos}}\"></p></div></div></div>"
        },
        formatters: {
            "make": function (column, row) {
                switch (row.make) {
                    case'长城':
                    case'吉利':
                    case'浙江豪情':  // 领克
                    case'比亚迪':
                    case'奇瑞':
                    case'广汽传祺':
                    case'众泰':
                    case'江淮':
                        return "<img class=\"country-flag\" src=\"img/China.png\"> " + row.make;
                    case'广汽丰田':
                    case'一汽丰田':
                    case'广汽本田':
                    case'东风本田':
                    case'东风日产':
                        return "<img class=\"country-flag\" src=\"img/Japan.png\"> " + row.make;
                    case'上汽大众':
                    case'上海大众斯柯达':
                    case'一汽大众':
                    case'北京奔驰':
                    case'华晨宝马':
                        return "<img class=\"country-flag\" src=\"img/Germany.png\"> " + row.make;
                    case'北京现代':
                    case'东风悦达起亚':
                        return "<img class=\"country-flag\" src=\"img/SouthKorea.png\"> " + row.make;
                    case'上汽通用':
                    case'上汽通用别克':
                    case'上汽通用凯迪拉克':
                    case'上汽通用五菱':
                        return "<img class=\"country-flag\" src=\"img/America.png\"> " + row.make;
                    case'东风雷诺':
                        return "<img class=\"country-flag\" src=\"img/France.png\"> " + row.make;
                    default:
                        return row.make;
                }
            },
            "front_offset": function (column, row) {
                return getCarSafeDescriptionByWord(row.front_offset);
            },
            "side": function (column, row) {
                return getCarSafeDescriptionByWord(row.side);
            },
            "top": function (column, row) {
                return getCarSafeDescriptionByWord(row.top);
            },
            "seat": function (column, row) {
                return getCarSafeDescriptionByWord(row.seat);
            },
            "assist": function (column, row) {
                return getCarSafeDescriptionByWord(row.assist);
            },
            "road_user": function (column, row) {
                return getCarSafeDescriptionByWord(row.road_user);
            }
        }
    });

    function getCarSafeDescriptionByWord(word) {
        switch (word) {
            case 'G': // Good
                return "<span class=\"green\">G 优秀</span>";
            case 'A': // Adequate
                return "<span class=\"yellow\">A 良好</span>";
            case 'M': // Marginal
                return "<span class=\"orange\">M 一般</span>";
            case 'P': // Poor
                return "<span class=\"red\">P 较差</span>";
            default:
                return "<span class=\"red\">" + word + "</span>";
        }
    }

    // AZ: for lists of make page.
    $("#table-make-list").bootgrid({
        ajax: false,
        selection: false, // AZ:Show Select Icon
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
        },
        formatters: {
            "number": function (column, row) {
                var result = '';
                switch (row.with) {
                    case 'A': // Anne Zhang
                        result = "<span class=\"make-with-a\">";
                        break;
                    case 'B':
                        result = "<span class=\"make-with-b\">";
                        break;
                    case 'C':
                        result = "<span class=\"make-with-c\">";
                        break;
                    case 'D':
                        result = "<span class=\"make-with-d\">";
                        break;
                    case 'E':
                        result = "<span class=\"make-with-e\">";
                        break;
                    default:
                        result = "<span class=\"make-with-default\">";
                        break;
                }
                for (var i = 0; i < row.number; i++) {
                    result = result + "<i class=\"zmdi zmdi-circle\"></i> ";
                }
                result = result + "</span>";
                return result;
            },
            "with": function (column, row) {
                switch (row.with) {
                    case 'A':
                        return "<i class=\"zmdi zmdi-flower-alt make-with-a\"></i>";
                    case 'B':
                        return "<i class=\"zmdi zmdi-flower-alt make-with-b\"></i>";
                    case 'C':
                        return "<i class=\"zmdi zmdi-flower-alt make-with-c\"></i>";
                    case 'D':
                        return "<i class=\"zmdi zmdi-flower-alt make-with-d\"></i>";
                    case 'E':
                        return "<i class=\"zmdi zmdi-flower-alt make-with-e\"></i>";
                    default:
                        return "<i class=\"zmdi zmdi-flower-alt make-with-default\"></i>";
                }
            }
        }
    });

    // AZ: for lists of bike page.
    $("#table-bike-list").bootgrid({
        ajax: false,
        selection: false, // AZ:Show Select Icon
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
        },
        formatters: {
            "number": function (column, row) {
                var result = '';
                switch (row.with) {
                    case 'M': // Mobike
                        result = "<span class=\"bike-mobike\">";
                        break;
                    case 'O': // ofo
                        result = "<span class=\"bike-ofo\">";
                        break;
                    case 'B': // bluegogo
                        result = "<span class=\"bike-bluegogo\">";
                        break;
                    case 'H': // HelloBike
                        result = "<span class=\"bike-hello\">";
                        break;
                    case 'Q': // QingJu
                        result = "<span class=\"bike-qingju\">";
                        break;
                    default:
                        result = "<span class=\"bike-default\">";
                        break;
                }
                for (var i = 0; i < row.number; i++) {
                    result = result + "<i class=\"zmdi zmdi-bike\"></i> ";
                }
                result = result + "</span>";
                return result;
            },
            "with": function (column, row) {
                switch (row.with) {
                    case 'A':
                        return "<i class=\"zmdi zmdi-flower-alt make-with-a\"></i>";
                    case 'B':
                        return "<i class=\"zmdi zmdi-flower-alt make-with-b\"></i>";
                    case 'C':
                        return "<i class=\"zmdi zmdi-flower-alt make-with-c\"></i>";
                    case 'D':
                        return "<i class=\"zmdi zmdi-flower-alt make-with-d\"></i>";
                    case 'E':
                        return "<i class=\"zmdi zmdi-flower-alt make-with-e\"></i>";
                    default:
                        return "<i class=\"zmdi zmdi-flower-alt make-with-default\"></i>";
                }
            }
        }
    });

    // AZ: for lists of step page.
    $("#table-step-list").bootgrid({
        ajax: false,
        selection: false, // AZ:Show Select Icon
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
        },
        formatters: {
            "number": function (column, row) {
                var num = row.number;
                if (num < 3000)
                    return "<span class=\"fit-rate-none\">" + num + "</span>";
                else if (num < 5000)
                    return "<span class=\"fit-rate-poor\">" + num + "</span>";
                else
                    return "<span class=\"fit-rate-good\">" + num + "</span>";
            }
        }
    });

    // AZ: for lists of fit page.
    $("#table-fit-list").bootgrid({
        ajax: false,
        selection: false, // AZ:Show Select Icon
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
        },
        formatters: {
            "number_push_up": function (column, row) {
                var num = row.number_push_up;
                if (num == 0)
                    return "<span class=\"fit-rate-none\">" + num + "</span>";
                else if (num < 50)
                    return "<span class=\"fit-rate-poor\">" + num + "</span>";
                else
                    return "<span class=\"fit-rate-good\">" + num + "</span>";

            },
            "number_sit_up": function (column, row) {
                var num = row.number_sit_up;
                if (num == 0)
                    return "<span class=\"fit-rate-none\">" + num + "</span>";
                else if (num < 100)
                    return "<span class=\"fit-rate-poor\">" + num + "</span>";
                else
                    return "<span class=\"fit-rate-good\">" + num + "</span>";

            },
            "number_rope_skip": function (column, row) {
                var num = row.number_rope_skip;
                if (num == 0)
                    return "<span class=\"fit-rate-none\">" + num + "</span>";
                else if (num < 200)
                    return "<span class=\"fit-rate-poor\">" + num + "</span>";
                else
                    return "<span class=\"fit-rate-good\">" + num + "</span>";

            },
            "number_spring_expander": function (column, row) {
                var num = row.number_spring_expander;
                if (num == 0)
                    return "<span class=\"fit-rate-none\">" + num + "</span>";
                else if (num < 100)
                    return "<span class=\"fit-rate-poor\">" + num + "</span>";
                else
                    return "<span class=\"fit-rate-good\">" + num + "</span>";

            },
            "number_run": function (column, row) {
                var num = row.number_run;
                if (num == 0)
                    return "<span class=\"fit-rate-none\">" + num + "</span>";
                else if (num < 10)
                    return "<span class=\"fit-rate-poor\">" + num + "</span>";
                else
                    return "<span class=\"fit-rate-good\">" + num + "</span>";

            }
        }
    });

    // AZ: for lists of IN page.
    $("#table-in-list").bootgrid({
        ajax: false,
        selection: false, // AZ:Show Select Icon
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
        },
        formatters: {
            "in_salary": function (column, row) {
                return row.in_salary;
            },
            "out_house": function (column, row) {
                return row.out_house;
            }
        }
    });

    // AZ: for lists of CPU page.
    $("#table-cpu-list").bootgrid({
        ajax: false,
        selection: false, // AZ:Show Select Icon
        rowCount: 1000, // AZ: -1 mains show all
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
        },
        formatters: {
            "brand": function (column, row) {
                switch (row.brand) {
                    case 'Intel':
                        return "<span class=\"cpu-brand-intel\">" + row.brand + "</span>";
                    case 'AMD':
                        return "<span class=\"cpu-brand-amd\">" + row.brand + "</span>";
                    default:
                        return row.brand;
                }
            },
            "series": function (column, row) {
                switch (row.brand) {
                    case 'Intel':
                        return "<span class=\"cpu-brand-intel\">" + row.series + "</span>";
                    case 'AMD':
                        return "<span class=\"cpu-brand-amd\">" + row.series + "</span>";
                    default:
                        return row.series;
                }
            },
            "name": function (column, row) {
                switch (row.name) {
                    case 'i7 6700K':
                    case 'i7 2630QM':
                    case 'i5 760':
                    case 'i5 460M':
                        return "<span class=\"cpu-used\">" + row.name + "</span>";
                    default:
                        return row.name;
                }
            },
            "freq_base": function (column, row) {
                return row.freq_base.toFixed(2);
            },
            "freq_turbo": function (column, row) {
                return row.freq_turbo.toFixed(2);
            },
            "tdp": function (column, row) {
                var tdp = row.tdp;
                if (tdp < 0) {
                    return tdp;
                } else if (tdp < 50) {
                    return "<span class=\"cpu-tdp-low\">" + tdp + "</span>";
                } else if (tdp < 100) {
                    return "<span class=\"cpu-tdp-middle\">" + tdp + "</span>";
                } else {
                    return "<span class=\"cpu-tdp-high\">" + tdp + "</span>";
                }
            },
            "az": function (column, row) {
                var frequencyTurbo = row.freq_turbo; // V1: freq_turbo * thread * 100
                var thread = row.thread;
                var pricePerformance = 100; // 价格-性能系数
                return parseInt(frequencyTurbo * thread * pricePerformance);
            }
        }
    });


    // AZ: for lists of GPU page.
    $("#table-gpu-list").bootgrid({
        ajax: false,
        selection: false, // AZ:Show Select Icon
        rowCount: 1000, // AZ: -1 mains show all
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
        },
        formatters: {
            "brand": function (column, row) {
                switch (row.brand) {
                    case 'nVIDIA':
                        return "<span class=\"gpu-brand-nvidia\">" + row.brand + "</span>";
                    case 'AMD':
                        return "<span class=\"cpu-brand-amd\">" + row.brand + "</span>";
                    case 'Intel':
                        return "<span class=\"cpu-brand-intel\">" + row.brand + "</span>";
                    default:
                        return row.brand;
                }
            },
            "name": function (column, row) {
                switch (row.name) {
                    case 'GTX 1060(6G)':
                    case 'GT555M':
                    case 'GT720M':
                    case 'GF210':
                    case 'HD530':
                        return "<span class=\"cpu-used\">" + row.name + "</span>";
                    default:
                        return row.name;
                }
            },
            "clock_base": function (column, row) {
                return row.clock_base;
            },
            "clock_boost": function (column, row) {
                return row.clock_boost;
            },
            "tdp": function (column, row) {
                var tdp = row.tdp;
                if (tdp < 0) {
                    return tdp;
                } else if (tdp < 100) {
                    return "<span class=\"cpu-tdp-low\">" + tdp + "</span>";
                } else if (tdp < 200) {
                    return "<span class=\"cpu-tdp-middle\">" + tdp + "</span>";
                } else {
                    return "<span class=\"cpu-tdp-high\">" + tdp + "</span>";
                }
            }
        }
    });

    // AZ: for lists of TV page.
    $("#table-tv-list").bootgrid({
        ajax: false,
        selection: false, // AZ:Show Select Icon
        rowCount: 1000, // AZ: -1 mains show all
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
        },
        formatters: {
            "os": function (column, row) {
                switch (row.os) {
                    case 'android':
                        return "<span style='color: #00a21b'><i class=\"zmdi zmdi-android\"></i></span>";
                    case 'windows':
                        return "<span style='color:#00a1d8;'><i class=\"zmdi zmdi-windows\"></i></span>";
                    case 'tizen':
                        return "<span style='color:#0000ff;'><i class=\"zmdi zmdi-search\"></i></span>";
                    default:
                        return row.os;
                }
            },
            "tdp": function (column, row) {
                var tdp = row.tdp;
                if (tdp < 0) {
                    return tdp;
                } else if (tdp < 100) {
                    return "<span class=\"cpu-tdp-low\">" + tdp + "</span>";
                } else if (tdp < 200) {
                    return "<span class=\"cpu-tdp-middle\">" + tdp + "</span>";
                } else {
                    return "<span class=\"cpu-tdp-high\">" + tdp + "</span>";
                }
            }
        }
    });


    // AZ: for lists of Router page.
    $("#table-router-list").bootgrid({
        ajax: false,
        selection: false, // AZ:Show Select Icon
        rowCount: 1000, // AZ: -1 mains show all
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
        },
        formatters: {
            "series": function (column, row) {
                switch (row.series) {
                    case 'WDR3320':
                    case 'K1S':
                    case 'K3C':
                    case 'K3':
                        return "<span class=\"cpu-used\">" + row.series + "</span>";
                    default:
                        return row.series;
                }
            },
            "tdp": function (column, row) {
                var tdp = row.tdp;
                if (tdp < 0) {
                    return tdp;
                } else if (tdp < 100) {
                    return "<span class=\"cpu-tdp-low\">" + tdp + "</span>";
                } else if (tdp < 200) {
                    return "<span class=\"cpu-tdp-middle\">" + tdp + "</span>";
                } else {
                    return "<span class=\"cpu-tdp-high\">" + tdp + "</span>";
                }
            }
        }
    });


});