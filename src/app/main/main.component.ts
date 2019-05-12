import { Component, OnInit, Injectable } from '@angular/core';
import {Router} from '@angular/router';
import {NestedTreeControl} from '@angular/cdk/tree';
import {MatTreeNestedDataSource} from '@angular/material/tree';
import {BehaviorSubject} from 'rxjs';
import {AppSharedVariableService} from '../app-shared-variable.service';
export class FileNode {
  children: FileNode[];
  filename: string;
  type: any;
}
// const TREE_DATA = JSON.stringify(AppSharedVariableService.navData);

@Injectable()
export class FileDatabase {
  dataChange = new BehaviorSubject<FileNode[]>([]);

  get data(): FileNode[] { return this.dataChange.value; }
  constructor(private appSharedVariableService: AppSharedVariableService) {
    this.initialize(appSharedVariableService);
  }
  initialize(appSharedVariableService) {
    // Parse the string to json object.
    const dataObject = JSON.parse(JSON.stringify(appSharedVariableService.navData));

    // Build the tree nodes from Json object. The result is a list of `FileNode` with nested
    //     file node as children.
    const data = this.buildFileTree(dataObject, 0);

    // Notify the change.
    this.dataChange.next(data);
  }

  /**
   * Build the file structure tree. The `value` is the Json object, or a sub-tree of a Json object.
   * The return value is the list of `FileNode`.
   */
  buildFileTree(obj: object, level: number): FileNode[] {
    return Object.keys(obj).reduce<FileNode[]>((accumulator, key) => {
      const value = obj[key];
      const node = new FileNode();
      node.filename = key;

      if (value != null) {
        if (typeof value === 'object') {
          node.children = this.buildFileTree(value, level + 1);
        } else {
          node.type = value;
        }
      }
      return accumulator.concat(node);
    }, []);
  }
}


/**
 * 主体组件
 */
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  providers: [FileDatabase]
})
export class MainComponent implements OnInit {

  /**
   * 初始化
   */
  nestedTreeControl: NestedTreeControl<FileNode>;
  nestedDataSource: MatTreeNestedDataSource<FileNode>;
  navStatus: string;
  navData = [
    {
      firstLevelMenu: '系统管理',
      firstLevelSubmenu: [
        {
          label: '后台用户管理',
          link: '/app/user'
        },
        {
          label: '角色管理',
          link: '/app/home'
        },
        {
          label: '菜单管理',
          link: '/app/user'
        }
      ]
    }
  ];
  constructor(private _router: Router, database: FileDatabase, private appSharedVariableService: AppSharedVariableService) {
    this.nestedTreeControl = new NestedTreeControl<FileNode>(this._getChildren);
    this.nestedDataSource = new MatTreeNestedDataSource();
    database.dataChange.subscribe(data => this.nestedDataSource.data = data);
    console.log(this.nestedDataSource.data, appSharedVariableService.navStatus);
  }
  ngOnInit() {
  }
  itemEvent(event): any {
    console.log(event);

  }
  signOut(): void {
    console.log(this._router);
    this._router.navigate(['/login'], { replaceUrl: true });
  }
  handleHelper(item): any {
    console.log(item.type);
    if (item.type) {
      this._router.navigate([item.type]);
      this.appSharedVariableService.navStatus = item.type;
      this.navStatus = this.appSharedVariableService.navStatus;
      console.log(this.navStatus);
    }
  }
  hasNestedChild = (_: number, nodeData: FileNode) => !nodeData.type;

  private _getChildren = (node: FileNode) => node.children;
}


