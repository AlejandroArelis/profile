import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TipComponent } from './components/tip/tip.component';
import { FormsModule } from '@angular/forms';
import { FilePath } from './interfaces/file-paths';
import { MEGAPATHS_ACTIVOS, MEGAPATHS_INACTIVOS } from './data/paths.data';
import {MatTreeFlatDataSource, MatTreeFlattener, MatTreeModule} from '@angular/material/tree';
import { MatIconModule } from '@angular/material/icon';
import {FlatTreeControl} from '@angular/cdk/tree';

interface ExampleFlatNode {
  expandable: boolean;
  name: string;
  level: number;
}

interface FoodNode {
  name: string;
  children?: FoodNode[];
}

@Component({
  selector: 'app-pruebas',
  standalone: true,
  templateUrl: './pruebas.component.html',
  styleUrls: ['./pruebas.component.scss'],
  imports: [CommonModule, TipComponent, FormsModule, MatTreeModule, MatIconModule]
})
export class PruebasComponent implements OnInit {

  private _transformer = (node: FoodNode, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      level: level,
    };
  };

  treeControl = new FlatTreeControl<ExampleFlatNode>(
    node => node.level,
    node => node.expandable,
  );

  treeFlattener = new MatTreeFlattener(
    this._transformer,
    node => node.level,
    node => node.expandable,
    node => node.children,
  );

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  hasChild = (_: number, node: ExampleFlatNode) => node.expandable;
  
  ngOnInit(): void {
    this.dataSource.data = this.convertToFilePathArray(MEGAPATHS_ACTIVOS);
    console.log(this.convertToFilePathArray(MEGAPATHS_INACTIVOS));
    console.log(this.convertToFilePathArray(MEGAPATHS_ACTIVOS));
  }

  private convertToFilePathArray(paths: string[]): FilePath[] {
    const root: FilePath = new FilePath('/', '/');

    for (const path of paths) {
      const pathParts = path.split('/');
      let currentParent = root;

      for (let i = 0; i < pathParts.length; i++) {
        const pathPart = pathParts[i];

        // Verificar si el nodo ya existe en currentParent.children
        const existingNode = currentParent.children?.find((node) => node.name === pathPart);
        if (!existingNode) {
          // Si el nodo no existe, crear uno nuevo
          const newPath = currentParent.id === '/' ? pathPart : `${currentParent.id}/${pathPart}`;
          const newNode = new FilePath(newPath, i === pathParts.length - 1 ? pathPart : '');
          if (!currentParent.children) {
            currentParent.children = [];
          }
          currentParent.children.push(newNode);
          currentParent = newNode;
        } else {
          // Si el nodo existe, continuar con su children
          currentParent = existingNode;
        }
      }
    }

    return [root];
  }

}
