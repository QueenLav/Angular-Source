import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-send-email',
  templateUrl: './send-email.component.html',
  styleUrls: ['./send-email.component.scss']
})
export class SendEmailComponent implements OnInit {

  config: any = {
    height: 250,
    // theme: "modern",
    // powerpaste advcode toc tinymcespellchecker a11ychecker mediaembed linkchecker help
    plugins:
      'print preview fullpage searchreplace autolink directionality visualblocks visualchars fullscreen image imagetools link media template codesample table charmap hr pagebreak nonbreaking anchor insertdatetime advlist lists textcolor wordcount contextmenu colorpicker textpattern',
    toolbar:
      'formatselect | bold italic strikethrough forecolor backcolor | link | alignleft aligncenter alignright alignjustify  | numlist bullist outdent indent  | removeformat',
    image_advtab: true,
    imagetools_toolbar:
      'rotateleft rotateright | flipv fliph | editimage imageoptions',
    templates: [
      { title: 'Test template 1', content: 'Test 1' },
      { title: 'Test template 2', content: 'Test 2' },
    ],
    content_css: [
      '//fonts.googleapis.com/css?family=Lato:300,300i,400,400i',
      '//www.tinymce.com/css/codepen.min.css',
    ],
    setup: (editor) => {
      console.log(editor.ui);
    },
  };
  html:string='';


  constructor() { }

  ngOnInit(): void {
  }

}
