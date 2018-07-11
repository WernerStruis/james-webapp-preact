import React from 'react';
import {withCookies} from 'react-cookie';
import GeoService from 'lib/geoService';
import LocationInput from 'components/locationInput';
import Logo from 'assets/images/logo.svg';

class CtaForm extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            searchValue: props.cookies.get('searchString') || ''
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
            <div className="order-cta">
                <div className="container">
                    <div className="cta">
                        <div className="heading">
                            <img src={Logo} alt="JAMES Logo" className="logo"/>
                            <h2 className="title">
                                At your service.
                            </h2>
                        </div>
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
                </div>
            </div>
        )
    }
}

export default CtaForm;