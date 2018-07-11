export default class GeoService {
    constructor() {
        if (!window.google) {
            throw new Error("Google Maps Javascript API libary must be loaded")
        }

        if (!window.google.maps.places) {
            throw new Error("Google Maps Places Libary must be loaded")
        }

        this.autocompleteService = new window.google.maps.places.AutocompleteService();
        this.geoCoderService = new window.google.maps.Geocoder();
    }

    getPredictions (query) {
        return new Promise((resolve, reject) => {
            this.autocompleteService.getPlacePredictions({
                input: query,
                types: ["geocode", "establishment"],
                componentRestrictions: {
                    country: "nl"
                }
            }, (predictions, status ) => {
                if (status !== 'OK') {
                    return reject(status);
                }

                const filteredPredictions = predictions.filter(
                    p => !p.types.includes('political')
                ).map(p => p.description.split(', Nederland')[0]);

                resolve(filteredPredictions);
            })
        })
    }

    geoCode (type, query) {
        return new Promise((resolve, reject) => {
            this.geoCoderService.geocode({[`${type}`]: query}, (result, status) => {
                if(status !== "OK"){
                    return reject(status)
                };
                resolve(result);
            })
        })
    }

    static getAddressComponent(components, type) {
        return components.find(c => c.types.includes(type)).long_name;
    }

    static getLatLng(location) {
        return {
            lat: location.lat(),
            lng: location.lng()
        }
    }

}