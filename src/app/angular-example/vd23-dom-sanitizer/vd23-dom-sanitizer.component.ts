import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { SafeHtmlPipe } from './safe-html.pipe';

@Component({
  selector: 'app-vd23-dom-sanitizer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './vd23-dom-sanitizer.component.html',
  styleUrls: ['./vd23-dom-sanitizer.component.scss']
})
export class Vd23DomSanitizerComponent implements OnInit {
  htmlCode = `<button type="button" onclick="alert('Clicked!')">Click!</button>`;

  sanitizedHtmlCode!: SafeHtml;

  constructor(private sanitizedSvc: DomSanitizer) { }

  ngOnInit(): void {
    this.sanitizedHtmlCode = this.sanitizedSvc.bypassSecurityTrustHtml(this.htmlCode);
  }
}
