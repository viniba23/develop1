import { Component, Input, Output, EventEmitter } from '@angular/core';

interface TableItem {
  showDialog: boolean ;
  id: number;
  name: string;
  enabled: boolean;
  stars: string[];
}

@Component({
  selector: 'app-table-checking',
  templateUrl: './table-checking.component.html',
  styleUrls: ['./table-checking.component.css']
})
export class TableCheckingComponent {

  isVisible: boolean = false;
  showModal: boolean = false;
  selectedValue: boolean | null = null;
  isChecked: boolean = false;
  
  
  items: TableItem[] = [
    { id: 1, name: 'John', enabled: false, stars: ['☆', '☆', '☆', '☆', '☆'] , showDialog: false},
    { id: 2, name: 'Alice', enabled: false, stars: ['☆', '☆', '☆', '☆', '☆'],showDialog: false },
    { id: 3, name: 'Bob', enabled: false, stars: ['☆', '☆', '☆', '☆', '☆'] ,showDialog: false},
    { id: 4, name: 'Rose', enabled: false, stars: ['☆', '☆', '☆', '☆', '☆'],showDialog: false },
    { id: 5, name: 'Christy', enabled: false, stars: ['☆', '☆', '☆', '☆', '☆'],showDialog: false},
    { id: 6, name: 'Harry', enabled: false, stars: ['☆', '☆', '☆', '☆', '☆'],showDialog: false },
    { id: 7, name: 'David', enabled: false, stars: ['☆', '☆', '☆', '☆', '☆'],showDialog: false },
    // Add other items as needed
  ];

  // isCheckboxEnabled(index: number): boolean {
  //   return this.items[index].enabled;
  // }

  // selectRow(event: any, index: number) {
  //   const isChecked = event.target.checked;
  //   if (isChecked) {
  //     this.items[index].enabled = true;
  //   } else {
  //     this.items[index].enabled = false;
  //   }
  // }

  selectAll(event: any) {
    const enableAll = event.target.checked;
    this.items.forEach(item => (item.enabled = enableAll));
  }


  rate(rowIndex: number, starIndex: number) {
    const row = this.items[rowIndex];
    row.stars = row.stars.map((star, index) =>
      index <= starIndex ? '★' : '☆'
    );
  }

  // toggleModal() {(click)="toggleModal()"
  //   this.isVisible = !this.isVisible; // Toggle the visibility of the modal
  // }

  toggleModal(event: Event) {
    const checkbox = event.target as HTMLInputElement;
  
    if (checkbox.checked) {
      this.isVisible = true; // Show the modal if checkbox is checked
    } else {
      this.isVisible = false; // Hide the modal if checkbox is unchecked
    }
  }

  selectTrue() {
    this.selectedValue = true;
  }

  selectFalse() {
    this.selectedValue = false;
  }

  checkboxChanged(event: Event) {
    this.isChecked = (event.target as HTMLInputElement).checked; // Update isChecked based on checkbox state
  }

  
  // @Input() maxStars: number = 5; // Define the maximum number of stars
  // @Input() initialRating: number = 0; // Default initial rating
  // @Output() ratingUpdated = new EventEmitter<number>();

  // stars: string[] = [];

  // ngOnInit() {
  //   this.generateStars();
  // }

  // generateStars() {
  //   for (let i = 0; i < this.maxStars; i++) {
  //     if (i < this.initialRating) {
  //       this.stars.push('&#9733;'); // Unicode for filled star
  //     } else {
  //       this.stars.push('&#9734;'); // Unicode for empty star
  //     }
  //   }
  // }

  // rate(index: number) {
  //   this.initialRating = index;
  //   this.stars = [];
  //   this.generateStars();
  //   this.ratingUpdated.emit(this.initialRating);
  // }

  close() {
         this.isVisible=false;
       }


}
