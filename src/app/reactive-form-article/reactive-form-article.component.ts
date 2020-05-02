import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form-article',
  templateUrl: './reactive-form-article.component.html',
  styleUrls: ['./reactive-form-article.component.css']
})
export class ReactiveFormArticleComponent implements OnInit {
  public form: FormGroup;
  public imageUrlList: FormArray;
  constructor(private fb: FormBuilder) {}
  addFilePost():FormGroup{
    return this.fb.group({
      url:[null,Validators.compose([Validators.required])]
    })
  }
  get imageUrlsGroup(){
    return this.form.get('imageUrls') as FormArray
  }
  initForm(){
    this.form = this.fb.group({
      posttitle: [null,Validators.compose([Validators.required])],
      postData: [null,Validators.compose([Validators.required])],
      imageUrls: this.fb.array([this.addFilePost()])
    });
    // set contactlist to this field
    this.imageUrlList = this.form.get('imageUrls') as FormArray;
  }
  ngOnInit() {
    this.initForm()
  }

  addImageUrl() {
    this.imageUrlList.push(this.addFilePost());
  }
  removeImageUrl(index:number) {
    this.imageUrlList.removeAt(index);
  }
  submit() {
    console.log(this.form.value);
  }
}
