import { Injectable } from '@angular/core';

@Injectable()
export class AppSharedVariableService {
  navStatus = 'hoome';
  navData: any = {
    评论管理: {
      评论管理: ''
    },
    文章管理系统: {
      发布文章: '/app/addArticle',
      文章管理: '/app/article'
    },
    系统管理: {
      后台用户管理: '/app/user',
      角色管理: '/app/home',
      修改个人资料: '/app/personalInfo',
      修改密码: '/app/changePassword'
    },
    Downloads: {
      October: '',
      November: '',
      Tutorial: ''
    },
    行政人事管理系统: {
      病人管理: {
        病人管理: ''
      },
      病历管理: {
        病历管理: ''
      },
      护理管理: {
        病人管理: ''
      },
      随访管理: {
        护理管理: ''
      },
      健康宣教: {
        健康宣教: ''
      }
    },
    教育管理系统: {
      病人管理: {
        病人管理: ''
      },
      病历管理: {
        病历管理: ''
      },
      护理管理: {
        病人管理: ''
      },
      随访管理: {
        护理管理: ''
      },
      健康宣教: {
        健康宣教: ''
      }
    },
    医院系统管理: {
      病人管理: {
        病人管理: ''
      },
      病历管理: {
        病历管理: ''
      },
      护理管理: {
        病人管理: ''
      },
      随访管理: {
        护理管理: ''
      },
      健康宣教: {
        健康宣教: ''
      }
    }
  };
  constructor() {
    console.log(location);
  }
}
