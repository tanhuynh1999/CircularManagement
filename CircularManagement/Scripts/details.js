var Main = {
    data() {
        return {
            activeName: 'first',
            tableData: []
        };
    },
    computed: {

    },
    watch: {
        tableData: {
            handler: function () {
                var regexprice = /[\,\.]/g;
                //Push tiền theo mã
                for (var i = 0; i < this.tableData.length; i++) {
                    //Tài sản ngăn hạng
                    for (var j = 0; j < tsnh.length; j++) {
                        if (this.tableData[i].code == tsnh[j]) {
                            if (this.tableData[i].V1 == "-") {
                                pricetsng.push(0);
                            }
                            else {
                                pricetsng.push(Number(this.tableData[i].V1.replace(regexprice, "")));
                            }
                        }
                    }
                    //Tiền và khoản tiền tương đương
                    for (var j = 0; j < tvkttd.length; j++) {
                        if (this.tableData[i].code == tvkttd[j]) {
                            if (this.tableData[i].V1 == "-") {
                                pricetvkttd.push(0);
                            }
                            else {
                                pricetvkttd.push(Number(this.tableData[i].V1.replace(regexprice, "")));
                            }
                        }
                    }
                    //Đầu tư tài chính ngăn hạng
                    for (var j = 0; j < dttcnh.length; j++) {
                        if (this.tableData[i].code == dttcnh[j]) {
                            if (this.tableData[i].V1 == "-") {
                                pricesdttcnh.push(0);
                            }
                            else {
                                pricesdttcnh.push(Number(this.tableData[i].V1.replace(regexprice, "")));
                            }
                        }
                    }
                    //Cac khoan phai thu ngan hang
                    for (var j = 0; j < cktnh.length; j++) {
                        if (this.tableData[i].code == cktnh[j]) {
                            if (this.tableData[i].V1 == "-") {
                                pricecktnh.push(0);
                            }
                            else {
                                pricecktnh.push(Number(this.tableData[i].V1.replace(regexprice, "")));
                            }
                        }
                    }
                    //Hang ton kho
                    for (var j = 0; j < htk.length; j++) {
                        if (this.tableData[i].code == htk[j]) {
                            if (this.tableData[i].V1 == "-") {
                                pricehtk.push(0);
                            }
                            else {
                                pricehtk.push(Number(this.tableData[i].V1.replace(regexprice, "")));
                            }
                        }
                    }
                   //Tai san ngan hang khac
                   for (var j = 0; j < tsnhk.length; j++) {
                        if (this.tableData[i].code == tsnhk[j]) {
                            if (this.tableData[i].V1 == "-") {
                                pricetsnhk.push(0);
                            }
                            else {
                                pricetsnhk.push(Number(this.tableData[i].V1.replace(regexprice, "")));
                            }
                        }
                    }
                    //Tai san dai hang
                    for (var j = 0; j < tsdh.length; j++) {
                        if (this.tableData[i].code == tsdh[j]) {
                            if (this.tableData[i].V1 == "-") {
                                pricetsdh.push(0);
                            }
                            else {
                                pricetsdh.push(Number(this.tableData[i].V1.replace(regexprice, "")));
                            }
                        }
                    }
                    //Các khoản phải thu dài hạn
                    for (var j = 0; j < ckptdh.length; j++) {
                        if (this.tableData[i].code == ckptdh[j]) {
                            if (this.tableData[i].V1 == "-") {
                                priceckptdh.push(0);
                            }
                            else {
                                priceckptdh.push(Number(this.tableData[i].V1.replace(regexprice, "")));
                            }
                        }
                    }
                }
                //Bảng cân đối kế toán
                // reload view
                for (var i = 0; i < this.tableData.length; i++) {
                    //Công thức tài sản ngăn hạng (100 = ["110", "120", "130", "140", "150"])
                    if (this.tableData[i].code == "100") {
                        for (var j = 0; j < pricetsng.length; j++) {
                            stsnh += pricetsng[j];
                            this.tableData[i].V1 = stsnh;
                            var sum100 = stsnh;
                        }
                    }
                    //Công thức Tiền và khoản tiền tương đương (110 = ["111", "112"])
                    else if (this.tableData[i].code == "110") {
                        for (var j = 0; j < pricetvkttd.length; j++) {
                            stvkttd += pricetvkttd[j];
                            this.tableData[i].V1 = stvkttd;
                        }
                    }
                    //Công thức Đầu tư tài chính ngăn hạng (120 = ["121", "122", "123"])
                    else if (this.tableData[i].code == "120") {
                        for (var j = 0; j < pricesdttcnh.length; j++) {
                            sdttcnh += pricesdttcnh[j];
                            this.tableData[i].V1 = sdttcnh;
                        }
                    }
                    //Công thức Cac khoan phai thu ngan hang (130 = ["131","132","133","134","135","136","137","139",])
                    else if (this.tableData[i].code == "130") {
                        for (var j = 0; j < pricecktnh.length; j++) {
                            scktnh += pricecktnh[j];
                            this.tableData[i].V1 = scktnh;
                        }
                    }
                    //Công thức Hang ton kho (140 = ["141","149"])
                    else if (this.tableData[i].code == "140") {
                        for (var j = 0; j < pricehtk.length; j++) {
                            shtk += pricehtk[j];
                            this.tableData[i].V1 = shtk;
                        }
                    }
                    //Công thức Tai san ngan hang khac (150 = ["151","152","153","154","155"])
                    else if (this.tableData[i].code == "150") {
                        for (var j = 0; j < pricetsnhk.length; j++) {
                            stsnhk += pricetsnhk[j];
                            this.tableData[i].V1 = stsnhk;
                        }
                    }
                    //Công thức Tai san dai hang (200 = ["210","220","230","240","250","260"])
                    else if (this.tableData[i].code == "200") {
                        for (var j = 0; j < pricetsdh.length; j++) {
                            stsdh += pricetsdh[j];
                            this.tableData[i].V1 = stsdh;
                            var sum200 = stsdh;
                        }
                    }
                    //Công thức các khoản phải thu dài hạn (210 = ["211","212","213","214","215","216","217"])
                    else if (this.tableData[i].code == "210") {
                        for (var j = 0; j < priceckptdh.length; j++) {
                            sckptdh += priceckptdh[j];
                            this.tableData[i].V1 = sckptdh;
                        }
                    }
                    this.sumsum = Number(sum100 + sum200);
                }
            },
            deep: true
        }
    },
    methods: {
        handleClick(tab, event) {
            console.log(tab, event);
        },
        format2(n, currency) {
            return n.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,') +" "+ currency;
        }
    },
    mounted: function () {
        axios.get('/Read/IndexDetails?id=' + idfile)
            .then(response => {
                this.tableData = response.data;
            })
            .catch(error => {
                console.log(error);
            })

    }
};
var Ctor = Vue.extend(Main)
new Ctor().$mount('#app')