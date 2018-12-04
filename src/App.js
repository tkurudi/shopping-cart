import React from "react";
import "./App.css";
import { Grid } from "react-bootstrap";
import Subtotal from "./components/Subtotal/Subtotal";
import PickupSavings from "./components/PickupSavings/PickupSavings";
import TaxesFees from "./components/TaxesFees/TaxesFees";
import EstimatedTotal from "./components/EstimatedTotal/EstimatedTotal";
import ItemDetails from "./components/ItemDetails/ItemDetails";
import PromoCodeDiscount from "./components/PromoCode/PromoCode";
import { connect } from "react-redux";
import { handleChange } from "./actions/promoCodeActions";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 100,
      PickupSavings: -3.85,
      taxes: 0,
      EstimatedTotal: 0,
      disablePromoButton: false
    };
  }
  componentDidMount = () => {
    this.setState(
      {
        taxes: (this.state.total + this.state.PickupSavings) * 0.0875
      },
      function() {
        this.setState({
          EstimatedTotal:
            this.state.total + this.state.PickupSavings + this.state.taxes
        });
      }
    );
  };
  giveDiscountHandler = () => {
    if (this.props.promoCode === "DISCOUNT")
      this.setState(
        {
          EstimatedTotal: this.state.EstimatedTotal * 0.9
        },
        function() {
          this.setState({
            disablePromoButton: true
          });
        }
      );
  };
  render() {
    return (
      <div className="container">
        <Grid className="purchas-card">
          <Subtotal price={this.state.total.toFixed(2)} />
          <PickupSavings price={this.state.PickupSavings} />
          <TaxesFees taxes={this.state.taxes.toFixed(2)} />
          <hr />
          <EstimatedTotal price={this.state.EstimatedTotal.toFixed(2)} />
          <ItemDetails
            price={this.state.EstimatedTotal.toFixed(2)}
            originalPrice={this.state.total.toFixed(2)}
          />
          <hr />
          <PromoCodeDiscount
            giveDiscount={() => this.giveDiscountHandler()}
            isDisabled={this.state.disablePromoButton}
          />
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  promoCode: state.promoCode.value
});

export default connect(
  mapStateToProps,
  { handleChange }
)(App);
