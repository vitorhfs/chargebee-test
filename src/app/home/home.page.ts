/* eslint-disable @typescript-eslint/naming-convention */
import { AfterViewInit, Component } from '@angular/core';
// eslint-disable-next-line no-var
declare var Chargebee;
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements AfterViewInit {
  constructor() {}

  ngAfterViewInit() {
    Chargebee.registerAgain();
  }

  openCheckout() {
    Chargebee.registerAgain();
    const customer = {
      // eslint-disable-next-line @typescript-eslint/naming-convention
      first_name: `string`,
      phone: `+5541999999999`,
      email: `asd@asd.com`,
    };

    const cbInstance = Chargebee.getInstance();
    const cart = cbInstance.getCart();
    const planPriceId = 'WeightLoss-Coaching-Subscription-EUR-Monthly';
    const planPriceQuantity = 1;
    const product = cbInstance.initializeProduct(planPriceId, planPriceQuantity);
    cart.replaceProduct(product);
    cart.setCustomer(customer);
    cart.proceedToCheckout();
  }
}
