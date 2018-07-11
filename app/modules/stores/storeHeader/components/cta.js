import React from 'react';
import {withCookies} from 'react-cookie';
import GeoService from 'lib/geoService';
import LocationInput from 'components/locationInput';
import Logo from 'assets/images/logo.svg';

class CtaForm extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            searchValue: props.searchValue
        }
    }

    componentDidMount() {
        this.geoService = new GeoService();
    }

    onInputValueChange(value) {
        this.setState({
            searchValue: value
        });
    }

    onSubmit(e) {
        console.log("Submit");
        e && e.preventDefault();
        console.log(this.state);
        const {searchValue} = this.state;
        this.geoService.geoCode('address', searchValue)
            .then(address => {
                const {lat, lng} = GeoService.getLatLng(address[0].geometry.location);
                this.props.handleSubmit({
                    searchInput: searchValue,
                    searchString: GeoService.getAddressComponent(address[0].address_components, 'postal_code'),
                    type: 'postcode',
                    lat: lat,
                    lng: lng
                })
            })
            .catch((e) => {
                console.log('error submitting form', e);
                return false;
            });
    }

    render() {
        return (
            <div className="cta">
                <form onSubmit={this.onSubmit.bind(this)}>
                    <div className="cta-form">
                        <LocationInput
                            onSubmit={this.onSubmit.bind(this)}
                            onChange={this.onInputValueChange.bind(this)}
                            size="lg"
                            initialValue={this.state.searchValue}
                        />
                    </div>
                </form>
            </div>
        )
    }
}

export default CtaForm;