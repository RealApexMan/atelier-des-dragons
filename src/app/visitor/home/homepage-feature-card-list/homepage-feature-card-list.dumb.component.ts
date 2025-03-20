import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { FeatureCardList } from './homepage-feature-card-list.interface';
import * as bootstrap from 'bootstrap';
import { marked } from 'marked';  // Importer la bibliothèque "marked"
import { DomSanitizer } from '@angular/platform-browser';


@Component({
    selector: 'app-homepage-feature-card-list',
    imports: [],
    templateUrl: './homepage-feature-card-list.dumb.component.html',
    styleUrl: './homepage-feature-card-list.dumb.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomepageFeatureCardListDumbComponent {

  constructor(private sanitizer: DomSanitizer) {}  // Injecter le sanitizer


  readonly featureCardList = input.required<FeatureCardList>();
  
  selectedFeature: any;
  sanitizedDescription: string = '';

  async updateDescription(markdown: string) {
    this.sanitizedDescription = await this.convertMarkdownToHtml(markdown);
  }
  
  openFullDescription(feature: any) {
    // Sélectionner la feature cliquée
    this.selectedFeature = feature;
    this.updateDescription(feature.description);
    // Vérifier si l'élément modal existe
    const modalElement = document.getElementById('featureModal');
    if (modalElement) {
      // Créer la modale
      const modal = new bootstrap.Modal(modalElement);
      modal.show();
    } else {
      console.error('Modal element not found!');
    }
  }

  async convertMarkdownToHtml(markdown: string): Promise<string> {
    const html = await marked.parse(markdown);  // Attendre la conversion du Markdown
    return this.sanitizer.bypassSecurityTrustHtml(html) as string;  // Sécuriser le HTML
  }
  
  
}