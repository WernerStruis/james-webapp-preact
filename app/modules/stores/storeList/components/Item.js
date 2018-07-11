import React from "react";
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

export default class Item extends React.PureComponent {

    _renderDeliveryInfo({isDelivery = true, deliveryCost, minimumDeliveryValue, deliveryTimeMinutes}) {
        return (
            <div className="delivery">
                <div className="open">
                    <span>Vanaf 15.00</span>
                </div>
                {(isDelivery && deliveryCost) && (<div className="deliveryFee">
                    <span><i className="glyphicon glyphicon-road"/> ${deliveryCost}</span>
                </div>)}
                {(isDelivery && deliveryTimeMinutes) && (< div className="deliveryTime">
                    <span><i className="glyphicon glyphicon-time"/> ca. {deliveryTimeMinutes}min</span>
                </div>)}
                {(isDelivery && minimumDeliveryValue) && (<div className="deliveryMin">
                    <span><i className="glyphicon glyphicon-euro"/> Min. ${minimumDeliveryValue}</span>
                </div>)}

            </div>
        )
    };

    _renderDistanceField(distance) {
        const distanceKM = Math.floor(distance / 1000);
        let distanceText = `${distanceKM <= 0 ? "< 1" : distanceKM} KM`;

        return (
            <div className="distance">
                <span>Afstand: <span className="badge">{distanceText}</span></span>
            </div>
        )
    }

    render() {
        const {item: {id, name, slug, distance, image, delivery}} = this.props;
        console.log(this.props.item);

        return (
            <Link to={`/restaurants/${id}`}>
                <div className="listItem">
                    <div className="col-md-4 itemLogo">
                        <div className="logoInner">
                            {image && (
                                <img
                                    className="Logo"
                                    src={image.url}
                                    alt={image.alt}
                                />
                            )}

                        </div>
                    </div>
                    <div className="col-md-8 itemDetails">
                        <h2 className="name">{name}</h2>
                        {
                            this._renderDistanceField(distance)
                        }
                        <div className="kitchens">
                            <span>Italiaanze pizza, Turkse pizza, Shoarma</span>
                        </div>
                        {
                            this._renderDeliveryInfo(delivery)
                        }
                    </div>

                    <div className="selectChevron hidden-xs">
                        <span className="selectBtn glyphicon glyphicon-chevron-right"/>
                    </div>

                </div>
            </Link>
        )
    }
};

Item.propTypes = {
    item: PropTypes.shape({}).isRequired,
};