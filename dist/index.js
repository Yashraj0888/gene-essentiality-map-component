'use strict';

var react = require('react');
var chart_js = require('chart.js');
var reactChartjs2 = require('react-chartjs-2');
var annotationPlugin = require('chartjs-plugin-annotation');

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol, Iterator */


var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}

typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

chart_js.Chart.register(chart_js.ScatterController, chart_js.LinearScale, chart_js.PointElement, chart_js.Tooltip, annotationPlugin);
var API_URL = "https://api.platform.opentargets.org/api/v4/graphql";
var SearchBar = react.memo(function (_a) {
    var searchTerm = _a.searchTerm, onSearchChange = _a.onSearchChange, searchField = _a.searchField, onSearchFieldChange = _a.onSearchFieldChange;
    var _b = react.useState(false), isDropdownOpen = _b[0], setIsDropdownOpen = _b[1];
    var handleSelectChange = react.useCallback(function (e) {
        onSearchFieldChange(e.target.value);
        setIsDropdownOpen(false);
    }, [onSearchFieldChange]);
    var handleBlur = react.useCallback(function () {
        requestAnimationFrame(function () {
            setIsDropdownOpen(false);
        });
    }, []);
    return (React.createElement("div", { className: "flex flex-col space-y-2 w-full max-w-md sm:w-auto mt-5" },
        React.createElement("div", { className: "relative" },
            React.createElement("select", { value: searchField, onChange: handleSelectChange, onFocus: function () { return setIsDropdownOpen(true); }, onBlur: handleBlur, className: "block appearance-none cursor-pointer dark:bg-transparent w-full px-3 py-2 border border-gray-300 rounded-xl text-gray-600 dark:text-gray-300 leading-5 bg-white dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm" },
                React.createElement("option", { value: "depmapId", className: "dark:text-gray-300 dark:bg-gray-800" }, "DepMap ID"),
                React.createElement("option", { value: "cellLineName", className: "dark:text-gray-300 dark:bg-gray-800" }, "Cell Line Name"),
                React.createElement("option", { value: "diseaseFromSource", className: "dark:text-gray-300 dark:bg-gray-800" }, "Disease"),
                React.createElement("option", { value: "geneEffect", className: "dark:text-gray-300 dark:bg-gray-800" }, "Gene Effect"),
                React.createElement("option", { value: "expression", className: "dark:text-gray-300 dark:bg-gray-800" }, "Expression")),
            React.createElement("div", { className: "absolute inset-y-0 right-3 flex items-center pointer-events-none" },
                React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "currentColor", className: "w-5 h-5 ml-1 text-gray-500 dark:text-gray-300 transition-transform duration-200 ".concat(isDropdownOpen ? "rotate-180" : "rotate-0"), "aria-hidden": "true" },
                    React.createElement("path", { fillRule: "evenodd", d: "M19.53 8.47a.75.75 0 0 1 0 1.06l-7 7a.75.75 0 0 1-1.06 0l-7-7a.75.75 0 1 1 1.06-1.06L12 14.44l6.47-6.47a.75.75 0 0 1 1.06 0z", clipRule: "evenodd" })))),
        React.createElement("div", { className: "relative rounded-lg" },
            React.createElement("input", { type: "text", value: searchTerm, onChange: function (e) { return onSearchChange(e.target.value); }, className: "block w-full px-3 py-2 border border-gray-300 leading-5 rounded-xl bg-white dark:bg-transparent dark:text-gray-300 placeholder-gray-500 dark:placeholder:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm", placeholder: "Search..." }))));
});
SearchBar.displayName = "SearchBar";
var TissueDropdown = react.memo(function (_a) {
    var tissues = _a.tissues, selectedTissues = _a.selectedTissues, onTissueToggle = _a.onTissueToggle;
    var _b = react.useState(false), isOpen = _b[0], setIsOpen = _b[1];
    var dropdownRef = react.useRef(null);
    react.useEffect(function () {
        var handleClickOutside = function (event) {
            if (dropdownRef.current &&
                !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return function () {
            return document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);
    return (React.createElement("div", { className: "relative inline-block text-left w-full", ref: dropdownRef },
        React.createElement("button", { onClick: function () { return setIsOpen(!isOpen); }, className: "flex items-center justify-between w-full px-4 py-2 text-gray-600 rounded-xl text-sm font-medium bg-white border dark:bg-transparent dark:text-gray-300 border-gray-300 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2" },
            "Filter Tissues",
            React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "currentColor", className: "w-5 h-5 transition-transform duration-200 ".concat(isOpen ? "rotate-180" : "rotate-0"), "aria-hidden": "true" },
                React.createElement("path", { fillRule: "evenodd", d: "M19.53 8.47a.75.75 0 0 1 0 1.06l-7 7a.75.75 0 0 1-1.06 0l-7-7a.75.75 0 1 1 1.06-1.06L12 14.44l6.47-6.47a.75.75 0 0 1 1.06 0z", clipRule: "evenodd" }))),
        isOpen && (React.createElement("div", { className: "absolute  mt-2  bg-white shadow-lg ring-1 ring-black ring-opacity-5 z-50 dark:bg-gray-800 rounded-xl" },
            React.createElement("div", { className: "py-1 max-h-64 overflow-y-auto" }, tissues.map(function (tissue, index) { return (React.createElement("label", { key: index, className: "flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-gray-300 cursor-pointer" },
                React.createElement("input", { type: "checkbox", checked: selectedTissues.includes(tissue), onChange: function () { return onTissueToggle(tissue); }, className: "h-3 w-3 text-blue-600 border-gray-300 rounded focus:ring-blue-500", onClick: function (e) { return e.stopPropagation(); } }),
                React.createElement("span", { className: "ml-3 flex-grow" }, tissue))); }))))));
});
TissueDropdown.displayName = "TissueDropdown";
var GeneEssentialityChart = function (_a) {
    var ensemblId = _a.ensemblId, setLoading = _a.setLoading, setError = _a.setError;
    var _b = react.useState(null), chartData = _b[0], setChartData = _b[1];
    var _c = react.useState([]), tissues = _c[0], setTissues = _c[1];
    var _d = react.useState([]), selectedTissues = _d[0], setSelectedTissues = _d[1];
    var _e = react.useState(null), originalData = _e[0], setOriginalData = _e[1];
    var theme = react.useState("light")[0];
    var chartRef = react.useRef(null);
    var _f = react.useState(""), searchTerm = _f[0], setSearchTerm = _f[1];
    var _g = react.useState("cellLineName"), searchField = _g[0], setSearchField = _g[1];
    var _h = react.useState([]), selectedCategories = _h[0], setSelectedCategories = _h[1];
    var _j = react.useState(null), selectedPoint = _j[0], setSelectedPoint = _j[1];
    var _k = react.useState(300), sidebarWidth = _k[0], setSidebarWidth = _k[1];
    var _l = react.useState(false), isResizing = _l[0], setIsResizing = _l[1];
    var _m = react.useState(false), isSidebarCollapsed = _m[0], setIsSidebarCollapsed = _m[1];
    var previousWidthRef = react.useRef(sidebarWidth);
    var resizeRef = react.useRef(null);
    react.useEffect(function () {
        var handleMouseMove = function (e) {
            if (!isResizing)
                return;
            var newWidth = e.clientX;
            if (newWidth >= 200 && newWidth <= window.innerWidth * 0.8) {
                setSidebarWidth(newWidth);
            }
        };
        var handleMouseUp = function () {
            setIsResizing(false);
        };
        if (isResizing) {
            document.addEventListener("mousemove", handleMouseMove);
            document.addEventListener("mouseup", handleMouseUp);
        }
        return function () {
            document.removeEventListener("mousemove", handleMouseMove);
            document.removeEventListener("mouseup", handleMouseUp);
        };
    }, [isResizing]);
    var toggleSidebar = function () {
        setIsSidebarCollapsed(!isSidebarCollapsed);
        if (isSidebarCollapsed) {
            setSidebarWidth(previousWidthRef.current);
        }
        else {
            previousWidthRef.current = sidebarWidth;
            setSidebarWidth(40);
        }
    };
    var exportToCSV = function () {
        if (!chartData || !chartData.datasets[0].data)
            return;
        var data = chartData.datasets[0].data;
        var headers = [
            "Tissue",
            "Cell Line",
            "DepMap ID",
            "Disease",
            "Gene Effect",
            "Expression",
        ];
        var csvContent = __spreadArray([
            headers.join(",")
        ], data.map(function (point) {
            return [
                "\"".concat(point.tissue, "\""),
                "\"".concat(point.cellLine, "\""),
                "\"".concat(point.depmapId, "\""),
                "\"".concat(point.disease, "\""),
                point.geneEffect,
                point.expression || "N/A",
            ].join(",");
        }), true).join("\n");
        var blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
        var link = document.createElement("a");
        var url = URL.createObjectURL(blob);
        link.setAttribute("href", url);
        link.setAttribute("download", "gene-essentiality-data.csv");
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
    var handleSearchChange = function (value) {
        setSearchTerm(value);
    };
    var handleSearchFieldChange = function (value) {
        setSearchField(value);
    };
    var handleTissueToggle = function (tissue) {
        setSelectedTissues(function (prev) {
            return prev.includes(tissue)
                ? prev.filter(function (t) { return t !== tissue; })
                : __spreadArray([tissue], prev, true);
        });
    };
    var getPointColor = function (point, currentTheme, alpha) {
        if (alpha === void 0) { alpha = 0.6; }
        var isHighlighted = searchTerm &&
            String(point[searchField] || "")
                .toLowerCase()
                .includes(searchTerm.toLowerCase());
        if (selectedCategories.length > 0) {
            var matchesCategory = selectedCategories.some(function (category) {
                if (category === "Neutral" && point.geneEffect > -1)
                    return true;
                if (category === "Dependency" && point.geneEffect <= -1)
                    return true;
                if (category === "Selected Neu" &&
                    isHighlighted &&
                    point.geneEffect > -1)
                    return true;
                if (category === "Selected Dep" &&
                    isHighlighted &&
                    point.geneEffect <= -1)
                    return true;
                return false;
            });
            if (!matchesCategory) {
                return "rgba(200, 200, 200, 0.1)";
            }
        }
        if (isHighlighted) {
            return point.geneEffect <= -1
                ? "rgba(234, 179, 8, 1)"
                : "rgba(34, 197, 94, 1)";
        }
        return point.geneEffect <= -1
            ? "rgba(239, 68, 68, ".concat(alpha, ")")
            : "rgba(59, 130, 246, ".concat(alpha, ")");
    };
    var getPointRadius = function (point) {
        var isHighlighted = searchTerm &&
            String(point[searchField] || "")
                .toLowerCase()
                .includes(searchTerm.toLowerCase());
        var isSelected = (selectedPoint === null || selectedPoint === void 0 ? void 0 : selectedPoint.depmapId) === point.depmapId;
        if (isSelected)
            return 8;
        return isHighlighted ? 6 : 4;
    };
    var fetchData = function () { return __awaiter(void 0, void 0, void 0, function () {
        var response, _a, data, errors, essentialityData, uniqueTissues_1, scatterData, newChartData, error_1;
        var _b;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    if (!ensemblId)
                        return [2 /*return*/];
                    setLoading(true);
                    setError("");
                    setChartData(null);
                    setTissues([]);
                    setSelectedTissues([]);
                    setOriginalData(null);
                    setSearchTerm("");
                    _c.label = 1;
                case 1:
                    _c.trys.push([1, 4, 5, 6]);
                    return [4 /*yield*/, fetch(API_URL, {
                            method: "POST",
                            headers: { "Content-Type": "application/json" },
                            body: JSON.stringify({
                                query: "\n            query Depmap($ensemblId: String!) {\n              target(ensemblId: $ensemblId) {\n                depMapEssentiality {\n                  tissueName\n                  screens {\n                    depmapId\n                    cellLineName\n                    diseaseFromSource\n                    geneEffect\n                    expression\n                  }\n                }\n              }\n            }\n          ",
                                variables: { ensemblId: ensemblId },
                            }),
                        })];
                case 2:
                    response = _c.sent();
                    if (!response.ok) {
                        throw new Error("Failed to fetch data from Open Targets API");
                    }
                    return [4 /*yield*/, response.json()];
                case 3:
                    _a = _c.sent(), data = _a.data, errors = _a.errors;
                    if (errors) {
                        throw new Error(errors[0].message);
                    }
                    if (!((_b = data === null || data === void 0 ? void 0 : data.target) === null || _b === void 0 ? void 0 : _b.depMapEssentiality)) {
                        throw new Error("No essentiality data found for this gene");
                    }
                    essentialityData = data.target.depMapEssentiality;
                    uniqueTissues_1 = Array.from(new Set(essentialityData.map(function (item) { return item.tissueName; })));
                    setTissues(uniqueTissues_1);
                    scatterData = essentialityData.flatMap(function (item) {
                        return item.screens
                            .filter(function (screen) { return screen.geneEffect !== null; })
                            .map(function (screen) { return ({
                            x: screen.geneEffect,
                            y: uniqueTissues_1.indexOf(item.tissueName),
                            tissue: item.tissueName,
                            cellLine: screen.cellLineName,
                            depmapId: screen.depmapId,
                            disease: screen.diseaseFromSource,
                            expression: screen.expression,
                            cellLineName: screen.cellLineName,
                            diseaseFromSource: screen.diseaseFromSource,
                            geneEffect: screen.geneEffect,
                        }); });
                    });
                    newChartData = {
                        datasets: [
                            {
                                label: "Gene Essentiality",
                                data: scatterData,
                                backgroundColor: scatterData.map(function (point) {
                                    return getPointColor(point);
                                }),
                                borderColor: scatterData.map(function (point) {
                                    return getPointColor(point, theme, 1);
                                }),
                                borderWidth: 1,
                                pointHoverRadius: 8,
                                pointRadius: scatterData.map(function (point) {
                                    return getPointRadius(point);
                                }),
                                pointHoverBackgroundColor: "rgba(0, 0, 0, 0.8)",
                                pointHoverBorderColor: "rgba(0, 0, 0, 1)",
                                pointHoverBorderWidth: 2,
                            },
                        ],
                    };
                    setChartData(newChartData);
                    setOriginalData(newChartData);
                    return [3 /*break*/, 6];
                case 4:
                    error_1 = _c.sent();
                    setError(error_1 instanceof Error
                        ? error_1.message
                        : "An error occurred while fetching data.");
                    return [3 /*break*/, 6];
                case 5:
                    setLoading(false);
                    return [7 /*endfinally*/];
                case 6: return [2 /*return*/];
            }
        });
    }); };
    react.useEffect(function () {
        if (ensemblId) {
            fetchData();
        }
    }, [ensemblId]);
    react.useEffect(function () {
        if (originalData) {
            var filteredData = __spreadArray([], originalData.datasets[0].data, true);
            if (selectedTissues.length > 0) {
                filteredData = filteredData.filter(function (point) {
                    return selectedTissues.includes(point.tissue);
                });
            }
            if (selectedCategories.length > 0) {
                filteredData = filteredData.filter(function (point) {
                    var isHighlighted = searchTerm &&
                        String(point[searchField] || "")
                            .toLowerCase()
                            .includes(searchTerm.toLowerCase());
                    return selectedCategories.some(function (category) {
                        if (category === "Neutral")
                            return point.geneEffect > -1;
                        if (category === "Dependency")
                            return point.geneEffect <= -1;
                        if (category === "Selected Neu")
                            return isHighlighted && point.geneEffect > -1;
                        if (category === "Selected Dep")
                            return isHighlighted && point.geneEffect <= -1;
                        return false;
                    });
                });
            }
            setChartData({
                datasets: [
                    __assign(__assign({}, originalData.datasets[0]), { data: filteredData, backgroundColor: filteredData.map(function (point) {
                            return getPointColor(point);
                        }), borderColor: filteredData.map(function (point) {
                            return getPointColor(point, theme, 1);
                        }), pointRadius: filteredData.map(function (point) {
                            return getPointRadius(point);
                        }) }),
                ],
            });
        }
    }, [
        selectedTissues,
        searchTerm,
        searchField,
        originalData,
        theme,
        selectedCategories,
        selectedPoint,
    ]);
    var chartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        onClick: function (event, elements) {
            if (elements.length > 0) {
                var dataIndex = elements[0].index;
                var clickedPoint_1 = chartData.datasets[0].data[dataIndex];
                setSelectedPoint(function (prevPoint) {
                    return (prevPoint === null || prevPoint === void 0 ? void 0 : prevPoint.depmapId) === clickedPoint_1.depmapId ? null : clickedPoint_1;
                });
            }
            else {
                setSelectedPoint(null);
            }
        },
        scales: {
            x: {
                title: {
                    display: true,
                    text: "Gene Effect",
                    font: {
                        size: 16,
                        weight: "bold",
                        family: "Inter, sans-serif",
                    },
                    color: "#71717A",
                },
                ticks: {
                    font: {
                        size: 14,
                        family: "Inter, sans-serif",
                    },
                    color: "#71717A",
                },
                grid: {
                    color: "rgba(255, 255, 255, 0.1)",
                },
            },
            y: {
                title: {
                    display: true,
                    text: "Tissues",
                    font: {
                        size: 16,
                        weight: "bold",
                        family: "Inter, sans-serif",
                    },
                    color: "#71717A",
                },
                ticks: {
                    callback: function (value) { return tissues[value] || ""; },
                    stepSize: 0.5,
                    autoSkip: false,
                    font: {
                        size: 12,
                        family: "Inter, sans-serif",
                    },
                    color: "#71717A",
                },
                grid: {
                    color: "rgba(107, 109, 105,0.1)",
                },
            },
        },
        plugins: {
            tooltip: {
                enabled: true,
                mode: "nearest",
                intersect: true,
                position: "nearest",
                external: function (context) {
                    if (selectedPoint && context.tooltip.dataPoints) {
                        var dataPoint = context.tooltip.dataPoints[0].raw;
                        if (dataPoint.depmapId === selectedPoint.depmapId) {
                            context.tooltip.opacity = 1;
                        }
                    }
                },
                callbacks: {
                    label: function (context) {
                        var _a;
                        var point = context.raw;
                        return [
                            "Tissue: ".concat(point.tissue),
                            "Cell Line: ".concat(point.cellLine),
                            "Gene Effect: ".concat(point.x.toFixed(2)),
                            "Disease: ".concat(point.disease),
                            "Expression: ".concat(((_a = point.expression) === null || _a === void 0 ? void 0 : _a.toFixed(2)) || "N/A"),
                            "DepMap ID: ".concat(point.depmapId),
                        ];
                    },
                },
                backgroundColor: "rgba(0, 0, 0, 0.8)",
                titleColor: "rgba(255, 255, 255, 0.8)",
                bodyColor: "rgba(255, 255, 255, 0.8)",
                titleFont: {
                    size: 14,
                    weight: "bold",
                },
                bodyFont: {
                    size: 12,
                },
                padding: 12,
                cornerRadius: 8,
                borderColor: "rgba(255, 255, 255, 0.1)",
                borderWidth: 1,
            },
            annotation: {
                annotations: {
                    line1: {
                        type: "line",
                        yMin: -0.5,
                        yMax: tissues.length - 0.5,
                        xMin: -1,
                        xMax: -1,
                        borderColor: "rgba(239, 68, 68, 0.5)",
                        borderWidth: 2,
                        borderDash: [6, 6],
                        label: {
                            content: "Essentiality Threshold",
                            enabled: true,
                            position: "start",
                            font: {
                                size: 14,
                                weight: "bold",
                            },
                            color: "rgba(239, 68, 68, 1)",
                        },
                    },
                },
            },
        },
    };
    react.useEffect(function () {
        var _a;
        if (chartRef.current && selectedPoint) {
            var chart = chartRef.current;
            var dataset = chart.data.datasets[0];
            var index = dataset.data.findIndex(function (point) { return point.depmapId === selectedPoint.depmapId; });
            if (index !== -1) {
                chart.setActiveElements([{ datasetIndex: 0, index: index }]);
                var meta = chart.getDatasetMeta(0);
                (_a = chart.tooltip) === null || _a === void 0 ? void 0 : _a.setActiveElements([{ datasetIndex: 0, index: index }], {
                    x: meta.data[index].x,
                    y: meta.data[index].y,
                });
                chart.update();
            }
        }
    }, [selectedPoint]);
    return (React.createElement("div", { className: "flex h-screen w-full" },
        React.createElement("div", { style: {
                width: "".concat(sidebarWidth, "px"),
                minWidth: isSidebarCollapsed ? "40px" : "200px",
                maxWidth: "80%",
                transition: isResizing ? "none" : "width 0.3s ease",
            }, className: "flex flex-col bg-transparent dark:bg-transparent border-r border-gray-200 dark:border-gray-700" },
            React.createElement("div", { className: "flex justify-end p-2" },
                React.createElement("button", { onClick: toggleSidebar, className: "p-2  hover:bg-gray-300 bg-slate-300 rounded-xl dark:hover:bg-gray-300 dark:bg-gray-200", title: isSidebarCollapsed ? "Expand sidebar" : "Collapse sidebar" },
                    React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", className: "w-6 h-6 dark:text-gray-900 transition-transform duration-300 ".concat(isSidebarCollapsed ? "rotate-180" : "") },
                        React.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M15 19l-7-7 7-7" })))),
            React.createElement("div", { className: "flex-1 overflow-y-auto ".concat(isSidebarCollapsed ? "hidden" : "") }, chartData && (React.createElement("div", { className: "p-4 space-y-4" },
                React.createElement("button", { onClick: exportToCSV, className: "flex items-center space-x-2 px-4 py-2 bg-gray-500 text-white rounded-xl hover:bg-gray-600 dark:bg-gray-200 dark:text-gray-800 dark:hover:bg-gray-300 transition-colors" },
                    React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "currentColor", className: "w-4 h-4", "aria-hidden": "true" },
                        React.createElement("path", { fillRule: "evenodd", d: "M12 3.75a.75.75 0 0 1 .75.75v9.69l3.22-3.22a.75.75 0 0 1 1.06 1.06l-4.5 4.5a.75.75 0 0 1-1.06 0l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.22 3.22V4.5a.75.75 0 0 1 .75-.75zM4.5 18a.75.75 0 0 1 .75-.75h13.5a.75.75 0 0 1 0 1.5H5.25A.75.75 0 0 1 4.5 18z", clipRule: "evenodd" })),
                    React.createElement("span", null, "Export CSV")),
                React.createElement("div", { className: "border rounded-xl p-4 space-y-2" }, ["Neutral", "Dependency", "Selected Neu", "Selected Dep"].map(function (category) { return (React.createElement("div", { key: category, className: "flex items-center space-x-3" },
                    React.createElement("input", { type: "checkbox", id: category, checked: selectedCategories.includes(category), onChange: function () {
                            setSelectedCategories(function (prev) {
                                return prev.includes(category)
                                    ? prev.filter(function (c) { return c !== category; })
                                    : __spreadArray(__spreadArray([], prev, true), [category], false);
                            });
                        }, className: "form-checkbox h-4 w-4 text-blue-600" }),
                    React.createElement("label", { htmlFor: category, className: "flex items-center cursor-pointer text-sm" },
                        React.createElement("div", { className: "w-3 h-3 rounded-full mr-2 ".concat(category === "Neutral"
                                ? "bg-blue-400"
                                : category === "Dependency"
                                    ? "bg-red-400"
                                    : category === "Selected Neu"
                                        ? "bg-green-500"
                                        : "bg-yellow-500") }),
                        category))); })),
                React.createElement(SearchBar, { searchTerm: searchTerm, onSearchChange: handleSearchChange, searchField: searchField, onSearchFieldChange: handleSearchFieldChange }),
                React.createElement(TissueDropdown, { tissues: tissues, selectedTissues: selectedTissues, onTissueToggle: handleTissueToggle }),
                selectedTissues.length > 0 && (React.createElement("div", { className: "border rounded-xl p-4 relative" },
                    React.createElement("div", { className: "flex flex-wrap gap-2 pr-8" }, selectedTissues.map(function (tissue) { return (React.createElement("span", { key: tissue, className: "inline-flex items-center px-2.5 py-1 rounded-full text-xs bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300" },
                        tissue,
                        React.createElement("button", { onClick: function () { return handleTissueToggle(tissue); }, className: "ml-1.5 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200" }, "\u00D7"))); })),
                    React.createElement("button", { onClick: function () { return setSelectedTissues([]); }, className: "absolute top-3 right-3 p-1.5 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors", title: "Clear all filters" },
                        React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: "h-4 w-4 text-red-500 hover:text-red-700", "aria-hidden": "true" },
                            React.createElement("polyline", { points: "3 6 5 6 21 6" }),
                            React.createElement("path", { d: "M19 6l-.867 12.142A2 2 0 0 1 16.138 20H7.862a2 2 0 0 1-1.995-1.858L5 6" }),
                            React.createElement("path", { d: "M10 11v6" }),
                            React.createElement("path", { d: "M14 11v6" }),
                            React.createElement("path", { d: "M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2" })),
                        React.createElement("span", { className: "sr-only" }, "Clear all filters")))))))),
        React.createElement("div", { ref: resizeRef, className: "w-1 cursor-col-resize bg-gray-200 hover:bg-blue-500 active:bg-blue-600 transition-colors", onMouseDown: function () { return setIsResizing(true); } }),
        React.createElement("div", { className: "flex-1 overflow-hidden" }, chartData && (React.createElement("div", { className: "h-full w-full p-4" },
            React.createElement(reactChartjs2.Scatter, { data: chartData, options: chartOptions, ref: chartRef }))))));
};

exports.GeneEssentialityChart = GeneEssentialityChart;
//# sourceMappingURL=index.js.map
