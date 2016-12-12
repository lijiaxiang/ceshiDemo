//
//  XXView.m
//  ceshiDemo
//
//  Created by XXViper on 16/11/24.
//  Copyright © 2016年 Facebook. All rights reserved.
//

#import <MapKit/MapKit.h>
#import "RCTViewManager.h"
#import "XXTableView.h"

@interface RCTMapViewManager : RCTViewManager <UITableViewDelegate,UITableViewDataSource,UITextFieldDelegate>
@property (nonatomic, strong) XXTableView *tableView;
@end

@implementation RCTMapViewManager
RCT_EXPORT_MODULE()
- (UIView *)view
{
//  UIView *view = [[UIView alloc] init];
//  view.backgroundColor = [UIColor yellowColor];
//  
////  view.contentMode = UIViewContentModeScaleAspectFill;
//  self.view = view;
//  return self.view;
  XXTableView *tableView = [[XXTableView alloc] init];
  self.tableView = tableView;
  tableView.delegate = self;
  tableView.dataSource = self;
  return self.tableView;
  
}

- (NSInteger)tableView:(UITableView *)tableView numberOfRowsInSection:(NSInteger)section{
  return 200;
}
- (UITableViewCell *)tableView:(UITableView *)tableView cellForRowAtIndexPath:(NSIndexPath *)indexPath{
  UITableViewCell *cell = [UITableViewCell new];
  cell.backgroundColor = [UIColor colorWithRed:arc4random_uniform(255)/255.0 green:arc4random_uniform(255)/255.0 blue:arc4random_uniform(255)/255.0 alpha:1];
  
  UIImageView *imgView = [UIImageView new];
  imgView.frame = CGRectMake(10, 10, 40, 40);
  imgView.image = [UIImage imageNamed:@"contribute"];
  [cell addSubview:imgView];
  
  UITextField *textField = [UITextField new];
  textField.frame = CGRectMake(60, 10, 200, 30);
  textField.delegate = self;
  textField.text = [NSString stringWithFormat:@"我是第 %tu 个cell",indexPath.row];
  [cell addSubview:textField];
  
  return cell;
}
- (CGFloat)tableView:(UITableView *)tableView heightForRowAtIndexPath:(NSIndexPath *)indexPath{
  return 60;
}
-(BOOL)textFieldShouldReturn:(UITextField *)textField
{
  [textField resignFirstResponder];
  return YES;
}
@end
