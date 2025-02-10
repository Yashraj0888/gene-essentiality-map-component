'use strict';

var React = require('react');
var chart_js = require('chart.js');
var reactChartjs2 = require('react-chartjs-2');
var annotationPlugin = require('chartjs-plugin-annotation');
var lucideReact = require('lucide-react');

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
// Memoized SearchBar component
var SearchBar = React.memo(function (_a) {
    var searchTerm = _a.searchTerm, onSearchChange = _a.onSearchChange, searchField = _a.searchField, onSearchFieldChange = _a.onSearchFieldChange;
    return (React.createElement("div", { className: "flex flex-col space-y-2 w-full max-w-md sm:w-auto mt-5" },
        React.createElement("div", { className: "relative" },
            React.createElement("input", { type: "text", value: searchTerm, onChange: function (e) { return onSearchChange(e.target.value); }, className: "block w-full px-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm", placeholder: "Search..." })),
        React.createElement("select", { value: searchField, onChange: function (e) { return onSearchFieldChange(e.target.value); }, className: "block w-full px-3 py-2 border border-gray-300 text-gray-600 rounded-md leading-5 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm" },
            React.createElement("option", { value: "depmapId" }, "DepMap ID"),
            React.createElement("option", { value: "cellLineName" }, "Cell Line Name"),
            React.createElement("option", { value: "diseaseFromSource" }, "Disease"),
            React.createElement("option", { value: "geneEffect" }, "Gene Effect"),
            React.createElement("option", { value: "expression" }, "Expression"))));
});
// Memoized TissueDropdown component
var TissueDropdown = React.memo(function (_a) {
    var tissues = _a.tissues, selectedTissues = _a.selectedTissues, onTissueToggle = _a.onTissueToggle;
    var _b = React.useState(false), isOpen = _b[0], setIsOpen = _b[1];
    return (React.createElement("div", { className: "relative" },
        React.createElement("button", { onClick: function () { return setIsOpen(!isOpen); }, className: "flex items-center justify-between w-48 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2" },
            "Filter Tissues",
            React.createElement(lucideReact.ChevronDown, { className: "w-5 h-5 ml-2 -mr-1", "aria-hidden": "true" })),
        isOpen && (React.createElement("div", { className: "absolute z-10 w-48 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5" },
            React.createElement("div", { className: "py-1 max-h-64 overflow-y-auto" }, tissues.map(function (tissue, index) { return (React.createElement("div", { key: index, className: "flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer", onClick: function () {
                    onTissueToggle(tissue);
                    setIsOpen(false);
                } },
                React.createElement("input", { type: "checkbox", checked: selectedTissues.includes(tissue), readOnly: true, className: "h-4 w-4 border-gray-300 rounded" }),
                React.createElement("span", { className: "ml-3" }, tissue))); }))))));
});
var GeneEssentialityChart = function (_a) {
    var ensemblId = _a.ensemblId, setLoading = _a.setLoading, setError = _a.setError;
    var _b = React.useState(null), chartData = _b[0], setChartData = _b[1];
    var _c = React.useState([]), tissues = _c[0], setTissues = _c[1];
    var _d = React.useState([]), selectedTissues = _d[0], setSelectedTissues = _d[1];
    var _e = React.useState(null), originalData = _e[0], setOriginalData = _e[1];
    var theme = React.useState("light")[0];
    var chartRef = React.useRef(null);
    var _f = React.useState(""), searchTerm = _f[0], setSearchTerm = _f[1];
    var _g = React.useState("cellLineName"), searchField = _g[0], setSearchField = _g[1];
    var _h = React.useState(null), selectedCategory = _h[0], setSelectedCategory = _h[1];
    var handleSearchChange = function (value) {
        setSearchTerm(value);
    };
    var handleSearchFieldChange = function (value) {
        setSearchField(value);
    };
    var handleTissueToggle = function (tissue) {
        setSelectedTissues(function (prev) {
            return prev.includes(tissue)
                ? prev.filter(function (t) { return t !== tissue; }) // Remove if already selected
                : __spreadArray([tissue], prev, true);
        });
    };
    var getPointColor = function (point, currentTheme, alpha) {
        if (alpha === void 0) { alpha = 0.6; }
        var isHighlighted = searchTerm &&
            String(point[searchField] || "")
                .toLowerCase()
                .includes(searchTerm.toLowerCase());
        if (selectedCategory) {
            if (selectedCategory === "Neutral" && point.geneEffect > -1) {
                return "rgba(59, 130, 246, ".concat(alpha, ")");
            }
            if (selectedCategory === "Dependency" && point.geneEffect <= -1) {
                return "rgba(239, 68, 68, ".concat(alpha, ")");
            }
            if (selectedCategory === "Highlighted Neutral" && isHighlighted && point.geneEffect > -1) {
                return "rgba(34, 197, 94, 1)";
            }
            if (selectedCategory === "Highlighted Dependency" && isHighlighted && point.geneEffect <= -1) {
                return "rgba(234, 179, 8, 1)";
            }
            return "rgba(200, 200, 200, 0.1)"; // Gray out non-selected points
        }
        if (isHighlighted) {
            return point.geneEffect <= -1
                ? "rgba(234, 179, 8, 1)" // Yellow for highlighted dependency
                : "rgba(34, 197, 94, 1)"; // Green for highlighted neutral
        }
        return point.geneEffect <= -1
            ? "rgba(239, 68, 68, ".concat(alpha, ")") // Regular red for dependency
            : "rgba(59, 130, 246, ".concat(alpha, ")"); // Regular blue for neutral
    };
    var getPointRadius = function (point) {
        var isHighlighted = searchTerm &&
            String(point[searchField] || "")
                .toLowerCase()
                .includes(searchTerm.toLowerCase());
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
                                backgroundColor: scatterData.map(function (point) { return getPointColor(point); }),
                                borderColor: scatterData.map(function (point) { return getPointColor(point, theme, 1); }),
                                borderWidth: 1,
                                pointHoverRadius: 8,
                                pointRadius: scatterData.map(function (point) { return getPointRadius(point); }),
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
                    setError(error_1 instanceof Error ? error_1.message : "An error occurred while fetching data.");
                    return [3 /*break*/, 6];
                case 5:
                    setLoading(false);
                    return [7 /*endfinally*/];
                case 6: return [2 /*return*/];
            }
        });
    }); };
    React.useEffect(function () {
        if (ensemblId) {
            fetchData();
        }
    }, [ensemblId]);
    React.useEffect(function () {
        if (originalData) {
            var filteredData = __spreadArray([], originalData.datasets[0].data, true);
            if (selectedTissues.length > 0) {
                filteredData = filteredData.filter(function (point) { return selectedTissues.includes(point.tissue); });
            }
            if (selectedCategory) {
                filteredData = filteredData.filter(function (point) {
                    var isHighlighted = searchTerm &&
                        String(point[searchField] || "")
                            .toLowerCase()
                            .includes(searchTerm.toLowerCase());
                    if (selectedCategory === "Neutral")
                        return point.geneEffect > -1;
                    if (selectedCategory === "Dependency")
                        return point.geneEffect <= -1;
                    if (selectedCategory === "Highlighted Neutral")
                        return isHighlighted && point.geneEffect > -1;
                    if (selectedCategory === "Highlighted Dependency")
                        return isHighlighted && point.geneEffect <= -1;
                    return true;
                });
            }
            setChartData({
                datasets: [
                    __assign(__assign({}, originalData.datasets[0]), { data: filteredData, backgroundColor: filteredData.map(function (point) { return getPointColor(point); }), borderColor: filteredData.map(function (point) { return getPointColor(point, theme, 1); }), pointRadius: filteredData.map(function (point) { return getPointRadius(point); }) }),
                ],
            });
        }
    }, [selectedTissues, searchTerm, searchField, originalData, theme, selectedCategory]);
    var chartOptions = {
        responsive: true,
        maintainAspectRatio: false,
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
                    color: "#1F2937",
                },
                ticks: {
                    font: {
                        size: 14,
                        family: "Inter, sans-serif",
                    },
                    color: "#4B5563",
                },
                grid: {
                    color: "rgba(0, 0, 0, 0.1)",
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
                    color: "#1F2937",
                },
                ticks: {
                    callback: function (value) { return tissues[value] || ""; },
                    stepSize: 0.5,
                    autoSkip: false,
                    font: {
                        size: 12,
                        family: "Inter, sans-serif",
                    },
                    color: "#4B5563",
                },
                grid: {
                    color: "rgba(0, 0, 0, 0.1)",
                },
            },
        },
        plugins: {
            tooltip: {
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
                backgroundColor: "rgba(255, 255, 255, 0.8)",
                titleColor: "#000000",
                bodyColor: "#1F2937",
                titleFont: {
                    size: 14,
                    weight: "bold",
                },
                bodyFont: {
                    size: 12,
                },
                padding: 12,
                cornerRadius: 8,
                borderColor: "rgba(0, 0, 0, 0.1)",
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
                        borderColor: "rgba(185, 28, 28, 0.5)",
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
                            color: "rgba(185, 28, 28, 1)",
                        },
                    },
                },
            },
        },
    };
    return (React.createElement(React.Fragment, null, chartData && (React.createElement(React.Fragment, null,
        React.createElement("div", { className: "flex flex-col items-center sm:space-y-4 lg:flex-row lg:justify-between lg:space-x-4 lg:items-center m-auto w-[90%]" },
            React.createElement("div", { className: "flex flex-col justify-center mt-4 border w-fit p-2 ml-3 border-gray-500 rounded-xl" }, ["Neutral", "Dependency", "Highlighted Neutral", "Highlighted Dependency"].map(function (category) { return (React.createElement("div", { key: category, className: "flex items-center space-x-4 ml-4 cursor-pointer", onClick: function () { return setSelectedCategory(selectedCategory === category ? null : category); } },
                React.createElement("div", { className: "w-4 h-4 rounded-full ".concat(category === "Neutral"
                        ? "bg-blue-400"
                        : category === "Dependency"
                            ? "bg-red-400"
                            : category === "Highlighted Neutral"
                                ? "bg-green-500"
                                : "bg-yellow-500", " ").concat(selectedCategory === category ? "ring-2 ring-black" : "") }),
                React.createElement("p", { className: "text-gray-700 ".concat(selectedCategory === category ? "font-bold" : "") }, category))); })),
            React.createElement(SearchBar, { searchTerm: searchTerm, onSearchChange: handleSearchChange, searchField: searchField, onSearchFieldChange: handleSearchFieldChange }),
            tissues.length > 0 && (React.createElement("div", { className: "mt-4 mr-3" },
                React.createElement(TissueDropdown, { tissues: tissues, selectedTissues: selectedTissues, onTissueToggle: handleTissueToggle }),
                selectedTissues.length > 0 && (React.createElement("div", { className: "mt-2 flex flex-col flex-wrap gap-2 w-fit " }, selectedTissues.map(function (tissue, index) { return (React.createElement("span", { key: index, className: "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800" },
                    tissue,
                    React.createElement("button", { type: "button", className: "flex-shrink-0 ml-1.5 h-4 w-4 rounded-full inline-flex items-center justify-center text-gray-400 hover:bg-gray-200 hover:text-gray-500 focus:outline-none focus:bg-gray-500 focus:text-white", onClick: function () { return handleTissueToggle(tissue); } },
                        React.createElement("span", { className: "sr-only" }, "Remove tissue filter"),
                        "\u00D7"))); })))))),
        React.createElement("div", { className: "relative h-[90vh] m-auto w-[90%]" },
            React.createElement(reactChartjs2.Scatter, { data: chartData, options: chartOptions, ref: chartRef }))))));
};

exports.GeneEssentialityChart = GeneEssentialityChart;
//# sourceMappingURL=index.js.map
