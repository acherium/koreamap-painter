(() => {
    const LYRA = {
        name: "Project Pyxis",
        author: "Acherium",
        contact: "acherium@pm.me",
        version: "2.0.1003",
        date: "24-05-16",
        watermark: true
    };

    const $ = (x) => document.querySelector(x);
    const $a = (x) => document.querySelectorAll(x);
    const SCALEINIT = 10;
    const SCALEMAX = 10;
    const SCALEMIN = 1;
    const SCALELEVEL = 1;
    const COLINIT = {
        fill: {
            r: 177,
            g: 0,
            b: 255
        },
        bg: {
            r: 96,
            g: 146,
            b: 246
        }
    };

    const op = {
        x: 0,
        y: 0,
        s: 1,
        rs: Number(SCALEINIT)
    };
    const col = {
        fill: {
            r: 177,
            g: 0,
            b: 255
        },
        bg: {
            r: 96,
            g: 146,
            b: 246
        }
    };
    const colTemplates = {
        fill: [
            { r: 255, g: 255, b: 255 },
            { r: 230, g: 230, b: 230 },
            { r: 200, g: 200, b: 200 },
            { r: 150, g: 150, b: 150 },
            { r: 100, g: 100, b: 100 },
            { r: 50, g: 50, b: 50 },
            { r: 0, g: 0, b: 0 },
            { r: 177, g: 0, b: 255 },
            { r: 255, g: 14, b: 97 },
            { r: 9, g: 94, b: 217 }
        ],
        bg: [
            { r: 255, g: 255, b: 255 },
            { r: 230, g: 230, b: 230 },
            { r: 200, g: 200, b: 200 },
            { r: 150, g: 150, b: 150 },
            { r: 100, g: 100, b: 100 },
            { r: 50, g: 50, b: 50 },
            { r: 0, g: 0, b: 0 },
            { r: 96, g: 146, b: 246 },
            { r: 119, g: 194, b: 245 },
            { r: 3, g: 207, b: 255 }
        ]
    };
    const colRecents = {
        fill: [
            { r: 255, g: 255, b: 255 },
            { r: 255, g: 255, b: 255 },
            { r: 255, g: 255, b: 255 },
            { r: 255, g: 255, b: 255 },
            { r: 255, g: 255, b: 255 },
            { r: 255, g: 255, b: 255 },
            { r: 255, g: 255, b: 255 },
            { r: 255, g: 255, b: 255 },
            { r: 255, g: 255, b: 255 },
            { r: 255, g: 255, b: 255 }
        ],
        bg: [
            { r: 255, g: 255, b: 255 },
            { r: 255, g: 255, b: 255 },
            { r: 255, g: 255, b: 255 },
            { r: 255, g: 255, b: 255 },
            { r: 255, g: 255, b: 255 },
            { r: 255, g: 255, b: 255 },
            { r: 255, g: 255, b: 255 },
            { r: 255, g: 255, b: 255 },
            { r: 255, g: 255, b: 255 },
            { r: 255, g: 255, b: 255 }
        ]
    };
    const layers = {};
    const layerOps = {
        "SEO": {
            group: document.querySelector("#GROUP-SEO"),
            layers: [
                document.querySelector("#GROUP-SEO-LAYER0"),
                document.querySelector("#GROUP-SEO-LAYER1")
            ],
            options: {
                0: {
                    name: "전역",
                    value: [ 1, 0 ]
                },
                1: {
                    name: "기초자치단체",
                    value: [ 0, 1 ]
                },
                2: {
                    name: "숨김",
                    value: [ 0, 0 ]
                }
            },
            active: 1,
            tabNode: null,
            radioNode: null,
            pageNode: null
        },
        "BUS": {
            group: document.querySelector("#GROUP-BUS"),
            layers: [
                document.querySelector("#GROUP-BUS-LAYER0"),
                document.querySelector("#GROUP-BUS-LAYER1"),
                document.querySelector("#GROUP-BUS-LAYER2"),
                document.querySelector("#GROUP-BUS-LAYER3"),
                document.querySelector("#GROUP-BUS-LAYER4")
            ],
            options: {
                0: {
                    name: "전역",
                    value: [ 1, 0, 0, 0, 0 ]
                },
                1: {
                    name: "기초자치단체 (구 제외)",
                    value: [ 0, 1, 0, 1, 0 ]
                },
                2: {
                    name: "기초자치단체",
                    value: [ 0, 0, 1, 1, 0 ]
                },
                3: {
                    name: "시읍면",
                    value: [ 0, 1, 0, 0, 1 ]
                },
                4: {
                    name: "구읍면",
                    value: [ 0, 0, 1, 0, 1 ]
                },
                5: {
                    name: "숨김",
                    value: [ 0, 0, 0, 0, 0 ]
                }
            },
            active: 2,
            tabNode: null,
            radioNode: null,
            pageNode: null
        },
        "DAE": {
            group: document.querySelector("#GROUP-DAE"),
            layers: [
                document.querySelector("#GROUP-DAE-LAYER0"),
                document.querySelector("#GROUP-DAE-LAYER1"),
                document.querySelector("#GROUP-DAE-LAYER2"),
                document.querySelector("#GROUP-DAE-LAYER3"),
                document.querySelector("#GROUP-DAE-LAYER4")
            ],
            options: {
                0: {
                    name: "전역",
                    value: [ 1, 0, 0, 0, 0 ]
                },
                1: {
                    name: "기초자치단체 (구 제외)",
                    value: [ 0, 1, 0, 1, 0 ]
                },
                2: {
                    name: "기초자치단체",
                    value: [ 0, 0, 1, 1, 0 ]
                },
                3: {
                    name: "시읍면",
                    value: [ 0, 1, 0, 0, 1 ]
                },
                4: {
                    name: "구읍면",
                    value: [ 0, 0, 1, 0, 1 ]
                },
                5: {
                    name: "숨김",
                    value: [ 0, 0, 0, 0, 0 ]
                }
            },
            active: 2,
            tabNode: null,
            radioNode: null,
            pageNode: null
        },
        "INC": {
            group: document.querySelector("#GROUP-INC"),
            layers: [
                document.querySelector("#GROUP-INC-LAYER0"),
                document.querySelector("#GROUP-INC-LAYER1"),
                document.querySelector("#GROUP-INC-LAYER2"),
                document.querySelector("#GROUP-INC-LAYER3"),
                document.querySelector("#GROUP-INC-LAYER4")
            ],
            options: {
                0: {
                    name: "전역",
                    value: [ 1, 0, 0, 0, 0 ]
                },
                1: {
                    name: "기초자치단체 (구 제외)",
                    value: [ 0, 1, 0, 1, 0 ]
                },
                2: {
                    name: "기초자치단체",
                    value: [ 0, 0, 1, 1, 0 ]
                },
                3: {
                    name: "시읍면",
                    value: [ 0, 1, 0, 0, 1 ]
                },
                4: {
                    name: "구읍면",
                    value: [ 0, 0, 1, 0, 1 ]
                },
                5: {
                    name: "숨김",
                    value: [ 0, 0, 0, 0, 0 ]
                }
            },
            active: 2,
            tabNode: null,
            radioNode: null,
            pageNode: null
        },
        "GWJ": {
            group: document.querySelector("#GROUP-GWJ"),
            layers: [
                document.querySelector("#GROUP-GWJ-LAYER0"),
                document.querySelector("#GROUP-GWJ-LAYER1")
            ],
            options: {
                0: {
                    name: "전역",
                    value: [ 1, 0 ]
                },
                1: {
                    name: "기초자치단체",
                    value: [ 0, 1 ]
                },
                2: {
                    name: "숨김",
                    value: [ 0, 0 ]
                }
            },
            active: 1,
            tabNode: null,
            radioNode: null,
            pageNode: null
        },
        "DJN": {
            group: document.querySelector("#GROUP-DJN"),
            layers: [
                document.querySelector("#GROUP-DJN-LAYER0"),
                document.querySelector("#GROUP-DJN-LAYER1")
            ],
            options: {
                0: {
                    name: "전역",
                    value: [ 1, 0 ]
                },
                1: {
                    name: "기초자치단체",
                    value: [ 0, 1 ]
                },
                2: {
                    name: "숨김",
                    value: [ 0, 0 ]
                }
            },
            active: 1,
            tabNode: null,
            radioNode: null,
            pageNode: null
        },
        "ULS": {
            group: document.querySelector("#GROUP-ULS"),
            layers: [
                document.querySelector("#GROUP-ULS-LAYER0"),
                document.querySelector("#GROUP-ULS-LAYER1"),
                document.querySelector("#GROUP-ULS-LAYER2"),
                document.querySelector("#GROUP-ULS-LAYER3"),
                document.querySelector("#GROUP-ULS-LAYER4")
            ],
            options: {
                0: {
                    name: "전역",
                    value: [ 1, 0, 0, 0, 0 ]
                },
                1: {
                    name: "기초자치단체 (구 제외)",
                    value: [ 0, 1, 0, 1, 0 ]
                },
                2: {
                    name: "기초자치단체",
                    value: [ 0, 0, 1, 1, 0 ]
                },
                3: {
                    name: "시읍면",
                    value: [ 0, 1, 0, 0, 1 ]
                },
                4: {
                    name: "구읍면",
                    value: [ 0, 0, 1, 0, 1 ]
                },
                5: {
                    name: "숨김",
                    value: [ 0, 0, 0, 0, 0 ]
                }
            },
            active: 2,
            tabNode: null,
            radioNode: null,
            pageNode: null
        },
        "SEJ": {
            group: document.querySelector("#GROUP-SEJ"),
            layers: [
                document.querySelector("#GROUP-SEJ-LAYER0"),
                document.querySelector("#GROUP-SEJ-LAYER1"),
                document.querySelector("#GROUP-SEJ-LAYER2"),
                document.querySelector("#GROUP-SEJ-LAYER3")
            ],
            options: {
                0: {
                    name: "전역",
                    value: [ 1, 0, 0, 0 ]
                },
                1: {
                    name: "시내지역 및 시외지역",
                    value: [ 0, 1, 1, 0 ]
                },
                2: {
                    name: "시읍면",
                    value: [ 0, 1, 0, 1 ]
                },
                3: {
                    name: "숨김",
                    value: [ 0, 0, 0, 0 ]
                },
            },
            active: 0,
            tabNode: null,
            radioNode: null,
            pageNode: null
        },
        "SGG": {
            group: document.querySelector("#GROUP-SGG"),
            layers: [
                document.querySelector("#GROUP-SGG-LAYER0"),
                document.querySelector("#GROUP-SGG-LAYER1"),
                document.querySelector("#GROUP-SGG-LAYER2"),
                document.querySelector("#GROUP-SGG-LAYER3"),
                document.querySelector("#GROUP-SGG-LAYER4"),
                document.querySelector("#GROUP-SGG-LAYER5"),
                document.querySelector("#GROUP-SGG-LAYER6"),
                document.querySelector("#GROUP-SGG-LAYER7"),
                document.querySelector("#GROUP-SGG-LAYER8"),
                document.querySelector("#GROUP-SGG-LAYER9"),
                document.querySelector("#GROUP-SGG-LAYER10"),
                document.querySelector("#GROUP-SGG-LAYER11"),
                document.querySelector("#GROUP-SGG-LAYER12"),
                document.querySelector("#GROUP-SGG-LAYER13"),
                document.querySelector("#GROUP-SGG-LAYER14"),
                document.querySelector("#GROUP-SGG-LAYER15"),
                document.querySelector("#GROUP-SGG-LAYER16")
            ],
            options: {
                0: {
                    name: "전역",
                    value: [ 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ]
                },
                1: {
                    name: "기초자치단체",
                    value: [ 0, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0 ]
                },
                2: {
                    name: "기초자치단체 및 구",
                    value: [ 0, 0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0 ]
                },
                3: {
                    name: "시내지역 및 시외지역",
                    value: [ 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 1, 1, 0, 1, 0 ]
                },
                4: {
                    name: "시내지역, 구 및 시외지역",
                    value: [ 0, 0, 1, 1, 0, 0, 0, 1, 0, 1, 0, 0, 1, 1, 0, 1, 0 ]
                },
                5: {
                    name: "시읍면",
                    value: [ 0, 1, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1 ]
                },
                6: {
                    name: "구읍면",
                    value: [ 0, 0, 1, 1, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 1 ]
                },
                7: {
                    name: "숨김",
                    value: [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ]
                }
            },
            active: 1,
            tabNode: null,
            radioNode: null,
            pageNode: null
        },
        "NCC": {
            group: document.querySelector("#GROUP-NCC"),
            layers: [
                document.querySelector("#GROUP-NCC-LAYER0"),
                document.querySelector("#GROUP-NCC-LAYER1"),
                document.querySelector("#GROUP-NCC-LAYER2"),
                document.querySelector("#GROUP-NCC-LAYER3"),
                document.querySelector("#GROUP-NCC-LAYER4"),
                document.querySelector("#GROUP-NCC-LAYER5"),
                document.querySelector("#GROUP-NCC-LAYER6"),
                document.querySelector("#GROUP-NCC-LAYER7"),
                document.querySelector("#GROUP-NCC-LAYER8"),
                document.querySelector("#GROUP-NCC-LAYER9"),
                document.querySelector("#GROUP-NCC-LAYER10"),
                document.querySelector("#GROUP-NCC-LAYER11"),
                document.querySelector("#GROUP-NCC-LAYER12"),
                document.querySelector("#GROUP-NCC-LAYER13")
            ],
            options: {
                0: {
                    name: "전역",
                    value: [ 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ]
                },
                1: {
                    name: "기초자치단체",
                    value: [ 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0 ]
                },
                2: {
                    name: "기초자치단체 및 구",
                    value: [ 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0 ]
                },
                3: {
                    name: "시내지역 및 시외지역",
                    value: [ 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 1, 0, 1, 0 ]
                },
                4: {
                    name: "시내지역, 구 및 시외지역",
                    value: [ 0, 0, 0, 0, 1, 0, 1, 0, 0, 1, 1, 0, 1, 0 ]
                },
                5: {
                    name: "시읍면",
                    value: [ 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1 ]
                },
                6: {
                    name: "구읍면",
                    value: [ 0, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 1 ]
                },
                7: {
                    name: "숨김",
                    value: [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ]
                }
            },
            active: 1,
            tabNode: null,
            radioNode: null,
            pageNode: null
        },
        "SCC": {
            group: document.querySelector("#GROUP-SCC"),
            layers: [
                document.querySelector("#GROUP-SCC-LAYER0"),
                document.querySelector("#GROUP-SCC-LAYER1"),
                document.querySelector("#GROUP-SCC-LAYER2"),
                document.querySelector("#GROUP-SCC-LAYER3"),
                document.querySelector("#GROUP-SCC-LAYER4"),
                document.querySelector("#GROUP-SCC-LAYER5"),
                document.querySelector("#GROUP-SCC-LAYER6"),
                document.querySelector("#GROUP-SCC-LAYER7"),
                document.querySelector("#GROUP-SCC-LAYER8"),
                document.querySelector("#GROUP-SCC-LAYER9"),
                document.querySelector("#GROUP-SCC-LAYER10"),
                document.querySelector("#GROUP-SCC-LAYER11"),
                document.querySelector("#GROUP-SCC-LAYER12"),
                document.querySelector("#GROUP-SCC-LAYER13")
            ],
            options: {
                0: {
                    name: "전역",
                    value: [ 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ]
                },
                1: {
                    name: "기초자치단체",
                    value: [ 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0 ]
                },
                2: {
                    name: "기초자치단체 및 구",
                    value: [ 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0 ]
                },
                3: {
                    name: "시내지역 및 시외지역",
                    value: [ 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 1, 0, 1, 0 ]
                },
                4: {
                    name: "시내지역, 구 및 시외지역",
                    value: [ 0, 0, 0, 0, 1, 0, 1, 0, 0, 1, 1, 0, 1, 0 ]
                },
                5: {
                    name: "시읍면",
                    value: [ 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1 ]
                },
                6: {
                    name: "구읍면",
                    value: [ 0, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 1 ]
                },
                7: {
                    name: "숨김",
                    value: [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ]
                }
            },
            active: 1,
            tabNode: null,
            radioNode: null,
            pageNode: null
        },
        "NJE": {
            group: document.querySelector("#GROUP-NJE"),
            layers: [
                document.querySelector("#GROUP-NJE-LAYER0"),
                document.querySelector("#GROUP-NJE-LAYER1"),
                document.querySelector("#GROUP-NJE-LAYER2"),
                document.querySelector("#GROUP-NJE-LAYER3"),
                document.querySelector("#GROUP-NJE-LAYER4"),
                document.querySelector("#GROUP-NJE-LAYER5"),
                document.querySelector("#GROUP-NJE-LAYER6"),
                document.querySelector("#GROUP-NJE-LAYER7"),
                document.querySelector("#GROUP-NJE-LAYER8")
            ],
            options: {
                0: {
                    name: "전역",
                    value: [ 1, 0, 0, 0, 0, 0, 0, 0, 0 ]
                },
                1: {
                    name: "기초자치단체",
                    value: [ 0, 1, 0, 1, 0, 0, 0, 1, 0 ]
                },
                2: {
                    name: "기초자치단체 및 구",
                    value: [ 0, 0, 1, 1, 0, 0, 0, 1, 0 ]
                },
                3: {
                    name: "시내지역 및 시외지역",
                    value: [ 0, 1, 0, 0, 1, 1, 0, 1, 0 ]
                },
                4: {
                    name: "시내지역, 구 및 시외지역",
                    value: [ 0, 0, 1, 0, 1, 1, 0, 1, 0 ]
                },
                5: {
                    name: "시읍면",
                    value: [ 0, 1, 0, 0, 1, 0, 1, 0, 1 ]
                },
                6: {
                    name: "구읍면",
                    value: [ 0, 0, 1, 0, 1, 0, 1, 0, 1 ]
                },
                7: {
                    name: "숨김",
                    value: [ 0, 0, 0, 0, 0, 0, 0, 0, 0 ]
                }
            },
            active: 1,
            tabNode: null,
            radioNode: null,
            pageNode: null
        },
        "SJE": {
            group: document.querySelector("#GROUP-SJE"),
            layers: [
                document.querySelector("#GROUP-SJE-LAYER0"),
                document.querySelector("#GROUP-SJE-LAYER1"),
                document.querySelector("#GROUP-SJE-LAYER2"),
                document.querySelector("#GROUP-SJE-LAYER3"),
                document.querySelector("#GROUP-SJE-LAYER4"),
                document.querySelector("#GROUP-SJE-LAYER5"),
                document.querySelector("#GROUP-SJE-LAYER6"),
                document.querySelector("#GROUP-SJE-LAYER7")
            ],
            options: {
                0: {
                    name: "전역",
                    value: [ 1, 0, 0, 0, 0, 0, 0, 0 ]
                },
                1: {
                    name: "기초자치단체",
                    value: [ 0, 1, 1, 0, 0, 0, 1, 0 ]
                },
                2: {
                    name: "기초자치단체 및 시내지역",
                    value: [ 0, 1, 0, 1, 1, 0, 1, 0 ]
                },
                3: {
                    name: "시읍면",
                    value: [ 0, 1, 0, 1, 0, 1, 0, 1 ]
                },
                4: {
                    name: "숨김",
                    value: [ 0, 0, 0, 0, 0, 0, 0, 0 ]
                }
            },
            active: 1,
            tabNode: null,
            radioNode: null,
            pageNode: null
        },
        "NGS": {
            group: document.querySelector("#GROUP-NGS"),
            layers: [
                document.querySelector("#GROUP-NGS-LAYER0"),
                document.querySelector("#GROUP-NGS-LAYER1"),
                document.querySelector("#GROUP-NGS-LAYER2"),
                document.querySelector("#GROUP-NGS-LAYER3"),
                document.querySelector("#GROUP-NGS-LAYER4"),
                document.querySelector("#GROUP-NGS-LAYER5"),
                document.querySelector("#GROUP-NGS-LAYER6"),
                document.querySelector("#GROUP-NGS-LAYER7"),
                document.querySelector("#GROUP-NGS-LAYER8"),
                document.querySelector("#GROUP-NGS-LAYER9"),
                document.querySelector("#GROUP-NGS-LAYER10"),
                document.querySelector("#GROUP-NGS-LAYER11"),
                document.querySelector("#GROUP-NGS-LAYER12"),
                document.querySelector("#GROUP-NGS-LAYER13")
            ],
            options: {
                0: {
                    name: "전역",
                    value: [ 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ]
                },
                1: {
                    name: "기초자치단체",
                    value: [ 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0 ]
                },
                2: {
                    name: "기초자치단체 및 구",
                    value: [ 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0 ]
                },
                3: {
                    name: "시내지역 및 시외지역",
                    value: [ 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 1, 0, 1, 0 ]
                },
                4: {
                    name: "시내지역, 구 및 시외지역",
                    value: [ 0, 0, 0, 0, 1, 0, 1, 0, 0, 1, 1, 0, 1, 0 ]
                },
                5: {
                    name: "시읍면",
                    value: [ 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1 ]
                },
                6: {
                    name: "구읍면",
                    value: [ 0, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 1 ]
                },
                7: {
                    name: "숨김",
                    value: [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ]
                }
            },
            active: 1,
            tabNode: null,
            radioNode: null,
            pageNode: null
        },
        "SGS": {
            group: document.querySelector("#GROUP-SGS"),
            layers: [
                document.querySelector("#GROUP-SGS-LAYER0"),
                document.querySelector("#GROUP-SGS-LAYER1"),
                document.querySelector("#GROUP-SGS-LAYER2"),
                document.querySelector("#GROUP-SGS-LAYER3"),
                document.querySelector("#GROUP-SGS-LAYER4"),
                document.querySelector("#GROUP-SGS-LAYER5"),
                document.querySelector("#GROUP-SGS-LAYER6"),
                document.querySelector("#GROUP-SGS-LAYER7"),
                document.querySelector("#GROUP-SGS-LAYER8"),
                document.querySelector("#GROUP-SGS-LAYER9"),
                document.querySelector("#GROUP-SGS-LAYER10"),
                document.querySelector("#GROUP-SGS-LAYER11"),
                document.querySelector("#GROUP-SGS-LAYER12"),
                document.querySelector("#GROUP-SGS-LAYER13")
            ],
            options: {
                0: {
                    name: "전역",
                    value: [ 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ]
                },
                1: {
                    name: "기초자치단체",
                    value: [ 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0 ]
                },
                2: {
                    name: "기초자치단체 및 구",
                    value: [ 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0 ]
                },
                3: {
                    name: "시내지역 및 시외지역",
                    value: [ 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 1, 0, 1, 0 ]
                },
                4: {
                    name: "시내지역, 구 및 시외지역",
                    value: [ 0, 0, 0, 0, 1, 0, 1, 0, 0, 1, 1, 0, 1, 0 ]
                },
                5: {
                    name: "시읍면",
                    value: [ 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1 ]
                },
                6: {
                    name: "구읍면",
                    value: [ 0, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 1 ]
                },
                7: {
                    name: "숨김",
                    value: [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ]
                }
            },
            active: 1,
            tabNode: null,
            radioNode: null,
            pageNode: null
        },
        "GWN": {
            group: document.querySelector("#GROUP-GWN"),
            layers: [
                document.querySelector("#GROUP-GWN-LAYER0"),
                document.querySelector("#GROUP-GWN-LAYER1"),
                document.querySelector("#GROUP-GWN-LAYER2"),
                document.querySelector("#GROUP-GWN-LAYER3"),
                document.querySelector("#GROUP-GWN-LAYER4"),
                document.querySelector("#GROUP-GWN-LAYER5"),
                document.querySelector("#GROUP-GWN-LAYER6"),
                document.querySelector("#GROUP-GWN-LAYER7")
            ],
            options: {
                0: {
                    name: "전역",
                    value: [ 1, 0, 0, 0, 0, 0, 0, 0 ]
                },
                1: {
                    name: "기초자치단체",
                    value: [ 0, 1, 1, 0, 0, 0, 1, 0 ]
                },
                2: {
                    name: "기초자치단체 및 시내지역",
                    value: [ 0, 1, 0, 1, 1, 0, 1, 0 ]
                },
                3: {
                    name: "시읍면",
                    value: [ 0, 1, 0, 1, 0, 1, 0, 1 ]
                },
                4: {
                    name: "숨김",
                    value: [ 0, 0, 0, 0, 0, 0, 0, 0 ]
                }
            },
            active: 1,
            tabNode: null,
            radioNode: null,
            pageNode: null
        },
        "JJU": {
            group: document.querySelector("#GROUP-JJU"),
            layers: [
                document.querySelector("#GROUP-JJU-LAYER0"),
                document.querySelector("#GROUP-JJU-LAYER1"),
                document.querySelector("#GROUP-JJU-LAYER2"),
                document.querySelector("#GROUP-JJU-LAYER3"),
                document.querySelector("#GROUP-JJU-LAYER4")
            ],
            options: {
                0: {
                    name: "전역",
                    value: [ 1, 0, 0, 0, 0 ]
                },
                1: {
                    name: "행정시",
                    value: [ 0, 1, 0, 0, 0 ]
                },
                2: {
                    name: "시내지역 및 시외지역",
                    value: [ 0, 0, 1, 1, 0 ]
                },
                3: {
                    name: "시읍면",
                    value: [ 0, 0, 1, 0, 1 ]
                },
                4: {
                    name: "숨김",
                    value: [ 0, 0, 0, 0, 0 ]
                }
            },
            active: 1,
            tabNode: null,
            radioNode: null,
            pageNode: null
        },
        "XNG": {
            group: document.querySelector("#GROUP-XNG"),
            layers: [
                document.querySelector("#GROUP-XNG-LAYER0"),
                document.querySelector("#GROUP-XNG-LAYER1")
            ],
            options: {
                0: {
                    name: "전역",
                    value: [ 1, 0 ]
                },
                1: {
                    name: "하위행정구역",
                    value: [ 0, 1 ]
                },
                2: {
                    name: "숨김",
                    value: [ 0, 0 ]
                }
            },
            active: 1,
            tabNode: null,
            radioNode: null,
            pageNode: null
        },
        "XGW": {
            group: document.querySelector("#GROUP-XGW"),
            layers: [
                document.querySelector("#GROUP-XGW-LAYER0"),
                document.querySelector("#GROUP-XGW-LAYER1")
            ],
            options: {
                0: {
                    name: "전역",
                    value: [ 1, 0 ]
                },
                1: {
                    name: "하위행정구역",
                    value: [ 0, 1 ]
                },
                2: {
                    name: "숨김",
                    value: [ 0, 0 ]
                }
            },
            active: 1,
            tabNode: null,
            radioNode: null,
            pageNode: null
        },
        "XHW": {
            group: document.querySelector("#GROUP-XHW"),
            layers: [
                document.querySelector("#GROUP-XHW-LAYER0"),
                document.querySelector("#GROUP-XHW-LAYER1")
            ],
            options: {
                0: {
                    name: "전역",
                    value: [ 1, 0 ]
                },
                1: {
                    name: "하위행정구역",
                    value: [ 0, 1 ]
                },
                2: {
                    name: "숨김",
                    value: [ 0, 0 ]
                }
            },
            active: 1,
            tabNode: null,
            radioNode: null,
            pageNode: null
        },
        "XNP": {
            group: document.querySelector("#GROUP-XNP"),
            layers: [
                document.querySelector("#GROUP-XNP-LAYER0"),
                document.querySelector("#GROUP-XNP-LAYER1")
            ],
            options: {
                0: {
                    name: "전역",
                    value: [ 1, 0 ]
                },
                1: {
                    name: "하위행정구역",
                    value: [ 0, 1 ]
                },
                2: {
                    name: "숨김",
                    value: [ 0, 0 ]
                }
            },
            active: 1,
            tabNode: null,
            radioNode: null,
            pageNode: null
        },
        "XSP": {
            group: document.querySelector("#GROUP-XSP"),
            layers: [
                document.querySelector("#GROUP-XSP-LAYER0"),
                document.querySelector("#GROUP-XSP-LAYER1")
            ],
            options: {
                0: {
                    name: "전역",
                    value: [ 1, 0 ]
                },
                1: {
                    name: "하위행정구역",
                    value: [ 0, 1 ]
                },
                2: {
                    name: "숨김",
                    value: [ 0, 0 ]
                }
            },
            active: 1,
            tabNode: null,
            radioNode: null,
            pageNode: null
        },
        "XNH": {
            group: document.querySelector("#GROUP-XNH"),
            layers: [
                document.querySelector("#GROUP-XNH-LAYER0"),
                document.querySelector("#GROUP-XNH-LAYER1")
            ],
            options: {
                0: {
                    name: "전역",
                    value: [ 1, 0 ]
                },
                1: {
                    name: "하위행정구역",
                    value: [ 0, 1 ]
                },
                2: {
                    name: "숨김",
                    value: [ 0, 0 ]
                }
            },
            active: 1,
            tabNode: null,
            radioNode: null,
            pageNode: null
        },
        "XSH": {
            group: document.querySelector("#GROUP-XSH"),
            layers: [
                document.querySelector("#GROUP-XSH-LAYER0"),
                document.querySelector("#GROUP-XSH-LAYER1")
            ],
            options: {
                0: {
                    name: "전역",
                    value: [ 1, 0 ]
                },
                1: {
                    name: "하위행정구역",
                    value: [ 0, 1 ]
                },
                2: {
                    name: "숨김",
                    value: [ 0, 0 ]
                }
            },
            active: 1,
            tabNode: null,
            radioNode: null,
            pageNode: null
        }
    };
    const areas = {};
    let exportCode = "";
    const history = [];

    const REGIONS = {
        "SEO": {
            name: [ "서울시", "서울", "특별시" ],
            sub: {
                "DIS0": {
                    name: [ "종로구", "종로", "구" ],
                    sub: {}
                },
                "DIS1": {
                    name: [ "중구", "중", "구" ],
                    sub: {}
                },
                "DIS2": {
                    name: [ "용산구", "용산", "구" ],
                    sub: {}
                },
                "DIS3": {
                    name: [ "성동구", "성동", "구" ],
                    sub: {}
                },
                "DIS4": {
                    name: [ "광진구", "광진", "구" ],
                    sub: {}
                },
                "DIS5": {
                    name: [ "동대문구", "동대문", "구" ],
                    sub: {}
                },
                "DIS6": {
                    name: [ "중랑구", "중랑", "구" ],
                    sub: {}
                },
                "DIS7": {
                    name: [ "성북구", "성북", "구" ],
                    sub: {}
                },
                "DIS8": {
                    name: [ "강북구", "강북", "구" ],
                    sub: {}
                },
                "DIS9": {
                    name: [ "도봉구", "도봉", "구" ],
                    sub: {}
                },
                "DIS10": {
                    name: [ "노원구", "노원", "구" ],
                    sub: {}
                },
                "DIS11": {
                    name: [ "은평구", "은평", "구" ],
                    sub: {}
                },
                "DIS12": {
                    name: [ "서대문구", "서대문", "구" ],
                    sub: {}
                },
                "DIS13": {
                    name: [ "마포구", "마포", "구" ],
                    sub: {}
                },
                "DIS14": {
                    name: [ "양천구", "양천", "구" ],
                    sub: {}
                },
                "DIS15": {
                    name: [ "강서구", "강서", "구" ],
                    sub: {}
                },
                "DIS16": {
                    name: [ "구로구", "구로", "구" ],
                    sub: {}
                },
                "DIS17": {
                    name: [ "금천구", "금천", "구" ],
                    sub: {}
                },
                "DIS18": {
                    name: [ "영등포구", "영등포", "구" ],
                    sub: {}
                },
                "DIS19": {
                    name: [ "동작구", "동작", "구" ],
                    sub: {}
                },
                "DIS20": {
                    name: [ "관악구", "관악", "구" ],
                    sub: {}
                },
                "DIS21": {
                    name: [ "서초구", "서초", "구" ],
                    sub: {}
                },
                "DIS22": {
                    name: [ "강남구", "강남", "구" ],
                    sub: {}
                },
                "DIS23": {
                    name: [ "송파구", "송파", "구" ],
                    sub: {}
                },
                "DIS24": {
                    name: [ "강동구", "강동", "구" ],
                    sub: {}
                }
            }
        },
        "BUS": {
            name: [ "부산시", "부산", "광역시" ],
            sub: {
                "BUS": {
                    name: [ "시내지역", "시내", "시내지역" ],
                    sub: {}
                },
                "DRA": {
                    name: [ "기장군", "기장", "군" ],
                    sub: {
                        "VIL0": {
                            name: [ "기장읍", "기장", "읍" ],
                            sub: {}
                        },
                        "VIL1": {
                            name: [ "장안읍", "장안", "읍" ],
                            sub: {}
                        },
                        "VIL2": {
                            name: [ "정관읍", "정관", "읍" ],
                            sub: {}
                        },
                        "VIL3": {
                            name: [ "일광읍", "일광", "읍" ],
                            sub: {}
                        },
                        "VIL4": {
                            name: [ "철마면", "철마", "면" ],
                            sub: {}
                        },
                    }
                },
                "DIS0": {
                    name: [ "중구", "중", "구" ],
                    sub: {}
                },
                "DIS1": {
                    name: [ "서구", "서", "구" ],
                    sub: {}
                },
                "DIS2": {
                    name: [ "동구", "동", "구" ],
                    sub: {}
                },
                "DIS3": {
                    name: [ "영도구", "영도", "구" ],
                    sub: {}
                },
                "DIS4": {
                    name: [ "부산진구", "부산진", "구" ],
                    sub: {}
                },
                "DIS5": {
                    name: [ "동래구", "동래", "구" ],
                    sub: {}
                },
                "DIS6": {
                    name: [ "남구", "남", "구" ],
                    sub: {}
                },
                "DIS7": {
                    name: [ "북구", "북", "구" ],
                    sub: {}
                },
                "DIS8": {
                    name: [ "해운대구", "해운대", "구" ],
                    sub: {}
                },
                "DIS9": {
                    name: [ "사하구", "사하", "구" ],
                    sub: {}
                },
                "DIS10": {
                    name: [ "금정구", "금정", "구" ],
                    sub: {}
                },
                "DIS11": {
                    name: [ "강서구", "강서", "구" ],
                    sub: {}
                },
                "DIS12": {
                    name: [ "연제구", "연제", "구" ],
                    sub: {}
                },
                "DIS13": {
                    name: [ "수영구", "수영", "구" ],
                    sub: {}
                },
                "DIS14": {
                    name: [ "사상구", "사상", "구" ],
                    sub: {}
                }
            }
        },
        "DAE": {
            name: [ "대구시", "대구", "광역시" ],
            sub: {
                "DAE": {
                    name: [ "시내지역", "시내", "시내지역" ],
                    sub: {}
                },
                "DAL": {
                    name: [ "달성군", "달성", "군" ],
                    sub: {
                        "VIL0": {
                            name: [ "논공읍", "논공", "읍" ],
                            sub: {}
                        },
                        "VIL1": {
                            name: [ "다사읍", "다사", "읍" ],
                            sub: {}
                        },
                        "VIL2": {
                            name: [ "옥포읍", "옥포", "읍" ],
                            sub: {}
                        },
                        "VIL3": {
                            name: [ "유가읍", "유가", "읍" ],
                            sub: {}
                        },
                        "VIL4": {
                            name: [ "현풍읍", "현풍", "읍" ],
                            sub: {}
                        },
                        "VIL5": {
                            name: [ "화원읍", "화원", "읍" ],
                            sub: {}
                        },
                        "VIL6": {
                            name: [ "가창면", "가창", "면" ],
                            sub: {}
                        },
                        "VIL7": {
                            name: [ "구지면", "구지", "면" ],
                            sub: {}
                        },
                        "VIL8": {
                            name: [ "하빈면", "하빈", "면" ],
                            sub: {}
                        }
                    }
                },
                "GWI": {
                    name: [ "군위군", "군위", "군" ],
                    sub: {
                        "VIL0": {
                            name: [ "군위읍", "군위", "읍" ],
                            sub: {}
                        },
                        "VIL1": {
                            name: [ "부계면", "부계", "면" ],
                            sub: {}
                        },
                        "VIL2": {
                            name: [ "산성면", "산성", "면" ],
                            sub: {}
                        },
                        "VIL3": {
                            name: [ "삼국유사면", "삼국유사", "면" ],
                            sub: {}
                        },
                        "VIL4": {
                            name: [ "소보면", "소보", "면" ],
                            sub: {}
                        },
                        "VIL5": {
                            name: [ "우보면", "우보", "면" ],
                            sub: {}
                        },
                        "VIL6": {
                            name: [ "의흥면", "의흥", "면" ],
                            sub: {}
                        },
                        "VIL7": {
                            name: [ "효령면", "효령", "면" ],
                            sub: {}
                        }
                    }
                },
                "DIS0": {
                    name: [ "중구", "중", "구" ],
                    sub: {}
                },
                "DIS1": {
                    name: [ "동구", "동", "구" ],
                    sub: {}
                },
                "DIS2": {
                    name: [ "서구", "서", "구" ],
                    sub: {}
                },
                "DIS3": {
                    name: [ "남구", "남", "구" ],
                    sub: {}
                },
                "DIS4": {
                    name: [ "북구", "북", "구" ],
                    sub: {}
                },
                "DIS5": {
                    name: [ "수성구", "수성", "구" ],
                    sub: {}
                },
                "DIS6": {
                    name: [ "달서구", "달서", "구" ],
                    sub: {}
                }
            }
        },
        "INC": {
            name: [ "인천시", "인천", "광역시" ],
            sub: {
                "INC": {
                    name: [ "시내지역", "시내", "시내지역" ],
                    sub: {}
                },
                "GHW": {
                    name: [ "강화군", "강화", "군" ],
                    sub: {
                        "VIL0": {
                            name: [ "강화읍", "강화", "읍" ],
                            sub: {}
                        },
                        "VIL1": {
                            name: [ "교동면", "교동", "면" ],
                            sub: {}
                        },
                        "VIL2": {
                            name: [ "길상면", "길상", "면" ],
                            sub: {}
                        },
                        "VIL3": {
                            name: [ "내가면", "내가", "면" ],
                            sub: {}
                        },
                        "VIL4": {
                            name: [ "불은면", "불은", "면" ],
                            sub: {}
                        },
                        "VIL5": {
                            name: [ "삼산면", "삼산", "면" ],
                            sub: {}
                        },
                        "VIL6": {
                            name: [ "서도면", "서도", "면" ],
                            sub: {}
                        },
                        "VIL7": {
                            name: [ "선원면", "선원", "면" ],
                            sub: {}
                        },
                        "VIL8": {
                            name: [ "송해면", "송해", "면" ],
                            sub: {}
                        },
                        "VIL9": {
                            name: [ "양도면", "양도", "면" ],
                            sub: {}
                        },
                        "VIL10": {
                            name: [ "양사면", "양사", "면" ],
                            sub: {}
                        },
                        "VIL11": {
                            name: [ "하점면", "하점", "면" ],
                            sub: {}
                        },
                        "VIL12": {
                            name: [ "화도면", "화도", "면" ],
                            sub: {}
                        }
                    }
                },
                "OJI": {
                    name: [ "옹진군", "옹진", "군" ],
                    sub: {
                        "VIL0": {
                            name: [ "대청면", "대청", "면" ],
                            sub: {}
                        },
                        "VIL1": {
                            name: [ "덕적면", "덕적", "면" ],
                            sub: {}
                        },
                        "VIL2": {
                            name: [ "백령면", "백령", "면" ],
                            sub: {}
                        },
                        "VIL3": {
                            name: [ "북도면", "북도", "면" ],
                            sub: {}
                        },
                        "VIL4": {
                            name: [ "연평면", "연평", "면" ],
                            sub: {}
                        },
                        "VIL5": {
                            name: [ "영흥면", "영흥", "면" ],
                            sub: {}
                        },
                        "VIL6": {
                            name: [ "자월면", "자월", "면" ],
                            sub: {}
                        }
                    }
                },
                "DIS0": {
                    name: [ "중구", "중", "구" ],
                    sub: {}
                },
                "DIS1": {
                    name: [ "동구", "동", "구" ],
                    sub: {}
                },
                "DIS2": {
                    name: [ "미추홀구", "미추홀", "구" ],
                    sub: {}
                },
                "DIS3": {
                    name: [ "연수구", "연수", "구" ],
                    sub: {}
                },
                "DIS4": {
                    name: [ "남동구", "남동", "구" ],
                    sub: {}
                },
                "DIS5": {
                    name: [ "부평구", "부평", "구" ],
                    sub: {}
                },
                "DIS6": {
                    name: [ "계양구", "계양", "구" ],
                    sub: {}
                },
                "DIS7": {
                    name: [ "서구", "서", "구" ],
                    sub: {}
                }
            }
        },
        "GWJ": {
            name: [ "광주시", "광주", "광역시" ],
            sub: {
                "DIS0": {
                    name: [ "동구", "동", "구" ],
                    sub: {}
                },
                "DIS1": {
                    name: [ "서구", "서", "구" ],
                    sub: {}
                },
                "DIS2": {
                    name: [ "남구", "남", "구" ],
                    sub: {}
                },
                "DIS3": {
                    name: [ "북구", "북", "구" ],
                    sub: {}
                },
                "DIS4": {
                    name: [ "광산구", "광산", "구" ],
                    sub: {}
                }
            }
        },
        "DJN": {
            name: [ "대전시", "대전", "광역시" ],
            sub: {
                "DIS0": {
                    name: [ "동구", "동", "구" ],
                    sub: {}
                },
                "DIS1": {
                    name: [ "중구", "중", "구" ],
                    sub: {}
                },
                "DIS2": {
                    name: [ "서구", "서", "구" ],
                    sub: {}
                },
                "DIS3": {
                    name: [ "유성구", "유성", "구" ],
                    sub: {}
                },
                "DIS4": {
                    name: [ "대덕구", "대덕", "구" ],
                    sub: {}
                }
            }
        },
        "ULS": {
            name: [ "울산시", "울산", "광역시" ],
            sub: {
                "ULS": {
                    name: [ "시내지역", "시내", "시내지역" ],
                    sub: {}
                },
                "ULJ": {
                    name: [ "울주군", "울주", "군" ],
                    sub: {
                        "VIL0": {
                            name: [ "범서읍", "범서", "읍" ],
                            sub: {}
                        },
                        "VIL1": {
                            name: [ "언양읍", "언양", "읍" ],
                            sub: {}
                        },
                        "VIL2": {
                            name: [ "온산읍", "온산", "읍" ],
                            sub: {}
                        },
                        "VIL3": {
                            name: [ "온양읍", "온양", "읍" ],
                            sub: {}
                        },
                        "VIL4": {
                            name: [ "청량읍", "청량", "읍" ],
                            sub: {}
                        },
                        "VIL5": {
                            name: [ "삼남읍", "삼남", "읍" ],
                            sub: {}
                        },
                        "VIL6": {
                            name: [ "두서면", "두서", "면" ],
                            sub: {}
                        },
                        "VIL7": {
                            name: [ "두동면", "두동", "면" ],
                            sub: {}
                        },
                        "VIL8": {
                            name: [ "삼동면", "삼동", "면" ],
                            sub: {}
                        },
                        "VIL9": {
                            name: [ "상북면", "상북", "면" ],
                            sub: {}
                        },
                        "VIL10": {
                            name: [ "서생면", "서생", "면" ],
                            sub: {}
                        },
                        "VIL11": {
                            name: [ "웅촌면", "웅촌", "면" ],
                            sub: {}
                        }
                    }
                },
                "DIS0": {
                    name: [ "중구", "중", "구" ],
                    sub: {}
                },
                "DIS1": {
                    name: [ "남구", "남", "구" ],
                    sub: {}
                },
                "DIS2": {
                    name: [ "동구", "동", "구" ],
                    sub: {}
                },
                "DIS3": {
                    name: [ "북구", "북", "구" ],
                    sub: {}
                }
            }
        },
        "SEJ": {
            name: [ "세종시", "세종", "특별자치시" ],
            sub: {
                "URBAN": {
                    name: [ "시내지역", "시내", "시내지역" ],
                    sub: {}
                },
                "RURAL": {
                    name: [ "시외지역", "시외", "시외지역" ],
                    sub: {}
                },
                "VIL0": {
                    name: [ "조치원읍", "조치원", "읍" ],
                    sub: {}
                },
                "VIL1": {
                    name: [ "금남면", "금남", "면" ],
                    sub: {}
                },
                "VIL2": {
                    name: [ "부강면", "부강", "면" ],
                    sub: {}
                },
                "VIL3": {
                    name: [ "소정면", "소정", "면" ],
                    sub: {}
                },
                "VIL4": {
                    name: [ "연기면", "연기", "면" ],
                    sub: {}
                },
                "VIL5": {
                    name: [ "연동면", "연동", "면" ],
                    sub: {}
                },
                "VIL6": {
                    name: [ "연서면", "연서", "면" ],
                    sub: {}
                },
                "VIL7": {
                    name: [ "장군면", "장군", "면" ],
                    sub: {}
                },
                "VIL8": {
                    name: [ "전동면", "전동", "면" ],
                    sub: {}
                },
                "VIL9": {
                    name: [ "전의면", "전의", "면" ],
                    sub: {}
                }
            }
        },
        "SGG": {
            name: [ "경기도", "경기", "도" ],
            sub: {
                "GOY": {
                    name: [ "고양시", "고양", "시" ],
                    sub: {
                        "DIS0": {
                            name: [ "덕양구", "덕양", "구" ],
                            sub: {}
                        },
                        "DIS1": {
                            name: [ "일산동구", "일산동", "구" ],
                            sub: {}
                        },
                        "DIS2": {
                            name: [ "일산서구", "일산서", "구" ],
                            sub: {}
                        }
                    }
                },
                "SUW": {
                    name: [ "수원시", "수원", "시" ],
                    sub: {
                        "DIS0": {
                            name: [ "장안구", "장안", "구" ],
                            sub: {}
                        },
                        "DIS1": {
                            name: [ "권선구", "권선", "구" ],
                            sub: {}
                        },
                        "DIS2": {
                            name: [ "팔달구", "팔달", "구" ],
                            sub: {}
                        },
                        "DIS3": {
                            name: [ "영통구", "영통", "구" ],
                            sub: {}
                        }
                    }
                },
                "YIN": {
                    name: [ "용인시", "용인", "시" ],
                    sub: {
                        "URBAN": {
                            name: [ "시내지역", "시내", "시내지역" ],
                            sub: {}
                        },
                        "RURAL": {
                            name: [ "시외지역", "시외", "시외지역" ],
                            sub: {}
                        },
                        "DIS0": {
                            name: [ "처인구", "처인", "구" ],
                            sub: {
                                "URBAN": {
                                    name: [ "시내지역", "시내", "시내지역" ],
                                    sub: {}
                                },
                                "RURAL": {
                                    name: [ "시외지역", "시외", "시외지역" ],
                                    sub: {}
                                },
                                "VIL0": {
                                    name: [ "포곡읍", "포곡", "읍" ],
                                    sub: {}
                                },
                                "VIL1": {
                                    name: [ "모현읍", "모현", "읍" ],
                                    sub: {}
                                },
                                "VIL2": {
                                    name: [ "이동읍", "이동", "읍" ],
                                    sub: {}
                                },
                                "VIL3": {
                                    name: [ "남사읍", "남사", "읍" ],
                                    sub: {}
                                },
                                "VIL4": {
                                    name: [ "양지면", "양지", "면" ],
                                    sub: {}
                                },
                                "VIL5": {
                                    name: [ "백암면", "백암", "면" ],
                                    sub: {}
                                },
                                "VIL6": {
                                    name: [ "원삼면", "원삼", "면" ],
                                    sub: {}
                                }
                            }
                        },
                        "DIS1": {
                            name: [ "기흥구", "기흥", "구" ],
                            sub: {
                                "URBAN": {
                                    name: [ "시내지역", "시내", "시내지역" ],
                                    sub: {}
                                },
                                "RURAL": {
                                    name: [ "시외지역", "시외", "시외지역" ],
                                    sub: {}
                                }
                            }
                        },
                        "DIS2": {
                            name: [ "수지구", "수지", "구" ],
                            sub: {
                                "URBAN": {
                                    name: [ "시내지역", "시내", "시내지역" ],
                                    sub: {}
                                },
                                "RURAL": {
                                    name: [ "시외지역", "시외", "시외지역" ],
                                    sub: {}
                                }
                            }
                        },
                        "VIL0": {
                            name: [ "포곡읍", "포곡", "읍" ],
                            sub: {}
                        },
                        "VIL1": {
                            name: [ "모현읍", "모현", "읍" ],
                            sub: {}
                        },
                        "VIL2": {
                            name: [ "이동읍", "이동", "읍" ],
                            sub: {}
                        },
                        "VIL3": {
                            name: [ "남사읍", "남사", "읍" ],
                            sub: {}
                        },
                        "VIL4": {
                            name: [ "양지면", "양지", "면" ],
                            sub: {}
                        },
                        "VIL5": {
                            name: [ "백암면", "백암", "면" ],
                            sub: {}
                        },
                        "VIL6": {
                            name: [ "원삼면", "원삼", "면" ],
                            sub: {}
                        }
                    }
                },
                "GCN": {
                    name: [ "과천시", "과천", "시" ],
                    sub: {}
                },
                "GWM": {
                    name: [ "광명시", "광명", "시" ],
                    sub: {}
                },
                "GGJ": {
                    name: [ "광주시", "광주", "시" ],
                    sub: {
                        "URBAN": {
                            name: [ "시내지역", "시내", "시내지역" ],
                            sub: {}
                        },
                        "RURAL": {
                            name: [ "시외지역", "시외", "시외지역" ],
                            sub: {}
                        },
                        "VIL0": {
                            name: [ "초월읍", "초월", "읍" ],
                            sub: {}
                        },
                        "VIL1": {
                            name: [ "곤지암읍", "곤지암", "읍" ],
                            sub: {}
                        },
                        "VIL2": {
                            name: [ "도척면", "도척", "면" ],
                            sub: {}
                        },
                        "VIL3": {
                            name: [ "퇴촌면", "퇴촌", "면" ],
                            sub: {}
                        },
                        "VIL4": {
                            name: [ "남종면", "남종", "면" ],
                            sub: {}
                        },
                        "VIL5": {
                            name: [ "남한산성면", "남한산성", "면" ],
                            sub: {}
                        }
                    }
                },
                "GRI": {
                    name: [ "구리시", "구리", "시" ],
                    sub: {}
                },
                "GNP": {
                    name: [ "군포시", "군포", "시" ],
                    sub: {}
                },
                "GMP": {
                    name: [ "김포시", "김포", "시" ],
                    sub: {
                        "URBAN": {
                            name: [ "시내지역", "시내", "시내지역" ],
                            sub: {}
                        },
                        "RURAL": {
                            name: [ "시외지역", "시외", "시외지역" ],
                            sub: {}
                        },
                        "VIL0": {
                            name: [ "고촌읍", "고촌", "읍" ],
                            sub: {}
                        },
                        "VIL1": {
                            name: [ "양촌읍", "양촌", "읍" ],
                            sub: {}
                        },
                        "VIL2": {
                            name: [ "통진읍", "통진", "읍" ],
                            sub: {}
                        },
                        "VIL3": {
                            name: [ "대곶면", "대곶", "면" ],
                            sub: {}
                        },
                        "VIL4": {
                            name: [ "월곶면", "월곶", "면" ],
                            sub: {}
                        },
                        "VIL5": {
                            name: [ "하성면", "하성", "면" ],
                            sub: {}
                        }
                    }
                },
                "NAM": {
                    name: [ "남양주시", "남양주", "시" ],
                    sub: {
                        "URBAN": {
                            name: [ "시내지역", "시내", "시내지역" ],
                            sub: {}
                        },
                        "RURAL": {
                            name: [ "시외지역", "시외", "시외지역" ],
                            sub: {}
                        },
                        "VIL0": {
                            name: [ "오남읍", "오남", "읍" ],
                            sub: {}
                        },
                        "VIL1": {
                            name: [ "와부읍", "와부", "읍" ],
                            sub: {}
                        },
                        "VIL2": {
                            name: [ "진건읍", "진건", "읍" ],
                            sub: {}
                        },
                        "VIL3": {
                            name: [ "진접읍", "진접", "읍" ],
                            sub: {}
                        },
                        "VIL4": {
                            name: [ "퇴계원읍", "퇴계원", "읍" ],
                            sub: {}
                        },
                        "VIL5": {
                            name: [ "화도읍", "화도", "읍" ],
                            sub: {}
                        },
                        "VIL6": {
                            name: [ "별내면", "별내", "면" ],
                            sub: {}
                        },
                        "VIL7": {
                            name: [ "수동면", "수동", "면" ],
                            sub: {}
                        },
                        "VIL8": {
                            name: [ "조안면", "조안", "면" ],
                            sub: {}
                        }
                    }
                },
                "DDC": {
                    name: [ "동두천시", "동두천", "시" ],
                    sub: {}
                },
                "BUC": {
                    name: [ "부천시", "부천", "시" ],
                    sub: {
                        "DIS0": {
                            name: [ "원미구", "원미", "구" ],
                            sub: {}
                        },
                        "DIS1": {
                            name: [ "소사구", "소사", "구" ],
                            sub: {}
                        },
                        "DIS2": {
                            name: [ "오정구", "오정", "구" ],
                            sub: {}
                        }
                    }
                },
                "SNM": {
                    name: [ "성남시", "성남", "시" ],
                    sub: {
                        "DIS0": {
                            name: [ "수정구", "수정", "구" ],
                            sub: {}
                        },
                        "DIS1": {
                            name: [ "중원구", "중원", "구" ],
                            sub: {}
                        },
                        "DIS2": {
                            name: [ "분당구", "분당", "구" ],
                            sub: {}
                        }
                    }
                },
                "SIH": {
                    name: [ "시흥시", "시흥", "시" ],
                    sub: {}
                },
                "ANS": {
                    name: [ "안산시", "안산", "시" ],
                    sub: {
                        "DIS0": {
                            name: [ "상록구", "상록", "구" ],
                            sub: {}
                        },
                        "DIS1": {
                            name: [ "단원구", "단원", "구" ],
                            sub: {}
                        }
                    }
                },
                "ASN": {
                    name: [ "안성시", "안성", "시" ],
                    sub: {
                        "URBAN": {
                            name: [ "시내지역", "시내", "시내지역" ],
                            sub: {}
                        },
                        "RURAL": {
                            name: [ "시외지역", "시외", "시외지역" ],
                            sub: {}
                        },
                        "VIL0": {
                            name: [ "공도읍", "공도", "읍" ],
                            sub: {}
                        },
                        "VIL1": {
                            name: [ "보개면", "보개", "면" ],
                            sub: {}
                        },
                        "VIL2": {
                            name: [ "금광면", "금광", "면" ],
                            sub: {}
                        },
                        "VIL3": {
                            name: [ "서운면", "서운", "면" ],
                            sub: {}
                        },
                        "VIL4": {
                            name: [ "미양면", "미양", "면" ],
                            sub: {}
                        },
                        "VIL5": {
                            name: [ "대덕면", "대덕", "면" ],
                            sub: {}
                        },
                        "VIL6": {
                            name: [ "양성면", "양성", "면" ],
                            sub: {}
                        },
                        "VIL7": {
                            name: [ "원곡면", "원곡", "면" ],
                            sub: {}
                        },
                        "VIL8": {
                            name: [ "고삼면", "고삼", "면" ],
                            sub: {}
                        },
                        "VIL9": {
                            name: [ "일죽면", "일죽", "면" ],
                            sub: {}
                        },
                        "VIL10": {
                            name: [ "죽산면", "죽산", "면" ],
                            sub: {}
                        },
                        "VIL11": {
                            name: [ "삼죽면", "삼죽", "면" ],
                            sub: {}
                        }
                    }
                },
                "ANY": {
                    name: [ "안양시", "안양", "시" ],
                    sub: {
                        "DIS0": {
                            name: [ "동안구", "동안", "구" ],
                            sub: {}
                        },
                        "DIS1": {
                            name: [ "만안구", "만안", "구" ],
                            sub: {}
                        }
                    }
                },
                "YNJ": {
                    name: [ "양주시", "양주", "시" ],
                    sub: {
                        "URBAN": {
                            name: [ "시내지역", "시내", "시내지역" ],
                            sub: {}
                        },
                        "RURAL": {
                            name: [ "시외지역", "시외", "시외지역" ],
                            sub: {}
                        },
                        "VIL0": {
                            name: [ "백석읍", "백석", "읍" ],
                            sub: {}
                        },
                        "VIL1": {
                            name: [ "광적면", "광적", "면" ],
                            sub: {}
                        },
                        "VIL2": {
                            name: [ "남면", "남", "면" ],
                            sub: {}
                        },
                        "VIL3": {
                            name: [ "은현면", "은현", "면" ],
                            sub: {}
                        },
                        "VIL4": {
                            name: [ "장흥면", "장흥", "면" ],
                            sub: {}
                        }
                    }
                },
                "YEJ": {
                    name: [ "여주시", "여주", "시" ],
                    sub: {
                        "URBAN": {
                            name: [ "시내지역", "시내", "시내지역" ],
                            sub: {}
                        },
                        "RURAL": {
                            name: [ "시외지역", "시외", "시외지역" ],
                            sub: {}
                        },
                        "VIL0": {
                            name: [ "가남읍", "가남", "읍" ],
                            sub: {}
                        },
                        "VIL1": {
                            name: [ "강천면", "강천", "면" ],
                            sub: {}
                        },
                        "VIL2": {
                            name: [ "금사면", "금사", "면" ],
                            sub: {}
                        },
                        "VIL3": {
                            name: [ "대신면", "대신", "면" ],
                            sub: {}
                        },
                        "VIL4": {
                            name: [ "북내면", "북내", "면" ],
                            sub: {}
                        },
                        "VIL5": {
                            name: [ "산북면", "산북", "면" ],
                            sub: {}
                        },
                        "VIL6": {
                            name: [ "세종대왕면", "세종대왕", "면" ],
                            sub: {}
                        },
                        "VIL7": {
                            name: [ "점동면", "점동", "면" ],
                            sub: {}
                        },
                        "VIL8": {
                            name: [ "흥천면", "흥천", "면" ],
                            sub: {}
                        }
                    }
                },
                "OSN": {
                    name: [ "오산시", "오산", "시" ],
                    sub: {}
                },
                "UIW": {
                    name: [ "의왕시", "의왕", "시" ],
                    sub: {}
                },
                "UIJ": {
                    name: [ "의정부시", "의정부", "시" ],
                    sub: {}
                },
                "ICH": {
                    name: [ "이천시", "이천", "시" ],
                    sub: {
                        "URBAN": {
                            name: [ "시내지역", "시내", "시내지역" ],
                            sub: {}
                        },
                        "RURAL": {
                            name: [ "시외지역", "시외", "시외지역" ],
                            sub: {}
                        },
                        "VIL0": {
                            name: [ "부발읍", "부발", "읍" ],
                            sub: {}
                        },
                        "VIL1": {
                            name: [ "장호원읍", "장호원", "읍" ],
                            sub: {}
                        },
                        "VIL2": {
                            name: [ "대월면", "대월", "면" ],
                            sub: {}
                        },
                        "VIL3": {
                            name: [ "마장면", "마장", "면" ],
                            sub: {}
                        },
                        "VIL4": {
                            name: [ "모가면", "모가", "면" ],
                            sub: {}
                        },
                        "VIL5": {
                            name: [ "백사면", "백사", "면" ],
                            sub: {}
                        },
                        "VIL6": {
                            name: [ "설성면", "설성", "면" ],
                            sub: {}
                        },
                        "VIL7": {
                            name: [ "신둔면", "신둔", "면" ],
                            sub: {}
                        },
                        "VIL8": {
                            name: [ "율면", "율", "면" ],
                            sub: {}
                        },
                        "VIL9": {
                            name: [ "호법면", "호법", "면" ],
                            sub: {}
                        }
                    }
                },
                "PAJ": {
                    name: [ "파주시", "파주", "시" ],
                    sub: {
                        "URBAN": {
                            name: [ "시내지역", "시내", "시내지역" ],
                            sub: {}
                        },
                        "RURAL": {
                            name: [ "시외지역", "시외", "시외지역" ],
                            sub: {}
                        },
                        "VIL0": {
                            name: [ "문산읍", "문산", "읍" ],
                            sub: {}
                        },
                        "VIL1": {
                            name: [ "법원읍", "법원", "읍" ],
                            sub: {}
                        },
                        "VIL2": {
                            name: [ "조리읍", "조리", "읍" ],
                            sub: {}
                        },
                        "VIL3": {
                            name: [ "파주읍", "파주", "읍" ],
                            sub: {}
                        },
                        "VIL4": {
                            name: [ "광탄면", "광탄", "면" ],
                            sub: {}
                        },
                        "VIL5": {
                            name: [ "군내면", "군내", "면" ],
                            sub: {}
                        },
                        "VIL6": {
                            name: [ "월롱면", "월롱", "면" ],
                            sub: {}
                        },
                        "VIL7": {
                            name: [ "적성면", "적성", "면" ],
                            sub: {}
                        },
                        "VIL8": {
                            name: [ "진동면", "진동", "면" ],
                            sub: {}
                        },
                        "VIL9": {
                            name: [ "탄현면", "탄현", "면" ],
                            sub: {}
                        },
                        "VIL10": {
                            name: [ "파평면", "파평", "면" ],
                            sub: {}
                        },
                        "VIL11": {
                            name: [ "장단면", "장단", "면" ],
                            sub: {}
                        },
                        "VIL12": {
                            name: [ "진서면", "진서", "면" ],
                            sub: {}
                        }
                    }
                },
                "PTK": {
                    name: [ "평택시", "평택", "시" ],
                    sub: {
                        "URBAN": {
                            name: [ "시내지역", "시내", "시내지역" ],
                            sub: {}
                        },
                        "RURAL": {
                            name: [ "시외지역", "시외", "시외지역" ],
                            sub: {}
                        },
                        "VIL0": {
                            name: [ "안중읍", "안중", "읍" ],
                            sub: {}
                        },
                        "VIL1": {
                            name: [ "청북읍", "청북", "읍" ],
                            sub: {}
                        },
                        "VIL2": {
                            name: [ "팽성읍", "팽성", "읍" ],
                            sub: {}
                        },
                        "VIL3": {
                            name: [ "포승읍", "포승", "읍" ],
                            sub: {}
                        },
                        "VIL4": {
                            name: [ "고덕면", "고덕", "면" ],
                            sub: {}
                        },
                        "VIL5": {
                            name: [ "서탄면", "서탄", "면" ],
                            sub: {}
                        },
                        "VIL6": {
                            name: [ "오성면", "오성", "면" ],
                            sub: {}
                        },
                        "VIL7": {
                            name: [ "진위면", "진위", "면" ],
                            sub: {}
                        },
                        "VIL8": {
                            name: [ "현덕면", "현덕", "면" ],
                            sub: {}
                        }
                    }
                },
                "PCH": {
                    name: [ "포천시", "포천", "시" ],
                    sub: {
                        "URBAN": {
                            name: [ "시내지역", "시내", "시내지역" ],
                            sub: {}
                        },
                        "RURAL": {
                            name: [ "시외지역", "시외", "시외지역" ],
                            sub: {}
                        },
                        "VIL0": {
                            name: [ "소흘읍", "소흘", "읍" ],
                            sub: {}
                        },
                        "VIL1": {
                            name: [ "가산면", "가산", "면" ],
                            sub: {}
                        },
                        "VIL2": {
                            name: [ "군내면", "군내", "면" ],
                            sub: {}
                        },
                        "VIL3": {
                            name: [ "관인면", "관인", "면" ],
                            sub: {}
                        },
                        "VIL4": {
                            name: [ "내촌면", "내촌", "면" ],
                            sub: {}
                        },
                        "VIL5": {
                            name: [ "신북면", "신북", "면" ],
                            sub: {}
                        },
                        "VIL6": {
                            name: [ "영북면", "영북", "면" ],
                            sub: {}
                        },
                        "VIL7": {
                            name: [ "영중면", "영중", "면" ],
                            sub: {}
                        },
                        "VIL8": {
                            name: [ "이동면", "이동", "면" ],
                            sub: {}
                        },
                        "VIL9": {
                            name: [ "일동면", "일동", "면" ],
                            sub: {}
                        },
                        "VIL10": {
                            name: [ "창수면", "창수", "면" ],
                            sub: {}
                        },
                        "VIL11": {
                            name: [ "화현면", "화현", "면" ],
                            sub: {}
                        }
                    }
                },
                "HAN": {
                    name: [ "하남시", "하남", "시" ],
                    sub: {}
                },
                "HWA": {
                    name: [ "화성시", "화성", "시" ],
                    sub: {
                        "URBAN": {
                            name: [ "시내지역", "시내", "시내지역" ],
                            sub: {}
                        },
                        "RURAL": {
                            name: [ "시외지역", "시외", "시외지역" ],
                            sub: {}
                        },
                        "VIL0": {
                            name: [ "남양읍", "남양", "읍" ],
                            sub: {}
                        },
                        "VIL1": {
                            name: [ "봉담읍", "봉담", "읍" ],
                            sub: {}
                        },
                        "VIL2": {
                            name: [ "우정읍", "우정", "읍" ],
                            sub: {}
                        },
                        "VIL3": {
                            name: [ "향남읍", "향남", "읍" ],
                            sub: {}
                        },
                        "VIL4": {
                            name: [ "마도면", "마도", "면" ],
                            sub: {}
                        },
                        "VIL5": {
                            name: [ "매송면", "매송", "면" ],
                            sub: {}
                        },
                        "VIL6": {
                            name: [ "비봉면", "비봉", "면" ],
                            sub: {}
                        },
                        "VIL7": {
                            name: [ "서신면", "서신", "면" ],
                            sub: {}
                        },
                        "VIL8": {
                            name: [ "송산면", "송산", "면" ],
                            sub: {}
                        },
                        "VIL9": {
                            name: [ "양감면", "양감", "면" ],
                            sub: {}
                        },
                        "VIL10": {
                            name: [ "장안면", "장안", "면" ],
                            sub: {}
                        },
                        "VIL11": {
                            name: [ "정남면", "정남", "면" ],
                            sub: {}
                        },
                        "VIL12": {
                            name: [ "팔탄면", "팔탄", "면" ],
                            sub: {}
                        }
                    }
                },
                "GAP": {
                    name: [ "가평군", "가평", "군" ],
                    sub: {
                        "VIL0": {
                            name: [ "가평읍", "가평", "읍" ],
                            sub: {}
                        },
                        "VIL1": {
                            name: [ "북면", "북", "면" ],
                            sub: {}
                        },
                        "VIL2": {
                            name: [ "설악면", "설악", "면" ],
                            sub: {}
                        },
                        "VIL3": {
                            name: [ "상면", "상", "면" ],
                            sub: {}
                        },
                        "VIL4": {
                            name: [ "조종면", "조종", "면" ],
                            sub: {}
                        },
                        "VIL5": {
                            name: [ "청평면", "청평", "면" ],
                            sub: {}
                        }
                    }
                },
                "YNP": {
                    name: [ "양평군", "양평", "군" ],
                    sub: {
                        "VIL0": {
                            name: [ "양평읍", "양평", "읍" ],
                            sub: {}
                        },
                        "VIL1": {
                            name: [ "강상면", "강상", "면" ],
                            sub: {}
                        },
                        "VIL2": {
                            name: [ "강하면", "강하", "면" ],
                            sub: {}
                        },
                        "VIL3": {
                            name: [ "개군면", "개군", "면" ],
                            sub: {}
                        },
                        "VIL4": {
                            name: [ "단월면", "단월", "면" ],
                            sub: {}
                        },
                        "VIL5": {
                            name: [ "서종면", "서종", "면" ],
                            sub: {}
                        },
                        "VIL6": {
                            name: [ "양동면", "양동", "면" ],
                            sub: {}
                        },
                        "VIL7": {
                            name: [ "양서면", "양서", "면" ],
                            sub: {}
                        },
                        "VIL8": {
                            name: [ "옥천면", "옥천", "면" ],
                            sub: {}
                        },
                        "VIL9": {
                            name: [ "용문면", "용문", "면" ],
                            sub: {}
                        },
                        "VIL10": {
                            name: [ "지평면", "지평", "면" ],
                            sub: {}
                        },
                        "VIL11": {
                            name: [ "청운면", "청운", "면" ],
                            sub: {}
                        }
                    }
                },
                "YCN": {
                    name: [ "연천군", "연천", "군" ],
                    sub: {
                        "VIL0": {
                            name: [ "연천읍", "연천", "읍" ],
                            sub: {}
                        },
                        "VIL1": {
                            name: [ "전곡읍", "전곡", "읍" ],
                            sub: {}
                        },
                        "VIL2": {
                            name: [ "군남면", "군남", "면" ],
                            sub: {}
                        },
                        "VIL3": {
                            name: [ "미산면", "미산", "면" ],
                            sub: {}
                        },
                        "VIL4": {
                            name: [ "백학면", "백학", "면" ],
                            sub: {}
                        },
                        "VIL5": {
                            name: [ "신서면", "신서", "면" ],
                            sub: {}
                        },
                        "VIL6": {
                            name: [ "왕징면", "왕징", "면" ],
                            sub: {}
                        },
                        "VIL7": {
                            name: [ "장남면", "장남", "면" ],
                            sub: {}
                        },
                        "VIL8": {
                            name: [ "중면", "중", "면" ],
                            sub: {}
                        },
                        "VIL9": {
                            name: [ "청산면", "청산", "면" ],
                            sub: {}
                        }
                    }
                },
            }
        },
        "NCC": {
            name: [ "충청북도", "충북", "도" ],
            sub: {
                "JEC": {
                    name: [ "제천시", "제천", "시" ],
                    sub: {
                        "URBAN": {
                            name: [ "시내지역", "시내", "시내지역" ],
                            sub: {}
                        },
                        "RURAL": {
                            name: [ "시외지역", "시외", "시외지역" ],
                            sub: {}
                        },
                        "VIL0": {
                            name: [ "봉양읍", "봉양", "읍" ],
                            sub: {}
                        },
                        "VIL1": {
                            name: [ "금성면", "금성", "면" ],
                            sub: {}
                        },
                        "VIL2": {
                            name: [ "덕산면", "덕산", "면" ],
                            sub: {}
                        },
                        "VIL3": {
                            name: [ "백운면", "백운", "면" ],
                            sub: {}
                        },
                        "VIL4": {
                            name: [ "송학면", "송학", "면" ],
                            sub: {}
                        },
                        "VIL5": {
                            name: [ "수산면", "수산", "면" ],
                            sub: {}
                        },
                        "VIL6": {
                            name: [ "청풍면", "청풍", "면" ],
                            sub: {}
                        },
                        "VIL7": {
                            name: [ "한수면", "한수", "면" ],
                            sub: {}
                        }
                    }
                },
                "CEJ": {
                    name: [ "청주시", "청주", "시" ],
                    sub: {
                        "URBAN": {
                            name: [ "시내지역", "시내", "시내지역" ],
                            sub: {}
                        },
                        "RURAL": {
                            name: [ "시외지역", "시외", "시외지역" ],
                            sub: {}
                        },
                        "DIS0": {
                            name: [ "상당구", "상당", "구" ],
                            sub: {
                                "URBAN": {
                                    name: [ "시내지역", "시내", "시내지역" ],
                                    sub: {}
                                },
                                "RURAL": {
                                    name: [ "시외지역", "시외", "시외지역" ],
                                    sub: {}
                                },
                                "VIL0": {
                                    name: [ "가덕면", "가덕", "면" ],
                                    sub: {}
                                },
                                "VIL1": {
                                    name: [ "남일면", "남일", "면" ],
                                    sub: {}
                                },
                                "VIL2": {
                                    name: [ "낭성면", "낭성", "면" ],
                                    sub: {}
                                },
                                "VIL3": {
                                    name: [ "문의면", "문의", "면" ],
                                    sub: {}
                                },
                                "VIL4": {
                                    name: [ "미원면", "미원", "면" ],
                                    sub: {}
                                }
                            }
                        },
                        "DIS1": {
                            name: [ "서원구", "서원", "구" ],
                            sub: {
                                "URBAN": {
                                    name: [ "시내지역", "시내", "시내지역" ],
                                    sub: {}
                                },
                                "RURAL": {
                                    name: [ "시외지역", "시외", "시외지역" ],
                                    sub: {}
                                },
                                "VIL0": {
                                    name: [ "남이면", "남이", "면" ],
                                    sub: {}
                                },
                                "VIL1": {
                                    name: [ "현도면", "현도", "면" ],
                                    sub: {}
                                }
                            }
                        },
                        "DIS2": {
                            name: [ "흥덕구", "흥덕", "구" ],
                            sub: {
                                "URBAN": {
                                    name: [ "시내지역", "시내", "시내지역" ],
                                    sub: {}
                                },
                                "RURAL": {
                                    name: [ "시외지역", "시외", "시외지역" ],
                                    sub: {}
                                },
                                "VIL0": {
                                    name: [ "오송읍", "오송", "읍" ],
                                    sub: {}
                                },
                                "VIL1": {
                                    name: [ "강내면", "강내", "면" ],
                                    sub: {}
                                },
                                "VIL2": {
                                    name: [ "옥산면", "옥산", "면" ],
                                    sub: {}
                                }
                            }
                        },
                        "DIS3": {
                            name: [ "청원구", "청원", "구" ],
                            sub: {
                                "URBAN": {
                                    name: [ "시내지역", "시내", "시내지역" ],
                                    sub: {}
                                },
                                "RURAL": {
                                    name: [ "시외지역", "시외", "시외지역" ],
                                    sub: {}
                                },
                                "VIL0": {
                                    name: [ "내수읍", "내수", "읍" ],
                                    sub: {}
                                },
                                "VIL1": {
                                    name: [ "오창읍", "오창", "읍" ],
                                    sub: {}
                                },
                                "VIL2": {
                                    name: [ "북이면", "북이", "면" ],
                                    sub: {}
                                }
                            }
                        }
                    }
                },
                "CUJ": {
                    name: [ "충주시", "충주", "시" ],
                    sub: {
                        "URBAN": {
                            name: [ "시내지역", "시내", "시내지역" ],
                            sub: {}
                        },
                        "RURAL": {
                            name: [ "시외지역", "시외", "시외지역" ],
                            sub: {}
                        },
                        "VIL0": {
                            name: [ "주덕읍", "주덕", "읍" ],
                            sub: {}
                        },
                        "VIL1": {
                            name: [ "금가면", "금가", "면" ],
                            sub: {}
                        },
                        "VIL2": {
                            name: [ "노은면", "노은", "면" ],
                            sub: {}
                        },
                        "VIL3": {
                            name: [ "대소원면", "대소원", "면" ],
                            sub: {}
                        },
                        "VIL4": {
                            name: [ "동량면", "동량", "면" ],
                            sub: {}
                        },
                        "VIL5": {
                            name: [ "산척면", "산척", "면" ],
                            sub: {}
                        },
                        "VIL6": {
                            name: [ "살미면", "살미", "면" ],
                            sub: {}
                        },
                        "VIL7": {
                            name: [ "소태면", "소태", "면" ],
                            sub: {}
                        },
                        "VIL8": {
                            name: [ "수안보면", "수안보", "면" ],
                            sub: {}
                        },
                        "VIL9": {
                            name: [ "신니면", "신니", "면" ],
                            sub: {}
                        },
                        "VIL10": {
                            name: [ "앙성면", "앙성", "면" ],
                            sub: {}
                        },
                        "VIL11": {
                            name: [ "엄정면", "엄정", "면" ],
                            sub: {}
                        },
                        "VIL12": {
                            name: [ "중앙탑면", "중앙탑", "면" ],
                            sub: {}
                        }
                    }
                },
                "GOE": {
                    name: [ "괴산군", "괴산", "군" ],
                    sub: {
                        "VIL0": {
                            name: [ "괴산읍", "괴산", "읍" ],
                            sub: {}
                        },
                        "VIL1": {
                            name: [ "감물면", "감물", "면" ],
                            sub: {}
                        },
                        "VIL2": {
                            name: [ "문광면", "문광", "면" ],
                            sub: {}
                        },
                        "VIL3": {
                            name: [ "불정면", "불정", "면" ],
                            sub: {}
                        },
                        "VIL4": {
                            name: [ "사리면", "사리", "면" ],
                            sub: {}
                        },
                        "VIL5": {
                            name: [ "소수면", "소수", "면" ],
                            sub: {}
                        },
                        "VIL6": {
                            name: [ "연풍면", "연풍", "면" ],
                            sub: {}
                        },
                        "VIL7": {
                            name: [ "장연면", "장연", "면" ],
                            sub: {}
                        },
                        "VIL8": {
                            name: [ "청안면", "청안", "면" ],
                            sub: {}
                        },
                        "VIL9": {
                            name: [ "청천면", "청천", "면" ],
                            sub: {}
                        },
                        "VIL10": {
                            name: [ "칠성면", "칠성", "면" ],
                            sub: {}
                        }
                    }
                },
                "DAN": {
                    name: [ "단양군", "단양", "군" ],
                    sub: {
                        "VIL0": {
                            name: [ "단양읍", "단양", "읍" ],
                            sub: {}
                        },
                        "VIL1": {
                            name: [ "매포읍", "매포", "읍" ],
                            sub: {}
                        },
                        "VIL2": {
                            name: [ "가곡면", "가곡", "면" ],
                            sub: {}
                        },
                        "VIL3": {
                            name: [ "단성면", "단성", "면" ],
                            sub: {}
                        },
                        "VIL4": {
                            name: [ "대강면", "대강", "면" ],
                            sub: {}
                        },
                        "VIL5": {
                            name: [ "어상천면", "어상천", "면" ],
                            sub: {}
                        },
                        "VIL6": {
                            name: [ "영춘면", "영춘", "면" ],
                            sub: {}
                        },
                        "VIL7": {
                            name: [ "적성면", "적성", "면" ],
                            sub: {}
                        }
                    }
                },
                "BON": {
                    name: [ "보은군", "보은", "군" ],
                    sub: {
                        "VIL0": {
                            name: [ "보은읍", "보은", "읍" ],
                            sub: {}
                        },
                        "VIL1": {
                            name: [ "내북면", "내북", "면" ],
                            sub: {}
                        },
                        "VIL2": {
                            name: [ "마로면", "마로", "면" ],
                            sub: {}
                        },
                        "VIL3": {
                            name: [ "산외면", "산외", "면" ],
                            sub: {}
                        },
                        "VIL4": {
                            name: [ "삼승면", "삼승", "면" ],
                            sub: {}
                        },
                        "VIL5": {
                            name: [ "속리산면", "속리산", "면" ],
                            sub: {}
                        },
                        "VIL6": {
                            name: [ "수한면", "수한", "면" ],
                            sub: {}
                        },
                        "VIL7": {
                            name: [ "장안면", "장안", "면" ],
                            sub: {}
                        },
                        "VIL8": {
                            name: [ "탄부면", "탄부", "면" ],
                            sub: {}
                        },
                        "VIL9": {
                            name: [ "회남면", "회남", "면" ],
                            sub: {}
                        },
                        "VIL10": {
                            name: [ "회인면", "회인", "면" ],
                            sub: {}
                        }
                    }
                },
                "YDN": {
                    name: [ "영동군", "영동", "군" ],
                    sub: {
                        "VIL0": {
                            name: [ "영동읍", "영동", "읍" ],
                            sub: {}
                        },
                        "VIL1": {
                            name: [ "매곡면", "매곡", "면" ],
                            sub: {}
                        },
                        "VIL2": {
                            name: [ "상촌면", "상촌", "면" ],
                            sub: {}
                        },
                        "VIL3": {
                            name: [ "심천면", "심천", "면" ],
                            sub: {}
                        },
                        "VIL4": {
                            name: [ "양강면", "양강", "면" ],
                            sub: {}
                        },
                        "VIL5": {
                            name: [ "양산면", "양산", "면" ],
                            sub: {}
                        },
                        "VIL6": {
                            name: [ "용산면", "용산", "면" ],
                            sub: {}
                        },
                        "VIL7": {
                            name: [ "용화면", "용화", "면" ],
                            sub: {}
                        },
                        "VIL8": {
                            name: [ "추풍령면", "추풍령", "면" ],
                            sub: {}
                        },
                        "VIL9": {
                            name: [ "학산면", "학산", "면" ],
                            sub: {}
                        },
                        "VIL10": {
                            name: [ "황간면", "황간", "면" ],
                            sub: {}
                        }
                    }
                },
                "OKC": {
                    name: [ "옥천군", "옥천", "군" ],
                    sub: {
                        "VIL0": {
                            name: [ "옥천읍", "옥천", "읍" ],
                            sub: {}
                        },
                        "VIL1": {
                            name: [ "군북면", "군북", "면" ],
                            sub: {}
                        },
                        "VIL2": {
                            name: [ "군서면", "군서", "면" ],
                            sub: {}
                        },
                        "VIL3": {
                            name: [ "동이면", "동이", "면" ],
                            sub: {}
                        },
                        "VIL4": {
                            name: [ "안남면", "안남", "면" ],
                            sub: {}
                        },
                        "VIL5": {
                            name: [ "안내면", "안내", "면" ],
                            sub: {}
                        },
                        "VIL6": {
                            name: [ "이원면", "이원", "면" ],
                            sub: {}
                        },
                        "VIL7": {
                            name: [ "청산면", "청산", "면" ],
                            sub: {}
                        },
                        "VIL8": {
                            name: [ "청성면", "청성", "면" ],
                            sub: {}
                        }
                    }
                },
                "EUM": {
                    name: [ "음성군", "음성", "군" ],
                    sub: {
                        "VIL0": {
                            name: [ "음성읍", "음성", "읍" ],
                            sub: {}
                        },
                        "VIL1": {
                            name: [ "금왕읍", "금왕", "읍" ],
                            sub: {}
                        },
                        "VIL2": {
                            name: [ "감곡면", "감곡", "면" ],
                            sub: {}
                        },
                        "VIL3": {
                            name: [ "대소면", "대소", "면" ],
                            sub: {}
                        },
                        "VIL4": {
                            name: [ "맹동면", "맹동", "면" ],
                            sub: {}
                        },
                        "VIL5": {
                            name: [ "삼성면", "삼성", "면" ],
                            sub: {}
                        },
                        "VIL6": {
                            name: [ "생극면", "생극", "면" ],
                            sub: {}
                        },
                        "VIL7": {
                            name: [ "소이면", "소이", "면" ],
                            sub: {}
                        },
                        "VIL8": {
                            name: [ "원남면", "원남", "면" ],
                            sub: {}
                        }
                    }
                },
                "JUN": {
                    name: [ "증평군", "증평", "군" ],
                    sub: {
                        "VIL0": {
                            name: [ "증평읍", "증평", "읍" ],
                            sub: {}
                        },
                        "VIL1": {
                            name: [ "도안면", "도안", "면" ],
                            sub: {}
                        }
                    }
                },
                "JIN": {
                    name: [ "진천군", "진천", "군" ],
                    sub: {
                        "VIL0": {
                            name: [ "진천읍", "진천", "읍" ],
                            sub: {}
                        },
                        "VIL1": {
                            name: [ "덕산읍", "덕산", "읍" ],
                            sub: {}
                        },
                        "VIL2": {
                            name: [ "광혜원면", "광혜원", "면" ],
                            sub: {}
                        },
                        "VIL3": {
                            name: [ "문백면", "문백", "면" ],
                            sub: {}
                        },
                        "VIL4": {
                            name: [ "백곡면", "백곡", "면" ],
                            sub: {}
                        },
                        "VIL5": {
                            name: [ "이월면", "이월", "면" ],
                            sub: {}
                        },
                        "VIL6": {
                            name: [ "초평면", "초평", "면" ],
                            sub: {}
                        }
                    }
                }
            }
        },
        "SCC": {
            name: [ "충청남도", "충남", "도" ],
            sub: {
                "GRY": {
                    name: [ "계룡시", "계룡", "시" ],
                    sub: {
                        "URBAN": {
                            name: [ "시내지역", "시내", "시내지역" ],
                            sub: {}
                        },
                        "RURAL": {
                            name: [ "시외지역", "시외", "시외지역" ],
                            sub: {}
                        },
                        "VIL0": {
                            name: [ "두마면", "두마", "면" ],
                            sub: {}
                        },
                        "VIL1": {
                            name: [ "신도안면", "신도안", "면" ],
                            sub: {}
                        },
                        "VIL2": {
                            name: [ "엄사면", "엄사", "면" ],
                            sub: {}
                        }
                    }
                },
                "GGJ": {
                    name: [ "공주시", "공주", "시" ],
                    sub: {
                        "URBAN": {
                            name: [ "시내지역", "시내", "시내지역" ],
                            sub: {}
                        },
                        "RURAL": {
                            name: [ "시외지역", "시외", "시외지역" ],
                            sub: {}
                        },
                        "VIL0": {
                            name: [ "유구읍", "유구", "읍" ],
                            sub: {}
                        },
                        "VIL1": {
                            name: [ "계룡면", "계룡", "면" ],
                            sub: {}
                        },
                        "VIL2": {
                            name: [ "반포면", "반포", "면" ],
                            sub: {}
                        },
                        "VIL3": {
                            name: [ "사곡면", "사곡", "면" ],
                            sub: {}
                        },
                        "VIL4": {
                            name: [ "신풍면", "신풍", "면" ],
                            sub: {}
                        },
                        "VIL5": {
                            name: [ "우성면", "우성", "면" ],
                            sub: {}
                        },
                        "VIL6": {
                            name: [ "의당면", "의당", "면" ],
                            sub: {}
                        },
                        "VIL7": {
                            name: [ "이인면", "이인", "면" ],
                            sub: {}
                        },
                        "VIL8": {
                            name: [ "정안면", "정안", "면" ],
                            sub: {}
                        },
                        "VIL9": {
                            name: [ "탄천면", "탄천", "면" ],
                            sub: {}
                        }
                    }
                },
                "NNN": {
                    name: [ "논산시", "논산", "시" ],
                    sub: {
                        "URBAN": {
                            name: [ "시내지역", "시내", "시내지역" ],
                            sub: {}
                        },
                        "RURAL": {
                            name: [ "시외지역", "시외", "시외지역" ],
                            sub: {}
                        },
                        "VIL0": {
                            name: [ "강경읍", "강경", "읍" ],
                            sub: {}
                        },
                        "VIL1": {
                            name: [ "연무읍", "연무", "읍" ],
                            sub: {}
                        },
                        "VIL2": {
                            name: [ "가야곡면", "가야곡", "면" ],
                            sub: {}
                        },
                        "VIL3": {
                            name: [ "광석면", "광석", "면" ],
                            sub: {}
                        },
                        "VIL4": {
                            name: [ "노성면", "노성", "면" ],
                            sub: {}
                        },
                        "VIL5": {
                            name: [ "벌곡면", "벌곡", "면" ],
                            sub: {}
                        },
                        "VIL6": {
                            name: [ "부적면", "부적", "면" ],
                            sub: {}
                        },
                        "VIL7": {
                            name: [ "상월면", "상월", "면" ],
                            sub: {}
                        },
                        "VIL8": {
                            name: [ "성동면", "성동", "면" ],
                            sub: {}
                        },
                        "VIL9": {
                            name: [ "양촌면", "양촌", "면" ],
                            sub: {}
                        },
                        "VIL10": {
                            name: [ "연산면", "연산", "면" ],
                            sub: {}
                        },
                        "VIL11": {
                            name: [ "은진면", "은진", "면" ],
                            sub: {}
                        },
                        "VIL12": {
                            name: [ "채운면", "채운", "면" ],
                            sub: {}
                        }
                    }
                },
                "DJI": {
                    name: [ "당진시", "당진", "시" ],
                    sub: {
                        "URBAN": {
                            name: [ "시내지역", "시내", "시내지역" ],
                            sub: {}
                        },
                        "RURAL": {
                            name: [ "시외지역", "시외", "시외지역" ],
                            sub: {}
                        },
                        "VIL0": {
                            name: [ "송악읍", "송악", "읍" ],
                            sub: {}
                        },
                        "VIL1": {
                            name: [ "합덕읍", "합덕", "읍" ],
                            sub: {}
                        },
                        "VIL2": {
                            name: [ "고대면", "고대", "면" ],
                            sub: {}
                        },
                        "VIL3": {
                            name: [ "대호지면", "대호지", "면" ],
                            sub: {}
                        },
                        "VIL4": {
                            name: [ "면천면", "면천", "면" ],
                            sub: {}
                        },
                        "VIL5": {
                            name: [ "석문면", "석문", "면" ],
                            sub: {}
                        },
                        "VIL6": {
                            name: [ "송산면", "송산", "면" ],
                            sub: {}
                        },
                        "VIL7": {
                            name: [ "순성면", "순성", "면" ],
                            sub: {}
                        },
                        "VIL8": {
                            name: [ "신평면", "신평", "면" ],
                            sub: {}
                        },
                        "VIL9": {
                            name: [ "우강면", "우강", "면" ],
                            sub: {}
                        },
                        "VIL10": {
                            name: [ "정미면", "정미", "면" ],
                            sub: {}
                        }
                    }
                },
                "BRY": {
                    name: [ "보령시", "보령", "시" ],
                    sub: {
                        "URBAN": {
                            name: [ "시내지역", "시내", "시내지역" ],
                            sub: {}
                        },
                        "RURAL": {
                            name: [ "시외지역", "시외", "시외지역" ],
                            sub: {}
                        },
                        "VIL0": {
                            name: [ "웅천읍", "웅천", "읍" ],
                            sub: {}
                        },
                        "VIL1": {
                            name: [ "남포면", "남포", "면" ],
                            sub: {}
                        },
                        "VIL2": {
                            name: [ "미산면", "미산", "면" ],
                            sub: {}
                        },
                        "VIL3": {
                            name: [ "성주면", "성주", "면" ],
                            sub: {}
                        },
                        "VIL4": {
                            name: [ "오천면", "오천", "면" ],
                            sub: {}
                        },
                        "VIL5": {
                            name: [ "주교면", "주교", "면" ],
                            sub: {}
                        },
                        "VIL6": {
                            name: [ "주산면", "주산", "면" ],
                            sub: {}
                        },
                        "VIL7": {
                            name: [ "주포면", "주포", "면" ],
                            sub: {}
                        },
                        "VIL8": {
                            name: [ "천북면", "천북", "면" ],
                            sub: {}
                        },
                        "VIL9": {
                            name: [ "청라면", "청라", "면" ],
                            sub: {}
                        },
                        "VIL10": {
                            name: [ "청소면", "청소", "면" ],
                            sub: {}
                        }
                    }
                },
                "SES": {
                    name: [ "서산시", "서산", "시" ],
                    sub: {
                        "URBAN": {
                            name: [ "시내지역", "시내", "시내지역" ],
                            sub: {}
                        },
                        "RURAL": {
                            name: [ "시외지역", "시외", "시외지역" ],
                            sub: {}
                        },
                        "VIL0": {
                            name: [ "대산읍", "대산", "읍" ],
                            sub: {}
                        },
                        "VIL1": {
                            name: [ "고북면", "고북", "면" ],
                            sub: {}
                        },
                        "VIL2": {
                            name: [ "부석면", "부석", "면" ],
                            sub: {}
                        },
                        "VIL3": {
                            name: [ "성연면", "성연", "면" ],
                            sub: {}
                        },
                        "VIL4": {
                            name: [ "운산면", "운산", "면" ],
                            sub: {}
                        },
                        "VIL5": {
                            name: [ "음암면", "음암", "면" ],
                            sub: {}
                        },
                        "VIL6": {
                            name: [ "인지면", "인지", "면" ],
                            sub: {}
                        },
                        "VIL7": {
                            name: [ "지곡면", "지곡", "면" ],
                            sub: {}
                        },
                        "VIL8": {
                            name: [ "팔봉면", "팔봉", "면" ],
                            sub: {}
                        },
                        "VIL9": {
                            name: [ "해미면", "해미", "면" ],
                            sub: {}
                        }
                    }
                },
                "ASA": {
                    name: [ "아산시", "아산", "시" ],
                    sub: {
                        "URBAN": {
                            name: [ "시내지역", "시내", "시내지역" ],
                            sub: {}
                        },
                        "RURAL": {
                            name: [ "시외지역", "시외", "시외지역" ],
                            sub: {}
                        },
                        "VIL0": {
                            name: [ "배방읍", "배방", "읍" ],
                            sub: {}
                        },
                        "VIL1": {
                            name: [ "염치읍", "염치", "읍" ],
                            sub: {}
                        },
                        "VIL2": {
                            name: [ "도고면", "도고", "면" ],
                            sub: {}
                        },
                        "VIL3": {
                            name: [ "둔포면", "둔포", "면" ],
                            sub: {}
                        },
                        "VIL4": {
                            name: [ "선장면", "선장", "면" ],
                            sub: {}
                        },
                        "VIL5": {
                            name: [ "송악면", "송악", "면" ],
                            sub: {}
                        },
                        "VIL6": {
                            name: [ "신창면", "신창", "면" ],
                            sub: {}
                        },
                        "VIL7": {
                            name: [ "영인면", "영인", "면" ],
                            sub: {}
                        },
                        "VIL8": {
                            name: [ "음봉면", "음봉", "면" ],
                            sub: {}
                        },
                        "VIL9": {
                            name: [ "인주면", "인주", "면" ],
                            sub: {}
                        },
                        "VIL10": {
                            name: [ "탕정면", "탕정", "면" ],
                            sub: {}
                        }
                    }
                },
                "CAN": {
                    name: [ "천안시", "천안", "시" ],
                    sub: {
                        "URBAN": {
                            name: [ "시내지역", "시내", "시내지역" ],
                            sub: {}
                        },
                        "RURAL": {
                            name: [ "시외지역", "시외", "시외지역" ],
                            sub: {}
                        },
                        "DIS0": {
                            name: [ "동남구", "동남", "구" ],
                            sub: {
                                "URBAN": {
                                    name: [ "시내지역", "시내", "시내지역" ],
                                    sub: {}
                                },
                                "RURAL": {
                                    name: [ "시외지역", "시외", "시외지역" ],
                                    sub: {}
                                },
                                "VIL0": {
                                    name: [ "목천읍", "목천", "읍" ],
                                    sub: {}
                                },
                                "VIL1": {
                                    name: [ "광덕면", "광덕", "면" ],
                                    sub: {}
                                },
                                "VIL2": {
                                    name: [ "동면", "동", "면" ],
                                    sub: {}
                                },
                                "VIL3": {
                                    name: [ "병천면", "병천", "면" ],
                                    sub: {}
                                },
                                "VIL4": {
                                    name: [ "북면", "북", "면" ],
                                    sub: {}
                                },
                                "VIL5": {
                                    name: [ "성남면", "성남", "면" ],
                                    sub: {}
                                },
                                "VIL6": {
                                    name: [ "수신면", "수신", "면" ],
                                    sub: {}
                                },
                                "VIL7": {
                                    name: [ "풍세면", "풍세", "면" ],
                                    sub: {}
                                }
                            }
                        },
                        "DIS1": {
                            name: [ "서북구", "서북", "구" ],
                            sub: {
                                "URBAN": {
                                    name: [ "시내지역", "시내", "시내지역" ],
                                    sub: {}
                                },
                                "RURAL": {
                                    name: [ "시외지역", "시외", "시외지역" ],
                                    sub: {}
                                },
                                "VIL0": {
                                    name: [ "성거읍", "성거", "읍" ],
                                    sub: {}
                                },
                                "VIL1": {
                                    name: [ "성환읍", "성환", "읍" ],
                                    sub: {}
                                },
                                "VIL2": {
                                    name: [ "직산읍", "직산", "읍" ],
                                    sub: {}
                                },
                                "VIL3": {
                                    name: [ "입장면", "입장", "면" ],
                                    sub: {}
                                }
                            }
                        }
                    }
                },
                "GSA": {
                    name: [ "금산군", "금산", "군" ],
                    sub: {
                        "VIL0": {
                            name: [ "금산읍", "금산", "읍" ],
                            sub: {}
                        },
                        "VIL1": {
                            name: [ "금성면", "금성", "면" ],
                            sub: {}
                        },
                        "VIL2": {
                            name: [ "군북면", "군북", "면" ],
                            sub: {}
                        },
                        "VIL3": {
                            name: [ "남이면", "남이", "면" ],
                            sub: {}
                        },
                        "VIL4": {
                            name: [ "남일면", "남일", "면" ],
                            sub: {}
                        },
                        "VIL5": {
                            name: [ "복수면", "복수", "면" ],
                            sub: {}
                        },
                        "VIL6": {
                            name: [ "부리면", "부리", "면" ],
                            sub: {}
                        },
                        "VIL7": {
                            name: [ "제원면", "제원", "면" ],
                            sub: {}
                        },
                        "VIL8": {
                            name: [ "진산면", "진산", "면" ],
                            sub: {}
                        },
                        "VIL9": {
                            name: [ "추부면", "추부", "면" ],
                            sub: {}
                        }
                    }
                },
                "BYO": {
                    name: [ "부여군", "부여", "군" ],
                    sub: {
                        "VIL0": {
                            name: [ "부여읍", "부여", "읍" ],
                            sub: {}
                        },
                        "VIL1": {
                            name: [ "구룡면", "구룡", "면" ],
                            sub: {}
                        },
                        "VIL2": {
                            name: [ "규암면", "규암", "면" ],
                            sub: {}
                        },
                        "VIL3": {
                            name: [ "남면", "남", "면" ],
                            sub: {}
                        },
                        "VIL4": {
                            name: [ "내산면", "내산", "면" ],
                            sub: {}
                        },
                        "VIL5": {
                            name: [ "석성면", "석성", "면" ],
                            sub: {}
                        },
                        "VIL6": {
                            name: [ "세도면", "세도", "면" ],
                            sub: {}
                        },
                        "VIL7": {
                            name: [ "양화면", "양화", "면" ],
                            sub: {}
                        },
                        "VIL8": {
                            name: [ "옥산면", "옥산", "면" ],
                            sub: {}
                        },
                        "VIL9": {
                            name: [ "외산면", "외산", "면" ],
                            sub: {}
                        },
                        "VIL10": {
                            name: [ "은산면", "은산", "면" ],
                            sub: {}
                        },
                        "VIL11": {
                            name: [ "임천면", "임천", "면" ],
                            sub: {}
                        },
                        "VIL12": {
                            name: [ "장암면", "장암", "면" ],
                            sub: {}
                        },
                        "VIL13": {
                            name: [ "초촌면", "초촌", "면" ],
                            sub: {}
                        },
                        "VIL14": {
                            name: [ "충화면", "충화", "면" ],
                            sub: {}
                        },
                        "VIL15": {
                            name: [ "홍산면", "홍산", "면" ],
                            sub: {}
                        }
                    }
                },
                "SEO": {
                    name: [ "서천군", "서천", "군" ],
                    sub: {
                        "VIL0": {
                            name: [ "서천읍", "서천", "읍" ],
                            sub: {}
                        },
                        "VIL1": {
                            name: [ "장항읍", "장항", "읍" ],
                            sub: {}
                        },
                        "VIL2": {
                            name: [ "기산면", "기산", "면" ],
                            sub: {}
                        },
                        "VIL3": {
                            name: [ "마산면", "마산", "면" ],
                            sub: {}
                        },
                        "VIL4": {
                            name: [ "마서면", "마서", "면" ],
                            sub: {}
                        },
                        "VIL5": {
                            name: [ "문산면", "문산", "면" ],
                            sub: {}
                        },
                        "VIL6": {
                            name: [ "비인면", "비인", "면" ],
                            sub: {}
                        },
                        "VIL7": {
                            name: [ "서면", "서", "면" ],
                            sub: {}
                        },
                        "VIL8": {
                            name: [ "시초면", "시초", "면" ],
                            sub: {}
                        },
                        "VIL9": {
                            name: [ "종천면", "종천", "면" ],
                            sub: {}
                        },
                        "VIL10": {
                            name: [ "한산면", "한산", "면" ],
                            sub: {}
                        },
                        "VIL11": {
                            name: [ "화양면", "화양", "면" ],
                            sub: {}
                        },
                        "VIL12": {
                            name: [ "판교면", "판교", "면" ],
                            sub: {}
                        }
                    }
                },
                "YSA": {
                    name: [ "예산군", "예산", "군" ],
                    sub: {
                        "VIL0": {
                            name: [ "예산읍", "예산", "읍" ],
                            sub: {}
                        },
                        "VIL1": {
                            name: [ "삽교읍", "삽교", "읍" ],
                            sub: {}
                        },
                        "VIL2": {
                            name: [ "고덕면", "고덕", "면" ],
                            sub: {}
                        },
                        "VIL3": {
                            name: [ "광시면", "광시", "면" ],
                            sub: {}
                        },
                        "VIL4": {
                            name: [ "대흥면", "대흥", "면" ],
                            sub: {}
                        },
                        "VIL5": {
                            name: [ "대술면", "대술", "면" ],
                            sub: {}
                        },
                        "VIL6": {
                            name: [ "덕산면", "덕산", "면" ],
                            sub: {}
                        },
                        "VIL7": {
                            name: [ "봉산면", "봉산", "면" ],
                            sub: {}
                        },
                        "VIL8": {
                            name: [ "신암면", "신암", "면" ],
                            sub: {}
                        },
                        "VIL9": {
                            name: [ "신양면", "신양", "면" ],
                            sub: {}
                        },
                        "VIL10": {
                            name: [ "오가면", "오가", "면" ],
                            sub: {}
                        },
                        "VIL11": {
                            name: [ "응봉면", "응봉", "면" ],
                            sub: {}
                        }
                    }
                },
                "CHY": {
                    name: [ "청양군", "청양", "군" ],
                    sub: {
                        "VIL0": {
                            name: [ "청양읍", "청양", "읍" ],
                            sub: {}
                        },
                        "VIL1": {
                            name: [ "남양면", "남양", "면" ],
                            sub: {}
                        },
                        "VIL2": {
                            name: [ "대치면", "대치", "면" ],
                            sub: {}
                        },
                        "VIL3": {
                            name: [ "목면", "목", "면" ],
                            sub: {}
                        },
                        "VIL4": {
                            name: [ "비봉면", "비봉", "면" ],
                            sub: {}
                        },
                        "VIL5": {
                            name: [ "운곡면", "운곡", "면" ],
                            sub: {}
                        },
                        "VIL6": {
                            name: [ "장평면", "장평", "면" ],
                            sub: {}
                        },
                        "VIL7": {
                            name: [ "정산면", "정산", "면" ],
                            sub: {}
                        },
                        "VIL8": {
                            name: [ "청남면", "청남", "면" ],
                            sub: {}
                        },
                        "VIL9": {
                            name: [ "화성면", "화성", "면" ],
                            sub: {}
                        }
                    }
                },
                "TAE": {
                    name: [ "태안군", "태안", "군" ],
                    sub: {
                        "VIL0": {
                            name: [ "태안읍", "태안", "읍" ],
                            sub: {}
                        },
                        "VIL1": {
                            name: [ "안면읍", "안면", "읍" ],
                            sub: {}
                        },
                        "VIL2": {
                            name: [ "고남면", "고남", "면" ],
                            sub: {}
                        },
                        "VIL3": {
                            name: [ "근흥면", "근흥", "면" ],
                            sub: {}
                        },
                        "VIL4": {
                            name: [ "남면", "남", "면" ],
                            sub: {}
                        },
                        "VIL5": {
                            name: [ "소원면", "소원", "면" ],
                            sub: {}
                        },
                        "VIL6": {
                            name: [ "원북면", "원북", "면" ],
                            sub: {}
                        },
                        "VIL7": {
                            name: [ "이원면", "이원", "면" ],
                            sub: {}
                        }
                    }
                },
                "HNS": {
                    name: [ "홍성군", "홍성", "군" ],
                    sub: {
                        "VIL0": {
                            name: [ "광천읍", "광천", "읍" ],
                            sub: {}
                        },
                        "VIL1": {
                            name: [ "홍북읍", "홍북", "읍" ],
                            sub: {}
                        },
                        "VIL2": {
                            name: [ "홍성읍", "홍성", "읍" ],
                            sub: {}
                        },
                        "VIL3": {
                            name: [ "갈산면", "갈산", "면" ],
                            sub: {}
                        },
                        "VIL4": {
                            name: [ "결성면", "결성", "면" ],
                            sub: {}
                        },
                        "VIL5": {
                            name: [ "구항면", "구항", "면" ],
                            sub: {}
                        },
                        "VIL6": {
                            name: [ "금마면", "금마", "면" ],
                            sub: {}
                        },
                        "VIL7": {
                            name: [ "서부면", "서부", "면" ],
                            sub: {}
                        },
                        "VIL8": {
                            name: [ "은하면", "은하", "면" ],
                            sub: {}
                        },
                        "VIL9": {
                            name: [ "장곡면", "장곡", "면" ],
                            sub: {}
                        },
                        "VIL10": {
                            name: [ "홍동면", "홍동", "면" ],
                            sub: {}
                        }
                    }
                }
            }
        },
        "NJE": {
            name: [ "전라북도", "전북", "특별자치도" ],
            sub: {
                "GUN": {
                    name: [ "군산시", "군산", "시" ],
                    sub: {
                        "URBAN": {
                            name: [ "시내지역", "시내", "시내지역" ],
                            sub: {}
                        },
                        "RURAL": {
                            name: [ "시외지역", "시외", "시외지역" ],
                            sub: {}
                        },
                        "VIL0": {
                            name: [ "옥구읍", "옥구", "읍" ],
                            sub: {}
                        },
                        "VIL1": {
                            name: [ "개정면", "개정", "면" ],
                            sub: {}
                        },
                        "VIL2": {
                            name: [ "나포면", "나포", "면" ],
                            sub: {}
                        },
                        "VIL3": {
                            name: [ "대야면", "대야", "면" ],
                            sub: {}
                        },
                        "VIL4": {
                            name: [ "서수면", "서수", "면" ],
                            sub: {}
                        },
                        "VIL5": {
                            name: [ "성산면", "성산", "면" ],
                            sub: {}
                        },
                        "VIL6": {
                            name: [ "옥도면", "옥도", "면" ],
                            sub: {}
                        },
                        "VIL7": {
                            name: [ "옥산면", "옥산", "면" ],
                            sub: {}
                        },
                        "VIL8": {
                            name: [ "옥서면", "옥서", "면" ],
                            sub: {}
                        },
                        "VIL9": {
                            name: [ "임피면", "임피", "면" ],
                            sub: {}
                        },
                        "VIL10": {
                            name: [ "회현면", "회현", "면" ],
                            sub: {}
                        }
                    }
                },
                "GIJ": {
                    name: [ "김제시", "김제", "시" ],
                    sub: {
                        "URBAN": {
                            name: [ "시내지역", "시내", "시내지역" ],
                            sub: {}
                        },
                        "RURAL": {
                            name: [ "시외지역", "시외", "시외지역" ],
                            sub: {}
                        },
                        "VIL0": {
                            name: [ "만경읍", "만경", "읍" ],
                            sub: {}
                        },
                        "VIL1": {
                            name: [ "공덕면", "공덕", "면" ],
                            sub: {}
                        },
                        "VIL2": {
                            name: [ "광활면", "광활", "면" ],
                            sub: {}
                        },
                        "VIL3": {
                            name: [ "금구면", "금구", "면" ],
                            sub: {}
                        },
                        "VIL4": {
                            name: [ "금산면", "금산", "면" ],
                            sub: {}
                        },
                        "VIL5": {
                            name: [ "백구면", "백구", "면" ],
                            sub: {}
                        },
                        "VIL6": {
                            name: [ "백산면", "백산", "면" ],
                            sub: {}
                        },
                        "VIL7": {
                            name: [ "봉남면", "봉남", "면" ],
                            sub: {}
                        },
                        "VIL8": {
                            name: [ "부량면", "부량", "면" ],
                            sub: {}
                        },
                        "VIL9": {
                            name: [ "성덕면", "성덕", "면" ],
                            sub: {}
                        },
                        "VIL10": {
                            name: [ "용지면", "용지", "면" ],
                            sub: {}
                        },
                        "VIL11": {
                            name: [ "죽산면", "죽산", "면" ],
                            sub: {}
                        },
                        "VIL12": {
                            name: [ "진봉면", "진봉", "면" ],
                            sub: {}
                        },
                        "VIL13": {
                            name: [ "청하면", "청하", "면" ],
                            sub: {}
                        },
                        "VIL14": {
                            name: [ "황산면", "황산", "면" ],
                            sub: {}
                        }
                    }
                },
                "NWO": {
                    name: [ "남원시", "남원", "시" ],
                    sub: {
                        "URBAN": {
                            name: [ "시내지역", "시내", "시내지역" ],
                            sub: {}
                        },
                        "RURAL": {
                            name: [ "시외지역", "시외", "시외지역" ],
                            sub: {}
                        },
                        "VIL0": {
                            name: [ "운봉읍", "운봉", "읍" ],
                            sub: {}
                        },
                        "VIL1": {
                            name: [ "금지면", "금지", "면" ],
                            sub: {}
                        },
                        "VIL2": {
                            name: [ "대강면", "대강", "면" ],
                            sub: {}
                        },
                        "VIL3": {
                            name: [ "대산면", "대산", "면" ],
                            sub: {}
                        },
                        "VIL4": {
                            name: [ "덕과면", "덕과", "면" ],
                            sub: {}
                        },
                        "VIL5": {
                            name: [ "보절면", "보절", "면" ],
                            sub: {}
                        },
                        "VIL6": {
                            name: [ "사매면", "사매", "면" ],
                            sub: {}
                        },
                        "VIL7": {
                            name: [ "산내면", "산내", "면" ],
                            sub: {}
                        },
                        "VIL8": {
                            name: [ "산동면", "산동", "면" ],
                            sub: {}
                        },
                        "VIL9": {
                            name: [ "송동면", "송동", "면" ],
                            sub: {}
                        },
                        "VIL10": {
                            name: [ "수지면", "수지", "면" ],
                            sub: {}
                        },
                        "VIL11": {
                            name: [ "아영면", "아영", "면" ],
                            sub: {}
                        },
                        "VIL12": {
                            name: [ "이백면", "이백", "면" ],
                            sub: {}
                        },
                        "VIL13": {
                            name: [ "인월면", "인월", "면" ],
                            sub: {}
                        },
                        "VIL14": {
                            name: [ "주생면", "주생", "면" ],
                            sub: {}
                        },
                        "VIL15": {
                            name: [ "주천면", "주천", "면" ],
                            sub: {}
                        }
                    }
                },
                "IKS": {
                    name: [ "익산시", "익산", "시" ],
                    sub: {
                        "URBAN": {
                            name: [ "시내지역", "시내", "시내지역" ],
                            sub: {}
                        },
                        "RURAL": {
                            name: [ "시외지역", "시외", "시외지역" ],
                            sub: {}
                        },
                        "VIL0": {
                            name: [ "함열읍", "함열", "읍" ],
                            sub: {}
                        },
                        "VIL1": {
                            name: [ "금마면", "금마", "면" ],
                            sub: {}
                        },
                        "VIL2": {
                            name: [ "낭산면", "낭산", "면" ],
                            sub: {}
                        },
                        "VIL3": {
                            name: [ "망성면", "망성", "면" ],
                            sub: {}
                        },
                        "VIL4": {
                            name: [ "삼기면", "삼기", "면" ],
                            sub: {}
                        },
                        "VIL5": {
                            name: [ "성당면", "성당", "면" ],
                            sub: {}
                        },
                        "VIL6": {
                            name: [ "여산면", "여산", "면" ],
                            sub: {}
                        },
                        "VIL7": {
                            name: [ "오산면", "오산", "면" ],
                            sub: {}
                        },
                        "VIL8": {
                            name: [ "왕궁면", "왕궁", "면" ],
                            sub: {}
                        },
                        "VIL9": {
                            name: [ "용동면", "용동", "면" ],
                            sub: {}
                        },
                        "VIL10": {
                            name: [ "용안면", "용안", "면" ],
                            sub: {}
                        },
                        "VIL11": {
                            name: [ "웅포면", "웅포", "면" ],
                            sub: {}
                        },
                        "VIL12": {
                            name: [ "춘포면", "춘포", "면" ],
                            sub: {}
                        },
                        "VIL13": {
                            name: [ "함라면", "함라", "면" ],
                            sub: {}
                        },
                        "VIL14": {
                            name: [ "황등면", "황등", "면" ],
                            sub: {}
                        }
                    }
                },
                "JNJ": {
                    name: [ "전주시", "전주", "시" ],
                    sub: {
                        "DIS0": {
                            name: [ "완산구", "완산", "구" ],
                            sub: {}
                        },
                        "DIS1": {
                            name: [ "덕진구", "덕진", "구" ],
                            sub: {}
                        }
                    }
                },
                "JGP": {
                    name: [ "정읍시", "정읍", "시" ],
                    sub: {
                        "URBAN": {
                            name: [ "시내지역", "시내", "시내지역" ],
                            sub: {}
                        },
                        "RURAL": {
                            name: [ "시외지역", "시외", "시외지역" ],
                            sub: {}
                        },
                        "VIL0": {
                            name: [ "신태인읍", "신태인", "읍" ],
                            sub: {}
                        },
                        "VIL1": {
                            name: [ "감곡면", "감곡", "면" ],
                            sub: {}
                        },
                        "VIL2": {
                            name: [ "고부면", "고부", "면" ],
                            sub: {}
                        },
                        "VIL3": {
                            name: [ "덕천면", "덕천", "면" ],
                            sub: {}
                        },
                        "VIL4": {
                            name: [ "북면", "북", "면" ],
                            sub: {}
                        },
                        "VIL5": {
                            name: [ "산내면", "산내", "면" ],
                            sub: {}
                        },
                        "VIL6": {
                            name: [ "산외면", "산외", "면" ],
                            sub: {}
                        },
                        "VIL7": {
                            name: [ "소성면", "소성", "면" ],
                            sub: {}
                        },
                        "VIL8": {
                            name: [ "영원면", "영원", "면" ],
                            sub: {}
                        },
                        "VIL9": {
                            name: [ "옹동면", "옹동", "면" ],
                            sub: {}
                        },
                        "VIL10": {
                            name: [ "이평면", "이평", "면" ],
                            sub: {}
                        },
                        "VIL11": {
                            name: [ "입암면", "입암", "면" ],
                            sub: {}
                        },
                        "VIL12": {
                            name: [ "정우면", "정우", "면" ],
                            sub: {}
                        },
                        "VIL13": {
                            name: [ "칠보면", "칠보", "면" ],
                            sub: {}
                        },
                        "VIL14": {
                            name: [ "태인면", "태인", "면" ],
                            sub: {}
                        }
                    }
                },
                "GCH": {
                    name: [ "고창군", "고창", "군" ],
                    sub: {
                        "VIL0": {
                            name: [ "고창읍", "고창", "읍" ],
                            sub: {}
                        },
                        "VIL1": {
                            name: [ "고수면", "고수", "면" ],
                            sub: {}
                        },
                        "VIL2": {
                            name: [ "공음면", "공음", "면" ],
                            sub: {}
                        },
                        "VIL3": {
                            name: [ "대산면", "대산", "면" ],
                            sub: {}
                        },
                        "VIL4": {
                            name: [ "무장면", "무장", "면" ],
                            sub: {}
                        },
                        "VIL5": {
                            name: [ "부안면", "부안", "면" ],
                            sub: {}
                        },
                        "VIL6": {
                            name: [ "상하면", "상하", "면" ],
                            sub: {}
                        },
                        "VIL7": {
                            name: [ "성내면", "성내", "면" ],
                            sub: {}
                        },
                        "VIL8": {
                            name: [ "성동면", "성동", "면" ],
                            sub: {}
                        },
                        "VIL9": {
                            name: [ "신림면", "신림", "면" ],
                            sub: {}
                        },
                        "VIL10": {
                            name: [ "심원면", "심원", "면" ],
                            sub: {}
                        },
                        "VIL11": {
                            name: [ "아산면", "아산", "면" ],
                            sub: {}
                        },
                        "VIL12": {
                            name: [ "해리면", "해리", "면" ],
                            sub: {}
                        },
                        "VIL13": {
                            name: [ "흥덕면", "흥덕", "면" ],
                            sub: {}
                        }
                    }
                },
                "MUJ": {
                    name: [ "무주군", "무주", "군" ],
                    sub: {
                        "VIL0": {
                            name: [ "무주읍", "무주", "읍" ],
                            sub: {}
                        },
                        "VIL1": {
                            name: [ "무풍면", "무풍", "면" ],
                            sub: {}
                        },
                        "VIL2": {
                            name: [ "부남면", "부남", "면" ],
                            sub: {}
                        },
                        "VIL3": {
                            name: [ "설천면", "설천", "면" ],
                            sub: {}
                        },
                        "VIL4": {
                            name: [ "안성면", "안성", "면" ],
                            sub: {}
                        },
                        "VIL5": {
                            name: [ "적상면", "적상", "면" ],
                            sub: {}
                        }
                    }
                },
                "BUA": {
                    name: [ "부안군", "부안", "군" ],
                    sub: {
                        "VIL0": {
                            name: [ "부안읍", "부안", "읍" ],
                            sub: {}
                        },
                        "VIL1": {
                            name: [ "계화면", "계화", "면" ],
                            sub: {}
                        },
                        "VIL2": {
                            name: [ "동진면", "동진", "면" ],
                            sub: {}
                        },
                        "VIL3": {
                            name: [ "변산면", "변산", "면" ],
                            sub: {}
                        },
                        "VIL4": {
                            name: [ "상서면", "상서", "면" ],
                            sub: {}
                        },
                        "VIL5": {
                            name: [ "주산면", "주산", "면" ],
                            sub: {}
                        },
                        "VIL6": {
                            name: [ "하서면", "하서", "면" ],
                            sub: {}
                        },
                        "VIL7": {
                            name: [ "행안면", "행안", "면" ],
                            sub: {}
                        },
                        "VIL8": {
                            name: [ "보안면", "보안", "면" ],
                            sub: {}
                        },
                        "VIL9": {
                            name: [ "줄포면", "줄포", "면" ],
                            sub: {}
                        },
                        "VIL10": {
                            name: [ "진서면", "진서", "면" ],
                            sub: {}
                        },
                        "VIL11": {
                            name: [ "백산면", "백산", "면" ],
                            sub: {}
                        },
                        "VIL12": {
                            name: [ "위도면", "위도", "면" ],
                            sub: {}
                        }
                    }
                },
                "SUC": {
                    name: [ "순창군", "순창", "군" ],
                    sub: {
                        "VIL0": {
                            name: [ "순창읍", "순창", "읍" ],
                            sub: {}
                        },
                        "VIL1": {
                            name: [ "구림면", "구림", "면" ],
                            sub: {}
                        },
                        "VIL2": {
                            name: [ "금과면", "금과", "면" ],
                            sub: {}
                        },
                        "VIL3": {
                            name: [ "동계면", "동계", "면" ],
                            sub: {}
                        },
                        "VIL4": {
                            name: [ "복흥면", "복흥", "면" ],
                            sub: {}
                        },
                        "VIL5": {
                            name: [ "쌍치면", "쌍치", "면" ],
                            sub: {}
                        },
                        "VIL6": {
                            name: [ "유등면", "유등", "면" ],
                            sub: {}
                        },
                        "VIL7": {
                            name: [ "인계면", "인계", "면" ],
                            sub: {}
                        },
                        "VIL8": {
                            name: [ "적성면", "적성", "면" ],
                            sub: {}
                        },
                        "VIL9": {
                            name: [ "팔덕면", "팔덕", "면" ],
                            sub: {}
                        },
                        "VIL10": {
                            name: [ "풍산면", "풍산", "면" ],
                            sub: {}
                        }
                    }
                },
                "WAN": {
                    name: [ "완주군", "완주", "군" ],
                    sub: {
                        "VIL0": {
                            name: [ "봉동읍", "봉동", "읍" ],
                            sub: {}
                        },
                        "VIL1": {
                            name: [ "삼례읍", "삼례", "읍" ],
                            sub: {}
                        },
                        "VIL2": {
                            name: [ "용진읍", "용진", "읍" ],
                            sub: {}
                        },
                        "VIL3": {
                            name: [ "경천면", "경천", "면" ],
                            sub: {}
                        },
                        "VIL4": {
                            name: [ "고산면", "고산", "면" ],
                            sub: {}
                        },
                        "VIL5": {
                            name: [ "구이면", "구이", "면" ],
                            sub: {}
                        },
                        "VIL6": {
                            name: [ "동상면", "동상", "면" ],
                            sub: {}
                        },
                        "VIL7": {
                            name: [ "비봉면", "비봉", "면" ],
                            sub: {}
                        },
                        "VIL8": {
                            name: [ "상관면", "상관", "면" ],
                            sub: {}
                        },
                        "VIL9": {
                            name: [ "소양면", "소양", "면" ],
                            sub: {}
                        },
                        "VIL10": {
                            name: [ "운주면", "운주", "면" ],
                            sub: {}
                        },
                        "VIL11": {
                            name: [ "이서면", "이서", "면" ],
                            sub: {}
                        },
                        "VIL12": {
                            name: [ "화산면", "화산", "면" ],
                            sub: {}
                        }
                    }
                },
                "IMS": {
                    name: [ "임실군", "임실", "군" ],
                    sub: {
                        "VIL0": {
                            name: [ "임실읍", "임실", "읍" ],
                            sub: {}
                        },
                        "VIL1": {
                            name: [ "강진면", "강진", "면" ],
                            sub: {}
                        },
                        "VIL2": {
                            name: [ "관촌면", "관촌", "면" ],
                            sub: {}
                        },
                        "VIL3": {
                            name: [ "덕치면", "덕치", "면" ],
                            sub: {}
                        },
                        "VIL4": {
                            name: [ "삼계면", "삼계", "면" ],
                            sub: {}
                        },
                        "VIL5": {
                            name: [ "성수면", "성수", "면" ],
                            sub: {}
                        },
                        "VIL6": {
                            name: [ "신덕면", "신덕", "면" ],
                            sub: {}
                        },
                        "VIL7": {
                            name: [ "신평면", "신평", "면" ],
                            sub: {}
                        },
                        "VIL8": {
                            name: [ "오수면", "오수", "면" ],
                            sub: {}
                        },
                        "VIL9": {
                            name: [ "운암면", "운암", "면" ],
                            sub: {}
                        },
                        "VIL10": {
                            name: [ "지사면", "지사", "면" ],
                            sub: {}
                        },
                        "VIL11": {
                            name: [ "청웅면", "청웅", "면" ],
                            sub: {}
                        }
                    }
                },
                "JAS": {
                    name: [ "장수군", "장수", "군" ],
                    sub: {
                        "VIL0": {
                            name: [ "장수읍", "장수", "읍" ],
                            sub: {}
                        },
                        "VIL1": {
                            name: [ "계남면", "계남", "면" ],
                            sub: {}
                        },
                        "VIL2": {
                            name: [ "계북면", "계북", "면" ],
                            sub: {}
                        },
                        "VIL3": {
                            name: [ "번암면", "번암", "면" ],
                            sub: {}
                        },
                        "VIL4": {
                            name: [ "산서면", "산서", "면" ],
                            sub: {}
                        },
                        "VIL5": {
                            name: [ "장계면", "장계", "면" ],
                            sub: {}
                        },
                        "VIL6": {
                            name: [ "천천면", "천천", "면" ],
                            sub: {}
                        }
                    }
                },
                "JAN": {
                    name: [ "진안군", "진안", "군" ],
                    sub: {
                        "VIL0": {
                            name: [ "진안읍", "진안", "읍" ],
                            sub: {}
                        },
                        "VIL1": {
                            name: [ "동향면", "동향", "면" ],
                            sub: {}
                        },
                        "VIL2": {
                            name: [ "마령면", "마령", "면" ],
                            sub: {}
                        },
                        "VIL3": {
                            name: [ "백운면", "백운", "면" ],
                            sub: {}
                        },
                        "VIL4": {
                            name: [ "부귀면", "부귀", "면" ],
                            sub: {}
                        },
                        "VIL5": {
                            name: [ "상전면", "상전", "면" ],
                            sub: {}
                        },
                        "VIL6": {
                            name: [ "성수면", "성수", "면" ],
                            sub: {}
                        },
                        "VIL7": {
                            name: [ "안천면", "안천", "면" ],
                            sub: {}
                        },
                        "VIL8": {
                            name: [ "용담면", "용담", "면" ],
                            sub: {}
                        },
                        "VIL9": {
                            name: [ "정천면", "정천", "면" ],
                            sub: {}
                        },
                        "VIL10": {
                            name: [ "주천면", "주천", "면" ],
                            sub: {}
                        }
                    }
                }
            }
        },
        "SJE": {
            name: [ "전라남도", "전남", "도" ],
            sub: {
                "MOK": {
                    name: [ "목포시", "목포", "시" ],
                    sub: {}
                },
                "YSU": {
                    name: [ "여수시", "여수", "시" ],
                    sub: {
                        "URBAN": {
                            name: [ "시내지역", "시내", "시내지역" ],
                            sub: {}
                        },
                        "RURAL": {
                            name: [ "시외지역", "시외", "시외지역" ],
                            sub: {}
                        },
                        "VIL0": {
                            name: [ "돌산읍", "돌산", "읍" ],
                            sub: {}
                        },
                        "VIL1": {
                            name: [ "남면", "남", "면" ],
                            sub: {}
                        },
                        "VIL2": {
                            name: [ "삼산면", "삼산", "면" ],
                            sub: {}
                        },
                        "VIL3": {
                            name: [ "소라면", "소라", "면" ],
                            sub: {}
                        },
                        "VIL4": {
                            name: [ "율촌면", "율촌", "면" ],
                            sub: {}
                        },
                        "VIL5": {
                            name: [ "화양면", "화양", "면" ],
                            sub: {}
                        },
                        "VIL6": {
                            name: [ "화정면", "화정", "면" ],
                            sub: {}
                        }
                    }
                },
                "SUN": {
                    name: [ "순천시", "순천", "시" ],
                    sub: {
                        "URBAN": {
                            name: [ "시내지역", "시내", "시내지역" ],
                            sub: {}
                        },
                        "RURAL": {
                            name: [ "시외지역", "시외", "시외지역" ],
                            sub: {}
                        },
                        "VIL0": {
                            name: [ "승주읍", "승주", "읍" ],
                            sub: {}
                        },
                        "VIL1": {
                            name: [ "해룡면", "해룡", "면" ],
                            sub: {}
                        },
                        "VIL2": {
                            name: [ "서면", "서", "면" ],
                            sub: {}
                        },
                        "VIL3": {
                            name: [ "황전면", "황전", "면" ],
                            sub: {}
                        },
                        "VIL4": {
                            name: [ "월등면", "월등", "면" ],
                            sub: {}
                        },
                        "VIL5": {
                            name: [ "주암면", "주암", "면" ],
                            sub: {}
                        },
                        "VIL6": {
                            name: [ "송광면", "송광", "면" ],
                            sub: {}
                        },
                        "VIL7": {
                            name: [ "외서면", "외서", "면" ],
                            sub: {}
                        },
                        "VIL8": {
                            name: [ "낙안면", "낙안", "면" ],
                            sub: {}
                        },
                        "VIL9": {
                            name: [ "벌량면", "벌량", "면" ],
                            sub: {}
                        },
                        "VIL10": {
                            name: [ "상사면", "상사", "면" ],
                            sub: {}
                        }
                    }
                },
                "NAJ": {
                    name: [ "나주시", "나주", "시" ],
                    sub: {
                        "URBAN": {
                            name: [ "시내지역", "시내", "시내지역" ],
                            sub: {}
                        },
                        "RURAL": {
                            name: [ "시외지역", "시외", "시외지역" ],
                            sub: {}
                        },
                        "VIL0": {
                            name: [ "남평읍", "남평", "읍" ],
                            sub: {}
                        },
                        "VIL1": {
                            name: [ "공산면", "공산", "면" ],
                            sub: {}
                        },
                        "VIL2": {
                            name: [ "금천면", "금천", "면" ],
                            sub: {}
                        },
                        "VIL3": {
                            name: [ "노안면", "노안", "면" ],
                            sub: {}
                        },
                        "VIL4": {
                            name: [ "다도면", "다도", "면" ],
                            sub: {}
                        },
                        "VIL5": {
                            name: [ "다시면", "다시", "면" ],
                            sub: {}
                        },
                        "VIL6": {
                            name: [ "동강면", "동강", "면" ],
                            sub: {}
                        },
                        "VIL7": {
                            name: [ "문평면", "문평", "면" ],
                            sub: {}
                        },
                        "VIL8": {
                            name: [ "반남면", "반남", "면" ],
                            sub: {}
                        },
                        "VIL9": {
                            name: [ "봉황면", "봉황", "면" ],
                            sub: {}
                        },
                        "VIL10": {
                            name: [ "산포면", "산포", "면" ],
                            sub: {}
                        },
                        "VIL11": {
                            name: [ "세지면", "세지", "면" ],
                            sub: {}
                        },
                        "VIL12": {
                            name: [ "왕곡면", "왕곡", "면" ],
                            sub: {}
                        }
                    }
                },
                "GWY": {
                    name: [ "광양시", "광양", "시" ],
                    sub: {
                        "URBAN": {
                            name: [ "시내지역", "시내", "시내지역" ],
                            sub: {}
                        },
                        "RURAL": {
                            name: [ "시외지역", "시외", "시외지역" ],
                            sub: {}
                        },
                        "VIL0": {
                            name: [ "광양읍", "광양", "읍" ],
                            sub: {}
                        },
                        "VIL1": {
                            name: [ "다압면", "다압", "면" ],
                            sub: {}
                        },
                        "VIL2": {
                            name: [ "봉강면", "봉강", "면" ],
                            sub: {}
                        },
                        "VIL3": {
                            name: [ "옥곡면", "옥곡", "면" ],
                            sub: {}
                        },
                        "VIL4": {
                            name: [ "옥룡면", "옥룡", "면" ],
                            sub: {}
                        },
                        "VIL5": {
                            name: [ "진상면", "진상", "면" ],
                            sub: {}
                        },
                        "VIL6": {
                            name: [ "진월면", "진월", "면" ],
                            sub: {}
                        }
                    }
                },
                "DMY": {
                    name: [ "담양군", "담양", "군" ],
                    sub: {
                        "VIL0": {
                            name: [ "담양읍", "담양", "읍" ],
                            sub: {}
                        },
                        "VIL1": {
                            name: [ "고서면", "고서", "면" ],
                            sub: {}
                        },
                        "VIL2": {
                            name: [ "금성면", "금성", "면" ],
                            sub: {}
                        },
                        "VIL3": {
                            name: [ "가사문학면", "가사문학", "면" ],
                            sub: {}
                        },
                        "VIL4": {
                            name: [ "대덕면", "대덕", "면" ],
                            sub: {}
                        },
                        "VIL5": {
                            name: [ "대전면", "대전", "면" ],
                            sub: {}
                        },
                        "VIL6": {
                            name: [ "무정면", "무정", "면" ],
                            sub: {}
                        },
                        "VIL7": {
                            name: [ "봉산면", "봉산", "면" ],
                            sub: {}
                        },
                        "VIL8": {
                            name: [ "수북면", "수북", "면" ],
                            sub: {}
                        },
                        "VIL9": {
                            name: [ "용면", "용", "면" ],
                            sub: {}
                        },
                        "VIL10": {
                            name: [ "월산면", "월산", "면" ],
                            sub: {}
                        },
                        "VIL11": {
                            name: [ "창평면", "창평", "면" ],
                            sub: {}
                        }
                    }
                },
                "GOK": {
                    name: [ "곡성군", "곡성", "군" ],
                    sub: {
                        "VIL0": {
                            name: [ "곡성읍", "곡성", "읍" ],
                            sub: {}
                        },
                        "VIL1": {
                            name: [ "겸면", "겸", "면" ],
                            sub: {}
                        },
                        "VIL2": {
                            name: [ "고달면", "고달", "면" ],
                            sub: {}
                        },
                        "VIL3": {
                            name: [ "목사동면", "목사동", "면" ],
                            sub: {}
                        },
                        "VIL4": {
                            name: [ "삼기면", "삼기", "면" ],
                            sub: {}
                        },
                        "VIL5": {
                            name: [ "석곡면", "석곡", "면" ],
                            sub: {}
                        },
                        "VIL6": {
                            name: [ "오곡면", "오곡", "면" ],
                            sub: {}
                        },
                        "VIL7": {
                            name: [ "오산면", "오산", "면" ],
                            sub: {}
                        },
                        "VIL8": {
                            name: [ "옥과면", "옥과", "면" ],
                            sub: {}
                        },
                        "VIL9": {
                            name: [ "입면", "입", "면" ],
                            sub: {}
                        },
                        "VIL10": {
                            name: [ "죽곡면", "죽곡", "면" ],
                            sub: {}
                        }
                    }
                },
                "GUR": {
                    name: [ "구례군", "구례", "군" ],
                    sub: {
                        "VIL0": {
                            name: [ "구례읍", "구례", "읍" ],
                            sub: {}
                        },
                        "VIL1": {
                            name: [ "간전면", "간전", "면" ],
                            sub: {}
                        },
                        "VIL2": {
                            name: [ "광의면", "광의", "면" ],
                            sub: {}
                        },
                        "VIL3": {
                            name: [ "마산면", "마산", "면" ],
                            sub: {}
                        },
                        "VIL4": {
                            name: [ "문척면", "문척", "면" ],
                            sub: {}
                        },
                        "VIL5": {
                            name: [ "산동면", "산동", "면" ],
                            sub: {}
                        },
                        "VIL6": {
                            name: [ "용방면", "용방", "면" ],
                            sub: {}
                        },
                        "VIL7": {
                            name: [ "토지면", "토지", "면" ],
                            sub: {}
                        }
                    }
                },
                "GOH": {
                    name: [ "고흥군", "고흥", "군" ],
                    sub: {
                        "VIL0": {
                            name: [ "고흥읍", "고흥", "읍" ],
                            sub: {}
                        },
                        "VIL1": {
                            name: [ "도양읍", "도양", "읍" ],
                            sub: {}
                        },
                        "VIL2": {
                            name: [ "과역면", "과역", "면" ],
                            sub: {}
                        },
                        "VIL3": {
                            name: [ "금산면", "금산", "면" ],
                            sub: {}
                        },
                        "VIL4": {
                            name: [ "남양면", "남양", "면" ],
                            sub: {}
                        },
                        "VIL5": {
                            name: [ "대서면", "대서", "면" ],
                            sub: {}
                        },
                        "VIL6": {
                            name: [ "도덕면", "도덕", "면" ],
                            sub: {}
                        },
                        "VIL7": {
                            name: [ "도화면", "도화", "면" ],
                            sub: {}
                        },
                        "VIL8": {
                            name: [ "동강면", "동강", "면" ],
                            sub: {}
                        },
                        "VIL9": {
                            name: [ "동일면", "동일", "면" ],
                            sub: {}
                        },
                        "VIL10": {
                            name: [ "두원면", "두원", "면" ],
                            sub: {}
                        },
                        "VIL11": {
                            name: [ "봉래면", "봉래", "면" ],
                            sub: {}
                        },
                        "VIL12": {
                            name: [ "영남면", "영남", "면" ],
                            sub: {}
                        },
                        "VIL13": {
                            name: [ "점암면", "점암", "면" ],
                            sub: {}
                        },
                        "VIL14": {
                            name: [ "포두면", "포두", "면" ],
                            sub: {}
                        },
                        "VIL15": {
                            name: [ "풍양면", "풍양", "면" ],
                            sub: {}
                        }
                    }
                },
                "BOS": {
                    name: [ "보성군", "보성", "군" ],
                    sub: {
                        "VIL0": {
                            name: [ "벌교읍", "벌교", "읍" ],
                            sub: {}
                        },
                        "VIL1": {
                            name: [ "보성읍", "보성", "읍" ],
                            sub: {}
                        },
                        "VIL2": {
                            name: [ "겸백면", "겸백", "면" ],
                            sub: {}
                        },
                        "VIL3": {
                            name: [ "노동면", "노동", "면" ],
                            sub: {}
                        },
                        "VIL4": {
                            name: [ "득량면", "득량", "면" ],
                            sub: {}
                        },
                        "VIL5": {
                            name: [ "문덕면", "문덕", "면" ],
                            sub: {}
                        },
                        "VIL6": {
                            name: [ "미력면", "미력", "면" ],
                            sub: {}
                        },
                        "VIL7": {
                            name: [ "복내면", "복내", "면" ],
                            sub: {}
                        },
                        "VIL8": {
                            name: [ "웅치면", "웅치", "면" ],
                            sub: {}
                        },
                        "VIL9": {
                            name: [ "율이면", "율이", "면" ],
                            sub: {}
                        },
                        "VIL10": {
                            name: [ "조성면", "조성", "면" ],
                            sub: {}
                        },
                        "VIL11": {
                            name: [ "회천면", "회천", "면" ],
                            sub: {}
                        }
                    }
                },
                "HWS": {
                    name: [ "화순군", "화순", "군" ],
                    sub: {
                        "VIL0": {
                            name: [ "화순읍", "화순", "읍" ],
                            sub: {}
                        },
                        "VIL1": {
                            name: [ "사평면", "사평", "면" ],
                            sub: {}
                        },
                        "VIL2": {
                            name: [ "능주면", "능주", "면" ],
                            sub: {}
                        },
                        "VIL3": {
                            name: [ "도곡면", "도곡", "면" ],
                            sub: {}
                        },
                        "VIL4": {
                            name: [ "도암면", "도암", "면" ],
                            sub: {}
                        },
                        "VIL5": {
                            name: [ "동면", "동", "면" ],
                            sub: {}
                        },
                        "VIL6": {
                            name: [ "동복면", "동복", "면" ],
                            sub: {}
                        },
                        "VIL7": {
                            name: [ "백아면", "백아", "면" ],
                            sub: {}
                        },
                        "VIL8": {
                            name: [ "이서면", "이서", "면" ],
                            sub: {}
                        },
                        "VIL9": {
                            name: [ "이양면", "이양", "면" ],
                            sub: {}
                        },
                        "VIL10": {
                            name: [ "청풍면", "청풍", "면" ],
                            sub: {}
                        },
                        "VIL11": {
                            name: [ "춘양면", "춘양", "면" ],
                            sub: {}
                        },
                        "VIL12": {
                            name: [ "한천면", "한천", "면" ],
                            sub: {}
                        }
                    }
                },
                "JAH": {
                    name: [ "장흥군", "장흥", "군" ],
                    sub: {
                        "VIL0": {
                            name: [ "관산읍", "관산", "읍" ],
                            sub: {}
                        },
                        "VIL1": {
                            name: [ "대덕읍", "대덕", "읍" ],
                            sub: {}
                        },
                        "VIL2": {
                            name: [ "장흥읍", "장흥", "읍" ],
                            sub: {}
                        },
                        "VIL3": {
                            name: [ "부산면", "부산", "면" ],
                            sub: {}
                        },
                        "VIL4": {
                            name: [ "안양면", "안양", "면" ],
                            sub: {}
                        },
                        "VIL5": {
                            name: [ "용산면", "용산", "면" ],
                            sub: {}
                        },
                        "VIL6": {
                            name: [ "유치면", "유치", "면" ],
                            sub: {}
                        },
                        "VIL7": {
                            name: [ "장동면", "장동", "면" ],
                            sub: {}
                        },
                        "VIL8": {
                            name: [ "장평면", "장평", "면" ],
                            sub: {}
                        },
                        "VIL9": {
                            name: [ "회진면", "회진", "면" ],
                            sub: {}
                        }
                    }
                },
                "GJI": {
                    name: [ "강진군", "강진", "군" ],
                    sub: {
                        "VIL0": {
                            name: [ "강진읍", "강진", "읍" ],
                            sub: {}
                        },
                        "VIL1": {
                            name: [ "군동면", "군동", "면" ],
                            sub: {}
                        },
                        "VIL2": {
                            name: [ "대구면", "대구", "면" ],
                            sub: {}
                        },
                        "VIL3": {
                            name: [ "도암면", "도암", "면" ],
                            sub: {}
                        },
                        "VIL4": {
                            name: [ "마량면", "마량", "면" ],
                            sub: {}
                        },
                        "VIL5": {
                            name: [ "병영면", "병영", "면" ],
                            sub: {}
                        },
                        "VIL6": {
                            name: [ "성전면", "성전", "면" ],
                            sub: {}
                        },
                        "VIL7": {
                            name: [ "신전면", "신전", "면" ],
                            sub: {}
                        },
                        "VIL8": {
                            name: [ "옴천면", "옴천", "면" ],
                            sub: {}
                        },
                        "VIL9": {
                            name: [ "작천면", "작천", "면" ],
                            sub: {}
                        },
                        "VIL10": {
                            name: [ "칠량면", "칠량", "면" ],
                            sub: {}
                        }
                    }
                },
                "HAE": {
                    name: [ "해남군", "해남", "군" ],
                    sub: {
                        "VIL0": {
                            name: [ "해남읍", "해남", "읍" ],
                            sub: {}
                        },
                        "VIL1": {
                            name: [ "계곡면", "계곡", "면" ],
                            sub: {}
                        },
                        "VIL2": {
                            name: [ "마산면", "마산", "면" ],
                            sub: {}
                        },
                        "VIL3": {
                            name: [ "문내면", "문내", "면" ],
                            sub: {}
                        },
                        "VIL4": {
                            name: [ "북일면", "북일", "면" ],
                            sub: {}
                        },
                        "VIL5": {
                            name: [ "북평면", "북평", "면" ],
                            sub: {}
                        },
                        "VIL6": {
                            name: [ "산이면", "산이", "면" ],
                            sub: {}
                        },
                        "VIL7": {
                            name: [ "삼산면", "삼산", "면" ],
                            sub: {}
                        },
                        "VIL8": {
                            name: [ "송지면", "송지", "면" ],
                            sub: {}
                        },
                        "VIL9": {
                            name: [ "옥천면", "옥천", "면" ],
                            sub: {}
                        },
                        "VIL10": {
                            name: [ "현산면", "현산", "면" ],
                            sub: {}
                        },
                        "VIL11": {
                            name: [ "화산면", "화산", "면" ],
                            sub: {}
                        },
                        "VIL12": {
                            name: [ "화원면", "화원", "면" ],
                            sub: {}
                        },
                        "VIL13": {
                            name: [ "황산면", "황산", "면" ],
                            sub: {}
                        }
                    }
                },
                "YAM": {
                    name: [ "영암군", "영암", "군" ],
                    sub: {
                        "VIL0": {
                            name: [ "영암읍", "영암", "읍" ],
                            sub: {}
                        },
                        "VIL1": {
                            name: [ "삼호읍", "삼호", "읍" ],
                            sub: {}
                        },
                        "VIL2": {
                            name: [ "군서면", "군서", "면" ],
                            sub: {}
                        },
                        "VIL3": {
                            name: [ "금정면", "금정", "면" ],
                            sub: {}
                        },
                        "VIL4": {
                            name: [ "덕진면", "덕진", "면" ],
                            sub: {}
                        },
                        "VIL5": {
                            name: [ "도포면", "도포", "면" ],
                            sub: {}
                        },
                        "VIL6": {
                            name: [ "미암면", "미암", "면" ],
                            sub: {}
                        },
                        "VIL7": {
                            name: [ "서호면", "서호", "면" ],
                            sub: {}
                        },
                        "VIL8": {
                            name: [ "시종면", "시종", "면" ],
                            sub: {}
                        },
                        "VIL9": {
                            name: [ "신북면", "신북", "면" ],
                            sub: {}
                        },
                        "VIL10": {
                            name: [ "학산면", "학산", "면" ],
                            sub: {}
                        }
                    }
                },
                "MAN": {
                    name: [ "무안군", "무안", "군" ],
                    sub: {
                        "VIL0": {
                            name: [ "무안읍", "무안", "읍" ],
                            sub: {}
                        },
                        "VIL1": {
                            name: [ "삼향읍", "삼향", "읍" ],
                            sub: {}
                        },
                        "VIL2": {
                            name: [ "일로읍", "일로", "읍" ],
                            sub: {}
                        },
                        "VIL3": {
                            name: [ "망운면", "망운", "면" ],
                            sub: {}
                        },
                        "VIL4": {
                            name: [ "몽탄면", "몽탄", "면" ],
                            sub: {}
                        },
                        "VIL5": {
                            name: [ "운남면", "운남", "면" ],
                            sub: {}
                        },
                        "VIL6": {
                            name: [ "청계면", "청계", "면" ],
                            sub: {}
                        },
                        "VIL7": {
                            name: [ "현경면", "현경", "면" ],
                            sub: {}
                        },
                        "VIL8": {
                            name: [ "해제면", "해제", "면" ],
                            sub: {}
                        }
                    }
                },
                "HPY": {
                    name: [ "함평군", "함평", "군" ],
                    sub: {
                        "VIL0": {
                            name: [ "함평읍", "함평", "읍" ],
                            sub: {}
                        },
                        "VIL1": {
                            name: [ "나산면", "나산", "면" ],
                            sub: {}
                        },
                        "VIL2": {
                            name: [ "대동면", "대동", "면" ],
                            sub: {}
                        },
                        "VIL3": {
                            name: [ "손불면", "손불", "면" ],
                            sub: {}
                        },
                        "VIL4": {
                            name: [ "신광면", "신광", "면" ],
                            sub: {}
                        },
                        "VIL5": {
                            name: [ "엄다면", "엄다", "면" ],
                            sub: {}
                        },
                        "VIL6": {
                            name: [ "월야면", "월야", "면" ],
                            sub: {}
                        },
                        "VIL7": {
                            name: [ "학교면", "학교", "면" ],
                            sub: {}
                        },
                        "VIL8": {
                            name: [ "해보면", "해보", "면" ],
                            sub: {}
                        }
                    }
                },
                "YGW": {
                    name: [ "영광군", "영광", "군" ],
                    sub: {
                        "VIL0": {
                            name: [ "영광읍", "영광", "읍" ],
                            sub: {}
                        },
                        "VIL1": {
                            name: [ "백수읍", "백수", "읍" ],
                            sub: {}
                        },
                        "VIL2": {
                            name: [ "홍농읍", "홍농", "읍" ],
                            sub: {}
                        },
                        "VIL3": {
                            name: [ "군남면", "군남", "면" ],
                            sub: {}
                        },
                        "VIL4": {
                            name: [ "군서면", "군서", "면" ],
                            sub: {}
                        },
                        "VIL5": {
                            name: [ "낙월면", "낙월", "면" ],
                            sub: {}
                        },
                        "VIL6": {
                            name: [ "대마면", "대마", "면" ],
                            sub: {}
                        },
                        "VIL7": {
                            name: [ "묘량면", "묘량", "면" ],
                            sub: {}
                        },
                        "VIL8": {
                            name: [ "법성면", "법성", "면" ],
                            sub: {}
                        },
                        "VIL9": {
                            name: [ "불갑면", "불갑", "면" ],
                            sub: {}
                        },
                        "VIL10": {
                            name: [ "염산면", "염산", "면" ],
                            sub: {}
                        }
                    }
                },
                "JSO": {
                    name: [ "장성군", "장성", "군" ],
                    sub: {
                        "VIL0": {
                            name: [ "장성읍", "장성", "읍" ],
                            sub: {}
                        },
                        "VIL1": {
                            name: [ "남면", "남", "면" ],
                            sub: {}
                        },
                        "VIL2": {
                            name: [ "동화면", "동화", "면" ],
                            sub: {}
                        },
                        "VIL3": {
                            name: [ "북이면", "북이", "면" ],
                            sub: {}
                        },
                        "VIL4": {
                            name: [ "북일면", "북일", "면" ],
                            sub: {}
                        },
                        "VIL5": {
                            name: [ "북하면", "북하", "면" ],
                            sub: {}
                        },
                        "VIL6": {
                            name: [ "삼계면", "삼계", "면" ],
                            sub: {}
                        },
                        "VIL7": {
                            name: [ "삼서면", "삼서", "면" ],
                            sub: {}
                        },
                        "VIL8": {
                            name: [ "서삼면", "서삼", "면" ],
                            sub: {}
                        },
                        "VIL9": {
                            name: [ "진원면", "진원", "면" ],
                            sub: {}
                        },
                        "VIL10": {
                            name: [ "황룡면", "황룡", "면" ],
                            sub: {}
                        }
                    }
                },
                "WDO": {
                    name: [ "완도군", "완도", "군" ],
                    sub: {
                        "VIL0": {
                            name: [ "완도읍", "완도", "읍" ],
                            sub: {}
                        },
                        "VIL1": {
                            name: [ "금일읍", "금일", "읍" ],
                            sub: {}
                        },
                        "VIL2": {
                            name: [ "노화읍", "노화", "읍" ],
                            sub: {}
                        },
                        "VIL3": {
                            name: [ "고금면", "고금", "면" ],
                            sub: {}
                        },
                        "VIL4": {
                            name: [ "군외면", "군외", "면" ],
                            sub: {}
                        },
                        "VIL5": {
                            name: [ "금당면", "금당", "면" ],
                            sub: {}
                        },
                        "VIL6": {
                            name: [ "보길면", "보길", "면" ],
                            sub: {}
                        },
                        "VIL7": {
                            name: [ "생일면", "생일", "면" ],
                            sub: {}
                        },
                        "VIL8": {
                            name: [ "소안면", "소안", "면" ],
                            sub: {}
                        },
                        "VIL9": {
                            name: [ "신지면", "신지", "면" ],
                            sub: {}
                        },
                        "VIL10": {
                            name: [ "약산면", "약산", "면" ],
                            sub: {}
                        },
                        "VIL11": {
                            name: [ "청산면", "청산", "면" ],
                            sub: {}
                        }
                    }
                },
                "JDO": {
                    name: [ "진도군", "진도", "군" ],
                    sub: {
                        "VIL0": {
                            name: [ "진도읍", "진도", "읍" ],
                            sub: {}
                        },
                        "VIL1": {
                            name: [ "고군면", "고군", "면" ],
                            sub: {}
                        },
                        "VIL2": {
                            name: [ "군내면", "군내", "면" ],
                            sub: {}
                        },
                        "VIL3": {
                            name: [ "의신면", "의신", "면" ],
                            sub: {}
                        },
                        "VIL4": {
                            name: [ "임회면", "임회", "면" ],
                            sub: {}
                        },
                        "VIL5": {
                            name: [ "조도면", "조도", "면" ],
                            sub: {}
                        },
                        "VIL6": {
                            name: [ "지산면", "지산", "면" ],
                            sub: {}
                        }
                    }
                },
                "SIA": {
                    name: [ "신안군", "신안", "군" ],
                    sub: {
                        "VIL0": {
                            name: [ "지도읍", "지도", "읍" ],
                            sub: {}
                        },
                        "VIL1": {
                            name: [ "압해읍", "압해", "읍" ],
                            sub: {}
                        },
                        "VIL2": {
                            name: [ "도초면", "도초", "면" ],
                            sub: {}
                        },
                        "VIL3": {
                            name: [ "비금면", "비금", "면" ],
                            sub: {}
                        },
                        "VIL4": {
                            name: [ "신의면", "신의", "면" ],
                            sub: {}
                        },
                        "VIL5": {
                            name: [ "안좌면", "안좌", "면" ],
                            sub: {}
                        },
                        "VIL6": {
                            name: [ "암태면", "암태", "면" ],
                            sub: {}
                        },
                        "VIL7": {
                            name: [ "임자면", "임자", "면" ],
                            sub: {}
                        },
                        "VIL8": {
                            name: [ "자은면", "자은", "면" ],
                            sub: {}
                        },
                        "VIL9": {
                            name: [ "장산면", "장산", "면" ],
                            sub: {}
                        },
                        "VIL10": {
                            name: [ "증도면", "증도", "면" ],
                            sub: {}
                        },
                        "VIL11": {
                            name: [ "팔금면", "팔금", "면" ],
                            sub: {}
                        },
                        "VIL12": {
                            name: [ "하의면", "하의", "면" ],
                            sub: {}
                        },
                        "VIL13": {
                            name: [ "흑산면", "흑산", "면" ],
                            sub: {}
                        }
                    }
                }
            }
        },
        "NGS": {
            name: [ "경상북도", "경북", "도" ],
            sub: {
                "GES": {
                    name: [ "경산시", "경산", "시" ],
                    sub: {
                        "URBAN": {
                            name: [ "시내지역", "시내", "시내지역" ],
                            sub: {}
                        },
                        "RURAL": {
                            name: [ "시외지역", "시외", "시외지역" ],
                            sub: {}
                        },
                        "VIL0": {
                            name: [ "진량읍", "진량", "읍" ],
                            sub: {}
                        },
                        "VIL1": {
                            name: [ "하양읍", "하양", "읍" ],
                            sub: {}
                        },
                        "VIL2": {
                            name: [ "압량읍", "압량", "읍" ],
                            sub: {}
                        },
                        "VIL3": {
                            name: [ "자인면", "자인", "면" ],
                            sub: {}
                        },
                        "VIL4": {
                            name: [ "와촌면", "와촌", "면" ],
                            sub: {}
                        },
                        "VIL5": {
                            name: [ "남산면", "남산", "면" ],
                            sub: {}
                        },
                        "VIL6": {
                            name: [ "용성면", "용성", "면" ],
                            sub: {}
                        },
                        "VIL7": {
                            name: [ "남천면", "남천", "면" ],
                            sub: {}
                        }
                    }
                },
                "WOL": {
                    name: [ "경주시", "경주", "시" ],
                    sub: {
                        "URBAN": {
                            name: [ "시내지역", "시내", "시내지역" ],
                            sub: {}
                        },
                        "RURAL": {
                            name: [ "시외지역", "시외", "시외지역" ],
                            sub: {}
                        },
                        "VIL0": {
                            name: [ "감포읍", "감포", "읍" ],
                            sub: {}
                        },
                        "VIL1": {
                            name: [ "건천읍", "건천", "읍" ],
                            sub: {}
                        },
                        "VIL2": {
                            name: [ "안강읍", "안강", "읍" ],
                            sub: {}
                        },
                        "VIL3": {
                            name: [ "외동읍", "외동", "읍" ],
                            sub: {}
                        },
                        "VIL4": {
                            name: [ "강동면", "강동", "면" ],
                            sub: {}
                        },
                        "VIL5": {
                            name: [ "내남면", "내남", "면" ],
                            sub: {}
                        },
                        "VIL6": {
                            name: [ "산내면", "산내", "면" ],
                            sub: {}
                        },
                        "VIL7": {
                            name: [ "서면", "서", "면" ],
                            sub: {}
                        },
                        "VIL8": {
                            name: [ "양남면", "양남", "면" ],
                            sub: {}
                        },
                        "VIL9": {
                            name: [ "문무대왕면", "문무대왕", "면" ],
                            sub: {}
                        },
                        "VIL10": {
                            name: [ "천북면", "천북", "면" ],
                            sub: {}
                        },
                        "VIL11": {
                            name: [ "현곡면", "현곡", "면" ],
                            sub: {}
                        }
                    }
                },
                "GUM": {
                    name: [ "구미시", "구미", "시" ],
                    sub: {
                        "URBAN": {
                            name: [ "시내지역", "시내", "시내지역" ],
                            sub: {}
                        },
                        "RURAL": {
                            name: [ "시외지역", "시외", "시외지역" ],
                            sub: {}
                        },
                        "VIL0": {
                            name: [ "고아읍", "고아", "읍" ],
                            sub: {}
                        },
                        "VIL1": {
                            name: [ "산동읍", "산동", "읍" ],
                            sub: {}
                        },
                        "VIL2": {
                            name: [ "선산읍", "선산", "읍" ],
                            sub: {}
                        },
                        "VIL3": {
                            name: [ "도개면", "도개", "면" ],
                            sub: {}
                        },
                        "VIL4": {
                            name: [ "무을면", "무을", "면" ],
                            sub: {}
                        },
                        "VIL5": {
                            name: [ "옥성면", "옥성", "면" ],
                            sub: {}
                        },
                        "VIL6": {
                            name: [ "장천면", "장천", "면" ],
                            sub: {}
                        },
                        "VIL7": {
                            name: [ "해평면", "해평", "면" ],
                            sub: {}
                        }
                    }
                },
                "GIM": {
                    name: [ "김천시", "김천", "시" ],
                    sub: {
                        "URBAN": {
                            name: [ "시내지역", "시내", "시내지역" ],
                            sub: {}
                        },
                        "RURAL": {
                            name: [ "시외지역", "시외", "시외지역" ],
                            sub: {}
                        },
                        "VIL0": {
                            name: [ "아포읍", "아포", "읍" ],
                            sub: {}
                        },
                        "VIL1": {
                            name: [ "감문면", "감문", "면" ],
                            sub: {}
                        },
                        "VIL2": {
                            name: [ "감천면", "감천", "면" ],
                            sub: {}
                        },
                        "VIL3": {
                            name: [ "개령면", "개령", "면" ],
                            sub: {}
                        },
                        "VIL4": {
                            name: [ "구성면", "구성", "면" ],
                            sub: {}
                        },
                        "VIL5": {
                            name: [ "남면", "남", "면" ],
                            sub: {}
                        },
                        "VIL6": {
                            name: [ "농소면", "농소", "면" ],
                            sub: {}
                        },
                        "VIL7": {
                            name: [ "대덕면", "대덕", "면" ],
                            sub: {}
                        },
                        "VIL8": {
                            name: [ "대항면", "대항", "면" ],
                            sub: {}
                        },
                        "VIL9": {
                            name: [ "봉산면", "봉산", "면" ],
                            sub: {}
                        },
                        "VIL10": {
                            name: [ "부항면", "부항", "면" ],
                            sub: {}
                        },
                        "VIL11": {
                            name: [ "어모면", "어모", "면" ],
                            sub: {}
                        },
                        "VIL12": {
                            name: [ "조마면", "조마", "면" ],
                            sub: {}
                        },
                        "VIL13": {
                            name: [ "증산면", "증산", "면" ],
                            sub: {}
                        },
                        "VIL14": {
                            name: [ "지례면", "지례", "면" ],
                            sub: {}
                        }
                    }
                },
                "JMC": {
                    name: [ "문경시", "문경", "시" ],
                    sub: {
                        "URBAN": {
                            name: [ "시내지역", "시내", "시내지역" ],
                            sub: {}
                        },
                        "RURAL": {
                            name: [ "시외지역", "시외", "시외지역" ],
                            sub: {}
                        },
                        "VIL0": {
                            name: [ "가은읍", "가은", "읍" ],
                            sub: {}
                        },
                        "VIL1": {
                            name: [ "문경읍", "문경", "읍" ],
                            sub: {}
                        },
                        "VIL2": {
                            name: [ "농암면", "농암", "면" ],
                            sub: {}
                        },
                        "VIL3": {
                            name: [ "동로면", "동로", "면" ],
                            sub: {}
                        },
                        "VIL4": {
                            name: [ "마성면", "마성", "면" ],
                            sub: {}
                        },
                        "VIL5": {
                            name: [ "산북면", "산북", "면" ],
                            sub: {}
                        },
                        "VIL6": {
                            name: [ "산양면", "산양", "면" ],
                            sub: {}
                        },
                        "VIL7": {
                            name: [ "영순면", "영순", "면" ],
                            sub: {}
                        },
                        "VIL8": {
                            name: [ "호계면", "호계", "면" ],
                            sub: {}
                        }
                    }
                },
                "SJU": {
                    name: [ "상주시", "상주", "시" ],
                    sub: {
                        "URBAN": {
                            name: [ "시내지역", "시내", "시내지역" ],
                            sub: {}
                        },
                        "RURAL": {
                            name: [ "시외지역", "시외", "시외지역" ],
                            sub: {}
                        },
                        "VIL0": {
                            name: [ "함창읍", "함창", "읍" ],
                            sub: {}
                        },
                        "VIL1": {
                            name: [ "공검면", "공검", "면" ],
                            sub: {}
                        },
                        "VIL2": {
                            name: [ "공성면", "공성", "면" ],
                            sub: {}
                        },
                        "VIL3": {
                            name: [ "낙동면", "낙동", "면" ],
                            sub: {}
                        },
                        "VIL4": {
                            name: [ "내서면", "내서", "면" ],
                            sub: {}
                        },
                        "VIL5": {
                            name: [ "모동면", "모동", "면" ],
                            sub: {}
                        },
                        "VIL6": {
                            name: [ "모서면", "모서", "면" ],
                            sub: {}
                        },
                        "VIL7": {
                            name: [ "사벌국면", "사벌국", "면" ],
                            sub: {}
                        },
                        "VIL8": {
                            name: [ "외남면", "외남", "면" ],
                            sub: {}
                        },
                        "VIL9": {
                            name: [ "외서면", "외서", "면" ],
                            sub: {}
                        },
                        "VIL10": {
                            name: [ "은척면", "은척", "면" ],
                            sub: {}
                        },
                        "VIL11": {
                            name: [ "이안면", "이안", "면" ],
                            sub: {}
                        },
                        "VIL12": {
                            name: [ "중동면", "중동", "면" ],
                            sub: {}
                        },
                        "VIL13": {
                            name: [ "청리면", "청리", "면" ],
                            sub: {}
                        },
                        "VIL14": {
                            name: [ "화남면", "화남", "면" ],
                            sub: {}
                        },
                        "VIL15": {
                            name: [ "화동면", "화동", "면" ],
                            sub: {}
                        },
                        "VIL16": {
                            name: [ "화북면", "화북", "면" ],
                            sub: {}
                        },
                        "VIL17": {
                            name: [ "화서면", "화서", "면" ],
                            sub: {}
                        }
                    }
                },
                "AND": {
                    name: [ "안동시", "안동", "시" ],
                    sub: {
                        "URBAN": {
                            name: [ "시내지역", "시내", "시내지역" ],
                            sub: {}
                        },
                        "RURAL": {
                            name: [ "시외지역", "시외", "시외지역" ],
                            sub: {}
                        },
                        "VIL0": {
                            name: [ "풍산읍", "풍산", "읍" ],
                            sub: {}
                        },
                        "VIL1": {
                            name: [ "길안면", "길안", "면" ],
                            sub: {}
                        },
                        "VIL2": {
                            name: [ "남선면", "남선", "면" ],
                            sub: {}
                        },
                        "VIL3": {
                            name: [ "남후면", "남후", "면" ],
                            sub: {}
                        },
                        "VIL4": {
                            name: [ "녹전면", "녹전", "면" ],
                            sub: {}
                        },
                        "VIL5": {
                            name: [ "도산면", "도산", "면" ],
                            sub: {}
                        },
                        "VIL6": {
                            name: [ "북후면", "북후", "면" ],
                            sub: {}
                        },
                        "VIL7": {
                            name: [ "서후면", "서후", "면" ],
                            sub: {}
                        },
                        "VIL8": {
                            name: [ "예안면", "예안", "면" ],
                            sub: {}
                        },
                        "VIL9": {
                            name: [ "와룡면", "와룡", "면" ],
                            sub: {}
                        },
                        "VIL10": {
                            name: [ "일직면", "일직", "면" ],
                            sub: {}
                        },
                        "VIL11": {
                            name: [ "임하면", "임하", "면" ],
                            sub: {}
                        },
                        "VIL12": {
                            name: [ "임동면", "임동", "면" ],
                            sub: {}
                        },
                        "VIL13": {
                            name: [ "풍천면", "풍천", "면" ],
                            sub: {}
                        }
                    }
                },
                "YGJ": {
                    name: [ "영주시", "영주", "시" ],
                    sub: {
                        "URBAN": {
                            name: [ "시내지역", "시내", "시내지역" ],
                            sub: {}
                        },
                        "RURAL": {
                            name: [ "시외지역", "시외", "시외지역" ],
                            sub: {}
                        },
                        "VIL0": {
                            name: [ "풍기읍", "풍기", "읍" ],
                            sub: {}
                        },
                        "VIL1": {
                            name: [ "문수면", "문수", "면" ],
                            sub: {}
                        },
                        "VIL2": {
                            name: [ "이산면", "이산", "면" ],
                            sub: {}
                        },
                        "VIL3": {
                            name: [ "장수면", "장수", "면" ],
                            sub: {}
                        },
                        "VIL4": {
                            name: [ "평은면", "평은", "면" ],
                            sub: {}
                        },
                        "VIL5": {
                            name: [ "단산면", "단산", "면" ],
                            sub: {}
                        },
                        "VIL6": {
                            name: [ "부석면", "부석", "면" ],
                            sub: {}
                        },
                        "VIL7": {
                            name: [ "순흥면", "순흥", "면" ],
                            sub: {}
                        },
                        "VIL8": {
                            name: [ "봉현면", "봉현", "면" ],
                            sub: {}
                        },
                        "VIL9": {
                            name: [ "안정면", "안정", "면" ],
                            sub: {}
                        }
                    }
                },
                "YCN": {
                    name: [ "영천시", "영천", "시" ],
                    sub: {
                        "URBAN": {
                            name: [ "시내지역", "시내", "시내지역" ],
                            sub: {}
                        },
                        "RURAL": {
                            name: [ "시외지역", "시외", "시외지역" ],
                            sub: {}
                        },
                        "VIL0": {
                            name: [ "금호읍", "금호", "읍" ],
                            sub: {}
                        },
                        "VIL1": {
                            name: [ "고경면", "고경", "면" ],
                            sub: {}
                        },
                        "VIL2": {
                            name: [ "대창면", "대창", "면" ],
                            sub: {}
                        },
                        "VIL3": {
                            name: [ "북안면", "북안", "면" ],
                            sub: {}
                        },
                        "VIL4": {
                            name: [ "신녕면", "신녕", "면" ],
                            sub: {}
                        },
                        "VIL5": {
                            name: [ "임고면", "임고", "면" ],
                            sub: {}
                        },
                        "VIL6": {
                            name: [ "자양면", "자양", "면" ],
                            sub: {}
                        },
                        "VIL7": {
                            name: [ "청통면", "청통", "면" ],
                            sub: {}
                        },
                        "VIL8": {
                            name: [ "화남면", "화남", "면" ],
                            sub: {}
                        },
                        "VIL9": {
                            name: [ "화북면", "화북", "면" ],
                            sub: {}
                        },
                        "VIL10": {
                            name: [ "화산면", "화산", "면" ],
                            sub: {}
                        }
                    }
                },
                "POH": {
                    name: [ "포항시", "포항", "시" ],
                    sub: {
                        "URBAN": {
                            name: [ "시내지역", "시내", "시내지역" ],
                            sub: {}
                        },
                        "RURAL": {
                            name: [ "시외지역", "시외", "시외지역" ],
                            sub: {}
                        },
                        "DIS0": {
                            name: [ "남구", "남", "구" ],
                            sub: {
                                "URBAN": {
                                    name: [ "시내지역", "시내", "시내지역" ],
                                    sub: {}
                                },
                                "RURAL": {
                                    name: [ "시외지역", "시외", "시외지역" ],
                                    sub: {}
                                },
                                "VIL0": {
                                    name: [ "구룡포읍", "구룡포", "읍" ],
                                    sub: {}
                                },
                                "VIL1": {
                                    name: [ "연일읍", "연일", "읍" ],
                                    sub: {}
                                },
                                "VIL2": {
                                    name: [ "오천읍", "오천", "읍" ],
                                    sub: {}
                                },
                                "VIL3": {
                                    name: [ "대송면", "대송", "면" ],
                                    sub: {}
                                },
                                "VIL4": {
                                    name: [ "동해면", "동해", "면" ],
                                    sub: {}
                                },
                                "VIL5": {
                                    name: [ "장기면", "장기", "면" ],
                                    sub: {}
                                },
                                "VIL6": {
                                    name: [ "호미곶면", "호미곶", "면" ],
                                    sub: {}
                                }
                            }
                        },
                        "DIS1": {
                            name: [ "북구", "북", "구" ],
                            sub: {
                                "URBAN": {
                                    name: [ "시내지역", "시내", "시내지역" ],
                                    sub: {}
                                },
                                "RURAL": {
                                    name: [ "시외지역", "시외", "시외지역" ],
                                    sub: {}
                                },
                                "VIL0": {
                                    name: [ "흥해읍", "흥해", "읍" ],
                                    sub: {}
                                },
                                "VIL1": {
                                    name: [ "기계면", "기계", "면" ],
                                    sub: {}
                                },
                                "VIL2": {
                                    name: [ "기북면", "기북", "면" ],
                                    sub: {}
                                },
                                "VIL3": {
                                    name: [ "송라면", "송라", "면" ],
                                    sub: {}
                                },
                                "VIL4": {
                                    name: [ "신광면", "신광", "면" ],
                                    sub: {}
                                },
                                "VIL5": {
                                    name: [ "죽장면", "죽장", "면" ],
                                    sub: {}
                                },
                                "VIL6": {
                                    name: [ "청하면", "청하", "면" ],
                                    sub: {}
                                }
                            }
                        }
                    }
                },
                "GRG": {
                    name: [ "고령군", "고령", "군" ],
                    sub: {
                        "VIL0": {
                            name: [ "대가야읍", "대가야", "읍" ],
                            sub: {}
                        },
                        "VIL1": {
                            name: [ "개진면", "개진", "면" ],
                            sub: {}
                        },
                        "VIL2": {
                            name: [ "다산면", "다산", "면" ],
                            sub: {}
                        },
                        "VIL3": {
                            name: [ "덕곡면", "덕곡", "면" ],
                            sub: {}
                        },
                        "VIL4": {
                            name: [ "성산면", "성산", "면" ],
                            sub: {}
                        },
                        "VIL5": {
                            name: [ "쌍림면", "쌍림", "면" ],
                            sub: {}
                        },
                        "VIL6": {
                            name: [ "우곡면", "우곡", "면" ],
                            sub: {}
                        },
                        "VIL7": {
                            name: [ "운수면", "운수", "면" ],
                            sub: {}
                        }
                    }
                },
                "BHW": {
                    name: [ "봉화군", "봉화", "군" ],
                    sub: {
                        "VIL0": {
                            name: [ "봉화읍", "봉화", "읍" ],
                            sub: {}
                        },
                        "VIL1": {
                            name: [ "명호면", "명호", "면" ],
                            sub: {}
                        },
                        "VIL2": {
                            name: [ "물야면", "물야", "면" ],
                            sub: {}
                        },
                        "VIL3": {
                            name: [ "법전면", "법전", "면" ],
                            sub: {}
                        },
                        "VIL4": {
                            name: [ "봉성면", "봉성", "면" ],
                            sub: {}
                        },
                        "VIL5": {
                            name: [ "상운면", "상운", "면" ],
                            sub: {}
                        },
                        "VIL6": {
                            name: [ "석포면", "석포", "면" ],
                            sub: {}
                        },
                        "VIL7": {
                            name: [ "소천면", "소천", "면" ],
                            sub: {}
                        },
                        "VIL8": {
                            name: [ "재산면", "재산", "면" ],
                            sub: {}
                        },
                        "VIL9": {
                            name: [ "춘양면", "춘양", "면" ],
                            sub: {}
                        }
                    }
                },
                "SGU": {
                    name: [ "성주군", "성주", "군" ],
                    sub: {
                        "VIL0": {
                            name: [ "성주읍", "성주", "읍" ],
                            sub: {}
                        },
                        "VIL1": {
                            name: [ "가천면", "가천", "면" ],
                            sub: {}
                        },
                        "VIL2": {
                            name: [ "금수면", "금수", "면" ],
                            sub: {}
                        },
                        "VIL3": {
                            name: [ "대가면", "대가", "면" ],
                            sub: {}
                        },
                        "VIL4": {
                            name: [ "벽진면", "벽진", "면" ],
                            sub: {}
                        },
                        "VIL5": {
                            name: [ "선남면", "선남", "면" ],
                            sub: {}
                        },
                        "VIL6": {
                            name: [ "수륜면", "수륜", "면" ],
                            sub: {}
                        },
                        "VIL7": {
                            name: [ "용암면", "용암", "면" ],
                            sub: {}
                        },
                        "VIL8": {
                            name: [ "월항면", "월항", "면" ],
                            sub: {}
                        },
                        "VIL9": {
                            name: [ "초전면", "초전", "면" ],
                            sub: {}
                        }
                    }
                },
                "YDK": {
                    name: [ "영덕군", "영덕", "군" ],
                    sub: {
                        "VIL0": {
                            name: [ "영덕읍", "영덕", "읍" ],
                            sub: {}
                        },
                        "VIL1": {
                            name: [ "강구면", "강구", "면" ],
                            sub: {}
                        },
                        "VIL2": {
                            name: [ "남정면", "남정", "면" ],
                            sub: {}
                        },
                        "VIL3": {
                            name: [ "달산면", "달산", "면" ],
                            sub: {}
                        },
                        "VIL4": {
                            name: [ "병곡면", "병곡", "면" ],
                            sub: {}
                        },
                        "VIL5": {
                            name: [ "영해면", "영해", "면" ],
                            sub: {}
                        },
                        "VIL6": {
                            name: [ "지품면", "지품", "면" ],
                            sub: {}
                        },
                        "VIL7": {
                            name: [ "창수면", "창수", "면" ],
                            sub: {}
                        },
                        "VIL8": {
                            name: [ "축산면", "축산", "면" ],
                            sub: {}
                        }
                    }
                },
                "YYG": {
                    name: [ "영양군", "영양", "군" ],
                    sub: {
                        "VIL0": {
                            name: [ "영양읍", "영양", "읍" ],
                            sub: {}
                        },
                        "VIL1": {
                            name: [ "석보면", "석보", "면" ],
                            sub: {}
                        },
                        "VIL2": {
                            name: [ "수비면", "수비", "면" ],
                            sub: {}
                        },
                        "VIL3": {
                            name: [ "일월면", "일월", "면" ],
                            sub: {}
                        },
                        "VIL4": {
                            name: [ "입암면", "입암", "면" ],
                            sub: {}
                        },
                        "VIL5": {
                            name: [ "청기면", "청기", "면" ],
                            sub: {}
                        }
                    }
                },
                "YEC": {
                    name: [ "예천군", "예천", "군" ],
                    sub: {
                        "VIL0": {
                            name: [ "예천읍", "예천", "읍" ],
                            sub: {}
                        },
                        "VIL1": {
                            name: [ "호명읍", "호명", "읍" ],
                            sub: {}
                        },
                        "VIL2": {
                            name: [ "감천면", "감천", "면" ],
                            sub: {}
                        },
                        "VIL3": {
                            name: [ "개포면", "개포", "면" ],
                            sub: {}
                        },
                        "VIL4": {
                            name: [ "보문면", "보문", "면" ],
                            sub: {}
                        },
                        "VIL5": {
                            name: [ "용궁면", "용궁", "면" ],
                            sub: {}
                        },
                        "VIL6": {
                            name: [ "용문면", "용문", "면" ],
                            sub: {}
                        },
                        "VIL7": {
                            name: [ "유천면", "유천", "면" ],
                            sub: {}
                        },
                        "VIL8": {
                            name: [ "은풍면", "은풍", "면" ],
                            sub: {}
                        },
                        "VIL9": {
                            name: [ "지보면", "지보", "면" ],
                            sub: {}
                        },
                        "VIL10": {
                            name: [ "풍양면", "풍양", "면" ],
                            sub: {}
                        },
                        "VIL11": {
                            name: [ "효자면", "효자", "면" ],
                            sub: {}
                        }
                    }
                },
                "ULL": {
                    name: [ "울릉군", "울릉", "군" ],
                    sub: {
                        "VIL0": {
                            name: [ "울릉읍", "울릉", "읍" ],
                            sub: {}
                        },
                        "VIL1": {
                            name: [ "북면", "북", "면" ],
                            sub: {}
                        },
                        "VIL2": {
                            name: [ "서면", "서", "면" ],
                            sub: {}
                        }
                    }
                },
                "UJN": {
                    name: [ "울진군", "울진", "군" ],
                    sub: {
                        "VIL0": {
                            name: [ "울진읍", "울진", "읍" ],
                            sub: {}
                        },
                        "VIL1": {
                            name: [ "평해읍", "평해", "읍" ],
                            sub: {}
                        },
                        "VIL2": {
                            name: [ "근남면", "근남", "면" ],
                            sub: {}
                        },
                        "VIL3": {
                            name: [ "금강송면", "금강송", "면" ],
                            sub: {}
                        },
                        "VIL4": {
                            name: [ "기성면", "기성", "면" ],
                            sub: {}
                        },
                        "VIL5": {
                            name: [ "매화면", "매화", "면" ],
                            sub: {}
                        },
                        "VIL6": {
                            name: [ "북면", "북", "면" ],
                            sub: {}
                        },
                        "VIL7": {
                            name: [ "온정면", "온정", "면" ],
                            sub: {}
                        },
                        "VIL8": {
                            name: [ "죽변면", "죽변", "면" ],
                            sub: {}
                        },
                        "VIL9": {
                            name: [ "후포면", "후포", "면" ],
                            sub: {}
                        }
                    }
                },
                "UIG": {
                    name: [ "의성군", "의성", "군" ],
                    sub: {
                        "VIL0": {
                            name: [ "의성읍", "의성", "읍" ],
                            sub: {}
                        },
                        "VIL1": {
                            name: [ "가음면", "가음", "면" ],
                            sub: {}
                        },
                        "VIL2": {
                            name: [ "구천면", "구천", "면" ],
                            sub: {}
                        },
                        "VIL3": {
                            name: [ "금성면", "금성", "면" ],
                            sub: {}
                        },
                        "VIL4": {
                            name: [ "다인면", "다인", "면" ],
                            sub: {}
                        },
                        "VIL5": {
                            name: [ "단밀면", "단밀", "면" ],
                            sub: {}
                        },
                        "VIL6": {
                            name: [ "단북면", "단북", "면" ],
                            sub: {}
                        },
                        "VIL7": {
                            name: [ "단촌면", "단촌", "면" ],
                            sub: {}
                        },
                        "VIL8": {
                            name: [ "봉양면", "봉양", "면" ],
                            sub: {}
                        },
                        "VIL9": {
                            name: [ "비안면", "비안", "면" ],
                            sub: {}
                        },
                        "VIL10": {
                            name: [ "사곡면", "사곡", "면" ],
                            sub: {}
                        },
                        "VIL11": {
                            name: [ "신평면", "신평", "면" ],
                            sub: {}
                        },
                        "VIL12": {
                            name: [ "안계면", "안계", "면" ],
                            sub: {}
                        },
                        "VIL13": {
                            name: [ "안사면", "안사", "면" ],
                            sub: {}
                        },
                        "VIL14": {
                            name: [ "안평면", "안평", "면" ],
                            sub: {}
                        },
                        "VIL15": {
                            name: [ "옥산면", "옥산", "면" ],
                            sub: {}
                        },
                        "VIL16": {
                            name: [ "점곡면", "점곡", "면" ],
                            sub: {}
                        },
                        "VIL17": {
                            name: [ "춘산면", "춘산", "면" ],
                            sub: {}
                        }
                    }
                },
                "CDO": {
                    name: [ "청도군", "청도", "군" ],
                    sub: {
                        "VIL0": {
                            name: [ "청도읍", "청도", "읍" ],
                            sub: {}
                        },
                        "VIL1": {
                            name: [ "화양읍", "화양", "읍" ],
                            sub: {}
                        },
                        "VIL2": {
                            name: [ "각남면", "각남", "면" ],
                            sub: {}
                        },
                        "VIL3": {
                            name: [ "각북면", "각북", "면" ],
                            sub: {}
                        },
                        "VIL4": {
                            name: [ "금천면", "금천", "면" ],
                            sub: {}
                        },
                        "VIL5": {
                            name: [ "매전면", "매전", "면" ],
                            sub: {}
                        },
                        "VIL6": {
                            name: [ "운문면", "운문", "면" ],
                            sub: {}
                        },
                        "VIL7": {
                            name: [ "이서면", "이서", "면" ],
                            sub: {}
                        },
                        "VIL8": {
                            name: [ "풍각면", "풍각", "면" ],
                            sub: {}
                        }
                    }
                },
                "CON": {
                    name: [ "청송군", "청송", "군" ],
                    sub: {
                        "VIL0": {
                            name: [ "청송읍", "청송", "읍" ],
                            sub: {}
                        },
                        "VIL1": {
                            name: [ "부남면", "부남", "면" ],
                            sub: {}
                        },
                        "VIL2": {
                            name: [ "안덕면", "안덕", "면" ],
                            sub: {}
                        },
                        "VIL3": {
                            name: [ "주왕산면", "주왕산", "면" ],
                            sub: {}
                        },
                        "VIL4": {
                            name: [ "진보면", "진보", "면" ],
                            sub: {}
                        },
                        "VIL5": {
                            name: [ "파천면", "파천", "면" ],
                            sub: {}
                        },
                        "VIL6": {
                            name: [ "현동면", "현동", "면" ],
                            sub: {}
                        },
                        "VIL7": {
                            name: [ "현서면", "현서", "면" ],
                            sub: {}
                        }
                    }
                },
                "COK": {
                    name: [ "칠곡군", "칠곡", "군" ],
                    sub: {
                        "VIL0": {
                            name: [ "북삼읍", "북삼", "읍" ],
                            sub: {}
                        },
                        "VIL1": {
                            name: [ "석적읍", "석적", "읍" ],
                            sub: {}
                        },
                        "VIL2": {
                            name: [ "왜관읍", "왜관", "읍" ],
                            sub: {}
                        },
                        "VIL3": {
                            name: [ "가산면", "가산", "면" ],
                            sub: {}
                        },
                        "VIL4": {
                            name: [ "기산면", "기산", "면" ],
                            sub: {}
                        },
                        "VIL5": {
                            name: [ "동명면", "동명", "면" ],
                            sub: {}
                        },
                        "VIL6": {
                            name: [ "약목면", "약목", "면" ],
                            sub: {}
                        },
                        "VIL7": {
                            name: [ "지천면", "지천", "면" ],
                            sub: {}
                        }
                    }
                }
            }
        },
        "SGS": {
            name: [ "경상남도", "경남", "도" ],
            sub: {
                "CWN": {
                    name: [ "창원시", "창원", "시" ],
                    sub: {
                        "URBAN": {
                            name: [ "시내지역", "시내", "시내지역" ],
                            sub: {}
                        },
                        "RURAL": {
                            name: [ "시외지역", "시외", "시외지역" ],
                            sub: {}
                        },
                        "DIS0": {
                            name: [ "의창구", "의창", "구" ],
                            sub: {
                                "URBAN": {
                                    name: [ "시내지역", "시내", "시내지역" ],
                                    sub: {}
                                },
                                "RURAL": {
                                    name: [ "시외지역", "시외", "시외지역" ],
                                    sub: {}
                                },
                                "VIL0": {
                                    name: [ "동읍", "동", "읍" ],
                                    sub: {}
                                },
                                "VIL1": {
                                    name: [ "대산면", "대산", "면" ],
                                    sub: {}
                                },
                                "VIL2": {
                                    name: [ "북면", "북", "면" ],
                                    sub: {}
                                }
                            }
                        },
                        "DIS1": {
                            name: [ "성산구", "성산", "구" ],
                            sub: {
                                "URBAN": {
                                    name: [ "시내지역", "시내", "시내지역" ],
                                    sub: {}
                                },
                                "RURAL": {
                                    name: [ "시외지역", "시외", "시외지역" ],
                                    sub: {}
                                }
                            }
                        },
                        "DIS2": {
                            name: [ "마산합포구", "마산합포", "구" ],
                            sub: {
                                "URBAN": {
                                    name: [ "시내지역", "시내", "시내지역" ],
                                    sub: {}
                                },
                                "RURAL": {
                                    name: [ "시외지역", "시외", "시외지역" ],
                                    sub: {}
                                },
                                "VIL0": {
                                    name: [ "구산면", "구산", "면" ],
                                    sub: {}
                                },
                                "VIL1": {
                                    name: [ "진동면", "진동", "면" ],
                                    sub: {}
                                },
                                "VIL2": {
                                    name: [ "진북면", "진북", "면" ],
                                    sub: {}
                                },
                                "VIL3": {
                                    name: [ "진전면", "진전", "면" ],
                                    sub: {}
                                }
                            }
                        },
                        "DIS3": {
                            name: [ "마산회원구", "마산회원", "구" ],
                            sub: {
                                "URBAN": {
                                    name: [ "시내지역", "시내", "시내지역" ],
                                    sub: {}
                                },
                                "RURAL": {
                                    name: [ "시외지역", "시외", "시외지역" ],
                                    sub: {}
                                },
                                "VIL0": {
                                    name: [ "내서읍", "내서", "읍" ],
                                    sub: {}
                                }
                            }
                        },
                        "DIS4": {
                            name: [ "진해구", "진해", "구" ],
                            sub: {
                                "URBAN": {
                                    name: [ "시내지역", "시내", "시내지역" ],
                                    sub: {}
                                },
                                "RURAL": {
                                    name: [ "시외지역", "시외", "시외지역" ],
                                    sub: {}
                                }
                            }
                        }
                    }
                },
                "GJE": {
                    name: [ "거제시", "거제", "시" ],
                    sub: {
                        "URBAN": {
                            name: [ "시내지역", "시내", "시내지역" ],
                            sub: {}
                        },
                        "RURAL": {
                            name: [ "시외지역", "시외", "시외지역" ],
                            sub: {}
                        },
                        "VIL0": {
                            name: [ "거제면", "거제", "면" ],
                            sub: {}
                        },
                        "VIL1": {
                            name: [ "남부면", "남부", "면" ],
                            sub: {}
                        },
                        "VIL2": {
                            name: [ "동부면", "동부", "면" ],
                            sub: {}
                        },
                        "VIL3": {
                            name: [ "둔덕면", "둔덕", "면" ],
                            sub: {}
                        },
                        "VIL4": {
                            name: [ "사등면", "사등", "면" ],
                            sub: {}
                        },
                        "VIL5": {
                            name: [ "연초면", "연초", "면" ],
                            sub: {}
                        },
                        "VIL6": {
                            name: [ "일운면", "일운", "면" ],
                            sub: {}
                        },
                        "VIL7": {
                            name: [ "장목면", "장목", "면" ],
                            sub: {}
                        },
                        "VIL8": {
                            name: [ "하청면", "하청", "면" ],
                            sub: {}
                        }
                    }
                },
                "GAE": {
                    name: [ "김해시", "김해", "시" ],
                    sub: {
                        "URBAN": {
                            name: [ "시내지역", "시내", "시내지역" ],
                            sub: {}
                        },
                        "RURAL": {
                            name: [ "시외지역", "시외", "시외지역" ],
                            sub: {}
                        },
                        "VIL0": {
                            name: [ "진영읍", "진영", "읍" ],
                            sub: {}
                        },
                        "VIL1": {
                            name: [ "대동면", "대동", "면" ],
                            sub: {}
                        },
                        "VIL2": {
                            name: [ "상동면", "상동", "면" ],
                            sub: {}
                        },
                        "VIL3": {
                            name: [ "생림면", "생림", "면" ],
                            sub: {}
                        },
                        "VIL4": {
                            name: [ "주촌면", "주촌", "면" ],
                            sub: {}
                        },
                        "VIL5": {
                            name: [ "진례면", "진례", "면" ],
                            sub: {}
                        },
                        "VIL6": {
                            name: [ "한림면", "한림", "면" ],
                            sub: {}
                        }
                    }
                },
                "MRY": {
                    name: [ "밀양시", "밀양", "시" ],
                    sub: {
                        "URBAN": {
                            name: [ "시내지역", "시내", "시내지역" ],
                            sub: {}
                        },
                        "RURAL": {
                            name: [ "시외지역", "시외", "시외지역" ],
                            sub: {}
                        },
                        "VIL0": {
                            name: [ "삼량진읍", "삼량진", "읍" ],
                            sub: {}
                        },
                        "VIL1": {
                            name: [ "하남읍", "하남", "읍" ],
                            sub: {}
                        },
                        "VIL2": {
                            name: [ "단장면", "단장", "면" ],
                            sub: {}
                        },
                        "VIL3": {
                            name: [ "무안면", "무안", "면" ],
                            sub: {}
                        },
                        "VIL4": {
                            name: [ "부북면", "부북", "면" ],
                            sub: {}
                        },
                        "VIL5": {
                            name: [ "산내면", "산내", "면" ],
                            sub: {}
                        },
                        "VIL6": {
                            name: [ "산외면", "산외", "면" ],
                            sub: {}
                        },
                        "VIL7": {
                            name: [ "상남면", "상남", "면" ],
                            sub: {}
                        },
                        "VIL8": {
                            name: [ "상동면", "상동", "면" ],
                            sub: {}
                        },
                        "VIL9": {
                            name: [ "청도면", "청도", "면" ],
                            sub: {}
                        },
                        "VIL10": {
                            name: [ "초동면", "초동", "면" ],
                            sub: {}
                        }
                    }
                },
                "SAC": {
                    name: [ "사천시", "사천", "시" ],
                    sub: {
                        "URBAN": {
                            name: [ "시내지역", "시내", "시내지역" ],
                            sub: {}
                        },
                        "RURAL": {
                            name: [ "시외지역", "시외", "시외지역" ],
                            sub: {}
                        },
                        "VIL0": {
                            name: [ "사천읍", "사천", "읍" ],
                            sub: {}
                        },
                        "VIL1": {
                            name: [ "곤명면", "곤명", "면" ],
                            sub: {}
                        },
                        "VIL2": {
                            name: [ "곤양면", "곤양", "면" ],
                            sub: {}
                        },
                        "VIL3": {
                            name: [ "사남면", "사남", "면" ],
                            sub: {}
                        },
                        "VIL4": {
                            name: [ "서포면", "서포", "면" ],
                            sub: {}
                        },
                        "VIL5": {
                            name: [ "용현면", "용현", "면" ],
                            sub: {}
                        },
                        "VIL6": {
                            name: [ "정동면", "정동", "면" ],
                            sub: {}
                        },
                        "VIL7": {
                            name: [ "축동면", "축동", "면" ],
                            sub: {}
                        }
                    }
                },
                "YAS": {
                    name: [ "양산시", "양산", "시" ],
                    sub: {
                        "URBAN": {
                            name: [ "시내지역", "시내", "시내지역" ],
                            sub: {}
                        },
                        "RURAL": {
                            name: [ "시외지역", "시외", "시외지역" ],
                            sub: {}
                        },
                        "VIL0": {
                            name: [ "물금읍", "물금", "읍" ],
                            sub: {}
                        },
                        "VIL1": {
                            name: [ "동면", "동", "면" ],
                            sub: {}
                        },
                        "VIL2": {
                            name: [ "상북면", "상북", "면" ],
                            sub: {}
                        },
                        "VIL3": {
                            name: [ "원동면", "원동", "면" ],
                            sub: {}
                        },
                        "VIL4": {
                            name: [ "하북면", "하북", "면" ],
                            sub: {}
                        }
                    }
                },
                "JIJ": {
                    name: [ "진주시", "진주", "시" ],
                    sub: {
                        "URBAN": {
                            name: [ "시내지역", "시내", "시내지역" ],
                            sub: {}
                        },
                        "RURAL": {
                            name: [ "시외지역", "시외", "시외지역" ],
                            sub: {}
                        },
                        "VIL0": {
                            name: [ "문산읍", "문산", "읍" ],
                            sub: {}
                        },
                        "VIL1": {
                            name: [ "금곡면", "금곡", "면" ],
                            sub: {}
                        },
                        "VIL2": {
                            name: [ "금산면", "금산", "면" ],
                            sub: {}
                        },
                        "VIL3": {
                            name: [ "내동면", "내동", "면" ],
                            sub: {}
                        },
                        "VIL4": {
                            name: [ "대곡면", "대곡", "면" ],
                            sub: {}
                        },
                        "VIL5": {
                            name: [ "대평면", "대평", "면" ],
                            sub: {}
                        },
                        "VIL6": {
                            name: [ "명석면", "명석", "면" ],
                            sub: {}
                        },
                        "VIL7": {
                            name: [ "미천면", "미천", "면" ],
                            sub: {}
                        },
                        "VIL8": {
                            name: [ "사봉면", "사봉", "면" ],
                            sub: {}
                        },
                        "VIL9": {
                            name: [ "수곡면", "수곡", "면" ],
                            sub: {}
                        },
                        "VIL10": {
                            name: [ "일반성면", "일반성", "면" ],
                            sub: {}
                        },
                        "VIL11": {
                            name: [ "이반성면", "이반성", "면" ],
                            sub: {}
                        },
                        "VIL12": {
                            name: [ "정촌면", "정촌", "면" ],
                            sub: {}
                        },
                        "VIL13": {
                            name: [ "지수면", "지수", "면" ],
                            sub: {}
                        },
                        "VIL14": {
                            name: [ "진성면", "진성", "면" ],
                            sub: {}
                        },
                        "VIL15": {
                            name: [ "집현면", "집현", "면" ],
                            sub: {}
                        }
                    }
                },
                "CHM": {
                    name: [ "통영시", "통영", "시" ],
                    sub: {
                        "URBAN": {
                            name: [ "시내지역", "시내", "시내지역" ],
                            sub: {}
                        },
                        "RURAL": {
                            name: [ "시외지역", "시외", "시외지역" ],
                            sub: {}
                        },
                        "VIL0": {
                            name: [ "산양읍", "산양", "읍" ],
                            sub: {}
                        },
                        "VIL1": {
                            name: [ "광도면", "광도", "면" ],
                            sub: {}
                        },
                        "VIL2": {
                            name: [ "도산면", "도산", "면" ],
                            sub: {}
                        },
                        "VIL3": {
                            name: [ "사량면", "사량", "면" ],
                            sub: {}
                        },
                        "VIL4": {
                            name: [ "욕지면", "욕지", "면" ],
                            sub: {}
                        },
                        "VIL5": {
                            name: [ "용남면", "용남", "면" ],
                            sub: {}
                        },
                        "VIL6": {
                            name: [ "한산면", "한산", "면" ],
                            sub: {}
                        }
                    }
                },
                "GEC": {
                    name: [ "거창군", "거창", "군" ],
                    sub: {
                        "VIL0": {
                            name: [ "거창읍", "거창", "읍" ],
                            sub: {}
                        },
                        "VIL1": {
                            name: [ "가북면", "가북", "면" ],
                            sub: {}
                        },
                        "VIL2": {
                            name: [ "가조면", "가조", "면" ],
                            sub: {}
                        },
                        "VIL3": {
                            name: [ "고제면", "고제", "면" ],
                            sub: {}
                        },
                        "VIL4": {
                            name: [ "남상면", "남상", "면" ],
                            sub: {}
                        },
                        "VIL5": {
                            name: [ "남하면", "남하", "면" ],
                            sub: {}
                        },
                        "VIL6": {
                            name: [ "마리면", "마리", "면" ],
                            sub: {}
                        },
                        "VIL7": {
                            name: [ "북상면", "북상", "면" ],
                            sub: {}
                        },
                        "VIL8": {
                            name: [ "신원면", "신원", "면" ],
                            sub: {}
                        },
                        "VIL9": {
                            name: [ "웅양면", "웅양", "면" ],
                            sub: {}
                        },
                        "VIL10": {
                            name: [ "위천면", "위천", "면" ],
                            sub: {}
                        },
                        "VIL11": {
                            name: [ "주상면", "주상", "면" ],
                            sub: {}
                        }
                    }
                },
                "GSE": {
                    name: [ "고성군", "고성", "군" ],
                    sub: {
                        "VIL0": {
                            name: [ "고성읍", "고성", "읍" ],
                            sub: {}
                        },
                        "VIL1": {
                            name: [ "개천면", "개천", "면" ],
                            sub: {}
                        },
                        "VIL2": {
                            name: [ "거류면", "거류", "면" ],
                            sub: {}
                        },
                        "VIL3": {
                            name: [ "구만면", "구만", "면" ],
                            sub: {}
                        },
                        "VIL4": {
                            name: [ "대가면", "대가", "면" ],
                            sub: {}
                        },
                        "VIL5": {
                            name: [ "동해면", "동해", "면" ],
                            sub: {}
                        },
                        "VIL6": {
                            name: [ "마암면", "마암", "면" ],
                            sub: {}
                        },
                        "VIL7": {
                            name: [ "삼산면", "삼산", "면" ],
                            sub: {}
                        },
                        "VIL8": {
                            name: [ "상리면", "상리", "면" ],
                            sub: {}
                        },
                        "VIL9": {
                            name: [ "영오면", "영오", "면" ],
                            sub: {}
                        },
                        "VIL10": {
                            name: [ "영현면", "영현", "면" ],
                            sub: {}
                        },
                        "VIL11": {
                            name: [ "하일면", "하일", "면" ],
                            sub: {}
                        },
                        "VIL12": {
                            name: [ "하이면", "하이", "면" ],
                            sub: {}
                        },
                        "VIL13": {
                            name: [ "회화면", "회화", "면" ],
                            sub: {}
                        }
                    }
                },
                "NHE": {
                    name: [ "남해군", "남해", "군" ],
                    sub: {
                        "VIL0": {
                            name: [ "남해읍", "남해", "읍" ],
                            sub: {}
                        },
                        "VIL1": {
                            name: [ "고현면", "고현", "면" ],
                            sub: {}
                        },
                        "VIL2": {
                            name: [ "남면", "남", "면" ],
                            sub: {}
                        },
                        "VIL3": {
                            name: [ "미조면", "미조", "면" ],
                            sub: {}
                        },
                        "VIL4": {
                            name: [ "삼동면", "삼동", "면" ],
                            sub: {}
                        },
                        "VIL5": {
                            name: [ "상주면", "상주", "면" ],
                            sub: {}
                        },
                        "VIL6": {
                            name: [ "서면", "서", "면" ],
                            sub: {}
                        },
                        "VIL7": {
                            name: [ "설천면", "설천", "면" ],
                            sub: {}
                        },
                        "VIL8": {
                            name: [ "이동면", "이동", "면" ],
                            sub: {}
                        },
                        "VIL9": {
                            name: [ "창선면", "창선", "면" ],
                            sub: {}
                        }
                    }
                },
                "SCG": {
                    name: [ "산청군", "산청", "군" ],
                    sub: {
                        "VIL0": {
                            name: [ "산청읍", "산청", "읍" ],
                            sub: {}
                        },
                        "VIL1": {
                            name: [ "차황면", "차황", "면" ],
                            sub: {}
                        },
                        "VIL2": {
                            name: [ "오부면", "오부", "면" ],
                            sub: {}
                        },
                        "VIL3": {
                            name: [ "생초면", "생초", "면" ],
                            sub: {}
                        },
                        "VIL4": {
                            name: [ "금서면", "금서", "면" ],
                            sub: {}
                        },
                        "VIL5": {
                            name: [ "삼장면", "삼장", "면" ],
                            sub: {}
                        },
                        "VIL6": {
                            name: [ "시천면", "시천", "면" ],
                            sub: {}
                        },
                        "VIL7": {
                            name: [ "단성면", "단성", "면" ],
                            sub: {}
                        },
                        "VIL8": {
                            name: [ "신안면", "신안", "면" ],
                            sub: {}
                        },
                        "VIL9": {
                            name: [ "생비량면", "생비량", "면" ],
                            sub: {}
                        },
                        "VIL10": {
                            name: [ "신등면", "신등", "면" ],
                            sub: {}
                        }
                    }
                },
                "URY": {
                    name: [ "의령군", "의령", "군" ],
                    sub: {
                        "VIL0": {
                            name: [ "의령읍", "의령", "읍" ],
                            sub: {}
                        },
                        "VIL1": {
                            name: [ "가례면", "가례", "면" ],
                            sub: {}
                        },
                        "VIL2": {
                            name: [ "칠곡면", "칠곡", "면" ],
                            sub: {}
                        },
                        "VIL3": {
                            name: [ "대의면", "대의", "면" ],
                            sub: {}
                        },
                        "VIL4": {
                            name: [ "화정면", "화정", "면" ],
                            sub: {}
                        },
                        "VIL5": {
                            name: [ "용덕면", "용덕", "면" ],
                            sub: {}
                        },
                        "VIL6": {
                            name: [ "정곡면", "정곡", "면" ],
                            sub: {}
                        },
                        "VIL7": {
                            name: [ "지정면", "지정", "면" ],
                            sub: {}
                        },
                        "VIL8": {
                            name: [ "낙서면", "낙서", "면" ],
                            sub: {}
                        },
                        "VIL9": {
                            name: [ "부림면", "부림", "면" ],
                            sub: {}
                        },
                        "VIL10": {
                            name: [ "봉수면", "봉수", "면" ],
                            sub: {}
                        },
                        "VIL11": {
                            name: [ "궁류면", "궁류", "면" ],
                            sub: {}
                        },
                        "VIL12": {
                            name: [ "유곡면", "유곡", "면" ],
                            sub: {}
                        }
                    }
                },
                "NYE": {
                    name: [ "창녕군", "창녕", "군" ],
                    sub: {
                        "VIL0": {
                            name: [ "창녕읍", "창녕", "읍" ],
                            sub: {}
                        },
                        "VIL1": {
                            name: [ "남지읍", "남지", "읍" ],
                            sub: {}
                        },
                        "VIL2": {
                            name: [ "계성면", "계성", "면" ],
                            sub: {}
                        },
                        "VIL3": {
                            name: [ "고암면", "고암", "면" ],
                            sub: {}
                        },
                        "VIL4": {
                            name: [ "길곡면", "길곡", "면" ],
                            sub: {}
                        },
                        "VIL5": {
                            name: [ "대지면", "대지", "면" ],
                            sub: {}
                        },
                        "VIL6": {
                            name: [ "대합면", "대합", "면" ],
                            sub: {}
                        },
                        "VIL7": {
                            name: [ "도천면", "도천", "면" ],
                            sub: {}
                        },
                        "VIL8": {
                            name: [ "부곡면", "부곡", "면" ],
                            sub: {}
                        },
                        "VIL9": {
                            name: [ "성산면", "성산", "면" ],
                            sub: {}
                        },
                        "VIL10": {
                            name: [ "성산면", "성산", "면" ],
                            sub: {}
                        },
                        "VIL11": {
                            name: [ "유이면", "유이", "면" ],
                            sub: {}
                        },
                        "VIL12": {
                            name: [ "이방면", "이방", "면" ],
                            sub: {}
                        },
                        "VIL13": {
                            name: [ "장마면", "장마", "면" ],
                            sub: {}
                        }
                    }
                },
                "HAD": {
                    name: [ "하동군", "하동", "군" ],
                    sub: {
                        "VIL0": {
                            name: [ "하동읍", "하동", "읍" ],
                            sub: {}
                        },
                        "VIL1": {
                            name: [ "고전면", "고전", "면" ],
                            sub: {}
                        },
                        "VIL2": {
                            name: [ "금남면", "금남", "면" ],
                            sub: {}
                        },
                        "VIL3": {
                            name: [ "금성면", "금성", "면" ],
                            sub: {}
                        },
                        "VIL4": {
                            name: [ "북천면", "북천", "면" ],
                            sub: {}
                        },
                        "VIL5": {
                            name: [ "악양면", "악양", "면" ],
                            sub: {}
                        },
                        "VIL6": {
                            name: [ "양보면", "양보", "면" ],
                            sub: {}
                        },
                        "VIL7": {
                            name: [ "옥종면", "옥종", "면" ],
                            sub: {}
                        },
                        "VIL8": {
                            name: [ "적량면", "적량", "면" ],
                            sub: {}
                        },
                        "VIL9": {
                            name: [ "진교면", "진교", "면" ],
                            sub: {}
                        },
                        "VIL10": {
                            name: [ "청암면", "청암", "면" ],
                            sub: {}
                        },
                        "VIL11": {
                            name: [ "화개면", "화개", "면" ],
                            sub: {}
                        },
                        "VIL12": {
                            name: [ "횡천면", "횡천", "면" ],
                            sub: {}
                        }
                    }
                },
                "HMN": {
                    name: [ "함안군", "함안", "군" ],
                    sub: {
                        "VIL0": {
                            name: [ "가야읍", "가야", "읍" ],
                            sub: {}
                        },
                        "VIL1": {
                            name: [ "칠원읍", "칠원", "읍" ],
                            sub: {}
                        },
                        "VIL2": {
                            name: [ "군북면", "군북", "면" ],
                            sub: {}
                        },
                        "VIL3": {
                            name: [ "대산면", "대산", "면" ],
                            sub: {}
                        },
                        "VIL4": {
                            name: [ "법수면", "법수", "면" ],
                            sub: {}
                        },
                        "VIL5": {
                            name: [ "산인면", "산인", "면" ],
                            sub: {}
                        },
                        "VIL6": {
                            name: [ "여항면", "여항", "면" ],
                            sub: {}
                        },
                        "VIL7": {
                            name: [ "칠북면", "칠북", "면" ],
                            sub: {}
                        },
                        "VIL8": {
                            name: [ "칠서면", "칠서", "면" ],
                            sub: {}
                        },
                        "VIL9": {
                            name: [ "함안면", "함안", "면" ],
                            sub: {}
                        }
                    }
                },
                "HYG": {
                    name: [ "함양군", "함양", "군" ],
                    sub: {
                        "VIL0": {
                            name: [ "함양읍", "함양", "읍" ],
                            sub: {}
                        },
                        "VIL1": {
                            name: [ "마천면", "마천", "면" ],
                            sub: {}
                        },
                        "VIL2": {
                            name: [ "백전면", "백전", "면" ],
                            sub: {}
                        },
                        "VIL3": {
                            name: [ "서상면", "서상", "면" ],
                            sub: {}
                        },
                        "VIL4": {
                            name: [ "서하면", "서하", "면" ],
                            sub: {}
                        },
                        "VIL5": {
                            name: [ "수동면", "수동", "면" ],
                            sub: {}
                        },
                        "VIL6": {
                            name: [ "안의면", "안의", "면" ],
                            sub: {}
                        },
                        "VIL7": {
                            name: [ "유림면", "유림", "면" ],
                            sub: {}
                        },
                        "VIL8": {
                            name: [ "지곡면", "지곡", "면" ],
                            sub: {}
                        },
                        "VIL9": {
                            name: [ "휴천면", "휴천", "면" ],
                            sub: {}
                        },
                        "VIL10": {
                            name: [ "병곡면", "병곡", "면" ],
                            sub: {}
                        }
                    }
                },
                "PCH": {
                    name: [ "합천군", "합천", "군" ],
                    sub: {
                        "VIL0": {
                            name: [ "합천읍", "합천", "읍" ],
                            sub: {}
                        },
                        "VIL1": {
                            name: [ "가야면", "가야", "면" ],
                            sub: {}
                        },
                        "VIL2": {
                            name: [ "가회면", "가회", "면" ],
                            sub: {}
                        },
                        "VIL3": {
                            name: [ "대병면", "대병", "면" ],
                            sub: {}
                        },
                        "VIL4": {
                            name: [ "대양면", "대양", "면" ],
                            sub: {}
                        },
                        "VIL5": {
                            name: [ "덕곡면", "덕곡", "면" ],
                            sub: {}
                        },
                        "VIL6": {
                            name: [ "묘산면", "묘산", "면" ],
                            sub: {}
                        },
                        "VIL7": {
                            name: [ "봉산면", "봉산", "면" ],
                            sub: {}
                        },
                        "VIL8": {
                            name: [ "쌍백면", "쌍백", "면" ],
                            sub: {}
                        },
                        "VIL9": {
                            name: [ "쌍책면", "쌍책", "면" ],
                            sub: {}
                        },
                        "VIL10": {
                            name: [ "야로면", "야로", "면" ],
                            sub: {}
                        },
                        "VIL11": {
                            name: [ "용주면", "용주", "면" ],
                            sub: {}
                        },
                        "VIL12": {
                            name: [ "율곡면", "율곡", "면" ],
                            sub: {}
                        },
                        "VIL13": {
                            name: [ "적중면", "적중", "면" ],
                            sub: {}
                        },
                        "VIL14": {
                            name: [ "천덕면", "천덕", "면" ],
                            sub: {}
                        },
                        "VIL15": {
                            name: [ "초계면", "초계", "면" ],
                            sub: {}
                        },
                        "VIL16": {
                            name: [ "삼가면", "삼가", "면" ],
                            sub: {}
                        }
                    }
                }
            }
        },
        "GWN": {
            name: [ "강원도", "강원", "특별자치도" ],
            sub: {
                "GGG": {
                    name: [ "강릉시", "강릉", "시" ],
                    sub: {
                        "URBAN": {
                            name: [ "시내지역", "시내", "시내지역" ],
                            sub: {}
                        },
                        "RURAL": {
                            name: [ "시외지역", "시외", "시외지역" ],
                            sub: {}
                        },
                        "VIL0": {
                            name: [ "주문진읍", "주문진", "읍" ],
                            sub: {}
                        },
                        "VIL1": {
                            name: [ "강동면", "강동", "면" ],
                            sub: {}
                        },
                        "VIL2": {
                            name: [ "구정면", "구정", "면" ],
                            sub: {}
                        },
                        "VIL3": {
                            name: [ "사천면", "사천", "면" ],
                            sub: {}
                        },
                        "VIL4": {
                            name: [ "성산면", "성산", "면" ],
                            sub: {}
                        },
                        "VIL5": {
                            name: [ "연곡면", "연곡", "면" ],
                            sub: {}
                        },
                        "VIL6": {
                            name: [ "옥계면", "옥계", "면" ],
                            sub: {}
                        },
                        "VIL7": {
                            name: [ "왕산면", "왕산", "면" ],
                            sub: {}
                        }
                    }
                },
                "DHE": {
                    name: [ "동해시", "동해", "시" ],
                    sub: {}
                },
                "SAK": {
                    name: [ "삼척시", "삼척", "시" ],
                    sub: {
                        "URBAN": {
                            name: [ "시내지역", "시내", "시내지역" ],
                            sub: {}
                        },
                        "RURAL": {
                            name: [ "시외지역", "시외", "시외지역" ],
                            sub: {}
                        },
                        "VIL0": {
                            name: [ "도계읍", "도계", "읍" ],
                            sub: {}
                        },
                        "VIL1": {
                            name: [ "원덕읍", "원덕", "읍" ],
                            sub: {}
                        },
                        "VIL2": {
                            name: [ "가곡면", "가곡", "면" ],
                            sub: {}
                        },
                        "VIL3": {
                            name: [ "근덕면", "근덕", "면" ],
                            sub: {}
                        },
                        "VIL4": {
                            name: [ "노곡면", "노곡", "면" ],
                            sub: {}
                        },
                        "VIL5": {
                            name: [ "미로면", "미로", "면" ],
                            sub: {}
                        },
                        "VIL6": {
                            name: [ "신기면", "신기", "면" ],
                            sub: {}
                        },
                        "VIL7": {
                            name: [ "하장면", "하장", "면" ],
                            sub: {}
                        }
                    }
                },
                "SKC": {
                    name: [ "속초시", "속초", "시" ],
                    sub: {}
                },
                "WON": {
                    name: [ "원주시", "원주", "시" ],
                    sub: {
                        "URBAN": {
                            name: [ "시내지역", "시내", "시내지역" ],
                            sub: {}
                        },
                        "RURAL": {
                            name: [ "시외지역", "시외", "시외지역" ],
                            sub: {}
                        },
                        "VIL0": {
                            name: [ "문막읍", "문막", "읍" ],
                            sub: {}
                        },
                        "VIL1": {
                            name: [ "귀래면", "귀래", "면" ],
                            sub: {}
                        },
                        "VIL2": {
                            name: [ "부론면", "부론", "면" ],
                            sub: {}
                        },
                        "VIL3": {
                            name: [ "소초면", "소초", "면" ],
                            sub: {}
                        },
                        "VIL4": {
                            name: [ "신림면", "신림", "면" ],
                            sub: {}
                        },
                        "VIL5": {
                            name: [ "지정면", "지정", "면" ],
                            sub: {}
                        },
                        "VIL6": {
                            name: [ "판부면", "판부", "면" ],
                            sub: {}
                        },
                        "VIL7": {
                            name: [ "호저면", "호저", "면" ],
                            sub: {}
                        },
                        "VIL8": {
                            name: [ "흥업면", "흥업", "면" ],
                            sub: {}
                        }
                    }
                },
                "CCH": {
                    name: [ "춘천시", "춘천", "시" ],
                    sub: {
                        "URBAN": {
                            name: [ "시내지역", "시내", "시내지역" ],
                            sub: {}
                        },
                        "RURAL": {
                            name: [ "시외지역", "시외", "시외지역" ],
                            sub: {}
                        },
                        "VIL0": {
                            name: [ "신북읍", "신북", "읍" ],
                            sub: {}
                        },
                        "VIL1": {
                            name: [ "남면", "남", "면" ],
                            sub: {}
                        },
                        "VIL2": {
                            name: [ "남산면", "남산", "면" ],
                            sub: {}
                        },
                        "VIL3": {
                            name: [ "동면", "동", "면" ],
                            sub: {}
                        },
                        "VIL4": {
                            name: [ "동내면", "동내", "면" ],
                            sub: {}
                        },
                        "VIL5": {
                            name: [ "동산면", "동산", "면" ],
                            sub: {}
                        },
                        "VIL6": {
                            name: [ "북산면", "북산", "면" ],
                            sub: {}
                        },
                        "VIL7": {
                            name: [ "사북면", "사북", "면" ],
                            sub: {}
                        },
                        "VIL8": {
                            name: [ "서면", "서", "면" ],
                            sub: {}
                        },
                        "VIL9": {
                            name: [ "신동면", "신동", "면" ],
                            sub: {}
                        }
                    }
                },
                "TBK": {
                    name: [ "태백시", "태백", "시" ],
                    sub: {}
                },
                "GSO": {
                    name: [ "고성군", "고성", "군" ],
                    sub: {
                        "VIL0": {
                            name: [ "간성읍", "간성", "읍" ],
                            sub: {}
                        },
                        "VIL1": {
                            name: [ "거진읍", "거진", "읍" ],
                            sub: {}
                        },
                        "VIL2": {
                            name: [ "현내면", "현내", "면" ],
                            sub: {}
                        },
                        "VIL3": {
                            name: [ "죽왕면", "죽왕", "면" ],
                            sub: {}
                        },
                        "VIL4": {
                            name: [ "토성면", "토성", "면" ],
                            sub: {}
                        },
                        "VIL5": {
                            name: [ "수동면", "수동", "면" ],
                            sub: {}
                        }
                    }
                },
                "YGG": {
                    name: [ "양구군", "양구", "군" ],
                    sub: {
                        "VIL0": {
                            name: [ "양구읍", "양구", "읍" ],
                            sub: {}
                        },
                        "VIL1": {
                            name: [ "국토정중앙면", "국토정중앙", "면" ],
                            sub: {}
                        },
                        "VIL2": {
                            name: [ "동면", "동", "면" ],
                            sub: {}
                        },
                        "VIL3": {
                            name: [ "방산면", "방산", "면" ],
                            sub: {}
                        },
                        "VIL4": {
                            name: [ "해안면", "해안", "면" ],
                            sub: {}
                        }
                    }
                },
                "YYG": {
                    name: [ "양양군", "양양", "군" ],
                    sub: {
                        "VIL0": {
                            name: [ "양양읍", "양양", "읍" ],
                            sub: {}
                        },
                        "VIL1": {
                            name: [ "강현면", "강현", "면" ],
                            sub: {}
                        },
                        "VIL2": {
                            name: [ "서면", "서", "면" ],
                            sub: {}
                        },
                        "VIL3": {
                            name: [ "손양면", "손양", "면" ],
                            sub: {}
                        },
                        "VIL4": {
                            name: [ "현북면", "현북", "면" ],
                            sub: {}
                        },
                        "VIL5": {
                            name: [ "현남면", "현남", "면" ],
                            sub: {}
                        }
                    }
                },
                "YWL": {
                    name: [ "영월군", "영월", "군" ],
                    sub: {
                        "VIL0": {
                            name: [ "영월읍", "영월", "읍" ],
                            sub: {}
                        },
                        "VIL1": {
                            name: [ "상동읍", "상동", "읍" ],
                            sub: {}
                        },
                        "VIL2": {
                            name: [ "김삿갓면", "김삿갓", "면" ],
                            sub: {}
                        },
                        "VIL3": {
                            name: [ "남면", "남", "면" ],
                            sub: {}
                        },
                        "VIL4": {
                            name: [ "무릉도원면", "무릉도원", "면" ],
                            sub: {}
                        },
                        "VIL5": {
                            name: [ "북면", "북", "면" ],
                            sub: {}
                        },
                        "VIL6": {
                            name: [ "산솔면", "산솔", "면" ],
                            sub: {}
                        },
                        "VIL7": {
                            name: [ "주천면", "주천", "면" ],
                            sub: {}
                        },
                        "VIL8": {
                            name: [ "한반도면", "한반도", "면" ],
                            sub: {}
                        }
                    }
                },
                "INJ": {
                    name: [ "인제군", "인제", "군" ],
                    sub: {
                        "VIL0": {
                            name: [ "인제읍", "인제", "읍" ],
                            sub: {}
                        },
                        "VIL1": {
                            name: [ "기린면", "기린", "면" ],
                            sub: {}
                        },
                        "VIL2": {
                            name: [ "남면", "남", "면" ],
                            sub: {}
                        },
                        "VIL3": {
                            name: [ "북면", "북", "면" ],
                            sub: {}
                        },
                        "VIL4": {
                            name: [ "상남면", "상남", "면" ],
                            sub: {}
                        },
                        "VIL5": {
                            name: [ "서화면", "서화", "면" ],
                            sub: {}
                        }
                    }
                },
                "JSN": {
                    name: [ "정선군", "정선", "군" ],
                    sub: {
                        "VIL0": {
                            name: [ "고한읍", "고한", "읍" ],
                            sub: {}
                        },
                        "VIL1": {
                            name: [ "사북읍", "사북", "읍" ],
                            sub: {}
                        },
                        "VIL2": {
                            name: [ "신동읍", "신동", "읍" ],
                            sub: {}
                        },
                        "VIL3": {
                            name: [ "정선읍", "정선", "읍" ],
                            sub: {}
                        },
                        "VIL4": {
                            name: [ "남면", "남", "면" ],
                            sub: {}
                        },
                        "VIL5": {
                            name: [ "북평면", "북평", "면" ],
                            sub: {}
                        },
                        "VIL6": {
                            name: [ "여량면", "여량", "면" ],
                            sub: {}
                        },
                        "VIL7": {
                            name: [ "임계면", "임계", "면" ],
                            sub: {}
                        },
                        "VIL8": {
                            name: [ "화암면", "화암", "면" ],
                            sub: {}
                        }
                    }
                },
                "CRW": {
                    name: [ "철원군", "철원", "군" ],
                    sub: {
                        "VIL0": {
                            name: [ "갈말읍", "갈말", "읍" ],
                            sub: {}
                        },
                        "VIL1": {
                            name: [ "김화읍", "김화", "읍" ],
                            sub: {}
                        },
                        "VIL2": {
                            name: [ "동송읍", "동송", "읍" ],
                            sub: {}
                        },
                        "VIL3": {
                            name: [ "철원읍", "철원", "읍" ],
                            sub: {}
                        },
                        "VIL4": {
                            name: [ "근남면", "근남", "면" ],
                            sub: {}
                        },
                        "VIL5": {
                            name: [ "근북면", "근북", "면" ],
                            sub: {}
                        },
                        "VIL6": {
                            name: [ "서면", "서", "면" ],
                            sub: {}
                        },
                        "VIL7": {
                            name: [ "근동면", "근동", "면" ],
                            sub: {}
                        },
                        "VIL8": {
                            name: [ "원남면", "원남", "면" ],
                            sub: {}
                        },
                        "VIL9": {
                            name: [ "원동면", "원동", "면" ],
                            sub: {}
                        },
                        "VIL10": {
                            name: [ "임남면", "임남", "면" ],
                            sub: {}
                        }
                    }
                },
                "PYC": {
                    name: [ "평창군", "평창", "군" ],
                    sub: {
                        "VIL0": {
                            name: [ "평창읍", "평창", "읍" ],
                            sub: {}
                        },
                        "VIL1": {
                            name: [ "미탄면", "미탄", "면" ],
                            sub: {}
                        },
                        "VIL2": {
                            name: [ "방림면", "방림", "면" ],
                            sub: {}
                        },
                        "VIL3": {
                            name: [ "대화면", "대화", "면" ],
                            sub: {}
                        },
                        "VIL4": {
                            name: [ "봉평면", "봉평", "면" ],
                            sub: {}
                        },
                        "VIL5": {
                            name: [ "용평면", "용평", "면" ],
                            sub: {}
                        },
                        "VIL6": {
                            name: [ "진부면", "진부", "면" ],
                            sub: {}
                        },
                        "VIL7": {
                            name: [ "대관령면", "대관령", "면" ],
                            sub: {}
                        }
                    }
                },
                "HCH": {
                    name: [ "홍천군", "홍천", "군" ],
                    sub: {
                        "VIL0": {
                            name: [ "홍천읍", "홍천", "읍" ],
                            sub: {}
                        },
                        "VIL1": {
                            name: [ "화촌면", "화촌", "면" ],
                            sub: {}
                        },
                        "VIL2": {
                            name: [ "두촌면", "두촌", "면" ],
                            sub: {}
                        },
                        "VIL3": {
                            name: [ "내촌면", "내촌", "면" ],
                            sub: {}
                        },
                        "VIL4": {
                            name: [ "서석면", "서석", "면" ],
                            sub: {}
                        },
                        "VIL5": {
                            name: [ "영귀미면", "영귀미", "면" ],
                            sub: {}
                        },
                        "VIL6": {
                            name: [ "남면", "남", "면" ],
                            sub: {}
                        },
                        "VIL7": {
                            name: [ "서면", "서", "면" ],
                            sub: {}
                        },
                        "VIL8": {
                            name: [ "북방면", "북방", "면" ],
                            sub: {}
                        },
                        "VIL9": {
                            name: [ "내면", "내", "면" ],
                            sub: {}
                        }
                    }
                },
                "HWH": {
                    name: [ "화천군", "화천", "군" ],
                    sub: {
                        "VIL0": {
                            name: [ "화천읍", "화천", "읍" ],
                            sub: {}
                        },
                        "VIL1": {
                            name: [ "간동면", "간동", "면" ],
                            sub: {}
                        },
                        "VIL2": {
                            name: [ "사내면", "사내", "면" ],
                            sub: {}
                        },
                        "VIL3": {
                            name: [ "상서면", "상서", "면" ],
                            sub: {}
                        },
                        "VIL4": {
                            name: [ "하남면", "하남", "면" ],
                            sub: {}
                        }
                    }
                },
                "HOE": {
                    name: [ "횡성군", "횡성", "군" ],
                    sub: {
                        "VIL0": {
                            name: [ "횡성읍", "횡성", "읍" ],
                            sub: {}
                        },
                        "VIL1": {
                            name: [ "갑천면", "갑천", "면" ],
                            sub: {}
                        },
                        "VIL2": {
                            name: [ "강림면", "강림", "면" ],
                            sub: {}
                        },
                        "VIL3": {
                            name: [ "공근면", "공근", "면" ],
                            sub: {}
                        },
                        "VIL4": {
                            name: [ "둔내면", "둔내", "면" ],
                            sub: {}
                        },
                        "VIL5": {
                            name: [ "서원면", "서원", "면" ],
                            sub: {}
                        },
                        "VIL6": {
                            name: [ "안흥면", "안흥", "면" ],
                            sub: {}
                        },
                        "VIL7": {
                            name: [ "우천면", "우천", "면" ],
                            sub: {}
                        },
                        "VIL8": {
                            name: [ "청일면", "청일", "면" ],
                            sub: {}
                        }
                    }
                }
            }
        },
        "JJU": {
            name: [ "제주도", "제주", "특별자치도" ],
            sub: {
                "JCT": {
                    name: [ "제주시", "제주", "시" ],
                    sub: {
                        "URBAN": {
                            name: [ "시내지역", "시내", "시내지역" ],
                            sub: {}
                        },
                        "RURAL": {
                            name: [ "시외지역", "시외", "시외지역" ],
                            sub: {}
                        },
                        "VIL0": {
                            name: [ "구좌읍", "구좌", "읍" ],
                            sub: {}
                        },
                        "VIL1": {
                            name: [ "애월읍", "애월", "읍" ],
                            sub: {}
                        },
                        "VIL2": {
                            name: [ "조천읍", "조천", "읍" ],
                            sub: {}
                        },
                        "VIL3": {
                            name: [ "한림읍", "한림", "읍" ],
                            sub: {}
                        },
                        "VIL4": {
                            name: [ "우도면", "우도", "면" ],
                            sub: {}
                        },
                        "VIL5": {
                            name: [ "추자면", "추자", "면" ],
                            sub: {}
                        },
                        "VIL6": {
                            name: [ "한경면", "한경", "면" ],
                            sub: {}
                        }
                    }
                },
                "GWP": {
                    name: [ "서귀포시", "서귀포", "시" ],
                    sub: {
                        "URBAN": {
                            name: [ "시내지역", "시내", "시내지역" ],
                            sub: {}
                        },
                        "RURAL": {
                            name: [ "시외지역", "시외", "시외지역" ],
                            sub: {}
                        },
                        "VIL0": {
                            name: [ "남원읍", "남원", "읍" ],
                            sub: {}
                        },
                        "VIL1": {
                            name: [ "대정읍", "대정", "읍" ],
                            sub: {}
                        },
                        "VIL2": {
                            name: [ "성산읍", "성산", "읍" ],
                            sub: {}
                        },
                        "VIL3": {
                            name: [ "안덕면", "안덕", "면" ],
                            sub: {}
                        },
                        "VIL4": {
                            name: [ "표선면", "표선", "면" ],
                            sub: {}
                        }
                    }
                },
            }
        },
        "XNG": {
            name: [ "미수복경기도", "미수복경기", "도" ],
            sub: {
                "XNG0": {
                    name: [ "연천군", "연천", "군" ],
                    sub: {}
                },
                "XNG1": {
                    name: [ "개성시", "개성", "시" ],
                    sub: {}
                },
                "XNG2": {
                    name: [ "개풍군", "개풍", "군" ],
                    sub: {}
                },
                "XNG3": {
                    name: [ "장단군", "장단", "군" ],
                    sub: {}
                }
            }
        },
        "XGW": {
            name: [ "미수복강원도", "미수복강원", "도" ],
            sub: {
                "XGW0": {
                    name: [ "고성군", "고성", "군" ],
                    sub: {}
                },
                "XGW1": {
                    name: [ "양구군", "양구", "군" ],
                    sub: {}
                },
                "XGW2": {
                    name: [ "인제군", "인제", "군" ],
                    sub: {}
                },
                "XGW3": {
                    name: [ "철원군", "철원", "군" ],
                    sub: {}
                },
                "XGW4": {
                    name: [ "김화군", "김화", "군" ],
                    sub: {}
                },
                "XGW5": {
                    name: [ "이천군", "이천", "군" ],
                    sub: {}
                },
                "XGW6": {
                    name: [ "통천군", "통천", "군" ],
                    sub: {}
                },
                "XGW7": {
                    name: [ "평강군", "평강", "군" ],
                    sub: {}
                },
                "XGW8": {
                    name: [ "회양군", "회양", "군" ],
                    sub: {}
                }
            }
        },
        "XHW": {
            name: [ "황해도", "황해", "도" ],
            sub: {
                "XHW0": {
                    name: [ "해주시", "해주", "시" ],
                    sub: {}
                },
                "XHW1": {
                    name: [ "사리원시", "사리원", "시" ],
                    sub: {}
                },
                "XHW2": {
                    name: [ "송림시", "송림", "시" ],
                    sub: {}
                },
                "XHW3": {
                    name: [ "벽성군", "벽성", "군" ],
                    sub: {}
                },
                "XHW4": {
                    name: [ "연백군", "연백", "군" ],
                    sub: {}
                },
                "XHW5": {
                    name: [ "금천군", "금천", "군" ],
                    sub: {}
                },
                "XHW6": {
                    name: [ "평산군", "평산", "군" ],
                    sub: {}
                },
                "XHW7": {
                    name: [ "신계군", "신계", "군" ],
                    sub: {}
                },
                "XHW8": {
                    name: [ "장연군", "장연", "군" ],
                    sub: {}
                },
                "XHW9": {
                    name: [ "송화군", "송화", "군" ],
                    sub: {}
                },
                "XHW10": {
                    name: [ "은율군", "은율", "군" ],
                    sub: {}
                },
                "XHW11": {
                    name: [ "안악군", "안악", "군" ],
                    sub: {}
                },
                "XHW12": {
                    name: [ "신천군", "신천", "군" ],
                    sub: {}
                },
                "XHW13": {
                    name: [ "재령군", "재령", "군" ],
                    sub: {}
                },
                "XHW14": {
                    name: [ "황주군", "황주", "군" ],
                    sub: {}
                },
                "XHW15": {
                    name: [ "봉산군", "봉산", "군" ],
                    sub: {}
                },
                "XHW16": {
                    name: [ "서흥군", "서흥", "군" ],
                    sub: {}
                },
                "XHW17": {
                    name: [ "수안군", "수안", "군" ],
                    sub: {}
                },
                "XHW18": {
                    name: [ "곡산군", "곡산", "군" ],
                    sub: {}
                },
                "XHW19": {
                    name: [ "옹진군", "옹진", "군" ],
                    sub: {}
                }
            }
        },
        "XNP": {
            name: [ "평안북도", "평북", "도" ],
            sub: {
                "XNP0": {
                    name: [ "신의주시", "신의주", "시" ],
                    sub: {}
                },
                "XNP1": {
                    name: [ "의주군", "의주", "군" ],
                    sub: {}
                },
                "XNP2": {
                    name: [ "용천군", "용천", "군" ],
                    sub: {}
                },
                "XNP3": {
                    name: [ "철산군", "철산", "군" ],
                    sub: {}
                },
                "XNP4": {
                    name: [ "선천군", "선천", "군" ],
                    sub: {}
                },
                "XNP5": {
                    name: [ "강계군", "강계", "군" ],
                    sub: {}
                },
                "XNP6": {
                    name: [ "정주군", "정주", "군" ],
                    sub: {}
                },
                "XNP7": {
                    name: [ "박천군", "박천", "군" ],
                    sub: {}
                },
                "XNP8": {
                    name: [ "태천군", "태천", "군" ],
                    sub: {}
                },
                "XNP9": {
                    name: [ "영변군", "영변", "군" ],
                    sub: {}
                },
                "XNP10": {
                    name: [ "자성군", "자성", "군" ],
                    sub: {}
                },
                "XNP11": {
                    name: [ "운산군", "운산", "군" ],
                    sub: {}
                },
                "XNP12": {
                    name: [ "구성군", "구성", "군" ],
                    sub: {}
                },
                "XNP13": {
                    name: [ "창성군", "창성", "군" ],
                    sub: {}
                },
                "XNP14": {
                    name: [ "벽동군", "벽동", "군" ],
                    sub: {}
                },
                "XNP15": {
                    name: [ "후창군", "후창", "군" ],
                    sub: {}
                },
                "XNP16": {
                    name: [ "삭주군", "삭주", "군" ],
                    sub: {}
                },
                "XNP17": {
                    name: [ "초산군", "초산", "군" ],
                    sub: {}
                },
                "XNP18": {
                    name: [ "위원군", "위원", "군" ],
                    sub: {}
                },
                "XNP19": {
                    name: [ "희천군", "희천", "군" ],
                    sub: {}
                }
            }
        },
        "XSP": {
            name: [ "평안남도", "평남", "도" ],
            sub: {
                "XSP0": {
                    name: [ "평양시", "평양", "시" ],
                    sub: {}
                },
                "XSP1": {
                    name: [ "진남포시", "진남포", "시" ],
                    sub: {}
                },
                "XSP2": {
                    name: [ "대동군", "대동", "군" ],
                    sub: {}
                },
                "XSP3": {
                    name: [ "순천군", "순천", "군" ],
                    sub: {}
                },
                "XSP4": {
                    name: [ "맹산군", "맹산", "군" ],
                    sub: {}
                },
                "XSP5": {
                    name: [ "양덕군", "양덕", "군" ],
                    sub: {}
                },
                "XSP6": {
                    name: [ "덕천군", "덕천", "군" ],
                    sub: {}
                },
                "XSP7": {
                    name: [ "성천군", "성천", "군" ],
                    sub: {}
                },
                "XSP8": {
                    name: [ "강동군", "강동", "군" ],
                    sub: {}
                },
                "XSP9": {
                    name: [ "중화군", "중화", "군" ],
                    sub: {}
                },
                "XSP10": {
                    name: [ "용강군", "용강", "군" ],
                    sub: {}
                },
                "XSP11": {
                    name: [ "영원군", "영원", "군" ],
                    sub: {}
                },
                "XSP12": {
                    name: [ "강서군", "강서", "군" ],
                    sub: {}
                },
                "XSP13": {
                    name: [ "평원군", "평원", "군" ],
                    sub: {}
                },
                "XSP14": {
                    name: [ "안주군", "안주", "군" ],
                    sub: {}
                },
                "XSP15": {
                    name: [ "개천군", "개천", "군" ],
                    sub: {}
                }
            }
        },
        "XNH": {
            name: [ "함경북도", "함북", "도" ],
            sub: {
                "XNH0": {
                    name: [ "청진시", "청진", "시" ],
                    sub: {}
                },
                "XNH1": {
                    name: [ "성진시", "성진", "시" ],
                    sub: {}
                },
                "XNH2": {
                    name: [ "나진시", "나진", "시" ],
                    sub: {}
                },
                "XNH3": {
                    name: [ "경성군", "경성", "군" ],
                    sub: {}
                },
                "XNH4": {
                    name: [ "명천군", "명천", "군" ],
                    sub: {}
                },
                "XNH5": {
                    name: [ "길주군", "길주", "군" ],
                    sub: {}
                },
                "XNH6": {
                    name: [ "학성군", "학성", "군" ],
                    sub: {}
                },
                "XNH7": {
                    name: [ "부령군", "부령", "군" ],
                    sub: {}
                },
                "XNH8": {
                    name: [ "무산군", "무산", "군" ],
                    sub: {}
                },
                "XNH9": {
                    name: [ "회령군", "회령", "군" ],
                    sub: {}
                },
                "XNH10": {
                    name: [ "종성군", "종성", "군" ],
                    sub: {}
                },
                "XNH11": {
                    name: [ "경흥군", "경흥", "군" ],
                    sub: {}
                },
                "XNH12": {
                    name: [ "경원군", "경원", "군" ],
                    sub: {}
                },
                "XNH13": {
                    name: [ "온성군", "온성", "군" ],
                    sub: {}
                }
            }
        },
        "XSH": {
            name: [ "함경남도", "함남", "도" ],
            sub: {
                "XSH0": {
                    name: [ "함흥시", "함흥", "시" ],
                    sub: {}
                },
                "XSH1": {
                    name: [ "원산시", "원산", "시" ],
                    sub: {}
                },
                "XSH2": {
                    name: [ "흥남시", "흥남", "시" ],
                    sub: {}
                },
                "XSH3": {
                    name: [ "함주군", "함주", "군" ],
                    sub: {}
                },
                "XSH4": {
                    name: [ "정평군", "정평", "군" ],
                    sub: {}
                },
                "XSH5": {
                    name: [ "영흥군", "영흥", "군" ],
                    sub: {}
                },
                "XSH6": {
                    name: [ "고원군", "고원", "군" ],
                    sub: {}
                },
                "XSH7": {
                    name: [ "문천군", "문천", "군" ],
                    sub: {}
                },
                "XSH8": {
                    name: [ "안변군", "안변", "군" ],
                    sub: {}
                },
                "XSH9": {
                    name: [ "홍원군", "홍원", "군" ],
                    sub: {}
                },
                "XSH10": {
                    name: [ "북청군", "북청", "군" ],
                    sub: {}
                },
                "XSH11": {
                    name: [ "이원군", "이원", "군" ],
                    sub: {}
                },
                "XSH12": {
                    name: [ "단천군", "단천", "군" ],
                    sub: {}
                },
                "XSH13": {
                    name: [ "신흥군", "신흥", "군" ],
                    sub: {}
                },
                "XSH14": {
                    name: [ "장진군", "장진", "군" ],
                    sub: {}
                },
                "XSH15": {
                    name: [ "풍산군", "풍산", "군" ],
                    sub: {}
                },
                "XSH16": {
                    name: [ "삼수군", "삼수", "군" ],
                    sub: {}
                },
                "XSH17": {
                    name: [ "갑산군", "갑산", "군" ],
                    sub: {}
                },
                "XSH18": {
                    name: [ "혜산군", "혜산", "군" ],
                    sub: {}
                }
            }
        }
    };
    const COLORS = [ "r", "g", "b" ];
    const PRESETS = [
        [
            0,
            0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0,
            2, 2, 2, 2, 2, 2, 2
        ],
        [
            1,
            2, 2, 2, 1, 1, 2, 0,
            1, 1, 1, 1, 1, 1, 1, 1, 1,
            2, 2, 2, 2, 2, 2, 2
        ],
        [
            0,
            3, 3, 3, 0, 0, 3, 2,
            5, 5, 5, 5, 3, 5, 5, 3, 3,
            2, 2, 2, 2, 2, 2, 2
        ],
        [
            1,
            4, 4, 4, 1, 1, 4, 2,
            6, 6, 6, 6, 3, 6, 6, 3, 3,
            2, 2, 2, 2, 2, 2, 2
        ],
        [
            0,
            0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0
        ],
        [
            1,
            2, 2, 2, 1, 1, 2, 0,
            1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1
        ],
        [
            0,
            3, 3, 3, 0, 0, 3, 2,
            5, 5, 5, 5, 3, 5, 5, 3, 3,
            1, 1, 1, 1, 1, 1, 1
        ],
        [
            1,
            4, 4, 4, 1, 1, 4, 2,
            6, 6, 6, 6, 3, 6, 6, 3, 3,
            1, 1, 1, 1, 1, 1, 1
        ]
    ];

    const $sizeWarn = $("#viewport-warn");
    const $map = $("#map");
    const $mViewport = $("#right");
    const $mArea = $("#map-area");
    const $mlScale = $("#map-layer-scale");
    const $mlPos = $("#map-layer-position");
    const $mBg = $("#map-background");
    const $toolbar = $("#left");
    const $name = $("#name");
    const $search = $("#search-area");
    const $searchResultBox = $("#search-result-box");
    const $searchResult = $("#search-result-area");
    const $inpSearch = $("#search");
    const $btnSearch = $("#button-search-go");
    const $btnSearchFill = $("#button-search-fill-result");
    const $btnCloseSizeWarn = $("#button-close-size-warning");
    const $btnToolbar = $("#button-toolbar");
    const $btnsMode = {
        0: $("#mode-label-move"),
        1: $("#mode-label-paint"),
        2: $("#mode-label-sweep"),
        3: $("#mode-label-clear")
    };
    const $cpFill = $("#fill-colorpicker");
    const $btnCpFill = $("#checkbox-label-palette-item");
    const $chkCpFill = $("#checkbox-toggle-palette-item");
    const $cpFillPreview = $("#fill-colorpicker-preview");
    const $cpFillPreviewText = $("#fill-colorpicker-preview>p");
    const $cpFillCursors = [
        $("#fill-colorpicker-r>.colorpicker-cursor"),
        $("#fill-colorpicker-g>.colorpicker-cursor"),
        $("#fill-colorpicker-b>.colorpicker-cursor")
    ];
    const $cpFillInputs = [
        $("#input-fill-colorpicker-r"),
        $("#input-fill-colorpicker-g"),
        $("#input-fill-colorpicker-b")
    ];
    const $cpFillTemplates = $a("#fill-colorpicker-template>div");
    const $cpFillRecents = $a("#fill-colorpicker-recent>div");
    const $cpBg = $("#background-colorpicker");
    const $btnCpBg = $("#checkbox-label-palette-background");
    const $chkCpBg = $("#checkbox-toggle-palette-background");
    const $cpBgPreview = $("#background-colorpicker-preview");
    const $cpBgPreviewText = $("#background-colorpicker-preview>p");
    const $cpBgCursors = [
        $("#background-colorpicker-r>.colorpicker-cursor"),
        $("#background-colorpicker-g>.colorpicker-cursor"),
        $("#background-colorpicker-b>.colorpicker-cursor")
    ];
    const $cpBgInputs = [
        $("#input-background-colorpicker-r"),
        $("#input-background-colorpicker-g"),
        $("#input-background-colorpicker-b")
    ];
    const $cpBgTemplates = $a("#background-colorpicker-template>div");
    // const $cpBgRecents = $a("#background-colorpicker-recent>div");
    const $mConf = $("#map-config");
    const $btnMConf = $("#checkbox-label-config");
    const $chkMConf = $("#checkbox-toggle-config");
    const $mConfTab = $("#map-config>div>.left");
    const $mConfOps = $("#map-config>div>.right");
    const $mPreset = $("#map-preset");
    const $btnMPreset = $("#checkbox-label-preset");
    const $chkMPreset = $("#checkbox-toggle-preset");
    const $zoomLevel = $("#button-zoom-reset>p");
    const $btnZoomReset = $("#button-zoom-reset");
    const $btnZoomIn = $("#button-zoom-in");
    const $btnZoomOut = $("#button-zoom-out");
    const $winReset = $("#modal-reset");
    const $btnReset = $("#button-reset");
    const $btnResetAccept = $("#modal-reset-button-accept");
    const $btnResetDeny = $("#modal-reset-button-deny");
    const $mExport = $("#export");
    const $mExportCodePreview = $("#export-code-preview");
    const $btnExport = $("#button-export-copy");
    const $btnWinExport = $("#button-export");
    const $chkExport = $("#checkbox-toggle-export");
    const $mImport = $("#import");
    const $mImportCodeArea = $("#textarea-import-code");
    const $btnImport = $("#button-import-paste");
    const $btnWinImport = $("#button-import");
    const $chkImport = $("#checkbox-toggle-import");
    const $mDownload = $("#download");
    const $btnDownload = $("#button-download");
    const $chkDownload = $("#checkbox-toggle-download");
    const $winAbout = $("#modal-about");
    const $btnAbout = $("#logo");
    const $btnAboutAccept = $("#modal-about-button-accept");
    const $hAboutTitle = $("#modal-about>div>h1");
    const $pAboutName = $("#about-name");
    const $pAboutAuthor = $("#about-author");
    const $pAboutVer = $("#about-version");

    const clearChild = ($t, a = []) => {
        Array.from($t.childNodes).forEach(($n) => {
            if (a.includes($n.id)) return;
            $n.remove();
        });
    };
    const initHash = () => {
        location.hash = `pos=${op.x},${op.y}&scale=${op.s}`;
    };
    const readHash = () => {
        const filter = [ "pos", "scale" ];
        const hash = location.hash.substring(1).split("&");
        const res = {};
        hash.forEach((x, i) => {
            const data = x.split("=");
            if (!filter.includes(data[0])) return;
            res[data[0]] = data[1];
        });
        if (!res["pos"] || !res["scale"]) {
            initHash();
        } else {
            applyHash(res);
        };
    };
    const applyHash = (o) => {
        const pos = o.pos.split(",").map((x) => Number(x));
        if (pos.filter((i) => Number.isNaN(i)).length) initHash();
        else setPos(pos[0], pos[1]);

        const scale = Number(o.scale);
        if (Number.isNaN(scale)) initHash();
        else setScale(scale);
    };
    const addPos = (x = 0, y = 0) => {
        op.x += x;
        op.y += y;
        applyPos();
    };
    const setPos = (x = null, y = null) => {
        if (x !== null) op.x = x;
        if (y !== null) op.y = y;
        applyPos();
    };
    const applyPos = () => {
        $mlPos.style["transform"] = `translate(${op.x}px,${op.y}px)`;
        genExportCode();
    };
    const addScale = (i) => {
        if (i > 0 && op.s+i > SCALEMAX) op.s = SCALEMAX;
        else if (i < 0 && op.s+i < SCALEMIN) op.s = SCALEMIN;
        else op.s += i;
        applyScale();
    };
    const setScale = (i) => {
        if (i > 0 && i > SCALEMAX) op.s = SCALEMAX;
        else if (i < 0 && i < SCALEMIN) op.s = SCALEMIN;
        else op.s = i;
        applyScale();
    };
    const applyScale = () => {
        op.rs = SCALEINIT * op.s;
        $mlScale.style["transform"] = `scale(${op.rs})`;
        $zoomLevel.innerText = op.s;
        genExportCode();
    };
    const applyOp = () => {
        applyPos();
        applyScale();
    };
    const getRegionNameData = (s) => {
        const res = {
            string: "",
            raw: []
        };
        const a = `${s}`.split("-");
        a.forEach((x, i) => {
            if (i <= 0) res.raw.push(REGIONS[x] ? REGIONS[x] : x);
            else res.raw.push(res.raw[i-1].name ? (res.raw[i-1].sub[x] ? res.raw[i-1].sub[x] : x) : x);
        });
        res.string = res.raw.filter((x) => x).map((x) => x.name ? x.name[0] : x).filter((x) => x).join(" ").trim();
        return res;
    };
    const getVisibleRegionIndex = () => {
        const res = Array.from($a(".map-shape")).filter(($x) => $x.checkVisibility()).map(($x) => {
            const raw = getRegionNameData($x.id);
            const data = {
                name: raw.string,
                id: $x.id
            };
            return data;
        });
        return res;
    };
    const goto = (t) => {
        const $t = $(`#${t}`);
        if (!$t || !$t.checkVisibility()) return;
        setPos(0, 0);
        setScale(5);
        setTimeout(() => {
            const m = $map.getBoundingClientRect();
            const v = $mViewport.getBoundingClientRect();
            const r = $t.getBoundingClientRect();

            const cx = v.width / 2;
            const cy = v.height / 2;
            const x = (r.x * -1 + cx - r.width / 2) / op.rs + 1.4;
            const y = (r.y * -1 + cy - r.height / 2) / op.rs + 0.9;
            setPos(x, y);
        }, 50);
    };
    const RGBtoHEX = (o) => {
        let r = o.r.toString(16).toUpperCase();
        let g = o.g.toString(16).toUpperCase();
        let b = o.b.toString(16).toUpperCase();
        r = r.length === 1 ? `0${r}` : r;
        g = g.length === 1 ? `0${g}` : g;
        b = b.length === 1 ? `0${b}` : b;
    
        return `${r}${g}${b}`;
    };
    const addColorFill = (x, i) => {
        if (!COLORS.includes(x)) return;
        col.fill[x] = (col.fill[x] + i < 0) ? 0 : ((col.fill[x] + i > 255) ? 255 : col.fill[x] + i);
        applyColorFill();
    };
    const setColorFill = (rgb) => {
        if (rgb.r?.constructor === Number) col.fill.r = rgb.r;
        if (rgb.g?.constructor === Number) col.fill.g = rgb.g;
        if (rgb.b?.constructor === Number) col.fill.b = rgb.b;
        $btnCpFill.style["background-color"] = `rgb(${Object.values(col.fill).join(",")})`;
        $cpFillPreview.style["background-color"] = `rgb(${Object.values(col.fill).join(", ")})`;
        $cpFillPreviewText.innerText = `#${RGBtoHEX(col.fill)}\n${Object.values(col.fill).join(", ")}`;
        $cpFillCursors.forEach(($n, i) => {
            $n.style["left"] = `${Object.values(col.fill)[i]}px`;
        });
        $cpFillInputs.forEach(($n, i) => {
            $n.value = `${Object.values(col.fill)[i]}`;
        });
        genExportCode();
    };
    const applyColorFill = () => {
        setColorFill(col.fill);
    };
    const addColorBg = (x, i) => {
        if (!COLORS.includes(x)) return;
        col.bg[x] = (col.bg[x] + i < 0) ? 0 : ((col.bg[x] + i > 255) ? 255 : col.bg[x] + i);
        applyColorBg();
    };
    const setColorBg = (rgb) => {
        if (rgb.r?.constructor === Number) col.bg.r = rgb.r;
        if (rgb.g?.constructor === Number) col.bg.g = rgb.g;
        if (rgb.b?.constructor === Number) col.bg.b = rgb.b;
        const hex = `#${RGBtoHEX(col.bg)}`;
        $mArea.style["background-color"] = hex;
        $mBg.style["fill"] = hex;
        $btnCpBg.style["background-color"] = hex;
        $cpBgPreview.style["background-color"] = `rgb(${Object.values(col.bg).join(", ")})`;
        $cpBgPreviewText.innerText = `${hex}\n${Object.values(col.bg).join(", ")}`;
        $cpBgCursors.forEach(($n, i) => {
            $n.style["left"] = `${Object.values(col.bg)[i]}px`;
        });
        $cpBgInputs.forEach(($n, i) => {
            $n.value = `${Object.values(col.bg)[i]}`;
        });
        genExportCode();
    };
    const applyColorBg = () => {
        setColorBg(col.bg);
    };
    const fill = (t) => {
        if (t.constructor === String) t = $(`#${t}`);
        const hex = `#${RGBtoHEX(col.fill)}`;
        t.style["fill"] = hex;
        areas[t.id] = hex;
        addRecentColorFill({
            rgb: Object.assign({}, col.fill),
            hex: RGBtoHEX(col.fill)
        });
        genExportCode();
    };
    const fillAlt = (t, hex) => {
        if (t.constructor === String) t = $(`#${t}`);
        t.style["fill"] = hex;
        areas[t.id] = hex;
        genExportCode();
    };
    const unfill = (t) => {
        if (t.constructor === String) t = $(`#${t}`);
        t.style["fill"] = null;
        delete areas[t.id];
        genExportCode();
    };
    const addRecentColorFill = (d) => {
        if (colRecents.fill.filter((x) => RGBtoHEX(x) === d.hex).length) return;
        colRecents.fill.pop();
        colRecents.fill.unshift(d.rgb);
        refreshRecentColorFill();
    };
    const refreshRecentColorFill = () => {
        $cpFillRecents.forEach(($n, i) => {
            $n.style["background-color"] = `rgb(${Object.values(colRecents.fill[i]).join(", ")})`;
        });
    };
    const modeMethods = {
        0: () => {
            $mArea.onpointerdown = (p) => {
                $mArea.setPointerCapture(p.pointerId);
                $mArea.onpointermove = (m) => {
                    addPos(m.movementX/op.rs, m.movementY/op.rs);
                };
                $mArea.onpointerup = () => {
                    $mArea.releasePointerCapture(p.pointerId);
                    $mArea.onpointermove = null;
                    $mArea.onpointerup = null;
                    initHash();
                };
            };
        },
        1: () => {
            $mArea.onpointerdown = (p) => {
                let f = false;
                $mArea.setPointerCapture(p.pointerId);
                $mArea.onpointermove = (m) => {
                    f = true;
                    addPos(m.movementX/op.rs, m.movementY/op.rs);
                };
                $mArea.onpointerup = () => {
                    $mArea.releasePointerCapture(p.pointerId);
                    $mArea.onpointermove = null;
                    $mArea.onpointerup = null;
                    initHash();

                    if (f || !p.target.classList.contains("map-shape")) return;
                    fill(p.target);
                };
            };
        },
        2: () => {
            $mArea.onpointerdown = (p) => {
                if (!p.target.classList.contains("map-shape")) return;
                fill(p.target);
                $mArea.onpointermove = (m) => {
                    if (!m.target.classList.contains("map-shape")) return;
                    fill(m.target);
                };
                $mArea.onpointerup = () => {
                    $mArea.onpointermove = null;
                    $mArea.onpointerup = null;
                };
            };
        },
        3: () => {
            $mArea.onpointerdown = (p) => {
                if (!p.target.classList.contains("map-shape")) return;
                unfill(p.target);
                $mArea.onpointermove = (m) => {
                    if (!m.target.classList.contains("map-shape")) return;
                    unfill(m.target);
                };
                $mArea.onpointerup = () => {
                    $mArea.onpointermove = null;
                    $mArea.onpointerup = null;
                };
            };
        }
    };
    const setLayer = (t, i) => {
        if (!typeof i === "undefined") return;
        layers[t] = i;
        layerOps[t].active = i;
        layerOps[t].options[i].value.forEach((x, i) => {
            if (x) {
                layerOps[t].layers[i].style["display"] = "block";
            } else {
                layerOps[t].layers[i].style["display"] = "none";
            };
        });
        genExportCode();
    };
    const setLayerAll = (a) => {
        a.forEach((x, i) => {
            setLayer(Object.keys(layerOps)[i], x);
        });
    };
    const doReset = () => {
        Array.from($a(".map-shape")).forEach(($n) => {
            unfill($n.id);
        });
        setPos(0, 0);
        setScale(1);
        setColorFill(Object.assign({}, COLINIT.fill));
        setColorBg(Object.assign({}, COLINIT.bg));
        initHash();
    };
    const genExportCode = () => {
        const data = {
            version: LYRA.version,
            col: {
                fill: Object.assign({}, col.fill),
                bg: Object.assign({}, col.bg)
            },
            activeLayers: Object.assign({}, layers),
            ops: Object.assign({}, areas)
        };
        exportCode = btoa(JSON.stringify(data));
        applyExportCode(exportCode);
    };
    const applyExportCode = (s) => {
        $mExportCodePreview.innerText = s;
    };

    document.addEventListener("DOMContentLoaded", () => {
        document.addEventListener("pointermove", (p) => {
            if (p.target === document) return;
            if (!p.target.classList.contains("map-shape")) {
                $name.innerText = null;
            } else {
                const data = getRegionNameData(p.target.id);
                const name = data.string;
                $name.innerText = name;
            };
        });
        document.addEventListener("keydown", (k) => {
            if (k.ctrlKey) return;

            if (k.keyCode === 67) {
                $btnCpFill.click();
            } else if (k.keyCode === 86) {
                $btnCpBg.click();
            } else if (k.keyCode === 90) {
                $btnMConf.click();
            } else if (k.keyCode === 88) {
                $btnMPreset.click();
            } else if (k.keyCode === 16) {
                $inpSearch.focus();
            } else if (k.keyCode === 77) {
                $btnToolbar.click();
            } else if (k.keyCode === 81) {
                $btnsMode[0].click();
            } else if (k.keyCode === 87) {
                $btnsMode[1].click();
            } else if (k.keyCode === 69) {
                $btnsMode[2].click();
            } else if (k.keyCode === 82) {
                $btnsMode[3].click();
            } else if (k.keyCode === 48) {
                $btnZoomReset.click();
            } else if (k.keyCode === 173) {
                $btnZoomOut.click();
            } else if (k.keyCode === 61) {
                $btnZoomIn.click();
            } else if (k.keyCode === 79) {
                $btnReset.click();
            } else if (k.keyCode === 80) {
                $btnWinExport.click();
            } else if (k.keyCode === 219) {
                $btnWinImport.click();
            } else if (k.keyCode === 221) {
                $btnDownload.click();
            };
        });
        $mArea.addEventListener("wheel", (w) => {
            w.deltaY < 0 ? addScale(SCALELEVEL) : addScale(SCALELEVEL*-1);
            initHash();
        });

        $btnCloseSizeWarn.onclick = () => $sizeWarn.style["display"] = "none";
        $btnToolbar.onclick = () => $toolbar.style["display"] = $toolbar.checkVisibility() ? "none" : "flex";
        $btnSearch.onclick = () => {
            $searchResultBox.style["display"] = "flex";
            clearChild($searchResult, [ "button-search-fill-result" ]);
            $searchResult.style["display"] = "none";
            if ($inpSearch.value.length) {
                const input = $inpSearch.value.trim();
                const index = getVisibleRegionIndex();
                const list = index.filter((x) => new RegExp(input, "gi").exec(x.name));
                $btnSearchFill.onpointerdown = () => {
                    list.forEach((x) => {
                        fill(x.id);
                    });
                };
                if (list.length) {
                    $searchResult.style["display"] = "block";
                    list.forEach((x) => {
                        const $item = document.createElement("div");
                        $item.classList.add("search-item");
                        const $icon = document.createElement("div");
                        $icon.classList.add("i");
                        $icon.classList.add("i-place");

                        $item.innerText = x.name;
                        $item.append($icon);
                        $item.onpointerdown = () => goto(x.id);

                        $searchResult.append($item);
                    });
                };
            };
            const f = (p) => {
                if (p.target.id.startsWith("search")) return;
                $searchResultBox.style["display"] = "none";
                document.removeEventListener("pointerdown", f);
            };
            document.addEventListener("pointerdown", f);
        };
        $inpSearch.onkeydown = (k) => {
            if (k.keyCode === 13) $btnSearch.click();
        };

        Object.values($btnsMode).forEach(($b, i) => {
            $b.onclick = () => {
                $mArea.onpointerdown = null;
                $mArea.onpointermove = null;
                $mArea.onpointerup = null;
                modeMethods[i]();
            };
        });

        applyColorFill();
        applyColorBg();
        $cpFillCursors.forEach(($n, i) => {
            $n.onpointerdown = (p) => {
                $n.setPointerCapture(p.pointerId);
                $n.onpointermove = (m) => {
                    const ox = $n.parentNode.getBoundingClientRect().x;
                    const mx = m.clientX;
                    const x = mx-ox < 0 ? 0 : (mx-ox > 255 ? 255 : mx-ox);
                    $n.style["left"] = `${x}px`;
                    setColorFill(Object.fromEntries([ [ COLORS[i], x ] ]));
                };
                $n.onpointerup = () => {
                    $n.releasePointerCapture(p.pointerId);
                    $n.onpointermove = null;
                    $n.onpointerup = null;
                };
            };
        });
        $cpBgCursors.forEach(($n, i) => {
            $n.onpointerdown = (p) => {
                $n.setPointerCapture(p.pointerId);
                $n.onpointermove = (m) => {
                    const ox = $n.parentNode.getBoundingClientRect().x;
                    const mx = m.clientX;
                    const x = mx-ox < 0 ? 0 : (mx-ox > 255 ? 255 : mx-ox);
                    $n.style["left"] = `${x}px`;
                    setColorBg(Object.fromEntries([ [ COLORS[i], x ] ]));
                };
                $n.onpointerup = () => {
                    $n.releasePointerCapture(p.pointerId);
                    $n.onpointermove = null;
                    $n.onpointerup = null;
                };
            };
        });
        $cpFillTemplates.forEach(($n, i) => {
            $n.style["background-color"] = `rgb(${Object.values(colTemplates.fill[i]).join(", ")})`;
            $n.onclick = () => {
                const raw = $n.style["background-color"].split(/\D+/i).filter((x) => x).map((x) => parseInt(x));
                const res = { r: raw[0], g: raw[1], b: raw[2] };
                setColorFill(res);
            };
        });
        $cpFillRecents.forEach(($n, i) => {
            $n.style["background-color"] = `rgb(${Object.values(colRecents.fill[i]).join(", ")})`;
            $n.onclick = () => {
                const raw = $n.style["background-color"].split(/\D+/i).filter((x) => x).map((x) => parseInt(x));
                const res = { r: raw[0], g: raw[1], b: raw[2] };
                setColorFill(res);
            };
        });
        $cpBgTemplates.forEach(($n, i) => {
            $n.style["background-color"] = `rgb(${Object.values(colTemplates.bg[i]).join(", ")})`;
            $n.onclick = () => {
                const raw = $n.style["background-color"].split(/\D+/i).filter((x) => x).map((x) => parseInt(x));
                const res = { r: raw[0], g: raw[1], b: raw[2] };
                setColorBg(res);
            };
        });
        // $cpBgRecents.forEach(($n, i) => {
        //     $n.style["background-color"] = `rgb(${Object.values(colRecents.bg[i]).join(", ")})`;
        //     $n.onclick = () => {
        //         const raw = $n.style["background-color"].split(/\D+/i).filter((x) => x).map((x) => parseInt(x));
        //         const res = { r: raw[0], g: raw[1], b: raw[2] };
        //         setColorBg(res);
        //     };
        // });
        $chkCpFill.onchange = (c) => {
            $cpFill.style["display"] = c.target.checked ? "flex" : "none";
        };
        $chkCpBg.onchange = (c) => {
            $cpBg.style["display"] = c.target.checked ? "flex" : "none";
        };

        Object.keys(layerOps).forEach((x) => {
            const xd = layerOps[x];
            xd.radioNode = document.createElement("input");
            xd.radioNode.type = "radio";
            xd.radioNode.name = "config-region";
            xd.radioNode.id = `config-region-${x}`;
            xd.radioNode.value = x;
            $mConfTab.append(xd.radioNode);

            xd.tabNode = document.createElement("label");
            xd.tabNode.dataset.target = x;
            xd.tabNode.setAttribute("for", `config-region-${x}`);
            xd.tabNode.innerText = REGIONS[x].name[0];
            $mConfTab.append(xd.tabNode);

            xd.pageNode = document.createElement("div");
            xd.pageNode.classList.add(x);
            $mConfOps.append(xd.pageNode);
            xd.pageNode.style["display"] = "none";
            Object.keys(xd.options).forEach((y) => {
                const yd = xd.options[y];
                const or = document.createElement("input");
                or.type = "radio";
                or.name = `config-region-${x}-sub`;
                or.id = `config-region-${x}-sub-${y}`;
                or.value = y;
                xd.pageNode.append(or);

                const o = document.createElement("label");
                o.dataset.value = y;
                o.setAttribute("for", `config-region-${x}-sub-${y}`);
                o.innerText = yd.name;
                xd.pageNode.append(o);

                o.onclick = () => {
                    setLayer(x, o.dataset.value);
                };
            });

            xd.tabNode.onclick = () => {
                Array.from($mConfOps.childNodes).forEach(($n) => {
                    $n.style["display"] = $n.classList.contains(x) ? "flex" : "none";
                });
            };
            xd.pageNode.querySelectorAll("label")[xd.active].click();
        });
        $mConfTab.querySelectorAll("label")[0].click();
        $chkMConf.onchange = (c) => {
            $mConf.style["display"] = c.target.checked ? "flex" : "none";
        };

        Array.from($mPreset.querySelectorAll("button")).forEach(($n, i) => {
            $n.onclick = () => {
                setLayerAll(PRESETS[i]);
            };
        });
        $chkMPreset.onchange = (c) => {
            $mPreset.style["display"] = c.target.checked ? "flex" : "none";
        };
        $chkCpFill.checked = false;
        $chkCpBg.checked = false;
        $chkMConf.checked = false;
        $chkMPreset.checked = false;

        $btnZoomReset.onclick = () => {
            setScale(1);
            setPos(0, 0);
            initHash();
        };
        $btnZoomIn.onclick = () => {
            addScale(SCALELEVEL);
            initHash();
        };
        $btnZoomOut.onclick = () => {
            addScale(SCALELEVEL*-1);
            initHash();
        };

        $btnReset.onclick = () => {
            $winReset.style["display"] = "flex";
        };
        $btnResetAccept.onclick = () => {
            doReset();
            $winReset.style["display"] = "none";
        };
        $btnResetDeny.onclick = () => {
            $winReset.style["display"] = "none";
        };

        $btnExport.onclick = () => {
            window.navigator.clipboard.writeText(exportCode);
            alert("데이터를 클립보드에 복사했습니다.");
        };
        $mImportCodeArea.value = "";
        $btnImport.onclick = () => {
            try {
                const data = JSON.parse(atob($mImportCodeArea.value.trim()));
                const ver = data.version;
                if (!ver || ver !== LYRA.version) {
                    alert("데이터가 작성된 버전이 현재 버전과 일치하지 않습니다.\n데이터 일부가 적용되지 않거나 오류가 발생할 수 있습니다.");
                };
                setColorFill(data.col.fill);
                setColorBg(data.col.bg);
                Object.keys(data.activeLayers).forEach((x) => {
                    setLayer(x, data.activeLayers[x]);
                });
                Object.keys(data.ops).forEach((x) => {
                    fillAlt(x, data.ops[x]);
                });
            } catch(err) {
                console.error(err);
                alert("데이터를 가져오는 과정에서 오류가 발생했습니다.\n데이터가 손상되었거나 규격이 올바르지 않습니다.\n\n자세한 내용은 콘솔을 확인해주세요.");
            };
        };
        $chkExport.onchange = (c) => {
            $mExport.style["display"] = c.target.checked ? "flex" : "none";
        };
        $chkImport.onchange = (c) => {
            $mImport.style["display"] = c.target.checked ? "flex" : "none";
        };
        $chkExport.checked = false;
        $chkImport.checked = false;

        $chkDownload.onchange = (c) => {
            $mDownload.style["display"] = c.target.checked ? "flex" : "none";
        };
        $chkDownload.checked = false;

        $btnAbout.onclick = () => {
            $winAbout.style["display"] = "flex";
        };
        $btnAboutAccept.onclick = () => {
            $winAbout.style["display"] = "none";
        };
        $hAboutTitle.innerText = `${LYRA.name} 정보`;
        $pAboutName.innerText = LYRA.name;
        $pAboutAuthor.innerText = `${LYRA.author} 제작 (${LYRA.contact})`;
        $pAboutVer.innerText = `버전 v${LYRA.version}@${LYRA.date}`;

        if (LYRA.watermark) {
            $wm = document.createElement("div");
            $wm.id = "watermark";
            $wm.innerText = `${LYRA.name}\nv${LYRA.version}@${LYRA.date}`;
            document.body.append($wm);
        };

        applyOp();
        readHash();
        $btnsMode[0].click();
    });
})();