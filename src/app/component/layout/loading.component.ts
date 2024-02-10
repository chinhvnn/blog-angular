import { CommonModule } from '@angular/common'
import { Component, Input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'loading',
  imports: [CommonModule],
  template: `<div
    class="page-loading absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
    *ngIf="isLoading"
  >
    <svg
      class="animate-spin h-8 w-8"
      height="200px"
      width="200px"
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 496 496"
      xml:space="preserve"
      fill="#000000"
    >
      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
      <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
      <g id="SVGRepo_iconCarrier">
        <circle style="fill: #383a39" cx="248" cy="24" r="24"></circle>
        <circle style="fill: #eceeee" cx="248" cy="472" r="24"></circle>
        <circle style="fill: #77807f" cx="136" cy="53.6" r="24"></circle>
        <path
          style="fill: #f2f4f4"
          d="M380.8,430.4c6.4,11.2,2.4,25.6-8.8,32.8c-11.2,6.4-25.6,2.4-32.8-8.8c-6.4-11.2-2.4-25.6,8.8-32.8 C359.2,415.2,374.4,419.2,380.8,430.4z"
        ></path>
        <path
          style="fill: #9faaa9"
          d="M65.6,115.2c11.2,6.4,15.2,20.8,8.8,32.8c-6.4,11.2-20.8,15.2-32.8,8.8c-11.2-6.4-15.2-20.8-8.8-32.8 S54.4,108.8,65.6,115.2z"
        ></path>
        <path
          style="fill: #f2f7f7"
          d="M454.4,339.2c11.2,6.4,15.2,20.8,8.8,32.8c-6.4,11.2-20.8,15.2-32.8,8.8 c-11.2-6.4-15.2-20.8-8.8-32.8C428,336.8,442.4,332.8,454.4,339.2z"
        ></path>
        <circle style="fill: #b2bbba" cx="24" cy="248" r="24"></circle>
        <circle style="fill: #ffffff" cx="472" cy="248" r="24"></circle>
        <path
          style="fill: #c5cccb"
          d="M41.6,339.2c11.2-6.4,25.6-2.4,32.8,8.8c6.4,11.2,2.4,25.6-8.8,32.8c-11.2,6.4-25.6,2.4-32.8-8.8 S30.4,346.4,41.6,339.2z"
        ></path>
        <path
          d="M430.4,115.2c11.2-6.4,25.6-2.4,32.8,8.8c6.4,11.2,2.4,25.6-8.8,32.8c-11.2,6.4-25.6,2.4-32.8-8.8 C415.2,136.8,419.2,121.6,430.4,115.2z"
        ></path>
        <path
          style="fill: #d9dddd"
          d="M115.2,430.4c6.4-11.2,20.8-15.2,32.8-8.8c11.2,6.4,15.2,20.8,8.8,32.8c-6.4,11.2-20.8,15.2-32.8,8.8 C112.8,456,108.8,441.6,115.2,430.4z"
        ></path>
        <path
          style="fill: #111111"
          d="M339.2,41.6c6.4-11.2,20.8-15.2,32.8-8.8c11.2,6.4,15.2,20.8,8.8,32.8c-6.4,11.2-20.8,15.2-32.8,8.8 C336.8,68,332.8,53.6,339.2,41.6z"
        ></path>
      </g>
    </svg>
  </div>`,
})
export default class Loading {
  @Input() isLoading = false
}
