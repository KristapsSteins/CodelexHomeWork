import { Component } from "@angular/core";

interface Service {
  name: string;
  price: number;
  selected: boolean;
}

@Component({
    selector: "app-homepage",
    templateUrl: "./homepage.component.html",
    styleUrls: ["./homepage.component.scss"],
})
export class HomepageComponent {
    services: Service[] = [
        { name: "Web Development", price: 300, selected: false },
        { name: "Design", price: 400, selected: false },
        { name: "Integration", price: 250, selected: false },
        { name: "Training", price: 220, selected: false },
        { name: "Training", price: 220, selected: false },
        { name: "Training", price: 220, selected: false },
        { name: "Training", price: 220, selected: false },
        { name: "Training", price: 220, selected: false },
        { name: "Training", price: 220, selected: false },
        { name: "Training", price: 220, selected: false },
        { name: "Training", price: 220, selected: false },
        { name: "Training", price: 220, selected: false },
        { name: "Training", price: 220, selected: false },
        { name: "Training", price: 220, selected: false },
        { name: "Training", price: 220, selected: false },
        { name: "Training", price: 220, selected: false },
        
    ];
    total = 0;

    toggleService(index: number) { {
        if (index >= 0) {
            if (this.services[index].selected) {
                this.services[index].selected = false;
                this.total -= this.services[index].price;
            } else {
                this.services[index].selected = true;
                this.total += this.services[index].price;
            }
        }
    }
}
}