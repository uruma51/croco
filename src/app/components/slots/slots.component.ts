import {Component, OnInit} from '@angular/core';
import {SlotsService} from "../../services/slots.service";

@Component({
  selector: 'app-slots',
  templateUrl: './slots.component.html',
  styleUrls: ['./slots.component.scss']
})
export class SlotsComponent implements OnInit {
  public slotCategoriesData: any[] = [];
  public slotProvidersData: any[] = [];
  public slotsData: any[] = [];
  public isActive: string | any
  public activeProvider: string = ''

  constructor(private slotService: SlotsService) {
  }


  ngOnInit(): void {
    this.getSlotsProvidersAndSlots();

  }

  private getSlotsProvidersAndSlots(): void {
    this.slotService.getSlotsProvaiders().subscribe((_) => {
      if (_.data) {
        this.slotProvidersData = _.data.slice(0, 5);
        this.isActive = _.data[0].name;
        this.slotsData = _.data[0].games;
      }
    })
    this.getSlotsCategories();
  }

  private getSlotsCategories(): void {
    this.slotService.getSlotsCategories().subscribe((_) => {

      this.slotCategoriesData = _.data.slice(0, 10)
    });
  }

  public chooseCategoryAndSlots(elementData: any): void {
    this.isActive = elementData.name;
    this.slotsData = elementData.games;
  }


  public selectCategory(category: any): void {
    this.slotService.getSlotsByProvider(category.provider).subscribe((_) => {
      this.slotsData = _.data.games;
      this.activeProvider = _.data.provider
    })
  }
}
