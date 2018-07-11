import * as t from './actionTypes';

const initialState = {
    list: {
        items: [],
        isLoaded: false,
        loading: false,
        targetLocation: null
    }
};

export default function (state = initialState, action) {
    switch (action.type) {

        case t.STORE_REQUEST:
            return {
                ...state,
                list: {
                    ...state.list,
                    loading: true
                }
            };

        case t.STORE_RECEIVE:
            return {
                ...state,
                list: {
                    loading: false,
                    isLoaded: true,
                    items: action.items,
                    targetLocation: action.targetLocation
                }
            };

        case t.STORE_RECEIVE_ERROR:
            return {
                ...state,
                list: {
                    ...state.list,
                    loading: false,
                    isLoaded: false,
                }
            };

        default:
            return state;
    }
}


const _INITIAL_STATE = {
    "client": {
        "config": {
            "_note": "login-redirect relative path is defined in pathfinder not bedrock",
            "loginUrl": "/login-redirect{?redirect}",
            "logoutUrl": "https://auth.uber.com/login/logout?next_url=https%3A%2F%2Fwww.ubereats.com",
            "signupUrl": "https://auth.uber.com/login/?uber_client_name=eatsWebSignUp&next_url=https%3A%2F%2Fwww.ubereats.com%2Flogin-redirect{?redirect}"
        }, "client": {"loaded": false, "loading": false}
    },
    "marketplace": {
        "marketplace": {"loaded": false, "loading": false},
        "mobileOnlyLocations": {"cityNames": [], "countryIds": [91]}
    },
    "marketplaceStoresFeed": {"feed": {"loaded": false, "loading": false}},
    "marketplaceStoresFull": {
        "fullStores": {
            "4989e598-e5d5-4965-bcb7-3fbc38cdb931": {
                "data": {
                    "meta": {"hashes": {"store": "4534325725230755124"}},
                    "store": {
                        "uuid": "4989e598-e5d5-4965-bcb7-3fbc38cdb931",
                        "location": {
                            "latitude": 52.366702,
                            "longitude": 4.893527,
                            "address": {
                                "address1": "Muntplein 9, 1017 CK Amsterdam, Netherlands",
                                "aptOrSuite": "",
                                "city": "Amsterdam",
                                "country": "NL",
                                "postalCode": "1017 CK",
                                "region": "NH",
                                "formattedAddress": "Muntplein 9, 1017 Ck Amsterdam, Netherlands, NH 1017 CK"
                            }
                        },
                        "categories": [{
                            "uuid": "7c39b0c5-c7f2-445f-b5a4-2d3358cf0774",
                            "name": "Hamburgers",
                            "keyName": "Burger"
                        }, {
                            "uuid": "6b3f8cf7-c49e-41a5-b497-fe89a97b100c",
                            "name": "Fastfood",
                            "keyName": "FastFood"
                        }, {"uuid": "f785d035-14fd-46c2-a4bd-a5308a4fb6ec", "name": "Diner", "keyName": "Diner"}],
                        "closedEtaMessage": "Opens on Wednesday",
                        "heroImageUrl": "https://duyt4h9nfnj50.cloudfront.net/resized/67cb005b933faa854900bcf92f3b5518-w550-30.jpg",
                        "isOrderable": true,
                        "itemsMap": {
                            "2fbfbd8c-369f-497d-a434-6d786eaf951e": {
                                "imageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/47fa14414caf1b539c05fb2ddc5b59c5",
                                "itemDescription": "Segafredo Coffee.",
                                "price": 225,
                                "title": "Coffee",
                                "uuid": "2fbfbd8c-369f-497d-a434-6d786eaf951e",
                                "customizations": [{
                                    "uuid": "8793c05f-1521-4b07-a34a-ae24b56dbc99",
                                    "title": "Choose Size Coffee",
                                    "tags": [{"uuid": "7d39c6c2-7f3e-4aa1-92e3-13b6aefd6e9a", "name": "Size"}],
                                    "options": [{
                                        "uuid": "64c62c7a-2201-4b3a-9c39-77336d8f70ea",
                                        "title": "Medium",
                                        "price": 0,
                                        "tags": [{"uuid": "f0cdc452-3731-45c2-8615-748725e085fc", "name": "Soda"}]
                                    }, {
                                        "uuid": "e2791cd4-e05a-4f21-bdb6-4ec6b4fc1bee",
                                        "title": "Large",
                                        "price": 35,
                                        "tags": [{"uuid": "f0cdc452-3731-45c2-8615-748725e085fc", "name": "Soda"}]
                                    }],
                                    "minPermitted": 1,
                                    "maxPermitted": 1
                                }],
                                "alcoholicItems": 0,
                                "rawImageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/47fa14414caf1b539c05fb2ddc5b59c5"
                            },
                            "11d6f962-ae1f-430b-9f57-3b66e5e9975f": {
                                "imageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/f601e950325fd37ce1c37453ddef3580",
                                "itemDescription": "",
                                "price": 60,
                                "title": "Ketchup",
                                "uuid": "11d6f962-ae1f-430b-9f57-3b66e5e9975f",
                                "customizations": [],
                                "alcoholicItems": 0,
                                "rawImageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/f601e950325fd37ce1c37453ddef3580"
                            },
                            "4f71d4cc-be1c-4635-b030-d5875849e28a": {
                                "imageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/a0aa4ec40fd8fda94f6e240c04477a48",
                                "itemDescription": "Forget everything you know about the taste of chicken. New on the menu is the Homestyle Crispy Chicken. Homestyle marinated chicken burger, juicy on the inside and crispy on the outside. With a luxurious sesame bun, naturally aged cheddar cheese, long crispy bacon strips (pork), Batavia lettuce, red onions and caramelized onion compote. The spicy Pimento sauce makes the finishing touch.",
                                "price": 495,
                                "title": "Homestyle Crispy Chicken",
                                "uuid": "4f71d4cc-be1c-4635-b030-d5875849e28a",
                                "customizations": [],
                                "rawImageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/a0aa4ec40fd8fda94f6e240c04477a48"
                            },
                            "308ddaa8-0549-4f90-ad26-8853996cb35a": {
                                "imageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/c757db111695d799544409062c8fe189",
                                "itemDescription": "Soft dairy icecream with Banana & Toffee",
                                "price": 335,
                                "title": "McFlurry Banaan-Toffee",
                                "uuid": "308ddaa8-0549-4f90-ad26-8853996cb35a",
                                "customizations": [{
                                    "uuid": "6cd9546f-05b1-469a-9091-54654b388c0c",
                                    "title": "Choose Sauce McFlurry Banoffee",
                                    "tags": [{
                                        "uuid": "02e1f616-507b-4f3f-8e22-02ac5afbd34d",
                                        "name": "Sauce/Dressing"
                                    }],
                                    "options": [{
                                        "uuid": "9b582cba-f7af-40bb-ada2-dc34ed5b66ac",
                                        "title": "Chocolate",
                                        "price": 0,
                                        "tags": [{"uuid": "447030e6-340b-460b-b1cb-915ad88d038e", "name": "Sauce"}]
                                    }, {
                                        "uuid": "5d942605-c31d-4293-91dc-3ded993de701",
                                        "title": "Strawberry",
                                        "price": 0,
                                        "tags": [{"uuid": "447030e6-340b-460b-b1cb-915ad88d038e", "name": "Sauce"}]
                                    }, {
                                        "uuid": "8c463386-5f85-4c89-b614-0ac9692e0ad1",
                                        "title": "Caramel",
                                        "price": 0,
                                        "tags": [{"uuid": "447030e6-340b-460b-b1cb-915ad88d038e", "name": "Sauce"}]
                                    }, {
                                        "uuid": "66dc999a-e27b-4cc3-911f-f796303c2d50",
                                        "title": "No Sauce",
                                        "price": 0,
                                        "tags": [{"uuid": "447030e6-340b-460b-b1cb-915ad88d038e", "name": "Sauce"}]
                                    }],
                                    "minPermitted": 1,
                                    "maxPermitted": 1
                                }]
                            },
                            "2e51c364-d392-4ddd-bcb2-fe333ae591b0": {
                                "imageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/9ebbebcccbda4a8d364d273aa18bdc32",
                                "itemDescription": "9 stukjes malse kip met een krokant laagje.",
                                "price": 490,
                                "title": "Chicken McNuggets 9",
                                "uuid": "2e51c364-d392-4ddd-bcb2-fe333ae591b0",
                                "customizations": [{
                                    "uuid": "904dcc5a-cb6f-4dfe-b027-c246c6e89dec",
                                    "title": "Keuze Saus McNuggets 9",
                                    "tags": [{
                                        "uuid": "02e1f616-507b-4f3f-8e22-02ac5afbd34d",
                                        "name": "Sauce/Dressing"
                                    }],
                                    "options": [{
                                        "uuid": "dd188aab-1dc0-499c-8baf-d88059d4eaea",
                                        "title": "Barbecuesaus",
                                        "price": 0,
                                        "tags": [{"uuid": "447030e6-340b-460b-b1cb-915ad88d038e", "name": "Sauce"}]
                                    }, {
                                        "uuid": "da8da637-cc11-40ed-a9c2-6217d5433eb8",
                                        "title": "Barbecuesaus",
                                        "price": 0,
                                        "tags": [{"uuid": "447030e6-340b-460b-b1cb-915ad88d038e", "name": "Sauce"}]
                                    }, {
                                        "uuid": "6d85c23a-d3d3-42e8-aa97-3c745a7be95e",
                                        "title": "Zoetzure Saus",
                                        "price": 0,
                                        "tags": [{"uuid": "447030e6-340b-460b-b1cb-915ad88d038e", "name": "Sauce"}]
                                    }, {
                                        "uuid": "60aea8bb-f816-4c00-9f26-e66d61ff6c5c",
                                        "title": "Zoetzure Saus",
                                        "price": 0,
                                        "tags": [{"uuid": "447030e6-340b-460b-b1cb-915ad88d038e", "name": "Sauce"}]
                                    }, {
                                        "uuid": "f6213c22-b7cd-42cc-99da-5f4e9fb1a8b5",
                                        "title": "Kerriesaus",
                                        "price": 0,
                                        "tags": [{"uuid": "447030e6-340b-460b-b1cb-915ad88d038e", "name": "Sauce"}]
                                    }, {
                                        "uuid": "bf853554-2a53-45d6-839f-6dfe0faba495",
                                        "title": "Kerriesaus",
                                        "price": 0,
                                        "tags": [{"uuid": "447030e6-340b-460b-b1cb-915ad88d038e", "name": "Sauce"}]
                                    }, {
                                        "uuid": "d50a5a52-1900-4520-81a5-e88f8b76072f",
                                        "title": "Mosterdsaus",
                                        "price": 0,
                                        "tags": [{"uuid": "447030e6-340b-460b-b1cb-915ad88d038e", "name": "Sauce"}]
                                    }, {
                                        "uuid": "dcff3ec8-1d25-4e07-a213-e68ba8bbf9da",
                                        "title": "Mosterdsaus",
                                        "price": 0,
                                        "tags": [{"uuid": "447030e6-340b-460b-b1cb-915ad88d038e", "name": "Sauce"}]
                                    }],
                                    "minPermitted": 2,
                                    "maxPermitted": 2
                                }],
                                "alcoholicItems": 0,
                                "rawImageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/9ebbebcccbda4a8d364d273aa18bdc32"
                            },
                            "8010c965-18e0-4a89-94ed-08038f850901": {
                                "imageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/e5017eaa7375bf49cdb19b3318a62a5a",
                                "itemDescription": "Twee 100% Angus Beef burgers met natuurlijk gerijpte cheddarkaas, Batavia sla, Chimichurri saus, Pico de Gallo (tomaten-uien salsa), Nacho chips en heerlijke guacamole op een speciaal sesam- en maanzaadbroodje.",
                                "price": 665,
                                "title": "Maestro Guacamole",
                                "uuid": "8010c965-18e0-4a89-94ed-08038f850901",
                                "customizations": []
                            },
                            "29f283ad-e652-498f-97c8-6f9d4a6df3c4": {
                                "imageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/3c73e1538fc433f9b4361c43b3591070",
                                "itemDescription": "Softijs met stukjes Karamel-Zeezout.",
                                "price": 335,
                                "title": "McFlurry Karamel-Zeezout",
                                "uuid": "29f283ad-e652-498f-97c8-6f9d4a6df3c4",
                                "customizations": [{
                                    "uuid": "af8e903e-88eb-40b5-844a-b67c0aecfc81",
                                    "title": "Keuze Saus McFlurry Karamel-Zeezout",
                                    "tags": [{
                                        "uuid": "02e1f616-507b-4f3f-8e22-02ac5afbd34d",
                                        "name": "Sauce/Dressing"
                                    }],
                                    "options": [{
                                        "uuid": "9da60ea7-d1c0-41d8-bf55-88817314aaac",
                                        "title": "Chocolade",
                                        "price": 0,
                                        "tags": [{"uuid": "8a07474e-e72d-4ffd-a78b-e8f7e1cd7f05", "name": "Smoothie"}]
                                    }, {
                                        "uuid": "61927533-b88b-44f9-9e64-86c15942bbf6",
                                        "title": "Aardbei",
                                        "price": 0,
                                        "tags": [{"uuid": "8a07474e-e72d-4ffd-a78b-e8f7e1cd7f05", "name": "Smoothie"}]
                                    }, {
                                        "uuid": "360a837c-fd62-49ab-adcb-015295bd403f",
                                        "title": "Caramel",
                                        "price": 0,
                                        "tags": [{"uuid": "8a07474e-e72d-4ffd-a78b-e8f7e1cd7f05", "name": "Smoothie"}]
                                    }, {
                                        "uuid": "6b01fce3-7bc0-4689-bca5-cfb3f88f2744",
                                        "title": "Zonder Saus",
                                        "price": 0,
                                        "tags": [{"uuid": "8a07474e-e72d-4ffd-a78b-e8f7e1cd7f05", "name": "Smoothie"}]
                                    }],
                                    "minPermitted": 1,
                                    "maxPermitted": 1
                                }],
                                "rawImageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/3c73e1538fc433f9b4361c43b3591070"
                            },
                            "07d8c054-cbb6-4a67-8ba9-937768140ed2": {
                                "imageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/039fefbfe85f17fb99a336d33019d415",
                                "itemDescription": "Enjoy a tastful breakfast with low-fat yoghurt, pecan nuts and crunchy muesli.",
                                "price": 375,
                                "title": "Plain Yoghurt",
                                "uuid": "07d8c054-cbb6-4a67-8ba9-937768140ed2",
                                "customizations": [],
                                "rawImageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/039fefbfe85f17fb99a336d33019d415"
                            },
                            "f8e34cac-fafc-4c6a-89ff-9cfc168d8bff": {
                                "imageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/e4a7555fef24d63c4c82419f5941e12e",
                                "itemDescription": "The one and only.",
                                "price": 445,
                                "title": "Big Mac",
                                "uuid": "f8e34cac-fafc-4c6a-89ff-9cfc168d8bff",
                                "customizations": [],
                                "alcoholicItems": 0,
                                "rawImageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/e4a7555fef24d63c4c82419f5941e12e"
                            },
                            "a4772808-90b5-470e-8203-ffc4c988c0a7": {
                                "imageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/98e273f95650be3813604a9bc79bd710",
                                "itemDescription": "Flesje water.",
                                "price": 235,
                                "title": "SPA",
                                "uuid": "a4772808-90b5-470e-8203-ffc4c988c0a7",
                                "customizations": [{
                                    "uuid": "a83cd53b-3651-452b-88b6-b43260d56a9d",
                                    "title": "Keuze Formaat SPA",
                                    "tags": [{"uuid": "7d39c6c2-7f3e-4aa1-92e3-13b6aefd6e9a", "name": "Size"}],
                                    "options": [{
                                        "uuid": "89b4f572-9676-4ab5-811f-72a7c2c6e80b",
                                        "title": "0,33L",
                                        "price": 0,
                                        "tags": [{"uuid": "f0cdc452-3731-45c2-8615-748725e085fc", "name": "Soda"}]
                                    }, {
                                        "uuid": "2295c4e6-8b65-4ad9-b583-dd042e80e871",
                                        "title": "0.50L",
                                        "price": 35,
                                        "tags": [{"uuid": "f0cdc452-3731-45c2-8615-748725e085fc", "name": "Soda"}]
                                    }],
                                    "minPermitted": 1,
                                    "maxPermitted": 1
                                }],
                                "alcoholicItems": 0,
                                "rawImageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/98e273f95650be3813604a9bc79bd710"
                            },
                            "d11c9e43-0bde-4d81-b91a-08f713f11f4e": {
                                "imageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/5418b44c3e74d5399821f7f67493288d",
                                "itemDescription": "Fresh Orange Juice.",
                                "price": 270,
                                "title": "Fresh Orange Juice",
                                "uuid": "d11c9e43-0bde-4d81-b91a-08f713f11f4e",
                                "customizations": [],
                                "alcoholicItems": 0,
                                "rawImageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/5418b44c3e74d5399821f7f67493288d"
                            },
                            "89f1885b-6ebc-48f9-986b-e1c8c5de574a": {
                                "imageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/5edf97d10224cc4a763edc00b6f8bef1",
                                "itemDescription": "Ontbijt eens lekker met halfvolle yoghurt met noten, krokante muesli en rode vruchtensaus.",
                                "price": 395,
                                "title": "Very Berry Yoghurt",
                                "uuid": "89f1885b-6ebc-48f9-986b-e1c8c5de574a",
                                "customizations": [],
                                "rawImageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/5edf97d10224cc4a763edc00b6f8bef1"
                            },
                            "5e3f3222-5e5d-42e4-8d0f-4b52400b82dd": {
                                "imageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/0872045152d42a6a842a6c43e211e63b",
                                "itemDescription": "Refreshing Fanta.",
                                "price": 285,
                                "title": "Fanta",
                                "uuid": "5e3f3222-5e5d-42e4-8d0f-4b52400b82dd",
                                "customizations": [{
                                    "uuid": "0c8bc06a-b626-42a9-89ec-69bf507c3b09",
                                    "title": "Choose Size Fanta",
                                    "tags": [{"uuid": "7d39c6c2-7f3e-4aa1-92e3-13b6aefd6e9a", "name": "Size"}],
                                    "options": [{
                                        "uuid": "46eb7121-7390-4ef9-8ca7-2c070ddd5411",
                                        "title": "Medium",
                                        "price": 0,
                                        "tags": [{"uuid": "f0cdc452-3731-45c2-8615-748725e085fc", "name": "Soda"}]
                                    }, {
                                        "uuid": "6ca9ea1a-8209-4a9c-abc0-1e870fcbb184",
                                        "title": "Large",
                                        "price": 30,
                                        "tags": [{"uuid": "f0cdc452-3731-45c2-8615-748725e085fc", "name": "Soda"}]
                                    }],
                                    "minPermitted": 1,
                                    "maxPermitted": 1
                                }],
                                "rawImageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/0872045152d42a6a842a6c43e211e63b"
                            },
                            "a977e2ad-caf2-4eb2-8e40-9a96336364e9": {
                                "imageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/977e08e6de1dc780caa4e64c0878b4f2",
                                "itemDescription": "Visfilet met Cheddar Smeltkaas en tartaarsaus op een gestoomd broodje.",
                                "price": 425,
                                "title": "Filet-O-Fish",
                                "uuid": "a977e2ad-caf2-4eb2-8e40-9a96336364e9",
                                "customizations": [],
                                "alcoholicItems": 0,
                                "rawImageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/977e08e6de1dc780caa4e64c0878b4f2"
                            },
                            "2fbf9769-bf37-4eaf-af39-efb208f09c49": {
                                "imageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/e4a7555fef24d63c4c82419f5941e12e",
                                "itemDescription": "De enige echte.",
                                "price": 445,
                                "title": "Big Mac",
                                "uuid": "2fbf9769-bf37-4eaf-af39-efb208f09c49",
                                "customizations": [],
                                "alcoholicItems": 0,
                                "rawImageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/e4a7555fef24d63c4c82419f5941e12e"
                            },
                            "1a9d777e-9198-4b0b-a333-5d7145b2d4e1": {
                                "imageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/84bb65a6ee68eb1fb3cb48b501b4b7b2",
                                "itemDescription": "",
                                "price": 60,
                                "title": "Zoetzure Saus",
                                "uuid": "1a9d777e-9198-4b0b-a333-5d7145b2d4e1",
                                "customizations": [],
                                "alcoholicItems": 0,
                                "rawImageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/84bb65a6ee68eb1fb3cb48b501b4b7b2"
                            },
                            "f80b6d31-74a4-45ec-ae9e-5556fd9b1c63": {
                                "imageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/b267bf9f51761061ec1697bbedaaa739",
                                "itemDescription": "",
                                "price": 480,
                                "title": "Happy Meal Cheeseburger",
                                "uuid": "f80b6d31-74a4-45ec-ae9e-5556fd9b1c63",
                                "customizations": [{
                                    "uuid": "7309e960-0164-48e4-b2c8-8593a0d7765c",
                                    "title": "Keuze Speeltje HM",
                                    "tags": [{"uuid": "a39f874d-b5cf-4fbc-ada0-8eedae87ca08", "name": "Add-ons"}],
                                    "options": [{
                                        "uuid": "58554f9c-0e8c-4850-9e11-4c5167828348",
                                        "title": "Transformers",
                                        "price": 0,
                                        "tags": [{"uuid": "241c3612-202b-422e-86a3-21bbbe094016", "name": "Side"}]
                                    }, {
                                        "uuid": "8a575157-818d-4c6f-bb68-56751dec79b7",
                                        "title": "My Little Pony",
                                        "price": 0,
                                        "tags": [{"uuid": "241c3612-202b-422e-86a3-21bbbe094016", "name": "Side"}]
                                    }],
                                    "minPermitted": 1,
                                    "maxPermitted": 1
                                }, {
                                    "uuid": "a0a86b93-171f-4546-b1ce-77706cf35492",
                                    "title": "Keuze Friet/Snoeptomaatjes HM",
                                    "tags": [{"uuid": "a39f874d-b5cf-4fbc-ada0-8eedae87ca08", "name": "Add-ons"}],
                                    "options": [{
                                        "uuid": "f031b357-ea02-450c-a211-8e671d9ea4e7",
                                        "title": "Friet",
                                        "price": 0,
                                        "tags": [{"uuid": "241c3612-202b-422e-86a3-21bbbe094016", "name": "Side"}]
                                    }, {
                                        "uuid": "30999e17-1cd1-4397-aeec-32282767637c",
                                        "title": "Snoeptomaatjes",
                                        "price": 0,
                                        "tags": [{"uuid": "241c3612-202b-422e-86a3-21bbbe094016", "name": "Side"}]
                                    }],
                                    "minPermitted": 1,
                                    "maxPermitted": 1
                                }, {
                                    "uuid": "0fdf4a09-f3ef-4311-8d95-2ce7c1eb9245",
                                    "title": "Keuze Drank HM",
                                    "tags": [{"uuid": "a39f874d-b5cf-4fbc-ada0-8eedae87ca08", "name": "Add-ons"}],
                                    "options": [{
                                        "uuid": "697c23f5-e470-4e89-9108-62cfba4c276c",
                                        "title": "Spa 0,33L",
                                        "price": 0,
                                        "tags": [{"uuid": "f0cdc452-3731-45c2-8615-748725e085fc", "name": "Soda"}]
                                    }, {
                                        "uuid": "1ed33bd1-22dd-49ce-8cdc-6a9975d6dcdf",
                                        "title": "Halfvolle Melk",
                                        "price": 0,
                                        "tags": [{"uuid": "f0cdc452-3731-45c2-8615-748725e085fc", "name": "Soda"}]
                                    }, {
                                        "uuid": "048dc819-c555-448f-aded-8f278c1b617c",
                                        "title": "Vers Sinaasappelsap",
                                        "price": 0,
                                        "tags": [{"uuid": "f0cdc452-3731-45c2-8615-748725e085fc", "name": "Soda"}]
                                    }, {
                                        "uuid": "6b5b65d6-36f9-4039-99ff-06208f87a42f",
                                        "title": "Verse Smoothie Aardbei Banaan",
                                        "price": 0,
                                        "tags": [{"uuid": "8a07474e-e72d-4ffd-a78b-e8f7e1cd7f05", "name": "Smoothie"}]
                                    }, {
                                        "uuid": "d4676619-ea1a-4cfe-a90b-9278f723c276",
                                        "title": "Tropicana Appelsap",
                                        "price": 0,
                                        "tags": [{"uuid": "f0cdc452-3731-45c2-8615-748725e085fc", "name": "Soda"}]
                                    }, {
                                        "uuid": "b24ff2ff-b6e3-49a2-b3b5-06087349b91a",
                                        "title": "Fristi",
                                        "price": 0,
                                        "tags": [{"uuid": "f0cdc452-3731-45c2-8615-748725e085fc", "name": "Soda"}]
                                    }, {
                                        "uuid": "ac41baae-6392-449d-84a1-492412442a21",
                                        "title": "Chocomel",
                                        "price": 0,
                                        "tags": [{"uuid": "f0cdc452-3731-45c2-8615-748725e085fc", "name": "Soda"}]
                                    }, {
                                        "uuid": "bd35fd4e-057a-41a3-a4d9-12388e1b6261",
                                        "title": "Coca-Cola klein",
                                        "price": 0,
                                        "tags": [{"uuid": "f0cdc452-3731-45c2-8615-748725e085fc", "name": "Soda"}]
                                    }, {
                                        "uuid": "21c9cbc7-ab88-43c9-b90e-0a9d1d04e3c1",
                                        "title": "Coca-Cola Light klein",
                                        "price": 0,
                                        "tags": [{"uuid": "f0cdc452-3731-45c2-8615-748725e085fc", "name": "Soda"}]
                                    }, {
                                        "uuid": "12e5daf7-b8bb-4a60-aa42-dd23ed551749",
                                        "title": "Coca-Cola Zero klein",
                                        "price": 0,
                                        "tags": [{"uuid": "f0cdc452-3731-45c2-8615-748725e085fc", "name": "Soda"}]
                                    }, {
                                        "uuid": "3aa44311-2be1-47b5-a987-9514998e336d",
                                        "title": "Fanta klein",
                                        "price": 0,
                                        "tags": [{"uuid": "f0cdc452-3731-45c2-8615-748725e085fc", "name": "Soda"}]
                                    }, {
                                        "uuid": "f0ca3d4e-85f9-40c7-81fa-d4e0d80d6565",
                                        "title": "Sprite klein",
                                        "price": 0,
                                        "tags": [{"uuid": "f0cdc452-3731-45c2-8615-748725e085fc", "name": "Soda"}]
                                    }, {
                                        "uuid": "a4a6e670-026e-44b5-b671-278c42402f8c",
                                        "title": "Lipton Ice Tea klein",
                                        "price": 0,
                                        "tags": [{"uuid": "f0cdc452-3731-45c2-8615-748725e085fc", "name": "Soda"}]
                                    }, {
                                        "uuid": "f24e830e-5881-4a04-a740-83d2376279cd",
                                        "title": "Milk Shake Aardbei klein",
                                        "price": 100,
                                        "tags": [{"uuid": "d0430b75-1545-45aa-9cd5-8678c4657b66", "name": "Milk"}]
                                    }, {
                                        "uuid": "2d16df86-d28d-4a7f-a01b-3f6da40b7fc3",
                                        "title": "Milk Shake Choco klein",
                                        "price": 100,
                                        "tags": [{"uuid": "d0430b75-1545-45aa-9cd5-8678c4657b66", "name": "Milk"}]
                                    }, {
                                        "uuid": "5b346d6d-5531-4428-83be-88e2416a7eaf",
                                        "title": "Milk Shake Vanille klein",
                                        "price": 100,
                                        "tags": [{"uuid": "d0430b75-1545-45aa-9cd5-8678c4657b66", "name": "Milk"}]
                                    }, {
                                        "uuid": "572b2773-db71-4425-bbc5-03ef2abfbac1",
                                        "title": "Milk Shake Banaan klein",
                                        "price": 100,
                                        "tags": [{"uuid": "d0430b75-1545-45aa-9cd5-8678c4657b66", "name": "Milk"}]
                                    }],
                                    "minPermitted": 1,
                                    "maxPermitted": 1
                                }, {
                                    "uuid": "787d27f5-eaf7-46c9-8ae2-78794c1a3e56",
                                    "title": "Keuze Dessert HM",
                                    "tags": [{"uuid": "a39f874d-b5cf-4fbc-ada0-8eedae87ca08", "name": "Add-ons"}],
                                    "options": [{
                                        "uuid": "42de65b0-a5be-49a4-8fdc-e5894d57524e",
                                        "title": "Snoeptomaatjes",
                                        "price": 0,
                                        "tags": [{"uuid": "241c3612-202b-422e-86a3-21bbbe094016", "name": "Side"}]
                                    }, {
                                        "uuid": "42fa9aae-2c16-4d57-a00f-c3e2edbd6b32",
                                        "title": "Vers Fruit",
                                        "price": 0,
                                        "tags": [{"uuid": "241c3612-202b-422e-86a3-21bbbe094016", "name": "Side"}]
                                    }, {
                                        "uuid": "d0624018-19dc-4b8d-b32d-83e33b96a7e4",
                                        "title": "Danoontje",
                                        "price": 0,
                                        "tags": [{"uuid": "241c3612-202b-422e-86a3-21bbbe094016", "name": "Side"}]
                                    }],
                                    "minPermitted": 1,
                                    "maxPermitted": 1
                                }],
                                "alcoholicItems": 0,
                                "rawImageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/b267bf9f51761061ec1697bbedaaa739"
                            },
                            "68884bd8-d349-4526-9768-6be8c807339d": {
                                "imageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/216be8f34e39382ae06bef1a1eabf04d",
                                "itemDescription": "",
                                "price": 60,
                                "title": "BBQ Saus",
                                "uuid": "68884bd8-d349-4526-9768-6be8c807339d",
                                "customizations": [],
                                "alcoholicItems": 0,
                                "rawImageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/216be8f34e39382ae06bef1a1eabf04d"
                            },
                            "60e7f413-cb1b-4c91-9350-ed5b2d54efc5": {
                                "imageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/ba9b953c71229e9da4b0659085f15562",
                                "itemDescription": "",
                                "price": 480,
                                "title": "Happy Meal McNuggets",
                                "uuid": "60e7f413-cb1b-4c91-9350-ed5b2d54efc5",
                                "customizations": [{
                                    "uuid": "85d4e3c3-cd78-4112-b12d-ca44132fefc7",
                                    "title": "Keuze Speeltje HM",
                                    "tags": [{"uuid": "a39f874d-b5cf-4fbc-ada0-8eedae87ca08", "name": "Add-ons"}],
                                    "options": [{
                                        "uuid": "082851cc-ecb0-4b0d-91d9-932b45ceb7e5",
                                        "title": "Transformers",
                                        "price": 0,
                                        "tags": [{"uuid": "241c3612-202b-422e-86a3-21bbbe094016", "name": "Side"}]
                                    }, {
                                        "uuid": "0d9211da-5981-4701-91f4-f52514e35b18",
                                        "title": "My Little Pony",
                                        "price": 0,
                                        "tags": [{"uuid": "241c3612-202b-422e-86a3-21bbbe094016", "name": "Side"}]
                                    }],
                                    "minPermitted": 1,
                                    "maxPermitted": 1
                                }, {
                                    "uuid": "faaf65fa-5120-430d-8115-14e5d116e68d",
                                    "title": "Keuze Friet/Snoeptomaatjes HM",
                                    "tags": [{"uuid": "a39f874d-b5cf-4fbc-ada0-8eedae87ca08", "name": "Add-ons"}],
                                    "options": [{
                                        "uuid": "06507228-0bee-42a9-992f-41682ff5f619",
                                        "title": "Friet",
                                        "price": 0,
                                        "tags": [{"uuid": "241c3612-202b-422e-86a3-21bbbe094016", "name": "Side"}]
                                    }, {
                                        "uuid": "b9628e51-9376-465a-9b11-8acc93fda606",
                                        "title": "Snoeptomaatjes",
                                        "price": 0,
                                        "tags": [{"uuid": "241c3612-202b-422e-86a3-21bbbe094016", "name": "Side"}]
                                    }],
                                    "minPermitted": 1,
                                    "maxPermitted": 1
                                }, {
                                    "uuid": "b0335f99-c374-4eec-aa55-f33a8bcadcb5",
                                    "title": "Keuze Drank HM",
                                    "tags": [{"uuid": "a39f874d-b5cf-4fbc-ada0-8eedae87ca08", "name": "Add-ons"}],
                                    "options": [{
                                        "uuid": "ef2bd7ef-e626-4c5a-9afb-7fada8bc5bdd",
                                        "title": "Spa 0,33L",
                                        "price": 0,
                                        "tags": [{"uuid": "f0cdc452-3731-45c2-8615-748725e085fc", "name": "Soda"}]
                                    }, {
                                        "uuid": "b8e4f8a7-58cc-40e7-870c-c0930650cce1",
                                        "title": "Halfvolle Melk",
                                        "price": 0,
                                        "tags": [{"uuid": "f0cdc452-3731-45c2-8615-748725e085fc", "name": "Soda"}]
                                    }, {
                                        "uuid": "7ba5a3ba-578a-4802-9a73-c1af1b6d8546",
                                        "title": "Vers Sinaasappelsap",
                                        "price": 0,
                                        "tags": [{"uuid": "f0cdc452-3731-45c2-8615-748725e085fc", "name": "Soda"}]
                                    }, {
                                        "uuid": "65074cb7-62b4-447e-aea6-424a10e45186",
                                        "title": "Verse Smoothie Aardbei Banaan",
                                        "price": 0,
                                        "tags": [{"uuid": "8a07474e-e72d-4ffd-a78b-e8f7e1cd7f05", "name": "Smoothie"}]
                                    }, {
                                        "uuid": "a3ed2f9a-82fa-48c6-a96c-223fb483405e",
                                        "title": "Tropicana Appelsap",
                                        "price": 0,
                                        "tags": [{"uuid": "f0cdc452-3731-45c2-8615-748725e085fc", "name": "Soda"}]
                                    }, {
                                        "uuid": "404cb606-1a87-4d19-87c9-f2aee43ec432",
                                        "title": "Fristi",
                                        "price": 0,
                                        "tags": [{"uuid": "f0cdc452-3731-45c2-8615-748725e085fc", "name": "Soda"}]
                                    }, {
                                        "uuid": "4ad475c1-a800-46c9-960a-a34038f17ad9",
                                        "title": "Chocomel",
                                        "price": 0,
                                        "tags": [{"uuid": "f0cdc452-3731-45c2-8615-748725e085fc", "name": "Soda"}]
                                    }, {
                                        "uuid": "0bcd7c2a-727a-462e-b7c2-9b25ecec3a0f",
                                        "title": "Coca-Cola klein",
                                        "price": 0,
                                        "tags": [{"uuid": "f0cdc452-3731-45c2-8615-748725e085fc", "name": "Soda"}]
                                    }, {
                                        "uuid": "380e40b0-9da6-4ae3-92c5-6d95d5eefc8a",
                                        "title": "Coca-Cola Light klein",
                                        "price": 0,
                                        "tags": [{"uuid": "f0cdc452-3731-45c2-8615-748725e085fc", "name": "Soda"}]
                                    }, {
                                        "uuid": "be790398-bcee-4ab3-ab6d-7b95611761c3",
                                        "title": "Coca-Cola Zero klein",
                                        "price": 0,
                                        "tags": [{"uuid": "f0cdc452-3731-45c2-8615-748725e085fc", "name": "Soda"}]
                                    }, {
                                        "uuid": "678fbe78-c0d1-4029-9021-06f52e2737a1",
                                        "title": "Fanta klein",
                                        "price": 0,
                                        "tags": [{"uuid": "f0cdc452-3731-45c2-8615-748725e085fc", "name": "Soda"}]
                                    }, {
                                        "uuid": "9fd65b8d-100a-4454-a90f-014f52493238",
                                        "title": "Sprite klein",
                                        "price": 0,
                                        "tags": [{"uuid": "f0cdc452-3731-45c2-8615-748725e085fc", "name": "Soda"}]
                                    }, {
                                        "uuid": "e77f3898-a5e3-43ac-a32e-0829d8d504ed",
                                        "title": "Lipton Ice Tea klein",
                                        "price": 0,
                                        "tags": [{"uuid": "f0cdc452-3731-45c2-8615-748725e085fc", "name": "Soda"}]
                                    }, {
                                        "uuid": "22d2a293-4ae0-4fc3-b16d-f2e727f55d30",
                                        "title": "Milk Shake Aardbei klein",
                                        "price": 100,
                                        "tags": [{"uuid": "d0430b75-1545-45aa-9cd5-8678c4657b66", "name": "Milk"}]
                                    }, {
                                        "uuid": "301f0187-6e5b-48b8-b3a7-90704dce381b",
                                        "title": "Milk Shake Choco klein",
                                        "price": 100,
                                        "tags": [{"uuid": "d0430b75-1545-45aa-9cd5-8678c4657b66", "name": "Milk"}]
                                    }, {
                                        "uuid": "54e3720d-95c7-48a8-bb70-eea920875723",
                                        "title": "Milk Shake Vanille klein",
                                        "price": 100,
                                        "tags": [{"uuid": "d0430b75-1545-45aa-9cd5-8678c4657b66", "name": "Milk"}]
                                    }, {
                                        "uuid": "4caf0ef0-5d4a-4f8d-9bb1-77a637eb01ac",
                                        "title": "Milk Shake Banaan klein",
                                        "price": 100,
                                        "tags": [{"uuid": "d0430b75-1545-45aa-9cd5-8678c4657b66", "name": "Milk"}]
                                    }],
                                    "minPermitted": 1,
                                    "maxPermitted": 1
                                }, {
                                    "uuid": "2cef2ba9-0d11-42ae-9e07-e45d452a2f43",
                                    "title": "Keuze Dessert HM",
                                    "tags": [{"uuid": "a39f874d-b5cf-4fbc-ada0-8eedae87ca08", "name": "Add-ons"}],
                                    "options": [{
                                        "uuid": "8a2cd376-41fa-4385-9a38-94bf7b3483d4",
                                        "title": "Snoeptomaatjes",
                                        "price": 0,
                                        "tags": [{"uuid": "241c3612-202b-422e-86a3-21bbbe094016", "name": "Side"}]
                                    }, {
                                        "uuid": "c2151bb6-427b-4cdd-93d4-68b1e6c8a720",
                                        "title": "Vers Fruit",
                                        "price": 0,
                                        "tags": [{"uuid": "241c3612-202b-422e-86a3-21bbbe094016", "name": "Side"}]
                                    }, {
                                        "uuid": "b6cf203f-55a0-43e9-863d-96a246843da2",
                                        "title": "Danoontje",
                                        "price": 0,
                                        "tags": [{"uuid": "241c3612-202b-422e-86a3-21bbbe094016", "name": "Side"}]
                                    }],
                                    "minPermitted": 1,
                                    "maxPermitted": 1
                                }],
                                "alcoholicItems": 0,
                                "rawImageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/ba9b953c71229e9da4b0659085f15562"
                            },
                            "2af7ad0f-1a63-4d0a-bdac-626e9297838e": {
                                "imageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/f25b86dc12ebcc496f5bd797ce231d8c",
                                "itemDescription": "Verfrissende Coca-Cola.",
                                "price": 285,
                                "title": "Coca-Cola",
                                "uuid": "2af7ad0f-1a63-4d0a-bdac-626e9297838e",
                                "customizations": [{
                                    "uuid": "a5df14e4-022d-4208-8068-23398ee13b3d",
                                    "title": "Keuze Formaat Coca Cola",
                                    "tags": [{"uuid": "7d39c6c2-7f3e-4aa1-92e3-13b6aefd6e9a", "name": "Size"}],
                                    "options": [{
                                        "uuid": "1d597f48-abae-4a3a-9370-34f3953951e6",
                                        "title": "Medium",
                                        "price": 0,
                                        "tags": [{"uuid": "f0cdc452-3731-45c2-8615-748725e085fc", "name": "Soda"}]
                                    }, {
                                        "uuid": "8065aef8-a050-4aea-9c21-e6cfb0cc170e",
                                        "title": "Groot",
                                        "price": 30,
                                        "tags": [{"uuid": "f0cdc452-3731-45c2-8615-748725e085fc", "name": "Soda"}]
                                    }],
                                    "minPermitted": 1,
                                    "maxPermitted": 1
                                }],
                                "alcoholicItems": 0,
                                "rawImageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/f25b86dc12ebcc496f5bd797ce231d8c"
                            },
                            "f1817639-b21b-405e-9abd-584a7dc7bc73": {
                                "imageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/d63efb29e8d1652734645ac409c9b1de",
                                "itemDescription": "Refreshing Coke Zero.",
                                "price": 285,
                                "title": "Coca-Cola Zero",
                                "uuid": "f1817639-b21b-405e-9abd-584a7dc7bc73",
                                "customizations": [{
                                    "uuid": "83213ede-f4d7-4736-93d5-01ebcea781d3",
                                    "title": "Choose Size Coca Cola Zero",
                                    "tags": [{"uuid": "7d39c6c2-7f3e-4aa1-92e3-13b6aefd6e9a", "name": "Size"}],
                                    "options": [{
                                        "uuid": "04780232-209c-4150-8b8e-8b6239f68d64",
                                        "title": "Medium",
                                        "price": 0,
                                        "tags": [{"uuid": "f0cdc452-3731-45c2-8615-748725e085fc", "name": "Soda"}]
                                    }, {
                                        "uuid": "6eff398c-b1a2-4939-b2e9-6f12e93f15e4",
                                        "title": "Large",
                                        "price": 30,
                                        "tags": [{"uuid": "f0cdc452-3731-45c2-8615-748725e085fc", "name": "Soda"}]
                                    }],
                                    "minPermitted": 1,
                                    "maxPermitted": 1
                                }],
                                "alcoholicItems": 0,
                                "rawImageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/d63efb29e8d1652734645ac409c9b1de"
                            },
                            "ae1d7ea1-79b2-4bc7-b938-8c35347af049": {
                                "imageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/84bb65a6ee68eb1fb3cb48b501b4b7b2",
                                "itemDescription": "",
                                "price": 60,
                                "title": "Sweet and Sour Sauce",
                                "uuid": "ae1d7ea1-79b2-4bc7-b938-8c35347af049",
                                "customizations": [],
                                "alcoholicItems": 0,
                                "rawImageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/84bb65a6ee68eb1fb3cb48b501b4b7b2"
                            },
                            "2d37e5f1-47dc-425d-bccf-5893791b04cf": {
                                "imageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/ac5e9be2342c024f9bf73e88634c1e4b",
                                "itemDescription": "Big, 100% beef burger with bacon and a characteristic sauce.",
                                "price": 615,
                                "title": "Big Tasty with Bacon",
                                "uuid": "2d37e5f1-47dc-425d-bccf-5893791b04cf",
                                "customizations": [],
                                "rawImageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/ac5e9be2342c024f9bf73e88634c1e4b"
                            },
                            "58c39c70-f4ef-45b4-8599-9b038e103410": {
                                "imageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/c41d262f2869941ceac6eb3958baa0e0",
                                "itemDescription": "Tender chicken on a sesame bun.",
                                "price": 445,
                                "title": "McChicken",
                                "uuid": "58c39c70-f4ef-45b4-8599-9b038e103410",
                                "customizations": [],
                                "alcoholicItems": 0,
                                "rawImageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/c41d262f2869941ceac6eb3958baa0e0"
                            },
                            "aa7fb9c4-d1e0-4b46-adf4-8f3705c9b908": {
                                "imageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/75dda8693b1b77a56affad3cbc9b8ff2",
                                "itemDescription": "Twee 100% Angus Beef burgers op een speciaal sesam- en maanzaadbroodje. Voor de echte burger liefhebber.",
                                "price": 1025,
                                "title": "Maestro Burger met 100% Angus Beef Medium Voordeelmenu",
                                "uuid": "aa7fb9c4-d1e0-4b46-adf4-8f3705c9b908",
                                "customizations": [{
                                    "uuid": "a58e0ab9-b339-40ab-86ab-06f5bf1ad381",
                                    "title": "Keuze Formaat Voordeelmenu",
                                    "tags": [{"uuid": "7d39c6c2-7f3e-4aa1-92e3-13b6aefd6e9a", "name": "Size"}],
                                    "options": [{
                                        "uuid": "85f859e1-446f-40ba-af86-945ac60d4dce",
                                        "title": "Medium",
                                        "price": 0,
                                        "tags": [{"uuid": "882cedee-2d7a-4019-b46b-227082baeb7c", "name": "Medium"}]
                                    }, {
                                        "uuid": "81d3ee9f-e06d-4289-b3ec-ab6e3eac6f11",
                                        "title": "Groot",
                                        "price": 75,
                                        "tags": [{"uuid": "21f0db62-8d48-433d-a6ea-2fdb1b8b4648", "name": "Large"}]
                                    }],
                                    "minPermitted": 1,
                                    "maxPermitted": 1
                                }, {
                                    "uuid": "e34692a5-fa07-4377-8a1f-b8b6d52d1285",
                                    "title": "Keuze Side Voordeelmenu",
                                    "tags": [{"uuid": "a39f874d-b5cf-4fbc-ada0-8eedae87ca08", "name": "Add-ons"}],
                                    "options": [{
                                        "uuid": "031d961a-099a-491f-975b-2690b5123e32",
                                        "title": "Franse Frietjes",
                                        "price": 0
                                    }, {
                                        "uuid": "1ae8b19e-c96a-4da9-a323-6820a8cf7ac4",
                                        "title": "Sweet Potatoes",
                                        "price": 0
                                    }, {
                                        "uuid": "be84d8b2-9caf-4b07-93dd-9e23729c4fb5",
                                        "title": "Side Salad",
                                        "price": 0
                                    }],
                                    "minPermitted": 1,
                                    "maxPermitted": 1
                                }, {
                                    "uuid": "2d4620b1-80e4-43a8-9f81-45f7ce3846a4",
                                    "title": "Keuze Drank Voordeelmenu",
                                    "tags": [{"uuid": "a39f874d-b5cf-4fbc-ada0-8eedae87ca08", "name": "Add-ons"}],
                                    "options": [{
                                        "uuid": "3e77b06c-bb02-4e1a-9f50-8a6a890330d1",
                                        "title": "Milk Shake Aardbei",
                                        "price": 100
                                    }, {
                                        "uuid": "b4febc30-1cc2-4ea4-8393-ea89c59b5cad",
                                        "title": "Milk Shake Chocolade",
                                        "price": 100
                                    }, {
                                        "uuid": "a469439b-aef2-4ba9-9d90-7a182aa0ae6a",
                                        "title": "Milk Shake Vanille",
                                        "price": 100
                                    }, {
                                        "uuid": "2e855706-1436-4483-a35b-5b2749cf3145",
                                        "title": "Milk Shake Banaan",
                                        "price": 100
                                    }, {
                                        "uuid": "b9f642b7-795e-4add-9330-f8c43aca7b00",
                                        "title": "Coca-Cola",
                                        "price": 0
                                    }, {
                                        "uuid": "cdf16df0-f77e-40b7-9594-a644649d1a39",
                                        "title": "Coca-Cola Light",
                                        "price": 0
                                    }, {
                                        "uuid": "e591fd3d-bfa2-4b07-bd3e-7944db767c61",
                                        "title": "Coca-Cola Zero",
                                        "price": 0
                                    }, {
                                        "uuid": "e4d097e8-ea47-4ac8-9a29-460855353161",
                                        "title": "Fanta",
                                        "price": 0
                                    }, {
                                        "uuid": "155fab46-0541-4a36-9e66-7014ca21947d",
                                        "title": "Sprite",
                                        "price": 0
                                    }, {
                                        "uuid": "c40299b4-fd77-4265-a04b-b017706b8d86",
                                        "title": "Lipton Ice Tea",
                                        "price": 0
                                    }, {
                                        "uuid": "32cdf3e9-22f7-4f15-b4ab-a885de54da61",
                                        "title": "SPA",
                                        "price": 0
                                    }, {
                                        "uuid": "0d8067f6-b570-4ecb-8cb8-077285bd12cb",
                                        "title": "SPA Rood",
                                        "price": 0
                                    }, {
                                        "uuid": "7ee6539f-2799-4386-814d-f0a104244c3c",
                                        "title": "Biologische Halfvolle Melk",
                                        "price": 0
                                    }, {
                                        "uuid": "c825c1ee-7b1a-4ae9-b6d7-0473ad014c0c",
                                        "title": "Vers Sinaasappelsap",
                                        "price": 0
                                    }, {
                                        "uuid": "7e80c0a3-c332-4807-bfb2-454698813e01",
                                        "title": "Verse Smoothie Aardbei-Banaan",
                                        "price": 0
                                    }, {
                                        "uuid": "2aa5d507-d469-4e53-bfb0-fd9a7f3dfa5f",
                                        "title": "Tropicana Appelsap",
                                        "price": 0
                                    }, {
                                        "uuid": "ee53e361-16f7-4793-bfd5-550af8a93d44",
                                        "title": "Fristi",
                                        "price": 100
                                    }, {
                                        "uuid": "848b56ca-34f0-4715-96a2-2599711f7859",
                                        "title": "Chocomel",
                                        "price": 100
                                    }],
                                    "minPermitted": 1,
                                    "maxPermitted": 1
                                }, {
                                    "uuid": "11117975-50fe-43ca-a2e0-9600e27230b7",
                                    "title": "Keuze Saus Voordeelmenu",
                                    "tags": [{"uuid": "a39f874d-b5cf-4fbc-ada0-8eedae87ca08", "name": "Add-ons"}],
                                    "options": [{
                                        "uuid": "b019c3a1-6135-4ff2-b87b-3b46770d02ac",
                                        "title": "Frietsaus",
                                        "price": 60
                                    }, {
                                        "uuid": "c438e174-c839-46cd-88b2-fc4779916c78",
                                        "title": "Frietsaus 2x",
                                        "price": 120
                                    }, {
                                        "uuid": "cd463180-c15b-4fc7-9bbb-ebb08bb81b57",
                                        "title": "Mayonaise",
                                        "price": 60
                                    }, {
                                        "uuid": "e9eac665-8a02-41a4-b83f-432dda03f02a",
                                        "title": "Mayonaise 2x",
                                        "price": 120
                                    }, {
                                        "uuid": "bc66df64-372e-4601-92ec-96ace95de440",
                                        "title": "Ketchup",
                                        "price": 60
                                    }, {
                                        "uuid": "da1b78e4-f707-4d5e-9b03-ba45056596fe",
                                        "title": "Ketchup 2x",
                                        "price": 120
                                    }],
                                    "minPermitted": 0,
                                    "maxPermitted": 2
                                }, {
                                    "uuid": "802a5d69-fa21-4872-98ee-7a0a591084d1",
                                    "title": "Keuze Voor Erbij Voordeelmenu",
                                    "tags": [{"uuid": "a39f874d-b5cf-4fbc-ada0-8eedae87ca08", "name": "Add-ons"}],
                                    "options": [{
                                        "uuid": "d7d383dd-05e1-407f-b045-b23b33ad6470",
                                        "title": "Chicken McNuggets 9 met 2x Barbecuesaus",
                                        "price": 490
                                    }, {
                                        "uuid": "7ecffdc0-0fd2-4066-a727-a2ffc73350ee",
                                        "title": "Chicken McNuggets 9 met 2x Zoetzure Saus",
                                        "price": 490
                                    }, {
                                        "uuid": "7c532fec-9a29-4470-8297-61d22663ca2d",
                                        "title": "Chicken McNuggets 9 met 2x Kerriesaus",
                                        "price": 490
                                    }, {
                                        "uuid": "9b24370c-1468-4c55-80de-b9a2bbe18494",
                                        "title": "Chicken McNuggets 9 met 2x Mosterdsaus",
                                        "price": 490
                                    }],
                                    "minPermitted": 0,
                                    "maxPermitted": 1
                                }],
                                "rawImageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/75dda8693b1b77a56affad3cbc9b8ff2"
                            },
                            "f4f1497c-effb-465a-a969-e4a0fa11ab60": {
                                "imageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/f601e950325fd37ce1c37453ddef3580",
                                "itemDescription": "",
                                "price": 60,
                                "title": "Ketchup",
                                "uuid": "f4f1497c-effb-465a-a969-e4a0fa11ab60",
                                "customizations": [],
                                "alcoholicItems": 0,
                                "rawImageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/f601e950325fd37ce1c37453ddef3580"
                            },
                            "92abe116-609b-49e5-9468-0c4c9a1d1cd8": {
                                "imageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/e5017eaa7375bf49cdb19b3318a62a5a",
                                "itemDescription": "Twee 100% Angus Beef burgers met natuurlijk gerijpte cheddarkaas, Batavia sla, Chimichurri saus, Pico de Gallo (tomaten-uien salsa), Nacho chips en heerlijke guacamole op een speciaal sesam- en maanzaadbroodje.",
                                "price": 665,
                                "title": "Maestro Guacamole",
                                "uuid": "92abe116-609b-49e5-9468-0c4c9a1d1cd8",
                                "customizations": []
                            },
                            "5d7a96f1-1e75-401c-942e-bcb99f263324": {
                                "imageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/ccf634176fb423bd1ca8de46a99d93da",
                                "itemDescription": "Een luxe ijskoffie op basis van crushed ice afgemaakt met room en caramelsaus.",
                                "price": 325,
                                "title": "Iced Frappé Caramel",
                                "uuid": "5d7a96f1-1e75-401c-942e-bcb99f263324",
                                "customizations": [],
                                "alcoholicItems": 0,
                                "rawImageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/ccf634176fb423bd1ca8de46a99d93da"
                            },
                            "7b51e7c9-3bfd-4795-a672-3b6abb02a371": {
                                "imageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/cbe75860470844d3348e0ef308c80ec0",
                                "itemDescription": "Verkoeling in een beker. Deze heerlijk verfrissende Lemonade met citroensmaak en ijsblokjes is de perfecte dorstlesser.",
                                "price": 325,
                                "title": "Lemonade",
                                "uuid": "7b51e7c9-3bfd-4795-a672-3b6abb02a371",
                                "customizations": []
                            },
                            "a4180565-eeda-42d3-9e9d-77904d81835b": {
                                "imageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/ba9b953c71229e9da4b0659085f15562",
                                "itemDescription": "",
                                "price": 480,
                                "title": "Happy Meal McNuggets",
                                "uuid": "a4180565-eeda-42d3-9e9d-77904d81835b",
                                "customizations": [{
                                    "uuid": "d9b90e5f-58a5-4f39-90a7-98e7d59777ab",
                                    "title": "Choose Toy HM",
                                    "tags": [{"uuid": "a39f874d-b5cf-4fbc-ada0-8eedae87ca08", "name": "Add-ons"}],
                                    "options": [{
                                        "uuid": "2a3048c7-adad-4112-a726-2b40e7c504dd",
                                        "title": "Transformers",
                                        "price": 0,
                                        "tags": [{"uuid": "241c3612-202b-422e-86a3-21bbbe094016", "name": "Side"}]
                                    }, {
                                        "uuid": "f765298d-94e6-4cf3-bcd7-cd4e8c94d58f",
                                        "title": "My Little Pony",
                                        "price": 0,
                                        "tags": [{"uuid": "241c3612-202b-422e-86a3-21bbbe094016", "name": "Side"}]
                                    }],
                                    "minPermitted": 1,
                                    "maxPermitted": 1
                                }, {
                                    "uuid": "8fc25019-ef3b-4e29-a8a6-49a69389a7ea",
                                    "title": "Choose Fries/Cherry Tomatoes HM",
                                    "tags": [{"uuid": "a39f874d-b5cf-4fbc-ada0-8eedae87ca08", "name": "Add-ons"}],
                                    "options": [{
                                        "uuid": "bb38e54c-64e2-418a-b793-62d948969ac6",
                                        "title": "Fries",
                                        "price": 0,
                                        "tags": [{"uuid": "241c3612-202b-422e-86a3-21bbbe094016", "name": "Side"}]
                                    }, {
                                        "uuid": "40c3e027-f5be-4bb8-9464-54c5e2ecf501",
                                        "title": "Cherry Tomatoes",
                                        "price": 0,
                                        "tags": [{"uuid": "241c3612-202b-422e-86a3-21bbbe094016", "name": "Side"}]
                                    }],
                                    "minPermitted": 1,
                                    "maxPermitted": 1
                                }, {
                                    "uuid": "6a17ce8e-aa53-4018-8f60-c2bd20b99c67",
                                    "title": "Choose Drink HM",
                                    "tags": [{"uuid": "a39f874d-b5cf-4fbc-ada0-8eedae87ca08", "name": "Add-ons"}],
                                    "options": [{
                                        "uuid": "063d0019-7f86-4e6b-9860-c4f90f5f480b",
                                        "title": "SPA 0,33L",
                                        "price": 0,
                                        "tags": [{"uuid": "f0cdc452-3731-45c2-8615-748725e085fc", "name": "Soda"}]
                                    }, {
                                        "uuid": "e1606990-478b-403a-bfc8-b81929709d4b",
                                        "title": "Semi-skimmed Milk",
                                        "price": 0,
                                        "tags": [{"uuid": "f0cdc452-3731-45c2-8615-748725e085fc", "name": "Soda"}]
                                    }, {
                                        "uuid": "b75dc26f-1850-48b2-b81b-686d3abea826",
                                        "title": "Fresh Orange juice",
                                        "price": 0,
                                        "tags": [{"uuid": "f0cdc452-3731-45c2-8615-748725e085fc", "name": "Soda"}]
                                    }, {
                                        "uuid": "d00ee9bc-5d4d-4ece-8ded-82fcbe5f3653",
                                        "title": "Fresh Smoothie Strawberry Banana",
                                        "price": 0,
                                        "tags": [{"uuid": "8a07474e-e72d-4ffd-a78b-e8f7e1cd7f05", "name": "Smoothie"}]
                                    }, {
                                        "uuid": "9a627d88-8c3b-4082-9719-92b86a670e89",
                                        "title": "Tropicana Apple Juice",
                                        "price": 0,
                                        "tags": [{"uuid": "f0cdc452-3731-45c2-8615-748725e085fc", "name": "Soda"}]
                                    }, {
                                        "uuid": "7965c609-e95d-4da5-a08b-6436b5405f76",
                                        "title": "Fristi",
                                        "price": 0,
                                        "tags": [{"uuid": "f0cdc452-3731-45c2-8615-748725e085fc", "name": "Soda"}]
                                    }, {
                                        "uuid": "56b371aa-176b-44f6-aa2a-52c40ade31e2",
                                        "title": "Chocomel",
                                        "price": 0,
                                        "tags": [{"uuid": "f0cdc452-3731-45c2-8615-748725e085fc", "name": "Soda"}]
                                    }, {
                                        "uuid": "700fca49-788f-4a44-9e66-127d0ec7c6d2",
                                        "title": "Coca-Cola small",
                                        "price": 0,
                                        "tags": [{"uuid": "f0cdc452-3731-45c2-8615-748725e085fc", "name": "Soda"}]
                                    }, {
                                        "uuid": "6720029c-af57-47d2-822b-db3af21ab892",
                                        "title": "Coca-Cola Light small",
                                        "price": 0,
                                        "tags": [{"uuid": "f0cdc452-3731-45c2-8615-748725e085fc", "name": "Soda"}]
                                    }, {
                                        "uuid": "bec33e90-bdca-40f4-af54-3a8ca2d9afe5",
                                        "title": "Coca-Cola Zero small",
                                        "price": 0,
                                        "tags": [{"uuid": "f0cdc452-3731-45c2-8615-748725e085fc", "name": "Soda"}]
                                    }, {
                                        "uuid": "a2fb6a22-7a5b-483c-851a-a8e1ffab1504",
                                        "title": "Fanta small",
                                        "price": 0,
                                        "tags": [{"uuid": "f0cdc452-3731-45c2-8615-748725e085fc", "name": "Soda"}]
                                    }, {
                                        "uuid": "4359ef39-2ec5-4424-9fbe-228403bece0c",
                                        "title": "Sprite small",
                                        "price": 0,
                                        "tags": [{"uuid": "f0cdc452-3731-45c2-8615-748725e085fc", "name": "Soda"}]
                                    }, {
                                        "uuid": "61ff5557-1dc0-4c4f-b54a-32889612341a",
                                        "title": "Lipton Ice Tea small",
                                        "price": 0,
                                        "tags": [{"uuid": "f0cdc452-3731-45c2-8615-748725e085fc", "name": "Soda"}]
                                    }, {
                                        "uuid": "a6e8e4d7-8884-472f-a718-a56573705c4c",
                                        "title": "Milk Shake Strawberry small",
                                        "price": 100,
                                        "tags": [{"uuid": "d0430b75-1545-45aa-9cd5-8678c4657b66", "name": "Milk"}]
                                    }, {
                                        "uuid": "85d7d61a-c56e-49f2-972c-28eba07f9406",
                                        "title": "Milk Shake Choco small",
                                        "price": 100,
                                        "tags": [{"uuid": "d0430b75-1545-45aa-9cd5-8678c4657b66", "name": "Milk"}]
                                    }, {
                                        "uuid": "d64674f1-74f1-4362-a1c3-033bd7f4f594",
                                        "title": "Milk Shake Vanilla small",
                                        "price": 100,
                                        "tags": [{"uuid": "d0430b75-1545-45aa-9cd5-8678c4657b66", "name": "Milk"}]
                                    }, {
                                        "uuid": "2f3d4b3d-1167-4441-93c0-e72e64e9edc1",
                                        "title": "Milk Shake Banana small",
                                        "price": 100,
                                        "tags": [{"uuid": "d0430b75-1545-45aa-9cd5-8678c4657b66", "name": "Milk"}]
                                    }],
                                    "minPermitted": 1,
                                    "maxPermitted": 1
                                }, {
                                    "uuid": "d16ba3bb-72f5-4cb5-94e8-7faba48cc6d4",
                                    "title": "Choose Dessert HM",
                                    "tags": [{"uuid": "a39f874d-b5cf-4fbc-ada0-8eedae87ca08", "name": "Add-ons"}],
                                    "options": [{
                                        "uuid": "70e293a0-dc75-4d88-9d45-2fd089cae7f0",
                                        "title": "Cherry Tomatoes",
                                        "price": 0,
                                        "tags": [{"uuid": "241c3612-202b-422e-86a3-21bbbe094016", "name": "Side"}]
                                    }, {
                                        "uuid": "ffdff7d0-0bf2-4812-a3a5-dde6792f96a2",
                                        "title": "Fresh Fruit",
                                        "price": 0,
                                        "tags": [{"uuid": "241c3612-202b-422e-86a3-21bbbe094016", "name": "Side"}]
                                    }, {
                                        "uuid": "24bbfd0f-3fcd-41c4-8c7d-f06c7a6471fa",
                                        "title": "Danoontje",
                                        "price": 0,
                                        "tags": [{"uuid": "241c3612-202b-422e-86a3-21bbbe094016", "name": "Side"}]
                                    }],
                                    "minPermitted": 1,
                                    "maxPermitted": 1
                                }],
                                "alcoholicItems": 0,
                                "rawImageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/ba9b953c71229e9da4b0659085f15562"
                            },
                            "d9256d88-2bfe-4a14-934a-edcdcfddfbc5": {
                                "imageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/056d464f4858f11fb427d4f7be37d447",
                                "itemDescription": "Bottle of sparkling water.",
                                "price": 270,
                                "title": "SPA Rood 0,5",
                                "uuid": "d9256d88-2bfe-4a14-934a-edcdcfddfbc5",
                                "customizations": [],
                                "rawImageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/056d464f4858f11fb427d4f7be37d447"
                            },
                            "dc08723b-e5fa-4ba5-bc7e-36299e2fc894": {
                                "imageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/7ea97801575972d680b748381c2d5722",
                                "itemDescription": "The one and only.",
                                "price": 815,
                                "title": "Big Mac Medium Value Meal",
                                "uuid": "dc08723b-e5fa-4ba5-bc7e-36299e2fc894",
                                "customizations": [{
                                    "uuid": "3ccd1699-bd85-42a9-9e8d-0d7971efb900",
                                    "title": "Choose Size Value Meal",
                                    "tags": [{"uuid": "7d39c6c2-7f3e-4aa1-92e3-13b6aefd6e9a", "name": "Size"}],
                                    "options": [{
                                        "uuid": "22e309d6-2597-45f3-815a-f9b32f728b2f",
                                        "title": "Medium",
                                        "price": 0,
                                        "tags": [{"uuid": "882cedee-2d7a-4019-b46b-227082baeb7c", "name": "Medium"}]
                                    }, {
                                        "uuid": "8839fd81-5584-4f38-ac83-0b086ba72dee",
                                        "title": "Large",
                                        "price": 75,
                                        "tags": [{"uuid": "21f0db62-8d48-433d-a6ea-2fdb1b8b4648", "name": "Large"}]
                                    }],
                                    "minPermitted": 1,
                                    "maxPermitted": 1
                                }, {
                                    "uuid": "afc0d7e4-a5ac-40c2-a475-dc4e2c7cad19",
                                    "title": "Choose Side Value Meal",
                                    "tags": [{"uuid": "a39f874d-b5cf-4fbc-ada0-8eedae87ca08", "name": "Add-ons"}],
                                    "options": [{
                                        "uuid": "15182094-b30a-4f90-99c1-07126c292b8d",
                                        "title": "French Fries",
                                        "price": 0
                                    }, {
                                        "uuid": "1f44cf4a-d0c0-4495-9775-07ede9ced5e6",
                                        "title": "Sweet Potatoes",
                                        "price": 0
                                    }, {
                                        "uuid": "d72a767c-6c5c-43cd-88a2-0cd51040108d",
                                        "title": "Side Salad",
                                        "price": 0
                                    }],
                                    "minPermitted": 1,
                                    "maxPermitted": 1
                                }, {
                                    "uuid": "616b14d7-57ec-458c-a472-122df9eb57ca",
                                    "title": "Choose Drink Value Meal",
                                    "tags": [{"uuid": "a39f874d-b5cf-4fbc-ada0-8eedae87ca08", "name": "Add-ons"}],
                                    "options": [{
                                        "uuid": "944d9708-6586-46c6-8ee5-465175653485",
                                        "title": "Milk Shake Strawberry",
                                        "price": 100
                                    }, {
                                        "uuid": "1d5a90c7-fded-4ce4-ab36-76277f08fe9c",
                                        "title": "Milk Shake Choco",
                                        "price": 100
                                    }, {
                                        "uuid": "2dd99687-0fae-43ed-8ae4-c129276c8ee2",
                                        "title": "Milk Shake Vanilla",
                                        "price": 100
                                    }, {
                                        "uuid": "b0113ee3-2c7b-42b9-9add-8e53c149f0bd",
                                        "title": "Milk Shake Banana",
                                        "price": 100
                                    }, {
                                        "uuid": "2198576a-8c34-4f50-b2cc-ec738543d59c",
                                        "title": "Coca-Cola",
                                        "price": 0
                                    }, {
                                        "uuid": "cccac3bc-7926-449e-a60f-182cce0ca912",
                                        "title": "Coca-Cola Light",
                                        "price": 0
                                    }, {
                                        "uuid": "f08956ee-ec15-4788-b95b-456788c235ec",
                                        "title": "Coca-Cola Zero",
                                        "price": 0
                                    }, {
                                        "uuid": "2143baaf-9d8d-48c2-8fe9-6d91054ae992",
                                        "title": "Fanta",
                                        "price": 0
                                    }, {
                                        "uuid": "8442d4b4-8e86-413c-8d3f-654221ec39d0",
                                        "title": "Sprite",
                                        "price": 0
                                    }, {
                                        "uuid": "342c0e28-52b1-4414-98b5-bae38b6eefde",
                                        "title": "Lipton Ice Tea",
                                        "price": 0
                                    }, {
                                        "uuid": "44104eb7-31bc-47f5-abb8-981287145423",
                                        "title": "SPA",
                                        "price": 0
                                    }, {
                                        "uuid": "ff7f7dfb-ef6e-444a-94bd-7564731493c2",
                                        "title": "SPA Rood",
                                        "price": 0
                                    }, {
                                        "uuid": "d256cbaa-49c7-4caf-87d8-dd861b084c6b",
                                        "title": "Semi-skimmed Milk",
                                        "price": 0
                                    }, {
                                        "uuid": "2ce61b15-fc35-4eb2-a35d-25162c1c68cf",
                                        "title": "Fresh Orange juice",
                                        "price": 0
                                    }, {
                                        "uuid": "4a3727bf-299b-46c6-8048-f7d4b3af31e2",
                                        "title": "Fresh Smoothie Strawberry Banana",
                                        "price": 0
                                    }, {
                                        "uuid": "15bf3645-aefb-4d57-b26b-d62c5822e634",
                                        "title": "Tropicana Apple Juice",
                                        "price": 0
                                    }, {
                                        "uuid": "f2101c5e-68c9-4c9f-bddb-e0bcbb1342e3",
                                        "title": "Fristi",
                                        "price": 100
                                    }, {
                                        "uuid": "5341408d-8dec-4895-8019-bdc70160a754",
                                        "title": "Chocomel",
                                        "price": 100
                                    }],
                                    "minPermitted": 1,
                                    "maxPermitted": 1
                                }, {
                                    "uuid": "e7c15b08-c4f0-4511-9648-7fb68554aff8",
                                    "title": "Choose Sauce Value Meal",
                                    "tags": [{"uuid": "a39f874d-b5cf-4fbc-ada0-8eedae87ca08", "name": "Add-ons"}],
                                    "options": [{
                                        "uuid": "bb7fbf8b-030e-4011-a99b-214e8a3d7afb",
                                        "title": "Fries Sauce",
                                        "price": 60
                                    }, {
                                        "uuid": "ab654b9f-474f-4dff-83d7-9a00d595c75d",
                                        "title": "Fries Sauce 2x",
                                        "price": 120
                                    }, {
                                        "uuid": "2dd4a00b-04e0-4764-b484-1fe28badc0c3",
                                        "title": "Mayonnaise",
                                        "price": 60
                                    }, {
                                        "uuid": "abb6e44f-446b-46d0-8430-1daefa493128",
                                        "title": "Mayonnaise 2x",
                                        "price": 120
                                    }, {
                                        "uuid": "1a931d5b-8930-45f1-a648-da5771193051",
                                        "title": "Ketchup",
                                        "price": 60
                                    }, {
                                        "uuid": "db84781d-970c-4347-a450-7c9ae7613c4a",
                                        "title": "Ketchup 2x",
                                        "price": 120
                                    }],
                                    "minPermitted": 0,
                                    "maxPermitted": 2
                                }, {
                                    "uuid": "1f2f1114-5085-46b2-9382-9585e94b84e5",
                                    "title": "Choose Side Order Value Meal",
                                    "tags": [{"uuid": "a39f874d-b5cf-4fbc-ada0-8eedae87ca08", "name": "Add-ons"}],
                                    "options": [{
                                        "uuid": "0eab7c0e-17b8-410d-ac5e-e33b886f6563",
                                        "title": "Chicken McNuggets 9 with 2x Barbecue Sauce",
                                        "price": 490
                                    }, {
                                        "uuid": "e10b2bbb-c026-4bef-bf09-a15ecceb1e61",
                                        "title": "Chicken McNuggets 9 with 2x Sweet and Sour Sauce",
                                        "price": 490
                                    }, {
                                        "uuid": "c57bff5b-53ea-49e3-a2fc-47fabd5a4f7b",
                                        "title": "Chicken McNuggets 9 with 2x Curry Sauce",
                                        "price": 490
                                    }, {
                                        "uuid": "880cab49-e763-4e9c-93db-d8cae98d7622",
                                        "title": "Chicken McNuggets 9 with 2x Mustard Sauce",
                                        "price": 490
                                    }],
                                    "minPermitted": 0,
                                    "maxPermitted": 1
                                }],
                                "rawImageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/7ea97801575972d680b748381c2d5722"
                            },
                            "3ff1061b-30e2-4ae0-addb-973d2d9251f9": {
                                "imageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/435e12ff17a0e05de37351604bcc8616",
                                "itemDescription": "They are perfect for dipping.",
                                "price": 850,
                                "title": "Chicken McNuggets 9 Medium Value Meal",
                                "uuid": "3ff1061b-30e2-4ae0-addb-973d2d9251f9",
                                "customizations": [{
                                    "uuid": "110cbb08-c04a-4cdc-a801-a7f5af5fe70b",
                                    "title": "Choose Size Value Meal",
                                    "tags": [{"uuid": "7d39c6c2-7f3e-4aa1-92e3-13b6aefd6e9a", "name": "Size"}],
                                    "options": [{
                                        "uuid": "960adeac-18b2-4991-9d6e-1045621584a5",
                                        "title": "Medium",
                                        "price": 0,
                                        "tags": [{"uuid": "882cedee-2d7a-4019-b46b-227082baeb7c", "name": "Medium"}]
                                    }, {
                                        "uuid": "aad2e07b-8e25-49c7-9f10-39c9855ae528",
                                        "title": "Large",
                                        "price": 75,
                                        "tags": [{"uuid": "21f0db62-8d48-433d-a6ea-2fdb1b8b4648", "name": "Large"}]
                                    }],
                                    "minPermitted": 1,
                                    "maxPermitted": 1
                                }, {
                                    "uuid": "9e5d156e-c575-4952-804d-8b0761a3b9fe",
                                    "title": "Choose Side Value Meal",
                                    "tags": [{"uuid": "a39f874d-b5cf-4fbc-ada0-8eedae87ca08", "name": "Add-ons"}],
                                    "options": [{
                                        "uuid": "734eb2ff-5b58-465b-9d74-bb0d7c289026",
                                        "title": "French Fries",
                                        "price": 0
                                    }, {
                                        "uuid": "f19bbf67-a1e9-48ba-8e0a-6b62c6457f07",
                                        "title": "Sweet Potatoes",
                                        "price": 0
                                    }, {
                                        "uuid": "3cc618c6-07b4-4b2b-810d-8b760b71168d",
                                        "title": "Side Salad",
                                        "price": 0
                                    }],
                                    "minPermitted": 1,
                                    "maxPermitted": 1
                                }, {
                                    "uuid": "fc13eeb0-1795-4133-9e3f-6aa156a14ad4",
                                    "title": "Choose Drink Value Meal",
                                    "tags": [{"uuid": "a39f874d-b5cf-4fbc-ada0-8eedae87ca08", "name": "Add-ons"}],
                                    "options": [{
                                        "uuid": "18504fc7-4b06-4abe-b4a4-b63b6a93d433",
                                        "title": "Milk Shake Strawberry",
                                        "price": 100
                                    }, {
                                        "uuid": "6883179e-ff6d-4f40-84c3-0028ba05415a",
                                        "title": "Milk Shake Choco",
                                        "price": 100
                                    }, {
                                        "uuid": "6fae101c-ceaa-40d4-b2ba-b0a846c08fe1",
                                        "title": "Milk Shake Vanilla",
                                        "price": 100
                                    }, {
                                        "uuid": "77d5cc22-9935-4f10-95f5-ce4c3bdac992",
                                        "title": "Milk Shake Banana",
                                        "price": 100
                                    }, {
                                        "uuid": "d9b43fc8-08a7-4a04-8a5e-9de482810659",
                                        "title": "Coca-Cola",
                                        "price": 0
                                    }, {
                                        "uuid": "57e9edb0-e5b3-40b9-a186-6e1502674563",
                                        "title": "Coca-Cola Light",
                                        "price": 0
                                    }, {
                                        "uuid": "697e0577-6d57-4fbe-97a7-975b451ad211",
                                        "title": "Coca-Cola Zero",
                                        "price": 0
                                    }, {
                                        "uuid": "0572e5b0-82e1-4985-bb11-e4a588ab3749",
                                        "title": "Fanta",
                                        "price": 0
                                    }, {
                                        "uuid": "50da1997-55f8-4f75-a5b3-d168a553839a",
                                        "title": "Sprite",
                                        "price": 0
                                    }, {
                                        "uuid": "0c50d6e8-2778-454d-9964-8a502a594a48",
                                        "title": "Lipton Ice Tea",
                                        "price": 0
                                    }, {
                                        "uuid": "d132abd2-d4de-49b0-9d55-724d251cbeca",
                                        "title": "SPA",
                                        "price": 0
                                    }, {
                                        "uuid": "9d58510b-fc54-4fed-9fac-ad2cfb333dc9",
                                        "title": "SPA Rood",
                                        "price": 0
                                    }, {
                                        "uuid": "158a52c5-d42b-47f0-8c8d-9dc8f2869011",
                                        "title": "Semi-skimmed Milk",
                                        "price": 0
                                    }, {
                                        "uuid": "5c22801a-88c3-4ae9-b1a8-c599faaf3314",
                                        "title": "Fresh Orange juice",
                                        "price": 0
                                    }, {
                                        "uuid": "a5752f6c-a35a-479e-82ab-47ab184bcd8c",
                                        "title": "Fresh Smoothie Strawberry Banana",
                                        "price": 0
                                    }, {
                                        "uuid": "cbf3715e-4ac1-4124-897c-be3270e354ce",
                                        "title": "Tropicana Apple Juice",
                                        "price": 0
                                    }, {
                                        "uuid": "14182cea-e1fd-40c8-b140-855ea7b4b931",
                                        "title": "Fristi",
                                        "price": 100
                                    }, {
                                        "uuid": "ed0bcc50-9a11-481f-af13-1332e145d93b",
                                        "title": "Chocomel",
                                        "price": 100
                                    }],
                                    "minPermitted": 1,
                                    "maxPermitted": 1
                                }, {
                                    "uuid": "c4a503b2-b444-43de-a73b-7a050d3d1e48",
                                    "title": "Choose Sauce Value Meal",
                                    "tags": [{"uuid": "a39f874d-b5cf-4fbc-ada0-8eedae87ca08", "name": "Add-ons"}],
                                    "options": [{
                                        "uuid": "2f49238b-eb44-4151-80fe-c716618d1d99",
                                        "title": "Fries Sauce",
                                        "price": 60
                                    }, {
                                        "uuid": "832bc65d-0caa-4730-9fcf-8a75c0308264",
                                        "title": "Fries Sauce 2x",
                                        "price": 120
                                    }, {
                                        "uuid": "af361b3b-1bdd-45ef-9495-61526e96cae1",
                                        "title": "Mayonnaise",
                                        "price": 60
                                    }, {
                                        "uuid": "158fb3d0-aa51-44c6-a773-53ada8baeeb3",
                                        "title": "Mayonnaise 2x",
                                        "price": 120
                                    }, {
                                        "uuid": "a0b55391-a7c3-4971-9ce7-a97a9276884b",
                                        "title": "Ketchup",
                                        "price": 60
                                    }, {
                                        "uuid": "4fd2c2ea-4e9e-48b1-9d25-b6ad23d58fed",
                                        "title": "Ketchup 2x",
                                        "price": 120
                                    }],
                                    "minPermitted": 0,
                                    "maxPermitted": 2
                                }, {
                                    "uuid": "64bf7600-8c7f-40fd-b269-2a3cffddd1c0",
                                    "title": "Choose Sauce McNuggets 9",
                                    "tags": [{
                                        "uuid": "02e1f616-507b-4f3f-8e22-02ac5afbd34d",
                                        "name": "Sauce/Dressing"
                                    }],
                                    "options": [{
                                        "uuid": "aca9f56f-2c6b-462b-b22c-de77a4d9deff",
                                        "title": "Barbeque Sauce",
                                        "price": 0,
                                        "tags": [{"uuid": "447030e6-340b-460b-b1cb-915ad88d038e", "name": "Sauce"}]
                                    }, {
                                        "uuid": "7a1f783b-9645-43c8-921c-3c6bc4f7fb2e",
                                        "title": "Barbeque Sauce",
                                        "price": 0,
                                        "tags": [{"uuid": "447030e6-340b-460b-b1cb-915ad88d038e", "name": "Sauce"}]
                                    }, {
                                        "uuid": "2dc05c86-3c09-428f-aa5f-e2dedd1502fb",
                                        "title": "Sweet and Sour Sauce",
                                        "price": 0,
                                        "tags": [{"uuid": "447030e6-340b-460b-b1cb-915ad88d038e", "name": "Sauce"}]
                                    }, {
                                        "uuid": "739353a3-af69-4f3c-9e19-ebce833ec4e3",
                                        "title": "Sweet and Sour Sauce",
                                        "price": 0,
                                        "tags": [{"uuid": "447030e6-340b-460b-b1cb-915ad88d038e", "name": "Sauce"}]
                                    }, {
                                        "uuid": "ee9c4529-b9fc-4625-8736-a728697d2a88",
                                        "title": "Curry Sauce",
                                        "price": 0,
                                        "tags": [{"uuid": "447030e6-340b-460b-b1cb-915ad88d038e", "name": "Sauce"}]
                                    }, {
                                        "uuid": "49fbe48d-6642-4b6d-ace2-a9b4ff231bb6",
                                        "title": "Curry Sauce",
                                        "price": 0,
                                        "tags": [{"uuid": "447030e6-340b-460b-b1cb-915ad88d038e", "name": "Sauce"}]
                                    }, {
                                        "uuid": "dc8f5c2d-c9fe-420a-b3a7-7e2e48508f1e",
                                        "title": "Mustard Sauce",
                                        "price": 0,
                                        "tags": [{"uuid": "447030e6-340b-460b-b1cb-915ad88d038e", "name": "Sauce"}]
                                    }, {
                                        "uuid": "077760dc-0528-4ca3-972e-527aac6ad4e7",
                                        "title": "Mustard Sauce",
                                        "price": 0,
                                        "tags": [{"uuid": "447030e6-340b-460b-b1cb-915ad88d038e", "name": "Sauce"}]
                                    }],
                                    "minPermitted": 2,
                                    "maxPermitted": 2
                                }],
                                "rawImageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/435e12ff17a0e05de37351604bcc8616"
                            },
                            "a8419efe-2a35-4f09-bc3f-cd1fe73d6017": {
                                "imageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/ba006652d076a78504af1eafda325005",
                                "itemDescription": "100% beef burger.",
                                "price": 815,
                                "title": "Quarter Pounder Medium Value Meal",
                                "uuid": "a8419efe-2a35-4f09-bc3f-cd1fe73d6017",
                                "customizations": [{
                                    "uuid": "e72a96b7-4139-425c-9a2e-fdc7a31cf712",
                                    "title": "Choose Size Value Meal",
                                    "tags": [{"uuid": "7d39c6c2-7f3e-4aa1-92e3-13b6aefd6e9a", "name": "Size"}],
                                    "options": [{
                                        "uuid": "09f704bb-77c4-4010-9c69-a02c07cce852",
                                        "title": "Medium",
                                        "price": 0,
                                        "tags": [{"uuid": "882cedee-2d7a-4019-b46b-227082baeb7c", "name": "Medium"}]
                                    }, {
                                        "uuid": "1c7ba59e-8f01-42ed-b21f-f34887a479ce",
                                        "title": "Large",
                                        "price": 75,
                                        "tags": [{"uuid": "21f0db62-8d48-433d-a6ea-2fdb1b8b4648", "name": "Large"}]
                                    }],
                                    "minPermitted": 1,
                                    "maxPermitted": 1
                                }, {
                                    "uuid": "fafdaf2d-bde5-4fd4-9407-4290afd5bdd0",
                                    "title": "Choose Side Value Meal",
                                    "tags": [{"uuid": "a39f874d-b5cf-4fbc-ada0-8eedae87ca08", "name": "Add-ons"}],
                                    "options": [{
                                        "uuid": "db3836c7-bfe8-4ca2-9612-ab8c27b9b145",
                                        "title": "French Fries",
                                        "price": 0
                                    }, {
                                        "uuid": "d5e76d48-988f-451d-b2cb-581124d4d629",
                                        "title": "Sweet Potatoes",
                                        "price": 0
                                    }, {
                                        "uuid": "b8b9aa9e-6a14-4774-992a-d3af3298810f",
                                        "title": "Side Salad",
                                        "price": 0
                                    }],
                                    "minPermitted": 1,
                                    "maxPermitted": 1
                                }, {
                                    "uuid": "731bef0d-e570-4209-8bb9-e3599a308148",
                                    "title": "Choose Drink Value Meal",
                                    "tags": [{"uuid": "a39f874d-b5cf-4fbc-ada0-8eedae87ca08", "name": "Add-ons"}],
                                    "options": [{
                                        "uuid": "720bbc93-2fec-440a-821e-570725b4171a",
                                        "title": "Milk Shake Strawberry",
                                        "price": 100
                                    }, {
                                        "uuid": "22287feb-bb9d-4959-bcc7-c01c912abf47",
                                        "title": "Milk Shake Choco",
                                        "price": 100
                                    }, {
                                        "uuid": "f62c7bf9-7b8d-490e-82bd-14ac7bd4c86c",
                                        "title": "Milk Shake Vanilla",
                                        "price": 100
                                    }, {
                                        "uuid": "97fda901-40b1-48d8-85e0-8562043857f7",
                                        "title": "Milk Shake Banana",
                                        "price": 100
                                    }, {
                                        "uuid": "a5fc0b39-03f2-42ad-8d20-a422fe9b1717",
                                        "title": "Coca-Cola",
                                        "price": 0
                                    }, {
                                        "uuid": "e2e1863b-5efb-4489-aa5d-4c36ef024a86",
                                        "title": "Coca-Cola Light",
                                        "price": 0
                                    }, {
                                        "uuid": "a3f922ac-4c26-4795-bf7d-a4034b00f0c0",
                                        "title": "Coca-Cola Zero",
                                        "price": 0
                                    }, {
                                        "uuid": "4d6587ce-ea1e-48ce-8556-5965be8b79d8",
                                        "title": "Fanta",
                                        "price": 0
                                    }, {
                                        "uuid": "d9259a1f-d9c6-44c1-90d6-93a47341e379",
                                        "title": "Sprite",
                                        "price": 0
                                    }, {
                                        "uuid": "0db0603a-f629-4997-837a-f2c7e12ac9bf",
                                        "title": "Lipton Ice Tea",
                                        "price": 0
                                    }, {
                                        "uuid": "4ba8f5e1-86da-4e9c-a124-6aede39f4215",
                                        "title": "SPA",
                                        "price": 0
                                    }, {
                                        "uuid": "e1e0509b-7901-440f-ab20-ee31a9895fb6",
                                        "title": "SPA Rood",
                                        "price": 0
                                    }, {
                                        "uuid": "167adea6-4c3f-45e8-a27e-656f962bf22e",
                                        "title": "Semi-skimmed Milk",
                                        "price": 0
                                    }, {
                                        "uuid": "c4917a5f-5aac-46f6-9083-72d304489628",
                                        "title": "Fresh Orange juice",
                                        "price": 0
                                    }, {
                                        "uuid": "a244ecf8-a503-4d54-b892-f7bfeb9c4870",
                                        "title": "Fresh Smoothie Strawberry Banana",
                                        "price": 0
                                    }, {
                                        "uuid": "51e3e20f-2979-40a5-be44-6538a964ecb6",
                                        "title": "Tropicana Apple Juice",
                                        "price": 0
                                    }, {
                                        "uuid": "95e4402a-219d-41a1-a1d6-eaa50f6ac8e2",
                                        "title": "Fristi",
                                        "price": 100
                                    }, {
                                        "uuid": "a92aad1b-ce59-4271-87e6-6503fcec1564",
                                        "title": "Chocomel",
                                        "price": 100
                                    }],
                                    "minPermitted": 1,
                                    "maxPermitted": 1
                                }, {
                                    "uuid": "f6b4a9d7-58f0-420e-bef2-25a107fc5822",
                                    "title": "Choose Sauce Value Meal",
                                    "tags": [{"uuid": "a39f874d-b5cf-4fbc-ada0-8eedae87ca08", "name": "Add-ons"}],
                                    "options": [{
                                        "uuid": "6cc4ca45-3b24-4688-b77a-391a981e0d0c",
                                        "title": "Fries Sauce",
                                        "price": 60
                                    }, {
                                        "uuid": "7e5c86fd-16eb-4126-a9a9-9857c9dfd6cf",
                                        "title": "Fries Sauce 2x",
                                        "price": 120
                                    }, {
                                        "uuid": "616eeeee-b157-4a2f-b00a-bedd0accc42b",
                                        "title": "Mayonnaise",
                                        "price": 60
                                    }, {
                                        "uuid": "700f0ec7-1110-4983-b7f7-65468c47c340",
                                        "title": "Mayonnaise 2x",
                                        "price": 120
                                    }, {
                                        "uuid": "c4996608-84bb-4431-b91c-e0bb85e0e40d",
                                        "title": "Ketchup",
                                        "price": 60
                                    }, {
                                        "uuid": "7bfad254-4d82-4eec-b070-12aaa13c3ec5",
                                        "title": "Ketchup 2x",
                                        "price": 120
                                    }],
                                    "minPermitted": 0,
                                    "maxPermitted": 2
                                }, {
                                    "uuid": "569bcd63-3f70-4561-b14a-f21275c598ca",
                                    "title": "Choose Side Order Value Meal",
                                    "tags": [{"uuid": "a39f874d-b5cf-4fbc-ada0-8eedae87ca08", "name": "Add-ons"}],
                                    "options": [{
                                        "uuid": "352171e6-23c6-423e-b184-e65540ef1ef6",
                                        "title": "Chicken McNuggets 9 with 2x Barbecue Sauce",
                                        "price": 490
                                    }, {
                                        "uuid": "8191dd9f-4722-4672-a7d4-5fa80124dd8b",
                                        "title": "Chicken McNuggets 9 with 2x Sweet and Sour Sauce",
                                        "price": 490
                                    }, {
                                        "uuid": "7077b07f-1e8d-4856-8874-02bb47b12ebf",
                                        "title": "Chicken McNuggets 9 with 2x Curry Sauce",
                                        "price": 490
                                    }, {
                                        "uuid": "868e6359-8374-4e82-8e29-accf49b6a700",
                                        "title": "Chicken McNuggets 9 with 2x Mustard Sauce",
                                        "price": 490
                                    }],
                                    "minPermitted": 0,
                                    "maxPermitted": 1
                                }],
                                "rawImageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/ba006652d076a78504af1eafda325005"
                            },
                            "1a9f70a1-1dd8-4c12-b005-ccd3d974f8d1": {
                                "imageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/9ebbebcccbda4a8d364d273aa18bdc32",
                                "itemDescription": "9 stukjes malse kip met een krokant laagje.",
                                "price": 490,
                                "title": "Chicken McNuggets 9",
                                "uuid": "1a9f70a1-1dd8-4c12-b005-ccd3d974f8d1",
                                "customizations": [{
                                    "uuid": "a9fb2c52-fd97-463e-9b4a-98bd5d07172b",
                                    "title": "Keuze Saus McNuggets 9",
                                    "tags": [{
                                        "uuid": "02e1f616-507b-4f3f-8e22-02ac5afbd34d",
                                        "name": "Sauce/Dressing"
                                    }],
                                    "options": [{
                                        "uuid": "f3daf2fd-8c22-4c64-85fd-8b3c7c6e1757",
                                        "title": "Barbecuesaus",
                                        "price": 0,
                                        "tags": [{"uuid": "447030e6-340b-460b-b1cb-915ad88d038e", "name": "Sauce"}]
                                    }, {
                                        "uuid": "5518693b-cf27-400c-9788-ed0579880f6a",
                                        "title": "Barbecuesaus",
                                        "price": 0,
                                        "tags": [{"uuid": "447030e6-340b-460b-b1cb-915ad88d038e", "name": "Sauce"}]
                                    }, {
                                        "uuid": "2dc12aba-b6aa-4410-98dc-bcb436466fd4",
                                        "title": "Zoetzure Saus",
                                        "price": 0,
                                        "tags": [{"uuid": "447030e6-340b-460b-b1cb-915ad88d038e", "name": "Sauce"}]
                                    }, {
                                        "uuid": "c6349b33-dd23-4696-9eb7-47a3b977a893",
                                        "title": "Zoetzure Saus",
                                        "price": 0,
                                        "tags": [{"uuid": "447030e6-340b-460b-b1cb-915ad88d038e", "name": "Sauce"}]
                                    }, {
                                        "uuid": "b8e6243f-a613-4ad9-b7f5-bbb1af800729",
                                        "title": "Kerriesaus",
                                        "price": 0,
                                        "tags": [{"uuid": "447030e6-340b-460b-b1cb-915ad88d038e", "name": "Sauce"}]
                                    }, {
                                        "uuid": "532ef12c-1480-4fdf-9870-bdad7143d51e",
                                        "title": "Kerriesaus",
                                        "price": 0,
                                        "tags": [{"uuid": "447030e6-340b-460b-b1cb-915ad88d038e", "name": "Sauce"}]
                                    }, {
                                        "uuid": "54637d03-b21d-4164-a8a3-f14ffabed50c",
                                        "title": "Mosterdsaus",
                                        "price": 0,
                                        "tags": [{"uuid": "447030e6-340b-460b-b1cb-915ad88d038e", "name": "Sauce"}]
                                    }, {
                                        "uuid": "111f161a-90cc-4d6b-84fd-fc167ea93a1b",
                                        "title": "Mosterdsaus",
                                        "price": 0,
                                        "tags": [{"uuid": "447030e6-340b-460b-b1cb-915ad88d038e", "name": "Sauce"}]
                                    }],
                                    "minPermitted": 2,
                                    "maxPermitted": 2
                                }],
                                "alcoholicItems": 0,
                                "rawImageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/9ebbebcccbda4a8d364d273aa18bdc32"
                            },
                            "8a8c0f9b-8ffc-401c-887a-046ea6376916": {
                                "imageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/283f783da83c74fbea47b7d4e0a6abc5",
                                "itemDescription": "Milk Shake met de smaak chocolade.",
                                "price": 325,
                                "title": "Milk Shake Chocolade",
                                "uuid": "8a8c0f9b-8ffc-401c-887a-046ea6376916",
                                "customizations": [{
                                    "uuid": "1d582d66-59fe-4f45-92d3-79c5775d43b9",
                                    "title": "Keuze Formaat Milk Shake Chocolade",
                                    "tags": [{"uuid": "7d39c6c2-7f3e-4aa1-92e3-13b6aefd6e9a", "name": "Size"}],
                                    "options": [{
                                        "uuid": "4590d428-9e65-4b19-842b-94f487509300",
                                        "title": "Medium",
                                        "price": 0,
                                        "tags": [{"uuid": "d0430b75-1545-45aa-9cd5-8678c4657b66", "name": "Milk"}]
                                    }, {
                                        "uuid": "89a52b11-f681-4a17-ab68-29524ee15425",
                                        "title": "Groot",
                                        "price": 20,
                                        "tags": [{"uuid": "d0430b75-1545-45aa-9cd5-8678c4657b66", "name": "Milk"}]
                                    }],
                                    "minPermitted": 1,
                                    "maxPermitted": 1
                                }],
                                "alcoholicItems": 0,
                                "rawImageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/283f783da83c74fbea47b7d4e0a6abc5"
                            },
                            "adc65ed0-68f2-4075-bb9c-d8ed2255bb7f": {
                                "imageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/6300b047b7f2abe20786bf5259937957",
                                "itemDescription": "Milk Shake with strawberry flavour.",
                                "price": 325,
                                "title": "Milk Shake Strawberry",
                                "uuid": "adc65ed0-68f2-4075-bb9c-d8ed2255bb7f",
                                "customizations": [{
                                    "uuid": "22784e36-f3d8-4e24-8b54-529318495c24",
                                    "title": "Choose Size Milkshake Strawberry",
                                    "tags": [{"uuid": "7d39c6c2-7f3e-4aa1-92e3-13b6aefd6e9a", "name": "Size"}],
                                    "options": [{
                                        "uuid": "c23765c7-81a5-4714-a7f9-763908917f20",
                                        "title": "Medium",
                                        "price": 0,
                                        "tags": [{"uuid": "d0430b75-1545-45aa-9cd5-8678c4657b66", "name": "Milk"}]
                                    }, {
                                        "uuid": "fb95c9fa-c31a-4452-b084-876acdcede31",
                                        "title": "Large",
                                        "price": 20,
                                        "tags": [{"uuid": "d0430b75-1545-45aa-9cd5-8678c4657b66", "name": "Milk"}]
                                    }],
                                    "minPermitted": 1,
                                    "maxPermitted": 1
                                }],
                                "alcoholicItems": 0,
                                "rawImageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/6300b047b7f2abe20786bf5259937957"
                            },
                            "b371df82-e439-4552-81c2-f66bb9baee83": {
                                "imageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/200403a0005aa203b81961111ce4d6a8",
                                "itemDescription": "Perfect voor een warme zomerdag: krokant gebakken garnalen met een zoete, milde chilisaus.",
                                "price": 250,
                                "title": "Crispy Shrimps",
                                "uuid": "b371df82-e439-4552-81c2-f66bb9baee83",
                                "customizations": []
                            },
                            "69f3a2cd-69dc-484b-abf8-4eb1ded14aa1": {
                                "imageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/fc39ce32c47bb94cc13d23c38fd48554",
                                "itemDescription": "",
                                "price": 60,
                                "title": "Mustard Sauce",
                                "uuid": "69f3a2cd-69dc-484b-abf8-4eb1ded14aa1",
                                "customizations": [],
                                "alcoholicItems": 0,
                                "rawImageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/fc39ce32c47bb94cc13d23c38fd48554"
                            },
                            "129a7bf6-6b1b-42eb-a656-d62e6ddc478d": {
                                "imageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/2c7c29cb20630ac620a5e746689699b2",
                                "itemDescription": "Malse kipfilet op een sesambroodje.",
                                "price": 815,
                                "title": "McChicken Medium Voordeelmenu",
                                "uuid": "129a7bf6-6b1b-42eb-a656-d62e6ddc478d",
                                "customizations": [{
                                    "uuid": "df4f829f-634a-4e79-8639-4ece13d0ab45",
                                    "title": "Keuze Formaat Voordeelmenu",
                                    "tags": [{"uuid": "7d39c6c2-7f3e-4aa1-92e3-13b6aefd6e9a", "name": "Size"}],
                                    "options": [{
                                        "uuid": "8ac95862-89d2-4c9b-bdc1-5a28e3fd0cbf",
                                        "title": "Medium",
                                        "price": 0,
                                        "tags": [{"uuid": "882cedee-2d7a-4019-b46b-227082baeb7c", "name": "Medium"}]
                                    }, {
                                        "uuid": "3f41cbaf-6e51-4e7c-be1a-f52eca8de1c0",
                                        "title": "Groot",
                                        "price": 75,
                                        "tags": [{"uuid": "21f0db62-8d48-433d-a6ea-2fdb1b8b4648", "name": "Large"}]
                                    }],
                                    "minPermitted": 1,
                                    "maxPermitted": 1
                                }, {
                                    "uuid": "86551724-b049-4345-942e-9778d97b9feb",
                                    "title": "Keuze Side Voordeelmenu",
                                    "tags": [{"uuid": "a39f874d-b5cf-4fbc-ada0-8eedae87ca08", "name": "Add-ons"}],
                                    "options": [{
                                        "uuid": "6aa61cb4-dde6-46cc-b5ba-d1a92b064a8c",
                                        "title": "Franse Frietjes",
                                        "price": 0
                                    }, {
                                        "uuid": "fe08e0f1-5db8-412b-a46f-43872e9b9f9a",
                                        "title": "Sweet Potatoes",
                                        "price": 0
                                    }, {
                                        "uuid": "8b0bf4d7-b895-4384-b379-d15e2ddd114c",
                                        "title": "Side Salad",
                                        "price": 0
                                    }],
                                    "minPermitted": 1,
                                    "maxPermitted": 1
                                }, {
                                    "uuid": "c40d0cbc-20ec-43eb-b234-f545040abcc6",
                                    "title": "Keuze Drank Voordeelmenu",
                                    "tags": [{"uuid": "a39f874d-b5cf-4fbc-ada0-8eedae87ca08", "name": "Add-ons"}],
                                    "options": [{
                                        "uuid": "b3304cdb-4daf-46b1-92cb-69e8493f8c6b",
                                        "title": "Milk Shake Aardbei",
                                        "price": 100
                                    }, {
                                        "uuid": "92826bb6-a14d-4eaa-8586-2e430dcd6ba5",
                                        "title": "Milk Shake Chocolade",
                                        "price": 100
                                    }, {
                                        "uuid": "0ec232b1-d249-4dc9-9088-1ac72a5ed6d5",
                                        "title": "Milk Shake Vanille",
                                        "price": 100
                                    }, {
                                        "uuid": "7ce502de-4888-495c-b3b2-1922110377b3",
                                        "title": "Milk Shake Banaan",
                                        "price": 100
                                    }, {
                                        "uuid": "9fcf05a2-fa79-4965-a0f5-530adcd7a8ff",
                                        "title": "Coca-Cola",
                                        "price": 0
                                    }, {
                                        "uuid": "e5f9bb1e-6528-4c10-9e4b-cf8eda0962dc",
                                        "title": "Coca-Cola Light",
                                        "price": 0
                                    }, {
                                        "uuid": "e1ef0551-eb9b-453c-a5b8-29047a9d21a6",
                                        "title": "Coca-Cola Zero",
                                        "price": 0
                                    }, {
                                        "uuid": "5eeaea4d-22b3-4b1f-895f-79ddf2d4cefc",
                                        "title": "Fanta",
                                        "price": 0
                                    }, {
                                        "uuid": "a099d411-95ce-4029-a5a5-117d5336074d",
                                        "title": "Sprite",
                                        "price": 0
                                    }, {
                                        "uuid": "856cf280-0085-47c8-b62e-fb6e42554458",
                                        "title": "Lipton Ice Tea",
                                        "price": 0
                                    }, {
                                        "uuid": "97d4d1d8-5687-422f-8239-03cbd0bcc3f4",
                                        "title": "SPA",
                                        "price": 0
                                    }, {
                                        "uuid": "9da01b05-b0c7-4eae-a47b-6e9664aa28ad",
                                        "title": "SPA Rood",
                                        "price": 0
                                    }, {
                                        "uuid": "24e56586-39e8-4b74-82b5-9bba45c8432f",
                                        "title": "Biologische Halfvolle Melk",
                                        "price": 0
                                    }, {
                                        "uuid": "3bf3102c-2ac3-4e6e-838b-f08ef5aacd65",
                                        "title": "Vers Sinaasappelsap",
                                        "price": 0
                                    }, {
                                        "uuid": "24b8b058-1180-4926-ba6d-18ccb03a5db3",
                                        "title": "Verse Smoothie Aardbei-Banaan",
                                        "price": 0
                                    }, {
                                        "uuid": "60e8f833-eefd-4909-bee2-c3757a8b8b66",
                                        "title": "Tropicana Appelsap",
                                        "price": 0
                                    }, {
                                        "uuid": "8478226b-5637-4f3c-a518-ed0dd3b25831",
                                        "title": "Fristi",
                                        "price": 100
                                    }, {
                                        "uuid": "a4d1a4e8-612f-47fc-ab70-656c00170eb5",
                                        "title": "Chocomel",
                                        "price": 100
                                    }],
                                    "minPermitted": 1,
                                    "maxPermitted": 1
                                }, {
                                    "uuid": "60439656-9ba8-4536-939f-73bdda92d049",
                                    "title": "Keuze Saus Voordeelmenu",
                                    "tags": [{"uuid": "a39f874d-b5cf-4fbc-ada0-8eedae87ca08", "name": "Add-ons"}],
                                    "options": [{
                                        "uuid": "15d18931-d8a9-4926-b793-62fc894bf391",
                                        "title": "Frietsaus",
                                        "price": 60
                                    }, {
                                        "uuid": "b5b38339-0d1d-4fc0-a79a-3080c35e5bee",
                                        "title": "Frietsaus 2x",
                                        "price": 120
                                    }, {
                                        "uuid": "c1abb94f-7293-4938-a8b0-1c4378340443",
                                        "title": "Mayonaise",
                                        "price": 60
                                    }, {
                                        "uuid": "e04b4ab8-52e1-421c-bce3-5215af063ed4",
                                        "title": "Mayonaise 2x",
                                        "price": 120
                                    }, {
                                        "uuid": "23cd9605-d898-450e-9436-f30270186833",
                                        "title": "Ketchup",
                                        "price": 60
                                    }, {
                                        "uuid": "8766b0c6-99fb-4f8f-9612-2f1f6504e71f",
                                        "title": "Ketchup 2x",
                                        "price": 120
                                    }],
                                    "minPermitted": 0,
                                    "maxPermitted": 2
                                }, {
                                    "uuid": "89fd7b2c-044c-4cbd-9ac6-cab6cffc6a9b",
                                    "title": "Keuze Voor Erbij Voordeelmenu",
                                    "tags": [{"uuid": "a39f874d-b5cf-4fbc-ada0-8eedae87ca08", "name": "Add-ons"}],
                                    "options": [{
                                        "uuid": "edef536c-9a68-4b68-a9ba-021b780935f9",
                                        "title": "Chicken McNuggets 9 met 2x Barbecuesaus",
                                        "price": 490
                                    }, {
                                        "uuid": "555d0532-76f2-4773-833e-239f047b77bc",
                                        "title": "Chicken McNuggets 9 met 2x Zoetzure Saus",
                                        "price": 490
                                    }, {
                                        "uuid": "940a13f1-8c23-494e-b1d5-519a6d817ccd",
                                        "title": "Chicken McNuggets 9 met 2x Kerriesaus",
                                        "price": 490
                                    }, {
                                        "uuid": "1e07553e-b769-4e3e-ab12-6f4e4f8ab13f",
                                        "title": "Chicken McNuggets 9 met 2x Mosterdsaus",
                                        "price": 490
                                    }],
                                    "minPermitted": 0,
                                    "maxPermitted": 1
                                }],
                                "rawImageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/2c7c29cb20630ac620a5e746689699b2"
                            },
                            "8a292ddd-f4d4-4813-88be-74c9e0f1a6d2": {
                                "imageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/ba006652d076a78504af1eafda325005",
                                "itemDescription": "100% rundvlees burger.",
                                "price": 815,
                                "title": "Quarter Pounder Medium Voordeelmenu",
                                "uuid": "8a292ddd-f4d4-4813-88be-74c9e0f1a6d2",
                                "customizations": [{
                                    "uuid": "8163b559-7c54-4b9c-b929-f21312efb56b",
                                    "title": "Keuze Formaat Voordeelmenu",
                                    "tags": [{"uuid": "7d39c6c2-7f3e-4aa1-92e3-13b6aefd6e9a", "name": "Size"}],
                                    "options": [{
                                        "uuid": "d59582aa-5180-4fef-ada9-eb06a3b37de9",
                                        "title": "Medium",
                                        "price": 0,
                                        "tags": [{"uuid": "882cedee-2d7a-4019-b46b-227082baeb7c", "name": "Medium"}]
                                    }, {
                                        "uuid": "d615f8ea-eebf-495b-ae6e-d1f06c8d72bb",
                                        "title": "Groot",
                                        "price": 75,
                                        "tags": [{"uuid": "21f0db62-8d48-433d-a6ea-2fdb1b8b4648", "name": "Large"}]
                                    }],
                                    "minPermitted": 1,
                                    "maxPermitted": 1
                                }, {
                                    "uuid": "b536fc8d-b161-479d-a058-e40029680736",
                                    "title": "Keuze Side Voordeelmenu",
                                    "tags": [{"uuid": "a39f874d-b5cf-4fbc-ada0-8eedae87ca08", "name": "Add-ons"}],
                                    "options": [{
                                        "uuid": "f7a3e31d-c758-40f2-949e-50ae7cae2289",
                                        "title": "Franse Frietjes",
                                        "price": 0
                                    }, {
                                        "uuid": "d3d9c2bc-ccec-4cea-95b4-46af3d5b03b8",
                                        "title": "Sweet Potatoes",
                                        "price": 0
                                    }, {
                                        "uuid": "b795868a-08b2-4c88-837e-88a4e5f2e3ee",
                                        "title": "Side Salad",
                                        "price": 0
                                    }],
                                    "minPermitted": 1,
                                    "maxPermitted": 1
                                }, {
                                    "uuid": "5e070a1c-cf84-4bc8-93b3-36ce9d1570cf",
                                    "title": "Keuze Drank Voordeelmenu",
                                    "tags": [{"uuid": "a39f874d-b5cf-4fbc-ada0-8eedae87ca08", "name": "Add-ons"}],
                                    "options": [{
                                        "uuid": "8e333e21-ac19-435e-be58-e6b091ed52f2",
                                        "title": "Milk Shake Aardbei",
                                        "price": 100
                                    }, {
                                        "uuid": "5726fb2e-c7e2-4df6-bb41-37ede5a18bad",
                                        "title": "Milk Shake Chocolade",
                                        "price": 100
                                    }, {
                                        "uuid": "90eb6b56-4aa5-44b7-992d-ffa6a0fd62a5",
                                        "title": "Milk Shake Vanille",
                                        "price": 100
                                    }, {
                                        "uuid": "f743fd58-b6f2-4112-9f82-6733bfce1314",
                                        "title": "Milk Shake Banaan",
                                        "price": 100
                                    }, {
                                        "uuid": "894be6db-7c4c-4880-9ad9-39423ebf6131",
                                        "title": "Coca-Cola",
                                        "price": 0
                                    }, {
                                        "uuid": "0b54360b-cb01-46a5-927a-9265ad581e31",
                                        "title": "Coca-Cola Light",
                                        "price": 0
                                    }, {
                                        "uuid": "6db73f56-51b5-4554-9a21-5632eb23c33c",
                                        "title": "Coca-Cola Zero",
                                        "price": 0
                                    }, {
                                        "uuid": "37e8546b-3013-45ab-8c88-0af9bf0c9cd7",
                                        "title": "Fanta",
                                        "price": 0
                                    }, {
                                        "uuid": "ff67dcc4-f66f-4c8f-911d-d4feb7742d8e",
                                        "title": "Sprite",
                                        "price": 0
                                    }, {
                                        "uuid": "b3d7a99b-d194-4c5c-8a8d-7b79986278eb",
                                        "title": "Lipton Ice Tea",
                                        "price": 0
                                    }, {
                                        "uuid": "884aaeac-ab62-46bd-b4f1-16d18655646c",
                                        "title": "SPA",
                                        "price": 0
                                    }, {
                                        "uuid": "1e7efc99-6a13-481c-be13-93562cf16832",
                                        "title": "SPA Rood",
                                        "price": 0
                                    }, {
                                        "uuid": "6af8eaf5-c453-4aee-adf6-25f68fe1a0ec",
                                        "title": "Biologische Halfvolle Melk",
                                        "price": 0
                                    }, {
                                        "uuid": "d53ed03a-893b-4b9e-bda4-abff0340c303",
                                        "title": "Vers Sinaasappelsap",
                                        "price": 0
                                    }, {
                                        "uuid": "84aa1550-d20c-4121-9482-f8be7e63c274",
                                        "title": "Verse Smoothie Aardbei-Banaan",
                                        "price": 0
                                    }, {
                                        "uuid": "a267b7a7-4142-4534-8903-cbd9f996c5ac",
                                        "title": "Tropicana Appelsap",
                                        "price": 0
                                    }, {
                                        "uuid": "a5a8fdb8-9564-4483-8abb-310d6239e8c8",
                                        "title": "Fristi",
                                        "price": 100
                                    }, {
                                        "uuid": "b0e5cb01-dce3-41cc-b4a6-9641c97ef432",
                                        "title": "Chocomel",
                                        "price": 100
                                    }],
                                    "minPermitted": 1,
                                    "maxPermitted": 1
                                }, {
                                    "uuid": "ab21da36-3c47-43ff-9e51-32f51af4e40c",
                                    "title": "Keuze Saus Voordeelmenu",
                                    "tags": [{"uuid": "a39f874d-b5cf-4fbc-ada0-8eedae87ca08", "name": "Add-ons"}],
                                    "options": [{
                                        "uuid": "1d389899-d632-4ce9-be3b-5f8023a49d5c",
                                        "title": "Frietsaus",
                                        "price": 60
                                    }, {
                                        "uuid": "2579c298-3f15-4ed8-bba6-94395394e7ff",
                                        "title": "Frietsaus 2x",
                                        "price": 120
                                    }, {
                                        "uuid": "3e1ce8a0-c442-4ee4-b021-5175bcb77165",
                                        "title": "Mayonaise",
                                        "price": 60
                                    }, {
                                        "uuid": "6104cab2-53a5-4c66-9871-f1bfa31bceed",
                                        "title": "Mayonaise 2x",
                                        "price": 120
                                    }, {
                                        "uuid": "ff93b0b7-c20b-4f66-841a-ff3aac8f4f34",
                                        "title": "Ketchup",
                                        "price": 60
                                    }, {
                                        "uuid": "70b88758-d4c1-4ab1-acf6-bbf92663845a",
                                        "title": "Ketchup 2x",
                                        "price": 120
                                    }],
                                    "minPermitted": 0,
                                    "maxPermitted": 2
                                }, {
                                    "uuid": "0650d3cb-b74d-48fc-8156-1fadfb28c32e",
                                    "title": "Keuze Voor Erbij Voordeelmenu",
                                    "tags": [{"uuid": "a39f874d-b5cf-4fbc-ada0-8eedae87ca08", "name": "Add-ons"}],
                                    "options": [{
                                        "uuid": "2aae1411-b559-421b-bdab-a27766037e9a",
                                        "title": "Chicken McNuggets 9 met 2x Barbecuesaus",
                                        "price": 490
                                    }, {
                                        "uuid": "715e9728-3619-47e9-90f7-dde4a4f46fe2",
                                        "title": "Chicken McNuggets 9 met 2x Zoetzure Saus",
                                        "price": 490
                                    }, {
                                        "uuid": "a19ea6fe-713c-4658-9aa6-4a878031dc8a",
                                        "title": "Chicken McNuggets 9 met 2x Kerriesaus",
                                        "price": 490
                                    }, {
                                        "uuid": "f5154280-11bb-44bf-84b9-0dee09554e18",
                                        "title": "Chicken McNuggets 9 met 2x Mosterdsaus",
                                        "price": 490
                                    }],
                                    "minPermitted": 0,
                                    "maxPermitted": 1
                                }],
                                "rawImageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/ba006652d076a78504af1eafda325005"
                            },
                            "197cc01f-210d-4a32-874a-bbe6e237d391": {
                                "imageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/435e12ff17a0e05de37351604bcc8616",
                                "itemDescription": "9 stukjes malse kip met een krokant laagje.",
                                "price": 850,
                                "title": "Chicken McNuggets 9 Medium Voordeelmenu",
                                "uuid": "197cc01f-210d-4a32-874a-bbe6e237d391",
                                "customizations": [{
                                    "uuid": "5ba7581f-21da-48a9-aa5a-218d69233e1c",
                                    "title": "Keuze Formaat Voordeelmenu",
                                    "tags": [{"uuid": "7d39c6c2-7f3e-4aa1-92e3-13b6aefd6e9a", "name": "Size"}],
                                    "options": [{
                                        "uuid": "77a144fc-7cd9-41d4-9233-370e80f873dc",
                                        "title": "Medium",
                                        "price": 0,
                                        "tags": [{"uuid": "882cedee-2d7a-4019-b46b-227082baeb7c", "name": "Medium"}]
                                    }, {
                                        "uuid": "14526b98-8bfd-473f-8d62-9eae74137093",
                                        "title": "Groot",
                                        "price": 75,
                                        "tags": [{"uuid": "21f0db62-8d48-433d-a6ea-2fdb1b8b4648", "name": "Large"}]
                                    }],
                                    "minPermitted": 1,
                                    "maxPermitted": 1
                                }, {
                                    "uuid": "b4cc184d-4f5f-47b0-8d7f-59213549f9d9",
                                    "title": "Keuze Side Voordeelmenu",
                                    "tags": [{"uuid": "a39f874d-b5cf-4fbc-ada0-8eedae87ca08", "name": "Add-ons"}],
                                    "options": [{
                                        "uuid": "5d55ecf1-1871-44fc-b340-d00a092df1a7",
                                        "title": "Franse Frietjes",
                                        "price": 0
                                    }, {
                                        "uuid": "a3fdb688-da2f-4ccf-9146-2812b85c5991",
                                        "title": "Sweet Potatoes",
                                        "price": 0
                                    }, {
                                        "uuid": "8b74be18-7e83-4ae4-b4c2-72323ef57f9d",
                                        "title": "Side Salad",
                                        "price": 0
                                    }],
                                    "minPermitted": 1,
                                    "maxPermitted": 1
                                }, {
                                    "uuid": "cf78eb69-39cb-4e6b-9674-917d6fa0b7bd",
                                    "title": "Keuze Drank Voordeelmenu",
                                    "tags": [{"uuid": "a39f874d-b5cf-4fbc-ada0-8eedae87ca08", "name": "Add-ons"}],
                                    "options": [{
                                        "uuid": "94236008-16b5-4a24-bf1f-850bd5ccb151",
                                        "title": "Milk Shake Aardbei",
                                        "price": 100
                                    }, {
                                        "uuid": "ff53705e-88d1-4581-a645-a543d105c906",
                                        "title": "Milk Shake Chocolade",
                                        "price": 100
                                    }, {
                                        "uuid": "239d97ea-af04-4c63-8103-45302742531f",
                                        "title": "Milk Shake Vanille",
                                        "price": 100
                                    }, {
                                        "uuid": "f9d92fac-d279-46f8-8a7b-5534140dd2e4",
                                        "title": "Milk Shake Banaan",
                                        "price": 100
                                    }, {
                                        "uuid": "dfe42bcd-4e4f-4042-b24c-fa9bb1de7d86",
                                        "title": "Coca-Cola",
                                        "price": 0
                                    }, {
                                        "uuid": "57864ffe-ff44-4a40-b5e0-359b78a1458e",
                                        "title": "Coca-Cola Light",
                                        "price": 0
                                    }, {
                                        "uuid": "693166da-5915-4683-8e1b-8f03c044974a",
                                        "title": "Coca-Cola Zero",
                                        "price": 0
                                    }, {
                                        "uuid": "531f58dd-1011-4ce1-8342-834b9c004c1c",
                                        "title": "Fanta",
                                        "price": 0
                                    }, {
                                        "uuid": "ef008278-a40f-49b4-8200-2d8fcdd17609",
                                        "title": "Sprite",
                                        "price": 0
                                    }, {
                                        "uuid": "f5424657-402d-423b-be55-2993f739a901",
                                        "title": "Lipton Ice Tea",
                                        "price": 0
                                    }, {
                                        "uuid": "1c28e3d4-ca86-477c-a699-d691d0dcb480",
                                        "title": "SPA",
                                        "price": 0
                                    }, {
                                        "uuid": "5ff1939f-eaa2-4458-8f98-ac63f16228dc",
                                        "title": "SPA Rood",
                                        "price": 0
                                    }, {
                                        "uuid": "9ee482f4-c0ce-4877-8f4d-7d93b589ab1f",
                                        "title": "Biologische Halfvolle Melk",
                                        "price": 0
                                    }, {
                                        "uuid": "adeb406c-cce1-43d6-a96e-ce60550e2185",
                                        "title": "Vers Sinaasappelsap",
                                        "price": 0
                                    }, {
                                        "uuid": "f7e4497f-f0e2-40ef-aeb2-bbd0eac696ce",
                                        "title": "Verse Smoothie Aardbei-Banaan",
                                        "price": 0
                                    }, {
                                        "uuid": "8ce02198-0c52-44ce-a9e6-d11c39947545",
                                        "title": "Tropicana Appelsap",
                                        "price": 0
                                    }, {
                                        "uuid": "ea16cafc-fec2-4a5b-9b8f-865c2fa28943",
                                        "title": "Fristi",
                                        "price": 100
                                    }, {
                                        "uuid": "496b7ed8-ce36-415b-a1aa-71b2253d31a7",
                                        "title": "Chocomel",
                                        "price": 100
                                    }],
                                    "minPermitted": 1,
                                    "maxPermitted": 1
                                }, {
                                    "uuid": "dbfcdfc4-277e-4be4-9f41-4c0be18252d5",
                                    "title": "Keuze Saus Voordeelmenu",
                                    "tags": [{"uuid": "a39f874d-b5cf-4fbc-ada0-8eedae87ca08", "name": "Add-ons"}],
                                    "options": [{
                                        "uuid": "1f98aa78-fd8e-4245-8cbd-7ac41a6276d3",
                                        "title": "Frietsaus",
                                        "price": 60
                                    }, {
                                        "uuid": "05332366-5d98-4e49-8cab-426233c03eb4",
                                        "title": "Frietsaus 2x",
                                        "price": 120
                                    }, {
                                        "uuid": "374ed76b-de7f-4e50-8afb-d54b9159342b",
                                        "title": "Mayonaise",
                                        "price": 60
                                    }, {
                                        "uuid": "406cf584-1157-49f5-a98c-d21d2b65a117",
                                        "title": "Mayonaise 2x",
                                        "price": 120
                                    }, {
                                        "uuid": "1d5fccba-90b8-4d7b-9a89-d5bd05d4dec3",
                                        "title": "Ketchup",
                                        "price": 60
                                    }, {
                                        "uuid": "56f21fc9-b64e-42a1-a58b-3c61e489ca75",
                                        "title": "Ketchup 2x",
                                        "price": 120
                                    }],
                                    "minPermitted": 0,
                                    "maxPermitted": 2
                                }, {
                                    "uuid": "0f45f425-b1f4-4905-977f-2cd6166e0294",
                                    "title": "Keuze Saus McNuggets 9",
                                    "tags": [{
                                        "uuid": "02e1f616-507b-4f3f-8e22-02ac5afbd34d",
                                        "name": "Sauce/Dressing"
                                    }],
                                    "options": [{
                                        "uuid": "3ca043c3-cf56-49ed-9645-a3209254f93a",
                                        "title": "Barbecuesaus",
                                        "price": 0,
                                        "tags": [{"uuid": "447030e6-340b-460b-b1cb-915ad88d038e", "name": "Sauce"}]
                                    }, {
                                        "uuid": "f49e32ad-cca5-4f1e-87a0-bb935cf1d628",
                                        "title": "Barbecuesaus",
                                        "price": 0,
                                        "tags": [{"uuid": "447030e6-340b-460b-b1cb-915ad88d038e", "name": "Sauce"}]
                                    }, {
                                        "uuid": "48e9094a-f33e-4c99-97ec-6c38c83a492c",
                                        "title": "Zoetzure Saus",
                                        "price": 0,
                                        "tags": [{"uuid": "447030e6-340b-460b-b1cb-915ad88d038e", "name": "Sauce"}]
                                    }, {
                                        "uuid": "3ff17513-861d-413b-8fe0-d0c656329899",
                                        "title": "Zoetzure Saus",
                                        "price": 0,
                                        "tags": [{"uuid": "447030e6-340b-460b-b1cb-915ad88d038e", "name": "Sauce"}]
                                    }, {
                                        "uuid": "99faad13-9f83-4b46-a25b-0254f8c2ec31",
                                        "title": "Kerriesaus",
                                        "price": 0,
                                        "tags": [{"uuid": "447030e6-340b-460b-b1cb-915ad88d038e", "name": "Sauce"}]
                                    }, {
                                        "uuid": "1f3faabe-be76-488e-8104-f233fc27d857",
                                        "title": "Kerriesaus",
                                        "price": 0,
                                        "tags": [{"uuid": "447030e6-340b-460b-b1cb-915ad88d038e", "name": "Sauce"}]
                                    }, {
                                        "uuid": "7e17702c-d462-492c-946e-7d5d93d0ba59",
                                        "title": "Mosterdsaus",
                                        "price": 0,
                                        "tags": [{"uuid": "447030e6-340b-460b-b1cb-915ad88d038e", "name": "Sauce"}]
                                    }, {
                                        "uuid": "ec8aab09-e767-49f6-a6a4-3376335090d7",
                                        "title": "Mosterdsaus",
                                        "price": 0,
                                        "tags": [{"uuid": "447030e6-340b-460b-b1cb-915ad88d038e", "name": "Sauce"}]
                                    }],
                                    "minPermitted": 2,
                                    "maxPermitted": 2
                                }],
                                "rawImageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/435e12ff17a0e05de37351604bcc8616"
                            },
                            "ab0a260a-94af-4a48-b053-0bd2cb024eff": {
                                "imageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/75dda8693b1b77a56affad3cbc9b8ff2",
                                "itemDescription": "Two 100% Angus Beef burgers on a special bun. For the true burger lovers.",
                                "price": 1025,
                                "title": "Maestro Burger with 100% Angus Beef Medium Value Meal",
                                "uuid": "ab0a260a-94af-4a48-b053-0bd2cb024eff",
                                "customizations": [{
                                    "uuid": "c5833b4b-bbb0-4c9a-b37d-5e61d7797563",
                                    "title": "Choose Size Value Meal",
                                    "tags": [{"uuid": "7d39c6c2-7f3e-4aa1-92e3-13b6aefd6e9a", "name": "Size"}],
                                    "options": [{
                                        "uuid": "3e3e7233-bf37-4657-ae48-a5fd57328296",
                                        "title": "Medium",
                                        "price": 0,
                                        "tags": [{"uuid": "882cedee-2d7a-4019-b46b-227082baeb7c", "name": "Medium"}]
                                    }, {
                                        "uuid": "dd832ef0-56c3-4f80-b7ce-0a4a275f6ff5",
                                        "title": "Large",
                                        "price": 75,
                                        "tags": [{"uuid": "21f0db62-8d48-433d-a6ea-2fdb1b8b4648", "name": "Large"}]
                                    }],
                                    "minPermitted": 1,
                                    "maxPermitted": 1
                                }, {
                                    "uuid": "6962a7d5-a3d4-4d70-8c23-e75c06e36e75",
                                    "title": "Choose Side Value Meal",
                                    "tags": [{"uuid": "a39f874d-b5cf-4fbc-ada0-8eedae87ca08", "name": "Add-ons"}],
                                    "options": [{
                                        "uuid": "fc2ac3c9-321e-4a98-a5dc-e15537307317",
                                        "title": "French Fries",
                                        "price": 0
                                    }, {
                                        "uuid": "d665ae4d-3508-4374-a177-cefa095f1dbe",
                                        "title": "Sweet Potatoes",
                                        "price": 0
                                    }, {
                                        "uuid": "7c7f6430-978e-4f3f-9daf-c40f77c5ec10",
                                        "title": "Side Salad",
                                        "price": 0
                                    }],
                                    "minPermitted": 1,
                                    "maxPermitted": 1
                                }, {
                                    "uuid": "5c9905d9-72ec-4b57-bfe9-4d78f53a144d",
                                    "title": "Choose Drink Value Meal",
                                    "tags": [{"uuid": "a39f874d-b5cf-4fbc-ada0-8eedae87ca08", "name": "Add-ons"}],
                                    "options": [{
                                        "uuid": "0fb92f51-f869-4814-b852-c6cd78d05ace",
                                        "title": "Milk Shake Strawberry",
                                        "price": 100
                                    }, {
                                        "uuid": "5d79946c-68e1-4586-9008-a10100eec1fb",
                                        "title": "Milk Shake Choco",
                                        "price": 100
                                    }, {
                                        "uuid": "d80dd095-131a-4c85-a10b-1ff4d15eca74",
                                        "title": "Milk Shake Vanilla",
                                        "price": 100
                                    }, {
                                        "uuid": "9ced4c59-bf10-4247-ba56-f8bd04fba7dc",
                                        "title": "Milk Shake Banana",
                                        "price": 100
                                    }, {
                                        "uuid": "fb352dc4-0dc7-488d-a1bc-2bdcbee42035",
                                        "title": "Coca-Cola",
                                        "price": 0
                                    }, {
                                        "uuid": "a1706a64-bff3-45a9-841d-a55029ab75b6",
                                        "title": "Coca-Cola Light",
                                        "price": 0
                                    }, {
                                        "uuid": "fd4e6c3b-b845-4e63-8bbb-c006cde0365d",
                                        "title": "Coca-Cola Zero",
                                        "price": 0
                                    }, {
                                        "uuid": "6517af9c-e131-482d-b9b7-f21ec411d2a1",
                                        "title": "Fanta",
                                        "price": 0
                                    }, {
                                        "uuid": "82129082-c81d-4ff6-ae23-7c008229d6b2",
                                        "title": "Sprite",
                                        "price": 0
                                    }, {
                                        "uuid": "ec486c11-e539-48a4-9435-ce15b0a30621",
                                        "title": "Lipton Ice Tea",
                                        "price": 0
                                    }, {
                                        "uuid": "fabf8d66-881c-4fb0-a14c-7c2c010a782a",
                                        "title": "SPA",
                                        "price": 0
                                    }, {
                                        "uuid": "355f1e81-c515-414a-b4e9-7d4e4dd4587e",
                                        "title": "SPA Rood",
                                        "price": 0
                                    }, {
                                        "uuid": "92cb8412-4aef-4d9c-b4db-2bb0b225d990",
                                        "title": "Semi-skimmed Milk",
                                        "price": 0
                                    }, {
                                        "uuid": "cd1e2809-1c52-4d46-971e-f590a4c0284a",
                                        "title": "Fresh Orange juice",
                                        "price": 0
                                    }, {
                                        "uuid": "e2842997-131c-4c92-86d9-62db0469d6a6",
                                        "title": "Fresh Smoothie Strawberry Banana",
                                        "price": 0
                                    }, {
                                        "uuid": "e03efce9-af30-4925-8ef2-b8f572c448ff",
                                        "title": "Tropicana Apple Juice",
                                        "price": 0
                                    }, {
                                        "uuid": "b2a8f1b6-8304-4354-ab7b-6c68980d39f5",
                                        "title": "Fristi",
                                        "price": 100
                                    }, {
                                        "uuid": "8804ac2e-9f24-4562-acb7-5e3aa6462ba1",
                                        "title": "Chocomel",
                                        "price": 100
                                    }],
                                    "minPermitted": 1,
                                    "maxPermitted": 1
                                }, {
                                    "uuid": "f7942d42-5c67-40df-b002-d37eef59941a",
                                    "title": "Choose Sauce Value Meal",
                                    "tags": [{"uuid": "a39f874d-b5cf-4fbc-ada0-8eedae87ca08", "name": "Add-ons"}],
                                    "options": [{
                                        "uuid": "a40b0362-6fd3-4d2a-8bc9-557105b8c35d",
                                        "title": "Fries Sauce",
                                        "price": 60
                                    }, {
                                        "uuid": "3036aeca-4e8b-4174-9502-2b06d72dd31e",
                                        "title": "Fries Sauce 2x",
                                        "price": 120
                                    }, {
                                        "uuid": "ea1f7fc9-4c92-4607-be86-1d1852346678",
                                        "title": "Mayonnaise",
                                        "price": 60
                                    }, {
                                        "uuid": "20de1b3a-8a55-4f12-bddc-aaf848fc405d",
                                        "title": "Mayonnaise 2x",
                                        "price": 120
                                    }, {
                                        "uuid": "bd430504-b652-421e-a274-9831e266c3cf",
                                        "title": "Ketchup",
                                        "price": 60
                                    }, {
                                        "uuid": "a75535f7-c037-4d63-b939-72b981fa2045",
                                        "title": "Ketchup 2x",
                                        "price": 120
                                    }],
                                    "minPermitted": 0,
                                    "maxPermitted": 2
                                }, {
                                    "uuid": "d1d2eb4a-ccee-4f35-9cf8-72a510acc6ee",
                                    "title": "Choose Side Order Value Meal",
                                    "tags": [{"uuid": "a39f874d-b5cf-4fbc-ada0-8eedae87ca08", "name": "Add-ons"}],
                                    "options": [{
                                        "uuid": "9c955300-7b8a-4535-a2be-abcf441a5d28",
                                        "title": "Chicken McNuggets 9 with 2x Barbecue Sauce",
                                        "price": 490
                                    }, {
                                        "uuid": "6677ab29-bbf3-4156-9224-22d5e44e3167",
                                        "title": "Chicken McNuggets 9 with 2x Sweet and Sour Sauce",
                                        "price": 490
                                    }, {
                                        "uuid": "7a18367a-6753-4eb7-aab1-c0f417d051ad",
                                        "title": "Chicken McNuggets 9 with 2x Curry Sauce",
                                        "price": 490
                                    }, {
                                        "uuid": "19c52a3a-097c-4480-9cb4-c8c8bd90f442",
                                        "title": "Chicken McNuggets 9 with 2x Mustard Sauce",
                                        "price": 490
                                    }],
                                    "minPermitted": 0,
                                    "maxPermitted": 1
                                }],
                                "rawImageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/75dda8693b1b77a56affad3cbc9b8ff2"
                            },
                            "3a6a7c9d-35f9-4ba8-83e6-6aaf753e5f0f": {
                                "imageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/5172094ef57ebd414f01570e4ed4b0e5",
                                "itemDescription": "Appelsap van Tropicana.",
                                "price": 225,
                                "title": "Tropicana Appelsap",
                                "uuid": "3a6a7c9d-35f9-4ba8-83e6-6aaf753e5f0f",
                                "customizations": [],
                                "alcoholicItems": 0,
                                "rawImageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/5172094ef57ebd414f01570e4ed4b0e5"
                            },
                            "f06efa20-6906-459c-a66f-575fb36ee59d": {
                                "imageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/5e675a1a4e1b058b0b5a6d0aaf5aef9b",
                                "itemDescription": "",
                                "price": 480,
                                "title": "Happy Meal Hamburger",
                                "uuid": "f06efa20-6906-459c-a66f-575fb36ee59d",
                                "customizations": [{
                                    "uuid": "f8c71e7f-2fa9-4876-8bd1-d9f98d0ad08f",
                                    "title": "Choose Toy HM",
                                    "tags": [{"uuid": "a39f874d-b5cf-4fbc-ada0-8eedae87ca08", "name": "Add-ons"}],
                                    "options": [{
                                        "uuid": "2ad4e723-42ba-473e-af21-154989799fbb",
                                        "title": "Transformers",
                                        "price": 0,
                                        "tags": [{"uuid": "241c3612-202b-422e-86a3-21bbbe094016", "name": "Side"}]
                                    }, {
                                        "uuid": "6d1f6fea-30b0-4329-9b4a-54e848bae7f3",
                                        "title": "My Little Pony",
                                        "price": 0,
                                        "tags": [{"uuid": "241c3612-202b-422e-86a3-21bbbe094016", "name": "Side"}]
                                    }],
                                    "minPermitted": 1,
                                    "maxPermitted": 1
                                }, {
                                    "uuid": "ef3cf393-c5f3-4c4d-921a-cde90649d74b",
                                    "title": "Choose Fries/Cherry Tomatoes HM",
                                    "tags": [{"uuid": "a39f874d-b5cf-4fbc-ada0-8eedae87ca08", "name": "Add-ons"}],
                                    "options": [{
                                        "uuid": "376c271f-bda4-4a58-9bbe-ec58a73b86a9",
                                        "title": "Fries",
                                        "price": 0,
                                        "tags": [{"uuid": "241c3612-202b-422e-86a3-21bbbe094016", "name": "Side"}]
                                    }, {
                                        "uuid": "a44c162a-4630-402d-87a7-17d23f1678c5",
                                        "title": "Cherry Tomatoes",
                                        "price": 0,
                                        "tags": [{"uuid": "241c3612-202b-422e-86a3-21bbbe094016", "name": "Side"}]
                                    }],
                                    "minPermitted": 1,
                                    "maxPermitted": 1
                                }, {
                                    "uuid": "e436a059-f0af-4a93-bd00-8c0a73af47bd",
                                    "title": "Choose Drink HM",
                                    "tags": [{"uuid": "a39f874d-b5cf-4fbc-ada0-8eedae87ca08", "name": "Add-ons"}],
                                    "options": [{
                                        "uuid": "97dfd7d3-cd12-4541-b6ff-bac014dfeeab",
                                        "title": "SPA 0,33L",
                                        "price": 0,
                                        "tags": [{"uuid": "f0cdc452-3731-45c2-8615-748725e085fc", "name": "Soda"}]
                                    }, {
                                        "uuid": "ca1de2a2-42ac-47b9-9761-7650a4bfc0e1",
                                        "title": "Semi-skimmed Milk",
                                        "price": 0,
                                        "tags": [{"uuid": "f0cdc452-3731-45c2-8615-748725e085fc", "name": "Soda"}]
                                    }, {
                                        "uuid": "570b2975-6faa-4f14-9f40-4a3542755834",
                                        "title": "Fresh Orange juice",
                                        "price": 0,
                                        "tags": [{"uuid": "f0cdc452-3731-45c2-8615-748725e085fc", "name": "Soda"}]
                                    }, {
                                        "uuid": "b739c91b-94a1-467b-8db0-f59dd520a98c",
                                        "title": "Fresh Smoothie Strawberry Banana",
                                        "price": 0,
                                        "tags": [{"uuid": "8a07474e-e72d-4ffd-a78b-e8f7e1cd7f05", "name": "Smoothie"}]
                                    }, {
                                        "uuid": "432c1fb8-d77b-439d-8da3-f1b8bb710946",
                                        "title": "Tropicana Apple Juice",
                                        "price": 0,
                                        "tags": [{"uuid": "f0cdc452-3731-45c2-8615-748725e085fc", "name": "Soda"}]
                                    }, {
                                        "uuid": "515881f5-4a20-4c1d-8541-900c7621d7fa",
                                        "title": "Fristi",
                                        "price": 0,
                                        "tags": [{"uuid": "f0cdc452-3731-45c2-8615-748725e085fc", "name": "Soda"}]
                                    }, {
                                        "uuid": "69acab7d-e47d-42ae-957f-c70325968837",
                                        "title": "Chocomel",
                                        "price": 0,
                                        "tags": [{"uuid": "f0cdc452-3731-45c2-8615-748725e085fc", "name": "Soda"}]
                                    }, {
                                        "uuid": "8af8ba7f-c103-434c-8700-a453e90f38ad",
                                        "title": "Coca-Cola small",
                                        "price": 0,
                                        "tags": [{"uuid": "f0cdc452-3731-45c2-8615-748725e085fc", "name": "Soda"}]
                                    }, {
                                        "uuid": "46e0aca1-51c1-4196-b948-6663d2fe7455",
                                        "title": "Coca-Cola Light small",
                                        "price": 0,
                                        "tags": [{"uuid": "f0cdc452-3731-45c2-8615-748725e085fc", "name": "Soda"}]
                                    }, {
                                        "uuid": "f7bc84b8-9163-44e8-a615-7502d1e931ff",
                                        "title": "Coca-Cola Zero small",
                                        "price": 0,
                                        "tags": [{"uuid": "f0cdc452-3731-45c2-8615-748725e085fc", "name": "Soda"}]
                                    }, {
                                        "uuid": "a11f32b6-bb2a-4c76-8fac-b048fac7d7bb",
                                        "title": "Fanta small",
                                        "price": 0,
                                        "tags": [{"uuid": "f0cdc452-3731-45c2-8615-748725e085fc", "name": "Soda"}]
                                    }, {
                                        "uuid": "b2354d8a-a976-4582-87fb-15f38fd01867",
                                        "title": "Sprite small",
                                        "price": 0,
                                        "tags": [{"uuid": "f0cdc452-3731-45c2-8615-748725e085fc", "name": "Soda"}]
                                    }, {
                                        "uuid": "3f2e148c-9f33-410a-a67a-5532ac34084e",
                                        "title": "Lipton Ice Tea small",
                                        "price": 0,
                                        "tags": [{"uuid": "f0cdc452-3731-45c2-8615-748725e085fc", "name": "Soda"}]
                                    }, {
                                        "uuid": "435a899b-0473-450f-9e7a-9f9cbb78fc0a",
                                        "title": "Milk Shake Strawberry small",
                                        "price": 100,
                                        "tags": [{"uuid": "d0430b75-1545-45aa-9cd5-8678c4657b66", "name": "Milk"}]
                                    }, {
                                        "uuid": "f82ec2b2-dacd-45c5-a225-9ce9bea85461",
                                        "title": "Milk Shake Choco small",
                                        "price": 100,
                                        "tags": [{"uuid": "d0430b75-1545-45aa-9cd5-8678c4657b66", "name": "Milk"}]
                                    }, {
                                        "uuid": "c5997d51-b338-47e2-829f-79d89b79830e",
                                        "title": "Milk Shake Vanilla small",
                                        "price": 100,
                                        "tags": [{"uuid": "d0430b75-1545-45aa-9cd5-8678c4657b66", "name": "Milk"}]
                                    }, {
                                        "uuid": "9ed2ada7-ab94-4376-9d6e-b0d09d46044b",
                                        "title": "Milk Shake Banana small",
                                        "price": 100,
                                        "tags": [{"uuid": "d0430b75-1545-45aa-9cd5-8678c4657b66", "name": "Milk"}]
                                    }],
                                    "minPermitted": 1,
                                    "maxPermitted": 1
                                }, {
                                    "uuid": "7d0c3bbf-d198-49c9-86b4-90c3d9326df4",
                                    "title": "Choose Dessert HM",
                                    "tags": [{"uuid": "a39f874d-b5cf-4fbc-ada0-8eedae87ca08", "name": "Add-ons"}],
                                    "options": [{
                                        "uuid": "1531bb31-8c71-4beb-a0c7-542ac6127312",
                                        "title": "Cherry Tomatoes",
                                        "price": 0,
                                        "tags": [{"uuid": "241c3612-202b-422e-86a3-21bbbe094016", "name": "Side"}]
                                    }, {
                                        "uuid": "b2cf8967-d7c5-48d2-a8e9-a0b8a629be07",
                                        "title": "Fresh Fruit",
                                        "price": 0,
                                        "tags": [{"uuid": "241c3612-202b-422e-86a3-21bbbe094016", "name": "Side"}]
                                    }, {
                                        "uuid": "bc88f00d-95f7-43d5-8414-3fe1dba8ce54",
                                        "title": "Danoontje",
                                        "price": 0,
                                        "tags": [{"uuid": "241c3612-202b-422e-86a3-21bbbe094016", "name": "Side"}]
                                    }],
                                    "minPermitted": 1,
                                    "maxPermitted": 1
                                }],
                                "alcoholicItems": 0,
                                "rawImageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/5e675a1a4e1b058b0b5a6d0aaf5aef9b"
                            },
                            "b5d82e2e-5eb7-4f37-bd23-f6eecf291374": {
                                "imageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/ba3cb236f1d64f9da6a281bea6ffdbe7",
                                "itemDescription": "Verfrissende smoothie op basis van crushed ice en een heerlijke fruitmix.",
                                "price": 325,
                                "title": "Iced Fruit Smoothie Mango & Ananas",
                                "uuid": "b5d82e2e-5eb7-4f37-bd23-f6eecf291374",
                                "customizations": [],
                                "alcoholicItems": 0,
                                "rawImageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/ba3cb236f1d64f9da6a281bea6ffdbe7"
                            },
                            "c80d01b8-dbea-4db5-990b-9b45084e6e55": {
                                "imageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/ecc9bb885c2013991c887ec565513921",
                                "itemDescription": "Speciale McDonald's fritessaus.",
                                "price": 60,
                                "title": "Fritessaus",
                                "uuid": "c80d01b8-dbea-4db5-990b-9b45084e6e55",
                                "customizations": [],
                                "alcoholicItems": 0,
                                "rawImageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/ecc9bb885c2013991c887ec565513921"
                            },
                            "5c64f01a-ad32-4093-b7ad-18ebb35ecaef": {
                                "imageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/2f22aa39f66dc0ed1483570b56d61a29",
                                "itemDescription": "Two 100% Angus Beef burgers on a special bun. For the true burger lovers.",
                                "price": 665,
                                "title": "Maestro Burger with 100% Angus Beef",
                                "uuid": "5c64f01a-ad32-4093-b7ad-18ebb35ecaef",
                                "customizations": [],
                                "alcoholicItems": 0,
                                "rawImageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/2f22aa39f66dc0ed1483570b56d61a29"
                            },
                            "9d9e060e-e2c0-4fbd-ab16-f990713424dc": {
                                "imageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/6300b047b7f2abe20786bf5259937957",
                                "itemDescription": "Milk Shake with strawberry flavor.",
                                "price": 325,
                                "title": "Milk Shake Strawberry",
                                "uuid": "9d9e060e-e2c0-4fbd-ab16-f990713424dc",
                                "customizations": [{
                                    "uuid": "880228f7-5ad2-4b38-a164-77f63e17b763",
                                    "title": "Choose Size Milkshake Strawberry",
                                    "tags": [{"uuid": "7d39c6c2-7f3e-4aa1-92e3-13b6aefd6e9a", "name": "Size"}],
                                    "options": [{
                                        "uuid": "84d2da12-d9f0-4729-8f9b-d3d3621b7dd8",
                                        "title": "Medium",
                                        "price": 0,
                                        "tags": [{"uuid": "d0430b75-1545-45aa-9cd5-8678c4657b66", "name": "Milk"}]
                                    }, {
                                        "uuid": "d58f6218-a0fd-45bd-ad45-a539f91e753f",
                                        "title": "Large",
                                        "price": 20,
                                        "tags": [{"uuid": "d0430b75-1545-45aa-9cd5-8678c4657b66", "name": "Milk"}]
                                    }],
                                    "minPermitted": 1,
                                    "maxPermitted": 1
                                }],
                                "alcoholicItems": 0,
                                "rawImageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/6300b047b7f2abe20786bf5259937957"
                            },
                            "f4190257-b38b-462e-9a23-5e9b91de1d72": {
                                "imageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/c757db111695d799544409062c8fe189",
                                "itemDescription": "Softijs met Banaan & Toffee",
                                "price": 335,
                                "title": "McFlurry Banaan-Toffee",
                                "uuid": "f4190257-b38b-462e-9a23-5e9b91de1d72",
                                "customizations": [{
                                    "uuid": "87c6f95a-5fa4-4bcf-a32e-72fb3f67ccdb",
                                    "title": "Keuze Saus McFlurry Banoffee",
                                    "tags": [{
                                        "uuid": "02e1f616-507b-4f3f-8e22-02ac5afbd34d",
                                        "name": "Sauce/Dressing"
                                    }],
                                    "options": [{
                                        "uuid": "b8b97e53-9093-4162-9548-5b1a783858cc",
                                        "title": "Chocolade",
                                        "price": 0,
                                        "tags": [{"uuid": "8a07474e-e72d-4ffd-a78b-e8f7e1cd7f05", "name": "Smoothie"}]
                                    }, {
                                        "uuid": "7ca18664-5245-4a1d-b180-86ccdaa4bf28",
                                        "title": "Aardbei",
                                        "price": 0,
                                        "tags": [{"uuid": "8a07474e-e72d-4ffd-a78b-e8f7e1cd7f05", "name": "Smoothie"}]
                                    }, {
                                        "uuid": "d4acbd8d-809f-43e7-b862-3df320252de3",
                                        "title": "Caramel",
                                        "price": 0,
                                        "tags": [{"uuid": "8a07474e-e72d-4ffd-a78b-e8f7e1cd7f05", "name": "Smoothie"}]
                                    }, {
                                        "uuid": "d51fbf73-0d78-4e3d-b436-7520aa4da724",
                                        "title": "Zonder Saus",
                                        "price": 0,
                                        "tags": [{"uuid": "8a07474e-e72d-4ffd-a78b-e8f7e1cd7f05", "name": "Smoothie"}]
                                    }],
                                    "minPermitted": 1,
                                    "maxPermitted": 1
                                }]
                            },
                            "4ece6366-0286-439f-b436-d363d6d1675e": {
                                "imageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/09aa647092bdc35b56a5de2621df461a",
                                "itemDescription": "Treat your senses with these subtly sweet fries. Delicious with mayonaise.",
                                "price": 300,
                                "title": "Sweet Potatoes",
                                "uuid": "4ece6366-0286-439f-b436-d363d6d1675e",
                                "customizations": [{
                                    "uuid": "7d91772f-ab58-492d-9cb1-493abc9efb61",
                                    "title": "Choose Size Sweet Potatoes",
                                    "tags": [{"uuid": "7d39c6c2-7f3e-4aa1-92e3-13b6aefd6e9a", "name": "Size"}],
                                    "options": [{
                                        "uuid": "d3118773-ea9b-490e-baea-bc5da94b1ba0",
                                        "title": "Medium",
                                        "price": 0,
                                        "tags": [{
                                            "uuid": "27f793cc-d0a4-4351-93e0-7d8e87a68952",
                                            "name": "Roasted Potatoes"
                                        }]
                                    }, {
                                        "uuid": "0130a66f-7248-4f10-8fdf-7b51d2cdb20b",
                                        "title": "Large",
                                        "price": 25,
                                        "tags": [{
                                            "uuid": "27f793cc-d0a4-4351-93e0-7d8e87a68952",
                                            "name": "Roasted Potatoes"
                                        }]
                                    }],
                                    "minPermitted": 1,
                                    "maxPermitted": 1
                                }]
                            },
                            "03bef294-dc7b-43bc-869c-b0b7ba34c1e8": {
                                "imageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/47fa14414caf1b539c05fb2ddc5b59c5",
                                "itemDescription": "Koffie van Segafredo.",
                                "price": 225,
                                "title": "Koffie",
                                "uuid": "03bef294-dc7b-43bc-869c-b0b7ba34c1e8",
                                "customizations": [{
                                    "uuid": "b0be66f6-9222-4f29-a6a8-f6968a654d02",
                                    "title": "Keuze Formaat Koffie",
                                    "tags": [{"uuid": "7d39c6c2-7f3e-4aa1-92e3-13b6aefd6e9a", "name": "Size"}],
                                    "options": [{
                                        "uuid": "d3117693-a0c4-4c58-a361-92c7ed0a1069",
                                        "title": "Medium",
                                        "price": 0,
                                        "tags": [{"uuid": "f0cdc452-3731-45c2-8615-748725e085fc", "name": "Soda"}]
                                    }, {
                                        "uuid": "2108acac-7abb-4d71-ac04-c5c864218d3e",
                                        "title": "Groot",
                                        "price": 35,
                                        "tags": [{"uuid": "f0cdc452-3731-45c2-8615-748725e085fc", "name": "Soda"}]
                                    }],
                                    "minPermitted": 1,
                                    "maxPermitted": 1
                                }],
                                "alcoholicItems": 0,
                                "rawImageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/47fa14414caf1b539c05fb2ddc5b59c5"
                            },
                            "3a6548be-fe01-4b8c-a28e-f263a033b61f": {
                                "imageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/7beb88087a971e93bdca97c84e58ea16",
                                "itemDescription": "Softijs met stukjes Oreo.",
                                "price": 335,
                                "title": "McFlurry Oreo",
                                "uuid": "3a6548be-fe01-4b8c-a28e-f263a033b61f",
                                "customizations": [{
                                    "uuid": "fe991b02-33fe-4dc3-be11-5a83e0eb55c8",
                                    "title": "Keuze Saus McFlurry Oreo",
                                    "tags": [{
                                        "uuid": "02e1f616-507b-4f3f-8e22-02ac5afbd34d",
                                        "name": "Sauce/Dressing"
                                    }],
                                    "options": [{
                                        "uuid": "122f94f0-8acb-4921-ba5e-cf0d35f18ef7",
                                        "title": "Chocolade",
                                        "price": 0,
                                        "tags": [{"uuid": "447030e6-340b-460b-b1cb-915ad88d038e", "name": "Sauce"}]
                                    }, {
                                        "uuid": "c0b25f40-97ae-4c65-8a94-89dd0fffa120",
                                        "title": "Aardbei",
                                        "price": 0,
                                        "tags": [{"uuid": "447030e6-340b-460b-b1cb-915ad88d038e", "name": "Sauce"}]
                                    }, {
                                        "uuid": "e0ba8621-06c8-4ef6-aa75-9ec0f0a5b59a",
                                        "title": "Caramel",
                                        "price": 0,
                                        "tags": [{"uuid": "447030e6-340b-460b-b1cb-915ad88d038e", "name": "Sauce"}]
                                    }, {
                                        "uuid": "e15e0e13-a001-4434-b50b-6e7ebd44c176",
                                        "title": "Zonder Saus",
                                        "price": 0,
                                        "tags": [{"uuid": "447030e6-340b-460b-b1cb-915ad88d038e", "name": "Sauce"}]
                                    }],
                                    "minPermitted": 1,
                                    "maxPermitted": 1
                                }],
                                "alcoholicItems": 0,
                                "rawImageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/7beb88087a971e93bdca97c84e58ea16"
                            },
                            "682e7ce6-37d6-430b-b12e-147b956527bc": {
                                "imageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/8d7540950a79182416e3193e90301e20",
                                "itemDescription": "Refreshing Lipton Ice tea.",
                                "price": 285,
                                "title": "Lipton Ice Tea",
                                "uuid": "682e7ce6-37d6-430b-b12e-147b956527bc",
                                "customizations": [{
                                    "uuid": "6faa6d1d-93f8-415e-8a27-fb40237418be",
                                    "title": "Choose Size Lipton Ice Tea",
                                    "tags": [{"uuid": "7d39c6c2-7f3e-4aa1-92e3-13b6aefd6e9a", "name": "Size"}],
                                    "options": [{
                                        "uuid": "fe24acd8-91a3-497c-93b9-21f42f41f212",
                                        "title": "Medium",
                                        "price": 0,
                                        "tags": [{"uuid": "f0cdc452-3731-45c2-8615-748725e085fc", "name": "Soda"}]
                                    }, {
                                        "uuid": "90e714f4-87d8-46a8-98f2-ef07794d907e",
                                        "title": "Large",
                                        "price": 30,
                                        "tags": [{"uuid": "f0cdc452-3731-45c2-8615-748725e085fc", "name": "Soda"}]
                                    }],
                                    "minPermitted": 1,
                                    "maxPermitted": 1
                                }],
                                "alcoholicItems": 0,
                                "rawImageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/8d7540950a79182416e3193e90301e20"
                            },
                            "cbdbedb3-8c09-4455-b41e-61e5b6686d52": {
                                "imageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/9ebbebcccbda4a8d364d273aa18bdc32",
                                "itemDescription": "9 pieces of tender chicken with a crisp.",
                                "price": 490,
                                "title": "Chicken McNuggets 9",
                                "uuid": "cbdbedb3-8c09-4455-b41e-61e5b6686d52",
                                "customizations": [{
                                    "uuid": "ceddc20e-11c4-4b68-87bb-099870ab30ff",
                                    "title": "Choose Sauce McNuggets 9",
                                    "tags": [{
                                        "uuid": "02e1f616-507b-4f3f-8e22-02ac5afbd34d",
                                        "name": "Sauce/Dressing"
                                    }],
                                    "options": [{
                                        "uuid": "07f7f2b1-d762-410f-843f-8f929abbff12",
                                        "title": "Barbeque Sauce",
                                        "price": 0,
                                        "tags": [{"uuid": "447030e6-340b-460b-b1cb-915ad88d038e", "name": "Sauce"}]
                                    }, {
                                        "uuid": "5f41e4be-4d68-4b40-84de-58d41d345cad",
                                        "title": "Barbeque Sauce",
                                        "price": 0,
                                        "tags": [{"uuid": "447030e6-340b-460b-b1cb-915ad88d038e", "name": "Sauce"}]
                                    }, {
                                        "uuid": "8c9988fa-5fd6-4a7b-9993-238ba45c21ee",
                                        "title": "Sweet and Sour Sauce",
                                        "price": 0,
                                        "tags": [{"uuid": "447030e6-340b-460b-b1cb-915ad88d038e", "name": "Sauce"}]
                                    }, {
                                        "uuid": "d5b6d2e3-1349-4e75-acb5-6ca7d00fdb7b",
                                        "title": "Sweet and Sour Sauce",
                                        "price": 0,
                                        "tags": [{"uuid": "447030e6-340b-460b-b1cb-915ad88d038e", "name": "Sauce"}]
                                    }, {
                                        "uuid": "0e5e40e0-dd59-41a7-a663-99e77dadaeb1",
                                        "title": "Curry Sauce",
                                        "price": 0,
                                        "tags": [{"uuid": "447030e6-340b-460b-b1cb-915ad88d038e", "name": "Sauce"}]
                                    }, {
                                        "uuid": "733aa8ce-a4aa-4eb9-a942-04c339db2b64",
                                        "title": "Curry Sauce",
                                        "price": 0,
                                        "tags": [{"uuid": "447030e6-340b-460b-b1cb-915ad88d038e", "name": "Sauce"}]
                                    }, {
                                        "uuid": "831b0654-03ba-4cef-b172-d28420142166",
                                        "title": "Mustard Sauce",
                                        "price": 0,
                                        "tags": [{"uuid": "447030e6-340b-460b-b1cb-915ad88d038e", "name": "Sauce"}]
                                    }, {
                                        "uuid": "a304d350-c4c5-4624-a32b-cf7e6c4deefa",
                                        "title": "Mustard Sauce",
                                        "price": 0,
                                        "tags": [{"uuid": "447030e6-340b-460b-b1cb-915ad88d038e", "name": "Sauce"}]
                                    }],
                                    "minPermitted": 2,
                                    "maxPermitted": 2
                                }],
                                "alcoholicItems": 0,
                                "rawImageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/9ebbebcccbda4a8d364d273aa18bdc32"
                            },
                            "b2676842-c965-4c0d-ae6e-28b885fe8ed4": {
                                "imageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/e5017eaa7375bf49cdb19b3318a62a5a",
                                "itemDescription": "Two 100% Angus Beef burgers with naturally aged cheddar cheese, Batavia lettuce, Chimichurri sauce, Pico de Gallo salsa, Nacho chips and delicious guacamole on a special sesame & poppyseed bun.",
                                "price": 665,
                                "title": "Maestro Guacamole",
                                "uuid": "b2676842-c965-4c0d-ae6e-28b885fe8ed4",
                                "customizations": []
                            },
                            "7b0ef34a-a157-4884-b0df-3c27cbda1f1b": {
                                "imageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/ac5e9be2342c024f9bf73e88634c1e4b",
                                "itemDescription": "Grote, 100% rundvlees burger met bacon en een karakteristieke saus.",
                                "price": 615,
                                "title": "Big Tasty met Bacon",
                                "uuid": "7b0ef34a-a157-4884-b0df-3c27cbda1f1b",
                                "customizations": [],
                                "rawImageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/ac5e9be2342c024f9bf73e88634c1e4b"
                            },
                            "060e7913-4080-465d-8306-7b4feeedc42c": {
                                "imageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/ff77d1c824a8dcffc5e9465c7a579b0a",
                                "itemDescription": "100% rundvlees burger.",
                                "price": 445,
                                "title": "Quarter Pounder",
                                "uuid": "060e7913-4080-465d-8306-7b4feeedc42c",
                                "customizations": [],
                                "alcoholicItems": 0,
                                "rawImageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/ff77d1c824a8dcffc5e9465c7a579b0a"
                            },
                            "7a70cff8-f0dd-4344-8e4d-de5e24e93d81": {
                                "imageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/2c7c29cb20630ac620a5e746689699b2",
                                "itemDescription": "Tender chicken on a sesame bun.",
                                "price": 815,
                                "title": "McChicken Medium Value Meal",
                                "uuid": "7a70cff8-f0dd-4344-8e4d-de5e24e93d81",
                                "customizations": [{
                                    "uuid": "9cfb4a3c-4094-4ffb-bc62-a98a252229aa",
                                    "title": "Choose Size Value Meal",
                                    "tags": [{"uuid": "7d39c6c2-7f3e-4aa1-92e3-13b6aefd6e9a", "name": "Size"}],
                                    "options": [{
                                        "uuid": "f16e8f7a-c6bc-4e1c-930b-56fbfc3a2791",
                                        "title": "Medium",
                                        "price": 0,
                                        "tags": [{"uuid": "882cedee-2d7a-4019-b46b-227082baeb7c", "name": "Medium"}]
                                    }, {
                                        "uuid": "925a0359-8788-4052-b29c-475b510d5f74",
                                        "title": "Large",
                                        "price": 75,
                                        "tags": [{"uuid": "21f0db62-8d48-433d-a6ea-2fdb1b8b4648", "name": "Large"}]
                                    }],
                                    "minPermitted": 1,
                                    "maxPermitted": 1
                                }, {
                                    "uuid": "a9c13204-57ba-418e-8044-93e0a416b18d",
                                    "title": "Choose Side Value Meal",
                                    "tags": [{"uuid": "a39f874d-b5cf-4fbc-ada0-8eedae87ca08", "name": "Add-ons"}],
                                    "options": [{
                                        "uuid": "610fb4f8-6278-449f-b43e-ecf1f21e98c8",
                                        "title": "French Fries",
                                        "price": 0
                                    }, {
                                        "uuid": "739f1f7a-a4d2-433e-93ff-35c0c25c65bc",
                                        "title": "Sweet Potatoes",
                                        "price": 0
                                    }, {
                                        "uuid": "f78cea42-d5df-4e2e-a0a1-20808eb6310d",
                                        "title": "Side Salad",
                                        "price": 0
                                    }],
                                    "minPermitted": 1,
                                    "maxPermitted": 1
                                }, {
                                    "uuid": "afb2b054-c064-4a98-b10f-cdc05339015c",
                                    "title": "Choose Drink Value Meal",
                                    "tags": [{"uuid": "a39f874d-b5cf-4fbc-ada0-8eedae87ca08", "name": "Add-ons"}],
                                    "options": [{
                                        "uuid": "b7e3f33a-5f05-4e64-8def-3ae710e60823",
                                        "title": "Milk Shake Strawberry",
                                        "price": 100
                                    }, {
                                        "uuid": "e33e145d-3c78-4495-a42e-4a4365eeeced",
                                        "title": "Milk Shake Choco",
                                        "price": 100
                                    }, {
                                        "uuid": "605f1be1-03fe-4c72-9335-a8b44c72f74e",
                                        "title": "Milk Shake Vanilla",
                                        "price": 100
                                    }, {
                                        "uuid": "c4be29ac-d314-4f61-bd6a-0678c01b93a1",
                                        "title": "Milk Shake Banana",
                                        "price": 100
                                    }, {
                                        "uuid": "991f918a-21bd-42b2-9a5a-a9c61fbe7a5b",
                                        "title": "Coca-Cola",
                                        "price": 0
                                    }, {
                                        "uuid": "e10ee831-8cb2-499d-8ca6-e3203ae9651b",
                                        "title": "Coca-Cola Light",
                                        "price": 0
                                    }, {
                                        "uuid": "ff7f4938-8d02-4a17-addf-52e91cb0cb6f",
                                        "title": "Coca-Cola Zero",
                                        "price": 0
                                    }, {
                                        "uuid": "47f271eb-477a-4934-a2fb-0d29ce4a3d38",
                                        "title": "Fanta",
                                        "price": 0
                                    }, {
                                        "uuid": "5f8adc2a-3ec1-4808-abfb-f2070311e2c6",
                                        "title": "Sprite",
                                        "price": 0
                                    }, {
                                        "uuid": "7af74c12-210a-448c-bbef-9d3091d892ef",
                                        "title": "Lipton Ice Tea",
                                        "price": 0
                                    }, {
                                        "uuid": "4207d912-0180-4a8c-9a6f-fa6c2a269c82",
                                        "title": "SPA",
                                        "price": 0
                                    }, {
                                        "uuid": "2d2a9b82-3198-49cb-a3cc-0b678c7d9370",
                                        "title": "SPA Rood",
                                        "price": 0
                                    }, {
                                        "uuid": "891cd769-4e1c-42c3-9297-08b128f9ae5b",
                                        "title": "Semi-skimmed Milk",
                                        "price": 0
                                    }, {
                                        "uuid": "1b921432-9595-408f-b441-15f5b2342291",
                                        "title": "Fresh Orange juice",
                                        "price": 0
                                    }, {
                                        "uuid": "f82cb78c-1e4c-432d-8b72-ad2ff619a507",
                                        "title": "Fresh Smoothie Strawberry Banana",
                                        "price": 0
                                    }, {
                                        "uuid": "623eed3d-a877-4b65-bff5-ab814b0f1fb4",
                                        "title": "Tropicana Apple Juice",
                                        "price": 0
                                    }, {
                                        "uuid": "fb623175-2c9d-45be-8594-cb0d9133576b",
                                        "title": "Fristi",
                                        "price": 100
                                    }, {
                                        "uuid": "83bf1d61-ffd1-4a73-887c-65cbf4af13ff",
                                        "title": "Chocomel",
                                        "price": 100
                                    }],
                                    "minPermitted": 1,
                                    "maxPermitted": 1
                                }, {
                                    "uuid": "fc098658-3b36-45ae-be8d-0ae2565a1163",
                                    "title": "Choose Sauce Value Meal",
                                    "tags": [{"uuid": "a39f874d-b5cf-4fbc-ada0-8eedae87ca08", "name": "Add-ons"}],
                                    "options": [{
                                        "uuid": "e041897a-d3ff-45fe-96e7-c907cd9742b9",
                                        "title": "Fries Sauce",
                                        "price": 60
                                    }, {
                                        "uuid": "1f6b09b0-1847-4229-86e4-f2470a6a86be",
                                        "title": "Fries Sauce 2x",
                                        "price": 120
                                    }, {
                                        "uuid": "32546619-fff2-452a-bf81-21c9b3e09c98",
                                        "title": "Mayonnaise",
                                        "price": 60
                                    }, {
                                        "uuid": "139d3e81-6847-485a-b230-97ec9d083492",
                                        "title": "Mayonnaise 2x",
                                        "price": 120
                                    }, {
                                        "uuid": "d15eb7bd-1a59-4bc3-b846-fd8ac60e83b8",
                                        "title": "Ketchup",
                                        "price": 60
                                    }, {
                                        "uuid": "854e820c-2028-41f6-bfc4-70ba7025d291",
                                        "title": "Ketchup 2x",
                                        "price": 120
                                    }],
                                    "minPermitted": 0,
                                    "maxPermitted": 2
                                }, {
                                    "uuid": "ea26784a-9506-41d1-988a-5845ca89c1d8",
                                    "title": "Choose Side Order Value Meal",
                                    "tags": [{"uuid": "a39f874d-b5cf-4fbc-ada0-8eedae87ca08", "name": "Add-ons"}],
                                    "options": [{
                                        "uuid": "e141ce61-f84d-49d6-b520-efa56d917dd1",
                                        "title": "Chicken McNuggets 9 with 2x Barbecue Sauce",
                                        "price": 490
                                    }, {
                                        "uuid": "c8e26cde-e65b-486b-944f-8fa4dff4c545",
                                        "title": "Chicken McNuggets 9 with 2x Sweet and Sour Sauce",
                                        "price": 490
                                    }, {
                                        "uuid": "873a8395-1972-41aa-b500-951d5f5f4a09",
                                        "title": "Chicken McNuggets 9 with 2x Curry Sauce",
                                        "price": 490
                                    }, {
                                        "uuid": "252c88a3-11f0-4017-94c0-7abb6d51c784",
                                        "title": "Chicken McNuggets 9 with 2x Mustard Sauce",
                                        "price": 490
                                    }],
                                    "minPermitted": 0,
                                    "maxPermitted": 1
                                }],
                                "rawImageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/2c7c29cb20630ac620a5e746689699b2"
                            },
                            "36e27ef4-65f3-4b2e-8d58-28f2400e2f26": {
                                "imageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/a0aa4ec40fd8fda94f6e240c04477a48",
                                "itemDescription": "Vergeet alles wat je weet over de smaak van kip. Nieuw op het menu is de Homestyle Crispy Chicken. Homestyle gemarineerde kipburger, heerlijk juicy van binnen en toch crispy van buiten. Met een luxe sesambroodje, natuurlijk gerijpte Cheddar kaas, lange crispy bacon strips (varkensvlees), Batavia sla, rode uien en gekarameliseerde uiencompote. De spicy Pimento saus maakt hem helemaal af.",
                                "price": 495,
                                "title": "Homestyle Crispy Chicken",
                                "uuid": "36e27ef4-65f3-4b2e-8d58-28f2400e2f26",
                                "customizations": [],
                                "rawImageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/a0aa4ec40fd8fda94f6e240c04477a48"
                            },
                            "21793699-cdf8-4c8a-a920-8525369fe3d5": {
                                "imageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/8d7f239a93bf49b306abe31bd30c7db5",
                                "itemDescription": "Cookie with different types of chocolate, freshly oven baked.",
                                "price": 225,
                                "title": "Triple Chocolate Cookie",
                                "uuid": "21793699-cdf8-4c8a-a920-8525369fe3d5",
                                "customizations": [],
                                "alcoholicItems": 0,
                                "rawImageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/8d7f239a93bf49b306abe31bd30c7db5"
                            },
                            "a4a32681-7763-4235-84f4-7be7da7159c8": {
                                "imageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/977e08e6de1dc780caa4e64c0878b4f2",
                                "itemDescription": "Fish filet with Cheddar cheese on a steamed bun.",
                                "price": 425,
                                "title": "Filet-O-Fish",
                                "uuid": "a4a32681-7763-4235-84f4-7be7da7159c8",
                                "customizations": [],
                                "alcoholicItems": 0,
                                "rawImageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/977e08e6de1dc780caa4e64c0878b4f2"
                            },
                            "cf8e35cd-f60c-47ed-b5c1-fbb867d4c3d5": {
                                "imageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/f696e82313f6b6a79485e93a243174b7",
                                "itemDescription": "Typisch McDonald's broodje kroket met daarbovenop een lekkere mosterdsaus.",
                                "price": 300,
                                "title": "McKroket",
                                "uuid": "cf8e35cd-f60c-47ed-b5c1-fbb867d4c3d5",
                                "customizations": [],
                                "alcoholicItems": 0,
                                "rawImageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/f696e82313f6b6a79485e93a243174b7"
                            },
                            "30a8c8fe-c7f2-44a4-8e38-3c76e7c18cb4": {
                                "imageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/295394cc1a611e58f8e9891da496663c",
                                "itemDescription": "Twee 100% Angus Beef burgers met natuurlijk gerijpte cheddarkaas, Batavia sla, Chimichurri saus, Pico de Gallo (tomaten-uien salsa), Nacho chips en heerlijke guacamole op een speciaal sesam- en maanzaadbroodje.",
                                "price": 1025,
                                "title": "Maestro Guacamole Medium Voordeelmenu",
                                "uuid": "30a8c8fe-c7f2-44a4-8e38-3c76e7c18cb4",
                                "customizations": [{
                                    "uuid": "4a9848b4-c416-4ddc-a67c-f9e5ce41bb5a",
                                    "title": "Keuze Formaat Voordeelmenu",
                                    "tags": [{"uuid": "7d39c6c2-7f3e-4aa1-92e3-13b6aefd6e9a", "name": "Size"}],
                                    "options": [{
                                        "uuid": "d0c85f4b-e8d2-40f0-b279-c730930920ad",
                                        "title": "Medium",
                                        "price": 0,
                                        "tags": [{"uuid": "882cedee-2d7a-4019-b46b-227082baeb7c", "name": "Medium"}]
                                    }, {
                                        "uuid": "e1f63623-25a4-48f1-a101-06345fa6a8b0",
                                        "title": "Groot",
                                        "price": 75,
                                        "tags": [{"uuid": "21f0db62-8d48-433d-a6ea-2fdb1b8b4648", "name": "Large"}]
                                    }],
                                    "minPermitted": 1,
                                    "maxPermitted": 1
                                }, {
                                    "uuid": "af4b8300-f73d-4e12-9c5d-e9de4f5b289c",
                                    "title": "Keuze Side Voordeelmenu",
                                    "tags": [{"uuid": "a39f874d-b5cf-4fbc-ada0-8eedae87ca08", "name": "Add-ons"}],
                                    "options": [{
                                        "uuid": "469a6610-bb52-40e8-99b7-cc6d4bd94402",
                                        "title": "Franse Frietjes",
                                        "price": 0
                                    }, {
                                        "uuid": "1a3ea755-f418-48e9-be69-323a880eede0",
                                        "title": "Sweet Potatoes",
                                        "price": 0
                                    }, {
                                        "uuid": "87ea17a4-6d24-49d4-a35e-0605c524def2",
                                        "title": "Side Salad",
                                        "price": 0
                                    }],
                                    "minPermitted": 1,
                                    "maxPermitted": 1
                                }, {
                                    "uuid": "8e67048e-2a7c-4768-acc6-c9de1cca4a56",
                                    "title": "Keuze Drank Voordeelmenu",
                                    "tags": [{"uuid": "a39f874d-b5cf-4fbc-ada0-8eedae87ca08", "name": "Add-ons"}],
                                    "options": [{
                                        "uuid": "927c8d58-8714-4e75-a6f4-c3844590427e",
                                        "title": "Milk Shake Aardbei",
                                        "price": 100
                                    }, {
                                        "uuid": "0dcbb595-bed2-43b7-82ab-9f8635544002",
                                        "title": "Milk Shake Chocolade",
                                        "price": 100
                                    }, {
                                        "uuid": "71105e37-ff51-435f-85fa-17263a2fc76f",
                                        "title": "Milk Shake Vanille",
                                        "price": 100
                                    }, {
                                        "uuid": "4b05fa17-4b1a-457d-941b-ebdf8150020b",
                                        "title": "Milk Shake Banaan",
                                        "price": 100
                                    }, {
                                        "uuid": "2baa8dc0-0331-4f1b-acf8-39ccc9baf508",
                                        "title": "Coca-Cola",
                                        "price": 0
                                    }, {
                                        "uuid": "8b3314b5-420f-4bc6-8040-cdd08dad9272",
                                        "title": "Coca-Cola Light",
                                        "price": 0
                                    }, {
                                        "uuid": "d7c68e63-434b-4082-aa69-c91f92a94e49",
                                        "title": "Coca-Cola Zero",
                                        "price": 0
                                    }, {
                                        "uuid": "e9289ec2-278c-4ff1-8528-bccc7553d85c",
                                        "title": "Fanta",
                                        "price": 0
                                    }, {
                                        "uuid": "6121b6cb-5c3d-4656-b5a0-b84a87136e79",
                                        "title": "Sprite",
                                        "price": 0
                                    }, {
                                        "uuid": "f175e01e-54ce-4bd7-b924-c4b633f74ac9",
                                        "title": "Lipton Ice Tea",
                                        "price": 0
                                    }, {
                                        "uuid": "62167c1b-3087-4a22-b165-caab8c5652ee",
                                        "title": "SPA",
                                        "price": 0
                                    }, {
                                        "uuid": "20f46323-0967-44cd-ac9e-db2fd12a1df9",
                                        "title": "SPA Rood",
                                        "price": 0
                                    }, {
                                        "uuid": "cf5d6230-7631-4cdc-a895-e1da56c2fd95",
                                        "title": "Biologische Halfvolle Melk",
                                        "price": 0
                                    }, {
                                        "uuid": "ea415e99-a4ad-4045-8d7e-c2f3eaa6f596",
                                        "title": "Vers Sinaasappelsap",
                                        "price": 0
                                    }, {
                                        "uuid": "d7d74a0b-e9e8-4623-a0cb-48528cab1db1",
                                        "title": "Verse Smoothie Aardbei-Banaan",
                                        "price": 0
                                    }, {
                                        "uuid": "537b8436-eb12-411a-9a91-58a1dc43ce00",
                                        "title": "Tropicana Appelsap",
                                        "price": 0
                                    }, {
                                        "uuid": "fd8e6ee2-bd73-43f7-a252-6290f30c6f96",
                                        "title": "Fristi",
                                        "price": 70
                                    }, {
                                        "uuid": "36530d3f-6da6-4178-92d1-38c0304282ce",
                                        "title": "Chocomel",
                                        "price": 70
                                    }],
                                    "minPermitted": 1,
                                    "maxPermitted": 1
                                }, {
                                    "uuid": "2292e0e9-de74-42a2-9c5c-532dc36085d6",
                                    "title": "Keuze Saus Voordeelmenu",
                                    "tags": [{"uuid": "a39f874d-b5cf-4fbc-ada0-8eedae87ca08", "name": "Add-ons"}],
                                    "options": [{
                                        "uuid": "52399829-b148-4591-ad24-ea567fa4554c",
                                        "title": "Frietsaus",
                                        "price": 60
                                    }, {
                                        "uuid": "7b96b08a-fef0-4b61-a321-e077b69dac6a",
                                        "title": "Frietsaus 2x",
                                        "price": 120
                                    }, {
                                        "uuid": "86698a69-8b53-45da-9140-e410084c17e0",
                                        "title": "Mayonaise",
                                        "price": 60
                                    }, {
                                        "uuid": "64109dee-773a-4029-9496-3000f5ab7c38",
                                        "title": "Mayonaise 2x",
                                        "price": 120
                                    }, {
                                        "uuid": "a3892a8b-64f1-4529-954b-46cdd6a94090",
                                        "title": "Ketchup",
                                        "price": 60
                                    }, {
                                        "uuid": "4fb20d97-abb9-40cf-826f-ab089c35c655",
                                        "title": "Ketchup 2x",
                                        "price": 120
                                    }],
                                    "minPermitted": 0,
                                    "maxPermitted": 2
                                }, {
                                    "uuid": "7147f122-921c-4a7f-a8d7-0b63f64c60f0",
                                    "title": "Keuze Voor Erbij Voordeelmenu",
                                    "tags": [{"uuid": "a39f874d-b5cf-4fbc-ada0-8eedae87ca08", "name": "Add-ons"}],
                                    "options": [{
                                        "uuid": "678e825c-ca92-4f47-b8ef-4951984f445b",
                                        "title": "Chicken McNuggets 9 met 2x Barbecuesaus",
                                        "price": 490
                                    }, {
                                        "uuid": "adaa7552-a50e-4cbc-af6b-99f83f1ad5df",
                                        "title": "Chicken McNuggets 9 met 2x Zoetzure Saus",
                                        "price": 490
                                    }, {
                                        "uuid": "f4ea599c-24b6-445b-98a8-c6fc004ca42c",
                                        "title": "Chicken McNuggets 9 met 2x Kerriesaus",
                                        "price": 490
                                    }, {
                                        "uuid": "84e385cb-8522-4477-ac59-9138ea0a97eb",
                                        "title": "Chicken McNuggets 9 met 2x Mosterdsaus",
                                        "price": 490
                                    }],
                                    "minPermitted": 0,
                                    "maxPermitted": 1
                                }]
                            },
                            "1b498d42-3808-4c50-ab53-34cfdc1cd1c3": {
                                "imageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/fa37cd0ea5d7144eb2056c2502f3220b",
                                "itemDescription": "Luxurious crushed ice frappe with cream, white chocolate and raspberry.",
                                "price": 325,
                                "title": "Iced Frappé White Chocolate & Raspberry",
                                "uuid": "1b498d42-3808-4c50-ab53-34cfdc1cd1c3",
                                "customizations": [],
                                "rawImageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/fa37cd0ea5d7144eb2056c2502f3220b"
                            },
                            "0b54efa3-b72b-45d3-ac15-9ad0357c76ac": {
                                "imageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/3ec422a06f02891f15d7655c843389d4",
                                "itemDescription": "Cookie met stukjes witte chocolade en framboos. Vers uit de oven.",
                                "price": 225,
                                "title": "White Chocolate Raspberry Cookie",
                                "uuid": "0b54efa3-b72b-45d3-ac15-9ad0357c76ac",
                                "customizations": [],
                                "alcoholicItems": 0,
                                "rawImageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/3ec422a06f02891f15d7655c843389d4"
                            },
                            "9ef011b5-db42-43bb-9a5b-0e42a07d6107": {
                                "imageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/b263452351f646b9d38d5e2d1493e537",
                                "itemDescription": "Segafredo Cafe Latte.",
                                "price": 260,
                                "title": "Cafe Latte",
                                "uuid": "9ef011b5-db42-43bb-9a5b-0e42a07d6107",
                                "customizations": [{
                                    "uuid": "c91471ae-3b01-4b7b-a9bd-18ee33842253",
                                    "title": "Choose Size Cafe Latte",
                                    "tags": [{"uuid": "7d39c6c2-7f3e-4aa1-92e3-13b6aefd6e9a", "name": "Size"}],
                                    "options": [{
                                        "uuid": "3560ae12-ef20-45da-9374-0ac908f6b724",
                                        "title": "Medium",
                                        "price": 0,
                                        "tags": [{"uuid": "f0cdc452-3731-45c2-8615-748725e085fc", "name": "Soda"}]
                                    }, {
                                        "uuid": "2f1ecea2-23f8-4f13-89a9-aef15a367fee",
                                        "title": "Large",
                                        "price": 35,
                                        "tags": [{"uuid": "f0cdc452-3731-45c2-8615-748725e085fc", "name": "Soda"}]
                                    }],
                                    "minPermitted": 1,
                                    "maxPermitted": 1
                                }],
                                "alcoholicItems": 0,
                                "rawImageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/b263452351f646b9d38d5e2d1493e537"
                            },
                            "321a82b3-389b-42ec-b340-fe723aeb88e8": {
                                "imageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/ba3cb236f1d64f9da6a281bea6ffdbe7",
                                "itemDescription": "Refreshing crushed ice smoothie.",
                                "price": 325,
                                "title": "Iced Fruit Smoothie Mango & Pineapple",
                                "uuid": "321a82b3-389b-42ec-b340-fe723aeb88e8",
                                "customizations": [],
                                "alcoholicItems": 0,
                                "rawImageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/ba3cb236f1d64f9da6a281bea6ffdbe7"
                            },
                            "309dc25a-8717-4843-96e6-a569257f45b5": {
                                "imageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/e4a7555fef24d63c4c82419f5941e12e",
                                "itemDescription": "De enige echte.",
                                "price": 445,
                                "title": "Big Mac",
                                "uuid": "309dc25a-8717-4843-96e6-a569257f45b5",
                                "customizations": [],
                                "alcoholicItems": 0,
                                "rawImageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/e4a7555fef24d63c4c82419f5941e12e"
                            },
                            "a40537a5-c29c-4896-8f5b-be68af85223a": {
                                "imageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/7beb88087a971e93bdca97c84e58ea16",
                                "itemDescription": "Soft dairy icecream mixed with pieces of Oreo.",
                                "price": 335,
                                "title": "McFlurry Oreo",
                                "uuid": "a40537a5-c29c-4896-8f5b-be68af85223a",
                                "customizations": [{
                                    "uuid": "15f4117e-cb79-4622-b3ad-18c21f45a876",
                                    "title": "Choose Sauce McFlurry Oreo",
                                    "tags": [{
                                        "uuid": "02e1f616-507b-4f3f-8e22-02ac5afbd34d",
                                        "name": "Sauce/Dressing"
                                    }],
                                    "options": [{
                                        "uuid": "15c3ac27-8703-42cf-9226-30bd7460cfe8",
                                        "title": "Chocolate",
                                        "price": 0,
                                        "tags": [{"uuid": "8a07474e-e72d-4ffd-a78b-e8f7e1cd7f05", "name": "Smoothie"}]
                                    }, {
                                        "uuid": "1f9d45c6-6df0-4cbb-bea5-69f45aab013a",
                                        "title": "Strawberry",
                                        "price": 0,
                                        "tags": [{"uuid": "8a07474e-e72d-4ffd-a78b-e8f7e1cd7f05", "name": "Smoothie"}]
                                    }, {
                                        "uuid": "50d8cf5f-c19d-4528-abb7-78dc5b0ee3bb",
                                        "title": "Caramel",
                                        "price": 0,
                                        "tags": [{"uuid": "8a07474e-e72d-4ffd-a78b-e8f7e1cd7f05", "name": "Smoothie"}]
                                    }, {
                                        "uuid": "10f2d9b2-3b9f-4152-9376-7bab884bd30f",
                                        "title": "No Sauce",
                                        "price": 0,
                                        "tags": [{"uuid": "8a07474e-e72d-4ffd-a78b-e8f7e1cd7f05", "name": "Smoothie"}]
                                    }],
                                    "minPermitted": 1,
                                    "maxPermitted": 1
                                }],
                                "alcoholicItems": 0,
                                "rawImageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/7beb88087a971e93bdca97c84e58ea16"
                            },
                            "7d9d2add-463e-49ed-a555-bf9291ff9930": {
                                "imageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/200403a0005aa203b81961111ce4d6a8",
                                "itemDescription": "Perfect for a warm summer day: Crispy shrimps with a sweet chili sauce.",
                                "price": 250,
                                "title": "Crispy Shrimps",
                                "uuid": "7d9d2add-463e-49ed-a555-bf9291ff9930",
                                "customizations": []
                            },
                            "e8b18dd9-844e-4958-b597-5afa0ae4a708": {
                                "imageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/09aa647092bdc35b56a5de2621df461a",
                                "itemDescription": "Verwen je smaakpapillen met deze licht zoete friet. Serveertip: Lekker met mayonaise.",
                                "price": 300,
                                "title": "Sweet Potatoes",
                                "uuid": "e8b18dd9-844e-4958-b597-5afa0ae4a708",
                                "customizations": [{
                                    "uuid": "d0ca7f50-977a-46ca-901c-56a7ebd92604",
                                    "title": "Keuze Formaat Sweet Potatoes",
                                    "tags": [{"uuid": "7d39c6c2-7f3e-4aa1-92e3-13b6aefd6e9a", "name": "Size"}],
                                    "options": [{
                                        "uuid": "6c2ecaa6-4915-435f-8110-d5aed6f1ee46",
                                        "title": "Medium",
                                        "price": 0,
                                        "tags": [{
                                            "uuid": "27f793cc-d0a4-4351-93e0-7d8e87a68952",
                                            "name": "Roasted Potatoes"
                                        }]
                                    }, {
                                        "uuid": "31ef7d68-05bc-48b2-a6dd-ed47bbea79a9",
                                        "title": "Groot",
                                        "price": 25,
                                        "tags": [{
                                            "uuid": "27f793cc-d0a4-4351-93e0-7d8e87a68952",
                                            "name": "Roasted Potatoes"
                                        }]
                                    }],
                                    "minPermitted": 1,
                                    "maxPermitted": 1
                                }]
                            },
                            "a8e00fed-afd2-417b-80ff-f9d3d1289a61": {
                                "imageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/7ea97801575972d680b748381c2d5722",
                                "itemDescription": "De enige echte.",
                                "price": 815,
                                "title": "Big Mac Medium Voordeelmenu",
                                "uuid": "a8e00fed-afd2-417b-80ff-f9d3d1289a61",
                                "customizations": [{
                                    "uuid": "a572bbaa-2334-4e1e-bd73-e065438c458e",
                                    "title": "Keuze Formaat Voordeelmenu",
                                    "tags": [{"uuid": "7d39c6c2-7f3e-4aa1-92e3-13b6aefd6e9a", "name": "Size"}],
                                    "options": [{
                                        "uuid": "bd6f0f42-8f47-4084-a5ff-3679dc967153",
                                        "title": "Medium",
                                        "price": 0,
                                        "tags": [{"uuid": "882cedee-2d7a-4019-b46b-227082baeb7c", "name": "Medium"}]
                                    }, {
                                        "uuid": "f9d8f2b7-f8d7-45fd-acae-d28dceeca7b1",
                                        "title": "Groot",
                                        "price": 75,
                                        "tags": [{"uuid": "21f0db62-8d48-433d-a6ea-2fdb1b8b4648", "name": "Large"}]
                                    }],
                                    "minPermitted": 1,
                                    "maxPermitted": 1
                                }, {
                                    "uuid": "5a082968-7cd2-42e1-bef8-c2e46981bada",
                                    "title": "Keuze Side Voordeelmenu",
                                    "tags": [{"uuid": "a39f874d-b5cf-4fbc-ada0-8eedae87ca08", "name": "Add-ons"}],
                                    "options": [{
                                        "uuid": "92d8b029-1cf9-42e3-af83-2be75e5d54d6",
                                        "title": "Franse Frietjes",
                                        "price": 0
                                    }, {
                                        "uuid": "0eb816e4-f72a-4e54-a8d8-de5a42a10d79",
                                        "title": "Sweet Potatoes",
                                        "price": 0
                                    }, {
                                        "uuid": "ec8d8a69-d76f-4e73-9fb3-55e4131b6bc7",
                                        "title": "Side Salad",
                                        "price": 0
                                    }],
                                    "minPermitted": 1,
                                    "maxPermitted": 1
                                }, {
                                    "uuid": "a6df9daf-61e7-46c2-aacf-12e8512fb50a",
                                    "title": "Keuze Drank Voordeelmenu",
                                    "tags": [{"uuid": "a39f874d-b5cf-4fbc-ada0-8eedae87ca08", "name": "Add-ons"}],
                                    "options": [{
                                        "uuid": "0bf5e486-1cd1-4cba-93c5-f3ce9cc43e5b",
                                        "title": "Milk Shake Aardbei",
                                        "price": 100
                                    }, {
                                        "uuid": "a79e81e6-b855-468c-a401-2e658d2d3c38",
                                        "title": "Milk Shake Chocolade",
                                        "price": 100
                                    }, {
                                        "uuid": "82c05c2d-2d8f-465a-81a7-309b25f3928b",
                                        "title": "Milk Shake Vanille",
                                        "price": 100
                                    }, {
                                        "uuid": "f27f4916-2db9-4708-9831-167be20ddcfa",
                                        "title": "Milk Shake Banaan",
                                        "price": 100
                                    }, {
                                        "uuid": "a974bbdf-1360-4866-8037-1aeebc5d5b4e",
                                        "title": "Coca-Cola",
                                        "price": 0
                                    }, {
                                        "uuid": "bbfe462e-ffe4-48b5-bdf4-a92853113c54",
                                        "title": "Coca-Cola Light",
                                        "price": 0
                                    }, {
                                        "uuid": "491bb7b2-57a8-4518-81d4-02bdc6c5e955",
                                        "title": "Coca-Cola Zero",
                                        "price": 0
                                    }, {
                                        "uuid": "07ed7db8-44e9-4069-bf30-542237a7d167",
                                        "title": "Fanta",
                                        "price": 0
                                    }, {
                                        "uuid": "e00267ab-5a82-4b78-8730-036f859227a0",
                                        "title": "Sprite",
                                        "price": 0
                                    }, {
                                        "uuid": "7770f1fe-f3ba-4956-babe-31bfc5096954",
                                        "title": "Lipton Ice Tea",
                                        "price": 0
                                    }, {
                                        "uuid": "ab418880-44ac-43e8-ace0-b533022c1e90",
                                        "title": "SPA",
                                        "price": 0
                                    }, {
                                        "uuid": "0bfdad09-3940-4c71-8dfc-423e996a85e5",
                                        "title": "SPA Rood",
                                        "price": 0
                                    }, {
                                        "uuid": "1474d5cf-8a34-465c-8f92-5a952e346e12",
                                        "title": "Biologische Halfvolle Melk",
                                        "price": 0
                                    }, {
                                        "uuid": "9910afab-4f4b-4d41-afc0-bd2c82897984",
                                        "title": "Vers Sinaasappelsap",
                                        "price": 0
                                    }, {
                                        "uuid": "47863b42-d3b9-4d58-92fd-ef055b4730be",
                                        "title": "Verse Smoothie Aardbei-Banaan",
                                        "price": 0
                                    }, {
                                        "uuid": "99253960-81c3-4d2f-8f80-2bbbe6a62f75",
                                        "title": "Tropicana Appelsap",
                                        "price": 0
                                    }, {
                                        "uuid": "d1584191-9f2c-4124-8175-4925ef2cbffb",
                                        "title": "Fristi",
                                        "price": 100
                                    }, {
                                        "uuid": "c8eb25f6-7589-46c4-810e-abe034dbc2f8",
                                        "title": "Chocomel",
                                        "price": 100
                                    }],
                                    "minPermitted": 1,
                                    "maxPermitted": 1
                                }, {
                                    "uuid": "a4a4f031-3cd0-4701-93a2-4c10bff9eadd",
                                    "title": "Keuze Saus Voordeelmenu",
                                    "tags": [{"uuid": "a39f874d-b5cf-4fbc-ada0-8eedae87ca08", "name": "Add-ons"}],
                                    "options": [{
                                        "uuid": "8c739554-943f-4734-8a80-47fb6190c133",
                                        "title": "Frietsaus",
                                        "price": 60
                                    }, {
                                        "uuid": "333e4b8e-47c1-4555-b1e7-7153a4ebfc8b",
                                        "title": "Frietsaus 2x",
                                        "price": 120
                                    }, {
                                        "uuid": "82f1113e-aeb3-42c2-a9ae-593fd761c29f",
                                        "title": "Mayonaise",
                                        "price": 60
                                    }, {
                                        "uuid": "34775d52-50d7-428b-8a33-7d329d6bb20e",
                                        "title": "Mayonaise 2x",
                                        "price": 120
                                    }, {
                                        "uuid": "c186de63-ce1c-4c60-a5c9-bf29cee72ad7",
                                        "title": "Ketchup",
                                        "price": 60
                                    }, {
                                        "uuid": "e3433f11-fbc7-4cec-af97-5e4d6774bced",
                                        "title": "Ketchup 2x",
                                        "price": 120
                                    }],
                                    "minPermitted": 0,
                                    "maxPermitted": 2
                                }, {
                                    "uuid": "954016ff-350b-45c3-87f8-844807f0ab6d",
                                    "title": "Keuze Voor Erbij Voordeelmenu",
                                    "tags": [{"uuid": "a39f874d-b5cf-4fbc-ada0-8eedae87ca08", "name": "Add-ons"}],
                                    "options": [{
                                        "uuid": "67fcb182-029f-468b-a29d-d5132e3bf653",
                                        "title": "Chicken McNuggets 9 met 2x Barbecuesaus",
                                        "price": 490
                                    }, {
                                        "uuid": "94944d33-bd76-41a8-871f-e683b7aeb4dc",
                                        "title": "Chicken McNuggets 9 met 2x Zoetzure Saus",
                                        "price": 490
                                    }, {
                                        "uuid": "45489cc1-fb4d-4012-bdf1-71af57deadbe",
                                        "title": "Chicken McNuggets 9 met 2x Kerriesaus",
                                        "price": 490
                                    }, {
                                        "uuid": "2b405b5b-d4b0-4ca7-b624-49652b4ed49c",
                                        "title": "Chicken McNuggets 9 met 2x Mosterdsaus",
                                        "price": 490
                                    }],
                                    "minPermitted": 0,
                                    "maxPermitted": 1
                                }],
                                "rawImageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/7ea97801575972d680b748381c2d5722"
                            },
                            "af7cbf8a-d49d-4ccf-8a02-cded2d614a2e": {
                                "imageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/cf75580342522e6aa46347482c16f566",
                                "itemDescription": "Softijs met saus en nootjes. (nootjes apart)",
                                "price": 245,
                                "title": "Sundae IJs met Aardbei en Nootjes",
                                "uuid": "af7cbf8a-d49d-4ccf-8a02-cded2d614a2e",
                                "customizations": [{
                                    "uuid": "5b2c975b-e88f-4851-b569-4fb83a9dc232",
                                    "title": "Keuze Saus Sundae IJs",
                                    "tags": [{
                                        "uuid": "02e1f616-507b-4f3f-8e22-02ac5afbd34d",
                                        "name": "Sauce/Dressing"
                                    }],
                                    "options": [{
                                        "uuid": "90e633be-c43b-43cb-a838-6a1307b60ec6",
                                        "title": "Zonder Saus",
                                        "price": 0,
                                        "tags": [{"uuid": "447030e6-340b-460b-b1cb-915ad88d038e", "name": "Sauce"}]
                                    }],
                                    "minPermitted": 0,
                                    "maxPermitted": 1
                                }],
                                "alcoholicItems": 0,
                                "rawImageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/cf75580342522e6aa46347482c16f566"
                            },
                            "349a64ac-5e88-48f6-a509-c095806ddab6": {
                                "imageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/f25b86dc12ebcc496f5bd797ce231d8c",
                                "itemDescription": "Refreshing Coke.",
                                "price": 285,
                                "title": "Coca-Cola",
                                "uuid": "349a64ac-5e88-48f6-a509-c095806ddab6",
                                "customizations": [{
                                    "uuid": "a9f44270-dcad-470d-a219-cb97833ec752",
                                    "title": "Choose Size Coca Cola",
                                    "tags": [{"uuid": "7d39c6c2-7f3e-4aa1-92e3-13b6aefd6e9a", "name": "Size"}],
                                    "options": [{
                                        "uuid": "9fc357ed-081e-426b-837b-6fe2722f99c1",
                                        "title": "Medium",
                                        "price": 0,
                                        "tags": [{"uuid": "f0cdc452-3731-45c2-8615-748725e085fc", "name": "Soda"}]
                                    }, {
                                        "uuid": "93b29398-cee0-46e9-b8ff-f9a0420bcfed",
                                        "title": "Large",
                                        "price": 30,
                                        "tags": [{"uuid": "f0cdc452-3731-45c2-8615-748725e085fc", "name": "Soda"}]
                                    }],
                                    "minPermitted": 1,
                                    "maxPermitted": 1
                                }],
                                "alcoholicItems": 0,
                                "rawImageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/f25b86dc12ebcc496f5bd797ce231d8c"
                            },
                            "627540f9-8a84-4754-86c7-47a820a8a58e": {
                                "imageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/d63efb29e8d1652734645ac409c9b1de",
                                "itemDescription": "Verfrissende Coca-Cola Zero.",
                                "price": 285,
                                "title": "Coca-Cola Zero",
                                "uuid": "627540f9-8a84-4754-86c7-47a820a8a58e",
                                "customizations": [{
                                    "uuid": "f6673da7-5937-406b-8736-b5961ee6a12e",
                                    "title": "Keuze Formaat Coca Cola Zero",
                                    "tags": [{"uuid": "7d39c6c2-7f3e-4aa1-92e3-13b6aefd6e9a", "name": "Size"}],
                                    "options": [{
                                        "uuid": "a9f71e45-dcfb-453f-9ee8-724b82721996",
                                        "title": "Medium",
                                        "price": 0,
                                        "tags": [{"uuid": "f0cdc452-3731-45c2-8615-748725e085fc", "name": "Soda"}]
                                    }, {
                                        "uuid": "82b337e3-d70a-47ce-85bc-d36d028ee776",
                                        "title": "Groot",
                                        "price": 30,
                                        "tags": [{"uuid": "f0cdc452-3731-45c2-8615-748725e085fc", "name": "Soda"}]
                                    }],
                                    "minPermitted": 1,
                                    "maxPermitted": 1
                                }],
                                "alcoholicItems": 0,
                                "rawImageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/d63efb29e8d1652734645ac409c9b1de"
                            },
                            "f9ccb147-eba2-4743-a8cd-18b42617756d": {
                                "imageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/8e8d1846072becb98dd05ceef82c3e63",
                                "itemDescription": "Een lekkere, kleurrijke slamix met gerookte bacon, jong belegen kaassnippers, een gekookt vrije uitloop eitje, friszure rode appelstukjes, Pomodore tomaatjes, een tuinkruiden crunch en een honing-mosterd dressing.",
                                "price": 595,
                                "title": "Salade Bacon Cheese",
                                "uuid": "f9ccb147-eba2-4743-a8cd-18b42617756d",
                                "suspendUntil": 8640000000,
                                "customizations": [],
                                "suspendReason": "Sold out",
                                "rawImageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/8e8d1846072becb98dd05ceef82c3e63"
                            },
                            "cd368267-0e3d-40ce-a7c9-ad023e347a2c": {
                                "imageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/ecc9bb885c2013991c887ec565513921",
                                "itemDescription": "",
                                "price": 60,
                                "title": "Special Fry Sauce",
                                "uuid": "cd368267-0e3d-40ce-a7c9-ad023e347a2c",
                                "customizations": [],
                                "alcoholicItems": 0,
                                "rawImageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/ecc9bb885c2013991c887ec565513921"
                            },
                            "c712ae0e-8eae-41eb-af66-00c698ee22e7": {
                                "imageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/7bc3a570c0eee909c8dd0c1b7c4446f2",
                                "itemDescription": "",
                                "price": 60,
                                "title": "Curry Sauce",
                                "uuid": "c712ae0e-8eae-41eb-af66-00c698ee22e7",
                                "customizations": [],
                                "alcoholicItems": 0,
                                "rawImageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/7bc3a570c0eee909c8dd0c1b7c4446f2"
                            },
                            "3e97f14e-0c83-4fe7-97b9-16e89bfe7e43": {
                                "imageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/2f22aa39f66dc0ed1483570b56d61a29",
                                "itemDescription": "Two 100% Angus Beef burgers on a special bun. For the true burger lovers.",
                                "price": 665,
                                "title": "Maestro Burger with 100% Angus Beef",
                                "uuid": "3e97f14e-0c83-4fe7-97b9-16e89bfe7e43",
                                "customizations": [],
                                "alcoholicItems": 0,
                                "rawImageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/2f22aa39f66dc0ed1483570b56d61a29"
                            },
                            "085636b2-6a58-4092-a76f-18d5b9eb4a2e": {
                                "imageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/c41d262f2869941ceac6eb3958baa0e0",
                                "itemDescription": "Malse kipfilet op een sesambroodje.",
                                "price": 445,
                                "title": "McChicken",
                                "uuid": "085636b2-6a58-4092-a76f-18d5b9eb4a2e",
                                "customizations": [],
                                "alcoholicItems": 0,
                                "rawImageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/c41d262f2869941ceac6eb3958baa0e0"
                            },
                            "85b07c57-58cb-4b6b-85ae-d6cb82b1b1ac": {
                                "imageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/7afdc93cc76d56eab362a73d63565f5c",
                                "itemDescription": "Fruitige yoghurtdrink.",
                                "price": 235,
                                "title": "Fristi",
                                "uuid": "85b07c57-58cb-4b6b-85ae-d6cb82b1b1ac",
                                "customizations": [],
                                "alcoholicItems": 0,
                                "rawImageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/7afdc93cc76d56eab362a73d63565f5c"
                            },
                            "cb53f55d-a0e2-4c20-8afe-663c7c58adca": {
                                "imageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/fc39ce32c47bb94cc13d23c38fd48554",
                                "itemDescription": "",
                                "price": 60,
                                "title": "Mosterd Saus",
                                "uuid": "cb53f55d-a0e2-4c20-8afe-663c7c58adca",
                                "customizations": [],
                                "alcoholicItems": 0,
                                "rawImageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/fc39ce32c47bb94cc13d23c38fd48554"
                            },
                            "0cc4f4a6-08eb-438b-85b0-29fa1329b2ee": {
                                "imageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/e4a7555fef24d63c4c82419f5941e12e",
                                "itemDescription": "The one and only.",
                                "price": 445,
                                "title": "Big Mac",
                                "uuid": "0cc4f4a6-08eb-438b-85b0-29fa1329b2ee",
                                "customizations": [],
                                "alcoholicItems": 0,
                                "rawImageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/e4a7555fef24d63c4c82419f5941e12e"
                            },
                            "611255ac-e713-459d-ac10-e889a02bb7eb": {
                                "imageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/3ec422a06f02891f15d7655c843389d4",
                                "itemDescription": "Cookie with white chocolate and raspberry, freshly oven baked.",
                                "price": 225,
                                "title": "White Chocolate Raspberry Cookie",
                                "uuid": "611255ac-e713-459d-ac10-e889a02bb7eb",
                                "customizations": [],
                                "alcoholicItems": 0,
                                "rawImageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/3ec422a06f02891f15d7655c843389d4"
                            },
                            "c9d87b89-c053-4136-86d3-9753572e0d28": {
                                "imageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/3c73e1538fc433f9b4361c43b3591070",
                                "itemDescription": "Soft dairy icecream with Caramel & Seasalt.",
                                "price": 335,
                                "title": "McFlurry Caramel-Seasalt",
                                "uuid": "c9d87b89-c053-4136-86d3-9753572e0d28",
                                "customizations": [{
                                    "uuid": "6e548765-2bd7-46e2-ab33-ebe23c69da6c",
                                    "title": "Choose Sauce McFlurry Caramel-Seasalt",
                                    "tags": [{
                                        "uuid": "02e1f616-507b-4f3f-8e22-02ac5afbd34d",
                                        "name": "Sauce/Dressing"
                                    }],
                                    "options": [{
                                        "uuid": "28204a55-271d-4bbc-b896-72bfae2cfbc6",
                                        "title": "Chocolate",
                                        "price": 0,
                                        "tags": [{"uuid": "8a07474e-e72d-4ffd-a78b-e8f7e1cd7f05", "name": "Smoothie"}]
                                    }, {
                                        "uuid": "5c9a8726-3c3a-445a-84e1-8a798a3a1b8e",
                                        "title": "Strawberry",
                                        "price": 0,
                                        "tags": [{"uuid": "8a07474e-e72d-4ffd-a78b-e8f7e1cd7f05", "name": "Smoothie"}]
                                    }, {
                                        "uuid": "e924b78d-86fc-48c2-87c0-6922c92298e2",
                                        "title": "Caramel",
                                        "price": 0,
                                        "tags": [{"uuid": "8a07474e-e72d-4ffd-a78b-e8f7e1cd7f05", "name": "Smoothie"}]
                                    }, {
                                        "uuid": "6e4ae980-a1cd-44f1-9108-de0a4ce2ca4b",
                                        "title": "No Sauce",
                                        "price": 0,
                                        "tags": [{"uuid": "8a07474e-e72d-4ffd-a78b-e8f7e1cd7f05", "name": "Smoothie"}]
                                    }],
                                    "minPermitted": 1,
                                    "maxPermitted": 1
                                }],
                                "rawImageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/3c73e1538fc433f9b4361c43b3591070"
                            },
                            "313a91a4-764c-4ab9-9481-35dc7b120c8b": {
                                "imageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/1fe9000335dbc8d51f3e84946437db70",
                                "itemDescription": "Dubbele Espresso van Segafredo.",
                                "price": 225,
                                "title": "Dubbele Espresso",
                                "uuid": "313a91a4-764c-4ab9-9481-35dc7b120c8b",
                                "customizations": [],
                                "alcoholicItems": 0,
                                "rawImageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/1fe9000335dbc8d51f3e84946437db70"
                            },
                            "ada2ff0a-787a-4431-a2f2-bdaaad5f01e6": {
                                "imageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/8d7540950a79182416e3193e90301e20",
                                "itemDescription": "Verfrissende Lipton Ice Tea.",
                                "price": 285,
                                "title": "Lipton Ice Tea",
                                "uuid": "ada2ff0a-787a-4431-a2f2-bdaaad5f01e6",
                                "customizations": [{
                                    "uuid": "90f98f9d-a87d-481e-90df-f2fe7cfa0d75",
                                    "title": "Keuze Formaat Lipton Ice Tea",
                                    "tags": [{"uuid": "7d39c6c2-7f3e-4aa1-92e3-13b6aefd6e9a", "name": "Size"}],
                                    "options": [{
                                        "uuid": "7b4ac0a1-89fb-4917-b5f9-f619bf006d58",
                                        "title": "Medium",
                                        "price": 0,
                                        "tags": [{"uuid": "f0cdc452-3731-45c2-8615-748725e085fc", "name": "Soda"}]
                                    }, {
                                        "uuid": "0466b994-b449-40bb-9986-9a041ffd863b",
                                        "title": "Groot",
                                        "price": 30,
                                        "tags": [{"uuid": "f0cdc452-3731-45c2-8615-748725e085fc", "name": "Soda"}]
                                    }],
                                    "minPermitted": 1,
                                    "maxPermitted": 1
                                }],
                                "alcoholicItems": 0,
                                "rawImageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/8d7540950a79182416e3193e90301e20"
                            },
                            "88b1d474-6163-497f-8b19-dd59291a9dd9": {
                                "imageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/8e8d1846072becb98dd05ceef82c3e63",
                                "itemDescription": "Een lekkere, kleurrijke slamix met gerookte bacon, jong belegen kaassnippers, een gekookt vrije uitloop eitje, friszure rode appelstukjes, Pomodore tomaatjes, een tuinkruiden crunch en een honing-mosterd dressing.",
                                "price": 595,
                                "title": "Salade Bacon Cheese",
                                "uuid": "88b1d474-6163-497f-8b19-dd59291a9dd9",
                                "suspendUntil": 8640000000,
                                "customizations": [],
                                "suspendReason": "Sold out",
                                "rawImageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/8e8d1846072becb98dd05ceef82c3e63"
                            },
                            "23f7f24a-d1f1-4475-bdbf-404f5cb2038d": {
                                "imageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/3c73e1538fc433f9b4361c43b3591070",
                                "itemDescription": "Soft dairy icecream with Caramel & Seasalt.",
                                "price": 335,
                                "title": "McFlurry Caramel-Seasalt",
                                "uuid": "23f7f24a-d1f1-4475-bdbf-404f5cb2038d",
                                "customizations": [{
                                    "uuid": "c7f1e5da-a5d9-4507-9fef-1d55f9c116d9",
                                    "title": "Choose Sauce McFlurry Caramel-Seasalt",
                                    "tags": [{
                                        "uuid": "02e1f616-507b-4f3f-8e22-02ac5afbd34d",
                                        "name": "Sauce/Dressing"
                                    }],
                                    "options": [{
                                        "uuid": "48951a23-0976-441c-b4cb-f6f397b02ee1",
                                        "title": "Chocolate",
                                        "price": 0,
                                        "tags": [{"uuid": "8a07474e-e72d-4ffd-a78b-e8f7e1cd7f05", "name": "Smoothie"}]
                                    }, {
                                        "uuid": "4651dc4b-1d8d-47fe-aa05-9c16a4806209",
                                        "title": "Strawberry",
                                        "price": 0,
                                        "tags": [{"uuid": "8a07474e-e72d-4ffd-a78b-e8f7e1cd7f05", "name": "Smoothie"}]
                                    }, {
                                        "uuid": "d7095c4b-10a8-45dd-a461-36392d51e00f",
                                        "title": "Caramel",
                                        "price": 0,
                                        "tags": [{"uuid": "8a07474e-e72d-4ffd-a78b-e8f7e1cd7f05", "name": "Smoothie"}]
                                    }, {
                                        "uuid": "d6ece62a-9651-42d1-b8ae-52b46627ef06",
                                        "title": "No Sauce",
                                        "price": 0,
                                        "tags": [{"uuid": "8a07474e-e72d-4ffd-a78b-e8f7e1cd7f05", "name": "Smoothie"}]
                                    }],
                                    "minPermitted": 1,
                                    "maxPermitted": 1
                                }],
                                "rawImageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/3c73e1538fc433f9b4361c43b3591070"
                            },
                            "7ab4df2f-76e2-4004-b4a8-7a7713fd7406": {
                                "imageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/7bc3a570c0eee909c8dd0c1b7c4446f2",
                                "itemDescription": "",
                                "price": 60,
                                "title": "Kerrie Saus",
                                "uuid": "7ab4df2f-76e2-4004-b4a8-7a7713fd7406",
                                "customizations": [],
                                "alcoholicItems": 0,
                                "rawImageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/7bc3a570c0eee909c8dd0c1b7c4446f2"
                            },
                            "1f0d5122-3bb7-4aeb-8cb2-cc7894a28ac6": {
                                "imageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/c757db111695d799544409062c8fe189",
                                "itemDescription": "Soft dairy icecream with Banana & Toffee",
                                "price": 335,
                                "title": "McFlurry Banaan-Toffee",
                                "uuid": "1f0d5122-3bb7-4aeb-8cb2-cc7894a28ac6",
                                "customizations": [{
                                    "uuid": "c6931c22-d37b-4832-bc0d-5945649fed96",
                                    "title": "Choose Sauce McFlurry Banoffee",
                                    "tags": [{
                                        "uuid": "02e1f616-507b-4f3f-8e22-02ac5afbd34d",
                                        "name": "Sauce/Dressing"
                                    }],
                                    "options": [{
                                        "uuid": "ecfa1039-6d05-4abd-9905-d3464e1260fd",
                                        "title": "Chocolate",
                                        "price": 0,
                                        "tags": [{"uuid": "447030e6-340b-460b-b1cb-915ad88d038e", "name": "Sauce"}]
                                    }, {
                                        "uuid": "19f55ca0-4be3-4481-be27-f8704fca20a2",
                                        "title": "Strawberry",
                                        "price": 0,
                                        "tags": [{"uuid": "447030e6-340b-460b-b1cb-915ad88d038e", "name": "Sauce"}]
                                    }, {
                                        "uuid": "a8ffcf92-7d27-494c-a63d-0998ad3489c9",
                                        "title": "Caramel",
                                        "price": 0,
                                        "tags": [{"uuid": "447030e6-340b-460b-b1cb-915ad88d038e", "name": "Sauce"}]
                                    }, {
                                        "uuid": "78a2bf80-f0c0-4b9d-b692-f1b4efdc517f",
                                        "title": "No Sauce",
                                        "price": 0,
                                        "tags": [{"uuid": "447030e6-340b-460b-b1cb-915ad88d038e", "name": "Sauce"}]
                                    }],
                                    "minPermitted": 1,
                                    "maxPermitted": 1
                                }],
                                "rawImageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/c757db111695d799544409062c8fe189"
                            },
                            "e38d5858-cc95-408f-81b8-f22083b51321": {
                                "imageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/7cb9138e9793c4977b90eff9d1274180",
                                "itemDescription": "World famous fries.",
                                "price": 300,
                                "title": "French Fries",
                                "uuid": "e38d5858-cc95-408f-81b8-f22083b51321",
                                "customizations": [{
                                    "uuid": "98855691-cb4b-4b8a-a813-7990d22c150a",
                                    "title": "Choose Size French Fries",
                                    "tags": [{"uuid": "7d39c6c2-7f3e-4aa1-92e3-13b6aefd6e9a", "name": "Size"}],
                                    "options": [{
                                        "uuid": "685d0011-f8b2-45d6-8c75-7caf3d2e2fd4",
                                        "title": "Medium",
                                        "price": 0,
                                        "tags": [{
                                            "uuid": "27f793cc-d0a4-4351-93e0-7d8e87a68952",
                                            "name": "Roasted Potatoes"
                                        }]
                                    }, {
                                        "uuid": "4c65dd1b-f403-4e8d-a744-5bb84cebe02a",
                                        "title": "Large",
                                        "price": 25,
                                        "tags": [{
                                            "uuid": "27f793cc-d0a4-4351-93e0-7d8e87a68952",
                                            "name": "Roasted Potatoes"
                                        }]
                                    }],
                                    "minPermitted": 1,
                                    "maxPermitted": 1
                                }],
                                "alcoholicItems": 0,
                                "rawImageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/7cb9138e9793c4977b90eff9d1274180"
                            },
                            "faf18e72-7a0e-457d-9d40-8a0059d219ac": {
                                "imageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/e421135d9013f8b9888af65edbb6b41b",
                                "itemDescription": "Visfilet met Cheddar Smeltkaas en tartaarsaus op een gestoomd broodje.",
                                "price": 815,
                                "title": "Filet-O-Fish Medium Voordeelmenu",
                                "uuid": "faf18e72-7a0e-457d-9d40-8a0059d219ac",
                                "customizations": [{
                                    "uuid": "7b15a723-384e-49e7-8d67-929fe7ad9d2d",
                                    "title": "Keuze Formaat Voordeelmenu",
                                    "tags": [{"uuid": "7d39c6c2-7f3e-4aa1-92e3-13b6aefd6e9a", "name": "Size"}],
                                    "options": [{
                                        "uuid": "32c0208a-f880-4b32-9521-4a2a0e7ec650",
                                        "title": "Medium",
                                        "price": 0,
                                        "tags": [{"uuid": "882cedee-2d7a-4019-b46b-227082baeb7c", "name": "Medium"}]
                                    }, {
                                        "uuid": "a5b1b3c6-160d-40be-a92d-61aad00de945",
                                        "title": "Groot",
                                        "price": 75,
                                        "tags": [{"uuid": "21f0db62-8d48-433d-a6ea-2fdb1b8b4648", "name": "Large"}]
                                    }],
                                    "minPermitted": 1,
                                    "maxPermitted": 1
                                }, {
                                    "uuid": "7aebdc37-053d-4fa3-b0ad-93589f0f2a59",
                                    "title": "Keuze Side Voordeelmenu",
                                    "tags": [{"uuid": "a39f874d-b5cf-4fbc-ada0-8eedae87ca08", "name": "Add-ons"}],
                                    "options": [{
                                        "uuid": "a4136e7a-0d34-40a0-baac-46ce394201a3",
                                        "title": "Franse Frietjes",
                                        "price": 0
                                    }, {
                                        "uuid": "8ce86124-acd7-4c2b-b4e8-12ba09b2daf6",
                                        "title": "Sweet Potatoes",
                                        "price": 0
                                    }, {
                                        "uuid": "afec3ca4-84c9-4ac2-ae60-1ce11c527ffd",
                                        "title": "Side Salad",
                                        "price": 0
                                    }],
                                    "minPermitted": 1,
                                    "maxPermitted": 1
                                }, {
                                    "uuid": "f5e14e20-fafe-49b5-be9a-4e84575268e3",
                                    "title": "Keuze Drank Voordeelmenu",
                                    "tags": [{"uuid": "a39f874d-b5cf-4fbc-ada0-8eedae87ca08", "name": "Add-ons"}],
                                    "options": [{
                                        "uuid": "2acf0073-a428-4397-bd16-cb3bb950f5cd",
                                        "title": "Milk Shake Aardbei",
                                        "price": 100
                                    }, {
                                        "uuid": "29bc0193-ced6-467c-83c9-0cf86b20e4e2",
                                        "title": "Milk Shake Chocolade",
                                        "price": 100
                                    }, {
                                        "uuid": "13fea86f-707b-425d-a9ee-6967bf8e3af0",
                                        "title": "Milk Shake Vanille",
                                        "price": 100
                                    }, {
                                        "uuid": "40e09bb2-b700-4bc5-ba80-9212623c7b30",
                                        "title": "Milk Shake Banaan",
                                        "price": 100
                                    }, {
                                        "uuid": "6c5f90a9-b05f-4e6c-a819-e183ab05c044",
                                        "title": "Coca-Cola",
                                        "price": 0
                                    }, {
                                        "uuid": "3040b792-f84f-499c-8281-8593fdf75396",
                                        "title": "Coca-Cola Light",
                                        "price": 0
                                    }, {
                                        "uuid": "eac4d65d-634f-4416-9002-b1e0fa1e16e2",
                                        "title": "Coca-Cola Zero",
                                        "price": 0
                                    }, {
                                        "uuid": "fbed3d44-4c43-49b9-a8b6-c155b979ef55",
                                        "title": "Fanta",
                                        "price": 0
                                    }, {
                                        "uuid": "61e3853f-f784-4d32-a400-6606e30dc39a",
                                        "title": "Sprite",
                                        "price": 0
                                    }, {
                                        "uuid": "a4399cea-d82f-48d3-8f8d-92fb65e30b41",
                                        "title": "Lipton Ice Tea",
                                        "price": 0
                                    }, {
                                        "uuid": "92f0024c-1b34-4c6c-8e5f-bd4467b0f724",
                                        "title": "SPA",
                                        "price": 0
                                    }, {
                                        "uuid": "5e18d05e-3d8d-484a-acc9-05e21b368020",
                                        "title": "SPA Rood",
                                        "price": 0
                                    }, {
                                        "uuid": "c1ae0812-b0ae-4ada-b3d7-d5fe49a38a68",
                                        "title": "Biologische Halfvolle Melk",
                                        "price": 0
                                    }, {
                                        "uuid": "e1b83989-b7d5-49b2-9f71-ed01c5e918e4",
                                        "title": "Vers Sinaasappelsap",
                                        "price": 0
                                    }, {
                                        "uuid": "f338ff5c-4bb9-45da-a916-89638f651d52",
                                        "title": "Verse Smoothie Aardbei-Banaan",
                                        "price": 0
                                    }, {
                                        "uuid": "38540af7-d40b-42c4-ba1e-49eb43fa903f",
                                        "title": "Tropicana Appelsap",
                                        "price": 0
                                    }, {
                                        "uuid": "ce13efe6-2f07-4014-8e5f-d2d30a1379a9",
                                        "title": "Fristi",
                                        "price": 100
                                    }, {
                                        "uuid": "d1c5b533-93b5-422a-8f69-c5bbbabd0676",
                                        "title": "Chocomel",
                                        "price": 100
                                    }],
                                    "minPermitted": 1,
                                    "maxPermitted": 1
                                }, {
                                    "uuid": "dbeef30e-30ad-427d-85dc-7e627f7507e2",
                                    "title": "Keuze Saus Voordeelmenu",
                                    "tags": [{"uuid": "a39f874d-b5cf-4fbc-ada0-8eedae87ca08", "name": "Add-ons"}],
                                    "options": [{
                                        "uuid": "0ee7c049-1093-44ca-b064-ff9883dde7fd",
                                        "title": "Frietsaus",
                                        "price": 60
                                    }, {
                                        "uuid": "7bb80a1b-8d41-4c4c-a79c-e18acd34c0c5",
                                        "title": "Frietsaus 2x",
                                        "price": 120
                                    }, {
                                        "uuid": "331975a7-7a0b-44b1-a010-73cc8304d68e",
                                        "title": "Mayonaise",
                                        "price": 60
                                    }, {
                                        "uuid": "1b08fd9c-6672-4aa9-813d-dbc332ad85d5",
                                        "title": "Mayonaise 2x",
                                        "price": 120
                                    }, {
                                        "uuid": "a58e2ed4-47e6-414a-acba-be576473cd43",
                                        "title": "Ketchup",
                                        "price": 60
                                    }, {
                                        "uuid": "819edce1-abdc-4d33-8280-f6d77334f058",
                                        "title": "Ketchup 2x",
                                        "price": 120
                                    }],
                                    "minPermitted": 0,
                                    "maxPermitted": 2
                                }, {
                                    "uuid": "2b1eace5-41f5-4eea-8eaf-11b696ca5534",
                                    "title": "Keuze Voor Erbij Voordeelmenu",
                                    "tags": [{"uuid": "a39f874d-b5cf-4fbc-ada0-8eedae87ca08", "name": "Add-ons"}],
                                    "options": [{
                                        "uuid": "436d6fb0-d312-4840-b88d-fd1717f17c1f",
                                        "title": "Chicken McNuggets 9 met 2x Barbecuesaus",
                                        "price": 490
                                    }, {
                                        "uuid": "07865c9f-8b92-4db1-8756-edc502e7ad6a",
                                        "title": "Chicken McNuggets 9 met 2x Zoetzure Saus",
                                        "price": 490
                                    }, {
                                        "uuid": "ce4cd2ab-5d15-4233-9b75-2ba6c682a99c",
                                        "title": "Chicken McNuggets 9 met 2x Kerriesaus",
                                        "price": 490
                                    }, {
                                        "uuid": "c62e223a-ec2a-4b4d-8f21-a2c287ff5d2c",
                                        "title": "Chicken McNuggets 9 met 2x Mosterdsaus",
                                        "price": 490
                                    }],
                                    "minPermitted": 0,
                                    "maxPermitted": 1
                                }],
                                "rawImageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/e421135d9013f8b9888af65edbb6b41b"
                            },
                            "3ffb9613-cfa9-4a3a-ad5b-e0704a27314a": {
                                "imageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/6300b047b7f2abe20786bf5259937957",
                                "itemDescription": "Milk Shake met de smaak aardbei.",
                                "price": 325,
                                "title": "Milk Shake Aardbei",
                                "uuid": "3ffb9613-cfa9-4a3a-ad5b-e0704a27314a",
                                "customizations": [{
                                    "uuid": "c6c1f99d-cea4-4546-8faf-6a0dff88b5f7",
                                    "title": "Keuze Formaat Milk Shake Aardbei",
                                    "tags": [{"uuid": "7d39c6c2-7f3e-4aa1-92e3-13b6aefd6e9a", "name": "Size"}],
                                    "options": [{
                                        "uuid": "ce1001f4-ecd0-4d0b-809c-c0eb82b1274d",
                                        "title": "Medium",
                                        "price": 0,
                                        "tags": [{"uuid": "d0430b75-1545-45aa-9cd5-8678c4657b66", "name": "Milk"}]
                                    }, {
                                        "uuid": "dfd7c68e-1173-43ae-9842-dd260b63f331",
                                        "title": "Groot",
                                        "price": 20,
                                        "tags": [{"uuid": "d0430b75-1545-45aa-9cd5-8678c4657b66", "name": "Milk"}]
                                    }],
                                    "minPermitted": 1,
                                    "maxPermitted": 1
                                }],
                                "alcoholicItems": 0,
                                "rawImageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/6300b047b7f2abe20786bf5259937957"
                            },
                            "fc4a5097-5802-48d6-99a0-0a97cd9da6ab": {
                                "imageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/41a22177a6160f2f91707e90e14b46af",
                                "itemDescription": "A delicious green lettuce mix with marinated and grilled chicken, fresh pieces of red apple, corn, Pomodore tomatoes, paprika flavoured crunch and a delicious curry-apple dressing.",
                                "price": 595,
                                "title": "Salad Chili Chicken",
                                "uuid": "fc4a5097-5802-48d6-99a0-0a97cd9da6ab",
                                "customizations": [],
                                "rawImageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/41a22177a6160f2f91707e90e14b46af"
                            },
                            "21d4a49b-eac9-4d60-a678-ef8f5d07dca1": {
                                "imageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/200403a0005aa203b81961111ce4d6a8",
                                "itemDescription": "Perfect for a warm summer day: Crispy shrimps with a sweet chili sauce.",
                                "price": 250,
                                "title": "Crispy Shrimps",
                                "uuid": "21d4a49b-eac9-4d60-a678-ef8f5d07dca1",
                                "customizations": []
                            },
                            "b5667a59-8772-4a09-b4ff-557f23b56ce2": {
                                "imageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/5731d66b1dc37b84678ee7dd1a14f566",
                                "itemDescription": "100% biologische halfvolle melk van Campina.",
                                "price": 235,
                                "title": "Biologische Halfvolle Melk",
                                "uuid": "b5667a59-8772-4a09-b4ff-557f23b56ce2",
                                "customizations": [],
                                "alcoholicItems": 0,
                                "rawImageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/5731d66b1dc37b84678ee7dd1a14f566"
                            },
                            "66a6a689-7e6a-42db-af99-5e0e61945c39": {
                                "imageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/295394cc1a611e58f8e9891da496663c",
                                "itemDescription": "Two 100% Angus Beef burgers with naturally aged cheddar cheese, Batavia lettuce, Chimichurri sauce, Pico de Gallo salsa, Nacho chips and delicious guacamole on a special sesame & poppyseed bun.",
                                "price": 1025,
                                "title": "Maestro Guacamole Medium Value Meal",
                                "uuid": "66a6a689-7e6a-42db-af99-5e0e61945c39",
                                "customizations": [{
                                    "uuid": "af21ff62-8f7a-4e94-a9a3-c4289ec6db95",
                                    "title": "Choose Size Value Meal",
                                    "tags": [{"uuid": "7d39c6c2-7f3e-4aa1-92e3-13b6aefd6e9a", "name": "Size"}],
                                    "options": [{
                                        "uuid": "7d0acbb0-257c-4b2c-942d-14ec7095f32d",
                                        "title": "Medium",
                                        "price": 0,
                                        "tags": [{"uuid": "882cedee-2d7a-4019-b46b-227082baeb7c", "name": "Medium"}]
                                    }, {
                                        "uuid": "2e3940ce-ade3-4da1-bbe3-e25f72f3f2e5",
                                        "title": "Large",
                                        "price": 75,
                                        "tags": [{"uuid": "21f0db62-8d48-433d-a6ea-2fdb1b8b4648", "name": "Large"}]
                                    }],
                                    "minPermitted": 1,
                                    "maxPermitted": 1
                                }, {
                                    "uuid": "8bfc2128-77e8-48e6-bc77-311bb907c911",
                                    "title": "Choose Side Value Meal",
                                    "tags": [{"uuid": "a39f874d-b5cf-4fbc-ada0-8eedae87ca08", "name": "Add-ons"}],
                                    "options": [{
                                        "uuid": "2d71e88e-11be-42b5-b61c-4e94097d7676",
                                        "title": "French Fries",
                                        "price": 0
                                    }, {
                                        "uuid": "38b2dd55-caef-4d91-ae5e-eaa72527b7a4",
                                        "title": "Sweet Potatoes",
                                        "price": 0
                                    }, {
                                        "uuid": "55fb6c39-fe9f-42da-a0b7-623d4655cdc7",
                                        "title": "Side Salad",
                                        "price": 0
                                    }],
                                    "minPermitted": 1,
                                    "maxPermitted": 1
                                }, {
                                    "uuid": "545f4094-f8af-4056-907b-55c3ef47306d",
                                    "title": "Choose Drink Value Meal",
                                    "tags": [{"uuid": "a39f874d-b5cf-4fbc-ada0-8eedae87ca08", "name": "Add-ons"}],
                                    "options": [{
                                        "uuid": "fb626313-cd18-45fa-96ec-467f8d9c7ede",
                                        "title": "Milk Shake Strawberry",
                                        "price": 100
                                    }, {
                                        "uuid": "c645fa2a-ac64-4d0d-9def-1839421d16fe",
                                        "title": "Milk Shake Choco",
                                        "price": 100
                                    }, {
                                        "uuid": "a8d866cc-78b4-4a2b-b551-60cf820e9f53",
                                        "title": "Milk Shake Vanilla",
                                        "price": 100
                                    }, {
                                        "uuid": "379b1a02-f7ce-40c6-bb3f-458cebc9d0b2",
                                        "title": "Milk Shake Banana",
                                        "price": 100
                                    }, {
                                        "uuid": "f45a7a99-5a4d-4c9e-8aa3-951ad8eb7e02",
                                        "title": "Coca-Cola",
                                        "price": 0
                                    }, {
                                        "uuid": "f80bc2fe-c6c2-4284-b230-0041e728033d",
                                        "title": "Coca-Cola Light",
                                        "price": 0
                                    }, {
                                        "uuid": "067c3f13-73bf-462b-86c8-6d083f454c19",
                                        "title": "Coca-Cola Zero",
                                        "price": 0
                                    }, {
                                        "uuid": "da70f609-cf60-4776-bf9c-c9f96cccf362",
                                        "title": "Fanta",
                                        "price": 0
                                    }, {
                                        "uuid": "10ca74b8-5dc8-4dec-a549-69750148b570",
                                        "title": "Sprite",
                                        "price": 0
                                    }, {
                                        "uuid": "bb6fd522-4a4a-4fd0-80a4-4f88202d36f8",
                                        "title": "Lipton Ice Tea",
                                        "price": 0
                                    }, {
                                        "uuid": "1b9e9d09-b0fa-45c7-babc-95c4c62b4371",
                                        "title": "SPA",
                                        "price": 0
                                    }, {
                                        "uuid": "6538a186-66fb-4d44-b581-9c1a879df9f2",
                                        "title": "SPA Rood",
                                        "price": 0
                                    }, {
                                        "uuid": "04f786fd-dd5b-45a0-a4af-7d6a6b01f536",
                                        "title": "Semi-skimmed Milk",
                                        "price": 0
                                    }, {
                                        "uuid": "4ef3d29c-4756-412a-b2be-bd3215e6290a",
                                        "title": "Fresh Orange juice",
                                        "price": 0
                                    }, {
                                        "uuid": "c3410cbc-f80f-4f50-920f-c8cc339861b3",
                                        "title": "Fresh Smoothie Strawberry Banana",
                                        "price": 0
                                    }, {
                                        "uuid": "4bb6b665-b480-4183-8020-7cb9bb7a06a0",
                                        "title": "Tropicana Apple Juice",
                                        "price": 0
                                    }, {
                                        "uuid": "8b341d98-8ebb-42d4-afbd-93072bc4de73",
                                        "title": "Fristi",
                                        "price": 70
                                    }, {
                                        "uuid": "4e6b981c-5687-4012-9239-4f96dab76705",
                                        "title": "Chocomel",
                                        "price": 70
                                    }],
                                    "minPermitted": 1,
                                    "maxPermitted": 1
                                }, {
                                    "uuid": "e6e71ded-cc20-4fb0-9637-e4ca08ab40a8",
                                    "title": "Choose Sauce Value Meal",
                                    "tags": [{"uuid": "a39f874d-b5cf-4fbc-ada0-8eedae87ca08", "name": "Add-ons"}],
                                    "options": [{
                                        "uuid": "996b8873-13fa-4372-a097-73f97680963e",
                                        "title": "Fries Sauce",
                                        "price": 60
                                    }, {
                                        "uuid": "00593b16-82ed-4ab5-9e0d-f5cffb49f413",
                                        "title": "Fries Sauce 2x",
                                        "price": 120
                                    }, {
                                        "uuid": "fddaa8fd-d56d-46b0-9335-cdd9a71ecc3f",
                                        "title": "Mayonnaise",
                                        "price": 60
                                    }, {
                                        "uuid": "56a658e1-e221-46d0-a7dd-110d049488d0",
                                        "title": "Mayonnaise 2x",
                                        "price": 120
                                    }, {
                                        "uuid": "cd12beba-d8ff-4303-aa9c-0e66a7b91e04",
                                        "title": "Ketchup",
                                        "price": 60
                                    }, {
                                        "uuid": "f1e82d09-eeda-4f85-8876-519bb654fcbe",
                                        "title": "Ketchup 2x",
                                        "price": 120
                                    }],
                                    "minPermitted": 0,
                                    "maxPermitted": 2
                                }, {
                                    "uuid": "b11e3714-5bb4-4385-8f5e-d896dd524b9d",
                                    "title": "Choose Side Order Value Meal",
                                    "tags": [{"uuid": "a39f874d-b5cf-4fbc-ada0-8eedae87ca08", "name": "Add-ons"}],
                                    "options": [{
                                        "uuid": "42ee0f81-6e64-4b37-af66-d710c9e5782f",
                                        "title": "Chicken McNuggets 9 with 2x Barbecue Sauce",
                                        "price": 490
                                    }, {
                                        "uuid": "70e43b0a-718f-424d-b834-e4d955d4463b",
                                        "title": "Chicken McNuggets 9 with 2x Sweet and Sour Sauce",
                                        "price": 490
                                    }, {
                                        "uuid": "248308af-b98b-4973-8ece-17a434831ca7",
                                        "title": "Chicken McNuggets 9 with 2x Curry Sauce",
                                        "price": 490
                                    }, {
                                        "uuid": "4e209206-39cb-4483-a545-188e472d6dbf",
                                        "title": "Chicken McNuggets 9 with 2x Mustard Sauce",
                                        "price": 490
                                    }],
                                    "minPermitted": 0,
                                    "maxPermitted": 1
                                }]
                            },
                            "5de54ca7-4c23-4c42-b4d7-4bb097560844": {
                                "imageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/aeeed66ac70e199e8e9918de00ba3194",
                                "itemDescription": "Refreshing Diet Coke.",
                                "price": 285,
                                "title": "Coca-Cola Light",
                                "uuid": "5de54ca7-4c23-4c42-b4d7-4bb097560844",
                                "customizations": [{
                                    "uuid": "22e3eb0e-dc7e-4b0b-b220-f8e80cce1b2f",
                                    "title": "Choose Size Coca Cola Light",
                                    "tags": [{"uuid": "7d39c6c2-7f3e-4aa1-92e3-13b6aefd6e9a", "name": "Size"}],
                                    "options": [{
                                        "uuid": "26d6407a-7e64-43dd-a69f-b6acaadf4188",
                                        "title": "Medium",
                                        "price": 0,
                                        "tags": [{"uuid": "f0cdc452-3731-45c2-8615-748725e085fc", "name": "Soda"}]
                                    }, {
                                        "uuid": "23e83ab6-ea9b-47ff-aace-47f536fd7db1",
                                        "title": "Large",
                                        "price": 30,
                                        "tags": [{"uuid": "f0cdc452-3731-45c2-8615-748725e085fc", "name": "Soda"}]
                                    }],
                                    "minPermitted": 1,
                                    "maxPermitted": 1
                                }],
                                "alcoholicItems": 0,
                                "rawImageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/aeeed66ac70e199e8e9918de00ba3194"
                            },
                            "0d58fd65-1270-4f7a-a4a0-9eec760c44ff": {
                                "imageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/8b4810626fe90971ee685a90b96584fb",
                                "itemDescription": "Forget everything you know about the taste of chicken. New on the menu is the Homestyle Crispy Chicken. Homestyle marinated chicken burger, juicy on the inside and crispy on the outside. With a luxurious sesame bun, naturally aged cheddar cheese, long crispy bacon strips (pork), Batavia lettuce, red onions and caramelized onion compote. The spicy Pimento sauce makes the finishing touch.",
                                "price": 790,
                                "title": "Homestyle Crispy Chicken Medium Value Meal",
                                "uuid": "0d58fd65-1270-4f7a-a4a0-9eec760c44ff",
                                "customizations": [{
                                    "uuid": "bafed532-5a2e-4f39-a58d-f52d0f60b06d",
                                    "title": "Choose Size Value Meal",
                                    "tags": [{"uuid": "7d39c6c2-7f3e-4aa1-92e3-13b6aefd6e9a", "name": "Size"}],
                                    "options": [{
                                        "uuid": "c7bb0ffd-a36e-4150-b365-d18ff753f0b0",
                                        "title": "Medium",
                                        "price": 0,
                                        "tags": [{"uuid": "882cedee-2d7a-4019-b46b-227082baeb7c", "name": "Medium"}]
                                    }, {
                                        "uuid": "e53ed75e-6630-4ead-9c9b-718fbd605905",
                                        "title": "Large",
                                        "price": 75,
                                        "tags": [{"uuid": "21f0db62-8d48-433d-a6ea-2fdb1b8b4648", "name": "Large"}]
                                    }],
                                    "minPermitted": 1,
                                    "maxPermitted": 1
                                }, {
                                    "uuid": "a6683665-2ed0-4337-91c7-95af4bed9545",
                                    "title": "Choose Side Value Meal",
                                    "tags": [{"uuid": "a39f874d-b5cf-4fbc-ada0-8eedae87ca08", "name": "Add-ons"}],
                                    "options": [{
                                        "uuid": "5fc5830f-77b1-45d0-972b-772f81c224b4",
                                        "title": "French Fries",
                                        "price": 0
                                    }, {
                                        "uuid": "28a9f01c-3237-4889-b63a-5e974175490f",
                                        "title": "Sweet Potatoes",
                                        "price": 0
                                    }, {
                                        "uuid": "65d9cd34-2508-48ee-988a-045585da9e66",
                                        "title": "Side Salad",
                                        "price": 0
                                    }],
                                    "minPermitted": 1,
                                    "maxPermitted": 1
                                }, {
                                    "uuid": "cc3bbe10-dd92-4b0e-87da-7781489a9574",
                                    "title": "Choose Drink Value Meal",
                                    "tags": [{"uuid": "a39f874d-b5cf-4fbc-ada0-8eedae87ca08", "name": "Add-ons"}],
                                    "options": [{
                                        "uuid": "6a22335c-b1b2-4a8d-82a3-4610b421bff9",
                                        "title": "Milk Shake Strawberry",
                                        "price": 100
                                    }, {
                                        "uuid": "740c89d3-1e27-4898-938b-e5d94f7affd8",
                                        "title": "Milk Shake Choco",
                                        "price": 100
                                    }, {
                                        "uuid": "b033fb95-edf3-4809-b125-262105783a80",
                                        "title": "Milk Shake Vanilla",
                                        "price": 100
                                    }, {
                                        "uuid": "723c5570-911b-4f4f-b95a-546496ea68d8",
                                        "title": "Milk Shake Banana",
                                        "price": 100
                                    }, {
                                        "uuid": "f355d0ec-001a-4d7d-aa11-8af48b0ea5ca",
                                        "title": "Coca-Cola",
                                        "price": 0
                                    }, {
                                        "uuid": "98070b3b-5f44-4155-918b-42fd1a765040",
                                        "title": "Coca-Cola Light",
                                        "price": 0
                                    }, {
                                        "uuid": "d108dccb-5a80-416e-a87e-db5bf11e8294",
                                        "title": "Coca-Cola Zero",
                                        "price": 0
                                    }, {
                                        "uuid": "3af6d384-3146-406a-b3b8-402efa44085f",
                                        "title": "Fanta",
                                        "price": 0
                                    }, {
                                        "uuid": "e14ba326-06d0-4cfe-a9f5-48bf4a5517a4",
                                        "title": "Sprite",
                                        "price": 0
                                    }, {
                                        "uuid": "885d58cb-c8c8-4339-927d-85565fc90ae4",
                                        "title": "Lipton Ice Tea",
                                        "price": 0
                                    }, {
                                        "uuid": "f1792fce-616c-4c37-9cb8-68b7b12ccacf",
                                        "title": "SPA",
                                        "price": 0
                                    }, {
                                        "uuid": "dbc285be-3296-4b40-879c-f2974fe7b353",
                                        "title": "SPA Rood",
                                        "price": 0
                                    }, {
                                        "uuid": "02e953b7-7ad7-4b21-b648-3184019d71d0",
                                        "title": "Semi-skimmed Milk",
                                        "price": 0
                                    }, {
                                        "uuid": "d470891e-4bbe-4e6d-b78c-843e51ddc91e",
                                        "title": "Fresh Orange juice",
                                        "price": 0
                                    }, {
                                        "uuid": "ba3b3918-9def-4d45-8613-37fee6b46e8e",
                                        "title": "Fresh Smoothie Strawberry Banana",
                                        "price": 0
                                    }, {
                                        "uuid": "73edb69b-8fc9-43cc-9fdf-3a865caa7821",
                                        "title": "Tropicana Apple Juice",
                                        "price": 0
                                    }, {
                                        "uuid": "707143cc-efa7-4cd9-9c6e-48a90ff428f9",
                                        "title": "Fristi",
                                        "price": 70
                                    }, {
                                        "uuid": "ffb7f835-1e6a-45e7-ba09-106b5433ca0f",
                                        "title": "Chocomel",
                                        "price": 70
                                    }],
                                    "minPermitted": 1,
                                    "maxPermitted": 1
                                }, {
                                    "uuid": "b389ea1e-31a8-48b7-9b55-97cd7761c646",
                                    "title": "Choose Sauce Value Meal",
                                    "tags": [{"uuid": "a39f874d-b5cf-4fbc-ada0-8eedae87ca08", "name": "Add-ons"}],
                                    "options": [{
                                        "uuid": "594e1a37-0cec-4e22-a2fa-030daed9143e",
                                        "title": "Fries Sauce",
                                        "price": 60
                                    }, {
                                        "uuid": "40d79456-18ca-4d67-9eac-941f5669e65a",
                                        "title": "Fries Sauce 2x",
                                        "price": 120
                                    }, {
                                        "uuid": "c52fd695-26cc-4e4b-80eb-9dda6e30ec03",
                                        "title": "Mayonnaise",
                                        "price": 60
                                    }, {
                                        "uuid": "4e615dbd-97d2-42da-a86e-4ebf1302bdef",
                                        "title": "Mayonnaise 2x",
                                        "price": 120
                                    }, {
                                        "uuid": "9cd971e6-9f60-4e23-9da9-48c4f81052ea",
                                        "title": "Ketchup",
                                        "price": 60
                                    }, {
                                        "uuid": "d08e0a2d-1364-4177-b8a3-6dd9c487e7ea",
                                        "title": "Ketchup 2x",
                                        "price": 120
                                    }],
                                    "minPermitted": 0,
                                    "maxPermitted": 2
                                }, {
                                    "uuid": "9068e3a9-a950-4377-b246-5d10bc49cf70",
                                    "title": "Choose Side Order Value Meal",
                                    "tags": [{"uuid": "a39f874d-b5cf-4fbc-ada0-8eedae87ca08", "name": "Add-ons"}],
                                    "options": [{
                                        "uuid": "ee9715f5-ca11-43da-8ffe-c6e300481b96",
                                        "title": "Chicken McNuggets 9 with 2x Barbecue Sauce",
                                        "price": 490
                                    }, {
                                        "uuid": "cc6b39f4-36c1-442e-a688-b0e202218b64",
                                        "title": "Chicken McNuggets 9 with 2x Sweet and Sour Sauce",
                                        "price": 490
                                    }, {
                                        "uuid": "f84a9676-4ad6-4923-9d42-179a4e561026",
                                        "title": "Chicken McNuggets 9 with 2x Curry Sauce",
                                        "price": 490
                                    }, {
                                        "uuid": "d703c336-f0df-4dc0-941b-490816e8d21f",
                                        "title": "Chicken McNuggets 9 with 2x Mustard Sauce",
                                        "price": 490
                                    }],
                                    "minPermitted": 0,
                                    "maxPermitted": 1
                                }],
                                "rawImageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/8b4810626fe90971ee685a90b96584fb"
                            },
                            "504cb7ba-ce54-4f87-b02f-c493e048caa5": {
                                "imageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/665ed230cd0c1e652c319a265369c35c",
                                "itemDescription": "Side salad with different types of lettuce and a vinaigrette dressing.",
                                "price": 230,
                                "title": "Side Salad",
                                "uuid": "504cb7ba-ce54-4f87-b02f-c493e048caa5",
                                "customizations": [],
                                "alcoholicItems": 0,
                                "rawImageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/665ed230cd0c1e652c319a265369c35c"
                            },
                            "fe648743-9790-4b6a-9bff-70d6bd07700d": {
                                "imageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/f119f6344b7a2eb07f0e3c97d8aeab2d",
                                "itemDescription": "Mixed fruit.",
                                "price": 200,
                                "title": "Fresh Fruit",
                                "uuid": "fe648743-9790-4b6a-9bff-70d6bd07700d",
                                "customizations": [],
                                "alcoholicItems": 0,
                                "rawImageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/f119f6344b7a2eb07f0e3c97d8aeab2d"
                            },
                            "1c035bb7-c410-451c-9a6a-f3455f889e66": {
                                "imageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/5731d66b1dc37b84678ee7dd1a14f566",
                                "itemDescription": "Campina's semi-skimmed milk.",
                                "price": 235,
                                "title": "Semi-skimmed Milk",
                                "uuid": "1c035bb7-c410-451c-9a6a-f3455f889e66",
                                "customizations": [],
                                "alcoholicItems": 0,
                                "rawImageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/5731d66b1dc37b84678ee7dd1a14f566"
                            },
                            "e47b42c6-a7dc-47f1-bdbe-e694e62c070f": {
                                "imageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/e5017eaa7375bf49cdb19b3318a62a5a",
                                "itemDescription": "Two 100% Angus Beef burgers with naturally aged cheddar cheese, Batavia lettuce, Chimichurri sauce, Pico de Gallo salsa, Nacho chips and delicious guacamole on a special sesame & poppyseed bun.",
                                "price": 665,
                                "title": "Maestro Guacamole",
                                "uuid": "e47b42c6-a7dc-47f1-bdbe-e694e62c070f",
                                "customizations": []
                            },
                            "b8c558b5-888b-42a4-91aa-c21cba716876": {
                                "imageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/e0bd47da83ae9fcc430cb6a04b549dde",
                                "itemDescription": "",
                                "price": 60,
                                "title": "Mayonaise",
                                "uuid": "b8c558b5-888b-42a4-91aa-c21cba716876",
                                "customizations": [],
                                "alcoholicItems": 0,
                                "rawImageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/e0bd47da83ae9fcc430cb6a04b549dde"
                            },
                            "307acb2d-fc01-42dd-acb0-dc0056141aab": {
                                "imageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/3c73e1538fc433f9b4361c43b3591070",
                                "itemDescription": "Softijs met stukjes Karamel-Zeezout.",
                                "price": 335,
                                "title": "McFlurry Karamel-Zeezout",
                                "uuid": "307acb2d-fc01-42dd-acb0-dc0056141aab",
                                "customizations": [{
                                    "uuid": "d2398ca0-c016-4b40-9ae7-3e8a31e94d86",
                                    "title": "Keuze Saus McFlurry Karamel-Zeezout",
                                    "tags": [{
                                        "uuid": "02e1f616-507b-4f3f-8e22-02ac5afbd34d",
                                        "name": "Sauce/Dressing"
                                    }],
                                    "options": [{
                                        "uuid": "07db193b-c52e-48d8-ba94-e227b2ab012e",
                                        "title": "Chocolade",
                                        "price": 0,
                                        "tags": [{"uuid": "8a07474e-e72d-4ffd-a78b-e8f7e1cd7f05", "name": "Smoothie"}]
                                    }, {
                                        "uuid": "ca2ad0d7-8c90-4cbc-b5be-14a48403f6e3",
                                        "title": "Aardbei",
                                        "price": 0,
                                        "tags": [{"uuid": "8a07474e-e72d-4ffd-a78b-e8f7e1cd7f05", "name": "Smoothie"}]
                                    }, {
                                        "uuid": "b458deee-5937-473d-974a-a46729f3da67",
                                        "title": "Caramel",
                                        "price": 0,
                                        "tags": [{"uuid": "8a07474e-e72d-4ffd-a78b-e8f7e1cd7f05", "name": "Smoothie"}]
                                    }, {
                                        "uuid": "1ca1bf50-1326-4927-8be6-cf06b8e13786",
                                        "title": "Zonder Saus",
                                        "price": 0,
                                        "tags": [{"uuid": "8a07474e-e72d-4ffd-a78b-e8f7e1cd7f05", "name": "Smoothie"}]
                                    }],
                                    "minPermitted": 1,
                                    "maxPermitted": 1
                                }],
                                "rawImageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/3c73e1538fc433f9b4361c43b3591070"
                            },
                            "094a0ed4-bb07-4bcc-ba7d-0b65445f4475": {
                                "imageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/5edf97d10224cc4a763edc00b6f8bef1",
                                "itemDescription": "Enjoy a tastful breakfast with low-fat yoghurt, pecan nuts, crunchy muesli and a red fruit sauce.",
                                "price": 395,
                                "title": "Very Berry Yoghurt",
                                "uuid": "094a0ed4-bb07-4bcc-ba7d-0b65445f4475",
                                "customizations": [],
                                "rawImageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/5edf97d10224cc4a763edc00b6f8bef1"
                            },
                            "b5788c55-a290-44f0-a5fb-91cbbda40094": {
                                "imageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/41a22177a6160f2f91707e90e14b46af",
                                "itemDescription": "A delicious green lettuce mix with marinated and grilled chicken, fresh pieces of red apple, corn, Pomodore tomatoes, paprika flavoured crunch and a delicious curry-apple dressing.",
                                "price": 595,
                                "title": "Salade Chili Chicken",
                                "uuid": "b5788c55-a290-44f0-a5fb-91cbbda40094",
                                "customizations": [],
                                "rawImageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/41a22177a6160f2f91707e90e14b46af"
                            },
                            "0f279e1b-bc92-4ff7-bee9-37a74e810250": {
                                "imageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/6300b047b7f2abe20786bf5259937957",
                                "itemDescription": "Milk Shake met de smaak aardbei.",
                                "price": 325,
                                "title": "Milk Shake Aardbei",
                                "uuid": "0f279e1b-bc92-4ff7-bee9-37a74e810250",
                                "customizations": [{
                                    "uuid": "d11d5720-193d-4a5c-be2a-6dc18f72cd05",
                                    "title": "Keuze Formaat Milk Shake Aardbei",
                                    "tags": [{"uuid": "7d39c6c2-7f3e-4aa1-92e3-13b6aefd6e9a", "name": "Size"}],
                                    "options": [{
                                        "uuid": "d5f78de9-8b10-4a86-bfdc-07ce27cc14f9",
                                        "title": "Medium",
                                        "price": 0,
                                        "tags": [{"uuid": "d0430b75-1545-45aa-9cd5-8678c4657b66", "name": "Milk"}]
                                    }, {
                                        "uuid": "1ca329a2-ec86-4fb8-b059-665a65f61d89",
                                        "title": "Groot",
                                        "price": 20,
                                        "tags": [{"uuid": "d0430b75-1545-45aa-9cd5-8678c4657b66", "name": "Milk"}]
                                    }],
                                    "minPermitted": 1,
                                    "maxPermitted": 1
                                }],
                                "alcoholicItems": 0,
                                "rawImageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/6300b047b7f2abe20786bf5259937957"
                            },
                            "c52fd163-70c0-414f-be22-2611021b5582": {
                                "imageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/c757db111695d799544409062c8fe189",
                                "itemDescription": "Softijs met Banaan & Toffee",
                                "price": 335,
                                "title": "McFlurry Banaan-Toffee",
                                "uuid": "c52fd163-70c0-414f-be22-2611021b5582",
                                "customizations": [{
                                    "uuid": "cf898987-ec07-4ed7-a808-44b99183f04c",
                                    "title": "Keuze Saus McFlurry Banoffee",
                                    "tags": [{
                                        "uuid": "02e1f616-507b-4f3f-8e22-02ac5afbd34d",
                                        "name": "Sauce/Dressing"
                                    }],
                                    "options": [{
                                        "uuid": "901f9d4b-65ab-4e6e-b7b8-ceb31bf867ff",
                                        "title": "Chocolade",
                                        "price": 0,
                                        "tags": [{"uuid": "8a07474e-e72d-4ffd-a78b-e8f7e1cd7f05", "name": "Smoothie"}]
                                    }, {
                                        "uuid": "5ed18156-7d58-4c63-b415-1a0de59bf2d9",
                                        "title": "Aardbei",
                                        "price": 0,
                                        "tags": [{"uuid": "8a07474e-e72d-4ffd-a78b-e8f7e1cd7f05", "name": "Smoothie"}]
                                    }, {
                                        "uuid": "6c753125-08c7-4616-be3a-4019865e215d",
                                        "title": "Caramel",
                                        "price": 0,
                                        "tags": [{"uuid": "8a07474e-e72d-4ffd-a78b-e8f7e1cd7f05", "name": "Smoothie"}]
                                    }, {
                                        "uuid": "5eb2ca0a-855c-411d-977c-ca1f69e57e0d",
                                        "title": "Zonder Saus",
                                        "price": 0,
                                        "tags": [{"uuid": "8a07474e-e72d-4ffd-a78b-e8f7e1cd7f05", "name": "Smoothie"}]
                                    }],
                                    "minPermitted": 1,
                                    "maxPermitted": 1
                                }],
                                "rawImageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/c757db111695d799544409062c8fe189"
                            },
                            "7385e2b6-436e-4395-a890-c8a735b7465b": {
                                "imageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/ff77d1c824a8dcffc5e9465c7a579b0a",
                                "itemDescription": "100% beef burger.",
                                "price": 445,
                                "title": "Quarter Pounder",
                                "uuid": "7385e2b6-436e-4395-a890-c8a735b7465b",
                                "customizations": [],
                                "alcoholicItems": 0,
                                "rawImageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/ff77d1c824a8dcffc5e9465c7a579b0a"
                            },
                            "5c027ba1-b4a2-44bc-83a1-601d280c1e79": {
                                "imageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/2a02f99969d5133bf6d7c0047fb686df",
                                "itemDescription": "20 stukjes malse kip met een krokant laagje.",
                                "price": 850,
                                "title": "Chicken McNuggets 20",
                                "uuid": "5c027ba1-b4a2-44bc-83a1-601d280c1e79",
                                "customizations": [{
                                    "uuid": "85e32b3f-4a6d-43f5-a8c3-90f8c1f87161",
                                    "title": "Keuze Saus McNuggets 20",
                                    "tags": [{
                                        "uuid": "02e1f616-507b-4f3f-8e22-02ac5afbd34d",
                                        "name": "Sauce/Dressing"
                                    }],
                                    "options": [{
                                        "uuid": "d2a12a4c-a39b-4ffd-9013-967ee644255d",
                                        "title": "Barbecuesaus",
                                        "price": 0,
                                        "tags": [{"uuid": "447030e6-340b-460b-b1cb-915ad88d038e", "name": "Sauce"}]
                                    }, {
                                        "uuid": "7d50fd4b-cfae-49a8-8254-47be84f97b50",
                                        "title": "Barbecuesaus",
                                        "price": 0,
                                        "tags": [{"uuid": "447030e6-340b-460b-b1cb-915ad88d038e", "name": "Sauce"}]
                                    }, {
                                        "uuid": "85ac9136-cd78-4ff0-9cd5-4e2a24077da7",
                                        "title": "Barbecuesaus",
                                        "price": 0,
                                        "tags": [{"uuid": "447030e6-340b-460b-b1cb-915ad88d038e", "name": "Sauce"}]
                                    }, {
                                        "uuid": "b8c5ea69-0065-4ef4-85ee-c6015d71dc0c",
                                        "title": "Zoetzure Saus",
                                        "price": 0,
                                        "tags": [{"uuid": "447030e6-340b-460b-b1cb-915ad88d038e", "name": "Sauce"}]
                                    }, {
                                        "uuid": "b1d30d17-b556-41ea-9eed-4cf1d399e6f1",
                                        "title": "Zoetzure Saus",
                                        "price": 0,
                                        "tags": [{"uuid": "447030e6-340b-460b-b1cb-915ad88d038e", "name": "Sauce"}]
                                    }, {
                                        "uuid": "8c3b3500-9c89-41cb-a47d-becc0bd5407a",
                                        "title": "Zoetzure Saus",
                                        "price": 0,
                                        "tags": [{"uuid": "447030e6-340b-460b-b1cb-915ad88d038e", "name": "Sauce"}]
                                    }, {
                                        "uuid": "882e90c8-188d-4188-94c7-89aaeee572b9",
                                        "title": "Kerriesaus",
                                        "price": 0,
                                        "tags": [{"uuid": "447030e6-340b-460b-b1cb-915ad88d038e", "name": "Sauce"}]
                                    }, {
                                        "uuid": "2ea21961-53dd-4745-adbe-7b751df852d6",
                                        "title": "Kerriesaus",
                                        "price": 0,
                                        "tags": [{"uuid": "447030e6-340b-460b-b1cb-915ad88d038e", "name": "Sauce"}]
                                    }, {
                                        "uuid": "22764ed1-4978-4add-b23b-c9c78f9def53",
                                        "title": "Kerriesaus",
                                        "price": 0,
                                        "tags": [{"uuid": "447030e6-340b-460b-b1cb-915ad88d038e", "name": "Sauce"}]
                                    }, {
                                        "uuid": "f9943757-f28c-44b3-88e3-225f84c635f4",
                                        "title": "Mosterdsaus",
                                        "price": 0,
                                        "tags": [{"uuid": "447030e6-340b-460b-b1cb-915ad88d038e", "name": "Sauce"}]
                                    }, {
                                        "uuid": "5805bd80-9db3-4cee-9e32-d7347f7c7b49",
                                        "title": "Mosterdsaus",
                                        "price": 0,
                                        "tags": [{"uuid": "447030e6-340b-460b-b1cb-915ad88d038e", "name": "Sauce"}]
                                    }, {
                                        "uuid": "b347e11c-4706-4847-9905-ba94bd7bd49a",
                                        "title": "Mosterdsaus",
                                        "price": 0,
                                        "tags": [{"uuid": "447030e6-340b-460b-b1cb-915ad88d038e", "name": "Sauce"}]
                                    }],
                                    "minPermitted": 3,
                                    "maxPermitted": 3
                                }],
                                "alcoholicItems": 0,
                                "rawImageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/2a02f99969d5133bf6d7c0047fb686df"
                            },
                            "00c31c73-dd7f-474b-bb8a-1da4825cf3e6": {
                                "imageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/41a22177a6160f2f91707e90e14b46af",
                                "itemDescription": "Een heerlijke groene slamix met gemarineerde en gegrilde kip, friszure rode appelstukjes, maïs, Pomodore tomaatjes, paprika-flavored crunch en een heerlijke kerrie-appel dressing.",
                                "price": 595,
                                "title": "Salade Chili Chicken",
                                "uuid": "00c31c73-dd7f-474b-bb8a-1da4825cf3e6",
                                "customizations": [],
                                "rawImageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/41a22177a6160f2f91707e90e14b46af"
                            },
                            "0ca1fe87-0b6b-43ab-9bf2-9eeae9db5f75": {
                                "imageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/ff77d1c824a8dcffc5e9465c7a579b0a",
                                "itemDescription": "100% rundvlees burger.",
                                "price": 445,
                                "title": "Quarter Pounder",
                                "uuid": "0ca1fe87-0b6b-43ab-9bf2-9eeae9db5f75",
                                "customizations": [],
                                "alcoholicItems": 0,
                                "rawImageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/ff77d1c824a8dcffc5e9465c7a579b0a"
                            },
                            "d3c7f4dd-756d-4ba0-815d-ad998d83bbac": {
                                "imageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/c1af726de996f8439f3181b5e2b2df3f",
                                "itemDescription": "",
                                "price": 480,
                                "title": "Happy Meal McFish",
                                "uuid": "d3c7f4dd-756d-4ba0-815d-ad998d83bbac",
                                "customizations": [{
                                    "uuid": "d0136a31-d0e5-4a66-b330-7b9b359bf06e",
                                    "title": "Keuze Speeltje HM",
                                    "tags": [{"uuid": "a39f874d-b5cf-4fbc-ada0-8eedae87ca08", "name": "Add-ons"}],
                                    "options": [{
                                        "uuid": "130c6300-b283-465c-8eba-74b68c06c1e2",
                                        "title": "Transformers",
                                        "price": 0,
                                        "tags": [{"uuid": "241c3612-202b-422e-86a3-21bbbe094016", "name": "Side"}]
                                    }, {
                                        "uuid": "a3f55247-f01f-4feb-95e2-74a1dff0598a",
                                        "title": "My Little Pony",
                                        "price": 0,
                                        "tags": [{"uuid": "241c3612-202b-422e-86a3-21bbbe094016", "name": "Side"}]
                                    }],
                                    "minPermitted": 1,
                                    "maxPermitted": 1
                                }, {
                                    "uuid": "9ef51677-3873-4fd3-ae85-31af1676b818",
                                    "title": "Keuze Friet/Snoeptomaatjes HM",
                                    "tags": [{"uuid": "a39f874d-b5cf-4fbc-ada0-8eedae87ca08", "name": "Add-ons"}],
                                    "options": [{
                                        "uuid": "fe80bd39-2cad-40f0-9b54-8ae752383252",
                                        "title": "Friet",
                                        "price": 0,
                                        "tags": [{"uuid": "241c3612-202b-422e-86a3-21bbbe094016", "name": "Side"}]
                                    }, {
                                        "uuid": "5d52f947-7497-4f2c-a517-b161d13ddb0f",
                                        "title": "Snoeptomaatjes",
                                        "price": 0,
                                        "tags": [{"uuid": "241c3612-202b-422e-86a3-21bbbe094016", "name": "Side"}]
                                    }],
                                    "minPermitted": 1,
                                    "maxPermitted": 1
                                }, {
                                    "uuid": "b2f35fcd-1f3e-4828-bb28-f81968a32179",
                                    "title": "Keuze Drank HM",
                                    "tags": [{"uuid": "a39f874d-b5cf-4fbc-ada0-8eedae87ca08", "name": "Add-ons"}],
                                    "options": [{
                                        "uuid": "1529a0c1-e236-47ee-b866-d06c59b7142d",
                                        "title": "Spa 0,33L",
                                        "price": 0,
                                        "tags": [{"uuid": "f0cdc452-3731-45c2-8615-748725e085fc", "name": "Soda"}]
                                    }, {
                                        "uuid": "6a659799-ff0b-463e-8724-1e70c49a237d",
                                        "title": "Halfvolle Melk",
                                        "price": 0,
                                        "tags": [{"uuid": "f0cdc452-3731-45c2-8615-748725e085fc", "name": "Soda"}]
                                    }, {
                                        "uuid": "49a75a10-ab48-4e68-88d5-4939fdb1d81e",
                                        "title": "Vers Sinaasappelsap",
                                        "price": 0,
                                        "tags": [{"uuid": "f0cdc452-3731-45c2-8615-748725e085fc", "name": "Soda"}]
                                    }, {
                                        "uuid": "318f7aa0-f1fc-4b67-9e61-612f4b024d04",
                                        "title": "Verse Smoothie Aardbei Banaan",
                                        "price": 0,
                                        "tags": [{"uuid": "8a07474e-e72d-4ffd-a78b-e8f7e1cd7f05", "name": "Smoothie"}]
                                    }, {
                                        "uuid": "24ea2e18-8172-499f-8996-3c938dd93cb1",
                                        "title": "Tropicana Appelsap",
                                        "price": 0,
                                        "tags": [{"uuid": "f0cdc452-3731-45c2-8615-748725e085fc", "name": "Soda"}]
                                    }, {
                                        "uuid": "ee1bc891-6585-407d-9c43-b3098cb8c21a",
                                        "title": "Fristi",
                                        "price": 0,
                                        "tags": [{"uuid": "f0cdc452-3731-45c2-8615-748725e085fc", "name": "Soda"}]
                                    }, {
                                        "uuid": "dadeeb77-0166-4892-8053-e6c4e78dafb7",
                                        "title": "Chocomel",
                                        "price": 0,
                                        "tags": [{"uuid": "f0cdc452-3731-45c2-8615-748725e085fc", "name": "Soda"}]
                                    }, {
                                        "uuid": "77a2cb49-554f-4125-b365-a0aa0955f752",
                                        "title": "Coca-Cola klein",
                                        "price": 0,
                                        "tags": [{"uuid": "f0cdc452-3731-45c2-8615-748725e085fc", "name": "Soda"}]
                                    }, {
                                        "uuid": "53b9587d-113e-4799-9563-2dad102aca91",
                                        "title": "Coca-Cola Light klein",
                                        "price": 0,
                                        "tags": [{"uuid": "f0cdc452-3731-45c2-8615-748725e085fc", "name": "Soda"}]
                                    }, {
                                        "uuid": "938adacc-9bff-4ea7-b953-57269b0a2207",
                                        "title": "Coca-Cola Zero klein",
                                        "price": 0,
                                        "tags": [{"uuid": "f0cdc452-3731-45c2-8615-748725e085fc", "name": "Soda"}]
                                    }, {
                                        "uuid": "2585d6ba-1465-438c-b9c9-1f0ccc88b832",
                                        "title": "Fanta klein",
                                        "price": 0,
                                        "tags": [{"uuid": "f0cdc452-3731-45c2-8615-748725e085fc", "name": "Soda"}]
                                    }, {
                                        "uuid": "c575acd8-a95b-416f-b4ed-5ee0786aa2e2",
                                        "title": "Sprite klein",
                                        "price": 0,
                                        "tags": [{"uuid": "f0cdc452-3731-45c2-8615-748725e085fc", "name": "Soda"}]
                                    }, {
                                        "uuid": "cfd796e2-02fe-4b99-97b7-a8efde924632",
                                        "title": "Lipton Ice Tea klein",
                                        "price": 0,
                                        "tags": [{"uuid": "f0cdc452-3731-45c2-8615-748725e085fc", "name": "Soda"}]
                                    }, {
                                        "uuid": "278e4dc7-1dfd-4ee6-a749-7580d7fafca3",
                                        "title": "Milk Shake Aardbei klein",
                                        "price": 100,
                                        "tags": [{"uuid": "d0430b75-1545-45aa-9cd5-8678c4657b66", "name": "Milk"}]
                                    }, {
                                        "uuid": "854083a2-fb57-44b7-913a-32bf4443b035",
                                        "title": "Milk Shake Choco klein",
                                        "price": 100,
                                        "tags": [{"uuid": "d0430b75-1545-45aa-9cd5-8678c4657b66", "name": "Milk"}]
                                    }, {
                                        "uuid": "324e01c1-3feb-47b5-8019-63842288bc1b",
                                        "title": "Milk Shake Vanille klein",
                                        "price": 100,
                                        "tags": [{"uuid": "d0430b75-1545-45aa-9cd5-8678c4657b66", "name": "Milk"}]
                                    }, {
                                        "uuid": "b1029883-c423-4696-aa5c-48dd68f4fa7b",
                                        "title": "Milk Shake Banaan klein",
                                        "price": 100,
                                        "tags": [{"uuid": "d0430b75-1545-45aa-9cd5-8678c4657b66", "name": "Milk"}]
                                    }],
                                    "minPermitted": 1,
                                    "maxPermitted": 1
                                }, {
                                    "uuid": "d5c70866-9962-488a-a2be-a223927b7171",
                                    "title": "Keuze Dessert HM",
                                    "tags": [{"uuid": "a39f874d-b5cf-4fbc-ada0-8eedae87ca08", "name": "Add-ons"}],
                                    "options": [{
                                        "uuid": "0b195859-4426-41dd-ae31-27affc2ce3c2",
                                        "title": "Snoeptomaatjes",
                                        "price": 0,
                                        "tags": [{"uuid": "241c3612-202b-422e-86a3-21bbbe094016", "name": "Side"}]
                                    }, {
                                        "uuid": "ee13cba7-0ef4-4e97-a1ed-fb5e61cfdab9",
                                        "title": "Vers Fruit",
                                        "price": 0,
                                        "tags": [{"uuid": "241c3612-202b-422e-86a3-21bbbe094016", "name": "Side"}]
                                    }, {
                                        "uuid": "eb09ef3b-89a0-4460-b040-d028dd12b6a9",
                                        "title": "Danoontje",
                                        "price": 0,
                                        "tags": [{"uuid": "241c3612-202b-422e-86a3-21bbbe094016", "name": "Side"}]
                                    }],
                                    "minPermitted": 1,
                                    "maxPermitted": 1
                                }],
                                "alcoholicItems": 0,
                                "rawImageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/c1af726de996f8439f3181b5e2b2df3f"
                            },
                            "5d081f2f-71cb-4d77-9046-b036532ff7d3": {
                                "endorsement": {
                                    "backgroundColor": {
                                        "alpha": 1,
                                        "color": "59BD5A"
                                    },
                                    "iconColor": {"alpha": 1, "color": "59BD5A"},
                                    "iconUrl": "https://uber-test.s3.amazonaws.com/badge_healthy@3x.png",
                                    "text": "Vegetarian",
                                    "textColor": {"alpha": 1, "color": "FFFFFF"}
                                },
                                "imageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/c81518a22a0aafb661693158c88dcdb7",
                                "itemDescription": "Groenteburger met frisse sla en sandwich saus.",
                                "price": 425,
                                "title": "Veggie Burger",
                                "uuid": "5d081f2f-71cb-4d77-9046-b036532ff7d3",
                                "customizations": [],
                                "alcoholicItems": 0,
                                "rawImageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/c81518a22a0aafb661693158c88dcdb7"
                            },
                            "6d0cd91b-2d91-40ae-9186-0e507877e23f": {
                                "imageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/f696e82313f6b6a79485e93a243174b7",
                                "itemDescription": "Typical Dutch! A McDonald's sandwich with 'kroket' and a savoury mustard sauce.",
                                "price": 300,
                                "title": "McKroket",
                                "uuid": "6d0cd91b-2d91-40ae-9186-0e507877e23f",
                                "customizations": [],
                                "alcoholicItems": 0,
                                "rawImageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/f696e82313f6b6a79485e93a243174b7"
                            },
                            "0e996ed5-8f9d-4766-bda5-3921c0e11f9a": {
                                "imageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/f220fdfd02fcc8611b881faf05a84c1e",
                                "itemDescription": "Milk Shake met de smaak vanille.",
                                "price": 325,
                                "title": "Milk Shake Vanille",
                                "uuid": "0e996ed5-8f9d-4766-bda5-3921c0e11f9a",
                                "customizations": [{
                                    "uuid": "7e7de7c3-971d-49cb-aa07-e442c74eff38",
                                    "title": "Keuze Formaat Milk Shake Vanille",
                                    "tags": [{"uuid": "7d39c6c2-7f3e-4aa1-92e3-13b6aefd6e9a", "name": "Size"}],
                                    "options": [{
                                        "uuid": "a3b35c3f-a731-4975-9b96-98cec4425495",
                                        "title": "Medium",
                                        "price": 0,
                                        "tags": [{"uuid": "d0430b75-1545-45aa-9cd5-8678c4657b66", "name": "Milk"}]
                                    }, {
                                        "uuid": "c8eeb2d6-c611-4793-862b-43249510e065",
                                        "title": "Groot",
                                        "price": 20,
                                        "tags": [{"uuid": "d0430b75-1545-45aa-9cd5-8678c4657b66", "name": "Milk"}]
                                    }],
                                    "minPermitted": 1,
                                    "maxPermitted": 1
                                }],
                                "alcoholicItems": 0,
                                "rawImageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/f220fdfd02fcc8611b881faf05a84c1e"
                            },
                            "6ade1517-8d20-49f1-bd7a-a2a43b78c92a": {
                                "imageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/98e273f95650be3813604a9bc79bd710",
                                "itemDescription": "Bottle of water.",
                                "price": 235,
                                "title": "SPA",
                                "uuid": "6ade1517-8d20-49f1-bd7a-a2a43b78c92a",
                                "customizations": [{
                                    "uuid": "dfef2e28-0fe6-4483-9c97-ad63eb2fef51",
                                    "title": "Choose Size SPA",
                                    "tags": [{"uuid": "7d39c6c2-7f3e-4aa1-92e3-13b6aefd6e9a", "name": "Size"}],
                                    "options": [{
                                        "uuid": "b2a466bb-e1a4-4cae-bf00-e34983b4f9fa",
                                        "title": "0,33L",
                                        "price": 0,
                                        "tags": [{"uuid": "f0cdc452-3731-45c2-8615-748725e085fc", "name": "Soda"}]
                                    }, {
                                        "uuid": "7ab4f17e-a90f-4395-bb89-2703b61e36af",
                                        "title": "0,50L",
                                        "price": 35,
                                        "tags": [{"uuid": "f0cdc452-3731-45c2-8615-748725e085fc", "name": "Soda"}]
                                    }],
                                    "minPermitted": 1,
                                    "maxPermitted": 1
                                }],
                                "alcoholicItems": 0,
                                "rawImageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/98e273f95650be3813604a9bc79bd710"
                            },
                            "da834fbc-f4c3-404a-9b05-89888ee4a667": {
                                "imageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/c41d262f2869941ceac6eb3958baa0e0",
                                "itemDescription": "Tender chicken on a sesame bun.",
                                "price": 445,
                                "title": "McChicken",
                                "uuid": "da834fbc-f4c3-404a-9b05-89888ee4a667",
                                "customizations": [],
                                "alcoholicItems": 0,
                                "rawImageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/c41d262f2869941ceac6eb3958baa0e0"
                            },
                            "3cb4110b-4e1d-4d4f-84ae-5a9c06a3ce29": {
                                "imageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/1ab7a9c6df4747e9a1e0d2558c2b9dc8",
                                "itemDescription": "Semi-skimmed Chocolate milk.",
                                "price": 235,
                                "title": "Chocomel",
                                "uuid": "3cb4110b-4e1d-4d4f-84ae-5a9c06a3ce29",
                                "customizations": [],
                                "alcoholicItems": 0,
                                "rawImageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/1ab7a9c6df4747e9a1e0d2558c2b9dc8"
                            },
                            "e6d98ace-4e04-45d5-a9de-27d819646221": {
                                "imageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/9ebbebcccbda4a8d364d273aa18bdc32",
                                "itemDescription": "They are perfect for dipping.",
                                "price": 490,
                                "title": "Chicken McNuggets 9",
                                "uuid": "e6d98ace-4e04-45d5-a9de-27d819646221",
                                "customizations": [{
                                    "uuid": "4cfd6126-9d89-441e-b410-e5f4497718a7",
                                    "title": "Choose Sauce McNuggets 9",
                                    "tags": [{
                                        "uuid": "02e1f616-507b-4f3f-8e22-02ac5afbd34d",
                                        "name": "Sauce/Dressing"
                                    }],
                                    "options": [{
                                        "uuid": "ffdc8432-ceee-4b6c-99eb-14851e060539",
                                        "title": "Barbeque Sauce",
                                        "price": 0,
                                        "tags": [{"uuid": "447030e6-340b-460b-b1cb-915ad88d038e", "name": "Sauce"}]
                                    }, {
                                        "uuid": "ad9110af-6424-474f-b0cd-491baad51863",
                                        "title": "Barbeque Sauce",
                                        "price": 0,
                                        "tags": [{"uuid": "447030e6-340b-460b-b1cb-915ad88d038e", "name": "Sauce"}]
                                    }, {
                                        "uuid": "3f844350-2609-4637-96a8-0a3009da9a9e",
                                        "title": "Sweet and Sour Sauce",
                                        "price": 0,
                                        "tags": [{"uuid": "447030e6-340b-460b-b1cb-915ad88d038e", "name": "Sauce"}]
                                    }, {
                                        "uuid": "0f33d97e-4711-493b-a90b-7f44289a9236",
                                        "title": "Sweet and Sour Sauce",
                                        "price": 0,
                                        "tags": [{"uuid": "447030e6-340b-460b-b1cb-915ad88d038e", "name": "Sauce"}]
                                    }, {
                                        "uuid": "da861097-b665-445d-b28f-208f1e3aa928",
                                        "title": "Curry Sauce",
                                        "price": 0,
                                        "tags": [{"uuid": "447030e6-340b-460b-b1cb-915ad88d038e", "name": "Sauce"}]
                                    }, {
                                        "uuid": "9f59fdfd-9de2-4760-9c0b-65b3a58023ba",
                                        "title": "Curry Sauce",
                                        "price": 0,
                                        "tags": [{"uuid": "447030e6-340b-460b-b1cb-915ad88d038e", "name": "Sauce"}]
                                    }, {
                                        "uuid": "dec30cf8-4c6a-4f79-8edb-72c578ddc6bd",
                                        "title": "Mustard Sauce",
                                        "price": 0,
                                        "tags": [{"uuid": "447030e6-340b-460b-b1cb-915ad88d038e", "name": "Sauce"}]
                                    }, {
                                        "uuid": "fa106a92-6896-4ef2-88a9-8c1edaf4c844",
                                        "title": "Mustard Sauce",
                                        "price": 0,
                                        "tags": [{"uuid": "447030e6-340b-460b-b1cb-915ad88d038e", "name": "Sauce"}]
                                    }],
                                    "minPermitted": 2,
                                    "maxPermitted": 2
                                }],
                                "alcoholicItems": 0,
                                "rawImageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/9ebbebcccbda4a8d364d273aa18bdc32"
                            },
                            "61423be0-c1ec-44c8-bc0b-329bb4ad2252": {
                                "imageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/cbe75860470844d3348e0ef308c80ec0",
                                "itemDescription": "This refreshing Lemonade is perfect to quench your thirst.",
                                "price": 325,
                                "title": "Lemonade",
                                "uuid": "61423be0-c1ec-44c8-bc0b-329bb4ad2252",
                                "customizations": []
                            },
                            "3423cff6-5cf4-431d-93b6-f8f847acd416": {
                                "imageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/5edf97d10224cc4a763edc00b6f8bef1",
                                "itemDescription": "Ontbijt eens lekker met halfvolle yoghurt met noten, krokante muesli en rode vruchtensaus.",
                                "price": 395,
                                "title": "Very Berry Yoghurt",
                                "uuid": "3423cff6-5cf4-431d-93b6-f8f847acd416",
                                "customizations": [],
                                "rawImageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/5edf97d10224cc4a763edc00b6f8bef1"
                            },
                            "43e196ee-340d-4f3a-97bd-db3b16ceb9c8": {
                                "imageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/605229ae9e4dde01ea295b01e5ca949d",
                                "itemDescription": "Fresh smoothie strawberry - banana.",
                                "price": 270,
                                "title": "Fresh Smoothie Strawberry-Banana",
                                "uuid": "43e196ee-340d-4f3a-97bd-db3b16ceb9c8",
                                "customizations": [],
                                "alcoholicItems": 0,
                                "rawImageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/605229ae9e4dde01ea295b01e5ca949d"
                            },
                            "62500346-b2d8-4412-b452-0089d10bd026": {
                                "imageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/aeeed66ac70e199e8e9918de00ba3194",
                                "itemDescription": "Verfrissende Coca-Cola Light.",
                                "price": 285,
                                "title": "Coca-Cola Light",
                                "uuid": "62500346-b2d8-4412-b452-0089d10bd026",
                                "customizations": [{
                                    "uuid": "803556c8-e05f-477a-b251-9e46f393f61f",
                                    "title": "Keuze Formaat Coca Cola Light",
                                    "tags": [{"uuid": "7d39c6c2-7f3e-4aa1-92e3-13b6aefd6e9a", "name": "Size"}],
                                    "options": [{
                                        "uuid": "4743a6b0-8032-4d4a-95e4-d9c2d34784d8",
                                        "title": "Medium",
                                        "price": 0,
                                        "tags": [{"uuid": "f0cdc452-3731-45c2-8615-748725e085fc", "name": "Soda"}]
                                    }, {
                                        "uuid": "76d469d1-bb85-41bb-8890-bfb34c1acd33",
                                        "title": "Groot",
                                        "price": 30,
                                        "tags": [{"uuid": "f0cdc452-3731-45c2-8615-748725e085fc", "name": "Soda"}]
                                    }],
                                    "minPermitted": 1,
                                    "maxPermitted": 1
                                }],
                                "alcoholicItems": 0,
                                "rawImageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/aeeed66ac70e199e8e9918de00ba3194"
                            },
                            "ef9b3b77-1f21-4754-ad9d-e4bef3faf1aa": {
                                "imageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/2f22aa39f66dc0ed1483570b56d61a29",
                                "itemDescription": "Twee 100% Angus Beef burgers op een speciaal sesam - en maanzaadbroodje. Voor de echt burger liefhebber.",
                                "price": 665,
                                "title": "Maestro Burger met 100% Angus Beef",
                                "uuid": "ef9b3b77-1f21-4754-ad9d-e4bef3faf1aa",
                                "customizations": [],
                                "alcoholicItems": 0,
                                "rawImageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/2f22aa39f66dc0ed1483570b56d61a29"
                            },
                            "d8a58535-daee-4c1d-91e0-84ca1f6f04c9": {
                                "imageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/8e8d1846072becb98dd05ceef82c3e63",
                                "itemDescription": "A delicious, colorful lettuce mix with smoked bacon, semi-matured cheese flakes, a free range egg, fresh pieces of red apple, Pomodore tomatoes, a garden herbs crunch and a honey-mustard dressing.",
                                "price": 595,
                                "title": "Salad Bacon Cheese",
                                "uuid": "d8a58535-daee-4c1d-91e0-84ca1f6f04c9",
                                "customizations": [],
                                "rawImageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/8e8d1846072becb98dd05ceef82c3e63"
                            },
                            "d3a46376-a49e-45f5-8926-297e48679501": {
                                "imageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/5172094ef57ebd414f01570e4ed4b0e5",
                                "itemDescription": "Tropicana's apple juice.",
                                "price": 225,
                                "title": "Tropicana Apple Juice",
                                "uuid": "d3a46376-a49e-45f5-8926-297e48679501",
                                "customizations": [],
                                "alcoholicItems": 0,
                                "rawImageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/5172094ef57ebd414f01570e4ed4b0e5"
                            },
                            "697bda36-af7b-4c39-89d2-ad109ef152f5": {
                                "imageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/056d464f4858f11fb427d4f7be37d447",
                                "itemDescription": "Flesje bruisend water.",
                                "price": 270,
                                "title": "SPA Rood 0,5",
                                "uuid": "697bda36-af7b-4c39-89d2-ad109ef152f5",
                                "customizations": [],
                                "rawImageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/056d464f4858f11fb427d4f7be37d447"
                            },
                            "f5da9ff8-5087-43e5-9f73-334df10f0ba1": {
                                "imageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/a461c2373e49096d3806930fd61c63ed",
                                "itemDescription": "Softijs met stukjes M&M.",
                                "price": 335,
                                "title": "McFlurry M&M",
                                "uuid": "f5da9ff8-5087-43e5-9f73-334df10f0ba1",
                                "customizations": [{
                                    "uuid": "60286397-b6fd-4051-8899-420f90fbfcde",
                                    "title": "Keuze Saus McFlurry M&M",
                                    "tags": [{
                                        "uuid": "02e1f616-507b-4f3f-8e22-02ac5afbd34d",
                                        "name": "Sauce/Dressing"
                                    }],
                                    "options": [{
                                        "uuid": "b9acabc3-e751-43de-9b57-ac76324c739d",
                                        "title": "Chocolade",
                                        "price": 0,
                                        "tags": [{"uuid": "447030e6-340b-460b-b1cb-915ad88d038e", "name": "Sauce"}]
                                    }, {
                                        "uuid": "bea7d900-e0db-49de-81e7-853fb2b13911",
                                        "title": "Aardbei",
                                        "price": 0,
                                        "tags": [{"uuid": "447030e6-340b-460b-b1cb-915ad88d038e", "name": "Sauce"}]
                                    }, {
                                        "uuid": "e45f8327-a5ef-4188-95dd-42c877a6ae37",
                                        "title": "Caramel",
                                        "price": 0,
                                        "tags": [{"uuid": "447030e6-340b-460b-b1cb-915ad88d038e", "name": "Sauce"}]
                                    }, {
                                        "uuid": "3e631981-b820-4360-b26b-d239facd04af",
                                        "title": "Zonder Saus",
                                        "price": 0,
                                        "tags": [{"uuid": "447030e6-340b-460b-b1cb-915ad88d038e", "name": "Sauce"}]
                                    }],
                                    "minPermitted": 1,
                                    "maxPermitted": 1
                                }],
                                "alcoholicItems": 0,
                                "rawImageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/a461c2373e49096d3806930fd61c63ed"
                            },
                            "8daf71f1-6194-4615-90ce-15c71e0b9b2e": {
                                "imageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/7cb9138e9793c4977b90eff9d1274180",
                                "itemDescription": "Goudgele frietjes, gebakken in 100% plantaardige olie.",
                                "price": 300,
                                "title": "Franse Frietjes",
                                "uuid": "8daf71f1-6194-4615-90ce-15c71e0b9b2e",
                                "customizations": [{
                                    "uuid": "be6f297a-2827-4e72-a9be-4d5e67497f3a",
                                    "title": "Keuze Formaat Frietjes",
                                    "tags": [{"uuid": "7d39c6c2-7f3e-4aa1-92e3-13b6aefd6e9a", "name": "Size"}],
                                    "options": [{
                                        "uuid": "5904ec09-a3cc-4058-91c9-777836727e87",
                                        "title": "Medium",
                                        "price": 0,
                                        "tags": [{
                                            "uuid": "27f793cc-d0a4-4351-93e0-7d8e87a68952",
                                            "name": "Roasted Potatoes"
                                        }]
                                    }, {
                                        "uuid": "f9b7060e-866a-4432-8175-5cf372afadb2",
                                        "title": "Groot",
                                        "price": 25,
                                        "tags": [{
                                            "uuid": "27f793cc-d0a4-4351-93e0-7d8e87a68952",
                                            "name": "Roasted Potatoes"
                                        }]
                                    }],
                                    "minPermitted": 1,
                                    "maxPermitted": 1
                                }],
                                "alcoholicItems": 0,
                                "rawImageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/7cb9138e9793c4977b90eff9d1274180"
                            },
                            "f1a1c8a2-c2e8-486a-ac32-c9afe45d11d4": {
                                "imageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/a461c2373e49096d3806930fd61c63ed",
                                "itemDescription": "Soft dairy icecream swirled with pieces of M&M.",
                                "price": 335,
                                "title": "McFlurry M&M",
                                "uuid": "f1a1c8a2-c2e8-486a-ac32-c9afe45d11d4",
                                "customizations": [{
                                    "uuid": "6c6116b1-912a-48f5-bd56-d4609f8089cd",
                                    "title": "Choose Sauce McFlurry M&M",
                                    "tags": [{
                                        "uuid": "02e1f616-507b-4f3f-8e22-02ac5afbd34d",
                                        "name": "Sauce/Dressing"
                                    }],
                                    "options": [{
                                        "uuid": "71e2fec4-2477-486b-b6d1-27d55d7036fd",
                                        "title": "Chocolate",
                                        "price": 0,
                                        "tags": [{"uuid": "8a07474e-e72d-4ffd-a78b-e8f7e1cd7f05", "name": "Smoothie"}]
                                    }, {
                                        "uuid": "dc8077a0-bc65-4abb-8f7f-1e436a0939a2",
                                        "title": "Strawberry",
                                        "price": 0,
                                        "tags": [{"uuid": "8a07474e-e72d-4ffd-a78b-e8f7e1cd7f05", "name": "Smoothie"}]
                                    }, {
                                        "uuid": "1fe1cda2-24b4-421f-bbf8-c4396aafc0b3",
                                        "title": "Caramel",
                                        "price": 0,
                                        "tags": [{"uuid": "8a07474e-e72d-4ffd-a78b-e8f7e1cd7f05", "name": "Smoothie"}]
                                    }, {
                                        "uuid": "746ddd7c-d06e-447f-a066-5a17328c14c1",
                                        "title": "No Sauce",
                                        "price": 0,
                                        "tags": [{"uuid": "8a07474e-e72d-4ffd-a78b-e8f7e1cd7f05", "name": "Smoothie"}]
                                    }],
                                    "minPermitted": 1,
                                    "maxPermitted": 1
                                }],
                                "alcoholicItems": 0,
                                "rawImageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/a461c2373e49096d3806930fd61c63ed"
                            },
                            "455b281a-f39c-4070-81a7-53334ca6dfae": {
                                "imageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/8d7f239a93bf49b306abe31bd30c7db5",
                                "itemDescription": "Cookie met stukjes chocolade, pure chocolade en witte chocolade. Vers uit de oven.",
                                "price": 225,
                                "title": "Triple Chocolate Cookie",
                                "uuid": "455b281a-f39c-4070-81a7-53334ca6dfae",
                                "customizations": [],
                                "alcoholicItems": 0,
                                "rawImageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/8d7f239a93bf49b306abe31bd30c7db5"
                            },
                            "aceff3d4-1c32-4a94-a0e8-f13fd8b3e816": {
                                "imageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/5418b44c3e74d5399821f7f67493288d",
                                "itemDescription": "100% vers sinaasappelsap.",
                                "price": 270,
                                "title": "Vers Sinaasappelsap",
                                "uuid": "aceff3d4-1c32-4a94-a0e8-f13fd8b3e816",
                                "customizations": [],
                                "alcoholicItems": 0,
                                "rawImageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/5418b44c3e74d5399821f7f67493288d"
                            },
                            "c12fe9e9-966e-4505-8542-23922ff11907": {
                                "imageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/b267bf9f51761061ec1697bbedaaa739",
                                "itemDescription": "",
                                "price": 480,
                                "title": "Happy Meal Cheeseburger",
                                "uuid": "c12fe9e9-966e-4505-8542-23922ff11907",
                                "customizations": [{
                                    "uuid": "dcf17bfb-2071-4197-8be6-7b17a0a7e690",
                                    "title": "Choose Toy HM",
                                    "tags": [{"uuid": "a39f874d-b5cf-4fbc-ada0-8eedae87ca08", "name": "Add-ons"}],
                                    "options": [{
                                        "uuid": "a92b2c4b-9329-4805-829a-ba375f9cff98",
                                        "title": "Transformers",
                                        "price": 0,
                                        "tags": [{"uuid": "241c3612-202b-422e-86a3-21bbbe094016", "name": "Side"}]
                                    }, {
                                        "uuid": "8b5a33c5-3aa2-4f88-9783-03937dd8b35e",
                                        "title": "My Little Pony",
                                        "price": 0,
                                        "tags": [{"uuid": "241c3612-202b-422e-86a3-21bbbe094016", "name": "Side"}]
                                    }],
                                    "minPermitted": 1,
                                    "maxPermitted": 1
                                }, {
                                    "uuid": "c62e2580-7c03-4f69-9a7e-1e9ec60e2adc",
                                    "title": "Choose Fries/Cherry Tomatoes HM",
                                    "tags": [{"uuid": "a39f874d-b5cf-4fbc-ada0-8eedae87ca08", "name": "Add-ons"}],
                                    "options": [{
                                        "uuid": "fc706c44-40b0-4b8c-b9b0-2ae325a80261",
                                        "title": "Fries",
                                        "price": 0,
                                        "tags": [{"uuid": "241c3612-202b-422e-86a3-21bbbe094016", "name": "Side"}]
                                    }, {
                                        "uuid": "e429a88d-7ffc-47ac-829a-3163ad19f256",
                                        "title": "Cherry Tomatoes",
                                        "price": 0,
                                        "tags": [{"uuid": "241c3612-202b-422e-86a3-21bbbe094016", "name": "Side"}]
                                    }],
                                    "minPermitted": 1,
                                    "maxPermitted": 1
                                }, {
                                    "uuid": "74bd5bee-0515-41d1-acc6-a762dd437ab6",
                                    "title": "Choose Drink HM",
                                    "tags": [{"uuid": "a39f874d-b5cf-4fbc-ada0-8eedae87ca08", "name": "Add-ons"}],
                                    "options": [{
                                        "uuid": "a4b7e9df-8a50-4d3c-a9b0-c4943048dc62",
                                        "title": "SPA 0,33L",
                                        "price": 0,
                                        "tags": [{"uuid": "f0cdc452-3731-45c2-8615-748725e085fc", "name": "Soda"}]
                                    }, {
                                        "uuid": "0127e0f6-0bb6-4099-86e9-d689539aa8af",
                                        "title": "Semi-skimmed Milk",
                                        "price": 0,
                                        "tags": [{"uuid": "f0cdc452-3731-45c2-8615-748725e085fc", "name": "Soda"}]
                                    }, {
                                        "uuid": "3b4ad3d2-74e4-4dfa-90f4-ebcf843c0ce6",
                                        "title": "Fresh Orange juice",
                                        "price": 0,
                                        "tags": [{"uuid": "f0cdc452-3731-45c2-8615-748725e085fc", "name": "Soda"}]
                                    }, {
                                        "uuid": "e0ef9bcf-b1d3-4757-a825-c4751cd43990",
                                        "title": "Fresh Smoothie Strawberry Banana",
                                        "price": 0,
                                        "tags": [{"uuid": "8a07474e-e72d-4ffd-a78b-e8f7e1cd7f05", "name": "Smoothie"}]
                                    }, {
                                        "uuid": "c8b2c0ba-069b-48a3-b47c-15d3c15e92e3",
                                        "title": "Tropicana Apple Juice",
                                        "price": 0,
                                        "tags": [{"uuid": "f0cdc452-3731-45c2-8615-748725e085fc", "name": "Soda"}]
                                    }, {
                                        "uuid": "677c3bf6-3525-4c2b-bc69-9b03cb0ba521",
                                        "title": "Fristi",
                                        "price": 0,
                                        "tags": [{"uuid": "f0cdc452-3731-45c2-8615-748725e085fc", "name": "Soda"}]
                                    }, {
                                        "uuid": "ef77cd5b-ee36-4a3c-a568-e86cd5d1663d",
                                        "title": "Chocomel",
                                        "price": 0,
                                        "tags": [{"uuid": "f0cdc452-3731-45c2-8615-748725e085fc", "name": "Soda"}]
                                    }, {
                                        "uuid": "5889a6f7-b8e8-4b01-b65d-b2b99c6c8270",
                                        "title": "Coca-Cola small",
                                        "price": 0,
                                        "tags": [{"uuid": "f0cdc452-3731-45c2-8615-748725e085fc", "name": "Soda"}]
                                    }, {
                                        "uuid": "eee619fd-5391-46d8-ad6b-ba0c0c40cdf6",
                                        "title": "Coca-Cola Light small",
                                        "price": 0,
                                        "tags": [{"uuid": "f0cdc452-3731-45c2-8615-748725e085fc", "name": "Soda"}]
                                    }, {
                                        "uuid": "b8d6e16d-9400-459a-b2d8-ace2719b6e31",
                                        "title": "Coca-Cola Zero small",
                                        "price": 0,
                                        "tags": [{"uuid": "f0cdc452-3731-45c2-8615-748725e085fc", "name": "Soda"}]
                                    }, {
                                        "uuid": "8a6bdf38-92ce-443c-9b79-51b77fecbcf8",
                                        "title": "Fanta small",
                                        "price": 0,
                                        "tags": [{"uuid": "f0cdc452-3731-45c2-8615-748725e085fc", "name": "Soda"}]
                                    }, {
                                        "uuid": "2ba6fa4b-ca9b-406a-a727-855f7e73d221",
                                        "title": "Sprite small",
                                        "price": 0,
                                        "tags": [{"uuid": "f0cdc452-3731-45c2-8615-748725e085fc", "name": "Soda"}]
                                    }, {
                                        "uuid": "28fcb2a4-ac1b-4f9c-a4b5-4caac8845f45",
                                        "title": "Lipton Ice Tea small",
                                        "price": 0,
                                        "tags": [{"uuid": "f0cdc452-3731-45c2-8615-748725e085fc", "name": "Soda"}]
                                    }, {
                                        "uuid": "95521791-3e80-412a-b18e-d1a8ec15bfce",
                                        "title": "Milk Shake Strawberry small",
                                        "price": 100,
                                        "tags": [{"uuid": "d0430b75-1545-45aa-9cd5-8678c4657b66", "name": "Milk"}]
                                    }, {
                                        "uuid": "bf325f2a-8710-4b30-9f01-5de55fcd103a",
                                        "title": "Milk Shake Choco small",
                                        "price": 100,
                                        "tags": [{"uuid": "d0430b75-1545-45aa-9cd5-8678c4657b66", "name": "Milk"}]
                                    }, {
                                        "uuid": "2807a8f5-ce37-4f4b-8ae6-372f98f60568",
                                        "title": "Milk Shake Vanilla small",
                                        "price": 100,
                                        "tags": [{"uuid": "d0430b75-1545-45aa-9cd5-8678c4657b66", "name": "Milk"}]
                                    }, {
                                        "uuid": "94382fb0-5776-4b03-aaf5-e49302bf8141",
                                        "title": "Milk Shake Banana small",
                                        "price": 100,
                                        "tags": [{"uuid": "d0430b75-1545-45aa-9cd5-8678c4657b66", "name": "Milk"}]
                                    }],
                                    "minPermitted": 1,
                                    "maxPermitted": 1
                                }, {
                                    "uuid": "048f7751-81f8-45c6-8881-0853be47b162",
                                    "title": "Choose Dessert HM",
                                    "tags": [{"uuid": "a39f874d-b5cf-4fbc-ada0-8eedae87ca08", "name": "Add-ons"}],
                                    "options": [{
                                        "uuid": "6063dbb7-8e15-4e5f-bc9a-b9ba64de72bd",
                                        "title": "Cherry Tomatoes",
                                        "price": 0,
                                        "tags": [{"uuid": "241c3612-202b-422e-86a3-21bbbe094016", "name": "Side"}]
                                    }, {
                                        "uuid": "9c9f7d12-b908-40d6-b046-85ea271eae9d",
                                        "title": "Fresh Fruit",
                                        "price": 0,
                                        "tags": [{"uuid": "241c3612-202b-422e-86a3-21bbbe094016", "name": "Side"}]
                                    }, {
                                        "uuid": "42c76edf-41a0-4b4b-9719-3f0a5b85542c",
                                        "title": "Danoontje",
                                        "price": 0,
                                        "tags": [{"uuid": "241c3612-202b-422e-86a3-21bbbe094016", "name": "Side"}]
                                    }],
                                    "minPermitted": 1,
                                    "maxPermitted": 1
                                }],
                                "alcoholicItems": 0,
                                "rawImageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/b267bf9f51761061ec1697bbedaaa739"
                            },
                            "555f5eb9-d78c-4a61-9b05-21ab608a6540": {
                                "imageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/283f783da83c74fbea47b7d4e0a6abc5",
                                "itemDescription": "Milk Shake with chocolate flavour.",
                                "price": 325,
                                "title": "Milk Shake Chocolate",
                                "uuid": "555f5eb9-d78c-4a61-9b05-21ab608a6540",
                                "customizations": [{
                                    "uuid": "1782d2a9-c0b0-4931-a30e-e88c4059f5de",
                                    "title": "Choose Size Milk Shake Chocolate",
                                    "tags": [{"uuid": "7d39c6c2-7f3e-4aa1-92e3-13b6aefd6e9a", "name": "Size"}],
                                    "options": [{
                                        "uuid": "5d99abd2-4100-4d65-b312-d6cd032b2575",
                                        "title": "Medium",
                                        "price": 0,
                                        "tags": [{"uuid": "d0430b75-1545-45aa-9cd5-8678c4657b66", "name": "Milk"}]
                                    }, {
                                        "uuid": "162eb922-41f8-4c55-80b9-5c4aa0ff99f4",
                                        "title": "Large",
                                        "price": 20,
                                        "tags": [{"uuid": "d0430b75-1545-45aa-9cd5-8678c4657b66", "name": "Milk"}]
                                    }],
                                    "minPermitted": 1,
                                    "maxPermitted": 1
                                }],
                                "alcoholicItems": 0,
                                "rawImageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/283f783da83c74fbea47b7d4e0a6abc5"
                            },
                            "7a19e20a-90cc-4511-901c-adbb3aa0d7f7": {
                                "imageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/09aa647092bdc35b56a5de2621df461a",
                                "itemDescription": "Verwen je smaakpapillen met deze licht zoete friet. Serveertip: Lekker met mayonaise.",
                                "price": 300,
                                "title": "Sweet Potatoes",
                                "uuid": "7a19e20a-90cc-4511-901c-adbb3aa0d7f7",
                                "customizations": [{
                                    "uuid": "0dca1dad-4efc-4f18-a9c8-67656e892b1e",
                                    "title": "Keuze Formaat Sweet Potatoes",
                                    "tags": [{"uuid": "7d39c6c2-7f3e-4aa1-92e3-13b6aefd6e9a", "name": "Size"}],
                                    "options": [{
                                        "uuid": "a7f02df3-17e8-4c73-82e7-4892cd01e7c7",
                                        "title": "Medium",
                                        "price": 0,
                                        "tags": [{
                                            "uuid": "27f793cc-d0a4-4351-93e0-7d8e87a68952",
                                            "name": "Roasted Potatoes"
                                        }]
                                    }, {
                                        "uuid": "a190d0db-df48-433a-ae08-8426ab16e41b",
                                        "title": "Groot",
                                        "price": 25,
                                        "tags": [{
                                            "uuid": "27f793cc-d0a4-4351-93e0-7d8e87a68952",
                                            "name": "Roasted Potatoes"
                                        }]
                                    }],
                                    "minPermitted": 1,
                                    "maxPermitted": 1
                                }]
                            },
                            "34613b66-ea71-4539-a9b3-1c45d35af134": {
                                "imageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/2a02f99969d5133bf6d7c0047fb686df",
                                "itemDescription": "20 pieces of tender chicken with a crisp.",
                                "price": 850,
                                "title": "Chicken McNuggets 20",
                                "uuid": "34613b66-ea71-4539-a9b3-1c45d35af134",
                                "customizations": [{
                                    "uuid": "2173b62f-f31d-4c5f-87ff-b982c4da503e",
                                    "title": "Choose Sauce McNuggets 20",
                                    "tags": [{
                                        "uuid": "02e1f616-507b-4f3f-8e22-02ac5afbd34d",
                                        "name": "Sauce/Dressing"
                                    }],
                                    "options": [{
                                        "uuid": "abe76d8e-23ad-4870-b28d-a0a3601ebbaa",
                                        "title": "Barbeque Sauce",
                                        "price": 0,
                                        "tags": [{"uuid": "447030e6-340b-460b-b1cb-915ad88d038e", "name": "Sauce"}]
                                    }, {
                                        "uuid": "bad991a2-0337-4555-b141-3b45d247fe4d",
                                        "title": "Barbeque Sauce",
                                        "price": 0,
                                        "tags": [{"uuid": "447030e6-340b-460b-b1cb-915ad88d038e", "name": "Sauce"}]
                                    }, {
                                        "uuid": "fa5f9489-d0d0-44fd-a9e3-6b7415cb7c42",
                                        "title": "Barbeque Sauce",
                                        "price": 0,
                                        "tags": [{"uuid": "447030e6-340b-460b-b1cb-915ad88d038e", "name": "Sauce"}]
                                    }, {
                                        "uuid": "8afa6ecd-91bb-47f4-89c7-d85ccc94c7e4",
                                        "title": "Sweet and Sour Sauce",
                                        "price": 0,
                                        "tags": [{"uuid": "447030e6-340b-460b-b1cb-915ad88d038e", "name": "Sauce"}]
                                    }, {
                                        "uuid": "5d4c0591-dade-4cac-9cf8-48cd1fcf47e4",
                                        "title": "Sweet and Sour Sauce",
                                        "price": 0,
                                        "tags": [{"uuid": "447030e6-340b-460b-b1cb-915ad88d038e", "name": "Sauce"}]
                                    }, {
                                        "uuid": "fffafbca-7a00-4213-b424-3d0160d9ae82",
                                        "title": "Sweet and Sour Sauce",
                                        "price": 0,
                                        "tags": [{"uuid": "447030e6-340b-460b-b1cb-915ad88d038e", "name": "Sauce"}]
                                    }, {
                                        "uuid": "71002443-c97e-4306-8ae0-055f86c1ab9b",
                                        "title": "Curry Sauce",
                                        "price": 0,
                                        "tags": [{"uuid": "447030e6-340b-460b-b1cb-915ad88d038e", "name": "Sauce"}]
                                    }, {
                                        "uuid": "e269ccbb-9ca2-4a00-821b-8b2f72f0a851",
                                        "title": "Curry Sauce",
                                        "price": 0,
                                        "tags": [{"uuid": "447030e6-340b-460b-b1cb-915ad88d038e", "name": "Sauce"}]
                                    }, {
                                        "uuid": "f9089df5-c98a-4992-b0e2-808ec10bf324",
                                        "title": "Curry Sauce",
                                        "price": 0,
                                        "tags": [{"uuid": "447030e6-340b-460b-b1cb-915ad88d038e", "name": "Sauce"}]
                                    }, {
                                        "uuid": "5be3f200-c441-4429-bf62-6a2b0a7ecd21",
                                        "title": "Mustard Sauce",
                                        "price": 0,
                                        "tags": [{"uuid": "447030e6-340b-460b-b1cb-915ad88d038e", "name": "Sauce"}]
                                    }, {
                                        "uuid": "8b9e50a2-35ee-4f80-8cfb-a4e3a067c843",
                                        "title": "Mustard Sauce",
                                        "price": 0,
                                        "tags": [{"uuid": "447030e6-340b-460b-b1cb-915ad88d038e", "name": "Sauce"}]
                                    }, {
                                        "uuid": "03bdb43c-ac3f-4c84-846a-080b0905dc0c",
                                        "title": "Mustard Sauce",
                                        "price": 0,
                                        "tags": [{"uuid": "447030e6-340b-460b-b1cb-915ad88d038e", "name": "Sauce"}]
                                    }],
                                    "minPermitted": 3,
                                    "maxPermitted": 3
                                }],
                                "alcoholicItems": 0,
                                "rawImageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/2a02f99969d5133bf6d7c0047fb686df"
                            },
                            "81b1f7d8-8a70-4bb2-bbac-298949eca668": {
                                "imageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/e0bd47da83ae9fcc430cb6a04b549dde",
                                "itemDescription": "",
                                "price": 60,
                                "title": "Mayonaise",
                                "uuid": "81b1f7d8-8a70-4bb2-bbac-298949eca668",
                                "customizations": [],
                                "alcoholicItems": 0,
                                "rawImageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/e0bd47da83ae9fcc430cb6a04b549dde"
                            },
                            "87235fda-10c7-4309-b5dd-de9853679495": {
                                "imageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/f220fdfd02fcc8611b881faf05a84c1e",
                                "itemDescription": "Milk Shake with vanilla flavour.",
                                "price": 325,
                                "title": "Milk Shake Vanilla",
                                "uuid": "87235fda-10c7-4309-b5dd-de9853679495",
                                "customizations": [{
                                    "uuid": "3c315b3a-9370-48ce-8120-466ab121fb2a",
                                    "title": "Choose Size Milk Shake Vanilla",
                                    "tags": [{"uuid": "7d39c6c2-7f3e-4aa1-92e3-13b6aefd6e9a", "name": "Size"}],
                                    "options": [{
                                        "uuid": "5c56e77b-ce61-43ff-a51d-dd87483bc31a",
                                        "title": "Medium",
                                        "price": 0,
                                        "tags": [{"uuid": "d0430b75-1545-45aa-9cd5-8678c4657b66", "name": "Milk"}]
                                    }, {
                                        "uuid": "7d73a251-e95b-42f5-a509-382919d0f25e",
                                        "title": "Large",
                                        "price": 20,
                                        "tags": [{"uuid": "d0430b75-1545-45aa-9cd5-8678c4657b66", "name": "Milk"}]
                                    }],
                                    "minPermitted": 1,
                                    "maxPermitted": 1
                                }],
                                "alcoholicItems": 0,
                                "rawImageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/f220fdfd02fcc8611b881faf05a84c1e"
                            },
                            "0e76585a-49cd-4c31-9a4b-39a7206fe7d3": {
                                "imageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/7ea97801575972d680b748381c2d5722",
                                "itemDescription": "The one and only.",
                                "price": 815,
                                "title": "Big Mac Medium Value Meal",
                                "uuid": "0e76585a-49cd-4c31-9a4b-39a7206fe7d3",
                                "customizations": [{
                                    "uuid": "99cc942f-b7e2-4560-8f35-afb133e07f91",
                                    "title": "Choose Size Value Meal",
                                    "tags": [{"uuid": "7d39c6c2-7f3e-4aa1-92e3-13b6aefd6e9a", "name": "Size"}],
                                    "options": [{
                                        "uuid": "0abb353f-bb59-4897-ada3-9fe1dc1d6149",
                                        "title": "Medium",
                                        "price": 0,
                                        "tags": [{"uuid": "882cedee-2d7a-4019-b46b-227082baeb7c", "name": "Medium"}]
                                    }, {
                                        "uuid": "214613eb-8686-4202-9caa-c93b44221a8d",
                                        "title": "Large",
                                        "price": 75,
                                        "tags": [{"uuid": "21f0db62-8d48-433d-a6ea-2fdb1b8b4648", "name": "Large"}]
                                    }],
                                    "minPermitted": 1,
                                    "maxPermitted": 1
                                }, {
                                    "uuid": "397d412c-ed38-425f-b5ee-15a2f3824dda",
                                    "title": "Choose Side Value Meal",
                                    "tags": [{"uuid": "a39f874d-b5cf-4fbc-ada0-8eedae87ca08", "name": "Add-ons"}],
                                    "options": [{
                                        "uuid": "5f573f30-645e-40b9-abdf-449d33e09365",
                                        "title": "French Fries",
                                        "price": 0
                                    }, {
                                        "uuid": "2eefc37f-d149-4b9f-9460-59ca88d09ac8",
                                        "title": "Sweet Potatoes",
                                        "price": 0
                                    }, {
                                        "uuid": "fbc62d10-b710-4b7e-9373-c86ac1114ff9",
                                        "title": "Side Salad",
                                        "price": 0
                                    }],
                                    "minPermitted": 1,
                                    "maxPermitted": 1
                                }, {
                                    "uuid": "8fe20383-860b-4548-8a27-0b7af0d5a740",
                                    "title": "Choose Drink Value Meal",
                                    "tags": [{"uuid": "a39f874d-b5cf-4fbc-ada0-8eedae87ca08", "name": "Add-ons"}],
                                    "options": [{
                                        "uuid": "fe843b3d-040b-4ac0-ba99-54b3eb8bd823",
                                        "title": "Milk Shake Strawberry",
                                        "price": 100
                                    }, {
                                        "uuid": "0ac0f088-2f28-4d89-bed1-e50c686b6fa9",
                                        "title": "Milk Shake Choco",
                                        "price": 100
                                    }, {
                                        "uuid": "1a85c679-e960-4366-a845-cb1594bc5b3c",
                                        "title": "Milk Shake Vanilla",
                                        "price": 100
                                    }, {
                                        "uuid": "b241c230-f612-4d4f-ace1-96afe2cfa909",
                                        "title": "Milk Shake Banana",
                                        "price": 100
                                    }, {
                                        "uuid": "f1875510-3df9-4e31-acbb-d58d606fa855",
                                        "title": "Coca-Cola",
                                        "price": 0
                                    }, {
                                        "uuid": "606edb26-1e13-4f09-a2d8-781d265c208a",
                                        "title": "Coca-Cola Light",
                                        "price": 0
                                    }, {
                                        "uuid": "4cdf638d-29bb-4d55-959e-c43f8d2b9e22",
                                        "title": "Coca-Cola Zero",
                                        "price": 0
                                    }, {
                                        "uuid": "9dc22ed6-8217-4046-9159-c6e0291b30d0",
                                        "title": "Fanta",
                                        "price": 0
                                    }, {
                                        "uuid": "8e62bbad-1541-4cf5-bd3d-a40fe54b5fdf",
                                        "title": "Sprite",
                                        "price": 0
                                    }, {
                                        "uuid": "fca6e602-63d8-465e-bfd3-9faca75d2dfa",
                                        "title": "Lipton Ice Tea",
                                        "price": 0
                                    }, {
                                        "uuid": "f6097a9e-ab52-46f0-b065-0204be8dcf8b",
                                        "title": "SPA",
                                        "price": 0
                                    }, {
                                        "uuid": "487b057c-4f19-4ffc-b523-f450df90743b",
                                        "title": "SPA Rood",
                                        "price": 0
                                    }, {
                                        "uuid": "6b9602f3-484b-4a29-b6d7-24d7c4aa557d",
                                        "title": "Semi-skimmed Milk",
                                        "price": 0
                                    }, {
                                        "uuid": "1e82c6be-e576-4161-a06f-bf4c012ef956",
                                        "title": "Fresh Orange juice",
                                        "price": 0
                                    }, {
                                        "uuid": "cb4f1404-d148-4cea-baa5-0250bb756bd9",
                                        "title": "Fresh Smoothie Strawberry Banana",
                                        "price": 0
                                    }, {
                                        "uuid": "1b6c7c2c-7995-4cfb-a23e-2486ae0df786",
                                        "title": "Tropicana Apple Juice",
                                        "price": 0
                                    }, {
                                        "uuid": "b1d1af94-d1ee-4195-9419-746d9aabfc35",
                                        "title": "Fristi",
                                        "price": 100
                                    }, {
                                        "uuid": "06017dc6-bec8-4213-9ef6-eb0ca7c43ace",
                                        "title": "Chocomel",
                                        "price": 100
                                    }],
                                    "minPermitted": 1,
                                    "maxPermitted": 1
                                }, {
                                    "uuid": "bd73af56-7a30-4c86-ac55-c38881f7c5b6",
                                    "title": "Choose Sauce Value Meal",
                                    "tags": [{"uuid": "a39f874d-b5cf-4fbc-ada0-8eedae87ca08", "name": "Add-ons"}],
                                    "options": [{
                                        "uuid": "0f17b34d-0bd7-430f-a6e8-d31112ea0931",
                                        "title": "Fries Sauce",
                                        "price": 60
                                    }, {
                                        "uuid": "8b3a0f59-8adb-4aa2-bb0e-40d16446be64",
                                        "title": "Fries Sauce 2x",
                                        "price": 120
                                    }, {
                                        "uuid": "20bf5dc3-47cc-4747-9ed3-06f954fd9504",
                                        "title": "Mayonnaise",
                                        "price": 60
                                    }, {
                                        "uuid": "18adcb81-1109-4dc8-a91d-366a2a50a8a3",
                                        "title": "Mayonnaise 2x",
                                        "price": 120
                                    }, {
                                        "uuid": "5d9c71f5-d9f9-4ea4-83ba-b2ada89fc1c0",
                                        "title": "Ketchup",
                                        "price": 60
                                    }, {
                                        "uuid": "13782045-c62b-4ed3-91d8-b2ed57f8290c",
                                        "title": "Ketchup 2x",
                                        "price": 120
                                    }],
                                    "minPermitted": 0,
                                    "maxPermitted": 2
                                }, {
                                    "uuid": "ca306e9d-f5d3-4811-9565-fd98b4a098bb",
                                    "title": "Choose Side Order Value Meal",
                                    "tags": [{"uuid": "a39f874d-b5cf-4fbc-ada0-8eedae87ca08", "name": "Add-ons"}],
                                    "options": [{
                                        "uuid": "cd88458f-d29b-4a3c-ba32-afde7e916bc7",
                                        "title": "Chicken McNuggets 9 with 2x Barbecue Sauce",
                                        "price": 490
                                    }, {
                                        "uuid": "7ed7ae45-47f9-4dab-b00a-5c3a0d98fae4",
                                        "title": "Chicken McNuggets 9 with 2x Sweet and Sour Sauce",
                                        "price": 490
                                    }, {
                                        "uuid": "f39bb162-4e5a-4dcb-9df4-783efaa45d1c",
                                        "title": "Chicken McNuggets 9 with 2x Curry Sauce",
                                        "price": 490
                                    }, {
                                        "uuid": "0d090e56-6276-4cf5-9a4a-2152d808608c",
                                        "title": "Chicken McNuggets 9 with 2x Mustard Sauce",
                                        "price": 490
                                    }],
                                    "minPermitted": 0,
                                    "maxPermitted": 1
                                }],
                                "rawImageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/7ea97801575972d680b748381c2d5722"
                            },
                            "ce5ca383-c476-421e-a306-2bcaf48f8a76": {
                                "imageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/a66b80ab97d2acb4d7dbe1bc68e28814",
                                "itemDescription": "Verfrissende Sprite.",
                                "price": 285,
                                "title": "Sprite",
                                "uuid": "ce5ca383-c476-421e-a306-2bcaf48f8a76",
                                "customizations": [{
                                    "uuid": "1497d985-9c1e-4b31-a1d3-e3c6ebb82f35",
                                    "title": "Keuze Formaat Sprite",
                                    "tags": [{"uuid": "7d39c6c2-7f3e-4aa1-92e3-13b6aefd6e9a", "name": "Size"}],
                                    "options": [{
                                        "uuid": "bf33c153-6cd9-4c8a-b013-0d41c87669fb",
                                        "title": "Medium",
                                        "price": 0,
                                        "tags": [{"uuid": "f0cdc452-3731-45c2-8615-748725e085fc", "name": "Soda"}]
                                    }, {
                                        "uuid": "4ee9f88a-32e0-44cb-8bc9-eaf3c3b6d8b0",
                                        "title": "Groot",
                                        "price": 30,
                                        "tags": [{"uuid": "f0cdc452-3731-45c2-8615-748725e085fc", "name": "Soda"}]
                                    }],
                                    "minPermitted": 1,
                                    "maxPermitted": 1
                                }],
                                "alcoholicItems": 0,
                                "rawImageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/a66b80ab97d2acb4d7dbe1bc68e28814"
                            },
                            "3c2eea69-da07-4a10-8d5e-08b0b7fe2abd": {
                                "imageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/1ab7a9c6df4747e9a1e0d2558c2b9dc8",
                                "itemDescription": "Halfvolle chocolademelk.",
                                "price": 235,
                                "title": "Chocomel",
                                "uuid": "3c2eea69-da07-4a10-8d5e-08b0b7fe2abd",
                                "customizations": [],
                                "alcoholicItems": 0,
                                "rawImageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/1ab7a9c6df4747e9a1e0d2558c2b9dc8"
                            },
                            "b20c23f1-0635-405b-9f66-2d023ac9a57f": {
                                "imageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/5e675a1a4e1b058b0b5a6d0aaf5aef9b",
                                "itemDescription": "",
                                "price": 480,
                                "title": "Happy Meal Hamburger",
                                "uuid": "b20c23f1-0635-405b-9f66-2d023ac9a57f",
                                "customizations": [{
                                    "uuid": "8dee64a5-53c3-4021-b9dc-3e5a25d09f8f",
                                    "title": "Keuze Speeltje HM",
                                    "tags": [{"uuid": "a39f874d-b5cf-4fbc-ada0-8eedae87ca08", "name": "Add-ons"}],
                                    "options": [{
                                        "uuid": "45e47a62-899d-44c0-82a2-f01d8f84ce3d",
                                        "title": "Transformers",
                                        "price": 0,
                                        "tags": [{"uuid": "241c3612-202b-422e-86a3-21bbbe094016", "name": "Side"}]
                                    }, {
                                        "uuid": "cfcf6259-839f-4caf-9ee6-c9267a1f23c1",
                                        "title": "My Little Pony",
                                        "price": 0,
                                        "tags": [{"uuid": "241c3612-202b-422e-86a3-21bbbe094016", "name": "Side"}]
                                    }],
                                    "minPermitted": 1,
                                    "maxPermitted": 1
                                }, {
                                    "uuid": "02b460ab-f76f-42e1-8b88-ad21cb331903",
                                    "title": "Keuze Friet/Snoeptomaatjes HM",
                                    "tags": [{"uuid": "a39f874d-b5cf-4fbc-ada0-8eedae87ca08", "name": "Add-ons"}],
                                    "options": [{
                                        "uuid": "4884f0c7-e49b-4a0f-a236-3c3e0238bf18",
                                        "title": "Friet",
                                        "price": 0,
                                        "tags": [{"uuid": "241c3612-202b-422e-86a3-21bbbe094016", "name": "Side"}]
                                    }, {
                                        "uuid": "568849f6-b35f-4573-80fc-5efe25f5b1d3",
                                        "title": "Snoeptomaatjes",
                                        "price": 0,
                                        "tags": [{"uuid": "241c3612-202b-422e-86a3-21bbbe094016", "name": "Side"}]
                                    }],
                                    "minPermitted": 1,
                                    "maxPermitted": 1
                                }, {
                                    "uuid": "e735ff8c-ce53-4d91-a70f-3d1011d3c256",
                                    "title": "Keuze Drank HM",
                                    "tags": [{"uuid": "a39f874d-b5cf-4fbc-ada0-8eedae87ca08", "name": "Add-ons"}],
                                    "options": [{
                                        "uuid": "d9d9cd1b-9695-4659-ba7f-b3b14dac887a",
                                        "title": "Spa 0,33L",
                                        "price": 0,
                                        "tags": [{"uuid": "f0cdc452-3731-45c2-8615-748725e085fc", "name": "Soda"}]
                                    }, {
                                        "uuid": "78774ca3-28cc-4a5d-8e58-b3745c635bd1",
                                        "title": "Halfvolle Melk",
                                        "price": 0,
                                        "tags": [{"uuid": "f0cdc452-3731-45c2-8615-748725e085fc", "name": "Soda"}]
                                    }, {
                                        "uuid": "ea1265ea-95d8-443c-acbc-1b45ccc8e565",
                                        "title": "Vers Sinaasappelsap",
                                        "price": 0,
                                        "tags": [{"uuid": "f0cdc452-3731-45c2-8615-748725e085fc", "name": "Soda"}]
                                    }, {
                                        "uuid": "7831df65-65b4-4abe-8868-eae5e8a5efb8",
                                        "title": "Verse Smoothie Aardbei Banaan",
                                        "price": 0,
                                        "tags": [{"uuid": "8a07474e-e72d-4ffd-a78b-e8f7e1cd7f05", "name": "Smoothie"}]
                                    }, {
                                        "uuid": "bd983253-f4b3-45e5-a14a-6dd3be705df4",
                                        "title": "Tropicana Appelsap",
                                        "price": 0,
                                        "tags": [{"uuid": "f0cdc452-3731-45c2-8615-748725e085fc", "name": "Soda"}]
                                    }, {
                                        "uuid": "e26f9d71-dd06-4e44-a823-c101085564b2",
                                        "title": "Fristi",
                                        "price": 0,
                                        "tags": [{"uuid": "f0cdc452-3731-45c2-8615-748725e085fc", "name": "Soda"}]
                                    }, {
                                        "uuid": "000f1a22-9f3d-41fc-a77c-32276aae423a",
                                        "title": "Chocomel",
                                        "price": 0,
                                        "tags": [{"uuid": "f0cdc452-3731-45c2-8615-748725e085fc", "name": "Soda"}]
                                    }, {
                                        "uuid": "756ea425-ae5a-4a80-9ba8-fa3e889bc6d3",
                                        "title": "Coca-Cola klein",
                                        "price": 0,
                                        "tags": [{"uuid": "f0cdc452-3731-45c2-8615-748725e085fc", "name": "Soda"}]
                                    }, {
                                        "uuid": "5da4b48a-c4df-4a10-ac8b-d52ea6fa6228",
                                        "title": "Coca-Cola Light klein",
                                        "price": 0,
                                        "tags": [{"uuid": "f0cdc452-3731-45c2-8615-748725e085fc", "name": "Soda"}]
                                    }, {
                                        "uuid": "e5cec08b-0582-450e-8c92-d74978e1e968",
                                        "title": "Coca-Cola Zero klein",
                                        "price": 0,
                                        "tags": [{"uuid": "f0cdc452-3731-45c2-8615-748725e085fc", "name": "Soda"}]
                                    }, {
                                        "uuid": "6018d6ab-78f8-4cf0-b553-dadf49713ac2",
                                        "title": "Fanta klein",
                                        "price": 0,
                                        "tags": [{"uuid": "f0cdc452-3731-45c2-8615-748725e085fc", "name": "Soda"}]
                                    }, {
                                        "uuid": "79030847-0a90-44e2-be98-fc595d5f025e",
                                        "title": "Sprite klein",
                                        "price": 0,
                                        "tags": [{"uuid": "f0cdc452-3731-45c2-8615-748725e085fc", "name": "Soda"}]
                                    }, {
                                        "uuid": "bda39007-d877-45bd-804e-da6fd97ed58b",
                                        "title": "Lipton Ice Tea klein",
                                        "price": 0,
                                        "tags": [{"uuid": "f0cdc452-3731-45c2-8615-748725e085fc", "name": "Soda"}]
                                    }, {
                                        "uuid": "01b1c12c-79f6-47ff-bbae-b4efe9e0d093",
                                        "title": "Milk Shake Aardbei klein",
                                        "price": 100,
                                        "tags": [{"uuid": "d0430b75-1545-45aa-9cd5-8678c4657b66", "name": "Milk"}]
                                    }, {
                                        "uuid": "d1fe54d0-a3be-4b8f-b76b-266b3435a670",
                                        "title": "Milk Shake Choco klein",
                                        "price": 100,
                                        "tags": [{"uuid": "d0430b75-1545-45aa-9cd5-8678c4657b66", "name": "Milk"}]
                                    }, {
                                        "uuid": "e6427eb8-2225-4aed-9779-84b5763a2a21",
                                        "title": "Milk Shake Vanille klein",
                                        "price": 100,
                                        "tags": [{"uuid": "d0430b75-1545-45aa-9cd5-8678c4657b66", "name": "Milk"}]
                                    }, {
                                        "uuid": "7275e490-ba0f-462c-a83f-4c105f7086ad",
                                        "title": "Milk Shake Banaan klein",
                                        "price": 100,
                                        "tags": [{"uuid": "d0430b75-1545-45aa-9cd5-8678c4657b66", "name": "Milk"}]
                                    }],
                                    "minPermitted": 1,
                                    "maxPermitted": 1
                                }, {
                                    "uuid": "baba6c71-62ee-4300-b3fc-b7e5f2d43a6b",
                                    "title": "Keuze Dessert HM",
                                    "tags": [{"uuid": "a39f874d-b5cf-4fbc-ada0-8eedae87ca08", "name": "Add-ons"}],
                                    "options": [{
                                        "uuid": "2341d0a4-0a97-44f7-b3a7-710e1f6ac024",
                                        "title": "Snoeptomaatjes",
                                        "price": 0,
                                        "tags": [{"uuid": "241c3612-202b-422e-86a3-21bbbe094016", "name": "Side"}]
                                    }, {
                                        "uuid": "0261cbeb-674d-4bb4-bfcb-c22f474ae941",
                                        "title": "Vers Fruit",
                                        "price": 0,
                                        "tags": [{"uuid": "241c3612-202b-422e-86a3-21bbbe094016", "name": "Side"}]
                                    }, {
                                        "uuid": "197e6aa6-ad45-411a-82d5-d6c157373e73",
                                        "title": "Danoontje",
                                        "price": 0,
                                        "tags": [{"uuid": "241c3612-202b-422e-86a3-21bbbe094016", "name": "Side"}]
                                    }],
                                    "minPermitted": 1,
                                    "maxPermitted": 1
                                }],
                                "alcoholicItems": 0,
                                "rawImageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/5e675a1a4e1b058b0b5a6d0aaf5aef9b"
                            },
                            "d253ed85-ba68-4ddc-87cb-8244b3ffb300": {
                                "imageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/8061c08739b9b227fb31e662f8703121",
                                "itemDescription": "Refreshing crushed ice smoothie.",
                                "price": 325,
                                "title": "Iced Fruit Smoothie Strawberry & Banana",
                                "uuid": "d253ed85-ba68-4ddc-87cb-8244b3ffb300",
                                "customizations": [],
                                "alcoholicItems": 0,
                                "rawImageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/8061c08739b9b227fb31e662f8703121"
                            },
                            "0f9716ea-64b5-49c5-babb-abbe37758b09": {
                                "imageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/ccf634176fb423bd1ca8de46a99d93da",
                                "itemDescription": "Luxurious crushed ice frappe with cream and caramel sauce.",
                                "price": 325,
                                "title": "Iced Frappé Caramel",
                                "uuid": "0f9716ea-64b5-49c5-babb-abbe37758b09",
                                "customizations": [],
                                "alcoholicItems": 0,
                                "rawImageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/ccf634176fb423bd1ca8de46a99d93da"
                            },
                            "edb272cf-347c-4c9f-9c3a-8abc01beabf7": {
                                "imageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/705e8e47f9f8c8149a11d47b5a31d7ed",
                                "itemDescription": "Thee van Lipton.",
                                "price": 225,
                                "title": "Thee",
                                "uuid": "edb272cf-347c-4c9f-9c3a-8abc01beabf7",
                                "customizations": [{
                                    "uuid": "fc84e681-b825-408d-a3f8-20e1e908e0bb",
                                    "title": "Keuze Formaat Thee",
                                    "tags": [{"uuid": "7d39c6c2-7f3e-4aa1-92e3-13b6aefd6e9a", "name": "Size"}],
                                    "options": [{
                                        "uuid": "8f05a8a5-7c51-4230-9714-d206baf257b6",
                                        "title": "Medium",
                                        "price": 0,
                                        "tags": [{"uuid": "f0cdc452-3731-45c2-8615-748725e085fc", "name": "Soda"}]
                                    }, {
                                        "uuid": "843756ca-abbe-484f-a8e3-5b34ea81ac47",
                                        "title": "Groot",
                                        "price": 35,
                                        "tags": [{"uuid": "f0cdc452-3731-45c2-8615-748725e085fc", "name": "Soda"}]
                                    }],
                                    "minPermitted": 1,
                                    "maxPermitted": 1
                                }],
                                "alcoholicItems": 0,
                                "rawImageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/705e8e47f9f8c8149a11d47b5a31d7ed"
                            },
                            "191ed883-9331-455f-b385-b20ede0c5d42": {
                                "endorsement": {
                                    "backgroundColor": {
                                        "alpha": 1,
                                        "color": "59BD5A"
                                    },
                                    "iconColor": {"alpha": 1, "color": "59BD5A"},
                                    "iconUrl": "https://uber-test.s3.amazonaws.com/badge_healthy@3x.png",
                                    "text": "Vegetarian",
                                    "textColor": {"alpha": 1, "color": "FFFFFF"}
                                },
                                "imageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/943767792114f3ed63c65cc5916dec2b",
                                "itemDescription": "Burger made of vegetable with lettuce and sandwich sauce.",
                                "price": 815,
                                "title": "Veggie Medium Value Meal",
                                "uuid": "191ed883-9331-455f-b385-b20ede0c5d42",
                                "customizations": [{
                                    "uuid": "4a51281f-275c-4f1f-ab6e-caef54a64d56",
                                    "title": "Choose Size Value Meal",
                                    "tags": [{"uuid": "7d39c6c2-7f3e-4aa1-92e3-13b6aefd6e9a", "name": "Size"}],
                                    "options": [{
                                        "uuid": "008d37b8-7a20-49a5-8043-9eddee709388",
                                        "title": "Medium",
                                        "price": 0,
                                        "tags": [{"uuid": "882cedee-2d7a-4019-b46b-227082baeb7c", "name": "Medium"}]
                                    }, {
                                        "uuid": "e91da1da-2fe0-4a9b-b1b1-a0be8d1c438f",
                                        "title": "Large",
                                        "price": 75,
                                        "tags": [{"uuid": "21f0db62-8d48-433d-a6ea-2fdb1b8b4648", "name": "Large"}]
                                    }],
                                    "minPermitted": 1,
                                    "maxPermitted": 1
                                }, {
                                    "uuid": "4713509c-9eaa-401d-9795-3ea806b4ccfd",
                                    "title": "Choose Side Value Meal",
                                    "tags": [{"uuid": "a39f874d-b5cf-4fbc-ada0-8eedae87ca08", "name": "Add-ons"}],
                                    "options": [{
                                        "uuid": "de508e2f-f950-4046-b8a9-acfaf69275d0",
                                        "title": "French Fries",
                                        "price": 0
                                    }, {
                                        "uuid": "4bba8eac-7954-4770-8742-4a909db0f92f",
                                        "title": "Sweet Potatoes",
                                        "price": 0
                                    }, {
                                        "uuid": "5d8e16e3-af6f-4ca0-8f19-129f3552bf4d",
                                        "title": "Side Salad",
                                        "price": 0
                                    }],
                                    "minPermitted": 1,
                                    "maxPermitted": 1
                                }, {
                                    "uuid": "e82fad9a-08a3-4288-832e-2bc105a89073",
                                    "title": "Choose Drink Value Meal",
                                    "tags": [{"uuid": "a39f874d-b5cf-4fbc-ada0-8eedae87ca08", "name": "Add-ons"}],
                                    "options": [{
                                        "uuid": "87b8b39c-33ba-4a28-aae2-de21fc6c4c8f",
                                        "title": "Milk Shake Strawberry",
                                        "price": 100
                                    }, {
                                        "uuid": "66f8aecf-1d9f-468f-9024-840be5a468c6",
                                        "title": "Milk Shake Choco",
                                        "price": 100
                                    }, {
                                        "uuid": "419b3e7d-ccd6-46fe-bb42-221965bb89e5",
                                        "title": "Milk Shake Vanilla",
                                        "price": 100
                                    }, {
                                        "uuid": "b239225e-314a-4bf2-be08-04a8d30f1a5f",
                                        "title": "Milk Shake Banana",
                                        "price": 100
                                    }, {
                                        "uuid": "fb58922d-62b1-4b3c-b0f0-4c7de39d6b03",
                                        "title": "Coca-Cola",
                                        "price": 0
                                    }, {
                                        "uuid": "6affc758-c313-4975-8fa5-53d75f6668c4",
                                        "title": "Coca-Cola Light",
                                        "price": 0
                                    }, {
                                        "uuid": "0ee9d520-95ac-46e3-ad76-a9724fcb5c7a",
                                        "title": "Coca-Cola Zero",
                                        "price": 0
                                    }, {
                                        "uuid": "eeda53f5-0094-4f93-9e58-8f4c937dd51b",
                                        "title": "Fanta",
                                        "price": 0
                                    }, {
                                        "uuid": "f36785fe-c42a-457a-b0bf-b7c3231e95e5",
                                        "title": "Sprite",
                                        "price": 0
                                    }, {
                                        "uuid": "2d4010f8-c6d9-40c9-8f44-ade91789e2d0",
                                        "title": "Lipton Ice Tea",
                                        "price": 0
                                    }, {
                                        "uuid": "45326dc4-7f7f-4d24-9ddf-43092b0d0e06",
                                        "title": "SPA",
                                        "price": 0
                                    }, {
                                        "uuid": "1a8f4733-4d0c-40be-9a90-65352ef4493e",
                                        "title": "SPA Rood",
                                        "price": 0
                                    }, {
                                        "uuid": "525cd9ca-a942-4fcc-829a-2c234051cdae",
                                        "title": "Semi-skimmed Milk",
                                        "price": 0
                                    }, {
                                        "uuid": "b7a7f540-5631-4aef-87f4-a433c646d8ed",
                                        "title": "Fresh Orange juice",
                                        "price": 0
                                    }, {
                                        "uuid": "48ff930c-c5ee-4994-a174-bf85ffa2a71a",
                                        "title": "Fresh Smoothie Strawberry Banana",
                                        "price": 0
                                    }, {
                                        "uuid": "f30a74b4-38d3-4d76-b89a-60786ca10fd8",
                                        "title": "Tropicana Apple Juice",
                                        "price": 0
                                    }, {
                                        "uuid": "afcb9f34-4b88-444c-b3b0-b8c10901734b",
                                        "title": "Fristi",
                                        "price": 100
                                    }, {
                                        "uuid": "62535def-0b8c-4d1d-8f40-c7b20e07182b",
                                        "title": "Chocomel",
                                        "price": 100
                                    }],
                                    "minPermitted": 1,
                                    "maxPermitted": 1
                                }, {
                                    "uuid": "66e4b522-804c-4b3f-9469-5a9f9708f355",
                                    "title": "Choose Sauce Value Meal",
                                    "tags": [{"uuid": "a39f874d-b5cf-4fbc-ada0-8eedae87ca08", "name": "Add-ons"}],
                                    "options": [{
                                        "uuid": "f134081a-4dd0-44ea-a263-392ce964890b",
                                        "title": "Fries Sauce",
                                        "price": 60
                                    }, {
                                        "uuid": "d491a705-8b22-42bb-bc17-26591a241527",
                                        "title": "Fries Sauce 2x",
                                        "price": 120
                                    }, {
                                        "uuid": "52a47457-5d39-4ef5-9081-baa8d4c2c95b",
                                        "title": "Mayonnaise",
                                        "price": 60
                                    }, {
                                        "uuid": "e9d7220c-5575-4695-b708-5d0ab516f625",
                                        "title": "Mayonnaise 2x",
                                        "price": 120
                                    }, {
                                        "uuid": "234b81fb-4d7a-4905-921a-23d9613ca749",
                                        "title": "Ketchup",
                                        "price": 60
                                    }, {
                                        "uuid": "281d057d-ab8e-4753-bf43-0edff1fd1524",
                                        "title": "Ketchup 2x",
                                        "price": 120
                                    }],
                                    "minPermitted": 0,
                                    "maxPermitted": 2
                                }, {
                                    "uuid": "2ec1c03e-1d48-43e5-80f0-658ca54671c9",
                                    "title": "Choose Side Order Value Meal",
                                    "tags": [{"uuid": "a39f874d-b5cf-4fbc-ada0-8eedae87ca08", "name": "Add-ons"}],
                                    "options": [{
                                        "uuid": "8619e5bd-fe82-400e-8cd6-ec787f93324e",
                                        "title": "Chicken McNuggets 9 with 2x Barbecue Sauce",
                                        "price": 490
                                    }, {
                                        "uuid": "62d6f769-b33a-44a3-a646-b3a5286858c0",
                                        "title": "Chicken McNuggets 9 with 2x Sweet and Sour Sauce",
                                        "price": 490
                                    }, {
                                        "uuid": "ebddf80c-94a0-4bde-a641-f98c3734ec58",
                                        "title": "Chicken McNuggets 9 with 2x Curry Sauce",
                                        "price": 490
                                    }, {
                                        "uuid": "3a4230d7-6ba2-4b7a-b200-3acf4dfbf27d",
                                        "title": "Chicken McNuggets 9 with 2x Mustard Sauce",
                                        "price": 490
                                    }],
                                    "minPermitted": 0,
                                    "maxPermitted": 1
                                }],
                                "rawImageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/943767792114f3ed63c65cc5916dec2b"
                            },
                            "654e36b8-3bc9-407b-bdd7-47ddd1d17b39": {
                                "imageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/200403a0005aa203b81961111ce4d6a8",
                                "itemDescription": "Perfect voor een warme zomerdag: krokant gebakken garnalen met een zoete, milde chilisaus.",
                                "price": 250,
                                "title": "Crispy Shrimps",
                                "uuid": "654e36b8-3bc9-407b-bdd7-47ddd1d17b39",
                                "customizations": []
                            },
                            "5433d780-314e-4fb8-8d3f-0a42a5e0a69b": {
                                "imageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/b263452351f646b9d38d5e2d1493e537",
                                "itemDescription": "Koffie Verkeerd van Segafredo.",
                                "price": 260,
                                "title": "Koffie Verkeerd",
                                "uuid": "5433d780-314e-4fb8-8d3f-0a42a5e0a69b",
                                "customizations": [{
                                    "uuid": "1e8c0bd3-16e5-4664-868c-c17f7b948883",
                                    "title": "Keuze Formaat Koffie Verkeerd",
                                    "tags": [{"uuid": "7d39c6c2-7f3e-4aa1-92e3-13b6aefd6e9a", "name": "Size"}],
                                    "options": [{
                                        "uuid": "55fab2be-5139-4c57-8887-d0a72f788f15",
                                        "title": "Medium",
                                        "price": 0,
                                        "tags": [{"uuid": "f0cdc452-3731-45c2-8615-748725e085fc", "name": "Soda"}]
                                    }, {
                                        "uuid": "6a95070f-0591-4334-9398-99e591578b25",
                                        "title": "Groot",
                                        "price": 35,
                                        "tags": [{"uuid": "f0cdc452-3731-45c2-8615-748725e085fc", "name": "Soda"}]
                                    }],
                                    "minPermitted": 1,
                                    "maxPermitted": 1
                                }],
                                "alcoholicItems": 0,
                                "rawImageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/b263452351f646b9d38d5e2d1493e537"
                            },
                            "85d36f62-5c2f-4f2f-995b-b04ad23ac490": {
                                "endorsement": {
                                    "backgroundColor": {
                                        "alpha": 1,
                                        "color": "59BD5A"
                                    },
                                    "iconColor": {"alpha": 1, "color": "59BD5A"},
                                    "iconUrl": "https://uber-test.s3.amazonaws.com/badge_healthy@3x.png",
                                    "text": "Vegetarian",
                                    "textColor": {"alpha": 1, "color": "FFFFFF"}
                                },
                                "imageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/c81518a22a0aafb661693158c88dcdb7",
                                "itemDescription": "Burger made of vegetable with lettuce and sandwich sauce.",
                                "price": 425,
                                "title": "Veggie Burger",
                                "uuid": "85d36f62-5c2f-4f2f-995b-b04ad23ac490",
                                "customizations": [],
                                "alcoholicItems": 0,
                                "rawImageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/c81518a22a0aafb661693158c88dcdb7"
                            },
                            "a397459e-299d-4e09-b5ff-77df8a8b53ba": {
                                "imageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/c1af726de996f8439f3181b5e2b2df3f",
                                "itemDescription": "",
                                "price": 480,
                                "title": "Happy Meal McFish",
                                "uuid": "a397459e-299d-4e09-b5ff-77df8a8b53ba",
                                "customizations": [{
                                    "uuid": "ffc34052-67f4-4cc6-868b-afe814553a03",
                                    "title": "Choose Toy HM",
                                    "tags": [{"uuid": "a39f874d-b5cf-4fbc-ada0-8eedae87ca08", "name": "Add-ons"}],
                                    "options": [{
                                        "uuid": "53369f42-74de-4a0f-95b5-e243936c81e9",
                                        "title": "Transformers",
                                        "price": 0,
                                        "tags": [{"uuid": "241c3612-202b-422e-86a3-21bbbe094016", "name": "Side"}]
                                    }, {
                                        "uuid": "148340cf-62a7-4c8d-a828-415082385183",
                                        "title": "My Little Pony",
                                        "price": 0,
                                        "tags": [{"uuid": "241c3612-202b-422e-86a3-21bbbe094016", "name": "Side"}]
                                    }],
                                    "minPermitted": 1,
                                    "maxPermitted": 1
                                }, {
                                    "uuid": "da6591c4-64c3-4ec8-b16e-637e4a0e5d89",
                                    "title": "Choose Fries/Cherry Tomatoes HM",
                                    "tags": [{"uuid": "a39f874d-b5cf-4fbc-ada0-8eedae87ca08", "name": "Add-ons"}],
                                    "options": [{
                                        "uuid": "28cf5142-783c-424a-a7c1-509c56551e28",
                                        "title": "Fries",
                                        "price": 0,
                                        "tags": [{"uuid": "241c3612-202b-422e-86a3-21bbbe094016", "name": "Side"}]
                                    }, {
                                        "uuid": "5bc0fc82-b3bb-4443-8650-ee49dc52787d",
                                        "title": "Cherry Tomatoes",
                                        "price": 0,
                                        "tags": [{"uuid": "241c3612-202b-422e-86a3-21bbbe094016", "name": "Side"}]
                                    }],
                                    "minPermitted": 1,
                                    "maxPermitted": 1
                                }, {
                                    "uuid": "8b474ca7-8af6-4ddd-a741-a8f544c5ed38",
                                    "title": "Choose Drink HM",
                                    "tags": [{"uuid": "a39f874d-b5cf-4fbc-ada0-8eedae87ca08", "name": "Add-ons"}],
                                    "options": [{
                                        "uuid": "79774104-2101-4b67-b4e6-dc99dabb5c2a",
                                        "title": "SPA 0,33L",
                                        "price": 0,
                                        "tags": [{"uuid": "f0cdc452-3731-45c2-8615-748725e085fc", "name": "Soda"}]
                                    }, {
                                        "uuid": "9c123809-6962-4d7f-805b-9aa4004ec6f7",
                                        "title": "Semi-skimmed Milk",
                                        "price": 0,
                                        "tags": [{"uuid": "f0cdc452-3731-45c2-8615-748725e085fc", "name": "Soda"}]
                                    }, {
                                        "uuid": "6071bf87-c2b8-4e9b-bbac-54b614a4b629",
                                        "title": "Fresh Orange juice",
                                        "price": 0,
                                        "tags": [{"uuid": "f0cdc452-3731-45c2-8615-748725e085fc", "name": "Soda"}]
                                    }, {
                                        "uuid": "24a9089d-fc43-42d4-a183-af3674f6ab28",
                                        "title": "Fresh Smoothie Strawberry Banana",
                                        "price": 0,
                                        "tags": [{"uuid": "8a07474e-e72d-4ffd-a78b-e8f7e1cd7f05", "name": "Smoothie"}]
                                    }, {
                                        "uuid": "39f54f66-16a8-45c3-9b58-7a3192ab604a",
                                        "title": "Tropicana Apple Juice",
                                        "price": 0,
                                        "tags": [{"uuid": "f0cdc452-3731-45c2-8615-748725e085fc", "name": "Soda"}]
                                    }, {
                                        "uuid": "935636e3-15e6-4c78-bf94-621daa105d3e",
                                        "title": "Fristi",
                                        "price": 0,
                                        "tags": [{"uuid": "f0cdc452-3731-45c2-8615-748725e085fc", "name": "Soda"}]
                                    }, {
                                        "uuid": "1762c468-3efa-419e-be0e-0bb7dac6953f",
                                        "title": "Chocomel",
                                        "price": 0,
                                        "tags": [{"uuid": "f0cdc452-3731-45c2-8615-748725e085fc", "name": "Soda"}]
                                    }, {
                                        "uuid": "5d4a3c66-1fe0-4254-9c08-5cb4a0591c5e",
                                        "title": "Coca-Cola small",
                                        "price": 0,
                                        "tags": [{"uuid": "f0cdc452-3731-45c2-8615-748725e085fc", "name": "Soda"}]
                                    }, {
                                        "uuid": "db2baffd-418a-4ec5-a03c-4c2af1576206",
                                        "title": "Coca-Cola Light small",
                                        "price": 0,
                                        "tags": [{"uuid": "f0cdc452-3731-45c2-8615-748725e085fc", "name": "Soda"}]
                                    }, {
                                        "uuid": "3fb67d25-7bcf-43af-808a-773e20db5e4e",
                                        "title": "Coca-Cola Zero small",
                                        "price": 0,
                                        "tags": [{"uuid": "f0cdc452-3731-45c2-8615-748725e085fc", "name": "Soda"}]
                                    }, {
                                        "uuid": "769a9d92-016e-4d9f-99bd-fa36f773700c",
                                        "title": "Fanta small",
                                        "price": 0,
                                        "tags": [{"uuid": "f0cdc452-3731-45c2-8615-748725e085fc", "name": "Soda"}]
                                    }, {
                                        "uuid": "937212bc-ad38-47bd-8f17-ebcb97bb5061",
                                        "title": "Sprite small",
                                        "price": 0,
                                        "tags": [{"uuid": "f0cdc452-3731-45c2-8615-748725e085fc", "name": "Soda"}]
                                    }, {
                                        "uuid": "5e3b0d34-d353-476d-9f54-c6619a5cfb66",
                                        "title": "Lipton Ice Tea small",
                                        "price": 0,
                                        "tags": [{"uuid": "f0cdc452-3731-45c2-8615-748725e085fc", "name": "Soda"}]
                                    }, {
                                        "uuid": "44103784-fb07-4131-94ba-a35aeb38efac",
                                        "title": "Milk Shake Strawberry small",
                                        "price": 100,
                                        "tags": [{"uuid": "d0430b75-1545-45aa-9cd5-8678c4657b66", "name": "Milk"}]
                                    }, {
                                        "uuid": "6cc93da8-50ec-4c7c-9911-6b8c32e25efe",
                                        "title": "Milk Shake Choco small",
                                        "price": 100,
                                        "tags": [{"uuid": "d0430b75-1545-45aa-9cd5-8678c4657b66", "name": "Milk"}]
                                    }, {
                                        "uuid": "50ec98f4-d81b-4924-89a3-1c2f706a22b5",
                                        "title": "Milk Shake Vanilla small",
                                        "price": 100,
                                        "tags": [{"uuid": "d0430b75-1545-45aa-9cd5-8678c4657b66", "name": "Milk"}]
                                    }, {
                                        "uuid": "b29d6869-ded4-4b52-a97f-69b9a5481b5a",
                                        "title": "Milk Shake Banana small",
                                        "price": 100,
                                        "tags": [{"uuid": "d0430b75-1545-45aa-9cd5-8678c4657b66", "name": "Milk"}]
                                    }],
                                    "minPermitted": 1,
                                    "maxPermitted": 1
                                }, {
                                    "uuid": "ad390a47-71b7-4564-b5d9-99084db768c1",
                                    "title": "Choose Dessert HM",
                                    "tags": [{"uuid": "a39f874d-b5cf-4fbc-ada0-8eedae87ca08", "name": "Add-ons"}],
                                    "options": [{
                                        "uuid": "f8aa37f1-0411-4757-a34a-1d1cca6be384",
                                        "title": "Cherry Tomatoes",
                                        "price": 0,
                                        "tags": [{"uuid": "241c3612-202b-422e-86a3-21bbbe094016", "name": "Side"}]
                                    }, {
                                        "uuid": "a2bacb17-7a24-42a9-a79c-1694b6e3e5c0",
                                        "title": "Fresh Fruit",
                                        "price": 0,
                                        "tags": [{"uuid": "241c3612-202b-422e-86a3-21bbbe094016", "name": "Side"}]
                                    }, {
                                        "uuid": "ef74fa48-6e71-4b32-8ce3-39f4eef3922d",
                                        "title": "Danoontje",
                                        "price": 0,
                                        "tags": [{"uuid": "241c3612-202b-422e-86a3-21bbbe094016", "name": "Side"}]
                                    }],
                                    "minPermitted": 1,
                                    "maxPermitted": 1
                                }],
                                "alcoholicItems": 0,
                                "rawImageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/c1af726de996f8439f3181b5e2b2df3f"
                            },
                            "e03a7720-6060-4ac6-b010-32327cf87643": {
                                "imageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/a5f9ebfdc6189a3863b40dd16ebd2b76",
                                "itemDescription": "Grote wrap met krokante kip, sla, tomaat, bacon en een frisse sandwichsaus.",
                                "price": 495,
                                "title": "Grote Mcwrap Chicken BLT",
                                "uuid": "e03a7720-6060-4ac6-b010-32327cf87643",
                                "customizations": []
                            },
                            "ce24de7e-ef65-4a0f-a477-500704a69df9": {
                                "imageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/18ecef9420333f75a489ff1188553ef6",
                                "itemDescription": "Verfrissende smoothie op basis van crushed ice en een heerlijke fruitmix.",
                                "price": 325,
                                "title": "Iced Fruit Smoothie Aardbei & Banaan",
                                "uuid": "ce24de7e-ef65-4a0f-a477-500704a69df9",
                                "customizations": [],
                                "alcoholicItems": 0,
                                "rawImageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/18ecef9420333f75a489ff1188553ef6"
                            },
                            "7cc9b742-e8cf-4fdc-b6d3-f286b9e26403": {
                                "imageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/d4b6d2fea079d3495eab93cb454eb099",
                                "itemDescription": "Milk Shake with banana flavour.",
                                "price": 325,
                                "title": "Milk Shake Banana",
                                "uuid": "7cc9b742-e8cf-4fdc-b6d3-f286b9e26403",
                                "customizations": [{
                                    "uuid": "54bc5ddc-c0f2-4cbb-b3e4-aad16e4dc27c",
                                    "title": "Choose Size Milk Shake Banana",
                                    "tags": [{"uuid": "7d39c6c2-7f3e-4aa1-92e3-13b6aefd6e9a", "name": "Size"}],
                                    "options": [{
                                        "uuid": "b2355fef-910c-4d25-8ade-798294ad7ad4",
                                        "title": "Medium",
                                        "price": 0,
                                        "tags": [{"uuid": "d0430b75-1545-45aa-9cd5-8678c4657b66", "name": "Milk"}]
                                    }, {
                                        "uuid": "a580c706-c696-4f1d-bf26-47a637f1d3ca",
                                        "title": "Large",
                                        "price": 20,
                                        "tags": [{"uuid": "d0430b75-1545-45aa-9cd5-8678c4657b66", "name": "Milk"}]
                                    }],
                                    "minPermitted": 1,
                                    "maxPermitted": 1
                                }],
                                "alcoholicItems": 0,
                                "rawImageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/d4b6d2fea079d3495eab93cb454eb099"
                            },
                            "f2365fde-cde6-46d9-a245-9ebe649751f2": {
                                "imageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/f23fb7a1f42b9033b1362f521d9d6cbf",
                                "itemDescription": "Cappuccino van Segafredo.",
                                "price": 260,
                                "title": "Cappuccino",
                                "uuid": "f2365fde-cde6-46d9-a245-9ebe649751f2",
                                "customizations": [{
                                    "uuid": "9c264d9a-4def-4d92-9d4f-d78c728f6506",
                                    "title": "Keuze Formaat Cappuccino",
                                    "tags": [{"uuid": "7d39c6c2-7f3e-4aa1-92e3-13b6aefd6e9a", "name": "Size"}],
                                    "options": [{
                                        "uuid": "c1b60a7a-0218-4d9e-8ff5-063609ec3cee",
                                        "title": "Medium",
                                        "price": 0,
                                        "tags": [{"uuid": "f0cdc452-3731-45c2-8615-748725e085fc", "name": "Soda"}]
                                    }, {
                                        "uuid": "df0c0f37-8933-4a7b-a25f-54de40ff9680",
                                        "title": "Groot",
                                        "price": 35,
                                        "tags": [{"uuid": "f0cdc452-3731-45c2-8615-748725e085fc", "name": "Soda"}]
                                    }],
                                    "minPermitted": 1,
                                    "maxPermitted": 1
                                }],
                                "alcoholicItems": 0,
                                "rawImageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/f23fb7a1f42b9033b1362f521d9d6cbf"
                            },
                            "f824c6f4-d7ab-4e15-8980-ebfabad8d32c": {
                                "imageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/c88c43ae9bcda5a024026fb4a28c33c8",
                                "itemDescription": "Soft dairy icecream with sauce and peanuts. (peanuts separate)",
                                "price": 245,
                                "title": "Sundae Icecream with Chocolate and Peanuts",
                                "uuid": "f824c6f4-d7ab-4e15-8980-ebfabad8d32c",
                                "customizations": [{
                                    "uuid": "ce8ae284-c83e-49c3-a282-a7b8d82c0779",
                                    "title": "Choose Sauce Sundae Ice",
                                    "tags": [{
                                        "uuid": "02e1f616-507b-4f3f-8e22-02ac5afbd34d",
                                        "name": "Sauce/Dressing"
                                    }],
                                    "options": [{
                                        "uuid": "7122d7d9-4aea-42b3-8426-32033abd2f4b",
                                        "title": "No Sauce",
                                        "price": 0,
                                        "tags": [{"uuid": "447030e6-340b-460b-b1cb-915ad88d038e", "name": "Sauce"}]
                                    }],
                                    "minPermitted": 0,
                                    "maxPermitted": 1
                                }],
                                "alcoholicItems": 0,
                                "rawImageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/c88c43ae9bcda5a024026fb4a28c33c8"
                            },
                            "42633c1c-5e07-4564-8c5d-c20a94229dfd": {
                                "imageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/cf75580342522e6aa46347482c16f566",
                                "itemDescription": "Soft dairy icecream with sauce and peanuts. (peanuts separate)",
                                "price": 245,
                                "title": "Sundae Icecream with Strawberry and Peanuts",
                                "uuid": "42633c1c-5e07-4564-8c5d-c20a94229dfd",
                                "customizations": [{
                                    "uuid": "f1456408-e4fb-4a81-a2ce-097deac29e2b",
                                    "title": "Choose Sauce Sundae Ice",
                                    "tags": [{
                                        "uuid": "02e1f616-507b-4f3f-8e22-02ac5afbd34d",
                                        "name": "Sauce/Dressing"
                                    }],
                                    "options": [{
                                        "uuid": "6cd5480a-04c9-4465-9627-cad3061a0d5e",
                                        "title": "No Sauce",
                                        "price": 0,
                                        "tags": [{"uuid": "447030e6-340b-460b-b1cb-915ad88d038e", "name": "Sauce"}]
                                    }],
                                    "minPermitted": 0,
                                    "maxPermitted": 1
                                }],
                                "alcoholicItems": 0,
                                "rawImageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/cf75580342522e6aa46347482c16f566"
                            },
                            "059c4151-d349-46db-8c3c-b3b1d0c0b54b": {
                                "imageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/a0aa4ec40fd8fda94f6e240c04477a48",
                                "itemDescription": "Vergeet alles wat je weet over de smaak van kip. Nieuw op het menu is de Homestyle Crispy Chicken. Homestyle gemarineerde kipburger, heerlijk juicy van binnen en toch crispy van buiten. Met een luxe sesambroodje, natuurlijk gerijpte Cheddar kaas, lange crispy bacon strips (varkensvlees), Batavia sla, rode uien en gekarameliseerde uiencompote. De spicy Pimento saus maakt hem helemaal af.",
                                "price": 495,
                                "title": "Homestyle Crispy Chicken",
                                "uuid": "059c4151-d349-46db-8c3c-b3b1d0c0b54b",
                                "customizations": [],
                                "rawImageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/a0aa4ec40fd8fda94f6e240c04477a48"
                            },
                            "da6e6677-3243-4419-b275-b34629ea0bd8": {
                                "imageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/a5f9ebfdc6189a3863b40dd16ebd2b76",
                                "itemDescription": "Large wrap with crispy chicken, lettuce, tomato, bacon and a refreshing sandwich sauce.",
                                "price": 495,
                                "title": "Large Mcwrap Chicken BLT",
                                "uuid": "da6e6677-3243-4419-b275-b34629ea0bd8",
                                "customizations": []
                            },
                            "75f2207f-9fd6-4533-aa8e-5b9186a8bbb4": {
                                "imageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/e421135d9013f8b9888af65edbb6b41b",
                                "itemDescription": "Fish filet with Cheddar cheese on a steamed bun.",
                                "price": 815,
                                "title": "Filet-O-Fish Medium Value Meal",
                                "uuid": "75f2207f-9fd6-4533-aa8e-5b9186a8bbb4",
                                "customizations": [{
                                    "uuid": "a97ba1ad-a308-4b49-ac23-290d9fab2a21",
                                    "title": "Choose Size Value Meal",
                                    "tags": [{"uuid": "7d39c6c2-7f3e-4aa1-92e3-13b6aefd6e9a", "name": "Size"}],
                                    "options": [{
                                        "uuid": "23d7b2fc-8b05-44c3-8d94-cd673f02147e",
                                        "title": "Medium",
                                        "price": 0,
                                        "tags": [{"uuid": "882cedee-2d7a-4019-b46b-227082baeb7c", "name": "Medium"}]
                                    }, {
                                        "uuid": "d3446347-de1f-4e65-af6e-45d6e1aec4f2",
                                        "title": "Large",
                                        "price": 75,
                                        "tags": [{"uuid": "21f0db62-8d48-433d-a6ea-2fdb1b8b4648", "name": "Large"}]
                                    }],
                                    "minPermitted": 1,
                                    "maxPermitted": 1
                                }, {
                                    "uuid": "c9128801-2f73-4cae-b3b2-67401f401055",
                                    "title": "Choose Side Value Meal",
                                    "tags": [{"uuid": "a39f874d-b5cf-4fbc-ada0-8eedae87ca08", "name": "Add-ons"}],
                                    "options": [{
                                        "uuid": "0335a93a-2fc9-4c47-adca-731488c4b8d2",
                                        "title": "French Fries",
                                        "price": 0
                                    }, {
                                        "uuid": "e24a1e15-6ccf-4353-8d2a-e71dce01c4e8",
                                        "title": "Sweet Potatoes",
                                        "price": 0
                                    }, {
                                        "uuid": "acbbd9c2-ed89-49ce-9802-006f078d0d45",
                                        "title": "Side Salad",
                                        "price": 0
                                    }],
                                    "minPermitted": 1,
                                    "maxPermitted": 1
                                }, {
                                    "uuid": "ea0776f8-c23e-45bf-9403-1e3b166e1dc0",
                                    "title": "Choose Drink Value Meal",
                                    "tags": [{"uuid": "a39f874d-b5cf-4fbc-ada0-8eedae87ca08", "name": "Add-ons"}],
                                    "options": [{
                                        "uuid": "da4868b1-bab8-42f0-bc8a-5376be8063e6",
                                        "title": "Milk Shake Strawberry",
                                        "price": 100
                                    }, {
                                        "uuid": "7a6ed5c5-64c4-40fe-9b4c-8a95d1d302bd",
                                        "title": "Milk Shake Choco",
                                        "price": 100
                                    }, {
                                        "uuid": "dece2669-937c-4c0d-b92d-4a52b37f57fe",
                                        "title": "Milk Shake Vanilla",
                                        "price": 100
                                    }, {
                                        "uuid": "fac3b50b-ac85-4f5b-9663-92719699b634",
                                        "title": "Milk Shake Banana",
                                        "price": 100
                                    }, {
                                        "uuid": "d13a10eb-7a2c-450e-99c0-feffe23faefe",
                                        "title": "Coca-Cola",
                                        "price": 0
                                    }, {
                                        "uuid": "106e6756-a8ea-4391-8ebe-39d43079c728",
                                        "title": "Coca-Cola Light",
                                        "price": 0
                                    }, {
                                        "uuid": "7177d545-17e7-4a75-96a0-cad930732775",
                                        "title": "Coca-Cola Zero",
                                        "price": 0
                                    }, {
                                        "uuid": "3b490e71-ecfa-42da-b896-4f2ed1bbe9ab",
                                        "title": "Fanta",
                                        "price": 0
                                    }, {
                                        "uuid": "33ebf48f-cce8-49cf-a7ca-751a2bf6b970",
                                        "title": "Sprite",
                                        "price": 0
                                    }, {
                                        "uuid": "9bb873ba-980e-40b0-a03c-985b378edd2c",
                                        "title": "Lipton Ice Tea",
                                        "price": 0
                                    }, {
                                        "uuid": "9d3ae84a-1c92-4c32-9531-4e088c3767c1",
                                        "title": "SPA",
                                        "price": 0
                                    }, {
                                        "uuid": "e035847b-4919-42c5-b7d5-54a9ada13e54",
                                        "title": "SPA Rood",
                                        "price": 0
                                    }, {
                                        "uuid": "ee0e4158-dd18-4b6a-b5a9-0eb87a210fa4",
                                        "title": "Semi-skimmed Milk",
                                        "price": 0
                                    }, {
                                        "uuid": "c01ec34b-8603-4f3f-977e-3e98437b4b80",
                                        "title": "Fresh Orange juice",
                                        "price": 0
                                    }, {
                                        "uuid": "3a44c75d-e08d-48a2-be7d-37407daef0ad",
                                        "title": "Fresh Smoothie Strawberry Banana",
                                        "price": 0
                                    }, {
                                        "uuid": "a3322688-3630-480e-a6d2-3d1b492d8694",
                                        "title": "Tropicana Apple Juice",
                                        "price": 0
                                    }, {
                                        "uuid": "0cafb187-2f67-4276-9679-03507b43178b",
                                        "title": "Fristi",
                                        "price": 100
                                    }, {
                                        "uuid": "d85ba1bd-d68e-4830-a771-99ef7d270fe6",
                                        "title": "Chocomel",
                                        "price": 100
                                    }],
                                    "minPermitted": 1,
                                    "maxPermitted": 1
                                }, {
                                    "uuid": "501ba328-2692-4192-aa3d-cedfeab43606",
                                    "title": "Choose Sauce Value Meal",
                                    "tags": [{"uuid": "a39f874d-b5cf-4fbc-ada0-8eedae87ca08", "name": "Add-ons"}],
                                    "options": [{
                                        "uuid": "da899c65-d5fd-449e-be36-6142bf2f39e0",
                                        "title": "Fries Sauce",
                                        "price": 60
                                    }, {
                                        "uuid": "f19d109c-4169-48d3-95fb-5f16662c82e2",
                                        "title": "Fries Sauce 2x",
                                        "price": 120
                                    }, {
                                        "uuid": "8b2cd081-348e-4a40-9a91-fd5261601ba7",
                                        "title": "Mayonnaise",
                                        "price": 60
                                    }, {
                                        "uuid": "c85a12a4-8333-492e-9d3e-d66ad6a850cd",
                                        "title": "Mayonnaise 2x",
                                        "price": 120
                                    }, {
                                        "uuid": "b509b689-8c0d-42c0-b2d0-a757e341808a",
                                        "title": "Ketchup",
                                        "price": 60
                                    }, {
                                        "uuid": "98e55ed0-998f-49fa-912d-13100d16f57d",
                                        "title": "Ketchup 2x",
                                        "price": 120
                                    }],
                                    "minPermitted": 0,
                                    "maxPermitted": 2
                                }, {
                                    "uuid": "e8d75510-b584-4f7b-984e-5830447adb19",
                                    "title": "Choose Side Order Value Meal",
                                    "tags": [{"uuid": "a39f874d-b5cf-4fbc-ada0-8eedae87ca08", "name": "Add-ons"}],
                                    "options": [{
                                        "uuid": "47bcde35-a264-4b82-9d37-d70d51feacb5",
                                        "title": "Chicken McNuggets 9 with 2x Barbecue Sauce",
                                        "price": 490
                                    }, {
                                        "uuid": "0d3fb7bc-9a85-4283-a834-02e20663a050",
                                        "title": "Chicken McNuggets 9 with 2x Sweet and Sour Sauce",
                                        "price": 490
                                    }, {
                                        "uuid": "5a43087c-edca-4a85-83f6-0202894fe0b1",
                                        "title": "Chicken McNuggets 9 with 2x Curry Sauce",
                                        "price": 490
                                    }, {
                                        "uuid": "a504709f-28b0-4902-b50a-e8549f1ac665",
                                        "title": "Chicken McNuggets 9 with 2x Mustard Sauce",
                                        "price": 490
                                    }],
                                    "minPermitted": 0,
                                    "maxPermitted": 1
                                }],
                                "rawImageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/e421135d9013f8b9888af65edbb6b41b"
                            },
                            "5168580a-23af-43d5-b380-b8e0b667cd8b": {
                                "imageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/dc2e92284222c882b55bf2c8398d99df",
                                "itemDescription": "Softijs met saus en nootjes. (nootjes apart)",
                                "price": 245,
                                "title": "Sundae IJs met Caramel en Nootjes",
                                "uuid": "5168580a-23af-43d5-b380-b8e0b667cd8b",
                                "customizations": [{
                                    "uuid": "69c95655-075b-4a03-b278-ffb75519c5ab",
                                    "title": "Keuze Saus Sundae IJs",
                                    "tags": [{
                                        "uuid": "02e1f616-507b-4f3f-8e22-02ac5afbd34d",
                                        "name": "Sauce/Dressing"
                                    }],
                                    "options": [{
                                        "uuid": "e64351e2-0f1e-4bdb-a19f-c08493d99c6e",
                                        "title": "Zonder Saus",
                                        "price": 0,
                                        "tags": [{"uuid": "447030e6-340b-460b-b1cb-915ad88d038e", "name": "Sauce"}]
                                    }],
                                    "minPermitted": 0,
                                    "maxPermitted": 1
                                }],
                                "alcoholicItems": 0,
                                "rawImageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/dc2e92284222c882b55bf2c8398d99df"
                            },
                            "5fcddd09-9729-4c26-ae4e-812a23a931b7": {
                                "imageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/7afdc93cc76d56eab362a73d63565f5c",
                                "itemDescription": "Fruity Yoghurt drink.",
                                "price": 235,
                                "title": "Fristi",
                                "uuid": "5fcddd09-9729-4c26-ae4e-812a23a931b7",
                                "customizations": [],
                                "alcoholicItems": 0,
                                "rawImageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/7afdc93cc76d56eab362a73d63565f5c"
                            },
                            "58b19642-4fce-44ea-aced-02e7064c6d68": {
                                "imageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/5edf97d10224cc4a763edc00b6f8bef1",
                                "itemDescription": "Enjoy a tastful breakfast with low-fat yoghurt, pecan nuts, crunchy muesli and a red fruit sauce.",
                                "price": 395,
                                "title": "Very Berry Yoghurt",
                                "uuid": "58b19642-4fce-44ea-aced-02e7064c6d68",
                                "customizations": [],
                                "rawImageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/5edf97d10224cc4a763edc00b6f8bef1"
                            },
                            "ae86522d-0ddc-463a-accb-9969a91b2bd7": {
                                "imageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/a0aa4ec40fd8fda94f6e240c04477a48",
                                "itemDescription": "Forget everything you know about the taste of chicken. New on the menu is the Homestyle Crispy Chicken. Homestyle marinated chicken burger, juicy on the inside and crispy on the outside. With a luxurious sesame bun, naturally aged cheddar cheese, long crispy bacon strips (pork), Batavia lettuce, red onions and caramelized onion compote. The spicy Pimento sauce makes the finishing touch.",
                                "price": 495,
                                "title": "Homestyle Crispy Chicken",
                                "uuid": "ae86522d-0ddc-463a-accb-9969a91b2bd7",
                                "customizations": [],
                                "rawImageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/a0aa4ec40fd8fda94f6e240c04477a48"
                            },
                            "0c187f2a-1abe-49a5-af6e-e1bd8f5eaee3": {
                                "imageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/ff77d1c824a8dcffc5e9465c7a579b0a",
                                "itemDescription": "100% beef burger.",
                                "price": 445,
                                "title": "Quarter Pounder",
                                "uuid": "0c187f2a-1abe-49a5-af6e-e1bd8f5eaee3",
                                "customizations": [],
                                "alcoholicItems": 0,
                                "rawImageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/ff77d1c824a8dcffc5e9465c7a579b0a"
                            },
                            "9d2029f5-e57a-468d-92ca-c0c30f451a7a": {
                                "imageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/216be8f34e39382ae06bef1a1eabf04d",
                                "itemDescription": "",
                                "price": 60,
                                "title": "BBQ Sauce",
                                "uuid": "9d2029f5-e57a-468d-92ca-c0c30f451a7a",
                                "customizations": [],
                                "alcoholicItems": 0,
                                "rawImageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/216be8f34e39382ae06bef1a1eabf04d"
                            },
                            "782d6e61-45df-44d4-8d61-68e1475c8ce5": {
                                "imageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/665ed230cd0c1e652c319a265369c35c",
                                "itemDescription": "Side salad met verschillende soorten sla en een vinaigrette dressing.",
                                "price": 230,
                                "title": "Side Salad",
                                "uuid": "782d6e61-45df-44d4-8d61-68e1475c8ce5",
                                "customizations": [],
                                "alcoholicItems": 0,
                                "rawImageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/665ed230cd0c1e652c319a265369c35c"
                            },
                            "117c638e-a762-4555-9610-fd5d1281266a": {
                                "imageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/54145778be079d66e7d4340234116fe3",
                                "itemDescription": "Espresso van Segafredo.",
                                "price": 175,
                                "title": "Espresso",
                                "uuid": "117c638e-a762-4555-9610-fd5d1281266a",
                                "customizations": [],
                                "alcoholicItems": 0,
                                "rawImageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/54145778be079d66e7d4340234116fe3"
                            },
                            "d25f4782-3b71-4177-91ea-0c3a40ee4149": {
                                "imageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/a5f9ebfdc6189a3863b40dd16ebd2b76",
                                "itemDescription": "Large wrap with crispy chicken, lettuce, tomato, bacon and a refreshing sandwich sauce.",
                                "price": 495,
                                "title": "Large Mcwrap Chicken BLT",
                                "uuid": "d25f4782-3b71-4177-91ea-0c3a40ee4149",
                                "customizations": []
                            },
                            "1de2a08f-6b62-48ac-b323-7edfbcd42d4d": {
                                "imageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/6764c3d184d72ee4818e7c222bf01fb1",
                                "itemDescription": "Big, 100% beef burger with bacon and a characteristic sauce.",
                                "price": 965,
                                "title": "Big Tasty Medium Value Meal",
                                "uuid": "1de2a08f-6b62-48ac-b323-7edfbcd42d4d",
                                "customizations": [{
                                    "uuid": "afc5abf3-60ff-44fd-8124-aa45ef08dfc1",
                                    "title": "Choose Size Value Meal",
                                    "tags": [{"uuid": "7d39c6c2-7f3e-4aa1-92e3-13b6aefd6e9a", "name": "Size"}],
                                    "options": [{
                                        "uuid": "6cd536ed-b0b7-4f6e-8e9b-4e98639f43fa",
                                        "title": "Medium",
                                        "price": 0,
                                        "tags": [{"uuid": "882cedee-2d7a-4019-b46b-227082baeb7c", "name": "Medium"}]
                                    }, {
                                        "uuid": "055d6390-037d-45e2-8f14-50887be36c46",
                                        "title": "Large",
                                        "price": 75,
                                        "tags": [{"uuid": "21f0db62-8d48-433d-a6ea-2fdb1b8b4648", "name": "Large"}]
                                    }],
                                    "minPermitted": 1,
                                    "maxPermitted": 1
                                }, {
                                    "uuid": "d5000b68-244e-4339-b411-fca5ae4180cd",
                                    "title": "Choose Side Value Meal",
                                    "tags": [{"uuid": "a39f874d-b5cf-4fbc-ada0-8eedae87ca08", "name": "Add-ons"}],
                                    "options": [{
                                        "uuid": "bd4d7575-045b-4022-9b81-7e0ee89cc454",
                                        "title": "French Fries",
                                        "price": 0
                                    }, {
                                        "uuid": "3cb6a1e8-0260-497a-9b68-b0b0de1e3b2a",
                                        "title": "Sweet Potatoes",
                                        "price": 0
                                    }, {
                                        "uuid": "1f72aa7f-42c2-4743-b0ea-bfe35de6c556",
                                        "title": "Side Salad",
                                        "price": 0
                                    }],
                                    "minPermitted": 1,
                                    "maxPermitted": 1
                                }, {
                                    "uuid": "ee7b5b30-30dc-4570-981f-b366ad60f053",
                                    "title": "Choose Drink Value Meal",
                                    "tags": [{"uuid": "a39f874d-b5cf-4fbc-ada0-8eedae87ca08", "name": "Add-ons"}],
                                    "options": [{
                                        "uuid": "76cfaea2-fdb5-473f-8d43-924be5de3d25",
                                        "title": "Milk Shake Strawberry",
                                        "price": 100
                                    }, {
                                        "uuid": "de071078-954e-4139-9192-629f077b308f",
                                        "title": "Milk Shake Choco",
                                        "price": 100
                                    }, {
                                        "uuid": "05da3f34-2253-4d0c-a57e-bde6025c296c",
                                        "title": "Milk Shake Vanilla",
                                        "price": 100
                                    }, {
                                        "uuid": "8450fa76-bc68-435a-b6f1-f5283592ea89",
                                        "title": "Milk Shake Banana",
                                        "price": 100
                                    }, {
                                        "uuid": "607c835c-9cdb-4ec4-aa4f-0d0b0df2beeb",
                                        "title": "Coca-Cola",
                                        "price": 0
                                    }, {
                                        "uuid": "b16138c1-4fb7-4cdf-9bff-4c76805681bb",
                                        "title": "Coca-Cola Light",
                                        "price": 0
                                    }, {
                                        "uuid": "54f9a9f1-a947-43c1-a88c-e5fbf02a8b7b",
                                        "title": "Coca-Cola Zero",
                                        "price": 0
                                    }, {
                                        "uuid": "42e24032-ea78-4249-8952-d36d5f584d45",
                                        "title": "Fanta",
                                        "price": 0
                                    }, {
                                        "uuid": "b44c468e-c6cf-46ea-a284-c241e70ec854",
                                        "title": "Sprite",
                                        "price": 0
                                    }, {
                                        "uuid": "43938890-1be8-4b57-9219-0cac1d96cfe3",
                                        "title": "Lipton Ice Tea",
                                        "price": 0
                                    }, {
                                        "uuid": "26a8b713-0135-4043-94c8-298211696575",
                                        "title": "SPA",
                                        "price": 0
                                    }, {
                                        "uuid": "321dd01d-d57e-44e8-ad6a-9f4e2b9d37e3",
                                        "title": "SPA Rood",
                                        "price": 0
                                    }, {
                                        "uuid": "6c7702ef-00f0-44a0-98c2-38274f031380",
                                        "title": "Semi-skimmed Milk",
                                        "price": 0
                                    }, {
                                        "uuid": "1214969e-c0df-4c97-8abd-e6ddaf2da3bb",
                                        "title": "Fresh Orange juice",
                                        "price": 0
                                    }, {
                                        "uuid": "f86be9df-fe5e-4642-b4c8-1e839770763f",
                                        "title": "Fresh Smoothie Strawberry Banana",
                                        "price": 0
                                    }, {
                                        "uuid": "4aa8376b-bfc8-417e-8d7d-150287331759",
                                        "title": "Tropicana Apple Juice",
                                        "price": 0
                                    }, {
                                        "uuid": "8d718f0f-e2f7-4edc-b0d1-26673347182a",
                                        "title": "Fristi",
                                        "price": 100
                                    }, {
                                        "uuid": "33f1d56b-6779-4866-9730-ddf64234a7eb",
                                        "title": "Chocomel",
                                        "price": 100
                                    }],
                                    "minPermitted": 1,
                                    "maxPermitted": 1
                                }, {
                                    "uuid": "8f6e6026-4b6f-4a7c-8a7b-b2a3b789b506",
                                    "title": "Choose Sauce Value Meal",
                                    "tags": [{"uuid": "a39f874d-b5cf-4fbc-ada0-8eedae87ca08", "name": "Add-ons"}],
                                    "options": [{
                                        "uuid": "b1021aeb-a036-4484-80c1-68b9df654bcb",
                                        "title": "Fries Sauce",
                                        "price": 60
                                    }, {
                                        "uuid": "4751085b-732a-466b-b975-a292480dd874",
                                        "title": "Fries Sauce 2x",
                                        "price": 120
                                    }, {
                                        "uuid": "6ac3d086-607c-4790-9626-9a3f14db9b43",
                                        "title": "Mayonnaise",
                                        "price": 60
                                    }, {
                                        "uuid": "f399837d-204e-4e26-847f-4f6a8f9cb842",
                                        "title": "Mayonnaise 2x",
                                        "price": 120
                                    }, {
                                        "uuid": "5d98d340-3a88-4e5f-80af-2c9fbf77a981",
                                        "title": "Ketchup",
                                        "price": 60
                                    }, {
                                        "uuid": "e91e6880-ff81-441a-8b99-75896a444139",
                                        "title": "Ketchup 2x",
                                        "price": 120
                                    }],
                                    "minPermitted": 0,
                                    "maxPermitted": 2
                                }, {
                                    "uuid": "29aa2076-8745-4dc0-ac92-9580e041ee12",
                                    "title": "Choose Side Order Value Meal",
                                    "tags": [{"uuid": "a39f874d-b5cf-4fbc-ada0-8eedae87ca08", "name": "Add-ons"}],
                                    "options": [{
                                        "uuid": "88c03c61-87e0-431c-a4aa-2017da964131",
                                        "title": "Chicken McNuggets 9 with 2x Barbecue Sauce",
                                        "price": 490
                                    }, {
                                        "uuid": "e53a39f3-c651-4af4-a5f6-7cfe89e21911",
                                        "title": "Chicken McNuggets 9 with 2x Sweet and Sour Sauce",
                                        "price": 490
                                    }, {
                                        "uuid": "f1819195-0182-41e7-a4e9-97e020307653",
                                        "title": "Chicken McNuggets 9 with 2x Curry Sauce",
                                        "price": 490
                                    }, {
                                        "uuid": "f3c40e5a-9320-47f9-ae0f-a776a56813a5",
                                        "title": "Chicken McNuggets 9 with 2x Mustard Sauce",
                                        "price": 490
                                    }],
                                    "minPermitted": 0,
                                    "maxPermitted": 1
                                }],
                                "rawImageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/6764c3d184d72ee4818e7c222bf01fb1"
                            },
                            "2bf3c663-74a4-406c-b110-d9461deb079e": {
                                "imageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/54145778be079d66e7d4340234116fe3",
                                "itemDescription": "Segafredo Espresso.",
                                "price": 175,
                                "title": "Espresso",
                                "uuid": "2bf3c663-74a4-406c-b110-d9461deb079e",
                                "customizations": [],
                                "alcoholicItems": 0,
                                "rawImageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/54145778be079d66e7d4340234116fe3"
                            },
                            "c4f4db8c-734d-4506-af91-c4fa9d122725": {
                                "imageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/0872045152d42a6a842a6c43e211e63b",
                                "itemDescription": "Verfrissende Fanta.",
                                "price": 285,
                                "title": "Fanta",
                                "uuid": "c4f4db8c-734d-4506-af91-c4fa9d122725",
                                "customizations": [{
                                    "uuid": "948471b9-618d-4006-8d20-a95f75072d58",
                                    "title": "Keuze Formaat Fanta",
                                    "tags": [{"uuid": "7d39c6c2-7f3e-4aa1-92e3-13b6aefd6e9a", "name": "Size"}],
                                    "options": [{
                                        "uuid": "a40b7e8a-9c29-4ace-8f67-6a05146486d0",
                                        "title": "Medium",
                                        "price": 0,
                                        "tags": [{"uuid": "f0cdc452-3731-45c2-8615-748725e085fc", "name": "Soda"}]
                                    }, {
                                        "uuid": "d0874c1b-a422-421c-ac07-9e1cd16fce1b",
                                        "title": "Groot",
                                        "price": 30,
                                        "tags": [{"uuid": "f0cdc452-3731-45c2-8615-748725e085fc", "name": "Soda"}]
                                    }],
                                    "minPermitted": 1,
                                    "maxPermitted": 1
                                }],
                                "rawImageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/0872045152d42a6a842a6c43e211e63b"
                            },
                            "2e99f8de-5b02-4d80-81e7-ec02848c7436": {
                                "imageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/cbe75860470844d3348e0ef308c80ec0",
                                "itemDescription": "Verkoeling in een beker. Deze heerlijk verfrissende Lemonade met citroensmaak en ijsblokjes is de perfecte dorstlesser.",
                                "price": 325,
                                "title": "Lemonade",
                                "uuid": "2e99f8de-5b02-4d80-81e7-ec02848c7436",
                                "customizations": []
                            },
                            "8788bba5-ae70-444e-bcc8-505b52563722": {
                                "imageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/a66b80ab97d2acb4d7dbe1bc68e28814",
                                "itemDescription": "Refreshing Sprite.",
                                "price": 285,
                                "title": "Sprite",
                                "uuid": "8788bba5-ae70-444e-bcc8-505b52563722",
                                "customizations": [{
                                    "uuid": "0c275077-7c9a-46bd-bb78-1ca75427e902",
                                    "title": "Choose Size Sprite",
                                    "tags": [{"uuid": "7d39c6c2-7f3e-4aa1-92e3-13b6aefd6e9a", "name": "Size"}],
                                    "options": [{
                                        "uuid": "1dc12913-97ff-4397-8dac-2106362dab16",
                                        "title": "Medium",
                                        "price": 0,
                                        "tags": [{"uuid": "f0cdc452-3731-45c2-8615-748725e085fc", "name": "Soda"}]
                                    }, {
                                        "uuid": "7ff5320a-d8d2-41d5-8eba-b2fca5f335b6",
                                        "title": "Large",
                                        "price": 30,
                                        "tags": [{"uuid": "f0cdc452-3731-45c2-8615-748725e085fc", "name": "Soda"}]
                                    }],
                                    "minPermitted": 1,
                                    "maxPermitted": 1
                                }],
                                "alcoholicItems": 0,
                                "rawImageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/a66b80ab97d2acb4d7dbe1bc68e28814"
                            },
                            "3c97816d-7b56-435d-8ef5-19d020acdf81": {
                                "imageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/605229ae9e4dde01ea295b01e5ca949d",
                                "itemDescription": "Verse aardbei-banaan smoothie gemaakt van 100% puur fruit.",
                                "price": 270,
                                "title": "Verse Smoothie Aardbei Banaan",
                                "uuid": "3c97816d-7b56-435d-8ef5-19d020acdf81",
                                "customizations": [],
                                "alcoholicItems": 0,
                                "rawImageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/605229ae9e4dde01ea295b01e5ca949d"
                            },
                            "d52cbbcd-3015-4909-9701-adb3905044a4": {
                                "imageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/cbe75860470844d3348e0ef308c80ec0",
                                "itemDescription": "This refreshing Lemonade is perfect to quench your thirst.",
                                "price": 325,
                                "title": "Lemonade",
                                "uuid": "d52cbbcd-3015-4909-9701-adb3905044a4",
                                "customizations": []
                            },
                            "4d978375-7d13-49be-84ff-23b256e0fb36": {
                                "imageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/c88c43ae9bcda5a024026fb4a28c33c8",
                                "itemDescription": "Softijs met saus en nootjes. (nootjes apart)",
                                "price": 245,
                                "title": "Sundae IJs met Chocolade en Nootjes",
                                "uuid": "4d978375-7d13-49be-84ff-23b256e0fb36",
                                "customizations": [{
                                    "uuid": "9e85e221-6fe5-4a94-bd37-0ff51f32779f",
                                    "title": "Keuze Saus Sundae IJs",
                                    "tags": [{
                                        "uuid": "02e1f616-507b-4f3f-8e22-02ac5afbd34d",
                                        "name": "Sauce/Dressing"
                                    }],
                                    "options": [{
                                        "uuid": "a6b72f90-8388-48db-8c14-b1906f8a6899",
                                        "title": "Zonder Saus",
                                        "price": 0,
                                        "tags": [{"uuid": "447030e6-340b-460b-b1cb-915ad88d038e", "name": "Sauce"}]
                                    }],
                                    "minPermitted": 0,
                                    "maxPermitted": 1
                                }],
                                "alcoholicItems": 0,
                                "rawImageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/c88c43ae9bcda5a024026fb4a28c33c8"
                            },
                            "82085154-c0db-43f9-a9df-bd2229cf2e8d": {
                                "imageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/8b4810626fe90971ee685a90b96584fb",
                                "itemDescription": "Vergeet alles wat je weet over de smaak van kip. Nieuw op het menu is de Homestyle Crispy Chicken. Homestyle gemarineerde kipburger, heerlijk juicy van binnen en toch crispy van buiten. Met een luxe sesambroodje, natuurlijk gerijpte Cheddar kaas, lange crispy bacon strips (varkensvlees), Batavia sla, rode uien en gekarameliseerde uiencompote. De spicy Pimento saus maakt hem helemaal af.",
                                "price": 790,
                                "title": "Homestyle Crispy Chicken Medium Voordeelmenu",
                                "uuid": "82085154-c0db-43f9-a9df-bd2229cf2e8d",
                                "customizations": [{
                                    "uuid": "41319ff9-b43a-4ff9-b6dc-dc4d0cc17a41",
                                    "title": "Keuze Formaat Voordeelmenu",
                                    "tags": [{"uuid": "7d39c6c2-7f3e-4aa1-92e3-13b6aefd6e9a", "name": "Size"}],
                                    "options": [{
                                        "uuid": "82028f5b-b0a3-46a2-81b4-b9dd59f76966",
                                        "title": "Medium",
                                        "price": 0,
                                        "tags": [{"uuid": "882cedee-2d7a-4019-b46b-227082baeb7c", "name": "Medium"}]
                                    }, {
                                        "uuid": "2a59e5cd-4282-40e2-83a0-abbe164c754c",
                                        "title": "Groot",
                                        "price": 75,
                                        "tags": [{"uuid": "21f0db62-8d48-433d-a6ea-2fdb1b8b4648", "name": "Large"}]
                                    }],
                                    "minPermitted": 1,
                                    "maxPermitted": 1
                                }, {
                                    "uuid": "7c0d02c1-cfdf-4941-a85c-474c506dd5a3",
                                    "title": "Keuze Side Voordeelmenu",
                                    "tags": [{"uuid": "a39f874d-b5cf-4fbc-ada0-8eedae87ca08", "name": "Add-ons"}],
                                    "options": [{
                                        "uuid": "bc83e5c8-fdb4-418c-a21f-5ff281869d12",
                                        "title": "Franse Frietjes",
                                        "price": 0
                                    }, {
                                        "uuid": "c47f3029-34c2-437c-90b6-d007add720f5",
                                        "title": "Sweet Potatoes",
                                        "price": 0
                                    }, {
                                        "uuid": "f6d0f2b9-656e-40d8-afa0-0cf540820e9f",
                                        "title": "Side Salad",
                                        "price": 0
                                    }],
                                    "minPermitted": 1,
                                    "maxPermitted": 1
                                }, {
                                    "uuid": "099226ae-bf33-4643-bb3d-7076aa855f5e",
                                    "title": "Keuze Drank Voordeelmenu",
                                    "tags": [{"uuid": "a39f874d-b5cf-4fbc-ada0-8eedae87ca08", "name": "Add-ons"}],
                                    "options": [{
                                        "uuid": "4c55175f-efad-4c91-ade5-1360740efd7a",
                                        "title": "Milk Shake Aardbei",
                                        "price": 100
                                    }, {
                                        "uuid": "5a202d78-5f14-47e9-b580-a862774c0b55",
                                        "title": "Milk Shake Chocolade",
                                        "price": 100
                                    }, {
                                        "uuid": "46194400-317e-4f6f-9e4e-40d9322d8c0c",
                                        "title": "Milk Shake Vanille",
                                        "price": 100
                                    }, {
                                        "uuid": "c5c82a7d-db5b-48cd-bf31-4a9800058429",
                                        "title": "Milk Shake Banaan",
                                        "price": 100
                                    }, {
                                        "uuid": "93743535-348e-4b5c-9bb2-cd4ac906cac9",
                                        "title": "Coca-Cola",
                                        "price": 0
                                    }, {
                                        "uuid": "96be79ec-889a-4ebf-88cf-e9f31a74b672",
                                        "title": "Coca-Cola Light",
                                        "price": 0
                                    }, {
                                        "uuid": "2cf17672-cae8-45b1-a93f-1130b59fdc06",
                                        "title": "Coca-Cola Zero",
                                        "price": 0
                                    }, {
                                        "uuid": "8a6a710e-eeeb-49cb-91ae-da27975c7541",
                                        "title": "Fanta",
                                        "price": 0
                                    }, {
                                        "uuid": "75e47aea-4917-4898-890d-edb9b3ecf736",
                                        "title": "Sprite",
                                        "price": 0
                                    }, {
                                        "uuid": "393b5902-3b19-4080-aafd-498152451301",
                                        "title": "Lipton Ice Tea",
                                        "price": 0
                                    }, {
                                        "uuid": "895c2b54-4d19-4f65-aa18-6b5e5cc075bd",
                                        "title": "SPA",
                                        "price": 0
                                    }, {
                                        "uuid": "2779f1ab-8a5a-4535-af15-dc5d551707b4",
                                        "title": "SPA Rood",
                                        "price": 0
                                    }, {
                                        "uuid": "62ca680a-a7e1-432e-9e47-01df4cf275b8",
                                        "title": "Biologische Halfvolle Melk",
                                        "price": 0
                                    }, {
                                        "uuid": "ff184bb8-4524-4995-a02a-7e028e484d3f",
                                        "title": "Vers Sinaasappelsap",
                                        "price": 0
                                    }, {
                                        "uuid": "e63179f0-bab8-4efb-9155-0a44ae19a89e",
                                        "title": "Verse Smoothie Aardbei-Banaan",
                                        "price": 0
                                    }, {
                                        "uuid": "01649019-398a-462a-874f-359e05821d34",
                                        "title": "Tropicana Appelsap",
                                        "price": 0
                                    }, {
                                        "uuid": "b89d7856-9c6c-49ef-8048-700bd43620a0",
                                        "title": "Fristi",
                                        "price": 70
                                    }, {
                                        "uuid": "f9ecd40f-73ee-44b5-aa64-f06d6c3414fb",
                                        "title": "Chocomel",
                                        "price": 70
                                    }],
                                    "minPermitted": 1,
                                    "maxPermitted": 1
                                }, {
                                    "uuid": "a86ada8b-fb29-41d4-99fd-65b1eb4c567f",
                                    "title": "Keuze Saus Voordeelmenu",
                                    "tags": [{"uuid": "a39f874d-b5cf-4fbc-ada0-8eedae87ca08", "name": "Add-ons"}],
                                    "options": [{
                                        "uuid": "f69803d3-2d30-4f78-8cc0-a841bc3f1039",
                                        "title": "Frietsaus",
                                        "price": 60
                                    }, {
                                        "uuid": "30820f3c-35b5-4dcc-8eb7-b1ebc3300192",
                                        "title": "Frietsaus 2x",
                                        "price": 120
                                    }, {
                                        "uuid": "64c836e3-d132-44d1-b612-4bd50dc0585c",
                                        "title": "Mayonaise",
                                        "price": 60
                                    }, {
                                        "uuid": "4a248c3d-81b1-4cc3-8d08-9e90615944e2",
                                        "title": "Mayonaise 2x",
                                        "price": 120
                                    }, {
                                        "uuid": "416a5874-e195-45f6-a521-9394afb9a33a",
                                        "title": "Ketchup",
                                        "price": 60
                                    }, {
                                        "uuid": "50607160-5038-47d2-b035-9658e6721e2d",
                                        "title": "Ketchup 2x",
                                        "price": 120
                                    }],
                                    "minPermitted": 0,
                                    "maxPermitted": 2
                                }, {
                                    "uuid": "302b20ec-25b6-40e5-bf4b-3601bf614cd7",
                                    "title": "Keuze Voor Erbij Voordeelmenu",
                                    "tags": [{"uuid": "a39f874d-b5cf-4fbc-ada0-8eedae87ca08", "name": "Add-ons"}],
                                    "options": [{
                                        "uuid": "0a2153b2-cebb-4909-b37d-1d715c096fc0",
                                        "title": "Chicken McNuggets 9 met 2x Barbecuesaus",
                                        "price": 490
                                    }, {
                                        "uuid": "3b8b671f-0b00-4088-9563-67782bbe8a3b",
                                        "title": "Chicken McNuggets 9 met 2x Zoetzure Saus",
                                        "price": 490
                                    }, {
                                        "uuid": "ed305c09-3f46-4087-8622-07cfd3022921",
                                        "title": "Chicken McNuggets 9 met 2x Kerriesaus",
                                        "price": 490
                                    }, {
                                        "uuid": "803266f9-2453-431e-995e-f398a2638746",
                                        "title": "Chicken McNuggets 9 met 2x Mosterdsaus",
                                        "price": 490
                                    }],
                                    "minPermitted": 0,
                                    "maxPermitted": 1
                                }],
                                "rawImageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/8b4810626fe90971ee685a90b96584fb"
                            },
                            "3cb469c1-9b73-44e7-a49c-599cfa0b3cd7": {
                                "imageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/705e8e47f9f8c8149a11d47b5a31d7ed",
                                "itemDescription": "Lipton hot tea.",
                                "price": 225,
                                "title": "Tea",
                                "uuid": "3cb469c1-9b73-44e7-a49c-599cfa0b3cd7",
                                "customizations": [{
                                    "uuid": "951c4dd2-7b8c-4b26-9186-542c6fb0a672",
                                    "title": "Choose Size Tea",
                                    "tags": [{"uuid": "7d39c6c2-7f3e-4aa1-92e3-13b6aefd6e9a", "name": "Size"}],
                                    "options": [{
                                        "uuid": "e649791f-f2b2-4705-9e1c-cc1b9f8869af",
                                        "title": "Medium",
                                        "price": 0,
                                        "tags": [{"uuid": "f0cdc452-3731-45c2-8615-748725e085fc", "name": "Soda"}]
                                    }, {
                                        "uuid": "27b6b231-222d-48a5-9c12-51baa5d69350",
                                        "title": "Large",
                                        "price": 35,
                                        "tags": [{"uuid": "f0cdc452-3731-45c2-8615-748725e085fc", "name": "Soda"}]
                                    }],
                                    "minPermitted": 1,
                                    "maxPermitted": 1
                                }],
                                "alcoholicItems": 0,
                                "rawImageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/705e8e47f9f8c8149a11d47b5a31d7ed"
                            },
                            "8b464206-4e6a-47b6-aaca-23706d370512": {
                                "imageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/a5f9ebfdc6189a3863b40dd16ebd2b76",
                                "itemDescription": "Grote wrap met krokante kip, sla, tomaat, bacon en een frisse sandwichsaus.",
                                "price": 495,
                                "title": "Grote Mcwrap Chicken BLT",
                                "uuid": "8b464206-4e6a-47b6-aaca-23706d370512",
                                "customizations": []
                            },
                            "7a3bf65d-0070-4115-8d11-96d3e85d2100": {
                                "imageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/f119f6344b7a2eb07f0e3c97d8aeab2d",
                                "itemDescription": "Bakje seizoensfruit",
                                "price": 200,
                                "title": "Vers Fruit",
                                "uuid": "7a3bf65d-0070-4115-8d11-96d3e85d2100",
                                "customizations": [],
                                "alcoholicItems": 0,
                                "rawImageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/f119f6344b7a2eb07f0e3c97d8aeab2d"
                            },
                            "b56b9b49-4e19-4e35-9f6e-8d89bd2efac1": {
                                "imageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/fa37cd0ea5d7144eb2056c2502f3220b",
                                "itemDescription": "Een Luxe ijskoffie op basis van crushed ice afgemaakt met room, witte chocolade en framboos.",
                                "price": 325,
                                "title": "Iced Frappé Witte Chocolade & Framboos",
                                "uuid": "b56b9b49-4e19-4e35-9f6e-8d89bd2efac1",
                                "customizations": [],
                                "rawImageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/fa37cd0ea5d7144eb2056c2502f3220b"
                            },
                            "02abb956-7e09-4e15-b1dc-e9d24e1864bd": {
                                "imageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/f23fb7a1f42b9033b1362f521d9d6cbf",
                                "itemDescription": "Segafredo Cappuccino.",
                                "price": 260,
                                "title": "Cappuccino",
                                "uuid": "02abb956-7e09-4e15-b1dc-e9d24e1864bd",
                                "customizations": [{
                                    "uuid": "0247e58b-f348-488c-8910-27ae4220448d",
                                    "title": "Choose Size Cappuccino",
                                    "tags": [{"uuid": "7d39c6c2-7f3e-4aa1-92e3-13b6aefd6e9a", "name": "Size"}],
                                    "options": [{
                                        "uuid": "85c104fe-bdf2-4739-aa24-9c8b4ec0cc96",
                                        "title": "Medium",
                                        "price": 0,
                                        "tags": [{"uuid": "f0cdc452-3731-45c2-8615-748725e085fc", "name": "Soda"}]
                                    }, {
                                        "uuid": "a6a3caa8-b12e-4db2-a67d-cb2c5e8e089f",
                                        "title": "Large",
                                        "price": 35,
                                        "tags": [{"uuid": "f0cdc452-3731-45c2-8615-748725e085fc", "name": "Soda"}]
                                    }],
                                    "minPermitted": 1,
                                    "maxPermitted": 1
                                }],
                                "alcoholicItems": 0,
                                "rawImageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/f23fb7a1f42b9033b1362f521d9d6cbf"
                            },
                            "7607339f-0f2b-45a5-b6c1-dc51ff7d1bc1": {
                                "imageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/dc2e92284222c882b55bf2c8398d99df",
                                "itemDescription": "Soft dairy icecream with sauce and peanuts. (peanuts separate)",
                                "price": 245,
                                "title": "Sundae Icecream with Caramel and Peanuts",
                                "uuid": "7607339f-0f2b-45a5-b6c1-dc51ff7d1bc1",
                                "customizations": [{
                                    "uuid": "00056258-f7fb-46e9-967d-ad7cf1152aad",
                                    "title": "Choose Sauce Sundae Ice",
                                    "tags": [{
                                        "uuid": "02e1f616-507b-4f3f-8e22-02ac5afbd34d",
                                        "name": "Sauce/Dressing"
                                    }],
                                    "options": [{
                                        "uuid": "5697de03-ba14-4861-b417-eca4a5986d14",
                                        "title": "No Sauce",
                                        "price": 0,
                                        "tags": [{"uuid": "447030e6-340b-460b-b1cb-915ad88d038e", "name": "Sauce"}]
                                    }],
                                    "minPermitted": 0,
                                    "maxPermitted": 1
                                }],
                                "alcoholicItems": 0,
                                "rawImageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/dc2e92284222c882b55bf2c8398d99df"
                            },
                            "1b010ca5-1ba3-4f3a-a75e-b545c17835de": {
                                "imageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/2f22aa39f66dc0ed1483570b56d61a29",
                                "itemDescription": "Twee 100% Angus Beef burgers op een speciaal sesam - en maanzaadbroodje. Voor de echt burger liefhebber.",
                                "price": 665,
                                "title": "Maestro Burger met 100% Angus Beef",
                                "uuid": "1b010ca5-1ba3-4f3a-a75e-b545c17835de",
                                "customizations": [],
                                "alcoholicItems": 0,
                                "rawImageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/2f22aa39f66dc0ed1483570b56d61a29"
                            },
                            "7f5a6f01-be72-4100-9b27-757c797d9208": {
                                "endorsement": {
                                    "backgroundColor": {
                                        "alpha": 1,
                                        "color": "59BD5A"
                                    },
                                    "iconColor": {"alpha": 1, "color": "59BD5A"},
                                    "iconUrl": "https://uber-test.s3.amazonaws.com/badge_healthy@3x.png",
                                    "text": "Vegetarisch",
                                    "textColor": {"alpha": 1, "color": "FFFFFF"}
                                },
                                "imageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/943767792114f3ed63c65cc5916dec2b",
                                "itemDescription": "Groenteburger met frisse sla en sandwich saus.",
                                "price": 815,
                                "title": "Veggie Medium Voordeelmenu",
                                "uuid": "7f5a6f01-be72-4100-9b27-757c797d9208",
                                "customizations": [{
                                    "uuid": "aafd76fe-8317-4b6e-8b34-99930fcb3207",
                                    "title": "Keuze Formaat Voordeelmenu",
                                    "tags": [{"uuid": "7d39c6c2-7f3e-4aa1-92e3-13b6aefd6e9a", "name": "Size"}],
                                    "options": [{
                                        "uuid": "ce829c04-5c64-4c26-83dd-5a3d5d09213c",
                                        "title": "Medium",
                                        "price": 0,
                                        "tags": [{"uuid": "882cedee-2d7a-4019-b46b-227082baeb7c", "name": "Medium"}]
                                    }, {
                                        "uuid": "f2fcb954-de97-4555-87fc-25eacce7a449",
                                        "title": "Groot",
                                        "price": 75,
                                        "tags": [{"uuid": "21f0db62-8d48-433d-a6ea-2fdb1b8b4648", "name": "Large"}]
                                    }],
                                    "minPermitted": 1,
                                    "maxPermitted": 1
                                }, {
                                    "uuid": "92ea8c67-7611-43f8-8c49-79771fd06022",
                                    "title": "Keuze Side Voordeelmenu",
                                    "tags": [{"uuid": "a39f874d-b5cf-4fbc-ada0-8eedae87ca08", "name": "Add-ons"}],
                                    "options": [{
                                        "uuid": "e31d655d-0dd6-4efb-9b1e-0121bab4e34e",
                                        "title": "Franse Frietjes",
                                        "price": 0
                                    }, {
                                        "uuid": "115be15f-c705-4a62-a242-50ddcfeee811",
                                        "title": "Sweet Potatoes",
                                        "price": 0
                                    }, {
                                        "uuid": "ff5ff687-14b6-4d94-a427-b2c809af6737",
                                        "title": "Side Salad",
                                        "price": 0
                                    }],
                                    "minPermitted": 1,
                                    "maxPermitted": 1
                                }, {
                                    "uuid": "1da0b245-2151-4499-8409-b74277da96b8",
                                    "title": "Keuze Drank Voordeelmenu",
                                    "tags": [{"uuid": "a39f874d-b5cf-4fbc-ada0-8eedae87ca08", "name": "Add-ons"}],
                                    "options": [{
                                        "uuid": "1976522d-6a66-4a5e-b43f-e954a0ada797",
                                        "title": "Milk Shake Aardbei",
                                        "price": 100
                                    }, {
                                        "uuid": "653c2d1d-fb79-442c-91f8-90d7e5159f38",
                                        "title": "Milk Shake Chocolade",
                                        "price": 100
                                    }, {
                                        "uuid": "60f77e28-c789-49db-a99a-7d0a77e0547b",
                                        "title": "Milk Shake Vanille",
                                        "price": 100
                                    }, {
                                        "uuid": "ec4c9d12-f8cc-4a83-96fe-7502a54a7e86",
                                        "title": "Milk Shake Banaan",
                                        "price": 100
                                    }, {
                                        "uuid": "86ea9142-6747-4b74-9180-5e2fbf03e3b4",
                                        "title": "Coca-Cola",
                                        "price": 0
                                    }, {
                                        "uuid": "71b86f5b-66d8-4b5b-940b-0e3debc8516f",
                                        "title": "Coca-Cola Light",
                                        "price": 0
                                    }, {
                                        "uuid": "d09d3428-f255-4d10-986b-094597ffa279",
                                        "title": "Coca-Cola Zero",
                                        "price": 0
                                    }, {
                                        "uuid": "ee563f22-5468-4ebc-bb80-7de07cbe2fe1",
                                        "title": "Fanta",
                                        "price": 0
                                    }, {
                                        "uuid": "3e2ce893-e6a5-43aa-ad37-d3fc3779a75b",
                                        "title": "Sprite",
                                        "price": 0
                                    }, {
                                        "uuid": "834e58d0-d185-47a9-bc39-23ba2096e532",
                                        "title": "Lipton Ice Tea",
                                        "price": 0
                                    }, {
                                        "uuid": "e8f1b5fb-ec21-4002-838a-50a096ec93f6",
                                        "title": "SPA",
                                        "price": 0
                                    }, {
                                        "uuid": "7031440c-6086-489c-aa54-b92042149258",
                                        "title": "SPA Rood",
                                        "price": 0
                                    }, {
                                        "uuid": "3171ec4b-c260-4d24-80f3-6e5663a5d357",
                                        "title": "Biologische Halfvolle Melk",
                                        "price": 0
                                    }, {
                                        "uuid": "418bcc7a-bb6b-4d49-9934-a98454bce360",
                                        "title": "Vers Sinaasappelsap",
                                        "price": 0
                                    }, {
                                        "uuid": "b8cc075d-d67d-42b5-a6a1-0bc5b6463000",
                                        "title": "Verse Smoothie Aardbei-Banaan",
                                        "price": 0
                                    }, {
                                        "uuid": "8a9db368-baee-4f3d-979b-3521969c16bd",
                                        "title": "Tropicana Appelsap",
                                        "price": 0
                                    }, {
                                        "uuid": "770b9b75-0a40-40b0-ad5e-4f340844d2e9",
                                        "title": "Fristi",
                                        "price": 100
                                    }, {
                                        "uuid": "402d6763-8c35-4dad-93f8-f249c9645f41",
                                        "title": "Chocomel",
                                        "price": 100
                                    }],
                                    "minPermitted": 1,
                                    "maxPermitted": 1
                                }, {
                                    "uuid": "2164f2c1-f981-422c-9300-bc0588fc5c6f",
                                    "title": "Keuze Saus Voordeelmenu",
                                    "tags": [{"uuid": "a39f874d-b5cf-4fbc-ada0-8eedae87ca08", "name": "Add-ons"}],
                                    "options": [{
                                        "uuid": "1dc44989-dbe2-4d25-af78-e3042b8d6ad9",
                                        "title": "Frietsaus",
                                        "price": 60
                                    }, {
                                        "uuid": "78a7379e-87aa-475d-996f-d398aecb87b4",
                                        "title": "Frietsaus 2x",
                                        "price": 120
                                    }, {
                                        "uuid": "58b41ca3-8a90-4c5f-9ab9-20e7aa632b7d",
                                        "title": "Mayonaise",
                                        "price": 60
                                    }, {
                                        "uuid": "563af0b2-601c-4f2e-8379-db1328f5cd4a",
                                        "title": "Mayonaise 2x",
                                        "price": 120
                                    }, {
                                        "uuid": "cb156f3e-d5a1-482b-9c10-669a570ed9d9",
                                        "title": "Ketchup",
                                        "price": 60
                                    }, {
                                        "uuid": "2126947c-29f1-482b-947d-a90503b65413",
                                        "title": "Ketchup 2x",
                                        "price": 120
                                    }],
                                    "minPermitted": 0,
                                    "maxPermitted": 2
                                }, {
                                    "uuid": "ff8c3f75-4b92-42bf-bec4-9e76fe6da7d3",
                                    "title": "Keuze Voor Erbij Voordeelmenu",
                                    "tags": [{"uuid": "a39f874d-b5cf-4fbc-ada0-8eedae87ca08", "name": "Add-ons"}],
                                    "options": [{
                                        "uuid": "9e97aea2-0caf-470d-b160-3562de0ef7c3",
                                        "title": "Chicken McNuggets 9 met 2x Barbecuesaus",
                                        "price": 490
                                    }, {
                                        "uuid": "74c0eae4-33a2-479f-b95e-77125551a6b4",
                                        "title": "Chicken McNuggets 9 met 2x Zoetzure Saus",
                                        "price": 490
                                    }, {
                                        "uuid": "512fae47-cf86-4db6-ab8c-eeff6de8c3e7",
                                        "title": "Chicken McNuggets 9 met 2x Kerriesaus",
                                        "price": 490
                                    }, {
                                        "uuid": "f88f50e2-7fca-49a1-a0d2-4c11d4243d07",
                                        "title": "Chicken McNuggets 9 met 2x Mosterdsaus",
                                        "price": 490
                                    }],
                                    "minPermitted": 0,
                                    "maxPermitted": 1
                                }],
                                "rawImageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/943767792114f3ed63c65cc5916dec2b"
                            },
                            "fb6d8e2f-30d3-413b-a0b8-ae23a70c2813": {
                                "imageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/1fe9000335dbc8d51f3e84946437db70",
                                "itemDescription": "Segafredo Double Espresso.",
                                "price": 225,
                                "title": "Double Espresso",
                                "uuid": "fb6d8e2f-30d3-413b-a0b8-ae23a70c2813",
                                "customizations": [],
                                "alcoholicItems": 0,
                                "rawImageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/1fe9000335dbc8d51f3e84946437db70"
                            },
                            "e1d03267-76d9-4b9b-863f-8201d2478272": {
                                "imageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/d4b6d2fea079d3495eab93cb454eb099",
                                "itemDescription": "Milk Shake met de smaak banaan.",
                                "price": 325,
                                "title": "Milk Shake Banaan",
                                "uuid": "e1d03267-76d9-4b9b-863f-8201d2478272",
                                "customizations": [{
                                    "uuid": "9d53696e-b30f-4dc0-92f0-047ccab8fe55",
                                    "title": "Keuze Formaat Milk Shake Banaan",
                                    "tags": [{"uuid": "7d39c6c2-7f3e-4aa1-92e3-13b6aefd6e9a", "name": "Size"}],
                                    "options": [{
                                        "uuid": "25c0d431-a887-4c0b-bc92-bb676bcabc0d",
                                        "title": "Medium",
                                        "price": 0,
                                        "tags": [{"uuid": "d0430b75-1545-45aa-9cd5-8678c4657b66", "name": "Milk"}]
                                    }, {
                                        "uuid": "fc166d64-246d-4629-b8d5-3bb381031625",
                                        "title": "Groot",
                                        "price": 20,
                                        "tags": [{"uuid": "d0430b75-1545-45aa-9cd5-8678c4657b66", "name": "Milk"}]
                                    }],
                                    "minPermitted": 1,
                                    "maxPermitted": 1
                                }],
                                "alcoholicItems": 0,
                                "rawImageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/d4b6d2fea079d3495eab93cb454eb099"
                            },
                            "480b49fd-47f0-47b0-bc03-48e717091ddc": {
                                "imageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/c41d262f2869941ceac6eb3958baa0e0",
                                "itemDescription": "Malse kipfilet op een sesambroodje.",
                                "price": 445,
                                "title": "McChicken",
                                "uuid": "480b49fd-47f0-47b0-bc03-48e717091ddc",
                                "customizations": [],
                                "alcoholicItems": 0,
                                "rawImageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/c41d262f2869941ceac6eb3958baa0e0"
                            },
                            "195b41c6-9ad1-4687-921b-04154be96405": {
                                "imageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/09aa647092bdc35b56a5de2621df461a",
                                "itemDescription": "Treat your senses with these subtly sweet fries. Delicious with mayonaise.",
                                "price": 300,
                                "title": "Sweet Potatoes",
                                "uuid": "195b41c6-9ad1-4687-921b-04154be96405",
                                "customizations": [{
                                    "uuid": "fa208020-2f05-4fca-b64a-df5ab22c1a06",
                                    "title": "Choose Size Sweet Potatoes",
                                    "tags": [{"uuid": "7d39c6c2-7f3e-4aa1-92e3-13b6aefd6e9a", "name": "Size"}],
                                    "options": [{
                                        "uuid": "0bcf9cb1-08b5-41e6-be2e-c5760b79b1a3",
                                        "title": "Medium",
                                        "price": 0,
                                        "tags": [{
                                            "uuid": "27f793cc-d0a4-4351-93e0-7d8e87a68952",
                                            "name": "Roasted Potatoes"
                                        }]
                                    }, {
                                        "uuid": "e3faf8cf-203e-4123-b1cc-cdc8cb3348a5",
                                        "title": "Large",
                                        "price": 25,
                                        "tags": [{
                                            "uuid": "27f793cc-d0a4-4351-93e0-7d8e87a68952",
                                            "name": "Roasted Potatoes"
                                        }]
                                    }],
                                    "minPermitted": 1,
                                    "maxPermitted": 1
                                }]
                            },
                            "73a84cfd-bc59-4481-9a3e-a77997ae146f": {
                                "imageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/41a22177a6160f2f91707e90e14b46af",
                                "itemDescription": "Een heerlijke groene slamix met gemarineerde en gegrilde kip, friszure rode appelstukjes, maïs, Pomodore tomaatjes, paprika-flavored crunch en een heerlijke kerrie-appel dressing.",
                                "price": 595,
                                "title": "Salade Chili Chicken",
                                "uuid": "73a84cfd-bc59-4481-9a3e-a77997ae146f",
                                "customizations": [],
                                "rawImageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/41a22177a6160f2f91707e90e14b46af"
                            },
                            "fd090cf9-5bfc-4357-ac16-caf1c78a0a91": {
                                "imageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/6764c3d184d72ee4818e7c222bf01fb1",
                                "itemDescription": "Grote, 100% rundvlees burger met bacon en een karakteristieke saus.",
                                "price": 965,
                                "title": "Big Tasty Medium Voordeelmenu",
                                "uuid": "fd090cf9-5bfc-4357-ac16-caf1c78a0a91",
                                "customizations": [{
                                    "uuid": "1a8de720-554d-4ba0-9640-b1639a07a73c",
                                    "title": "Keuze Formaat Voordeelmenu",
                                    "tags": [{"uuid": "7d39c6c2-7f3e-4aa1-92e3-13b6aefd6e9a", "name": "Size"}],
                                    "options": [{
                                        "uuid": "f1465a78-1b2e-4fe1-9f79-82217465c512",
                                        "title": "Medium",
                                        "price": 0,
                                        "tags": [{"uuid": "882cedee-2d7a-4019-b46b-227082baeb7c", "name": "Medium"}]
                                    }, {
                                        "uuid": "b339b24c-21b5-4171-92a2-6465ad7f0e91",
                                        "title": "Groot",
                                        "price": 75,
                                        "tags": [{"uuid": "21f0db62-8d48-433d-a6ea-2fdb1b8b4648", "name": "Large"}]
                                    }],
                                    "minPermitted": 1,
                                    "maxPermitted": 1
                                }, {
                                    "uuid": "c11cb9e1-2bd8-4905-bdeb-d5c5ef704049",
                                    "title": "Keuze Side Voordeelmenu",
                                    "tags": [{"uuid": "a39f874d-b5cf-4fbc-ada0-8eedae87ca08", "name": "Add-ons"}],
                                    "options": [{
                                        "uuid": "ea607b9a-ae5d-49a3-8648-b0d284a64dab",
                                        "title": "Franse Frietjes",
                                        "price": 0
                                    }, {
                                        "uuid": "169d67f4-1033-478d-8247-963b313dee1a",
                                        "title": "Sweet Potatoes",
                                        "price": 0
                                    }, {
                                        "uuid": "f8501ca7-08bd-4fb8-b7dd-b857046a3494",
                                        "title": "Side Salad",
                                        "price": 0
                                    }],
                                    "minPermitted": 1,
                                    "maxPermitted": 1
                                }, {
                                    "uuid": "06b06fa3-c9e6-4ad1-b1a2-02687317ec05",
                                    "title": "Keuze Drank Voordeelmenu",
                                    "tags": [{"uuid": "a39f874d-b5cf-4fbc-ada0-8eedae87ca08", "name": "Add-ons"}],
                                    "options": [{
                                        "uuid": "631a4132-32c5-454a-870e-587ebf552702",
                                        "title": "Milk Shake Aardbei",
                                        "price": 100
                                    }, {
                                        "uuid": "cda126ad-72d5-49c1-86a2-182951bcc3e4",
                                        "title": "Milk Shake Chocolade",
                                        "price": 100
                                    }, {
                                        "uuid": "e90f6b96-060d-4809-ac72-0f7dae450dce",
                                        "title": "Milk Shake Vanille",
                                        "price": 100
                                    }, {
                                        "uuid": "2bdce5de-ce11-476e-8632-6b0a5b5c254d",
                                        "title": "Milk Shake Banaan",
                                        "price": 100
                                    }, {
                                        "uuid": "b52efdeb-85aa-4991-83f5-fabe8fe9007e",
                                        "title": "Coca-Cola",
                                        "price": 0
                                    }, {
                                        "uuid": "e1619f2b-26e4-492d-976b-2739b3ef4b76",
                                        "title": "Coca-Cola Light",
                                        "price": 0
                                    }, {
                                        "uuid": "346f4481-a69e-4e55-b7f9-a78757a2a983",
                                        "title": "Coca-Cola Zero",
                                        "price": 0
                                    }, {
                                        "uuid": "46b00700-6daf-40c5-b72e-568a032a6aa1",
                                        "title": "Fanta",
                                        "price": 0
                                    }, {
                                        "uuid": "f8ed9ad7-5001-4483-9802-49a102b6e78c",
                                        "title": "Sprite",
                                        "price": 0
                                    }, {
                                        "uuid": "2978316a-7c20-4ea8-82eb-d5386b33a221",
                                        "title": "Lipton Ice Tea",
                                        "price": 0
                                    }, {
                                        "uuid": "66836f79-0cd7-4c0b-9308-df510a84704d",
                                        "title": "SPA",
                                        "price": 0
                                    }, {
                                        "uuid": "0b75efad-1a3b-4c13-9de2-e93f03aef10c",
                                        "title": "SPA Rood",
                                        "price": 0
                                    }, {
                                        "uuid": "b11d763a-b060-4036-a89b-3c8b1c8acdcc",
                                        "title": "Biologische Halfvolle Melk",
                                        "price": 0
                                    }, {
                                        "uuid": "7d8dafe3-4f7d-42d9-848f-2c892367fe03",
                                        "title": "Vers Sinaasappelsap",
                                        "price": 0
                                    }, {
                                        "uuid": "a6658bdf-62bf-402a-a503-a76b65376e39",
                                        "title": "Verse Smoothie Aardbei-Banaan",
                                        "price": 0
                                    }, {
                                        "uuid": "a5f64009-1e21-4ce2-b519-f67c60503900",
                                        "title": "Tropicana Appelsap",
                                        "price": 0
                                    }, {
                                        "uuid": "63c22012-95c6-4a59-88c6-1ff8e86aff6f",
                                        "title": "Fristi",
                                        "price": 100
                                    }, {
                                        "uuid": "8528e08b-1121-4fbe-a322-a69f5c9bec7b",
                                        "title": "Chocomel",
                                        "price": 100
                                    }],
                                    "minPermitted": 1,
                                    "maxPermitted": 1
                                }, {
                                    "uuid": "320d0470-70fc-4f13-b198-8145c47273fc",
                                    "title": "Keuze Saus Voordeelmenu",
                                    "tags": [{"uuid": "a39f874d-b5cf-4fbc-ada0-8eedae87ca08", "name": "Add-ons"}],
                                    "options": [{
                                        "uuid": "4d32229e-e851-41e6-923e-9abe20540a3a",
                                        "title": "Frietsaus",
                                        "price": 60
                                    }, {
                                        "uuid": "4476cef8-055b-43f1-b9b4-c4fec33d40e9",
                                        "title": "Frietsaus 2x",
                                        "price": 120
                                    }, {
                                        "uuid": "4de8fafe-659f-4d69-b3db-8d14979a62a3",
                                        "title": "Mayonaise",
                                        "price": 60
                                    }, {
                                        "uuid": "56443e25-10bc-4ff1-9b57-2a2af3e3f861",
                                        "title": "Mayonaise 2x",
                                        "price": 120
                                    }, {
                                        "uuid": "0b79c23f-7638-4a5a-b0fd-9f6146bcd946",
                                        "title": "Ketchup",
                                        "price": 60
                                    }, {
                                        "uuid": "2d6362d7-7b35-466e-b753-774b1f90561e",
                                        "title": "Ketchup 2x",
                                        "price": 120
                                    }],
                                    "minPermitted": 0,
                                    "maxPermitted": 2
                                }, {
                                    "uuid": "646b5e1d-83ae-4f13-b8b5-223203e84a6d",
                                    "title": "Keuze Voor Erbij Voordeelmenu",
                                    "tags": [{"uuid": "a39f874d-b5cf-4fbc-ada0-8eedae87ca08", "name": "Add-ons"}],
                                    "options": [{
                                        "uuid": "1050c081-f22a-4182-a36c-5a2a04caf180",
                                        "title": "Chicken McNuggets 9 met 2x Barbecuesaus",
                                        "price": 490
                                    }, {
                                        "uuid": "09a267cb-5897-4beb-985c-d3a41f5d6ca8",
                                        "title": "Chicken McNuggets 9 met 2x Zoetzure Saus",
                                        "price": 490
                                    }, {
                                        "uuid": "9861a550-96c8-4dc6-bbc0-a072f6d75749",
                                        "title": "Chicken McNuggets 9 met 2x Kerriesaus",
                                        "price": 490
                                    }, {
                                        "uuid": "f0e52dba-4386-4fd9-a9ef-d9f3344ba486",
                                        "title": "Chicken McNuggets 9 met 2x Mosterdsaus",
                                        "price": 490
                                    }],
                                    "minPermitted": 0,
                                    "maxPermitted": 1
                                }],
                                "rawImageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/6764c3d184d72ee4818e7c222bf01fb1"
                            },
                            "ea8335cf-e2c5-4e5c-9e13-0daffbddba3a": {
                                "imageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/039fefbfe85f17fb99a336d33019d415",
                                "itemDescription": "Begin je dag lekker met verse yoghurt, noten en krokante muesli.",
                                "price": 375,
                                "title": "Naturel Yoghurt",
                                "uuid": "ea8335cf-e2c5-4e5c-9e13-0daffbddba3a",
                                "customizations": [],
                                "rawImageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/039fefbfe85f17fb99a336d33019d415"
                            },
                            "982f1a38-392f-4e71-a203-89e76c95e160": {
                                "imageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/8e8d1846072becb98dd05ceef82c3e63",
                                "itemDescription": "A delicious, colorful lettuce mix with smoked bacon, semi-matured cheese flakes, a free range egg, fresh pieces of red apple, Pomodore tomatoes, a garden herbs crunch and a honey-mustard dressing.",
                                "price": 595,
                                "title": "Salade Bacon Cheese",
                                "uuid": "982f1a38-392f-4e71-a203-89e76c95e160",
                                "suspendUntil": 8640000000,
                                "customizations": [],
                                "suspendReason": "Sold out",
                                "rawImageUrl": "https://duyt4h9nfnj50.cloudfront.net/sku/8e8d1846072becb98dd05ceef82c3e63"
                            }
                        },
                        "notOrderableMessage": "Currently unavailable",
                        "priceBucket": "€",
                        "sections": [{
                            "uuid": "eb5bb238-8e44-461a-be0d-ae30bf9f7e3e",
                            "title": "Lunch & Diner (Nederlands)",
                            "subtitle": "11:00 AM – 11:00 PM",
                            "isTop": true,
                            "isOnSale": true,
                            "subsectionGroups": [{
                                "title": "Full Menu",
                                "type": "storeMenu",
                                "subsectionDisplayOrder": ["28268891-72be-4d5e-be96-28bb4fd93259", "669edb59-f708-404f-a936-fc67ae2c9fa3", "f66689d0-5192-4578-8d0d-987a397b7a6b", "e2e1072a-1ae7-490d-a1a0-1f0372c6cfa7", "7b26a9ae-4acf-4c92-9ea7-66bb2e0ea0e2", "21237342-41b5-43cf-94df-f187f3d9f73c", "b1f85c44-ee17-4127-99d0-38c2406c2d94", "5165d248-5aa2-4659-91b0-038a747ed3f4", "e79cd67a-ef08-409d-a416-99ec4e4ec6aa", "f8d28cae-ca8f-4229-8da4-33e9d7ba0d50"]
                            }]
                        }, {
                            "uuid": "8a6908e9-9ddf-4b11-931e-f9eaaf92255c",
                            "title": "Lunch & Dinner (English)",
                            "subtitle": "11:00 AM – 11:00 PM",
                            "isOnSale": true,
                            "subsectionGroups": [{
                                "title": "Full Menu",
                                "type": "storeMenu",
                                "subsectionDisplayOrder": ["4b46d2f5-3529-4e21-84bd-c29b89eb0544", "8a647058-0c90-4dda-89a9-dd5b3ee2b1ab", "681acd02-f691-4030-9ab9-ef90e639e0d2", "2dab36a7-8f31-4e74-821c-1ad0c678d728", "a623c439-d943-444a-9180-a0e6b35f0265", "cc35fe04-8400-4844-b11c-9e2d189d1534", "e70a6bbb-2452-4cb8-b9e3-f3bdd11493ff", "4e17ffa2-bb16-49bf-980f-6c4e9f9472a6", "27ee0e45-bb0d-400c-bceb-9a6cdab71a11", "648d5f40-a0c1-4b93-8816-878e8d483fb0"]
                            }]
                        }],
                        "subsectionsMap": {
                            "28268891-72be-4d5e-be96-28bb4fd93259": {
                                "uuid": "28268891-72be-4d5e-be96-28bb4fd93259",
                                "title": "Voordeelmenu's",
                                "displayItems": [{
                                    "uuid": "30a8c8fe-c7f2-44a4-8e38-3c76e7c18cb4",
                                    "type": "item"
                                }, {
                                    "uuid": "82085154-c0db-43f9-a9df-bd2229cf2e8d",
                                    "type": "item"
                                }, {
                                    "uuid": "aa7fb9c4-d1e0-4b46-adf4-8f3705c9b908",
                                    "type": "item"
                                }, {
                                    "uuid": "8a292ddd-f4d4-4813-88be-74c9e0f1a6d2",
                                    "type": "item"
                                }, {
                                    "uuid": "129a7bf6-6b1b-42eb-a656-d62e6ddc478d",
                                    "type": "item"
                                }, {
                                    "uuid": "faf18e72-7a0e-457d-9d40-8a0059d219ac",
                                    "type": "item"
                                }, {
                                    "uuid": "7f5a6f01-be72-4100-9b27-757c797d9208",
                                    "type": "item"
                                }, {
                                    "uuid": "197cc01f-210d-4a32-874a-bbe6e237d391",
                                    "type": "item"
                                }, {"uuid": "fd090cf9-5bfc-4357-ac16-caf1c78a0a91", "type": "item"}]
                            },
                            "669edb59-f708-404f-a936-fc67ae2c9fa3": {
                                "uuid": "669edb59-f708-404f-a936-fc67ae2c9fa3",
                                "title": "Meest Populair",
                                "displayItems": [{
                                    "uuid": "309dc25a-8717-4843-96e6-a569257f45b5",
                                    "type": "item"
                                }, {
                                    "uuid": "2e51c364-d392-4ddd-bcb2-fe333ae591b0",
                                    "type": "item"
                                }, {
                                    "uuid": "085636b2-6a58-4092-a76f-18d5b9eb4a2e",
                                    "type": "item"
                                }, {
                                    "uuid": "0ca1fe87-0b6b-43ab-9bf2-9eeae9db5f75",
                                    "type": "item"
                                }, {
                                    "uuid": "ef9b3b77-1f21-4754-ad9d-e4bef3faf1aa",
                                    "type": "item"
                                }, {
                                    "uuid": "0f279e1b-bc92-4ff7-bee9-37a74e810250",
                                    "type": "item"
                                }, {"uuid": "a8e00fed-afd2-417b-80ff-f9d3d1289a61", "type": "item"}]
                            },
                            "4b46d2f5-3529-4e21-84bd-c29b89eb0544": {
                                "uuid": "4b46d2f5-3529-4e21-84bd-c29b89eb0544",
                                "title": "Value Meals",
                                "displayItems": [{
                                    "uuid": "66a6a689-7e6a-42db-af99-5e0e61945c39",
                                    "type": "item"
                                }, {
                                    "uuid": "0d58fd65-1270-4f7a-a4a0-9eec760c44ff",
                                    "type": "item"
                                }, {
                                    "uuid": "ab0a260a-94af-4a48-b053-0bd2cb024eff",
                                    "type": "item"
                                }, {
                                    "uuid": "0e76585a-49cd-4c31-9a4b-39a7206fe7d3",
                                    "type": "item"
                                }, {
                                    "uuid": "a8419efe-2a35-4f09-bc3f-cd1fe73d6017",
                                    "type": "item"
                                }, {
                                    "uuid": "7a70cff8-f0dd-4344-8e4d-de5e24e93d81",
                                    "type": "item"
                                }, {
                                    "uuid": "75f2207f-9fd6-4533-aa8e-5b9186a8bbb4",
                                    "type": "item"
                                }, {
                                    "uuid": "191ed883-9331-455f-b385-b20ede0c5d42",
                                    "type": "item"
                                }, {
                                    "uuid": "3ff1061b-30e2-4ae0-addb-973d2d9251f9",
                                    "type": "item"
                                }, {"uuid": "1de2a08f-6b62-48ac-b323-7edfbcd42d4d", "type": "item"}]
                            },
                            "5165d248-5aa2-4659-91b0-038a747ed3f4": {
                                "uuid": "5165d248-5aa2-4659-91b0-038a747ed3f4",
                                "title": "Dranken",
                                "displayItems": [{
                                    "uuid": "7b51e7c9-3bfd-4795-a672-3b6abb02a371",
                                    "type": "item"
                                }, {
                                    "uuid": "3ffb9613-cfa9-4a3a-ad5b-e0704a27314a",
                                    "type": "item"
                                }, {
                                    "uuid": "0e996ed5-8f9d-4766-bda5-3921c0e11f9a",
                                    "type": "item"
                                }, {
                                    "uuid": "8a8c0f9b-8ffc-401c-887a-046ea6376916",
                                    "type": "item"
                                }, {
                                    "uuid": "e1d03267-76d9-4b9b-863f-8201d2478272",
                                    "type": "item"
                                }, {
                                    "uuid": "2af7ad0f-1a63-4d0a-bdac-626e9297838e",
                                    "type": "item"
                                }, {
                                    "uuid": "62500346-b2d8-4412-b452-0089d10bd026",
                                    "type": "item"
                                }, {
                                    "uuid": "627540f9-8a84-4754-86c7-47a820a8a58e",
                                    "type": "item"
                                }, {
                                    "uuid": "c4f4db8c-734d-4506-af91-c4fa9d122725",
                                    "type": "item"
                                }, {
                                    "uuid": "ce5ca383-c476-421e-a306-2bcaf48f8a76",
                                    "type": "item"
                                }, {
                                    "uuid": "ada2ff0a-787a-4431-a2f2-bdaaad5f01e6",
                                    "type": "item"
                                }, {
                                    "uuid": "ce24de7e-ef65-4a0f-a477-500704a69df9",
                                    "type": "item"
                                }, {
                                    "uuid": "b5d82e2e-5eb7-4f37-bd23-f6eecf291374",
                                    "type": "item"
                                }, {
                                    "uuid": "5d7a96f1-1e75-401c-942e-bcb99f263324",
                                    "type": "item"
                                }, {
                                    "uuid": "03bef294-dc7b-43bc-869c-b0b7ba34c1e8",
                                    "type": "item"
                                }, {
                                    "uuid": "f2365fde-cde6-46d9-a245-9ebe649751f2",
                                    "type": "item"
                                }, {
                                    "uuid": "117c638e-a762-4555-9610-fd5d1281266a",
                                    "type": "item"
                                }, {
                                    "uuid": "313a91a4-764c-4ab9-9481-35dc7b120c8b",
                                    "type": "item"
                                }, {
                                    "uuid": "5433d780-314e-4fb8-8d3f-0a42a5e0a69b",
                                    "type": "item"
                                }, {
                                    "uuid": "edb272cf-347c-4c9f-9c3a-8abc01beabf7",
                                    "type": "item"
                                }, {
                                    "uuid": "3c2eea69-da07-4a10-8d5e-08b0b7fe2abd",
                                    "type": "item"
                                }, {
                                    "uuid": "85b07c57-58cb-4b6b-85ae-d6cb82b1b1ac",
                                    "type": "item"
                                }, {
                                    "uuid": "aceff3d4-1c32-4a94-a0e8-f13fd8b3e816",
                                    "type": "item"
                                }, {
                                    "uuid": "3c97816d-7b56-435d-8ef5-19d020acdf81",
                                    "type": "item"
                                }, {
                                    "uuid": "b5667a59-8772-4a09-b4ff-557f23b56ce2",
                                    "type": "item"
                                }, {
                                    "uuid": "a4772808-90b5-470e-8203-ffc4c988c0a7",
                                    "type": "item"
                                }, {
                                    "uuid": "3a6a7c9d-35f9-4ba8-83e6-6aaf753e5f0f",
                                    "type": "item"
                                }, {
                                    "uuid": "b56b9b49-4e19-4e35-9f6e-8d89bd2efac1",
                                    "type": "item"
                                }, {"uuid": "697bda36-af7b-4c39-89d2-ad109ef152f5", "type": "item"}]
                            },
                            "4e17ffa2-bb16-49bf-980f-6c4e9f9472a6": {
                                "uuid": "4e17ffa2-bb16-49bf-980f-6c4e9f9472a6",
                                "title": "Drinks",
                                "displayItems": [{
                                    "uuid": "d52cbbcd-3015-4909-9701-adb3905044a4",
                                    "type": "item"
                                }, {
                                    "uuid": "adc65ed0-68f2-4075-bb9c-d8ed2255bb7f",
                                    "type": "item"
                                }, {
                                    "uuid": "87235fda-10c7-4309-b5dd-de9853679495",
                                    "type": "item"
                                }, {
                                    "uuid": "555f5eb9-d78c-4a61-9b05-21ab608a6540",
                                    "type": "item"
                                }, {
                                    "uuid": "7cc9b742-e8cf-4fdc-b6d3-f286b9e26403",
                                    "type": "item"
                                }, {
                                    "uuid": "349a64ac-5e88-48f6-a509-c095806ddab6",
                                    "type": "item"
                                }, {
                                    "uuid": "5de54ca7-4c23-4c42-b4d7-4bb097560844",
                                    "type": "item"
                                }, {
                                    "uuid": "f1817639-b21b-405e-9abd-584a7dc7bc73",
                                    "type": "item"
                                }, {
                                    "uuid": "5e3f3222-5e5d-42e4-8d0f-4b52400b82dd",
                                    "type": "item"
                                }, {
                                    "uuid": "8788bba5-ae70-444e-bcc8-505b52563722",
                                    "type": "item"
                                }, {
                                    "uuid": "682e7ce6-37d6-430b-b12e-147b956527bc",
                                    "type": "item"
                                }, {
                                    "uuid": "d253ed85-ba68-4ddc-87cb-8244b3ffb300",
                                    "type": "item"
                                }, {
                                    "uuid": "321a82b3-389b-42ec-b340-fe723aeb88e8",
                                    "type": "item"
                                }, {
                                    "uuid": "1b498d42-3808-4c50-ab53-34cfdc1cd1c3",
                                    "type": "item"
                                }, {
                                    "uuid": "0f9716ea-64b5-49c5-babb-abbe37758b09",
                                    "type": "item"
                                }, {
                                    "uuid": "2fbfbd8c-369f-497d-a434-6d786eaf951e",
                                    "type": "item"
                                }, {
                                    "uuid": "02abb956-7e09-4e15-b1dc-e9d24e1864bd",
                                    "type": "item"
                                }, {
                                    "uuid": "2bf3c663-74a4-406c-b110-d9461deb079e",
                                    "type": "item"
                                }, {
                                    "uuid": "fb6d8e2f-30d3-413b-a0b8-ae23a70c2813",
                                    "type": "item"
                                }, {
                                    "uuid": "9ef011b5-db42-43bb-9a5b-0e42a07d6107",
                                    "type": "item"
                                }, {
                                    "uuid": "3cb469c1-9b73-44e7-a49c-599cfa0b3cd7",
                                    "type": "item"
                                }, {
                                    "uuid": "3cb4110b-4e1d-4d4f-84ae-5a9c06a3ce29",
                                    "type": "item"
                                }, {
                                    "uuid": "5fcddd09-9729-4c26-ae4e-812a23a931b7",
                                    "type": "item"
                                }, {
                                    "uuid": "d11c9e43-0bde-4d81-b91a-08f713f11f4e",
                                    "type": "item"
                                }, {
                                    "uuid": "43e196ee-340d-4f3a-97bd-db3b16ceb9c8",
                                    "type": "item"
                                }, {
                                    "uuid": "1c035bb7-c410-451c-9a6a-f3455f889e66",
                                    "type": "item"
                                }, {
                                    "uuid": "6ade1517-8d20-49f1-bd7a-a2a43b78c92a",
                                    "type": "item"
                                }, {
                                    "uuid": "d3a46376-a49e-45f5-8926-297e48679501",
                                    "type": "item"
                                }, {"uuid": "d9256d88-2bfe-4a14-934a-edcdcfddfbc5", "type": "item"}]
                            },
                            "a623c439-d943-444a-9180-a0e6b35f0265": {
                                "uuid": "a623c439-d943-444a-9180-a0e6b35f0265",
                                "title": "Finger Food",
                                "displayItems": [{
                                    "uuid": "7d9d2add-463e-49ed-a555-bf9291ff9930",
                                    "type": "item"
                                }, {
                                    "uuid": "cbdbedb3-8c09-4455-b41e-61e5b6686d52",
                                    "type": "item"
                                }, {"uuid": "34613b66-ea71-4539-a9b3-1c45d35af134", "type": "item"}]
                            },
                            "f8d28cae-ca8f-4229-8da4-33e9d7ba0d50": {
                                "uuid": "f8d28cae-ca8f-4229-8da4-33e9d7ba0d50",
                                "title": "Salades, Yoghurt & Fruit",
                                "displayItems": [{
                                    "uuid": "88b1d474-6163-497f-8b19-dd59291a9dd9",
                                    "type": "item"
                                }, {
                                    "uuid": "73a84cfd-bc59-4481-9a3e-a77997ae146f",
                                    "type": "item"
                                }, {
                                    "uuid": "ea8335cf-e2c5-4e5c-9e13-0daffbddba3a",
                                    "type": "item"
                                }, {
                                    "uuid": "89f1885b-6ebc-48f9-986b-e1c8c5de574a",
                                    "type": "item"
                                }, {
                                    "uuid": "782d6e61-45df-44d4-8d61-68e1475c8ce5",
                                    "type": "item"
                                }, {"uuid": "7a3bf65d-0070-4115-8d11-96d3e85d2100", "type": "item"}]
                            },
                            "681acd02-f691-4030-9ab9-ef90e639e0d2": {
                                "uuid": "681acd02-f691-4030-9ab9-ef90e639e0d2",
                                "title": "Burgers & Wraps",
                                "displayItems": [{
                                    "uuid": "e47b42c6-a7dc-47f1-bdbe-e694e62c070f",
                                    "type": "item"
                                }, {
                                    "uuid": "da6e6677-3243-4419-b275-b34629ea0bd8",
                                    "type": "item"
                                }, {
                                    "uuid": "4f71d4cc-be1c-4635-b030-d5875849e28a",
                                    "type": "item"
                                }, {
                                    "uuid": "5c64f01a-ad32-4093-b7ad-18ebb35ecaef",
                                    "type": "item"
                                }, {
                                    "uuid": "f8e34cac-fafc-4c6a-89ff-9cfc168d8bff",
                                    "type": "item"
                                }, {
                                    "uuid": "0c187f2a-1abe-49a5-af6e-e1bd8f5eaee3",
                                    "type": "item"
                                }, {
                                    "uuid": "da834fbc-f4c3-404a-9b05-89888ee4a667",
                                    "type": "item"
                                }, {
                                    "uuid": "a4a32681-7763-4235-84f4-7be7da7159c8",
                                    "type": "item"
                                }, {
                                    "uuid": "85d36f62-5c2f-4f2f-995b-b04ad23ac490",
                                    "type": "item"
                                }, {
                                    "uuid": "6d0cd91b-2d91-40ae-9186-0e507877e23f",
                                    "type": "item"
                                }, {"uuid": "2d37e5f1-47dc-425d-bccf-5893791b04cf", "type": "item"}]
                            },
                            "f66689d0-5192-4578-8d0d-987a397b7a6b": {
                                "uuid": "f66689d0-5192-4578-8d0d-987a397b7a6b",
                                "title": "Burgers & Wraps",
                                "displayItems": [{
                                    "uuid": "92abe116-609b-49e5-9468-0c4c9a1d1cd8",
                                    "type": "item"
                                }, {
                                    "uuid": "8b464206-4e6a-47b6-aaca-23706d370512",
                                    "type": "item"
                                }, {
                                    "uuid": "36e27ef4-65f3-4b2e-8d58-28f2400e2f26",
                                    "type": "item"
                                }, {
                                    "uuid": "1b010ca5-1ba3-4f3a-a75e-b545c17835de",
                                    "type": "item"
                                }, {
                                    "uuid": "2fbf9769-bf37-4eaf-af39-efb208f09c49",
                                    "type": "item"
                                }, {
                                    "uuid": "060e7913-4080-465d-8306-7b4feeedc42c",
                                    "type": "item"
                                }, {
                                    "uuid": "480b49fd-47f0-47b0-bc03-48e717091ddc",
                                    "type": "item"
                                }, {
                                    "uuid": "a977e2ad-caf2-4eb2-8e40-9a96336364e9",
                                    "type": "item"
                                }, {
                                    "uuid": "cf8e35cd-f60c-47ed-b5c1-fbb867d4c3d5",
                                    "type": "item"
                                }, {
                                    "uuid": "5d081f2f-71cb-4d77-9046-b036532ff7d3",
                                    "type": "item"
                                }, {"uuid": "7b0ef34a-a157-4884-b0df-3c27cbda1f1b", "type": "item"}]
                            },
                            "21237342-41b5-43cf-94df-f187f3d9f73c": {
                                "uuid": "21237342-41b5-43cf-94df-f187f3d9f73c",
                                "title": "Happy Meals",
                                "displayItems": [{
                                    "uuid": "60e7f413-cb1b-4c91-9350-ed5b2d54efc5",
                                    "type": "item"
                                }, {
                                    "uuid": "b20c23f1-0635-405b-9f66-2d023ac9a57f",
                                    "type": "item"
                                }, {
                                    "uuid": "f80b6d31-74a4-45ec-ae9e-5556fd9b1c63",
                                    "type": "item"
                                }, {"uuid": "d3c7f4dd-756d-4ba0-815d-ad998d83bbac", "type": "item"}]
                            },
                            "b1f85c44-ee17-4127-99d0-38c2406c2d94": {
                                "uuid": "b1f85c44-ee17-4127-99d0-38c2406c2d94",
                                "title": "Friet & Sausjes",
                                "displayItems": [{
                                    "uuid": "7a19e20a-90cc-4511-901c-adbb3aa0d7f7",
                                    "type": "item"
                                }, {
                                    "uuid": "8daf71f1-6194-4615-90ce-15c71e0b9b2e",
                                    "type": "item"
                                }, {
                                    "uuid": "c80d01b8-dbea-4db5-990b-9b45084e6e55",
                                    "type": "item"
                                }, {
                                    "uuid": "11d6f962-ae1f-430b-9f57-3b66e5e9975f",
                                    "type": "item"
                                }, {
                                    "uuid": "b8c558b5-888b-42a4-91aa-c21cba716876",
                                    "type": "item"
                                }, {
                                    "uuid": "1a9d777e-9198-4b0b-a333-5d7145b2d4e1",
                                    "type": "item"
                                }, {
                                    "uuid": "cb53f55d-a0e2-4c20-8afe-663c7c58adca",
                                    "type": "item"
                                }, {
                                    "uuid": "7ab4df2f-76e2-4004-b4a8-7a7713fd7406",
                                    "type": "item"
                                }, {"uuid": "68884bd8-d349-4526-9768-6be8c807339d", "type": "item"}]
                            },
                            "cc35fe04-8400-4844-b11c-9e2d189d1534": {
                                "uuid": "cc35fe04-8400-4844-b11c-9e2d189d1534",
                                "title": "Happy Meals",
                                "displayItems": [{
                                    "uuid": "a4180565-eeda-42d3-9e9d-77904d81835b",
                                    "type": "item"
                                }, {
                                    "uuid": "f06efa20-6906-459c-a66f-575fb36ee59d",
                                    "type": "item"
                                }, {
                                    "uuid": "c12fe9e9-966e-4505-8542-23922ff11907",
                                    "type": "item"
                                }, {"uuid": "a397459e-299d-4e09-b5ff-77df8a8b53ba", "type": "item"}]
                            },
                            "27ee0e45-bb0d-400c-bceb-9a6cdab71a11": {
                                "uuid": "27ee0e45-bb0d-400c-bceb-9a6cdab71a11",
                                "title": "Ice & Cookies",
                                "displayItems": [{
                                    "uuid": "23f7f24a-d1f1-4475-bdbf-404f5cb2038d",
                                    "type": "item"
                                }, {
                                    "uuid": "f1a1c8a2-c2e8-486a-ac32-c9afe45d11d4",
                                    "type": "item"
                                }, {
                                    "uuid": "a40537a5-c29c-4896-8f5b-be68af85223a",
                                    "type": "item"
                                }, {
                                    "uuid": "42633c1c-5e07-4564-8c5d-c20a94229dfd",
                                    "type": "item"
                                }, {
                                    "uuid": "7607339f-0f2b-45a5-b6c1-dc51ff7d1bc1",
                                    "type": "item"
                                }, {
                                    "uuid": "f824c6f4-d7ab-4e15-8980-ebfabad8d32c",
                                    "type": "item"
                                }, {
                                    "uuid": "21793699-cdf8-4c8a-a920-8525369fe3d5",
                                    "type": "item"
                                }, {
                                    "uuid": "611255ac-e713-459d-ac10-e889a02bb7eb",
                                    "type": "item"
                                }, {"uuid": "1f0d5122-3bb7-4aeb-8cb2-cc7894a28ac6", "type": "item"}]
                            },
                            "648d5f40-a0c1-4b93-8816-878e8d483fb0": {
                                "uuid": "648d5f40-a0c1-4b93-8816-878e8d483fb0",
                                "title": "Salads, Yoghurt & Fruit",
                                "displayItems": [{
                                    "uuid": "d8a58535-daee-4c1d-91e0-84ca1f6f04c9",
                                    "type": "item"
                                }, {
                                    "uuid": "fc4a5097-5802-48d6-99a0-0a97cd9da6ab",
                                    "type": "item"
                                }, {
                                    "uuid": "07d8c054-cbb6-4a67-8ba9-937768140ed2",
                                    "type": "item"
                                }, {
                                    "uuid": "58b19642-4fce-44ea-aced-02e7064c6d68",
                                    "type": "item"
                                }, {
                                    "uuid": "504cb7ba-ce54-4f87-b02f-c493e048caa5",
                                    "type": "item"
                                }, {"uuid": "fe648743-9790-4b6a-9bff-70d6bd07700d", "type": "item"}]
                            },
                            "7b26a9ae-4acf-4c92-9ea7-66bb2e0ea0e2": {
                                "uuid": "7b26a9ae-4acf-4c92-9ea7-66bb2e0ea0e2",
                                "title": "Finger Food",
                                "displayItems": [{
                                    "uuid": "b371df82-e439-4552-81c2-f66bb9baee83",
                                    "type": "item"
                                }, {
                                    "uuid": "1a9f70a1-1dd8-4c12-b005-ccd3d974f8d1",
                                    "type": "item"
                                }, {"uuid": "5c027ba1-b4a2-44bc-83a1-601d280c1e79", "type": "item"}]
                            },
                            "e2e1072a-1ae7-490d-a1a0-1f0372c6cfa7": {
                                "uuid": "e2e1072a-1ae7-490d-a1a0-1f0372c6cfa7",
                                "title": "Actie",
                                "displayItems": [{
                                    "uuid": "8010c965-18e0-4a89-94ed-08038f850901",
                                    "type": "item"
                                }, {
                                    "uuid": "e8b18dd9-844e-4958-b597-5afa0ae4a708",
                                    "type": "item"
                                }, {
                                    "uuid": "654e36b8-3bc9-407b-bdd7-47ddd1d17b39",
                                    "type": "item"
                                }, {
                                    "uuid": "2e99f8de-5b02-4d80-81e7-ec02848c7436",
                                    "type": "item"
                                }, {
                                    "uuid": "e03a7720-6060-4ac6-b010-32327cf87643",
                                    "type": "item"
                                }, {
                                    "uuid": "059c4151-d349-46db-8c3c-b3b1d0c0b54b",
                                    "type": "item"
                                }, {
                                    "uuid": "29f283ad-e652-498f-97c8-6f9d4a6df3c4",
                                    "type": "item"
                                }, {
                                    "uuid": "f9ccb147-eba2-4743-a8cd-18b42617756d",
                                    "type": "item"
                                }, {
                                    "uuid": "00c31c73-dd7f-474b-bb8a-1da4825cf3e6",
                                    "type": "item"
                                }, {
                                    "uuid": "3423cff6-5cf4-431d-93b6-f8f847acd416",
                                    "type": "item"
                                }, {"uuid": "f4190257-b38b-462e-9a23-5e9b91de1d72", "type": "item"}]
                            },
                            "8a647058-0c90-4dda-89a9-dd5b3ee2b1ab": {
                                "uuid": "8a647058-0c90-4dda-89a9-dd5b3ee2b1ab",
                                "title": "Most Popular",
                                "displayItems": [{
                                    "uuid": "0cc4f4a6-08eb-438b-85b0-29fa1329b2ee",
                                    "type": "item"
                                }, {
                                    "uuid": "e6d98ace-4e04-45d5-a9de-27d819646221",
                                    "type": "item"
                                }, {
                                    "uuid": "58c39c70-f4ef-45b4-8599-9b038e103410",
                                    "type": "item"
                                }, {
                                    "uuid": "7385e2b6-436e-4395-a890-c8a735b7465b",
                                    "type": "item"
                                }, {
                                    "uuid": "3e97f14e-0c83-4fe7-97b9-16e89bfe7e43",
                                    "type": "item"
                                }, {
                                    "uuid": "9d9e060e-e2c0-4fbd-ab16-f990713424dc",
                                    "type": "item"
                                }, {"uuid": "dc08723b-e5fa-4ba5-bc7e-36299e2fc894", "type": "item"}]
                            },
                            "e70a6bbb-2452-4cb8-b9e3-f3bdd11493ff": {
                                "uuid": "e70a6bbb-2452-4cb8-b9e3-f3bdd11493ff",
                                "title": "Fries & Sauces",
                                "displayItems": [{
                                    "uuid": "195b41c6-9ad1-4687-921b-04154be96405",
                                    "type": "item"
                                }, {
                                    "uuid": "e38d5858-cc95-408f-81b8-f22083b51321",
                                    "type": "item"
                                }, {
                                    "uuid": "cd368267-0e3d-40ce-a7c9-ad023e347a2c",
                                    "type": "item"
                                }, {
                                    "uuid": "f4f1497c-effb-465a-a969-e4a0fa11ab60",
                                    "type": "item"
                                }, {
                                    "uuid": "81b1f7d8-8a70-4bb2-bbac-298949eca668",
                                    "type": "item"
                                }, {
                                    "uuid": "ae1d7ea1-79b2-4bc7-b938-8c35347af049",
                                    "type": "item"
                                }, {
                                    "uuid": "69f3a2cd-69dc-484b-abf8-4eb1ded14aa1",
                                    "type": "item"
                                }, {
                                    "uuid": "c712ae0e-8eae-41eb-af66-00c698ee22e7",
                                    "type": "item"
                                }, {"uuid": "9d2029f5-e57a-468d-92ca-c0c30f451a7a", "type": "item"}]
                            },
                            "e79cd67a-ef08-409d-a416-99ec4e4ec6aa": {
                                "uuid": "e79cd67a-ef08-409d-a416-99ec4e4ec6aa",
                                "title": "IJs & Cookies",
                                "displayItems": [{
                                    "uuid": "307acb2d-fc01-42dd-acb0-dc0056141aab",
                                    "type": "item"
                                }, {
                                    "uuid": "f5da9ff8-5087-43e5-9f73-334df10f0ba1",
                                    "type": "item"
                                }, {
                                    "uuid": "3a6548be-fe01-4b8c-a28e-f263a033b61f",
                                    "type": "item"
                                }, {
                                    "uuid": "af7cbf8a-d49d-4ccf-8a02-cded2d614a2e",
                                    "type": "item"
                                }, {
                                    "uuid": "5168580a-23af-43d5-b380-b8e0b667cd8b",
                                    "type": "item"
                                }, {
                                    "uuid": "4d978375-7d13-49be-84ff-23b256e0fb36",
                                    "type": "item"
                                }, {
                                    "uuid": "455b281a-f39c-4070-81a7-53334ca6dfae",
                                    "type": "item"
                                }, {
                                    "uuid": "0b54efa3-b72b-45d3-ac15-9ad0357c76ac",
                                    "type": "item"
                                }, {"uuid": "c52fd163-70c0-414f-be22-2611021b5582", "type": "item"}]
                            },
                            "2dab36a7-8f31-4e74-821c-1ad0c678d728": {
                                "uuid": "2dab36a7-8f31-4e74-821c-1ad0c678d728",
                                "title": "Limited Time",
                                "displayItems": [{
                                    "uuid": "b2676842-c965-4c0d-ae6e-28b885fe8ed4",
                                    "type": "item"
                                }, {
                                    "uuid": "4ece6366-0286-439f-b436-d363d6d1675e",
                                    "type": "item"
                                }, {
                                    "uuid": "21d4a49b-eac9-4d60-a678-ef8f5d07dca1",
                                    "type": "item"
                                }, {
                                    "uuid": "61423be0-c1ec-44c8-bc0b-329bb4ad2252",
                                    "type": "item"
                                }, {
                                    "uuid": "d25f4782-3b71-4177-91ea-0c3a40ee4149",
                                    "type": "item"
                                }, {
                                    "uuid": "ae86522d-0ddc-463a-accb-9969a91b2bd7",
                                    "type": "item"
                                }, {
                                    "uuid": "c9d87b89-c053-4136-86d3-9753572e0d28",
                                    "type": "item"
                                }, {
                                    "uuid": "982f1a38-392f-4e71-a203-89e76c95e160",
                                    "type": "item"
                                }, {
                                    "uuid": "b5788c55-a290-44f0-a5fb-91cbbda40094",
                                    "type": "item"
                                }, {
                                    "uuid": "094a0ed4-bb07-4bcc-ba7d-0b65445f4475",
                                    "type": "item"
                                }, {"uuid": "308ddaa8-0549-4f90-ad26-8853996cb35a", "type": "item"}]
                            }
                        },
                        "tags": [{
                            "uuid": "7c39b0c5-c7f2-445f-b5a4-2d3358cf0774",
                            "name": "Hamburgers",
                            "keyName": "Burger"
                        }, {
                            "uuid": "6b3f8cf7-c49e-41a5-b497-fe89a97b100c",
                            "name": "Fastfood",
                            "keyName": "FastFood"
                        }, {"uuid": "f785d035-14fd-46c2-a4bd-a5308a4fb6ec", "name": "Diner", "keyName": "Diner"}],
                        "title": "McDonald's - Muntplein",
                        "account": {
                            "timezone": "Europe/Amsterdam",
                            "timezoneOffsetSeconds": 7200,
                            "parentChain": {"uuid": "d8fb9d71-d641-43e1-901c-5f36a182c2d9", "name": "McDonald's"}
                        },
                        "regionId": 34,
                        "largeHeroImageUrl": "https://duyt4h9nfnj50.cloudfront.net/resized/67cb005b933faa854900bcf92f3b5518-w2880-dd.jpg",
                        "etaRange": {"min": 15, "max": 25, "raw": 20},
                        "status": "ACTIVE",
                        "isStoreVisible": true,
                        "isStoreMenuOpen": true,
                        "deliveryHoursInfos": [{
                            "date": "2018-07-10",
                            "openHours": [{
                                "startTime": 1140,
                                "endTime": 1380,
                                "durationOffset": 30,
                                "incrementStep": 15
                            }]
                        }, {
                            "date": "2018-07-11",
                            "openHours": [{
                                "startTime": 720,
                                "endTime": 1380,
                                "durationOffset": 30,
                                "incrementStep": 15
                            }]
                        }, {
                            "date": "2018-07-12",
                            "openHours": [{
                                "startTime": 720,
                                "endTime": 1380,
                                "durationOffset": 30,
                                "incrementStep": 15
                            }]
                        }, {
                            "date": "2018-07-13",
                            "openHours": [{
                                "startTime": 720,
                                "endTime": 1380,
                                "durationOffset": 30,
                                "incrementStep": 15
                            }]
                        }, {
                            "date": "2018-07-14",
                            "openHours": [{
                                "startTime": 720,
                                "endTime": 1380,
                                "durationOffset": 30,
                                "incrementStep": 15
                            }]
                        }, {
                            "date": "2018-07-15",
                            "openHours": [{
                                "startTime": 720,
                                "endTime": 1380,
                                "durationOffset": 30,
                                "incrementStep": 15
                            }]
                        }, {
                            "date": "2018-07-16",
                            "openHours": [{
                                "startTime": 720,
                                "endTime": 1380,
                                "durationOffset": 30,
                                "incrementStep": 15
                            }]
                        }],
                        "etdInfo": {
                            "dropoffETASec": 1177,
                            "dropoffETARange": {"min": 15, "max": 25, "raw": 20},
                            "etdMode": "PREDICTION"
                        },
                        "surgeInfo": {"multiplier": 1, "serviceFee": 2.5, "surgeBadgeLevel": "NONE"},
                        "canScheduleOrder": true,
                        "heroImage": {
                            "items": [{
                                "url": "https://duyt4h9nfnj50.cloudfront.net/resized/67cb005b933faa854900bcf92f3b5518-w2880-dd.jpg",
                                "width": 2880,
                                "height": 2304
                            }, {
                                "url": "https://duyt4h9nfnj50.cloudfront.net/resized/67cb005b933faa854900bcf92f3b5518-w240-6c.jpg",
                                "width": 240,
                                "height": 192
                            }, {
                                "url": "https://duyt4h9nfnj50.cloudfront.net/resized/67cb005b933faa854900bcf92f3b5518-w550-30.jpg",
                                "width": 550,
                                "height": 440
                            }, {
                                "url": "https://duyt4h9nfnj50.cloudfront.net/resized/67cb005b933faa854900bcf92f3b5518-w640-d5.jpg",
                                "width": 640,
                                "height": 512
                            }, {
                                "url": "https://duyt4h9nfnj50.cloudfront.net/resized/67cb005b933faa854900bcf92f3b5518-w750-42.jpg",
                                "width": 750,
                                "height": 600
                            }, {
                                "url": "https://duyt4h9nfnj50.cloudfront.net/resized/67cb005b933faa854900bcf92f3b5518-w1080-83.jpg",
                                "width": 1080,
                                "height": 864
                            }]
                        },
                        "ratingBadge": {
                            "textFormat": "\u003Cspan\u003E\u003Cspan style=\"font-family:S1;color:#3a3a48;\"\u003E4.4 \u003Cimg src=\"https://d1a3f4spazzrp4.cloudfront.net/static/images/Star_Black_Eats_3.png\" width=\"14\" height=\"14\" vertical-align=\"middle\"/\u003E \u003C/span\u003E\u003Cspan style=\"font-family:S1;color:#A4A4AC;\"\u003E(50+)\u003C/span\u003E\u003C/span\u003E",
                            "accessibilityText": "Rated 4.4 out of 5 stars based on more than 200 reviews."
                        },
                        "autoAccept": false,
                        "disableDispatchBuffer": false,
                        "disclaimerBadge": {"textFormat": "\u003Cspan style=\"font-family:M1;\"\u003EVoor allergenen informatie \u003Ca href=\"http://www.mcdonalds.nl/producten\" style=\"color:#61ad5f;\"\u003Eklik hier\u003C/a\u003E.\u003C/span\u003E"},
                        "attributeBadge": {
                            "textFormat": "\u003Cspan\u003E\u003Cspan style=\"font-family:S1;color:#3a3a48;\"\u003E4.4 \u003Cimg src=\"https://d1a3f4spazzrp4.cloudfront.net/static/images/Star_Black_Eats_3.png\" width=\"14\" height=\"14\" vertical-align=\"middle\"/\u003E \u003C/span\u003E\u003Cspan style=\"font-family:S1;color:#A4A4AC;\"\u003E(50+)\u003C/span\u003E\u003C/span\u003E",
                            "accessibilityText": " Rated 4.4 out of 5 stars based on more than 200 reviews."
                        },
                        "slug": "mcdonalds-muntplein",
                        "disableOrderInstructions": false,
                        "onlineStatusData": {"restaurantOnlineStatus": "ONLINE"},
                        "storeBadges": {
                            "subheader": [{
                                "textFormat": "\u003Cspan\u003E\u003Cspan style=\"font-family:S1;color:#3a3a48;\"\u003E4.4 \u003Cimg src=\"https://d1a3f4spazzrp4.cloudfront.net/static/images/Star_Black_Eats_3.png\" width=\"14\" height=\"14\" vertical-align=\"middle\"/\u003E \u003C/span\u003E\u003Cspan style=\"font-family:S1;color:#A4A4AC;\"\u003E(50+)\u003C/span\u003E\u003C/span\u003E",
                                "accessibilityText": "Rated 4.4 out of 5 stars based on more than 200 reviews."
                            }],
                            "disclaimerBadge": {"textFormat": "\u003Cspan style=\"font-family:M1;\"\u003EVoor allergenen informatie \u003Ca href=\"http://www.mcdonalds.nl/producten\" style=\"color:#61ad5f;\"\u003Eklik hier\u003C/a\u003E.\u003C/span\u003E"},
                            "attributeBadge": {
                                "textFormat": "\u003Cspan\u003E\u003Cspan style=\"font-family:S1;color:#3a3a48;\"\u003E4.4 \u003Cimg src=\"https://d1a3f4spazzrp4.cloudfront.net/static/images/Star_Black_Eats_3.png\" width=\"14\" height=\"14\" vertical-align=\"middle\"/\u003E \u003C/span\u003E\u003Cspan style=\"font-family:S1;color:#A4A4AC;\"\u003E(50+)\u003C/span\u003E\u003C/span\u003E",
                                "accessibilityText": " Rated 4.4 out of 5 stars based on more than 200 reviews."
                            },
                            "nuggetBadges": [],
                            "ratingBadge": {
                                "textFormat": "\u003Cspan\u003E\u003Cspan style=\"font-family:S1;color:#3a3a48;\"\u003E4.4 \u003Cimg src=\"https://d1a3f4spazzrp4.cloudfront.net/static/images/Star_Black_Eats_3.png\" width=\"14\" height=\"14\" vertical-align=\"middle\"/\u003E \u003C/span\u003E\u003Cspan style=\"font-family:S1;color:#A4A4AC;\"\u003E(50+)\u003C/span\u003E\u003C/span\u003E",
                                "accessibilityText": "Rated 4.4 out of 5 stars based on more than 200 reviews."
                            },
                            "taglineBadge": {"textFormat": "\u003Cspan\u003E€ • Hamburgers • Fastfood • Diner\u003C/span\u003E"},
                            "etaBadge": {
                                "textFormat": "\u003Cspan\u003E15–25 Mins\u003C/span\u003E",
                                "accessibilityText": "Delivered in 15 to 25 Mins"
                            }
                        },
                        "rawRatingStats": {"storeRatingScore": 4.421800947867299},
                        "publicContact": {"publicPhoneNumber": "+31206224087"},
                        "holidayHoursMap": {},
                        "sectionHoursInfo": [{
                            "dayRange": "Every day",
                            "sectionHours": [{
                                "startTime": 660,
                                "endTime": 1380,
                                "title": "Lunch & Diner (Nederlands)"
                            }, {"startTime": 660, "endTime": 1380, "title": "Lunch & Dinner (English)"}]
                        }],
                        "currencyCode": "EUR",
                        "currencyNumDigitsAfterDecimal": 2,
                        "citySlug": "amsterdam",
                        "cityName": "Amsterdam"
                    }
                },
                "loaded": true,
                "loading": false,
                "requestedAt": 1531237103891,
                "successAt": 1531237104790,
                "id": {
                    "storeUuid": "4989e598-e5d5-4965-bcb7-3fbc38cdb931",
                    "targetDeliveryTimeRange": {},
                    "targetLocation": {
                        "latitude": 52.3702157,
                        "longitude": 4.895167900000001,
                        "reference": "ChIJVXealLU_xkcRja_At0z9AGY",
                        "type": "google_places",
                        "address": {"title": "Amsterdam", "address1": "Netherlands", "city": "Amsterdam"}
                    }
                }
            }
        }, "useMenuV2": false
    },
};

